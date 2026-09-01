import GithubSlugger from 'github-slugger'
import { DateTime } from 'luxon'

export interface PostMetadata {
	title: string
	description: string
	authors: string[]
	date: string
	updated?: string
	tags: string[]
	socialImage?: string
}

export interface PostSummary {
	slug: string
	metadata: PostMetadata
	readingTime: string
}

export interface Post extends PostSummary {
	content: string
}

export interface PostHeading {
	id: string
	level: number
	text: string
}

const POST_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const POST_DATE_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/
const POST_DATE_FORMAT = 'yyyy-MM-dd HH:mm'
const POST_DATE_ZONE = 'Europe/Warsaw'
const SOCIAL_IMAGE_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/
const FRONTMATTER_FIELDS = new Set([
	'title',
	'description',
	'authors',
	'date',
	'updated',
	'tags',
	'socialImage'
])

export function isSafePostSlug(slug: string): boolean {
	return POST_SLUG_PATTERN.test(slug)
}

export function isPostDate(value: string): boolean {
	return parsePostDateTime(value) !== null
}

export function parsePostDate(value: string): Date {
	const dateTime = parsePostDateTime(value)

	if (!dateTime) {
		throw new TypeError(
			`Invalid post date: ${value}. Expected ${POST_DATE_FORMAT} in ${POST_DATE_ZONE}.`
		)
	}

	return dateTime.toJSDate()
}

export function formatPostDate(value: string): string {
	const dateTime = getValidPostDateTime(value)
	return dateTime.setLocale('en-US').toFormat('dd LLLL yyyy, HH:mm')
}

export function toIsoPostDate(value: string): string {
	const isoDate = getValidPostDateTime(value).toISO({
		suppressMilliseconds: true
	})

	if (!isoDate) {
		throw new TypeError(`Unable to serialize post date: ${value}`)
	}

	return isoDate
}

export function getPostRecencyDate(metadata: PostMetadata): Date {
	return parsePostDate(metadata.updated ?? metadata.date)
}

export function comparePostsByRecency(
	left: PostSummary,
	right: PostSummary
): number {
	const dateDifference =
		getPostRecencyDate(right.metadata).getTime() -
		getPostRecencyDate(left.metadata).getTime()

	return dateDifference || left.slug.localeCompare(right.slug)
}

export function validatePostMetadata(
	value: unknown,
	fileName: string
): PostMetadata {
	if (!isRecord(value)) {
		throw frontmatterError(fileName, 'frontmatter must be an object')
	}

	for (const field of Object.keys(value)) {
		if (!FRONTMATTER_FIELDS.has(field)) {
			throw frontmatterError(fileName, `unexpected field "${field}"`)
		}
	}

	const title = readRequiredString(value, 'title', fileName)
	const description = readRequiredString(value, 'description', fileName)
	const authors = readStringList(value, 'authors', fileName)
	const date = readRequiredString(value, 'date', fileName)
	const updated = readOptionalString(value, 'updated', fileName)
	const tags = readStringList(value, 'tags', fileName)
	const socialImage = readOptionalString(value, 'socialImage', fileName)

	if (!isPostDate(date)) {
		throw frontmatterError(
			fileName,
			`field "date" must use ${POST_DATE_FORMAT} in ${POST_DATE_ZONE}`
		)
	}

	if (updated && !isPostDate(updated)) {
		throw frontmatterError(
			fileName,
			`field "updated" must use ${POST_DATE_FORMAT} in ${POST_DATE_ZONE}`
		)
	}

	if (socialImage && !isSafeSocialImagePath(socialImage)) {
		throw frontmatterError(
			fileName,
			'field "socialImage" must be a safe path below the public directory'
		)
	}

	return {
		title,
		description,
		authors,
		date,
		tags,
		...(updated ? { updated } : {}),
		...(socialImage ? { socialImage } : {})
	}
}

