import { deepStrictEqual, match, strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import { badgeIds, isBadgeId } from '../app/projects/badges'
import { caseStudies } from '../app/projects/case-studies'
import {
	featuredProjects,
	getProjectByRouteSlug,
	getRepositoryUrl,
	projectRouteSlugs,
	projects
} from '../app/projects/data'
import { hasSkillMetadata } from '../app/skills/data'

const PROJECT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

describe('project configuration', () => {
	it('uses unique canonical slugs with a URL-safe format', () => {
		const slugs = projects.map((project) => project.slug)

		strictEqual(new Set(slugs).size, slugs.length)
		for (const slug of slugs) {
			match(slug, PROJECT_SLUG_PATTERN)
		}
	})

	it('uses unique repositories and valid, stable GitHub links', () => {
		const repositoryIds = projects.map((project) =>
			`${project.repository.owner}/${project.repository.name}`.toLowerCase()
		)
		const repositoryUrls = projects.map((project) =>
			getRepositoryUrl(project.repository)
		)

		strictEqual(new Set(repositoryIds).size, repositoryIds.length)
		strictEqual(new Set(repositoryUrls).size, repositoryUrls.length)

		for (const repositoryUrl of repositoryUrls) {
			const url = new URL(repositoryUrl)
			strictEqual(url.protocol, 'https:')
			strictEqual(url.hostname, 'github.com')
		}
	})

	it('only references badge identifiers from the shared registry', () => {
		strictEqual(new Set(badgeIds).size, badgeIds.length)

		for (const project of projects) {
			for (const badge of project.badges) {
				strictEqual(isBadgeId(badge), true)
			}
		}
	})

	it('has local case-study data for every configured project', () => {
		for (const project of projects) {
			strictEqual(Object.hasOwn(caseStudies, project.slug), true)
		}
	})

	it('derives featured projects from the primary project collection', () => {
		deepStrictEqual(
			featuredProjects,
			projects.filter((project) =>
				project.badges.some((badge) => badge === 'featured')
			)
		)
		strictEqual(
			featuredProjects.every((project) =>
				project.badges.some((badge) => badge === 'featured')
			),
			true
		)
	})

	it('keeps route aliases unique and resolves the legacy Sayuna URL', () => {
		strictEqual(new Set(projectRouteSlugs).size, projectRouteSlugs.length)

		for (const routeSlug of projectRouteSlugs) {
			strictEqual(getProjectByRouteSlug(routeSlug) !== undefined, true)
		}

		strictEqual(getProjectByRouteSlug('Sayuna')?.slug, 'sayuna')
	})

	it('defines metadata for every displayed technology', () => {
		for (const project of projects) {
			for (const skill of project.skills) {
				strictEqual(
					hasSkillMetadata(skill),
					true,
					`Missing skill metadata for ${skill}`
				)
			}
		}
	})
})
