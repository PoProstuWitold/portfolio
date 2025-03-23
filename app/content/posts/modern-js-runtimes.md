---
title: 'Modern JavaScript runtimes'
description: 'Review of current state of JavaScript runtimes and comparison of their features and foreseeable future'
socialImage: images/blog/runtimes.webp
authors: 
  - Witold Zawada
date: '2024-02-25 16:00'
tags:
  - TypeScript
  - Runtimes
---

The JavaScript world has always been kind of chaotic due to a lack of standardization since the first days of Node.js, which was created on 27th May 2009 by *Ryan Dahl*. Many features that we take for granted nowadays did not exist back then, so JavaScript developers had to do everything they could to make Node.js more functional.

Issues like the legacy callback-based standard API, lack of native TypeScript support (TypeScript itself was created 3 years after Node.js), and no built-in tools besides the *npm* package manager still haunt us to this day. All of this has led us to the modern day where Node isn’t the only JS runtime.

# The State of JavaScript in 2024
We all know the famous *"new javascript framework"* meme, but in the last few years, we have seen the emergence of something more than new JavaScript framework - completely new JavaScript runtime! Even a few of them!

Isn’t it exciting? The language has evolved significantly over the years and the introduction of new JavaScript runtimes has added a fresh dimension to its capabilities and has improved the developer experience significantly.

Besides Node.js, there are 2 big players in the world of JS runtimes - ***Deno.js*** and ***Bun.js***. Let’s explore them.

## Deno.js
*Deno.js* is a modern and secure runtime that was co-created in 2018 by Ryan Dahl, the creator of Node.js. It has native TypeScript support, built-in tools (such as a code linter, code formatter, and test runner), and a modern Promise-based standard library.

It is built on the web standards Browser API, supports cross-compiling to standalone executables, and can even execute WebAssembly. It is written in Rust on top of the V8 Engine (the same engine that powers Node.js).

## Bun.js
*Bun.js* is the newest big runtime, which was created in 2022 by *Jarred Sumner*. Like Deno.js, it has all batteries included and a modern standard library.

However, there are some notable differences. Bun.js was designed as a drop-in replacement for Node.js, while Deno.js was designed as an alternative to it. Unlike Node and Deno, Bun is built on top of Safari’s *JavaScriptCore* engine. It was built using the Zig programming language.

# Comparison

## Feature comparison
Let’s compare the features of these three runtimes.

|                       	|                    **Node.js**                    	| **Deno.js** 	|                   **Bun.js**                   	|
|:---------------------:	|:-------------------------------------------------:	|:-----------:	|:----------------------------------------------:	|
|    **Release date**    	|                        2009                       	|     2018    	|                      2022                      	|
|     **Main language**    	|                        C++                        	|     Rust    	|                       Zig                      	|
|       **Engine**      	|                         V8                        	|      V8     	|                 JavaScriptCore                 	|
|  **Current version**  	|                       21.6.2                      	|    1.41.0   	|                     1.0.29                     	|
|   **Built-in tools**  	|                         ❌                         	|      ✅      	|                        ✅                       	|
|    **Built-in TS**    	|                         ❌                         	|      ✅      	|                        ✅                       	|
| **Web-standard APIs** 	|                         Experimental                         	|      ✅      	|                        ✅                       	|
|    **Built-in JSX**   	|                         ❌                         	|      ❌      	|                        ✅                       	|
|   **Default module system**   	| CommonJS 	|     ESM     	| CommonJS & ESM 	|

## Performance benchmarks
Features are important but we mustn’t forget about execution speed. I decided to test 6 web servers:
- Native HTTP server implementations in all three runtimes - Node, Deno, and Bun
- Their respective popular and “blazingly fast” frameworks - Fastify (Node), Oak (Deno) and Elysia (Bun)

I chose Fastify over Express because it is better maintained and quite widely adopted.

Here are the results. I used benchmarks from [github.com/denosaurs/bench](https://github.com/denosaurs/bench):


|  **Framework** 	| **Mean requests per second** 	|
|:--------------:	|:----------------------------:	|
|     Node.js    	|           16832.69           	|
|     Deno.js    	|           64437.45           	|
|     Bun.js     	|           78737.03           	|
| Fastify (Node) 	|           15570.34           	|
|   Oak (Deno)   	|           32440.85           	|
|  Elysia (Bun)  	|           73184.25           	|

As you can see, *Node.js* is significantly slower in terms of requests per second. While both the Bun and Deno frameworks outperform Node and Fastify, there is a substantial difference between the native HTTP server and the Oak framework in Deno. This suggests that there is considerable room for improvement.

# Should you switch?
As you can see, Node.js is being outperformed both in terms of built-in features and speed. Does this mean you should ditch Node right now and switch to something else? Not exactly. Node’s strength lies in its age and the community gathered around it. While Deno and Bun are also gathering supporters, their user base, or rather I should say developer base, is relatively small compared to Node.

Let’s examine the number of questions on Stack Overflow for each technology.
|   tag   | number of questions |
|:-------:|:-------------------:|
| node.js |       470,855       |
|   deno  |         983         |
|   bun   |         166         |

At the time of writing this article (25th February 2024), Node.js has nearly 480 times more questions than Deno and more than 2800 times more questions than Bun.js. So, there is a much bigger chance that if you encounter a problem in Node.js, you will find a solution relatively easily compared to other runtimes.


# Conclusion
Of course, there is no harm if you want to try different runtimes anyway. In fact, I used to work with Deno and recently I have started working with Bun. The language is the same; you are changing as little (or as much?) as the environment. After all, languages and runtimes are just tools to get a job done. You should use something that works best for you, whether it’s Node, Deno, Bun, or a completely different language.