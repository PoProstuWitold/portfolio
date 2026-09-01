import { deepStrictEqual, strictEqual, throws } from 'node:assert'
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

const validMetadata = {
	title: 'A valid post',
	description: 'A useful description.',
	authors: ['Witold Zawada'],
	date: '2025-01-10 09:00',
	updated: '2025-01-12 10:30',
	tags: ['TypeScript'],
	socialImage: 'images/blog/example.webp'
}

describe('blog post metadata', () => {
	it('accepts complete, typed frontmatter', () => {
		deepStrictEqual(
			validatePostMetadata(validMetadata, 'valid-post.md'),
			validMetadata
		)
	})

	it('reports the source file for invalid frontmatter', () => {
		throws(
			() =>
				validatePostMetadata(
					{ ...validMetadata, date: 'January 10, 2025' },
					'broken-post.md'
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
				'unsafe-image.md'
			)
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
