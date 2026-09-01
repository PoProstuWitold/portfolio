import Link from 'next/link'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import { getRepositoryUrl } from '@/projects/data'
import type { Project as ProjectData } from '@/projects/types'
import { Badge } from './Badge'
import { Skill } from './Skill'

interface ProjectProps {
	project: ProjectData
	showBadges?: boolean
}

export function Project({ project, showBadges = false }: ProjectProps) {
	const repositoryUrl = getRepositoryUrl(project.repository)

	return (
		<article className='relative flex h-full w-full flex-col justify-between rounded-2xl border border-base-content/10 bg-base-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-left text-3xl font-bold'>
						{project.displayName}
					</h2>

					<span className='border-l-4 border-secondary pl-3 font-mono font-bold text-secondary'>
						{project.category}
					</span>

					{showBadges && project.badges.length > 0 && (
						<div className='flex flex-wrap gap-2'>
							{project.badges.map((badge) => (
								<Badge key={badge} id={badge} />
							))}
						</div>
					)}
				</div>

				<div className='flex flex-col gap-4'>
					<p className='text-lg leading-relaxed text-base-content/85 lg:line-clamp-3'>
						{project.description}
					</p>

					<div className='flex flex-wrap gap-2'>
						{project.skills.map((skill) => (
							<Skill key={skill} title={skill} />
						))}
					</div>
				</div>
			</div>

			<div className='mt-6 flex items-center justify-between border-t border-base-content/10 pt-5'>
				<div className='flex'>
					<a
						href={repositoryUrl}
						target='_blank'
						rel='noopener noreferrer'
						title={`Open on GitHub: ${project.displayName}`}
						aria-label={`Open on GitHub: ${project.displayName}`}
						className='flex h-11 w-11 items-center justify-center rounded-xl border border-base-content/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:text-primary'
					>
						<AiFillGithub aria-hidden='true' className='h-7 w-7' />
					</a>
				</div>

				<div className='group flex'>
					<Link
						href={`/projects/${project.slug}`}
						aria-label={`Read case study: ${project.displayName}`}
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
