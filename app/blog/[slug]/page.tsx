import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import readingTime from 'reading-time'
import { getFiles, getPost, type IPost } from '@/content/blog-utils'
import BlogPost from './BlogPost'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const slugs = await getFiles('app/content/posts')
	return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const post: IPost = (await getPost(slug)) as unknown as IPost

	if (!post || !post.data) {
		return {
			title: 'Post Not Found | Witold Zawada',
			description: 'This blog post could not be found.',
			robots: {
				index: false,
				follow: false
			}
		}
	}

	const { title: postTitle, description, tags } = post.data
	const title = `Blog | ${postTitle}`
	const url = `https://witoldzawada.dev/blog/${slug}`

	return {
		title,
		description,
		keywords: [
			'Blog',
			'Post',
			'Witold Zawada',
			'PoProstuWitold',
			...(tags || [])
		],
		metadataBase: new URL('https://witoldzawada.dev'),
		openGraph: {
			title,
			description,
			url,
			siteName: 'Witold Zawada',
			locale: 'en_US',
			type: 'article',
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
}

export default async function Page({ params }: Props) {
	const { slug } = await params
	const post = await getPost(slug)

	if (!post) return notFound()

	const reading = readingTime(post.content).text

	return (
		<BlogPost
			data={post.data}
			content={post.content}
			readingTime={reading}
			slug={slug}
		/>
	)
}
