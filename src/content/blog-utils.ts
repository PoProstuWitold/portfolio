import { readFile, readdir } from 'node:fs/promises'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export const getPost = async (slug: string) => {
    const fileName = await readFile(`src/content/posts/${slug}.md`, 'utf-8')

    const { data, content } = matter(fileName)

    return { 
        data, content
    }
}

export const getPosts = async (path: string): Promise<IPost[]> => {
    const postsDir = await readdir(path)

    let allTags: string[] = []

	const posts = postsDir.map(async (fileName: string) => {
		const slug = fileName.replace('.md', '')
		const file = await readFile(`${path}/${fileName}`, 'utf-8')
		const { data, content } = matter(file)
		
		const { text } = readingTime(content)

        allTags = [...allTags, ...data.tags]
		return {
			slug,
			data,
			readingTime: text
		}
	})

	const resolved = await Promise.all(posts)

	resolved.sort((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime() 
	})

    return resolved as IPost[]
}

export const getTags = (posts: IPost[]) => {
    return Array.from(new Set(posts.flatMap((post) => post.data.tags)))
}

export const getFiles = async (path: string) => {
    const files = await readdir(path)

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }))

    return paths
}

export interface IPost {
	slug: string
	data: {
		title: string
		description: string
		authors: string[]
		socialImage?: string
		date: string
		tags: string[]
	}
	readingTime: string
}