'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import type { IPost } from '@/utils/blog-utils'
import { Breadcrumbs } from '../core/Breadcrumbs'
import { BlogCard } from './BlogCard'
import { BlogTags } from './BlogTags'

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
			<div className='flex w-full max-w-6xl flex-col gap-4 px-6 lg:px-12 xl:px-0'>
				<div className='flex flex-col'>
					{/* Breadcrumbs for navigation context */}
					<Breadcrumbs
						items={[
							{ label: 'Home', href: '/' },
							{ label: 'Blog' }
						]}
					/>

					{/* Section Header */}
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-4xl font-extrabold tracking-tight md:text-6xl text-base-content whitespace-nowrap'>
							Blog
						</h2>
						<div className='w-full h-px ml-8 bg-base-content/10 sm:block' />
					</div>

					{/* Professional Copy */}
					<p className='text-lg leading-relaxed text-base-content/70'>
						Technical articles focused on software architecture,
						modern web development, systems engineering, and
						self-hosted infrastructure. I share insights from
						building scalable applications and exploring complex
						technical challenges.
					</p>
				</div>

				{/* Tags Filter */}
				<BlogTags
					tags={tags}
					selectedTags={selectedTags}
					onTagClick={handleTagClick}
					showAll
					size='md'
				/>

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
					<div className='mt-10 flex justify-center'>
						<button
							type='button'
							onClick={loadMorePosts}
							className='group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-5 py-2.5 font-semibold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-content hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 active:translate-y-0'
						>
							<span>Load more posts</span>

							<FiChevronDown
								aria-hidden='true'
								className='h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5'
							/>
						</button>
					</div>
				)}
			</div>
		</main>
	)
}
