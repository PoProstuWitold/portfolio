import { graphql } from '@octokit/graphql'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactElement, ReactNode } from 'react'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { FaHourglassHalf } from 'react-icons/fa'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'
import { Badge } from '@/components/core/Badge'
import { Breadcrumbs } from '@/components/core/Breadcrumbs'
import { Skill } from '@/components/core/Skill'
import type { Repository } from '@/types'
import { caseStudies } from '@/utils/caseStudies'
import { owner, projects, repoQuery } from '@/utils/constans'
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
	return projects.find((project) => project.name === name) ?? null
}

async function fetchRepository(project: string): Promise<Repository | null> {
	try {
		const data = (await graphqlWithAuth(repoQuery, {
			repo: project,
			owner
		})) as Data

		return data.repository ?? null
	} catch (error) {
		console.info(error)
		return null
	}
}

function ProjectType({ type }: { type?: string }) {
	if (!type) return null

	return (
		<span className='mx-1 border-l-4 border-secondary pl-2 font-mono text-lg font-bold text-secondary'>
			{type}
		</span>
	)
}

function ProjectBadges({ badges }: { badges?: string[] }) {
	if (!badges?.length) return null

	return (
		<div className='flex flex-wrap gap-2'>
			{badges.map((badge, index) => (
				<Badge key={`${index}:${badge}`} type={badge} />
			))}
		</div>
	)
}

function SkillsSection({ skills }: { skills?: string[] }) {
	if (!skills?.length) {
		return (
			<span className='text-base-content/70'>No technologies found.</span>
		)
	}

	return (
		<div className='flex flex-wrap gap-2'>
			{skills.map((skill, index) => (
				<Skill key={`${index}:${skill}`} title={skill} />
			))}
		</div>
	)
}

function LanguagesSection({
	languages
}: {
	languages: Repository['languages']['nodes']
}) {
	if (!languages.length) {
		return <span className='text-base-content/70'>No languages found.</span>
	}

	return (
		<div className='flex flex-wrap gap-2'>
			{languages.map((language) => {
				const color = language.color || '#cccccc'

				return (
					<span
						key={language.name}
						className='badge badge-outline p-3 font-semibold'
						style={{
							backgroundColor: color,
							color: getContrastTextColor(color)
						}}
					>
						{language.name}
					</span>
				)
			})}
		</div>
	)
}

function InfoCard({
	title,
	children,
	className = ''
}: {
	title: string
	children: ReactNode
	className?: string
}) {
	return (
		<section
			className={`flex flex-col gap-4 rounded-2xl bg-base-200 p-6 shadow-sm ${className}`}
		>
			<h2 className='text-2xl font-bold'>{title}</h2>
			{children}
		</section>
	)
}

function InProgressBanner() {
	return (
		<div className='alert border border-info/20 bg-info/10 text-info-content shadow-sm'>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<FaHourglassHalf className='h-5 w-5' />
					<span className='text-lg font-bold'>In Progress</span>
				</div>
				<span className='text-base font-medium text-base-content/80'>
					This project is still under development. Some information
					may be incomplete or not public yet.
				</span>
			</div>
		</div>
	)
}

function GitHubLink({
	ownerLogin,
	repositoryName
}: {
	ownerLogin: string
	repositoryName: string
}) {
	return (
		<a
			href={`https://github.com/${ownerLogin}/${repositoryName}`}
			target='_blank'
			rel='noreferrer'
			title='Open GitHub repository'
			aria-label='Open GitHub repository'
			className='text-base-content/80 transition-all duration-300 hover:scale-110 hover:text-primary'
		>
			<AiFillGithub className='h-8 w-8' />
		</a>
	)
}

function StatsSection({ repository }: { repository: Repository }) {
	return (
		<div className='flex flex-wrap gap-4 text-base md:text-lg'>
			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				{repository.licenseInfo ? <TbLicense /> : <TbLicenseOff />}
				{repository.licenseInfo?.name || 'No license'}
			</span>

			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				<AiOutlineStar />
				{repository.stargazers.totalCount} stars
			</span>

			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				<TbGitFork />
				{repository.forks.totalCount} forks
			</span>
		</div>
	)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { project } = await params
	const repository = await fetchRepository(project)

	if (!project) {
		return {
			title: 'Project Not Found | Witold Zawada',
			description: 'This project could not be found.',
			robots: { index: false, follow: false }
		}
	}

	const title = repository
		? `${repository.name} | Witold Zawada`
		: `${project} | Witold Zawada`

	const description =
		repository?.description ||
		'Technical project by Witold Zawada, including stack, repository details, and case study.'

	return {
		title,
		description,
		keywords: [
			'Witold Zawada',
			'PoProstuWitold',
			'Software Engineer',
			'TypeScript',
			'Go',
			'Open Source',
			'Project',
			project
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
}: Props): Promise<ReactElement> {
	const { project } = await params

	const [repository, localProject] = await Promise.all([
		fetchRepository(project),
		Promise.resolve(getProjectInfo(project))
	])

	if (!repository && !localProject) {
		notFound()
	}

	const projectName =
		localProject?.formattedName || repository?.name || project
	const projectType = localProject?.type
	const projectDescription =
		repository?.description || localProject?.description?.trim() || null
	const projectBadges = localProject?.badges
	const projectSkills = localProject?.skills || []
	const isRepositoryAvailable = Boolean(repository)

	return (
		<main className='min-h-screen px-4 py-28 lg:px-20'>
			<div className='mx-auto flex max-w-7xl flex-col gap-8'>
				<div className='pl-2 lg:pl-0'>
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'Projects', href: '/projects' },
							{ label: projectName }
						]}
					/>
				</div>
				{!isRepositoryAvailable && localProject && <InProgressBanner />}

				<div className='grid gap-8 xl:grid-cols-[1.2fr_0.8fr]'>
					<InfoCard title='Overview'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-wrap items-center gap-3'>
								<h1 className='text-3xl font-bold md:text-4xl'>
									{projectName}
								</h1>

								{repository && (
									<GitHubLink
										ownerLogin={repository.owner.login}
										repositoryName={repository.name}
									/>
								)}
							</div>

							<ProjectType type={projectType} />
							<ProjectBadges badges={projectBadges} />

							{projectDescription && (
								<p className='text-lg leading-relaxed text-base-content/85'>
									{projectDescription}
								</p>
							)}
						</div>

						{repository && (
							<>
								<div className='divider my-1'>Languages</div>
								<LanguagesSection
									languages={repository.languages.nodes}
								/>
							</>
						)}
					</InfoCard>

					<InfoCard title='Project Details'>
						{repository ? (
							<>
								<StatsSection repository={repository} />
								<div className='divider my-1'>Technologies</div>
								<SkillsSection skills={projectSkills} />
							</>
						) : (
							<>
								<p className='text-base-content/80'>
									This repository is not public yet, but the
									project information below is already
									available.
								</p>
								<div className='divider my-1'>Technologies</div>
								<SkillsSection skills={projectSkills} />
							</>
						)}
					</InfoCard>
				</div>

				<InfoCard title='Case Study'>
					{repository ? (
						<div className='leading-relaxed text-base-content/90'>
							{caseStudies.get(repository.name) || (
								<p>
									This project does not have a dedicated case
									study yet.
								</p>
							)}
						</div>
					) : (
						<div className='leading-relaxed text-base-content/80'>
							<p>
								This project is currently in progress or not yet
								publicly available on GitHub.
							</p>
						</div>
					)}
				</InfoCard>
			</div>
		</main>
	)
}
