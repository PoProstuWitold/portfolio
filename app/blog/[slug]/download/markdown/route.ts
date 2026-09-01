import { isSafePostSlug } from '@/blog/post-domain'
import { getPostSource } from '@/blog/posts'

interface RouteContext {
	params: Promise<{
		slug: string
	}>
}

export async function GET(_request: Request, { params }: RouteContext) {
	const { slug } = await params

	if (!isSafePostSlug(slug)) {
		return new Response('Not found', { status: 404 })
	}

	const source = await getPostSource(slug)

	if (source === null) {
		return new Response('Not found', { status: 404 })
	}

	return new Response(source, {
		status: 200,
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Content-Disposition': `attachment; filename="${slug}.md"`,
			'X-Content-Type-Options': 'nosniff'
		}
	})
}
