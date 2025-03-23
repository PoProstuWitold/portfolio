import { graphql } from '@octokit/graphql'
import type { ReactElement } from 'react'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'

import type { Repository } from '@/types'
import { caseStudies, owner, repoQuery } from '@/utils/constans'
import type { Metadata } from 'next'

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
			robots: {
				index: false,
				follow: false
			}
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

	if (!data) {
		return <div>Data not found</div>
	}
	const { repository } = data

	if (!repository) {
		return <div>Repository not found</div>
	}

	return (
		<section className='min-h-screen flex flex-col gap-2 lg:gap-10 pt-14 lg:pt-28'>
			<div className='flex flex-col lg:flex-row justify-start mx-2 lg:mx-20 lg:gap-10'>
				<div className='flex flex-col flex-grow lg:w-[50%] lg:bg-base-200 p-5 rounded-2xl'>
					<div className='flex flex-col gap-[0.5rem]'>
						<div className='flex flex-row gap-3 items-center'>
							<h2 className='text-3xl font-bold text-left'>
								{repository.name}
							</h2>
							<a
								className='link'
								target='_blank'
								rel='noreferrer'
								title={`${repository.name} GitHub link`}
								href={`https://github.com/${repository.owner.login}/${repository.name}`}
							>
								<AiFillGithub className='transition-all active:scale-90 hover:scale-125 duration-300 hover:text-primary ease-in-out w-10 h-10' />
							</a>
						</div>
						<p>{repository.description}</p>
					</div>
				</div>

				<div className='flex flex-col flex-grow lg:w-[50%] mx-0 gap-8 lg:bg-base-200 p-5 rounded-2xl'>
					<div className='flex flex-col gap-1'>
						<h3 className='text-2xl font-bold'>Stats</h3>
						<div className='flex flex-col md:flex-row gap-2 md:gap-10 justify-between md:text-lg text-md lg:gap-4'>
							<span className='flex items-center text-center gap-1'>
								{repository.licenseInfo ? (
									<>
										<TbLicense />{' '}
										{repository.licenseInfo.name}
									</>
								) : (
									<>
										<TbLicenseOff /> No licence
									</>
								)}
							</span>
							<span className='flex items-center text-center gap-1'>
								<AiOutlineStar className='w-5 h-5' />
								<p>{repository.stargazers.totalCount} stars</p>
							</span>
							<span className='flex items-center text-center gap-1'>
								<TbGitFork />
								<p>{repository.forks.totalCount} forks</p>
							</span>
						</div>
					</div>

					<div className='flex flex-col'>
						<h3 className='text-2xl font-bold'>Languages</h3>
						<div className='flex flex-row gap-2 flex-wrap'>
							{repository.languages.nodes.map(
								(lang: Repository['languages']['nodes'][0]) => (
									<span
										className='px-1 max-w-fit border-4 font-semibold border-transparent'
										key={`${repository.name}:${lang.name}`}
										style={{
											borderBottomColor: `${lang.color}`
										}}
									>
										{lang.name}
									</span>
								)
							)}
							{!repository.languages.nodes.length &&
								'No languages, huh?'}
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col text-justify mx-2 lg:mx-20 gap-2 mb-20 lg:bg-base-200 p-5 rounded-2xl'>
				<h2 className='text-3xl font-bold text-left'>Case study</h2>
				<p>
					{caseStudies.get(repository.name) ||
						'Congrats! You found easter egg!'}
				</p>
			</div>
		</section>
	)
}
