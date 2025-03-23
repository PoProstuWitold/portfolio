---
title: 'JWT vs Session'
description: 'In-depth comparison of two most popular auth methods in web apps.'
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

Keeping users logged in is a key part of almost every web app. But how exactly does that work behind the scenes? Two of the most common approaches are session-based authentication and token-based authentication using JWT (JSON Web Tokens). 

In this post, I will break down how they work, compare their pros and cons and help you decide which one fits your project best.

---

# The Basics
When a user logs in, you want to remember them between requests. That's what authentication mechanisms do - keep track of who the user is after they've logged in, without asking for their password every time.

Providing a smooth user experience - especially when it comes to authentication - is crucial. If it's clunky or unreliable, users might just leave your site in frustration. 

So how should you approach this? How can your app remember who's logged in and who isn't?

Well, there are two popular ways to handle that:
- **Sessions**, where the **server** stores who you are
- **JWT (JSON Web Tokens)**, where the **client** stores that info in a signed token

---

# What is session-based authentication?
When a user logs in, the server creates a session in a database or in memory and sends back a small cookie with a session ID. That ID is used on each request to find the session data on the server.

## How session-based authentication works step-by-step?
### **1. User sends login request** 

The user submits a login request to the server. It can be classic credentials-based `/signup` or `/signin` request, or an ``OAuth2`` login using a provider like GitHub or Google.

### **2. Server verifies credentials**

The backend checks if the user is legitimate.
- In traditional auth, it compares the provided credentials (like email and password) to the data stored in the database.
- In OAuth2, it validates the identity token or access token received from the third-party provider and may fetch user info to link or create a local account.

### **3. Server creates session**

If the credentials are valid, the server creates a ``session object`` - usually a unique ID mapped to some user data (like user ID). This session is stored **on the server** (in memory or database such as Redis or PostgreSQL).

### **4. Server sets a session cookie**

The server responds by sending a ``cookie`` containing the session ID. This cookie is automatically stored in the user's browser.

> **Cookies** are small pieces of data stored by the browser that can be configured to improve security and control how they're shared between the client and the server.

Typical cookie settings include these flags for safety:
- **``HttpOnly``**: makes the cookie inaccessible to JavaScript (e.g., ``document.cookie``), protecting against XSS attacks.
- **``Secure``**: ensures the cookie is only sent over HTTPS connections.
- **``SameSite``**: controls whether cookies are sent with cross-site requests, helping prevent CSRF attacks. It can be set to ``Strict``, ``Lax``, or ``None``.

The actual cookie **only holds the session ID** without the user's data.

### **5. User makes a request with the cookie**

On each subsequent request, the browser automatically includes the cookie in the request headers - **but only if everything is configured properly**.

To make this work:
- The **server** must respond with the cookie and set the proper options (e.g., ``HttpOnly``, ``Secure`` and ``SameSite``) and ``credentials: true``, if using **CORS**.
- The **client** (like ``fetch`` or ``axios``) must explicitly send cookies by using ``credentials: include``.

> **CORS (Cross-Origin Resource Sharing)** is a mechanism that allows web applications running on one domain to request resources from another domain. To allow cookies in such requests, the server must explicitly set ``Access-Control-Allow-Credentials: true`` and respond with the appropriate headers

> Additionally, the ``credentials`` option must be set on both the server and the client:
> - On the server, ``credentials: true`` (along with the ``Access-Control-Allow-Credentials: true`` header) allows cookies to be accepted in cross-origin requests.
> - On the client (e.g., with ``fetch`` or ``axios``), ``credentials: 'include'`` ensures cookies are sent with the request, even when calling a different origin.

Otherwise, the cookie might not be sent at all, especially in cross-origin requests.

### **6. Server reads the session ID from the cookie**

The backend extracts the session ID from the request, finds the matching session stored on the server and identifies the user.

### **7. Access granted**

The user is now authenticated and can access protected routes or resources - until one of the following happens:
- The session expires after a set time,
- The session is manually destroyed by the server.
When that happens, the cookie points to a non-existent session and the user is no longer authenticated.

## Pros & Cons of sessions

### Pros:
- 🔐 Easy to revoke sessions. Just delete the session on the server,
- ✅ Secure by default. User data stays on the server,
- 🧹 Simple cleanup. You control the data lifecycle.

### Cons:
- 🐘 Doesn't scale well without sticky sessions or shared storage,
- 📦 Adds another table/collection/state to your backend (you need to store session data somewhere).

---

# What is token-based authentication?
JWT or JSON Web Token it's a self-contained piece of data, signed with a secret (or private key) and sent to the client after login. The client includes it with each request, usually in the `Authorization` header.

