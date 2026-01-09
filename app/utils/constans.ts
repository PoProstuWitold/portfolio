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
		badges: ['featured', 'selfhosted', 'education', 'collaboration', 'new']
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
		name: 'dove-dashboard',
		formattedName: 'The Dove Dashboard',
		description: `
		Essential system stats, peacefully simple. A lightweight, simple and peaceful web-based system monitor - written in Go, with no external dependencies and a minimal UI.
		`,
		type: 'System Monitoring Dashboard',
		skills: ['Go', 'Docker', 'Linux', 'JavaScript', 'HTML5', 'CSS3'],
		repo: 'https://github.com/PoProstuWitold/dove-dashboard',
		badges: ['featured', 'selfhosted']
	}
]

export const projects: ProjectDocument[] = [
	...featuredProjects,
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
		badges: ['selfhosted']
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
	},
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
		badges: ['deprecated']
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
