import 'server-only'

import { readdir, readFile } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import matter from 'gray-matter'
import { cache } from 'react'
import readingTime from 'reading-time'
import {
	comparePostsByRecency,
	isSafePostSlug,
	type Post,
	type PostSummary,
	validatePostMetadata
} from './post-domain'

export const POSTS_DIRECTORY = join(process.cwd(), 'app', 'content', 'posts')

export const getPost = cache(async (slug: string): Promise<Post | null> => {
	assertSafePostSlug(slug)

	const fileName = `${slug}.md`
	const source = await readPostSource(fileName)

	if (source === null) {
		return null
	}

	const { content, metadata } = parsePostSource(source, fileName)

	return {
		slug,
		metadata,
		content,
		readingTime: readingTime(content).text
	}
})

export async function getPostSource(slug: string): Promise<string | null> {
	assertSafePostSlug(slug)
	const fileName = `${slug}.md`
	const source = await readPostSource(fileName)

	if (source !== null) {
		parsePostSource(source, fileName)
	}

	return source
}

export async function getPosts(): Promise<PostSummary[]> {
	const fileNames = await getPostFileNames()
	const posts = await Promise.all(
		fileNames.map(async (fileName): Promise<PostSummary> => {
			const source = await readFile(
				join(POSTS_DIRECTORY, fileName),
				'utf8'
			)
			const { content, metadata } = parsePostSource(source, fileName)

			return {
				slug: basename(fileName, '.md'),
				metadata,
				readingTime: readingTime(content).text
			}
		})
	)

	return posts.sort(comparePostsByRecency)
}

export async function getPostSlugs(): Promise<string[]> {
	const fileNames = await getPostFileNames()
	return fileNames.map((fileName) => basename(fileName, '.md'))
}

export function getPostTags(posts: PostSummary[]): string[] {
	return Array.from(
		new Set(posts.flatMap((post) => post.metadata.tags))
	).sort((left, right) => left.localeCompare(right))
}

async function getPostFileNames(): Promise<string[]> {
	const entries = await readdir(POSTS_DIRECTORY, { withFileTypes: true })

	return entries
		.filter(
			(entry) =>
				entry.isFile() &&
				extname(entry.name) === '.md' &&
				isSafePostSlug(basename(entry.name, '.md'))
		)
		.map((entry) => entry.name)
		.sort((left, right) => left.localeCompare(right))
}

async function readPostSource(fileName: string): Promise<string | null> {
	try {
		return await readFile(join(POSTS_DIRECTORY, fileName), 'utf8')
	} catch (error) {
		if (isFileNotFoundError(error)) {
			return null
		}

		throw error
	}
}

function parsePostSource(source: string, fileName: string) {
	let parsed: ReturnType<typeof matter>

	try {
		parsed = matter(source)
	} catch (error) {
		throw new Error(`Unable to parse blog post "${fileName}"`, {
			cause: error
		})
	}

	const rawMetadata: unknown = parsed.data

	return {
		content: parsed.content,
		metadata: validatePostMetadata(rawMetadata, fileName)
	}
}

function assertSafePostSlug(slug: string): void {
	if (!isSafePostSlug(slug)) {
		throw new TypeError(`Unsafe blog post slug: ${slug}`)
	}
}

function isFileNotFoundError(error: unknown): boolean {
	return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}
