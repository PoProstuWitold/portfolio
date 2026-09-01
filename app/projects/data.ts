import type { Project, ProjectRepository } from './types'

export const projects = [
	{
		slug: 'doggopaste',
		displayName: 'DoggoPaste',
		description:
			'Drop your code, let Doggo fetch it! A selfhostable platform combining durable, access-controlled code pastes with real-time collaborative editing in a fullstack TypeScript monorepo.',
		category: 'Fullstack real-time application',
		skills: [
			'Node.js',
			'TypeScript',
			'Hono',
			'Next.js',
			'PostgreSQL',
			'Drizzle ORM',
			'Socket.IO',
			'Better Auth',
			'OpenAPI',
			'Docker',
			'Turborepo'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'doggopaste'
		},
		badges: ['featured', 'selfhosted', 'education', 'collaboration']
	},
	{
		slug: 'homeserver',
		displayName: 'Homeserver',
		description:
			'A living record of my selfhosted infrastructure, documenting its evolution from Cloudflare Tunnels and bare-metal Docker to a Proxmox VE homelab with virtual machines, LXC containers, and Infrastructure as Code.',
		category: 'Selfhosted infrastructure',
		skills: [
			'Linux',
			'Proxmox VE',
			'Docker',
			'LXC',
			'Networking',
			'Caddy',
			'WireGuard',
			'Cloudflare Tunnel'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'homeserver'
		},
		badges: ['featured', 'selfhosted', 'docs']
	},
	{
		slug: 'nuntius-feed',
		displayName: 'Nuntius Feed',
		description:
			'A selfhostable RSS and Atom reader with per-user subscriptions, favorites, OPML import and export, automated feed refreshes, and JWT authentication built with Next.js, Hono RPC, and MongoDB.',
		category: 'Fullstack feed reader',
		skills: [
			'Node.js',
			'TypeScript',
			'Next.js',
			'Hono',
			'MongoDB',
			'RPC',
			'JWT',
			'RSS/Atom',
			'Docker',
			'CRON'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'nuntius-feed'
		},
		badges: ['featured', 'selfhosted', 'education']
	},
	{
		slug: 'dove-dashboard',
		displayName: 'The Dove Dashboard',
		description:
			'A lightweight Go system monitor that exposes essential CPU, memory, storage, sensor, network, and host information through a minimal web interface, packaged as a single binary or Docker container.',
		category: 'System monitoring dashboard',
		skills: [
			'Go',
			'Linux',
			'Docker',
			'System Monitoring',
			'JavaScript',
			'HTML5',
			'CSS3'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'dove-dashboard'
		},
		badges: ['featured', 'selfhosted']
	},
	{
		slug: 'sayuna',
		displayName: 'Sayuna',
		description:
			'An extensible TypeScript Discord bot combining moderation, music, entertainment, logging, and administrative tooling, with dependency injection, a real-time music dashboard, and Docker deployment.',
		category: 'Modular Discord bot',
		skills: [
			'Node.js',
			'TypeScript',
			'Discord.js',
			'Discordx',
			'DisTube',
			'Dependency Injection',
			'FFmpeg',
			'Docker'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'Sayuna'
		},
		badges: ['selfhosted'],
		legacySlugs: ['Sayuna']
	},
	{
		slug: 'portfolio',
		displayName: 'Portfolio',
		description:
			'My personal portfolio and technical blog, built with Next.js around local-first project data, Markdown content, and optional GitHub GraphQL enrichment.',
		category: 'Portfolio and technical blog',
		skills: [
			'Node.js',
			'TypeScript',
			'Next.js',
			'React',
			'TailwindCSS',
			'GraphQL',
			'GitHub API',
			'Markdown'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'portfolio'
		},
		badges: ['personal']
	},
	{
		slug: 'pizzeria',
		displayName: 'Pizzeria',
		description:
			'A framework-free JavaScript SPA for a fictional pizzeria, built around a custom React-like component system, client-side routing, browser APIs, external API integration, and a small Node.js server.',
		category: 'Vanilla JavaScript SPA',
		skills: [
			'Node.js',
			'JavaScript',
			'ESM',
			'History API',
			'Fetch API',
			'HTML5',
			'CSS3',
			'Docker'
		],
		repository: {
			owner: 'PoProstuWitold',
			name: 'pizzeria'
		},
		badges: ['education']
	}
] as const satisfies readonly Project[]

export type ProjectSlug = (typeof projects)[number]['slug']

export const featuredProjects = projects.filter((project: Project) =>
	project.badges.includes('featured')
)

export const projectRouteSlugs = projects.flatMap((project) => [
	project.slug,
	...('legacySlugs' in project ? project.legacySlugs : [])
])

export function getProjectByRouteSlug(slug: string) {
	return projects.find((project) => {
		const legacySlugs: readonly string[] =
			'legacySlugs' in project ? project.legacySlugs : []

		return project.slug === slug || legacySlugs.includes(slug)
	})
}

export function getRepositoryUrl(repository: ProjectRepository): string {
	return `https://github.com/${repository.owner}/${repository.name}`
}
