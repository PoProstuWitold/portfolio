import Link from 'next/link'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import type { ProjectDocument } from '@/types'
import { Badge } from './Badge'
import { Skill } from './Skill'

interface ProjectProps {
	project: ProjectDocument
	badges?: boolean
}

export const Project: React.FC<ProjectProps> = ({ project, badges }) => {
	const isInProgress = project.badges?.includes('inProgress')

	return (
		<article className='relative flex h-full w-full flex-col justify-between rounded-2xl border border-base-content/10 bg-base-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-left text-3xl font-bold'>
						{project.formattedName}
					</h2>

					<span className='border-l-4 border-secondary pl-3 font-mono font-bold text-secondary'>
						{project.type}
					</span>

					{badges && project.badges?.length > 0 && (
						<div className='flex flex-wrap gap-2'>
							{project.badges.map((badge, id) => (
								<Badge key={`${id}:${badge}`} type={badge} />
							))}
						</div>
					)}
				</div>

				<div className='flex flex-col gap-4'>
					<p className='text-lg leading-relaxed text-base-content/85 lg:line-clamp-3'>
						{project.description}
					</p>

					<div className='flex flex-wrap gap-2'>
						{project.skills.map((skill, index) => (
							<Skill key={`${index}:${skill}`} title={skill} />
						))}
					</div>
				</div>
			</div>

			<div className='mt-6 flex items-center justify-between border-t border-base-content/10 pt-5'>
				<div className='flex'>
					{isInProgress ? (
						<div
							className='tooltip tooltip-bottom tooltip-info'
							data-tip='In progress - repo not available'
						>
							<div className='flex h-11 w-11 items-center justify-center rounded-xl border border-base-content/10 text-base-content/25'>
								<AiFillGithub className='h-7 w-7 line-through' />
							</div>
						</div>
					) : (
						<a
							href={project.repo}
							target='_blank'
							rel='noreferrer'
							title={`${project.name} GitHub link`}
							aria-label={`${project.name} GitHub link`}
							className='flex h-11 w-11 items-center justify-center rounded-xl border border-base-content/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:text-primary'
						>
							<AiFillGithub className='h-7 w-7' />
						</a>
					)}
				</div>

				<div className='group flex'>
					<Link
						href={`/projects/${project.name}`}
						className='btn btn-secondary font-extrabold'
					>
						Case study
						<AiOutlineArrowRight className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
					</Link>
				</div>
			</div>
		</article>
	)
}
