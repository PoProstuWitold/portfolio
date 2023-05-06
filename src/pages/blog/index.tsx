
import { NextSeo } from 'next-seo'
import { IPost, getPosts, getTags } from '@/content/blog-utils'
import { BlogCard } from '@/content/BlogCard'

export async function getStaticProps() {
    const posts = await getPosts('src/content/posts')

    const tags = getTags(posts)

    return {
        props: {
            posts,
            tags
        }
    }
}

interface BlogProps {
    posts: IPost[]
    tags: string[]
}

export default function Blog({ posts }: BlogProps) {
    return (
        <>
            <NextSeo
                title={`My blog`}
                description={`Here is my small blog where I publish some articles in easy yet technical English for (in my opinion at least) interesting topics.`}
                canonical={`https://witoldzawada.dev/blog`}
            />
            <main className='min-h-screen flex flex-col justify-center gap-10 items-center py-20'>
                <section id="projects" className="flex flex-col gap-8 text-xl cursor-default">
                    <h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">Blog</h1>
                    <p className="lg:mx-[5rem] text-justify mx-6">
                        Here is my small blog where I publish some articles in easy yet technical English for (in my opinion at least) interesting topics.
                    </p>
                </section>
                <section className='flex lg:flex-row flex-col justify-center gap-10 items-center mx-6'>
                    {posts && posts.map((post: IPost, index: number) => {
                        return (
                            <BlogCard post={post} key={`${post.slug}:${index}`} />
                        )
                    })}
                </section>
            </main>
        </>
    )
}