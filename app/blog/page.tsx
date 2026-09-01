import type { Metadata } from 'next'
import { getPosts, getPostTags } from '@/blog/posts'
import BlogClient from '@/components/blog/BlogClient'
import { siteConfig } from '@/config/site'

const title = `Blog | ${siteConfig.name}`
const description =
	'Technical and beginner-friendly articles about programming, modern web development, technology, and selfhosting.'

export const metadata: Metadata = {
	title,
	description,
	classification: 'Tech Blog',
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
		title,
		description,
		url: '/blog',
		siteName: siteConfig.name,
		locale: 'en_US',
		type: 'website',
		images: [siteConfig.openGraphImage]
	},
	alternates: {
		canonical: '/blog'
	},
	twitter: {
		card: 'summary',
		title,
		description,
		images: [siteConfig.openGraphImage.url]
	}
}

export default async function BlogPage() {
	const posts = await getPosts()
	const tags = getPostTags(posts)

	return <BlogClient posts={posts} tags={tags} />
}
