import { readFileSync, readdirSync } from 'node:fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export const getPost = async (slug: string) => {
    const fileName = readFileSync(`src/content/posts/${slug}.md`, 'utf-8')

    const { data, content } = matter(fileName)

    return { 
        data, content
    }
}

export const getPosts = async (path: string) => {
    const postsDir = readdirSync(path)

    let allTags: string[] = []

	const posts = postsDir.map((fileName: string) => {
		const slug = fileName.replace('.md', '')
		const readFile = readFileSync(`${path}/${fileName}`, 'utf-8')
		const { data, content } = matter(readFile)
		
		const { text } = readingTime(content)

        allTags = [...allTags, ...data.tags]
		return {
			slug,
			data,
			readingTime: text
		}
	}).sort((a, b) => {
		//@ts-ignore
		return new Date(b.data.date) - new Date(a.data.date) 
	})

    return posts
}

export const getTags = (posts: any[]) => {
    return Array.from(new Set(posts.flatMap((post) => post.data.tags)))
}

export const getFiles = async (path: string) => {
    const files = readdirSync(path)

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