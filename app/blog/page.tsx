import { getPosts, getTags } from '@/content/blog-utils'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
	title: 'Blog | Witold Zawada',
	description:
		'Technical and beginner-friendly articles about programming, especially modern web development, tech and selfhosting. Written by Witold Zawada.',
	classification: 'Tech Blog',
	metadataBase: new URL('https://witoldzawada.dev'),
	keywords: [
		'Blog',
		'Tech Blog',
		'Witold Zawada',
		'PoProstuWitold',
		'JavaScript',
		'TypeScript',
		'Go',
		'Node.js',
		'Webdev',
		'Fullstack',
		'Selfhosting',
		'Tech',
		'Programming',
		'Software Development',
		'Frontend',
		'Backend',
		'Docker',
		'Cryptography',
		'Security'
	],
	openGraph: {
		title: 'Blog | Witold Zawada',
		description:
			'Technical and beginner-friendly articles about programming, especially modern web development, tech and selfhosting. Written by Witold Zawada.',
		url: 'https://witoldzawada.dev/blog',
		siteName: 'Witold Zawada',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/witold-512.png',
				width: 512,
				height: 512,
				alt: 'Witold Zawada'
			}
		]
	}
}

export default async function BlogPage() {
	const posts = await getPosts('app/content/posts')
	const tags = getTags(posts)

	return (
		<Suspense fallback={<p>Loading blog...</p>}>
			<BlogClient posts={posts} tags={tags} />
		</Suspense>
	)
}
