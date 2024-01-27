
import { NextSeo } from 'next-seo'
import { IPost, getPosts, getTags } from '@/content/blog-utils'
import { BlogCard } from '@/content/BlogCard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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

export default function Blog({ posts, tags }: BlogProps) {
	const router = useRouter()
	
    const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [visiblePosts, setVisiblePosts] = useState(3)

    const loadMorePosts = () => {
        setVisiblePosts((prev) => prev + 3)
    }

	const handleTagClick = (tag: string) => {
		if(tag === '') {
			setSelectedTags([])
			return router.push({
				pathname: '/blog',
				query: ''
			})
		}
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter((selectedTag) => selectedTag !== tag)
            : [...selectedTags, tag]

        router.push({
            pathname: '/blog',
            query: { tags: newTags.join('-') }
        })

        setSelectedTags(newTags)
    }

	const filteredPosts = posts.filter((post) => {
        return selectedTags.every((tag) => post.data.tags.includes(tag))
    })

	useEffect(() => {
        const { query } = router
        const tagsFromQuery: string[] = Array.isArray(query.tags)
            ? query.tags
            : query.tags
            ? query.tags.split('-')
            : []

        setSelectedTags(tagsFromQuery)
    }, [router.query.tags])

    return (
        <>
            <NextSeo
                title={`Blog | Witold Zawda`}
                description={`Here is my small blog where I publish some articles in easy yet technical English for (in my opinion at least) interesting topics.`}
                canonical={`https://witoldzawada.dev/blog`}
            />
            <main className='min-h-screen flex flex-col gap-6 items-center py-20'>
                <section id="projects" className="flex flex-col gap-8 text-xl cursor-default">
                    <h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">Blog</h1>
                    <p className="lg:mx-[5rem] text-justify mx-6">
                        Here is my small blog where I publish some articles in easy yet technical English for (in my opinion at least) interesting topics.
                    </p>
                </section>
				<section className="flex gap-2 flex-wrap mx-4 justify-center">
					<button
							className={`bg-base-300 font-semibold px-3 py-1 rounded-md ${selectedTags.length === 0 && 'bg-secondary text-neutral-content'}`}
							onClick={() => handleTagClick('')}
						>
							All
					</button>
					{tags.map((tag) => (
						<button
							key={tag}
							className={`bg-base-300 font-semibold px-3 py-1 rounded-md ${selectedTags.includes(tag) && 'bg-secondary text-neutral-content'}`}
							onClick={() => handleTagClick(tag)}
						>
							{tag}
						</button>
					))}
				</section>
				<section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10`}>
					{filteredPosts.slice(0, visiblePosts).map((post: IPost, index: number) => (
						<BlogCard post={post} key={`${post.slug}:${index}`} />
					))}
				</section>
					{!filteredPosts.length && <>
						<p className='italic font-bold text-xl text-center'>No posts found. Update your filters</p>
					</>}
					{filteredPosts.length > 0 && filteredPosts.length > visiblePosts && (
						<button onClick={loadMorePosts} className="text-primary hover:underline focus:outline-none font-bold">
							Load older posts
						</button>
					)}
            </main>
        </>
    )
}