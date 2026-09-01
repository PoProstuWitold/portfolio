import type { MetadataRoute } from 'next'
import { getPostRecencyDate } from '@/blog/post-domain'
import { getPosts } from '@/blog/posts'
import { siteConfig } from '@/config/site'
import { projects } from '@/projects/data'

function absoluteUrl(path: string): string {
	return new URL(path, siteConfig.url).toString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPosts()
	const latestPostDate = posts[0]
		? getPostRecencyDate(posts[0].metadata)
		: undefined

	return [
		{
			url: absoluteUrl('/'),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: absoluteUrl('/blog'),
			...(latestPostDate ? { lastModified: latestPostDate } : {}),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		...posts.map(({ slug, metadata }) => ({
			url: absoluteUrl(`/blog/${slug}`),
			lastModified: getPostRecencyDate(metadata),
			changeFrequency: 'monthly' as const,
			priority: 0.7
		})),
		{
			url: absoluteUrl('/projects'),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		...projects.map(({ slug }) => ({
			url: absoluteUrl(`/projects/${slug}`),
			changeFrequency: 'monthly' as const,
			priority: 0.7
		}))
	]
}
