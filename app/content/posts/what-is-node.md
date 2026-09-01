---
title: 'What is Node.js?'
description: 'A brief introduction to Node.js, explaining what it is, how it works, why it is used, and what kinds of applications can be built with it.'
socialImage: images/blog/nodejs.webp
authors:
  - Witold Zawada
date: '2023-05-18 19:00'
tags:
  - Node.js
---

# JavaScript beyond the browser

If you're a web developer, you've probably heard of ***[Node.js](https://nodejs.org/)***. It has become a common choice for JavaScript applications outside the browser.

Node.js is an ***[open-source](https://github.com/nodejs/node)***, cross-platform JavaScript runtime environment that allows developers to write server-side applications using JavaScript. But what exactly is Node.js, and why is it so popular?

# The origins of Node.js
Node.js was created by **Ryan Dahl** in 2009 to let developers write server-side applications in JavaScript. At the time, many server stacks used blocking I/O or a thread-per-request model. Dahl instead pursued an event-driven runtime that could keep serving other work while I/O operations were pending.

To achieve this, he built Node.js on Google's ***[V8 engine](https://v8.dev/)***, the same JavaScript engine used by Chromium-based browsers such as Google Chrome and Microsoft Edge. Node.js pairs V8 with an event loop and asynchronous system APIs suited to server applications.

# How Node.js works
At its core, Node.js uses an **event-driven, non-blocking I/O model**. JavaScript callbacks normally execute on one main thread, but the runtime can keep many requests in flight while network, file-system, and other I/O operations complete asynchronously. When an operation finishes, its callback is scheduled through the **event loop**. CPU-intensive JavaScript is different: it can block that main thread unless the work is divided, delegated to worker threads, or moved to another process.

Most standard Node.js installations include ***[npm](https://www.npmjs.com/)***, a package manager for installing and maintaining third-party packages. Its registry and ecosystem make it easier to reuse libraries and publish your own. Now that we've covered enough theory, let's move on to some code.

# First Node.js app
Let's create a basic web server using Node.js and Express.

## 1. Install Node.js

Windows:
1. Visit the [official Node.js website](https://nodejs.org/en) and download the latest LTS version.
2. Follow the installation wizard instructions.

Linux:
1. Install [Node Version Manager](https://github.com/nvm-sh/nvm).
2. Install the latest LTS version.
```bash
nvm install --lts
```

You can verify that Node and npm are installed by entering `node -v` and `npm -v` in PowerShell or Command Prompt on Windows, or in a terminal on Linux.

## 2. Create a new directory
Create a new directory for your application and navigate into it:
```bash
mkdir firstNodeApp
```
```bash
cd firstNodeApp
```

## 3. Initialize a Node.js project
```bash
npm init -y
```
This command creates a `package.json` manifest. It can contain project metadata, dependencies, and scripts that run during development or deployment.

The `-y` flag accepts npm's default values for the generated manifest.

## 4. Install needed dependencies
> Fast, unopinionated, minimalist web framework for Node.js
> - official [Express.js website](https://expressjs.com/)

Install Express by typing the following command in your terminal:
```bash
npm install express
```
The `dependencies` property is now present in `package.json`. It lists packages the application needs at runtime. The separate `devDependencies` field is intended for tools needed only during development or the build process.

## 5. Create an Express app
Now, create a file named `index.js` in your project directory and add the following code:
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
})
```
## 6. Run your app
```bash
node index.js
```

Now, if you go to http://localhost:3000 in your browser, you should see "*Hello World!*".

You have now created and run a small Node.js application with Express.

# Companies using Node.js
Node.js has been used by companies including PayPal, Uber, Netflix, and LinkedIn. One frequently cited account of LinkedIn's mobile-server migration [describes reducing the server count from 30 to 3](https://www.linkedin.com/pulse/7-answers-most-frequently-asked-questions-nodejs-ian-j-h-reynolds/). Results from any migration depend on its architecture and workload, but using JavaScript on both the frontend and backend can simplify staffing and code sharing for some teams.

# Pros of Node.js
Important advantages that may make you consider Node.js include:
1. **JavaScript performance**: V8 compiles and optimizes frequently executed JavaScript, which gives Node.js a capable general-purpose runtime.

2. **I/O concurrency**: The event loop and non-blocking APIs let one process keep many network operations in flight without assigning a JavaScript thread to every request.

3. **Versatility**: Node.js supports web applications, APIs, command-line tools, automation, and network services.

4. **Ecosystem**: A large package registry and developer community make many libraries and learning resources available.

5. **Familiar language**: Developers who already use JavaScript in the browser can apply the same language on the server while learning Node.js-specific APIs.

6. **Shared language stack**: Frontend and backend code can share types, validation rules, and tooling when both sides use JavaScript or TypeScript.

# Cons of Node.js
Every technology has trade-offs, and Node.js is no exception.

!["10 things I regret about Node.js" - Ryan Dahl, creator of Node.js {caption: "10 things I regret about Node.js" - Ryan Dahl, creator of Node.js} {url: https://www.youtube.com/watch?v=M3BM9TB-8yA}](/images/blog/10-things-node.webp)

Notable drawbacks of Node.js include:

1. **Main-thread JavaScript execution**: JavaScript callbacks normally run on one main thread, while the event loop and non-blocking I/O keep many requests in flight concurrently. CPU-heavy JavaScript can still block that event loop unless the work is moved to worker threads or separate processes.

2. **CPU-intensive work needs planning**: Heavy computation, such as video processing or scientific calculations, should not run for long periods on the main event-loop thread.

3. **Inconsistent ecosystem conventions**: The breadth and age of the package ecosystem mean libraries do not always follow the same APIs, module formats, or maintenance standards.

4. **No built-in TypeScript support at the time of writing**: In 2023, using TypeScript with Node.js required additional setup and transpilation.

5. **Legacy callback APIs**: Some standard-library APIs retain callback forms for compatibility, although Promise-based alternatives are available for many of them.


# My personal thoughts
In my experience, Node.js and TypeScript provide an enjoyable development workflow. I value the language syntax, the range of packages and frameworks, the VS Code integration, and the amount of documentation available online. I have also found it straightforward to use this stack in CI pipelines and Docker images.

# Conclusion
Node.js has limitations, and several come from its long commitment to backward compatibility. TypeScript, standardized ECMAScript modules, and widespread Promise-based APIs did not exist when the runtime was created, so newer approaches have had to coexist with older ones.

Newer runtimes such as ***[Deno](https://deno.com/runtime)*** and ***[Bun](https://bun.sh/)*** explore different defaults and integrated tooling. Their ideas also create useful pressure for the Node.js ecosystem to keep improving.

Node.js remains a widely used option for web development, automation, and tooling. Whether it is the right choice depends on the workload, the surrounding ecosystem, and the team's experience.
