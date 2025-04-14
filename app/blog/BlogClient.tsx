'use client'

import { BlogCard } from '@/content/BlogCard'
import type { IPost } from '@/content/blog-utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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
		router.push(`/blog?tags=${newTags.join('-')}`)
	}

	const filteredPosts = posts.filter((post) =>
		selectedTags.every((tag) => post.data.tags.includes(tag))
	)

	const loadMorePosts = () => setVisiblePosts((prev) => prev + 3)

	return (
		<main className='min-h-screen flex flex-col gap-6 items-center py-20'>
			<section className='flex flex-col gap-8 text-xl cursor-default'>
				<h1 className='text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary'>
					Blog
				</h1>
				<p className='lg:mx-[5rem] text-justify mx-6'>
					Technical and beginner-friendly articles about programming,
					especially modern web development, tech and selfhosting.
					Written by Witold Zawada.
				</p>
			</section>

			<section className='flex gap-2 flex-wrap mx-4'>
				<button
					className={`bg-base-300 cursor-pointer font-semibold px-3 py-1 rounded-md ${selectedTags.length === 0 && 'bg-secondary text-neutral-content'}`}
					onClick={() => handleTagClick('')}
					type='button'
				>
					All
				</button>
				{tags.map((tag) => (
					<button
						key={tag}
						className={`bg-base-300 cursor-pointer hover:shadown-primary-lg font-semibold px-3 py-1 rounded-md ${selectedTags.includes(tag) && 'bg-secondary text-neutral-content'}`}
						onClick={() => handleTagClick(tag)}
						type='button'
					>
						{tag}
					</button>
				))}
			</section>

			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
				{filteredPosts.slice(0, visiblePosts).map((post, index) => (
					<BlogCard post={post} key={`${post.slug}:${index}`} />
				))}
			</section>

			{!filteredPosts.length && (
				<p className='italic font-bold text-xl text-center'>
					No posts found. Update your filters
				</p>
			)}

			{filteredPosts.length > visiblePosts && (
				<button
					onClick={loadMorePosts}
					className='text-primary hover:underline focus:outline-none font-bold cursor-pointer'
					type='button'
				>
					Load older posts
				</button>
			)}
		</main>
	)
}
