import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
	getPostSocialImagePath,
	isSafePostSlug,
	toIsoPostDate
} from '@/blog/post-domain'
import { getPost, getPostSlugs } from '@/blog/posts'
import BlogPost from '@/components/blog/BlogPost'
import { siteConfig } from '@/config/site'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const slugs = await getPostSlugs()
	return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	if (!isSafePostSlug(slug)) {
		return missingPostMetadata()
	}

	const post = await getPost(slug)

	if (!post) {
		return missingPostMetadata()
	}

	const { title: postTitle, description, tags } = post.metadata
	const title = `Blog | ${postTitle}`
	const url = new URL(`/blog/${slug}`, siteConfig.url).toString()
	const socialImage =
		getPostSocialImagePath(post.metadata) ?? siteConfig.openGraphImage.url

	return {
		title,
		description,
		keywords: [
			'Blog',
			siteConfig.author.name,
			siteConfig.author.handle,
			...tags
		],
		alternates: {
			canonical: url
		},
		openGraph: {
			title,
			description,
			url,
			siteName: siteConfig.name,
			locale: 'en_US',
			type: 'article',
			authors: post.metadata.authors,
			publishedTime: toIsoPostDate(post.metadata.date),
			...(post.metadata.updated
				? { modifiedTime: toIsoPostDate(post.metadata.updated) }
				: {}),
			images: [
				{
					url: socialImage,
					alt: `${post.metadata.title} cover image`
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [socialImage]
		}
	}
}

export default async function Page({ params }: Props) {
	const { slug } = await params

	if (!isSafePostSlug(slug)) {
		notFound()
	}

	const post = await getPost(slug)

	if (!post) notFound()

	return <BlogPost post={post} />
}

function missingPostMetadata(): Metadata {
	return {
		title: `Post Not Found | ${siteConfig.name}`,
		description: 'This blog post could not be found.',
		robots: {
			index: false,
			follow: false
		}
	}
}
