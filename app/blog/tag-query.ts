export type BlogTagQuery = string | string[] | undefined

export function getSelectedBlogTags(
	value: BlogTagQuery,
	availableTags: readonly string[]
): string[] {
	const requestedTags = value === undefined ? [] : [value].flat()
	const availableTagSet = new Set(availableTags)

	return Array.from(
		new Set(requestedTags.filter((tag) => availableTagSet.has(tag)))
	)
}

export function getBlogTagHref(tags: readonly string[]): string {
	const searchParams = new URLSearchParams()

	for (const tag of tags) {
		searchParams.append('tag', tag)
	}

	const query = searchParams.toString()
	return query ? `/blog?${query}` : '/blog'
}
