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
		name: 'Synthwave'
	},
	{
		name: 'Halloween'
	},
	{
		name: 'Forest'
	},
	{
		name: 'Winter'
	}
]

export const mySkills = {
	languages: ['Node', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C', 'Python'],
	dbsAndDevOps: [
		'PostgreSQL',
		'MongoDB',
		'Redis',
		'Docker',
	],
	libsAndFrameworks: ['Express', 'Fastify', 'Nest', 'React', 'Next', 'TailwindCSS'],
	learning: [],
	others: ['GraphQL', 'Jest']
}

export const projects = [
	{
		name: 'nest-next-boilerplate',
		description: `Boilerplate for Nest.js, Next.js, TypeScript stack. Includes social logins, account verification, password change & recover, real-time chats and more.`,
		application: 'Fullstack REST app',
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
		repo: 'https://github.com/PoProstuWitold/nest-next-boilerplate'
	},
	{
		name: 'reddit-clone',
		description: `Fullstack Nest, Next Reddit-like app with RESTful API for auth, subredits, commenting, 
        posting and voting for posts.`,
		application: 'Fullstack REST app',
		skills: [
			'Node.js',
			'TypeScript',
			'Nest.js',
			'Redis',
			'PostgreSQL',
			'Docker',
			'Next.js',
			'TailwindCSS',
			'File upload'
		],
		repo: 'https://github.com/PoProstuWitold/reddit-clone'
	},
	{
		name: 'Homster',
		description: `Fullstack game library app written in GraphQL that let you buy and browse games and engage in many communities in similar way like Steam.`,
		application: 'Fullstack GraphQL app',
		skills: [
			'Node.js',
			'TypeScript',
			'Nest.js (Fastify)',
			'PostgreSQL',
			'Next.js',
			'GraphQL',
			'TailwindCSS',
			'Stripe',
		],
		repo: 'https://github.com/PoProstuWitold/homster'
	},
	{
		name: 'Sayuna',
		description: `Easily extensible and customizable all-in-one Discord bot. Moderation, music & fun! Built around dependency injection pattern.`,
		application: 'Discord bot',
		skills: [
			'Node.js',
			'TypeScript',
			'Discord.js',
			'Discordx',
			'Distube',
			'ESM'
		],
		repo: 'https://github.com/PoProstuWitold/Sayuna'
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
		`This is a full-stack web application boilerplate developed using Nest.js and Next.js, both of which are using TypeScript. It was my first major attempt to build a complete full-stack app. The project includes a RESTful API, real-time chat functionality with rooms, conversation for two users, local, Google, and Facebook authentication, password change and recovery, updating user profile, account confirmation, and more. The entire project is dockerized for development, which means instead of running api, web client, workers, databases separately, you just need to run the docker-compose file. The project has received positive feedback, gaining plenty of stars and forks on GitHub.`
	],
	[
		'reddit-clone', 
		`The development of this project was motivated by my desire to deepen my understanding of RESTful API architecture and Nest.js framework. This Reddit-like application enables users to create subreddits, posts, and vote on them. Through this project, I gained valuable knowledge and experience which I have since utilized in other development projects.`
	],
	[
		'Homster', 
		`After realizing that building a big e-commerce app was not as fulfilling, I pivoted to the idea of creating a game library similar to Steam. To achieve this, I opted to use GraphQL as it perfectly fit the requirements of this type of application. During the project building, I made various design decisions such as choosing GraphQL client for API and web, which helped me gain valuable insights into its practical implementation. Moreover, Homster was my first attempt at implementing cursor-based pagination simultaneously on both the frontend and backend. Overall, the experience of building Homster was highly educational and helped me improve my skills as a developer.`
	],
	[
		'Sayuna', 
		`Sayuna is a bot built on top of the Discord API using discord.js and discordx, aiming to provide a richer and more sophisticated experience. Discord is an amazing communication app that provides a robust API for developers, including support for nearly all popular languages and runtimes, including Node.js. I decided to use TypeScript and Object-Oriented Programming (OOP) to develop Sayuna, as it allowed me to better structure and organize the codebase. Sayuna provides features such as music playback (with a real-time dashboard featuring interactive buttons), fun activities such as random memes and jokes, moderation tools, and information. Additionally, I implemented pagination with GUI controls for long command outputs, such as music queue or command information.`
	],
])