import { FaLock } from 'react-icons/fa'

export const caseStudies = new Map<string, React.ReactNode>([
	[
		'nest-next-boilerplate',
		'This is a full-stack web application boilerplate developed using Nest.js and Next.js, both of which are using TypeScript. It was my first major attempt to build a complete full-stack app. The project includes a RESTful API, real-time chat functionality with rooms, conversation for two users, local, Google, and Facebook authentication, password change and recovery, updating user profile, account confirmation, and more. The entire project is dockerized for development, which means instead of running api, web client, workers, databases separately, you just need to run the docker-compose file. The project has received positive feedback, gaining plenty of stars and forks on GitHub.'
	],
	[
		'homeserver',
		`After a quick chat with my friend from university, during which I learned about their private server, I became very excited and decided to set up my own. Initially, I struggled to find a comprehensive guide on where to begin. I had to gather information from various sources, including official documentation, YouTube videos, platforms like Reddit and StackOverflow, and blog posts.
        
        After some time, I decided to create a guide on how to set up a home server using two different methods: Port Forwarding and Cloudflare Tunnels. The guide provides detailed instructions on setting up a server, installing Docker, configuring Caddy, and establishing a VPN. I developed this project to assist people who want to create their own home servers but lack guidance. The community has responded positively, with many users finding the guide helpful. I've received feedback from individuals and my colleagues who successfully set up their own home servers using my instructions.`
	],
	[
		'nuntius-feed',
		'Nuntius Feed is a personal project that I developed to create a lightweight web application for subscribing to and reading RSS and Atom feeds. The name "Nuntius" comes from the Latin word for "herald," which reflects the purpose of the application as a herald for digital content. The application is designed to be simple, fast, and easy to use, with a focus on providing a clean and intuitive user interface. It supports all RSS and Atom specifications, allowing users to subscribe to any feed they want. Nuntius Feed is written in TypeScript, Next.js as fullstack framework with Hono as API Routes. It uses MongoDB as the database. It also uses dual-token authentication with JWT with all best practices, has admin panel, refreshes feeds in the background using CRON jobs.'
	],
	[
		'Sayuna',
		'Sayuna is a bot built on top of the Discord API using discord.js and discordx, aiming to provide a richer and more sophisticated experience. Discord is an amazing communication app that provides a robust API for developers, including support for nearly all popular languages and runtimes, including Node.js. I decided to use TypeScript and Object-Oriented Programming (OOP) to develop Sayuna, as it allowed me to better structure and organize the codebase. Sayuna provides features such as music playback (with a real-time dashboard featuring interactive buttons), fun activities such as random memes and jokes, moderation tools, and information. Additionally, I implemented pagination with GUI controls for long command outputs, such as music queue or command information.'
	],
	[
		'portfolio',
		'Portfolio is my personal website, designed to showcase my skills, projects, and blog posts. It is built using Next.js and TailwindCSS, with a focus on performance and user experience. The website features a clean and modern design, with easy navigation and responsive layout. It includes sections for my projects, skills, blog posts, and contact information. The website is also optimized for search engines and accessibility.'
	],
	[
		'pizzeria',
		'Pizzeria is a project that implements a website for a fictional pizzeria in the form of a "Single Page Application" (SPA) using vanilla JavaScript. The project includes a custom React-like mini-framework and a custom Node.js server. The goal of the project was to create a simple and lightweight SPA that can be easily deployed and maintained. The project is designed to be easy to understand and modify, with a focus on simplicity and performance.'
	],
	[
		'dove-dashboard',
		`
        The Dove Dashboard is a lightweight, selfhosted system monitoring application written in Go and pure JavaScript, with no external dependencies. It provides real-time insights into key system metrics such as the operating system (architecture, kernel, uptime, hostname), CPU (name, cores, threads, frequency), storage (disk type, file system, usage), network (interfaces, benchmarks), and hardware sensors (temperature, voltage). Designed with a minimal and peaceful user interface (hence the name - "dove" dashboard), it automatically refreshes and runs as a fully self-contained binary. The project is distributed as a very lightweight, rootless Docker image (~18MB) with extremely low memory usage (~25MB), making deployment straightforward with a single "docker-compose" command. Why? I wanted a simple, secure, and lightweight web interface to check my system's temperatures, and I decided to expand it to include other essential system statistics as well.
        `
	],
	[
		'doggopaste',
		<div key='doggopaste' className='flex flex-col gap-10 leading-relaxed'>
			<div className='flex flex-col gap-6'>
				<p className='text-xl text-base-content'>
					DoggoPaste is a comprehensive web application designed to
					bridge the gap between static code storage (Pastebin-style)
					and real-time collaborative editing (Codeshare-style).
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
				<section className='flex flex-col gap-4'>
					<h3 className='text-2xl font-bold text-secondary flex items-center gap-2 underline underline-offset-8 decoration-2'>
						The Challenge
					</h3>
					<p className='text-base-content opacity-90 text-lg'>
						Modern developers often fluctuate between two needs:
						archiving code snippets for the long term and
						collaborating live with peers. Most platforms specialize
						in only one area, forcing users to switch tools.
						Furthermore, storing sensitive code in plain text on
						central servers remains a major security concern for
						many teams.
					</p>
				</section>

				<section className='flex flex-col gap-4'>
					<h3 className='text-2xl font-bold text-success flex items-center gap-2 underline underline-offset-8 decoration-2'>
						The Solution
					</h3>
					<p className='text-base-content opacity-90 text-lg'>
						DoggoPaste provides a hybrid "best of both worlds"
						approach. It allows users to create immutable static
						records organized in a hierarchical folder system or
						launch instant, collaborative real-time sessions. Every
						feature is underpinned by client-side encryption,
						ensuring that only the intended recipients can read the
						content.
					</p>
				</section>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='card bg-base-200 shadow-sm border border-base-300'>
					<div className='card-body gap-4'>
						<h4 className='card-title text-primary font-mono text-2xl'>
							/api
						</h4>
						<p className='text-base-content opacity-80'>
							REST API and WebSocket server built with{' '}
							<strong>Hono</strong>.
						</p>
					</div>
				</div>
				<div className='card bg-base-200 shadow-sm border border-base-300'>
					<div className='card-body gap-4'>
						<h4 className='card-title text-secondary font-mono text-2xl'>
							/web
						</h4>
						<p className='text-base-content opacity-80'>
							Client app built with <strong>Next.js</strong>.
						</p>
					</div>
				</div>
				<div className='card bg-base-200 shadow-sm border border-base-300'>
					<div className='card-body gap-4'>
						<h4 className='card-title text-accent font-mono text-2xl'>
							/proxy
						</h4>
						<p className='text-base-content opacity-80'>
							A custom proxy server for deploying app on single
							port.
						</p>
					</div>
				</div>
			</div>

			<section className='bg-base-200 border-l-8 border-info rounded-r-box p-8 shadow-inner'>
				<div className='flex flex-col gap-6'>
					<h3 className='text-2xl font-bold text-info flex items-center gap-4'>
						<FaLock className='h-10 w-10' />
						Zero-Knowledge Encryption
					</h3>
					<div className='flex flex-col gap-4'>
						<p>
							Static pastes can be encrypted via the{' '}
							<span className='font-bold underline decoration-info/40'>
								Web Crypto API
							</span>
							. All data is encrypted using{' '}
							<span className='font-bold underline decoration-info/40'>
								AES-GCM
							</span>{' '}
							directly in the user's browser.
						</p>
						<p>
							No password or its hash is ever sent to the server.
						</p>
					</div>
				</div>
			</section>

			<div className='flex flex-wrap justify-between items-center py-6 border-t border-base-300 gap-4'>
				<p className='font-bold text-primary italic text-2xl tracking-tighter'>
					DoggoPaste
				</p>
				<p className='text-lg italic opacity-60'>
					Drop your code, let Doggo fetch it!
				</p>
			</div>
		</div>
	]
])
