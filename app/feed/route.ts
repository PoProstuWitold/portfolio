import { Feed } from 'feed'
import {
	getPostRecencyDate,
	getPostSocialImagePath,
	parsePostDate
} from '@/blog/post-domain'
import { getPosts } from '@/blog/posts'
import { siteConfig } from '@/config/site'

const FEED_PATH = '/feed'

export async function GET() {
	const posts = await getPosts()
	const feedUrl = new URL(FEED_PATH, siteConfig.url).toString()
	const latestPostDate = posts[0]
		? getPostRecencyDate(posts[0].metadata)
		: new Date(0)
	const copyright = `Copyright © ${latestPostDate.getUTCFullYear()} ${siteConfig.author.name}`
	const author = {
		name: siteConfig.author.name,
		link: siteConfig.url,
		email: siteConfig.author.email
	}
	const feed = new Feed({
		title: `Blog | ${siteConfig.name}`,
		description: siteConfig.description,
		id: siteConfig.url,
		link: siteConfig.url,
		language: 'en-US',
		favicon: new URL('/favicon.ico', siteConfig.url).toString(),
		copyright,
		updated: latestPostDate,
		generator: `${siteConfig.name} feed`,
		author,
		category: 'Technology',
		docs: 'https://www.rssboard.org/rss-specification',
		feedLinks: {
			rss: feedUrl
		}
	})

	for (const post of posts) {
		const postUrl = new URL(`/blog/${post.slug}`, siteConfig.url).toString()
		const socialImagePath = getPostSocialImagePath(post.metadata)
		const socialImageUrl = socialImagePath
			? new URL(socialImagePath, siteConfig.url).toString()
			: null

		feed.addItem({
			title: post.metadata.title,
			id: postUrl,
			guid: postUrl,
			link: postUrl,
			description: post.metadata.description,
			date: getPostRecencyDate(post.metadata),
			published: parsePostDate(post.metadata.date),
			author: [author],
			category: post.metadata.tags.map((tag) => ({
				name: tag,
				slug: tag,
				term: tag
			})),
			copyright,
			...(socialImageUrl
				? {
						image: socialImageUrl,
						enclosure: {
							url: socialImageUrl,
							type: 'image/webp',
							title: post.metadata.title
						}
					}
				: {})
		})
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control':
				'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
		}
	})
}
