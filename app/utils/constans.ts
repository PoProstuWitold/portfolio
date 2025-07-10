import type { ProjectDocument } from '@/types'

export const myInfo = {
	email: 'witoldzawada.dev@gmail.com',
	randomStringEmail: '34893320013ab23ed74d6d8c8b6552c4',
	url: 'https://witoldzawada.dev'
}

export const themes = [
	{
		name: 'System'
	},
	{
		name: 'Light'
	},
	{
		name: 'Dark'
	},
	{
		name: 'Emerald'
	},
	{
		name: 'Cyberpunk'
	},
	{
		name: 'Valentine'
	},
	{
		name: 'Halloween'
	},
	{
		name: 'Winter'
	},
	{
		name: 'Business'
	},
	{
		name: 'Nord'
	}
]

export const featuredProjects: ProjectDocument[] = [
	{
		name: 'nest-next-boilerplate',
		formattedName: 'Nest Next Boilerplate',
		description:
			'Boilerplate for Nest.js, Next.js, TypeScript stack. Includes social logins, account verification, password change & recover, real-time chats and more.',
		type: 'Fullstack REST App',
		skills: [
			'Node.js',
			'TypeScript',
			'Nest.js',
			'Redis',
			'PostgreSQL',
			'Docker',
			'Next.js',
			'TailwindCSS',
			'Nodemailer'
		],
		repo: 'https://github.com/PoProstuWitold/nest-next-boilerplate',
		badges: ['featured']
	},
	{
		name: 'homeserver',
		formattedName: 'Homeserver',
		description: `My two personal, opinionated home server setups. One using Port Forwarding and the other using Cloudflare Tunnels. Both with detailed "to-do like" instructions, explanations as well as links to various resources.`,
		type: 'Guide/Tutorial',
		skills: [
			'Linux',
			'Docker',
			'Networking',
			'Cloudflare',
			'Port Forwarding',
			'Security',
			'Caddy',
			'VPN'
		],
		repo: 'https://github.com/PoProstuWitold/homeserver',
		badges: ['featured', 'selfhosted', 'docs']
	},
	{
		name: 'nuntius-feed',
		formattedName: 'Nuntius Feed',
		description:
			'Your personal herald for the digital age. A lightweight web application for subscribing to and reading RSS and Atom feeds. Parses feeds from all RSS and Atom specifications.',
		type: 'Fullstack REST App with RPC',
		skills: [
			'Node.js',
			'TypeScript',
			'Next.js',
			'Hono',
			'MongoDB',
			'RPC',
			'JWT',
			'Docker',
			'TailwindCSS',
			'CRON'
		],
		repo: 'https://github.com/PoProstuWitold/nuntius-feed',
		badges: ['featured', 'selfhosted', 'education']
	},
	{
		name: 'Sayuna',
		formattedName: 'Sayuna',
		description:
			'Easily extensible and customizable all-in-one Discord bot. Moderation, music & fun! Built around dependency injection pattern. Includes real-time dashboard with controls and Docker image for easy deployment and monitoring',
		type: 'Discord Bot',
		skills: [
			'Node.js',
			'TypeScript',
			'Discord.js',
			'Discordx',
			'Distube',
			'ESM',
			'Docker'
		],
		repo: 'https://github.com/PoProstuWitold/Sayuna',
		badges: ['featured', 'selfhosted']
	}
]

export const projects: ProjectDocument[] = [
	...featuredProjects,
	{
		name: 'doggopaste',
		formattedName: 'DoggoPaste',
		description: `
		A hybrid of Pastebin and CodeShare - a simple yet powerful way to share code snippets, collaborate in real time, and keep your pastes accessible. It's fully free, open-source, and selfhostable. Designed with privacy, collaboration, and permanence in mind.
		`,
		type: 'Fullstack REST App',
		skills: [
			'Node.js',
			'TypeScript',
			'Hono',
			'Next.js',
			'PostgreSQL',
			'Docker',
			'TailwindCSS',
			'WebSockets',
			'Turborepo'
		],
		repo: 'https://github.com/PoProstuWitold/doggopaste',
		badges: ['inProgress', 'selfhosted', 'education', 'collaboration']
	},
	{
		name: 'portfolio',
		formattedName: 'Portfolio',
		description: `My personal portfolio website showcases my development skills, selected projects and technical blog posts. It's designed as a central place to present my work and share insights. Clean, responsive, and built with modern tools.`,
		type: 'Personal Website',
		skills: [
			'Node.js',
			'TypeScript',
			'Next.js',
			'TailwindCSS',
			'GraphQL',
			'GitHub API',
			'Markdown'
		],
		repo: 'https://github.com/PoProstuWitold/portfolio',
		badges: ['personal']
	},
	{
		name: 'pizzeria',
		formattedName: 'Pizzeria',
		description:
			'A project implementing a website for a fictional pizzeria in the form of a "Single Page Application" with custom React-like mini-framework and custom Node.js server.',
		type: 'HTML5/CSS3/JS Website',
		skills: ['Node.js', 'JavaScript', 'ESM', 'HTML5', 'CSS3', 'Docker'],
		repo: 'https://github.com/PoProstuWitold/pizzeria',
		badges: ['education']
	}
]

export const owner = 'PoProstuWitold'

export const repoQuery = `
query getRepository($owner: String!, $repo: String!) {
	repository(owner: $owner, name: $repo) {
		name
		description
		createdAt
		languages(first: 10) {
			nodes {
				name
				color
			}
		}
		stargazers {
			totalCount
		}
		forks {
			totalCount
		}
		licenseInfo {
			name
		}
		owner {
			login
		}
		primaryLanguage {
			name
		}
	}
}
`

export const caseStudies = new Map<string, string>([
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
	]
])
