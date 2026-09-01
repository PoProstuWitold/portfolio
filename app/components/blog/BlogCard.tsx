import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import type { PostSummary } from '@/blog/post-domain'
import { getPostSocialImagePath } from '@/blog/post-domain'
import { BlogInfo } from './BlogInfo'
import { BlogTags } from './BlogTags'
import { createImagePlaceholder } from './image-placeholder'

interface BlogCardProps {
	post: PostSummary
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	const socialImage = getPostSocialImagePath(post.metadata)

	return (
		<article className='rounded-xl bg-base-300 max-w-[24rem] group'>
			<Link
				href={`/blog/${post.slug}`}
				title={`Read ${post.metadata.title}`}
			>
				{socialImage && (
					<div className='h-56 relative opacity-80 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
						<Image
							src={socialImage}
							className='rounded-t-xl'
							placeholder='blur'
							alt={`${post.metadata.title} cover`}
							blurDataURL={createImagePlaceholder(600, 300)}
							fill
							style={{
								width: '100%',
								objectFit: 'cover'
							}}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>
				)}
				<div className='px-3 py-2 justify-evenly flex flex-col gap-2'>
					<BlogTags tags={post.metadata.tags} size='sm' />
					<div className='prose gap-2 flex flex-col'>
						<h2
							className='p-0 line-clamp-1 h-[2.7rem] mb-0 mt-0 text-4xl font-extrabold leading-10'
							title={post.metadata.title}
						>
							{post.metadata.title}
						</h2>
						<p
							className='p-0 line-clamp-2 mb-0 mt-0'
							title={post.metadata.description}
						>
							{post.metadata.description}
						</p>
					</div>
					<div className='flex flex-col gap-5 text-sm'>
						<BlogInfo
							metadata={post.metadata}
							readingTime={post.readingTime}
						/>
					</div>
				</div>
			</Link>
		</article>
	)
}
