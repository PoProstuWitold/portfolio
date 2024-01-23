import React from 'react'
import Image from 'next/image'
import { BlogInfo } from './BlogInfo'
import { IPost } from './blog-utils'
import { shimmer, toBase64 } from '@/utils/functions'

interface BlogCardProps {
    post: IPost
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <>
            <article
                className='rounded-xl bg-base-300 max-w-[24rem] group'
            >
                <a href={`/blog/${post.slug}`} title={`${post.data.title} full article`}>
                <div className='h-56 relative opacity-80 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                    <Image 
                        src={`/${post.data.socialImage}`} 
                        className='rounded-t-xl' 
                        placeholder='blur' 
                        alt="blog cover image"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
                        fill
                        style={{
                            width: '100%',
                            objectFit: 'cover'
                        }}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className='px-3 py-2 justify-evenly flex flex-col gap-2'>
                    <div className='flex flex-row flex-wrap gap-1'>
                        {post.data.tags && post.data.tags.map((tag, index) => {
                            return (
                                <span
                                    className='bg-secondary text-secondary-content rounded-lg text-xs py-1 px-2 font-semibold'
                                    key={`${tag}:${index}`}
                                >
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                    <div className='prose gap-2 flex flex-col'>
                        <h1 className='p-0 m-0 line-clamp-1 h-[2.7rem]' title={`${post.data.title}`}>{post.data.title}</h1>
                        <p className='p-0 m-0 line-clamp-2' title={`${post.data.description}`}>
                            {post.data.description}
                        </p>
                    </div>
                    <div className='flex flex-col gap-5 text-sm'>
                        <BlogInfo data={post.data} readingTime={post.readingTime} />

                    </div>
                </div>
                </a>
            </article>
        </>
    )
}