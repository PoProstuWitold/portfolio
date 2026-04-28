'use client'

import GithubSlugger from 'github-slugger'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { RWebShare } from 'react-web-share'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { BlogInfo } from '@/components/blog/BlogInfo'
import { Socials } from '@/components/core/Socials'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { shimmer, toBase64 } from '@/utils/functions'

function useHeadings(content: string) {
	return useMemo(() => {
		const slugger = new GithubSlugger()
		const headingRegex = /^(#{1,4})\s+(.*)$/gm
		const result: { level: number; text: string; id: string }[] = []
		const matches = content.matchAll(headingRegex)
		for (const match of Array.from(matches)) {
			const level = match[1].length
			const text = match[2]
			const id = slugger.slug(text)
			result.push({ level, text, id })
		}
		return result
	}, [content])
}

const TableOfContents = ({
	content,
	className = ''
}: {
	content: string
	className?: string
}) => {
	const headings = useHeadings(content)
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
						if (window.history.replaceState) {
							window.history.replaceState(
								null,
								'',
								`#${entry.target.id}`
							)
						}
					}
				})
			},
			{ rootMargin: '-10% 0px -80% 0px' }
		)

		for (const h of headings) {
			const element = document.getElementById(h.id)
			if (element) observer.observe(element)
		}

		return () => observer.disconnect()
	}, [headings])

	if (headings.length === 0) return null

	return (
		<nav
			className={`self-start overflow-y-auto pr-4 scrollbar-hide text-sm xl:mb-0 ${className}`}
		>
			<h4 className='font-bold mb-4 uppercase tracking-widest text-xs opacity-70'>
				Table of Contents
			</h4>
			<ul className='menu bg-base-300/20 rounded-box p-2 border border-base-300/50 shadow-sm w-full'>
				{headings.map((heading, i) => (
					<li key={`${heading.id}-${i}`}>
						<a
							href={`#${heading.id}`}
							style={{
								paddingLeft: `${heading.level * 0.75}rem`
							}}
							className={`${
								activeId === heading.id
									? 'active text-primary bg-base-300/60'
									: 'hover:bg-base-300/50 text-base-content/80'
							} block transition-colors duration-200`}
						>
							{heading.text.replace(/[*_~`]/g, '')}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

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

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				if (window.history.replaceState) {
					window.history.replaceState(
						null,
						'',
						window.location.pathname
					)
				}
			}
		})
		const topEl = document.getElementById('post-top')
		if (topEl) observer.observe(topEl)
		return () => observer.disconnect()
	}, [])

	// biome-ignore lint: Irrelevant
	const CodeBlock = (_props: any) => {
		const [visible, setVisible] = useState(false)
		const [_value, copy] = useCopyToClipboard()
		const { inline, className, children, ...props } = _props
		const match = /language-(\w+)/.exec(className || '')

		const copyAndConfirm = () => {
			copy(children as string)
			setVisible(true)
			setTimeout(() => setVisible(false), 2000)
		}

		return !inline && match ? (
			<section className='relative code-block'>
				<div className='flex items-center justify-between text-slate-400 text-xs font-mono px-4 py-3 border-b border-white/10'>
					<span>{match[1]}</span>
					<button
						className='cursor-pointer text-slate-400 hover:text-white transition-colors flex items-center gap-1 group'
						onClick={copyAndConfirm}
						title='Copy code'
						type='button'
					>
						{visible ? (
							<>
								<AiOutlineCheck className='w-4 h-4 text-green-400' />
								<span className='text-green-400'>Copied!</span>
							</>
						) : (
							<>
								<AiOutlineCopy className='w-4 h-4 block group-hover:hidden' />
								<AiFillCopy className='w-4 h-4 hidden group-hover:block' />
								<span>Copy</span>
							</>
						)}
					</button>
				</div>
				<div className='p-2'>
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
				</div>
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
		<main className='min-h-screen flex justify-center max-w-350 mx-auto px-4 gap-8 xl:gap-16 py-24 md:py-28'>
			<div className='w-full lg:w-[65%] xl:w-200 flex flex-col gap-10'>
				<div className='md:text-sm text-xs breadcrumbs text-base-content/70'>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/blog'>Blog</a>
						</li>
						<li
							id='post-top'
							className='text-primary cursor-default font-semibold'
						>
							{data.title}
						</li>
					</ul>
				</div>

				<div className='flex flex-col w-full sm:flex-row shadow-sm border border-base-300 rounded-2xl overflow-hidden'>
					<div className='grow bg-base-300/40 p-6 flex items-center justify-center sm:justify-start'>
						<BlogInfo data={data} readingTime={readingTime} />
					</div>
					<div className='hidden sm:block w-px bg-base-300' />
					<div className='h-px w-full sm:hidden bg-base-300' />
					<div className='bg-base-300/40 p-6 flex flex-col justify-center items-center gap-4 sm:border-l-0 min-w-50'>
						<div className='flex gap-4 items-center'>
							<Socials size='big' />
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
							onClick={() => console.log('shared successfully!')}
						>
							<button
								type='button'
								className='btn btn-neutral btn-sm w-full font-semibold rounded-lg shadow-sm border border-base-300'
							>
								Share this article 🔗
							</button>
						</RWebShare>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<span className='font-semibold'>tags:</span>
					<div className='flex gap-2 flex-wrap'>
						{data.tags.map((tag: string) => (
							<span
								key={tag}
								className='bg-secondary text-neutral-content font-semibold px-3 py-1 rounded-md text-sm'
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className='xl:hidden w-full mb-10'>
					<TableOfContents content={content} className='w-full' />
				</div>

				<article className='prose prose-pre:leading-none max-w-none prose-img:m-0 w-full pb-20 prose-headings:scroll-mt-20'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl mb-12 scroll-mt-20'>
						{data.title}
					</h1>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeSlug]}
						components={{
							code: (props) => <CodeBlock {...props} />,
							p: (paragraph) => (
								<ParagraphBlock paragraph={paragraph} />
							)
						}}
					>
						{content}
					</ReactMarkdown>
				</article>
			</div>

			<TableOfContents
				content={content}
				className='sticky top-32 hidden xl:block w-80 max-h-[calc(100vh-12rem)]'
			/>
		</main>
	)
}