> **TIP!** You can visit [**jwt.io online debugger**](https://jwt.io/) to see how JWT work

## How token-based authentication works step-by-step?

### **1. User sends login request** 

The user submits a login request to the server. It can be classic credentials-based `/signup` or `/signin` request, or an ``OAuth2`` login using a provider like GitHub or Google.

### **2. Server verifies credentials**

The backend checks if the user is legitimate.
- In traditional auth, it compares the provided credentials (like email and password) to the data stored in the database.
- In OAuth2, it validates the identity token or access token received from the third-party provider and may fetch user info to link or create a local account.

### **3. Server generates a token**

If authentication is successful, the server generates a **JWT** - a signed token that contains user-related data (like user ID, roles, expiry time, etc.).

This token is signed with a secret or private key, making it tamper-proof.

### **4. Server sends the token to the client**

The server sends the token in the response body (usually as JSON).  
The client stores it - commonly in `localStorage`, `sessionStorage`, or an in-memory variable.

> ⚠️ Storing tokens in `localStorage` can expose them to XSS attacks. In secure apps, use `HttpOnly` cookies instead.


### **5. Client makes requests with the token**

On each subsequent request, the client includes the token - typically in the `Authorization` header using the `Bearer` scheme:

```http
Authorization: Bearer <your_token_here>
```

This tells the server who the user is.


### **6. Server verifies the token**

The backend checks if:
- The token is valid (not tampered with),
- It hasn't expired,
- The signature matches the expected secret.
If it all checks out, the server extracts user data from the token and treats the request as authenticated.

### **7. Access granted**

The user now has access to protected routes or resources, as long as the token is valid.

When the token expires:
- The user must log in again,
- Or (in more advanced setups) use a **refresh token** to get a new access token.

---

## Pros & Cons of tokens

### Pros:
- ⚡ Stateless. No need to store anything server-side,
- 🌍 Works great with APIs and mobile apps,
- 📤 Easy to use across services.

### Cons:
- ⚡ Stateless. It's also a disadvantage because it's harder to revoke and require the use of ``refresh tokens``,
- 🔓 Can be risky if stored insecurely on the client,
- 📈 Larger payload (token carries user data).


---

## **JWT and Statelessness**

Unlike sessions, the server doesn't need to store any user data - all the necessary information is embedded inside the token itself.  
This makes token-based authentication **stateless** and highly scalable across distributed systems.

However, this stateless nature also means that **revoking** a JWT (e.g. after logout or token theft) is not straightforward.  
To handle this, you need a strategy for managing token invalidation.

Here are the most common approaches:

---

### 🔁 **Short expiration time + refresh tokens**

Instead of trying to revoke tokens, you make them expire quickly (e.g. in 15 minutes) and issue a long-lived **refresh token** that can request a new access token.

- Access tokens: short-lived and safe to discard  
- Refresh tokens: stored securely (preferably in an `HttpOnly` cookie)  
- You can revoke refresh tokens on logout

This is the most popular and scalable method.

---

### 🗑️ **Token blacklist**

The server keeps a list (in memory or database) of **revoked tokens**.

- Each time a request is made, the server checks if the token is on the blacklist  
- Blacklist entries expire when the token would have expired

**Downside:** Makes the system stateful and adds overhead to each request.

---

### 💡 **Token versioning**

Store a `tokenVersion` (or similar) field in the user's database record.

- The JWT includes this version number as a claim  
- If the version in the DB is higher than in the token → reject the token

You can "revoke" all tokens for a user by simply incrementing the version in the DB (e.g. on password change or logout).

---

## Comparison

Let's compare both authentication methods side-by-side:

| Feature                    | Session-Based Auth                          | Token-Based Auth (JWT)                        |
|---------------------------|---------------------------------------------|-----------------------------------------------|
| 🔐 **Where data lives**    | On the server                               | On the client (inside the token)              |
| 🧠 **State**               | Stateful                                    | Stateless (unless using revocation strategy)  |
| 🔁 **Revocation**          | Simple (delete session)                     | Complex (requires custom strategy)            |
| 🌐 **Cross-origin support**| Needs cookie config & CORS                  | Works well with APIs and mobile apps          |
| 🧩 **Payload size**        | Tiny (just an ID)                           | Larger (contains claims like ID, roles, etc.) |
| 📤 **How it's sent**       | Auto via cookies                            | Manually via `Authorization` header           |
| 🛠️ **Setup complexity**    | Minimal (often built-in)                    | Requires explicit setup & storage             |
| ⚖️ **Scalability**         | Harder (session syncing or sticky sessions) | Easier (no server-side state)                 |


---

# When to choose which?

- Use **Sessions** if you're building a traditional server-rendered web app and want simple, secure authentication with minimal setup.
- Use **JWT** if you're building a mobile app or API that needs to scale horizontally and interact with multiple services.

---

# Final Thoughts

There's no one-size-fits-all solution - both sessions and JWT have their strengths and trade-offs.  
Sessions are simple, secure by default and great for most traditional web apps. JWT offer flexibility and scalability, but require more careful design, especially around security and token revocation.

If you decide to go with JWT, here are some good practices to follow:

- ✅ **Keep JWT short-lived** - access tokens should expire quickly (e.g. 5–15 minutes).
- 🔁 **Use refresh tokens** to re-authenticate without logging in again.
- 🔒 **Never store JWT in `localStorage`** - always choose `HttpOnly` cookies to prevent XSS.
- 🧾 **Don't put sensitive data inside the token** - only store what's truly needed.
- ✂️ **Implement token revocation** - via blacklists, versioning, or short TTLs.
- 🔐 **Use strong secrets and algorithms** - like `RS256` or strong `HS256` keys.
- 📅 **Validate `exp`, `iat`, `nbf` claims** on every request.
- 🚫 **Don't rely on JWT alone for critical permissions** - always check user state server-side if needed.

> ⚠️ **That said...**  
For many apps - especially traditional server-rendered ones - **sessions are still the safer and simpler choice**. They're easier to manage, revoke and secure out of the box.

Use JWT **only when they genuinely solve a problem in your architecture — not just because they're trendy**.

Happy coding!
