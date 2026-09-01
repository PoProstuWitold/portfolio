import Image from 'next/image'
import type { ComponentProps } from 'react'
import type { ExtraProps } from 'react-markdown'
import { createImagePlaceholder } from './image-placeholder'

type ParagraphBlockProps = ComponentProps<'p'> & ExtraProps

export const ParagraphBlock = ({
	node,
	children,
	...props
}: ParagraphBlockProps) => {
	const firstChild = node?.children[0]

	if (
		node?.children.length === 1 &&
		firstChild?.type === 'element' &&
		firstChild.tagName === 'img'
	) {
		const image = firstChild.properties
		const { src } = image

		if (typeof src !== 'string') {
			return <p {...props}>{children}</p>
		}

		const metadata =
			typeof image.alt === 'string' ? parseImageMetadata(image.alt) : null
		const alt = metadata?.alt ?? ''
		const caption = metadata?.caption
		const url = metadata?.url

		return (
			<figure className='m-0 flex flex-col'>
				<Image
					src={src}
					width={metadata?.width ?? 768}
					height={metadata?.height ?? 432}
					className='mb-0 mt-0 rounded-t-2xl p-0'
					alt={alt}
					priority={metadata?.priority ?? false}
					placeholder='blur'
					blurDataURL={createImagePlaceholder(600, 300)}
					style={{ width: '100%', objectFit: 'cover' }}
				/>
				{caption && (
					<figcaption className='mt-0 mb-10 rounded-b-2xl bg-neutral px-5 py-3 text-base font-bold italic leading-7 text-neutral-content'>
						{url ? (
							<a
								rel='noreferrer'
								target='_blank'
								className='font-bold text-neutral-content'
								href={url}
							>
								{caption}
							</a>
						) : (
							caption
						)}
					</figcaption>
				)}
			</figure>
		)
	}

	return <p {...props}>{children}</p>
}

interface ImageMetadata {
	alt: string
	caption?: string
	height: number
	priority: boolean
	url?: string
	width: number
}

function parseImageMetadata(altText: string): ImageMetadata {
	const dimensions = /\{(\d+)x(\d+)\}/.exec(altText)
	const caption = /\{caption:\s*(.*?)\}/i.exec(altText)?.[1]?.trim()
	const rawUrl = /\{url:\s*(.*?)\}/i.exec(altText)?.[1]?.trim()
	const url = rawUrl && isHttpUrl(rawUrl) ? rawUrl : undefined
	const alt = altText
		.replace(/\{(?:\d+x\d+|priority|caption:\s*.*?|url:\s*.*?)\}/gi, '')
		.trim()
		.replace(/^(["'])(.*)\1$/, '$2')

	return {
		alt,
		width: dimensions ? Number(dimensions[1]) : 768,
		height: dimensions ? Number(dimensions[2]) : 432,
		priority: /\{priority\}/i.test(altText),
		...(caption ? { caption } : {}),
		...(url ? { url } : {})
	}
}

function isHttpUrl(value: string): boolean {
	try {
		const url = new URL(value)
		return url.protocol === 'http:' || url.protocol === 'https:'
	} catch {
		return false
	}
}
