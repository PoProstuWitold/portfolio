'use client'

import { useEffect } from 'react'
import { FaShare } from 'react-icons/fa'

import ReactMarkdown from 'react-markdown'
import { RWebShare } from 'react-web-share'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { BlogInfo } from '@/components/blog/BlogInfo'
import { BlogTags } from './BlogTags'
import { CodeBlock } from './CodeBlock'
import { ParagraphBlock } from './ParagraphBlock'
import { TableOfContents } from './TableOfContents'

const shareSites = [
	'facebook',
	'twitter',
	'linkedin',
	'reddit',
	'whatsapp',
	'copy',
	'mail'
]

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

	return (
		<main className='min-h-screen flex justify-center max-w-350 mx-auto px-4 gap-8 xl:gap-16 py-24 md:py-28'>
			<div className='w-full lg:w-[65%] xl:w-200 flex flex-col'>
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
				<header className='flex flex-col gap-5 mt-5'>
					<div className='flex flex-col gap-2'>
						<BlogTags tags={data.tags} size='md' />
					</div>
					<div className='flex flex-col prose prose-pre:leading-none max-w-none'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl mb-2 scroll-mt-20'>
							{data.title}
						</h1>

						{data.description && (
							<p className='text-base-content/70 leading-7'>
								{data.description}
							</p>
						)}
					</div>

					<section
						className='card relative border border-base-300 bg-base-100 shadow-sm'
						aria-label='Article details'
					>
						<div className='card-body p-5 sm:p-6 sm:pr-20'>
							<div className='flex min-w-0'>
								<BlogInfo
									data={data}
									readingTime={readingTime}
								/>
							</div>

							<div className='divider my-0 sm:hidden' />

							<div className='w-full sm:absolute sm:right-6 sm:top-1/2 sm:w-auto sm:-translate-y-1/2'>
								<RWebShare
									data={{
										text: data.description,
										url,
										title: `Blog | ${data.title}`
									}}
									sites={shareSites}
								>
									<button
										type='button'
										className='btn btn-outline btn-md w-full gap-2 rounded-xl font-semibold sm:btn-ghost sm:btn-square sm:btn-lg sm:w-auto sm:rounded-lg md:p-4'
										aria-label='Share article'
										title='Share article'
									>
										<FaShare className='h-5 w-5 sm:h-7 sm:w-7' />
										<span className='sm:hidden text-lg'>
											Share
										</span>
									</button>
								</RWebShare>
							</div>
						</div>
					</section>
				</header>

				<div className='xl:hidden w-full my-6'>
					<TableOfContents content={content} className='w-full' />
				</div>

				<article className='prose prose-pre:leading-none max-w-none prose-img:m-0 w-full pb-20 prose-headings:scroll-mt-20 mt-5'>
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
