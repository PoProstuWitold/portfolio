---
title: 'JWT vs. sessions'
description: 'An in-depth comparison of two common authentication methods for web applications.'
authors:
  - Witold Zawada
socialImage: images/blog/jwt-vs-session.webp
date: '2025-03-23 22:00'
tags:
  - Auth
  - Web
  - Sessions
  - JWT
---

# Why does authentication strategy matter?

Keeping users logged in is a key part of almost every web app. But how exactly does that work behind the scenes? Two common approaches are session-based authentication and token-based authentication using JWTs (JSON Web Tokens).

In this post, I will explain how they work, compare their pros and cons, and help you decide which one fits your project.

---

# The basics
When a user logs in, you want to remember them between requests. Authentication mechanisms keep track of who the user is after login without asking for a password every time.

A reliable authentication flow matters for both user experience and security.

So how should you approach this? How can your app remember who's logged in and who isn't?

There are two popular ways to handle that:
- **Sessions**, where the **server** stores who you are
- **JWTs (JSON Web Tokens)**, where the **client** presents a signed token containing claims

---

# What is session-based authentication?
When a user logs in, the server creates a session in a database or in memory and sends back a small cookie with a session ID. That ID is used on each request to find the corresponding session data on the server.

## How session-based authentication works step by step
### **1. User sends login request**

The user submits a login request to the server. It can be a classic credentials-based `/signin` request or a login flow through an identity provider such as GitHub or Google. Account registration through a route such as `/signup` is a separate step, although an application may sign the user in immediately afterward.

### **2. Server verifies credentials**

The backend checks if the user is legitimate.
- In traditional auth, it compares the provided credentials (like email and password) to the data stored in the database.
- In an OpenID Connect flow, it validates the identity token received from the provider and may fetch user information to link or create a local account.

### **3. Server creates session**

If the credentials are valid, the server creates a session record - usually a unique ID mapped to data such as a user ID. This session is stored **on the server**, either in memory or in a shared store such as Redis or PostgreSQL.

### **4. Server sets a session cookie**

The server responds by sending a `cookie` containing the session ID. This cookie is automatically stored in the user's browser.

> **Cookies** are small pieces of data stored by the browser that can be configured to improve security and control how they're shared between the client and the server.

Typical cookie settings include these flags for safety:
- **`HttpOnly`**: makes the cookie inaccessible to JavaScript (for example, `document.cookie`), reducing the risk of token theft through XSS.
- **`Secure`**: ensures the cookie is sent only over HTTPS connections.
- **`SameSite`**: controls whether cookies are sent with cross-site requests, helping prevent CSRF attacks. It can be set to `Strict`, `Lax`, or `None`.

In this model, the cookie holds only the session ID, not the associated user data.

### **5. User makes a request with the cookie**

On each subsequent request, the browser automatically includes the cookie in the request headers - **but only if everything is configured properly**.

To make this work across origins:
- The **server** must set the cookie with suitable options (for example, `HttpOnly`, `Secure`, and `SameSite`) and return `Access-Control-Allow-Credentials: true` with a specific allowed origin.
- The **client** must opt in to credentials. With `fetch`, use `credentials: 'include'`; Axios uses `withCredentials: true`.

> **CORS (Cross-Origin Resource Sharing)** is a mechanism that allows a web application on one origin to request resources from another. Credentialed requests require explicit permission from the server and cannot use a wildcard allowed origin.

Otherwise, the cookie might not be sent at all, especially in cross-origin requests.

### **6. Server reads the session ID from the cookie**

The backend extracts the session ID from the request, finds the matching session stored on the server, and identifies the user.

### **7. Access granted**

The user is now authenticated. Authorization checks still determine which protected routes or resources they can access. The session remains usable until one of the following happens:
- The session expires after a set time.
- The session is manually destroyed by the server.
When that happens, the cookie points to a non-existent session and the user is no longer authenticated.

## Pros and cons of sessions

### Pros
- 🔐 Easy to revoke: delete the session on the server.
- ✅ Sensitive session data remains on the server.
- 🧹 The server controls the session lifecycle.

### Cons
- 🐘 Multiple application instances need a shared session store or another coordination strategy.
- 📦 The backend needs somewhere to store session data.

---

# What is token-based authentication?
A JWT, or JSON Web Token, is a compact set of claims that can be signed with a secret or private key and sent to the client after login. The client includes it with each request, usually in the `Authorization` header. A signed JWT is not encrypted: its payload can be read, while its signature lets the server detect modification.

