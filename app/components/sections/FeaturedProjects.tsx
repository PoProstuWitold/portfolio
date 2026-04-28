import { featuredProjects } from 'app/utils/constans'
import { NavigationButton } from '@/components/core/NavigationButton'
import { Project } from '@/components/core/Project'

export const FeaturedProjects: React.FC = () => {
	return (
		<section
			id='featured'
			className='flex flex-col items-center justify-center min-h-screen py-24 bg-base-200 cursor-default'
		>
			<div className='w-full max-w-6xl px-6 lg:px-12 xl:px-0'>
				{/* Section Header */}
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-4xl font-extrabold tracking-tight md:text-6xl text-base-content whitespace-nowrap'>
						Featured Projects
					</h2>
					<div className='w-full h-px ml-8 bg-base-content/10 sm:block' />
				</div>

				{/* Professional Copy */}
				<p className='mb-8 text-lg leading-relaxed text-base-content/90'>
					A curated selection of systems, backend architectures, and
					fullstack applications I have engineered. Each project
					reflects my commitment to writing clean, maintainable code
					and solving complex problems through robust, scalable
					technologies.
				</p>

				{/* Projects Grid */}
				<div className='grid gap-10 md:grid-cols-2'>
					{featuredProjects.map((project, index) => (
						<Project
							key={`${project.name}-${index}`}
							project={project}
							badges
						/>
					))}
				</div>

				{/* Call to Action */}
				<div className='flex justify-end mt-16'>
					<NavigationButton
						href='/projects'
						label='Explore all projects'
						direction='right'
					/>
				</div>
			</div>
		</section>
	)
}
