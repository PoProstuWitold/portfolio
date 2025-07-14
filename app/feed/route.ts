import { join } from 'node:path'
import { Feed } from 'feed'
import { NextResponse } from 'next/server'
import { getPosts } from '@/content/blog-utils'

export async function GET() {
	const posts = await getPosts(join(process.cwd(), 'app/content/posts'))
	const siteUrl = 'https://witoldzawada.dev'

	const author = {
		name: 'Witold Zawada',
		link: siteUrl,
		email: 'witoldzawada.dev@gmail.com'
	}

	const copyright = `Copyright © ${new Date().getFullYear()} Witold Zawada`

	const esc = (str: string) =>
		str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;')

	const feed = new Feed({
		title: 'Blog | Witold Zawada',
		description:
			'Technical and beginner-friendly articles about programming, especially modern web development, tech and selfhosting. Written by Witold Zawada.',
		id: `${siteUrl}/`,
		link: `${siteUrl}/`,
		language: 'en-US',
		favicon: `${siteUrl}/favicon.ico`,
		copyright,
		updated: new Date(),
		generator: 'Custom Feed Generator',
		author,
		category: 'Technology',
		docs: 'https://www.rssboard.org/rss-specification',
		// XML parsing error: <unknown>:14:0: unbound prefix
		feed: `${siteUrl}/feed`,
		feedLinks: {
			atom: `${siteUrl}/feed`,
			rss: `${siteUrl}/feed`
		}
	})

	posts.forEach((post) => {
		feed.addItem({
			title: esc(post.data.title),
			id: `${siteUrl}/blog/${post.slug}`.trim(),
			link: `${siteUrl}/blog/${post.slug}`.trim(),
			description: esc(post.data.description || ''),
			date: new Date(post.data.date),
			author: [author],
			category: post.data.tags.map((tag) => ({
				name: tag,
				slug: tag,
				term: tag
			})),
			guid: post.data.title,
			image: `${siteUrl}/${post.data.socialImage}`,
			copyright,
			published: new Date(post.data.date),
			enclosure: {
				url: `${siteUrl}/${post.data.socialImage}`,
				type: 'image/webp',
				title: post.data.title
			}
		})
	})

	const finalXml = feed
		.rss2()
		.replace(
			'</channel>',
			'<managingEditor>witoldzawada.dev@gmail.com (Witold Zawada)</managingEditor>\n</channel>'
		)

	return new NextResponse(finalXml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	})
}
