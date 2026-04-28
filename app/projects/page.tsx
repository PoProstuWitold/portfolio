import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/core/Breadcrumbs'
import { NavigationButton } from '@/components/core/NavigationButton'
import { Project } from '@/components/core/Project'
import { projects } from '@/utils/constans'

export const metadata: Metadata = {
	title: 'All Projects | Witold Zawada',
	description: `
		A complete list of projects by Witold Zawada - from quick experiments to advanced fullstack applications. Each project reflects ongoing growth and curiosity in software development.
		`,
	classification: 'Developer Projects',
	metadataBase: new URL('https://witoldzawada.dev'),
	keywords: [
		'Projects',
		'Developer',
		'Portfolio',
		'Witold Zawada',
		'PoProstuWitold',
		'Fullstack',
		'TypeScript',
		'Go',
		'Node.js',
		'Selfhosting',
		'Apps'
	],
	openGraph: {
		title: 'All Projects | Witold Zawada',
		description: `
			Explore all of Witold Zawada's projects — from small ideas to full-featured applications built with Go, TypeScript, and more.
`,
		url: 'https://witoldzawada.dev/projects',
		siteName: 'Witold Zawada',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/witold-512.png',
				width: 512,
				height: 512,
				alt: 'Witold Zawada'
			}
		]
	}
}

const ProjectsPage: React.FC = () => {
	return (
		<main className='flex min-h-screen flex-col items-center bg-base-200 py-24 cursor-default'>
			<div className='flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-12 xl:px-0'>
				<div className='flex flex-col'>
					{/* Breadcrumbs for navigation context */}
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'All Projects' }
						]}
					/>

					{/* Section Header */}
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-4xl font-extrabold tracking-tight md:text-6xl text-base-content whitespace-nowrap'>
							All Projects
						</h2>
						<div className='w-full h-px ml-8 bg-base-content/10 sm:block' />
					</div>

					{/* Professional Copy */}
					<p className='text-lg leading-relaxed text-base-content/70'>
						A complete archive of my services, tools, and fullstack
						applications. While the featured section highlights my
						core systems, this collection includes everything from
						exploratory microservices to deep dives into new
						technologies, reflecting my continuous technical growth.
					</p>
				</div>

				{/* Projects Grid */}
				<div className='grid gap-10 md:grid-cols-2'>
					{projects.map((project, index) => (
						<Project
							key={`${project.name}-${index}`}
							project={project}
							badges
						/>
					))}
				</div>

				{/* Back Navigation */}
				<div className='mt-8 flex justify-start'>
					<NavigationButton
						href='/'
						label='Back to Home'
						direction='left'
					/>
				</div>
			</div>
		</main>
	)
}

export default ProjectsPage
