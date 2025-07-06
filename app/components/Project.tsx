import Link from 'next/link'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import { Skill } from './Skill'

interface ProjectProps {
	project: {
		name: string
		formattedName: string
		description: string
		application: string
		repo: string
		skills: Array<string>
	}
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
	return (
		<div className='flex flex-col justify-between my-10 bg-base-300 p-6 lg:w-[47%] rounded-2xl shadow-md hover:shadow-2xl hover:cursor-pointer transition-all'>
			<div className='flex flex-col'>
				<h2 className='my-3 text-3xl font-bold text-center'>
					{project.formattedName}
				</h2>
				<span className='pl-2 mx-1 my-3 font-mono font-bold border-l-4 text-secondary border-secondary'>
					{project.application}
				</span>
			</div>
			<div>
				<p className='mx-1 my-3 text-lg text-justify lg:line-clamp-3'>
					{project.description}
				</p>
				<div className='flex flex-wrap'>
					{project.skills.map((skill, index) => {
						return <Skill key={`${index}:${skill}`} title={skill} />
					})}
				</div>
			</div>
			<div className='flex flex-row justify-between items-center mt-5'>
				<div className='flex'>
					<a
						href={project.repo}
						target='_blank'
						rel='noreferrer'
						title={`${project.name} GitHub link`}
					>
						<AiFillGithub className='transition-all active:scale-90 hover:scale-125 duration-300 hover:text-primary ease-in-out w-10 h-10' />
					</a>
				</div>
				<div className='flex group'>
					<Link
						href={`/projects/${project.name}`}
						className='btn btn-ghost font-extrabold btn-secondary'
						rel='noopener noreferrer'
					>
						Case study{' '}
						<AiOutlineArrowRight className='ml-3 w-6 h-6 font-extrabold group-hover:animate-bounce-right' />
					</Link>
				</div>
			</div>
		</div>
	)
}
