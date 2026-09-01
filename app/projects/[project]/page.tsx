import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import type { ReactNode } from 'react'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'
import { Badge } from '@/components/core/Badge'
import { Breadcrumbs } from '@/components/core/Breadcrumbs'
import { Skill } from '@/components/core/Skill'
import { siteConfig } from '@/config/site'
import {
	type GitHubRepository,
	type GitHubRepositoryResult,
	getGitHubRepository
} from '@/github/client'
import type { BadgeId } from '@/projects/badges'
import { getCaseStudyBySlug } from '@/projects/case-studies'
import { getContrastTextColor } from '@/projects/color'
import {
	getProjectByRouteSlug,
	getRepositoryUrl,
	projectRouteSlugs
} from '@/projects/data'
import { ProjectCaseStudy } from '@/projects/ProjectCaseStudy'

type ProjectPageProps = {
	params: Promise<{ project: string }>
}

export const dynamicParams = false
export const revalidate = 3600

export function generateStaticParams() {
	return projectRouteSlugs.map((project) => ({ project }))
}

function ProjectCategory({ category }: { category: string }) {
	return (
		<span className='mx-1 border-l-4 border-secondary pl-2 font-mono text-lg font-bold text-secondary'>
			{category}
		</span>
	)
}

function ProjectBadges({ badges }: { badges: readonly BadgeId[] }) {
	if (badges.length === 0) return null

	return (
		<div className='flex flex-wrap gap-2'>
			{badges.map((badge) => (
				<Badge key={badge} id={badge} />
			))}
		</div>
	)
}

function SkillsSection({ skills }: { skills: readonly string[] }) {
	if (skills.length === 0) {
		return (
			<span className='text-base-content/70'>
				No technologies listed.
			</span>
		)
	}

	return (
		<div className='flex flex-wrap gap-2'>
			{skills.map((skill) => (
				<Skill key={skill} title={skill} />
			))}
		</div>
	)
}

