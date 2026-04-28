import type { ReactNode } from 'react'

type ProjectCaseStudyProps = {
	problem: string
	solution: string
	result: string
}

function ProjectCaseStudy({
	problem,
	solution,
	result
}: ProjectCaseStudyProps) {
	return (
		<article className='flex flex-col gap-5 leading-relaxed'>
			<div className='space-y-5 text-lg text-base-content/90'>
				<p>
					<strong className='text-base-content'>Problem:</strong>{' '}
					{problem}
				</p>

				<p>
					<strong className='text-base-content'>Solution:</strong>{' '}
					{solution}
				</p>

				<p>
					<strong className='text-base-content'>Result:</strong>{' '}
					{result}
				</p>
			</div>
		</article>
	)
}

export const caseStudies = new Map<string, ReactNode>([
	[
		'homeserver',
		<ProjectCaseStudy
			key='homeserver'
			problem='Building a personal home server environment is often complex, fragmented across many guides, and requires knowledge of networking, security, and service deployment.'
			solution='I independently created extensive documentation and a working home server environment based on Linux, Docker, reverse proxy, VPN, and secure service publishing through Port Forwarding and Cloudflare Tunnels. The project includes practical deployments, automation, and infrastructure maintenance.'
			result='Built a complete, actively used server environment and a practical guide for people starting with selfhosting. The project demonstrated my skills in system administration, networking, and production-grade service deployment.'
		/>
	],
	[
		'nuntius-feed',
		<ProjectCaseStudy
			key='nuntius-feed'
			problem='Many RSS readers are outdated, unintuitive, or lack convenient subscription management and a modern user interface.'
			solution='I independently designed a web application for subscribing to and reading RSS and Atom feeds. The system supports source management, favorite articles, OPML import and export, user authentication, and automatic background refresh.'
			result='Delivered a modern content aggregator built as a full web application with separate frontend and backend layers. The project demonstrated my skills in scalable application development, business logic design, authentication, and data management.'
		/>
	],
	[
		'dove-dashboard',
		<ProjectCaseStudy
			key='dove-dashboard'
			problem='Monitoring a personal server often requires heavy dashboards or fragmented command-line tools, which can be unnecessarily complex for checking essential system health.'
			solution='I independently built The Dove Dashboard, a lightweight web-based system monitor written in Go. The application provides system overview, CPU, memory, storage, sensor, and network metrics with live updates and a minimal user interface.'
			result='Delivered a self-contained monitoring application distributed as a single binary with static assets and Docker support. The project demonstrated my skills in Go, Linux systems, lightweight backend design, and practical selfhosted tooling.'
		/>
	],
	[
		'doggopaste',
		<ProjectCaseStudy
			key='doggopaste'
			problem='Existing solutions usually offered either simple code sharing via links or collaborative editing. There was no modern platform combining both approaches in one intuitive tool.'
			solution='As part of a two-person team, I co-developed DoggoPaste, a web application enabling fast code sharing, real-time collaborative editing, private and public pastes, selected client-side encryption, and content management through an admin panel.'
			result='Delivered a comprehensive engineering thesis project awarded the highest possible grade (5.0/5.0) with distinction. The application was designed as a real product ready for independent deployment, demonstrating my teamwork, software engineering, and end-to-end product delivery skills.'
		/>
	],
	[
		'Sayuna',
		<ProjectCaseStudy
			key='Sayuna'
			problem='Discord communities often need separate bots for moderation, music, fun commands, and developer tools, which makes management and deployment harder.'
			solution='I independently developed Sayuna, an extensible Discord bot built with TypeScript, Node.js, discord.js, and discordx. The bot includes moderation, music playback, fun commands, owner-only developer tools, robust logging, global error handling, and Docker-based deployment.'
			result='Delivered a production-oriented bot platform with modular features and environment-based configuration. The project demonstrated my skills in TypeScript backend development, third-party API integration, automation, and deployment.'
		/>
	],
	[
		'portfolio',
		<ProjectCaseStudy
			key='portfolio'
			problem='A developer portfolio should present projects, technical writing, skills, and professional context in one clear place, while remaining easy to maintain and extend.'
			solution='I independently built my personal portfolio website with a custom Markdown-based blog engine, syntax highlighting, responsive design, tag filtering, estimated reading time, copyable code snippets, and GitHub project data fetched through the GraphQL API.'
			result='Delivered a professional platform for showcasing selected projects, technical articles, skills, and case studies. The project demonstrated my frontend engineering, content architecture, and attention to developer experience.'
		/>
	],
	[
		'pizzeria',
		<ProjectCaseStudy
			key='pizzeria'
			problem='Building a Single Page Application without a frontend framework requires manually handling routing, dynamic views, browser APIs, form validation, and state persistence.'
			solution='I independently built a fictional pizzeria website as a Vanilla JavaScript SPA. The application uses dynamic component imports, the History API, a custom Node.js server, a Pixabay-powered gallery, and a reservation system stored in localStorage.'
			result='Delivered a complete educational SPA with multiple routes, client-side navigation, validated reservations, editable user data, Docker support, and a custom 404 page. The project demonstrated my understanding of browser APIs and framework-free web development.'
		/>
	]
])
