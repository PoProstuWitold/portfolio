import Link from 'next/link'
import type { ComponentProps } from 'react'
import type { ExtraProps } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getPostHeadings, type Post } from '@/blog/post-domain'
import { siteConfig } from '@/config/site'
import { ArticleActions } from './ArticleActions'
import { BlogInfo } from './BlogInfo'
import { BlogTags } from './BlogTags'
import { CodeBlock, PreBlock } from './CodeBlock'
import { DesktopTableOfContents } from './DesktopTableOfContents'
import { ParagraphBlock } from './ParagraphBlock'
import { PostHashReset } from './PostHashReset'
import { TableOfContents } from './TableOfContents'

interface BlogPostProps {
	post: Post
}

type MarkdownHeadingProps = ComponentProps<'h1'> & ExtraProps

function MarkdownH1({
	node: _node,
	className = '',
	...props
}: MarkdownHeadingProps) {
	return (
		<h2
			{...props}
			className={`mt-0 mb-8 text-4xl font-extrabold leading-10 ${className}`}
		/>
	)
}

function MarkdownH2({
	node: _node,
	className = '',
	...props
}: MarkdownHeadingProps) {
	return (
		<h3
			{...props}
			className={`mt-12 mb-6 text-2xl font-bold leading-8 ${className}`}
		/>
	)
}

function MarkdownH3({
	node: _node,
	className = '',
	...props
}: MarkdownHeadingProps) {
	return (
		<h4
			{...props}
			className={`mt-8 mb-3 text-xl font-semibold leading-8 ${className}`}
		/>
	)
}

function MarkdownH4({
	node: _node,
	className = '',
	...props
}: MarkdownHeadingProps) {
	return (
		<h5
			{...props}
			className={`mt-6 mb-2 text-base font-semibold leading-6 ${className}`}
		/>
	)
}

function MarkdownH5({
	node: _node,
	className = '',
	...props
}: MarkdownHeadingProps) {
	return (
		<h6
			{...props}
			className={`mt-6 mb-2 text-sm font-semibold leading-6 ${className}`}
		/>
	)
}

export default function BlogPost({ post }: BlogPostProps) {
	const { content, metadata, readingTime, slug } = post
	const headings = getPostHeadings(content)
	const articleId = 'blog-post-content'
	const postUrl = new URL(`/blog/${slug}`, siteConfig.url).toString()

	return (
		<main className='min-h-screen flex justify-center max-w-350 mx-auto px-4 gap-8 xl:gap-16 py-24 md:py-28'>
			<div className='w-full lg:w-[65%] xl:w-200 flex flex-col'>
				<nav
					className='md:text-sm text-xs breadcrumbs text-base-content/70'
					aria-label='Breadcrumb'
				>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/blog'>Blog</Link>
						</li>
						<li
							id='post-top'
							className='text-primary cursor-default font-semibold'
						>
							{metadata.title}
						</li>
					</ul>
				</nav>
				<PostHashReset elementId='post-top' />

				<header className='flex flex-col gap-5 mt-5'>
					<div className='flex flex-col gap-2'>
						<BlogTags tags={metadata.tags} size='md' />
					</div>
					<div className='flex flex-col prose prose-pre:leading-none max-w-none'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl mb-2 scroll-mt-20'>
							{metadata.title}
						</h1>
						<p className='text-base-content/70 leading-7'>
							{metadata.description}
						</p>
					</div>

					<section
						className='card relative border border-base-300 bg-base-100 shadow-sm'
						aria-label='Article details'
					>
						<div className='card-body p-5 sm:p-6 sm:pr-20'>
							<div className='flex min-w-0'>
								<BlogInfo
									metadata={metadata}
									readingTime={readingTime}
								/>
							</div>

							<div className='divider my-0 sm:hidden' />

							<div className='w-full sm:absolute sm:right-6 sm:top-1/2 sm:w-auto sm:-translate-y-1/2'>
								<ArticleActions
									articleId={articleId}
									description={metadata.description}
									slug={slug}
									title={metadata.title}
									url={postUrl}
								/>
							</div>
						</div>
					</section>
				</header>

				<div className='xl:hidden w-full my-6'>
					<TableOfContents headings={headings} className='w-full' />
				</div>

				<article
					id={articleId}
					className='prose prose-pre:leading-none max-w-none prose-img:m-0 w-full pb-20 prose-headings:scroll-mt-20 mt-5'
				>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeSlug]}
						components={{
							code: CodeBlock,
							h1: MarkdownH1,
							h2: MarkdownH2,
							h3: MarkdownH3,
							h4: MarkdownH4,
							h5: MarkdownH5,
							p: ParagraphBlock,
							pre: PreBlock
						}}
					>
						{content}
					</ReactMarkdown>
				</article>
			</div>

			<DesktopTableOfContents headings={headings} />
		</main>
	)
}
