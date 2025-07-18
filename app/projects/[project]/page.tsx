import { graphql } from '@octokit/graphql'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { FaHourglassHalf } from 'react-icons/fa'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'
import { Badge } from '@/components/core/Badge'
import { Skill } from '@/components/core/Skill'
import type { Repository } from '@/types'
import { caseStudies, owner, projects, repoQuery } from '@/utils/constans'
import { getContrastTextColor } from '@/utils/functions'

const graphqlWithAuth = graphql.defaults({
	headers: {
		authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`
	}
})

interface Data {
	repository: Repository
}

interface Props {
	params: Promise<{ project: string }>
}

function getProjectInfo(name: string) {
	return projects.find((p) => p.name === name)
}

async function fetchData(project: string): Promise<Data | null> {
	try {
		const data = (await graphqlWithAuth(repoQuery, {
			repo: project,
			owner
		})) as Data
		return data
	} catch (err) {
		console.info(err)
		return null
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { project } = await params
	const data = await fetchData(project)

	if (!project) {
		return {
			title: 'Project Not Found | Witold Zawada',
			description: 'This GitHub project could not be found.',
			robots: { index: false, follow: false }
		}
	}

	const description =
		data?.repository?.description ?? 'GitHub project by Witold Zawada.'
	const title = `PoProstuWitold/${project}`
	return {
		title,
		description,
		keywords: [
			'GitHub',
			'Open Source',
			'Project',
			project,
			'Witold Zawada',
			'PoProstuWitold'
		],
		metadataBase: new URL('https://witoldzawada.dev'),
		openGraph: {
			title,
			description,
			url: `https://witoldzawada.dev/projects/${project}`,
			siteName: 'Witold Zawada',
			locale: 'en_US',
			type: 'article',
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
}

export default async function ProjectPage({
	params
}: {
	params: Promise<{ project: string }>
}): Promise<ReactElement> {
	const { project } = await params
	const data = await fetchData(project)

	const repository = data?.repository ?? null
	const localProject = getProjectInfo(project)

	if (!repository && !localProject) {
		return (
			<section className='min-h-screen flex items-center justify-center text-center px-4 py-28'>
				<div className='bg-base-200 p-6 rounded-2xl max-w-xl space-y-4'>
					<h2 className='text-3xl font-bold text-error'>
						Project not found
					</h2>
					<p className='text-lg'>
						We couldn't fetch any data for the repository{' '}
						<code className='text-warning'>{project}</code>. It may
						be private, deleted, or the name is incorrect.
					</p>
					<Link href='/' className='btn btn-secondary mt-4'>
						Go back to homepage
					</Link>
				</div>
			</section>
		)
	}

	if (!repository && localProject) {
		return (
			<section className='min-h-screen flex flex-col gap-8 py-28 px-4 lg:px-20'>
				<div className='alert bg-info text-info-content shadow-lg'>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center gap-1'>
							<FaHourglassHalf className='w-5 h-5' />
							<span className='font-bold text-xl'>
								In Progress
							</span>
						</div>
						<span className='font-semibold text-lg'>
							This project is still under development. Some data
							may be incomplete or not public yet.
						</span>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row gap-10'>
					<div className='flex flex-col flex-grow lg:w-1/2 bg-base-200 p-6 rounded-2xl gap-4'>
						<div className='flex flex-col mt-5 md:mt-0 gap-4'>
							<h2 className='text-3xl font-bold text-left'>
								{localProject.formattedName}
							</h2>
							<span className='text-xl pl-2 mx-1 font-mono font-bold border-l-4 text-secondary border-secondary'>
								{localProject.type}
							</span>
							{localProject.badges?.length > 0 && (
								<div className='flex flex-wrap gap-2'>
									{localProject.badges.map((badge, id) => (
										<Badge
											key={`${id}:${badge}`}
											type={badge}
										/>
									))}
								</div>
							)}
						</div>
						<p className='text-lg text-justify whitespace-pre-line'>
							{localProject.description.trim()}
						</p>
					</div>

					<div className='flex flex-col flex-grow lg:w-1/2 bg-base-200 p-6 rounded-2xl gap-4'>
						<h3 className='text-2xl font-bold'>Stats</h3>
						<div className='divider'>Technologies</div>
						<div className='flex flex-wrap'>
							{localProject.skills.map((skill, index) => (
								<Skill
									key={`${index}:${skill}`}
									title={skill}
								/>
							))}
						</div>
					</div>
				</div>

				<div className='bg-base-200 p-6 rounded-2xl'>
					<h2 className='text-3xl font-bold mb-2'>Case study</h2>
					<p className='text-justify'>
						This project is currently in progress or not publicly
						available on GitHub.
					</p>
				</div>
			</section>
		)
	}

	// Just for TypeScript type safety
	if (!repository) return <div>Good luck seeing that</div>

	return (
		<section className='min-h-screen flex flex-col gap-8 py-28 px-4 lg:px-20'>
			<div className='flex flex-col lg:flex-row gap-10'>
				<div className='flex flex-col flex-grow lg:w-1/2 bg-base-200 p-6 rounded-2xl gap-4'>
					<div className='flex flex-col mt-5 md:mt-0 gap-4'>
						<div className='flex flex-row items-center gap-2'>
							<h2 className='text-3xl font-bold text-left'>
								{localProject?.formattedName || repository.name}
							</h2>
							<a
								className='link'
								target='_blank'
								rel='noreferrer'
								href={`https://github.com/${repository.owner.login}/${repository.name}`}
								title='GitHub link'
							>
								<AiFillGithub className='w-8 h-8 hover:text-primary transition-transform hover:scale-110' />
							</a>
						</div>
						<span className='text-xl pl-2 mx-1 font-mono font-bold border-l-4 text-secondary border-secondary'>
							{localProject?.type}
						</span>
						{localProject && localProject.badges?.length > 0 && (
							<div className='flex flex-wrap gap-2'>
								{localProject?.badges.map((badge, id) => (
									<Badge
										key={`${id}:${badge}`}
										type={badge}
									/>
								))}
							</div>
						)}
					</div>
					<p className='text-lg text-justify'>
						{repository.description}
					</p>
					<div className='divider'>Languages</div>
					<div className='flex flex-wrap gap-2'>
						{repository.languages.nodes.length ? (
							repository.languages.nodes.map((lang) => (
								<span
									key={lang.name}
									className='badge p-3 font-semibold badge-outline'
									style={{
										backgroundColor: lang.color || '#ccc',
										color: getContrastTextColor(
											lang.color || '#ccc'
										)
									}}
								>
									{lang.name}
								</span>
							))
						) : (
							<span>No languages found.</span>
						)}
					</div>
				</div>

				<div className='flex flex-col flex-grow lg:w-1/2 bg-base-200 p-6 rounded-2xl gap-4'>
					<h3 className='text-2xl font-bold'>Stats</h3>
					<div className='flex md:flex-row flex-wrap gap-1 text-lg flex-col'>
						<span className='flex items-center gap-2'>
							{repository.licenseInfo ? (
								<TbLicense />
							) : (
								<TbLicenseOff />
							)}
							{repository.licenseInfo?.name || 'No license'}
						</span>
						<div className='divider divider-horizontal m-0 p-0' />
						<span className='flex items-center gap-2'>
							<AiOutlineStar /> {repository.stargazers.totalCount}{' '}
							stars
						</span>
						<div className='divider divider-horizontal m-0 p-0' />
						<span className='flex items-center gap-2'>
							<TbGitFork /> {repository.forks.totalCount} forks
						</span>
					</div>
					<div className='divider'>Technologies</div>
					<div className='flex flex-wrap'>
						{localProject?.skills.length ? (
							localProject.skills.map((skill, index) => {
								return (
									<Skill
										key={`${index}:${skill}`}
										title={skill}
									/>
								)
							})
						) : (
							<span>No technologies found.</span>
						)}
					</div>
				</div>
			</div>

			<div className='bg-base-200 p-6 rounded-2xl'>
				<h2 className='text-3xl font-bold mb-2'>Case study</h2>
				<p className='text-justify'>
					{caseStudies.get(repository.name) ||
						'Congrats! You found an easter egg!'}
				</p>
			</div>
		</section>
	)
}