> **Tip:** You can visit the [**jwt.io debugger**](https://jwt.io/) to inspect how JWTs are structured. Do not paste real credentials or production tokens into third-party tools.

## How token-based authentication works step by step

### **1. User sends login request**

The user submits a login request to the server. It can be a classic credentials-based `/signin` request or a login flow through an identity provider such as GitHub or Google. Account registration through a route such as `/signup` is a separate step, although an application may sign the user in immediately afterward.

### **2. Server verifies credentials**

The backend checks if the user is legitimate.
- In traditional auth, it compares the provided credentials (like email and password) to the data stored in the database.
- In an OpenID Connect flow, it validates the identity token received from the provider and may fetch user information to link or create a local account.

### **3. Server generates a token**

If authentication is successful, the server generates a **JWT** - a signed token that contains claims such as a user ID, roles, and an expiration time.

The token is signed with a secret or private key. A valid signature makes unauthorized changes detectable, but it does not hide the payload.

### **4. Server sends the token to the client**

The server sends the token in the response body (usually as JSON).
The client stores it - commonly in `localStorage`, `sessionStorage`, or an in-memory variable.

> ⚠️ Storing tokens in `localStorage` exposes them to any script that executes in the page. An `HttpOnly` cookie prevents JavaScript from reading the token, although cookie-based authentication also requires appropriate CSRF protection.


### **5. Client makes requests with the token**

On each subsequent request, the client includes the token - typically in the `Authorization` header using the `Bearer` scheme:

```http
Authorization: Bearer <your_token_here>
```

This tells the server who the user is.


### **6. Server verifies the token**

The backend checks if:
- The signature is valid for an explicitly allowed algorithm.
- The token has not expired.
- Relevant claims such as issuer, audience, and not-before time are valid.
If it all checks out, the server extracts user data from the token and treats the request as authenticated.

### **7. Access granted**

The token now provides proof of authentication while it is valid. The server must still authorize access to each protected route or resource.

When the token expires:
- The user must log in again,
- Or (in more advanced setups) use a **refresh token** to get a new access token.

---

## Pros and cons of tokens

### Pros
- ⚡ Access-token verification can be stateless.
- 🌍 Bearer tokens work with APIs, mobile apps, and non-browser clients.
- 📤 Signed claims can be verified by multiple services that share the necessary key material.

### Cons
- ⚡ Stateless access tokens are harder to revoke before they expire.
- 🔓 Insecure client storage can expose tokens.
- 📈 The token is larger than an opaque session ID because it carries claims and a signature.


---

## JWT and statelessness

Unlike a session ID, a JWT can carry the claims needed to verify an access request without looking up a server-side session. The server may still store user records, refresh tokens, revocation state, or other application data. JWTs can simplify some distributed architectures, but they are not required for horizontal scaling.

However, this stateless nature also means that **revoking** a JWT, for example after logout or token theft, is not straightforward.
To handle this, you need a strategy for managing token invalidation.

Here are the most common approaches:

---

### **Short expiration time + refresh tokens**

Instead of trying to revoke access tokens, you make them expire quickly (for example, in 15 minutes) and issue a longer-lived **refresh token** that can request a new access token.

- Access tokens: short-lived
- Refresh tokens: stored securely, preferably in an `HttpOnly` cookie
- You can revoke refresh tokens on logout

This is a common approach, but refresh-token rotation and reuse detection need careful implementation.

---

### **Token blacklist**

The server keeps a list (in memory or database) of **revoked tokens**.

- Each time a request is made, the server checks if the token is on the blacklist
- Blacklist entries expire when the token would have expired

**Downside:** Makes the system stateful and adds overhead to each request.

---

### **Token versioning**

Store a `tokenVersion` (or similar) field in the user's database record.

- The JWT includes this version number as a claim
- On each authenticated request, compare the claim with the current value in the database and reject mismatches.

You can revoke all tokens for a user by incrementing the version in the database, for example after a password change. This approach deliberately adds a server-side lookup to authenticated requests.

---

## Comparison

Let's compare both authentication methods side-by-side:

| Feature                    | Session-Based Auth                          | Token-Based Auth (JWT)                        |
|---------------------------|---------------------------------------------|-----------------------------------------------|
| 🔐 **Where data lives**    | On the server                               | On the client (inside the token)              |
| 🧠 **State**               | Stateful                                    | Stateless (unless using revocation strategy)  |
| 🔁 **Revocation**          | Simple (delete session)                     | Complex (requires custom strategy)            |
| 🌐 **Client support**      | Natural fit for browser cookies             | Natural fit for API and non-browser clients   |
| 🧩 **Payload size**        | Tiny (just an ID)                           | Larger (contains claims like ID, roles, etc.) |
| 📤 **How it's sent**       | Automatically via cookies                   | Usually `Authorization`; cookies are possible |
| 🛠️ **Setup complexity**    | Often supported directly by web frameworks | Requires explicit setup and storage decisions |
| ⚖️ **Horizontal scaling**  | Use a shared store or routing strategy      | Stateless verification is possible            |


---

# When should you choose each approach?

- Use **Sessions** if you're building a traditional server-rendered web app and want simple, secure authentication with minimal setup.
- Use **JWT** when portable bearer tokens or independently verifiable claims solve a concrete need across API clients or services.

---

# Final thoughts

There's no one-size-fits-all solution - both sessions and JWTs have strengths and trade-offs.
Sessions are straightforward and work well for many traditional web applications. JWTs offer portable claims, but require careful decisions about storage, validation, and revocation.

If you decide to go with JWT, here are some good practices to follow:

- ✅ **Keep JWTs short-lived** - access tokens should expire quickly (for example, 5-15 minutes).
- 🔁 **Use refresh tokens** to re-authenticate without logging in again.
- 🔒 **Choose storage deliberately** - `localStorage` is readable by injected scripts, while `HttpOnly` cookies need CSRF defenses.
- 🧾 **Don't put sensitive data inside the token** - only store what's truly needed.
- ✂️ **Implement token revocation** - via blacklists, versioning, or short TTLs.
- 🔐 **Allow only the intended algorithms and use appropriate keys** - do not trust the token header to select any algorithm.
- 📅 **Validate relevant claims** - commonly `exp`, `nbf`, `iss`, and `aud`.
- 🚫 **Don't rely on JWT alone for critical permissions** - always check user state server-side if needed.

> ⚠️ **That said...**
For many apps - especially traditional server-rendered ones - **sessions remain a simple, well-understood choice**. Their server-side lifecycle makes revocation straightforward, although they still require secure cookie and session-store configuration.

Use JWTs **only when they genuinely solve a problem in your architecture - not just because they are trendy**.

Happy coding!
