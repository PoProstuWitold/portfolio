import 'server-only'

import { GraphqlResponseError, graphql } from '@octokit/graphql'
import { cache } from 'react'
import type { ProjectRepository } from '@/projects/types'

const repositoryQuery = `
	query getRepository($owner: String!, $name: String!) {
		repository(owner: $owner, name: $name) {
			languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
				nodes {
					name
					color
				}
			}
			stargazers {
				totalCount
			}
			forks {
				totalCount
			}
			licenseInfo {
				name
			}
		}
	}
`

type RepositoryQueryResponse = {
	repository: {
		languages: {
			nodes: Array<{
				name: string
				color: string | null
			} | null> | null
		} | null
		stargazers: {
			totalCount: number
		}
		forks: {
			totalCount: number
		}
		licenseInfo: {
			name: string
		} | null
	} | null
}

export type GitHubRepository = {
	languages: Array<{
		name: string
		color: string | null
	}>
	stars: number
	forks: number
	licenseName: string | null
}

export type GitHubRepositoryResult =
	| {
			status: 'success'
			repository: GitHubRepository
	  }
	| {
			status: 'not-found'
	  }
	| {
			status: 'error'
			reason: 'missing-token' | 'external-api'
	  }

function isNotFoundError(error: unknown): boolean {
	if (error instanceof GraphqlResponseError) {
		return error.errors?.some((item) => item.type === 'NOT_FOUND') ?? false
	}

	return (
		typeof error === 'object' &&
		error !== null &&
		'status' in error &&
		error.status === 404
	)
}

export const getGitHubRepository = cache(
	async ({
		owner,
		name
	}: ProjectRepository): Promise<GitHubRepositoryResult> => {
		const token = process.env.GITHUB_TOKEN

		if (!token) {
			return { status: 'error', reason: 'missing-token' }
		}

		try {
			const response = await graphql<RepositoryQueryResponse>(
				repositoryQuery,
				{
					owner,
					name,
					headers: {
						authorization: `bearer ${token}`
					}
				}
			)

			if (!response.repository) {
				return { status: 'not-found' }
			}

			return {
				status: 'success',
				repository: {
					languages: (
						response.repository.languages?.nodes ?? []
					).filter(
						(language): language is NonNullable<typeof language> =>
							language !== null
					),
					stars: response.repository.stargazers.totalCount,
					forks: response.repository.forks.totalCount,
					licenseName: response.repository.licenseInfo?.name ?? null
				}
			}
		} catch (error) {
			if (isNotFoundError(error)) {
				return { status: 'not-found' }
			}

			console.warn(
				`[GitHub] Repository enrichment failed for ${owner}/${name}.`
			)

			return { status: 'error', reason: 'external-api' }
		}
	}
)
