---
title: 'What is Node.js?'
description: 'Brief introduction to Node.js, explaining what it is, how it works, why it is used, and what kind of applications can be built with it.'
socialImage: images/blog/nodejs.webp
authors: 
  - Witold Zawada
date: '2023-05-18 19:00'
tags:
  - Node.js
---

If you're a web developer, you've probably heard of ***[Node.js](https://nodejs.org/)***. It's a technology that's been gaining a lot of attention over the past few years, and for good reason. 

Node.js is an ***[open-source](https://github.com/nodejs/node)***, cross-platform JavaScript runtime environment that allows developers to write server-side applications using JavaScript. But what exactly is Node.js, and why is it so popular?

## The origins of Node.js
Node.js was created by **Ryan Dahl** in 2009, with the aim of developing a technology that would enable developers to write server-side applications using JavaScript. Dahl was frustrated with the limitations of traditional server-side technologies, such as PHP and Ruby on Rails, which relied on synchronous I/O, leading to performance issues and scalability problems. He aimed to create a technology that was fast, efficient, and could handle large amounts of traffic without blocking other requests.

To achieve this, he decided to build Node.js on top of Google's ***[V8 engine](https://v8.dev/)***, the same engine that powers Chromium-based browsers (e.g., Google Chrome, Microsoft Edge, Opera). The V8 engine is known for its speed and efficiency, and by utilizing it for Node.js, Dahl was able to create a technology capable of managing large amounts of traffic in an asynchronous manner.

## How Node.js works
At its core, Node.js uses an **event-driven**, **non-blocking I/O model**. This means it can handle multiple requests simultaneously without obstructing the execution of other processes. In contrast, traditional server-side technologies create a new thread for each incoming request, which can rapidly consume system resources when faced with a high volume of requests. Node.js, however, utilizes an **event loop** to handle incoming requests and responses, allowing it to process multiple requests concurrently without blocking the execution of other processes.

Included in Node.js is a package manager called ***[npm](https://www.npmjs.com/)***, which simplifies the installation and management of third-party packages. This has fostered a large and active community of developers who create, share, and use these packages and modules, making it easy to find solutions to common problems and share your own solutions with others. Now that we've covered enough theory, let's move on to some coding, shall we?

## First Node.js app
Let's create a simple and basic web server using Node.js and Express.

### 1. Install Node.js

#### Windows: 
1. Visit the [official Node.js website](https://nodejs.org/en) and download the latest LTS version.
2. Follow the installation wizard instructions.

#### Linux: 
1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) .
2. Install latest LTS version ("node" is an alias for the latest version).
```bash
nvm install node
```

You can verify that Node and npm are installed by typing ``node -v`` or ``npm -v`` in either PowerShell/CMD (for Windows) or Terminal (for Linux).

### 2. Create a new directory
Create a new directory for your application and navigate into it:
```bash
mkdir firstNodeApp
```
```bash
cd firstNodeApp
```

### 3. Initialize a Node.js project
```bash
npm init -y
```
This command will create a ``package.json`` file. This manifest file in Node.js projects includes metadata about the project, such as the project's name, version, description, author, etc. It also lists the project's dependencies and defines scripts that can be run for development or deployment tasks.

The ``-y`` flag is used to accept the default values such as name, version, author, etc.

### 4. Install needed dependencies
> Fast, unopinionated, minimalist web framework for Node.js 
> — official [Express.js website](https://expressjs.com/)

Install Express by typing the following command in your terminal:
```bash
npm install express
```
The ``dependencies`` property has been added to your ``package.json`` file. This contains information about production dependencies, which are used both in development and production environments. There's also a field named ``devDependencies`` that stores information about dependencies needed only in development.

### 5. Create an Express app
Now, let's create a simple Express app. Create a new file named ``index.js`` in your project directory and add the following code:

``
index.js
``
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
### 5. Run your app
```bash
node index.js
```

Now, if you go to http://localhost:3000 in your browser, you should see "*Hello World!*".

Congratulations! You've just created your first Node.js application using Express. Pretty straightforward, isn't it? Ready to see some more complex real-world examples?

## Famous companies using Node
Node.js has been a blessing for many companies, including PayPal, Uber, Netflix, and LinkedIn, just to name a few. It has led to decreased costs, increased the number of requests per second, and reduced both file size and the number of required servers (in the case of LinkedIn, [servers were reduced from 30 to just 3!](https://www.linkedin.com/pulse/7-answers-most-frequently-asked-questions-nodejs-ian-j-h-reynolds/)). Many startups also choose Node.js as their go-to technology because it's likely the most cost-effective way to get a business up and running online. This is due to the ability to use the same language for both frontend and backend development.

## Pros of Node.js
Most important advantages about Node.js that may make you consider using it:
1. **Speed and efficiency**: Built on the V8 engine, Node.js is fast and efficient, making it great for processing large volumes of data swiftly.

2. **Scalability**: Due to its event-driven, non-blocking I/O model, Node.js is highly scalable and can handle massive traffic without excessive resource consumption.

3. **Versatility**: Node.js supports a broad range of applications like web apps, real-time apps, APIs, command-line tools, and IoT applications.

4. **Popularity**: With a large, active community of developers, Node.js fosters a dynamic environment for problem-solving and collaborative work.

5. **Easy to learn**: Since it's based on JavaScript, a widely-used language, developers can quickly adapt to Node.js.

6. **Unified Language Stack**: Node.js uses JavaScript for server-side operations, allowing developers to use the same language for both frontend and backend development, streamlining the process and cutting costs.

## Cons of Node.js
Every technology has its cons and Node isn't an exception here.

!["10 things I regret about Node.js" - Ryan Dahl, creator of Node.js {caption: "10 things I regret about Node.js" - Ryan Dahl, creator of Node.js} {url: https://www.youtube.com/watch?v=M3BM9TB-8yA}](/images/blog/10-things-node.webp)

Notable drawbacks of Node.js include:

1. **Single-threaded**: Being single-threaded, Node.js can process only one request at a time. It can handle many concurrent requests, but struggles with heavy computation or processing.

2. **Not suitable for CPU-intensive tasks**:  Due to its single-threaded nature, Node.js is not ideal for heavy computation tasks, such as video rendering or scientific calculations.

3. **Lack of standardization**: As a relatively new technology, Node.js lacks standardization across its packages and modules, which can lead to compatibility issues.

4. **No built-in TypeScript support**: While you can use TypeScript with Node.js, it requires additional setup and transpilation, adding complexity to the development process.

5. **Legacy callback-based standard library API**: Despite updates to incorporate Promises, Node.js's API still contains legacy callback-based patterns, often leading to complicated code structures and challenges in transitioning to ESM syntax.


## My personal toughts 
In my personal experience, the combination of Node.js and TypeScript has provided the best developer experience among all the languages I've encountered. It offers not only a clear and enjoyable syntax but also an extensive array of packages, libraries, and frameworks, along with seamless integration with VSCode. The straightforward setup of pipelines and Docker images further amplifies its usability. Another significant advantage is the abundance of resources available online. No other technology has given me the same level of professional fulfillment as working with Node.js.

## Conclusion
Despite its significant impact and demonstrated efficiency, Node.js does have limitations, many of which stem from its adherence to backward compatibility and the era of its inception. Elements such as native TypeScript support, Promise-based APIs, ECMAScript modules, and more were not yet standardized, leading to certain architectural choices that now seem less than ideal.

However, the emergence of promising technologies like ***[Deno](https://deno.com/runtime)*** and ***[Bun](https://bun.sh/)*** is not a threat but rather a catalyst for Node.js's ongoing evolution and innovation. These competitors are compelling Node.js to elevate its platform and solidify its market stance.

Node.js continues to be a pivotal player in web development, recognized for its comprehensive features, lively community, and an enduring push for innovation. It exemplifies the dynamism and resilience of open-source projects, promising an exciting future journey that the global developer community keenly awaits.