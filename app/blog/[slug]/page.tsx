import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
	getPostSocialImagePath,
	isSafePostSlug,
	toIsoPostDate
} from '@/blog/post-domain'
import { getPost, getPostSlugs } from '@/blog/posts'
import BlogPost from '@/components/blog/BlogPost'
import { JsonLd } from '@/components/core/JsonLd'
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

	const postUrl = new URL(`/blog/${slug}`, siteConfig.url).toString()
	const socialImage = getPostSocialImagePath(post.metadata)
	const personId = new URL('/#person', siteConfig.url).toString()
	const websiteId = new URL('/#website', siteConfig.url).toString()
	const publishedDate = toIsoPostDate(post.metadata.date)
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${postUrl}#article`,
		headline: post.metadata.title,
		description: post.metadata.description,
		url: postUrl,
		mainEntityOfPage: postUrl,
		inLanguage: 'en-US',
		datePublished: publishedDate,
		dateModified: post.metadata.updated
			? toIsoPostDate(post.metadata.updated)
			: publishedDate,
		author: post.metadata.authors.map((author) =>
			author === siteConfig.author.name
				? { '@id': personId }
				: { '@type': 'Person', name: author }
		),
		publisher: { '@id': personId },
		isPartOf: { '@id': websiteId },
		keywords: post.metadata.tags,
		...(socialImage
			? { image: new URL(socialImage, siteConfig.url).toString() }
			: {})
	}

	return (
		<>
			<JsonLd data={structuredData} />
			<BlogPost post={post} />
		</>
	)
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
