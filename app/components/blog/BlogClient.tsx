'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { IPost } from '@/utils/blog-utils'
import { Breadcrumbs } from '../core/Breadcrumbs'
import { BlogCard } from './BlogCard'

interface Props {
	posts: IPost[]
	tags: string[]
}

export default function BlogClient({ posts, tags }: Props) {
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [visiblePosts, setVisiblePosts] = useState(3)

	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		const raw = searchParams.get('tags')
		const tagsFromQuery = raw ? raw.split('-') : []
		setSelectedTags(tagsFromQuery)
	}, [searchParams])

	const handleTagClick = (tag: string) => {
		if (
			tag === '' ||
			(selectedTags.includes(tag) && selectedTags.length === 1)
		) {
			setSelectedTags([])
			router.push('/blog')
			return
		}

		const newTags = selectedTags.includes(tag)
			? selectedTags.filter((t) => t !== tag)
			: [...selectedTags, tag]

		setSelectedTags(newTags)
		if (newTags.length > 0) {
			router.push(`/blog?tags=${newTags.join('-')}`)
		} else {
			router.push('/blog')
		}
	}

	const filteredPosts = posts.filter((post) =>
		selectedTags.every((tag) => post.data.tags.includes(tag))
	)

	const loadMorePosts = () => setVisiblePosts((prev) => prev + 6)

	return (
		<main className='flex min-h-screen flex-col items-center bg-base-200 py-24 cursor-default'>
			<div className='flex w-full max-w-6xl flex-col gap-10 px-6 lg:px-12 xl:px-0'>
				<div className='flex flex-col gap-4'>
					{/* Breadcrumbs for navigation context */}
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'Blog' }
						]}
					/>

					{/* Section Header */}
					<div className='mt-2 flex items-center justify-between'>
						<h1 className='whitespace-nowrap text-4xl font-extrabold tracking-tight text-base-content md:text-5xl'>
							Blog
						</h1>
						<div className='ml-8 hidden h-px w-full bg-base-content/10 sm:block' />
					</div>

					{/* Professional Copy */}
					<p className='mb-6 mt-4 text-lg leading-relaxed text-base-content/70'>
						Technical articles focused on software architecture,
						modern web development, systems engineering, and
						self-hosted infrastructure. I share insights from
						building scalable applications and exploring complex
						technical challenges.
					</p>
				</div>

				{/* Tags Filter */}
				<div className='flex gap-2 flex-wrap'>
					<button
						className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
							selectedTags.length === 0
								? 'bg-primary text-primary-content hover:bg-primary/90'
								: 'bg-base-300 text-base-content/80 hover:bg-base-content/10'
						}`}
						onClick={() => handleTagClick('')}
						type='button'
					>
						All
					</button>
					{tags.map((tag) => (
						<button
							key={tag}
							className={`cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
								selectedTags.includes(tag)
									? 'bg-primary text-primary-content hover:bg-primary/90'
									: 'bg-base-300 text-base-content/80 hover:bg-base-content/10'
							}`}
							onClick={() => handleTagClick(tag)}
							type='button'
						>
							{tag}
						</button>
					))}
				</div>

				{/* Posts Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredPosts.slice(0, visiblePosts).map((post, index) => (
						<BlogCard post={post} key={`${post.slug}:${index}`} />
					))}
				</div>

				{/* Empty State */}
				{!filteredPosts.length && (
					<div className='flex flex-col items-center justify-center py-20 text-center'>
						<p className='text-xl font-semibold text-base-content/70'>
							No posts found.
						</p>
						<button
							type='button'
							onClick={() => {
								setSelectedTags([])
								router.push('/blog')
							}}
							className='mt-4 text-primary hover:underline'
						>
							Clear filters
						</button>
					</div>
				)}

				{/* Load More */}
				{filteredPosts.length > visiblePosts && (
					<div className='mt-8 flex justify-center'>
						<button
							onClick={loadMorePosts}
							className='cursor-pointer px-6 py-2.5 rounded-lg border border-base-content/10 bg-base-100 font-semibold text-base-content hover:bg-base-200 transition-colors'
							type='button'
						>
							Load More Posts
						</button>
					</div>
				)}
			</div>
		</main>
	)
}
