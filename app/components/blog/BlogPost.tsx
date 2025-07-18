'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { RWebShare } from 'react-web-share'
import remarkGfm from 'remark-gfm'
import { BlogInfo } from '@/components/blog/BlogInfo'
import { Socials } from '@/components/core/Socials'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { shimmer, toBase64 } from '@/utils/functions'

export default function BlogPost({
	data,
	content,
	readingTime
}: {
	// biome-ignore lint: Irrelevant
	data: any
	content: string
	readingTime: string
	slug: string
}) {
	const url = typeof window !== 'undefined' ? window.location.href : ''

	// biome-ignore lint: Irrelevant
	const CodeBlock = (_props: any) => {
		const [visible, setVisible] = useState(false)
		const [value, copy] = useCopyToClipboard()
		const { inline, className, children, ...props } = _props
		const match = /language-(\w+)/.exec(className || '')

		const copyAndConfirm = () => {
			copy(children as string)
			setVisible(true)
			setTimeout(() => setVisible(false), 2000)
		}

		return !inline && match ? (
			<section className='relative code-block'>
				<SyntaxHighlighter
					{...props}
					style={darkSyntax}
					language={match[1]}
					PreTag='div'
					customStyle={{
						background: 'transparent',
						lineHeight: 1,
						padding: 0,
						margin: 0
					}}
					showInlineLineNumbers
					showLineNumbers
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
				<button
					className='absolute top-0 right-0 group cursor-pointer'
					onClick={copyAndConfirm}
					type='button'
				>
					<AiOutlineCopy className='absolute top-0 right-0 transition-all group-hover:opacity-0 duration-300 ease-in-out w-5 h-5' />
					<AiFillCopy className='absolute top-0 right-0 transition-all opacity-0 group-hover:scale-125 group-hover:opacity-100 duration-300 hover:text-primary ease-in-out w-5 h-5 group-active:scale-75' />
					<span
						className={`absolute top-1 right-7 flex gap-2 transition-all px-2 bg-neutral opacity-0 ${value && visible ? 'opacity-100' : ''}`}
					>
						<span>Copied</span>
						<AiOutlineCheck />
					</span>
				</button>
			</section>
		) : (
			<code {...props} className={`${className} code-block`}>
				{children}
			</code>
		)
	}

	// biome-ignore lint: Irrelevant
	const ParagraphBlock = ({ paragraph }: { paragraph: any }) => {
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

	return (
		<main className='min-h-screen flex flex-col lg:flex-row justify-center gap-10'>
			<div className='lg:w-[50%] flex flex-col md:my-28 my-24 mx-4 gap-10'>
				<div className='md:text-sm text-xs breadcrumbs'>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/blog'>Blog</a>
						</li>
						<li className='text-primary cursor-default font-semibold'>
							{data.title}
						</li>
					</ul>
				</div>

				<div className='flex flex-col w-full lg:flex-row'>
					<div className='grid h-24 flex-grow bg-base-300 rounded-box place-items-center'>
						<BlogInfo data={data} readingTime={readingTime} />
					</div>
					<div className='divider lg:divider-horizontal' />
					<div className='grid h-16 lg:h-24 flex-grow bg-base-300 rounded-box place-items-center'>
						<Socials size='big' />
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<span className='font-semibold'>tags:</span>
					<div className='flex gap-2 flex-wrap'>
						{data.tags.map((tag: string) => (
							<span
								key={tag}
								className='bg-secondary text-neutral-content font-semibold px-3 py-1 rounded-md'
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<RWebShare
					data={{
						text: data.description,
						url,
						title: `Blog | ${data.title}`
					}}
					sites={[
						'facebook',
						'twitter',
						'linkedin',
						'reddit',
						'whatsapp',
						'copy',
						'mail'
					]}
					// disableNative
					onClick={() => console.log('shared successfully!')}
				>
					<button type='button' className='btn btn-outline'>
						Share this article 🔗
					</button>
				</RWebShare>

				<div className='prose prose-pre:leading-none lg:max-w-[100ch] md:max-w-[90ch]'>
					<h1 className='m-0 p-0'>{data.title}</h1>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							code: (props) => <CodeBlock {...props} />,
							p: (paragraph) => (
								<ParagraphBlock paragraph={paragraph} />
							)
						}}
					>
						{content}
					</ReactMarkdown>
				</div>
			</div>
		</main>
	)
}
