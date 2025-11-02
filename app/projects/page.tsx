import type { Metadata } from 'next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
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
		<section
			id='featured'
			className='min-h-screen pt-20 flex flex-col gap-8 py-10 text-xl cursor-default bg-base-200'
		>
			<h1 className='text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary'>
				All Projects
			</h1>
			<p className='lg:mx-[5rem] text-justify mx-6'>
				Here you can find all of my projects - from small experiments
				and learning exercises to more advanced applications. Each one
				represents a step in my development journey, where I applied new
				technologies, deepened my understanding, and explored creative
				solutions.
			</p>
			<div className='flex flex-col flex-wrap justify-between mx-5 my-10 lg:flex-row lg:mt-0 lg:mx-20'>
				{projects.map((project, index) => {
					return (
						<Project
							key={`${index}:${project.name}`}
							project={project}
							badges
						/>
					)
				})}
			</div>
			<div className='flex justify-start mx-5 lg:mx-20'>
				<a href='/' className='btn btn-lg btn-link'>
					<AiOutlineArrowLeft className='w-5 h-5' />
					Go back to home page
				</a>
			</div>
		</section>
	)
}

export default ProjectsPage
