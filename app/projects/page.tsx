import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/core/Breadcrumbs'
import { NavigationButton } from '@/components/core/NavigationButton'
import { Project } from '@/components/core/Project'
import { siteConfig } from '@/config/site'
import { projects } from '@/projects/data'

export const metadata: Metadata = {
	title: `All Projects | ${siteConfig.name}`,
	description:
		"A complete list of Witold Zawada's software projects, including web applications, selfhosted infrastructure, systems tools, and educational work.",
	classification: 'Developer Projects',
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
		title: `All Projects | ${siteConfig.name}`,
		description:
			"Explore Witold Zawada's web applications, selfhosted infrastructure, systems tools, and educational projects.",
		url: '/projects',
		siteName: siteConfig.name,
		locale: 'en_US',
		type: 'website',
		images: [siteConfig.openGraphImage]
	},
	alternates: { canonical: '/projects' },
	twitter: {
		card: 'summary',
		title: `All Projects | ${siteConfig.name}`,
		description:
			"Explore Witold Zawada's web applications, selfhosted infrastructure, systems tools, and educational projects.",
		images: [siteConfig.openGraphImage.url]
	}
}

function ProjectsPage() {
	return (
		<main className='flex min-h-screen cursor-default flex-col items-center bg-base-200 py-24'>
			<div className='flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-12 xl:px-0'>
				<div className='flex flex-col'>
					{/* Breadcrumbs for navigation context */}
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'All Projects' }
						]}
					/>

					<div className='flex items-center justify-between mb-6'>
						<h1 className='text-4xl font-extrabold tracking-tight md:text-6xl text-base-content whitespace-nowrap'>
							All Projects
						</h1>
						<div className='w-full h-px ml-8 bg-base-content/10 sm:block' />
					</div>

					<p className='text-lg leading-relaxed text-base-content/70'>
						A complete archive of my web applications, backend
						systems, selfhosted infrastructure, and experimental
						projects. Each entry includes a technical overview, key
						technologies, repository, and a deeper case study where
						available.
					</p>
				</div>

				{/* Projects Grid */}
				<div className='grid gap-10 md:grid-cols-2'>
					{projects.map((project) => (
						<Project
							key={project.slug}
							project={project}
							showBadges
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
