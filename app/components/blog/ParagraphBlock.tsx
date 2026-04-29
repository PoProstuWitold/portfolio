import Image from 'next/image'
import { shimmer, toBase64 } from '@/utils/functions'

// biome-ignore lint: Irrelevant
export const ParagraphBlock = ({ paragraph }: { paragraph: any }) => {
	const { node } = paragraph
	if (node.children[0].tagName === 'img') {
		const image = node.children[0]
		const metastring = image.properties.alt
		const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
		const metaWidth = metastring.match(/{([^}]+)x/)?.[1] ?? '768'
		const metaHeight = metastring.match(/x([^}]+)}/)?.[1] ?? '432'
		const isPriority = metastring?.toLowerCase().match('{priority}')
		const hasCaption = metastring?.toLowerCase().includes('{caption:')
		const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
		const hasUrl = metastring?.toLowerCase().includes('{url:')
		const url = metastring?.match(/{url: (.*?)}/)?.pop()

		return (
			<div className='flex flex-col'>
				<Image
					src={image.properties.src}
					width={metaWidth}
					height={metaHeight}
					className='mb-0 mt-0 p-0 rounded-t-2xl'
					alt={alt}
					priority={isPriority}
					placeholder='blur'
					blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
					style={{ width: '100%', objectFit: 'cover' }}
				/>
				{hasCaption && (
					<section
						className='font-bold px-5 py-3 mb-10 bg-neutral text-neutral-content italic rounded-b-2xl'
						aria-label={caption}
					>
						{hasUrl ? (
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
					</section>
				)}
			</div>
		)
	}
	return <p>{paragraph.children}</p>
}