export function getPostSocialImagePath(metadata: PostMetadata): string | null {
	return metadata.socialImage ? `/${metadata.socialImage}` : null
}

export function getPostHeadings(content: string): PostHeading[] {
	const slugger = new GithubSlugger()
	const headings: PostHeading[] = []
	let fenceCharacter: string | null = null
	let fenceLength = 0

	for (const line of content.split(/\r?\n/)) {
		const fenceMatch = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line)

		if (fenceMatch) {
			const fence = fenceMatch[1]
			const character = fence.charAt(0)

			if (fenceCharacter === null) {
				fenceCharacter = character
				fenceLength = fence.length
			} else if (
				character === fenceCharacter &&
				fence.length >= fenceLength &&
				fenceMatch[2].trim().length === 0
			) {
				fenceCharacter = null
				fenceLength = 0
			}

			continue
		}

		if (fenceCharacter !== null) {
			continue
		}

		const match = /^ {0,3}(#{1,4})\s+(.+?)\s*#*\s*$/.exec(line)

		if (!match) {
			continue
		}

		const marker = match[1]
		const rawText = match[2]
		const text = rawText
			.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
			.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
			.replace(/[*_~`]/g, '')
			.trim()

		if (text) {
			headings.push({
				id: slugger.slug(text),
				level: marker.length + 1,
				text
			})
		}
	}

	return headings
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parsePostDateTime(value: string): DateTime | null {
	if (!POST_DATE_PATTERN.test(value)) {
		return null
	}

	const dateTime = DateTime.fromFormat(value, POST_DATE_FORMAT, {
		locale: 'en-US',
		zone: POST_DATE_ZONE,
		setZone: true
	})

	return dateTime.isValid && dateTime.toFormat(POST_DATE_FORMAT) === value
		? dateTime
		: null
}

function getValidPostDateTime(value: string): DateTime {
	const dateTime = parsePostDateTime(value)

	if (!dateTime) {
		throw new TypeError(
			`Invalid post date: ${value}. Expected ${POST_DATE_FORMAT} in ${POST_DATE_ZONE}.`
		)
	}

	return dateTime
}

function readRequiredString(
	value: Record<string, unknown>,
	field: string,
	fileName: string
): string {
	const fieldValue = value[field]

	if (typeof fieldValue !== 'string' || fieldValue.trim().length === 0) {
		throw frontmatterError(
			fileName,
			`field "${field}" must be a non-empty string`
		)
	}

	return fieldValue
}

function readOptionalString(
	value: Record<string, unknown>,
	field: string,
	fileName: string
): string | undefined {
	const fieldValue = value[field]

	if (fieldValue === undefined) {
		return undefined
	}

	if (typeof fieldValue !== 'string' || fieldValue.trim().length === 0) {
		throw frontmatterError(
			fileName,
			`field "${field}" must be a non-empty string when provided`
		)
	}

	return fieldValue
}

function readStringList(
	value: Record<string, unknown>,
	field: string,
	fileName: string
): string[] {
	const fieldValue = value[field]

	if (
		!Array.isArray(fieldValue) ||
		fieldValue.length === 0 ||
		!fieldValue.every(
			(item) => typeof item === 'string' && item.trim().length > 0
		)
	) {
		throw frontmatterError(
			fileName,
			`field "${field}" must be a non-empty list of strings`
		)
	}

	if (new Set(fieldValue).size !== fieldValue.length) {
		throw frontmatterError(
			fileName,
			`field "${field}" must not contain duplicate values`
		)
	}

	return fieldValue
}

function isSafeSocialImagePath(value: string): boolean {
	return (
		SOCIAL_IMAGE_PATTERN.test(value) &&
		!value.startsWith('/') &&
		!value.includes('//') &&
		!value.split('/').some((segment) => segment === '.' || segment === '..')
	)
}

function frontmatterError(fileName: string, message: string): TypeError {
	return new TypeError(`Invalid frontmatter in "${fileName}": ${message}`)
}
