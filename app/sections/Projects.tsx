/* eslint-disable react/no-unescaped-entities */
import Project from '@/components/Project'
import { projects } from 'app/utils/constans'

const Projects: React.FC = () => {
	return (
		<section
			id='projects'
			className='min-h-screen pt-20 flex flex-col gap-8 py-10 text-xl cursor-default bg-base-200'
		>
			<h1 className='text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary'>
				Projects
			</h1>
			<p className='lg:mx-[5rem] text-justify mx-6'>
				Below are some of my projects that I have developed with great
				fervor and motivation. With every endeavor, I have strived to
				gain a comprehensive understanding of the underlying
				technologies by thoroughly researching documentation, articles,
				videos, and engaging in various courses.
			</p>
			<div className='flex flex-col flex-wrap justify-between mx-5 my-10 lg:flex-row lg:mt-0 lg:mx-20'>
				{projects.map((project, index) => {
					return (
						<Project
							key={`${index}:${project.name}`}
							project={project}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
