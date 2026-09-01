import { deepStrictEqual, strictEqual, throws } from 'node:assert'
import { statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import {
	comparePostsByRecency,
	formatPostDate,
	getPostHeadings,
	isSafePostSlug,
	type PostSummary,
	toIsoPostDate,
	validatePostMetadata
} from '../app/blog/post-domain'
import { getBlogTagHref, getSelectedBlogTags } from '../app/blog/tag-query'

const publicDirectory = join(process.cwd(), 'public')
const validationOptions = {
	socialImageExists(path: string) {
		try {
			return statSync(join(publicDirectory, path)).isFile()
		} catch {
			return false
		}
	}
}

const validMetadata = {
	title: 'A valid post',
	description: 'A useful description.',
	authors: ['Witold Zawada'],
	date: '2025-01-10 09:00',
	updated: '2025-01-12 10:30',
	tags: ['TypeScript'],
	socialImage: 'images/blog/rss-atom.webp'
}

describe('blog post metadata', () => {
	it('accepts complete, typed frontmatter', () => {
		deepStrictEqual(
			validatePostMetadata(
				validMetadata,
				'valid-post.md',
				validationOptions
			),
			validMetadata
		)
	})

	it('reports the source file for invalid frontmatter', () => {
		throws(
			() =>
				validatePostMetadata(
					{ ...validMetadata, date: 'January 10, 2025' },
					'broken-post.md',
					validationOptions
				),
			/Invalid frontmatter in "broken-post\.md"/
		)
	})

	it('formats local publication times and serializes their Warsaw offset', () => {
		strictEqual(
			formatPostDate(validMetadata.date),
			'10 January 2025, 09:00'
		)
		strictEqual(
			toIsoPostDate(validMetadata.date),
			'2025-01-10T09:00:00+01:00'
		)
	})

	it('rejects unsafe social image paths', () => {
		throws(() =>
			validatePostMetadata(
				{ ...validMetadata, socialImage: '../private.webp' },
				'unsafe-image.md',
				validationOptions
			)
		)
	})

	it('requires updated to be on or after the publication date', () => {
		throws(
			() =>
				validatePostMetadata(
					{
						...validMetadata,
						updated: '2025-01-09 09:00'
					},
					'invalid-update.md',
					validationOptions
				),
			/field "updated" must not be earlier than field "date"/
		)
	})

	it('trims string values before returning validated metadata', () => {
		deepStrictEqual(
			validatePostMetadata(
				{
					...validMetadata,
					title: '  A valid post  ',
					authors: ['  Witold Zawada  '],
					tags: [' TypeScript '],
					socialImage: ' images/blog/rss-atom.webp '
				},
				'trimmed-post.md',
				validationOptions
			),
			validMetadata
		)
	})

	it('accepts an existing social image and rejects a missing file', () => {
		strictEqual(
			validatePostMetadata(
				validMetadata,
				'existing-image.md',
				validationOptions
			).socialImage,
			'images/blog/rss-atom.webp'
		)

		throws(
			() =>
				validatePostMetadata(
					{
						...validMetadata,
						socialImage: 'images/blog/does-not-exist.webp'
					},
					'missing-image.md',
					validationOptions
				),
			/missing public file: "images\/blog\/does-not-exist\.webp"/
		)
	})
})

describe('blog post ordering and slugs', () => {
	it('sorts by updated date when present, otherwise by publication date', () => {
		const posts: PostSummary[] = [
			{
				slug: 'newer-publication',
				metadata: {
					...validMetadata,
					date: '2025-02-01 09:00',
					updated: undefined
				},
				readingTime: '1 min read'
			},
			{
				slug: 'recently-updated',
				metadata: {
					...validMetadata,
					date: '2024-01-01 09:00',
					updated: '2025-03-01 09:00'
				},
				readingTime: '1 min read'
			}
		]

		posts.sort(comparePostsByRecency)
		deepStrictEqual(
			posts.map((post) => post.slug),
			['recently-updated', 'newer-publication']
		)
	})

	it('accepts canonical slugs and rejects traversal attempts', () => {
		strictEqual(isSafePostSlug('safe-post-2'), true)
		strictEqual(isSafePostSlug('../safe-post'), false)
		strictEqual(isSafePostSlug('safe/post'), false)
		strictEqual(isSafePostSlug('Safe-Post'), false)
	})

	it('extracts document headings but ignores code fences', () => {
		deepStrictEqual(
			getPostHeadings(
				'# Overview\n```sh\n```not-a-closing-fence\n# not-a-heading\n```\n## Details'
			),
			[
				{ id: 'overview', level: 2, text: 'Overview' },
				{ id: 'details', level: 3, text: 'Details' }
			]
		)
	})
})

describe('blog tag query', () => {
	it('uses repeated query parameters without splitting hyphenated tags', () => {
		const href = getBlogTagHref(['Node.js', 'CI-CD'])
		const url = new URL(href, 'https://example.com')

		deepStrictEqual(url.searchParams.getAll('tag'), ['Node.js', 'CI-CD'])
		deepStrictEqual(
			getSelectedBlogTags(url.searchParams.getAll('tag'), [
				'Node.js',
				'CI-CD'
			]),
			['Node.js', 'CI-CD']
		)
	})

	it('ignores unknown and duplicate tag query values', () => {
		deepStrictEqual(
			getSelectedBlogTags(['Node.js', 'unknown', 'Node.js'], ['Node.js']),
			['Node.js']
		)
		strictEqual(getBlogTagHref([]), '/blog')
	})
})