function LanguagesSection({
	languages
}: {
	languages: GitHubRepository['languages']
}) {
	if (languages.length === 0) {
		return (
			<span className='text-base-content/70'>No languages reported.</span>
		)
	}

	return (
		<div className='flex flex-wrap gap-2'>
			{languages.map((language) => {
				const color = language.color ?? '#cccccc'

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
	className = '',
	headingLevel = 'h2',
	action
}: {
	title: string
	children: ReactNode
	className?: string
	headingLevel?: 'h1' | 'h2'
	action?: ReactNode
}) {
	const Heading = headingLevel

	return (
		<section
			className={`flex flex-col gap-4 rounded-2xl bg-base-200 p-6 shadow-sm ${className}`}
		>
			<div className='flex flex-wrap items-center gap-3'>
				<Heading
					className={
						headingLevel === 'h1'
							? 'text-3xl font-bold md:text-4xl'
							: 'text-2xl font-bold'
					}
				>
					{title}
				</Heading>
				{action}
			</div>
			{children}
		</section>
	)
}

function GitHubLink({
	href,
	projectName
}: {
	href: string
	projectName: string
}) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			title={`Open on GitHub: ${projectName}`}
			aria-label={`Open on GitHub: ${projectName}`}
			className='text-base-content/80 transition-all duration-300 hover:scale-110 hover:text-primary'
		>
			<AiFillGithub aria-hidden='true' className='h-8 w-8' />
		</a>
	)
}

function formatCount(count: number, singular: string, plural: string) {
	return `${count} ${count === 1 ? singular : plural}`
}

function StatsSection({ repository }: { repository: GitHubRepository }) {
	return (
		<div className='flex flex-wrap gap-4 text-base md:text-lg'>
			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				{repository.licenseName ? (
					<TbLicense aria-hidden='true' />
				) : (
					<TbLicenseOff aria-hidden='true' />
				)}
				{repository.licenseName ?? 'No license'}
			</span>

			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				<AiOutlineStar aria-hidden='true' />
				{formatCount(repository.stars, 'star', 'stars')}
			</span>

			<span className='inline-flex items-center gap-2 rounded-full border border-base-content/10 px-4 py-2'>
				<TbGitFork aria-hidden='true' />
				{formatCount(repository.forks, 'fork', 'forks')}
			</span>
		</div>
	)
}

function GitHubStatusNotice({ result }: { result: GitHubRepositoryResult }) {
	if (
		result.status === 'success' ||
		(result.status === 'error' && result.reason === 'missing-token')
	) {
		return null
	}

	let message: string

	if (result.status === 'not-found') {
		message =
			'The configured GitHub repository could not be found, so repository statistics are unavailable.'
	} else {
		message = 'Repository statistics are temporarily unavailable.'
	}

	return (
		<p role='status' className='text-sm text-base-content/60'>
			{message}
		</p>
	)
}

export async function generateMetadata({
	params
}: ProjectPageProps): Promise<Metadata> {
	const { project: routeSlug } = await params
	const project = getProjectByRouteSlug(routeSlug)

	if (!project) {
		return {
			title: `Project Not Found | ${siteConfig.name}`,
			description: 'This project could not be found.',
			robots: { index: false, follow: false }
		}
	}

	const title = `${project.displayName} | ${siteConfig.name}`
	const canonicalPath = `/projects/${project.slug}`

	return {
		title,
		description: project.description,
		keywords: [
			siteConfig.author.name,
			siteConfig.author.handle,
			'Project',
			...project.skills
		],
		alternates: {
			canonical: canonicalPath
		},
		openGraph: {
			title,
			description: project.description,
			url: canonicalPath,
			siteName: siteConfig.name,
			locale: 'en_US',
			type: 'article',
			images: [siteConfig.openGraphImage]
		},
		twitter: {
			card: 'summary',
			title,
			description: project.description,
			images: [siteConfig.openGraphImage.url]
		}
	}
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { project: routeSlug } = await params
	const project = getProjectByRouteSlug(routeSlug)

	if (!project) {
		notFound()
	}

	if (routeSlug !== project.slug) {
		redirect(`/projects/${project.slug}`)
	}

	const githubResult = await getGitHubRepository(project.repository)
	const repositoryUrl = getRepositoryUrl(project.repository)
	const caseStudy = getCaseStudyBySlug(project.slug)

	return (
		<main className='min-h-screen px-4 py-28 lg:px-20'>
			<div className='mx-auto flex max-w-7xl flex-col gap-8'>
				<div className='pl-2 lg:pl-0'>
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'Projects', href: '/projects' },
							{ label: project.displayName }
						]}
					/>
				</div>

				<GitHubStatusNotice result={githubResult} />

				<div className='grid gap-8 xl:grid-cols-[1.2fr_0.8fr]'>
					<InfoCard
						title={project.displayName}
						headingLevel='h1'
						action={
							<GitHubLink
								href={repositoryUrl}
								projectName={project.displayName}
							/>
						}
					>
						<div className='flex flex-col gap-4'>
							<ProjectCategory category={project.category} />
							<ProjectBadges badges={project.badges} />
							<p className='text-lg leading-relaxed text-base-content/85'>
								{project.description}
							</p>
						</div>

						{githubResult.status === 'success' && (
							<>
								<div className='divider my-1'>Languages</div>
								<LanguagesSection
									languages={
										githubResult.repository.languages
									}
								/>
							</>
						)}
					</InfoCard>

					<InfoCard title='Project Details'>
						{githubResult.status === 'success' && (
							<StatsSection
								repository={githubResult.repository}
							/>
						)}
						<div className='divider my-1'>Technologies</div>
						<SkillsSection skills={project.skills} />
					</InfoCard>
				</div>

				<InfoCard title='Case Study'>
					<ProjectCaseStudy {...caseStudy} />
				</InfoCard>
			</div>
		</main>
	)
}
