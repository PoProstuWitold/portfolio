import React from 'react'
import { IPost } from './blog-utils'
import Image from 'next/image'
import { BlogInfo } from './BlogInfo'
import { FaArrowAltCircleRight } from 'react-icons/fa'

interface BlogCardProps {
    post: IPost
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <>
            <article
                className='rounded-xl bg-base-300 max-w-[24rem]'
            >
                <div className='relative'>
                    <Image src={`/${post.data.socialImage}`} className='w-[24rem] h-52 rounded-t-xl' alt="" height={640} width={360} />
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
                        <h1 className='p-0 m-0 line-clamp-1 h-12'>{post.data.title}</h1>
                        <p className='p-0 m-0 line-clamp-2'>
                            {post.data.description}
                        </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <BlogInfo data={post.data} readingTime={post.readingTime} />

                    </div>
                </div>
                <a className='py-1 flex flex-row items-center gap-2 group justify-center hover:bg-neutral rounded-xl transition-all duration-100 ease-in-out' href={`/blog/${post.slug}`}>
                    <span
                        className='text-lg transition-all duration-100 ease-in-out group-hover:text-neutral-content tracking-widest font-semibold'
                    >
                        Read more
                    </span>
                    <FaArrowAltCircleRight className='text-lg font-semibold w-5 h-5 mt-1 transition-all duration-100 ease-in-out group-hover:text-neutral-content' />
                </a>
            </article>
        </>
    )
}