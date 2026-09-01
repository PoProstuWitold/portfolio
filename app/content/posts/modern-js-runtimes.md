---
title: 'Modern JavaScript runtimes'
description: 'A 2024 review of JavaScript runtimes and a comparison of their features and direction.'
socialImage: images/blog/runtimes.webp
authors:
  - Witold Zawada
date: '2024-02-25 16:00'
tags:
  - TypeScript
  - Runtimes
---

# Why is Node.js no longer the only option?

The JavaScript ecosystem has changed considerably since *Ryan Dahl* created Node.js on May 27, 2009. Many features that developers now take for granted did not exist then, so the early ecosystem filled those gaps with third-party tools.

By February 2024, Node.js still carried legacy callback APIs and offered less integrated TypeScript tooling than newer runtimes. TypeScript itself appeared three years after Node.js. Those historical constraints helped create room for alternative JavaScript runtimes with different defaults.

# The state of JavaScript in 2024
The ecosystem is famous for producing new frameworks, but the last few years also brought several new JavaScript runtimes.

These runtimes experiment with integrated tooling, security models, compatibility, and performance while using the same core language.

Besides Node.js, two prominent alternatives in 2024 were ***Deno*** and ***Bun***. Let's explore them.

## Deno
*Deno* is a runtime co-created in 2018 by Ryan Dahl, the creator of Node.js. It supports TypeScript and includes tools such as a linter, formatter, and test runner alongside Promise-based APIs.

It implements many web-standard APIs, can compile applications into standalone executables, and supports WebAssembly. Deno is written in Rust and uses V8, the same JavaScript engine used by Node.js.

## Bun
*Bun* was created by *Jarred Sumner* and reached its 1.0 release in 2023. Like Deno, it takes a batteries-included approach with an integrated toolkit and modern APIs.

There are notable differences: Bun emphasizes Node.js compatibility, while Deno began with a more distinct security and module model. Unlike Node.js and Deno, Bun uses the *JavaScriptCore* engine and is written primarily in Zig.

# Comparison

## Feature comparison
Let's compare the features of these three runtimes. Versions and feature status in this table reflect February 25, 2024, when the article was written.

|                           | **Node.js** | **Deno** | **Bun**          |
|:-------------------------:|:-----------:|:--------:|:----------------:|
|     **Release date**      |    2009     |   2018   |       2022       |
|     **Main language**     |     C++     |   Rust   |       Zig        |
|        **Engine**         |     V8      |    V8    |  JavaScriptCore  |
|    **Current version**    |   21.6.2    |  1.41.0  |      1.0.29      |
| **Formatter and linter**  |     ❌      |    ✅    |        ❌        |
| **Built-in TS execution** |     ❌      |    ✅    |        ✅        |
|   **Web-standard APIs**   |   Partial   |    ✅    |        ✅        |
|     **Built-in JSX**      |     ❌      |    ✅    |        ✅        |
| **Default module system** |  CommonJS   |   ESM    | CommonJS and ESM |

## Performance benchmarks
Features matter, but execution speed is another common point of comparison. The following snapshot covers six web servers:
- Native HTTP server implementations in all three runtimes - Node, Deno, and Bun
- Popular frameworks for each runtime - Fastify (Node.js), Oak (Deno), and Elysia (Bun)

Fastify represents Node.js in this comparison because it is a widely adopted alternative to Express.

These historical results come from [github.com/denosaurs/bench](https://github.com/denosaurs/bench). They describe one benchmark setup, not every application workload:


|  **Framework** 	| **Mean requests per second** 	|
|:--------------:	|:----------------------------:	|
|     Node.js    	|           16832.69           	|
|      Deno      	|           64437.45           	|
|       Bun      	|           78737.03           	|
| Fastify (Node) 	|           15570.34           	|
|   Oak (Deno)   	|           32440.85           	|
|  Elysia (Bun)  	|           73184.25           	|

In this dataset, the Bun and Deno servers handled more requests per second than the Node.js variants. The difference between Deno's native server and Oak also shows how much framework overhead can influence a result. Hardware, runtime versions, application behavior, and benchmark design all affect these numbers.

# Should you switch?
Do integrated tooling and one favorable benchmark mean you should immediately leave Node.js? Not exactly. Node.js benefits from a mature ecosystem and a much larger developer community. Deno and Bun were growing quickly in 2024, but their communities were still smaller.

Let's examine the number of questions on Stack Overflow for each technology.
|   tag   | number of questions |
|:-------:|:-------------------:|
| node.js |       470,855       |
|   deno  |         983         |
|   bun   |         166         |

At the time of writing, on February 25, 2024, the Node.js tag had nearly 480 times more questions than Deno and more than 2,800 times more than Bun. Question counts are an imperfect proxy for community size, but they illustrate the difference in accumulated knowledge.


# Conclusion
Small experiments are a practical way to evaluate different runtimes. I have worked with Deno and, at the time of writing, had recently started using Bun. The language remains familiar, but the surrounding APIs, tooling, and compatibility trade-offs change. Runtimes are tools: choose the one that fits your application and team.
