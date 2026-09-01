import type { ReactNode } from 'react'
import type { BadgeId } from './badges'

export type ProjectRepository = {
	owner: string
	name: string
}

export type Project = {
	slug: string
	displayName: string
	description: string
	category: string
	skills: readonly string[]
	repository: ProjectRepository
	badges: readonly BadgeId[]
	legacySlugs?: readonly string[]
}

export type ProjectCaseStudy = {
	challenge: ReactNode
	engineering: ReactNode
	outcome: ReactNode
}
