export const siteConfig = {
	name: 'Witold Zawada',
	title: 'Witold Zawada | Software Engineer',
	description:
		'Software engineer portfolio of Witold Zawada, featuring TypeScript and Go projects, technical articles, and contact information.',
	url: 'https://witoldzawada.dev',
	author: {
		name: 'Witold Zawada',
		handle: 'PoProstuWitold',
		email: 'witoldzawada.dev@gmail.com'
	},
	links: {
		github: 'https://github.com/PoProstuWitold',
		linkedin: 'https://www.linkedin.com/in/witoldzawada/',
		discord: 'https://discord.com/users/460167435471945748',
		repository: 'https://github.com/PoProstuWitold/portfolio'
	},
	openGraphImage: {
		url: '/images/witold-512.png',
		width: 1220,
		height: 1175,
		alt: 'Portrait of Witold Zawada'
	}
} as const

export const siteUrl = new URL(siteConfig.url)
