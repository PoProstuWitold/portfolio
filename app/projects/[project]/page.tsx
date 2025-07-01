import { graphql } from '@octokit/graphql'
import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'
import Skill from '@/components/Skill'
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
		console.error(err)
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

	if (!data) return <div>Data not found</div>
	const { repository } = data
	if (!repository) return <div>Repository not found</div>

	const localProject = getProjectInfo(repository.name)

	return (
		<section className='min-h-screen flex flex-col gap-8 py-28 px-4 lg:px-20'>
			<div className='flex flex-col lg:flex-row gap-10'>
				<div className='flex flex-col flex-grow lg:w-1/2 bg-base-200 p-6 rounded-2xl gap-4'>
					<div className='flex items-center gap-3'>
						<h2 className='text-3xl font-bold'>
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
