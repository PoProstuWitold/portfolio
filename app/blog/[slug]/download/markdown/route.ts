import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

interface RouteContext {
	params: Promise<{
		slug: string
	}>
}

export async function GET(_request: Request, { params }: RouteContext) {
	try {
		const { slug } = await params
		const filePath = join(
			process.cwd(),
			'app',
			'content',
			'posts',
			`${slug}.md`
		)
		const fileContents = await readFile(filePath, 'utf-8')
		const fileName = `${slug || 'post'}.md`

		return new Response(fileContents, {
			status: 200,
			headers: {
				'Content-Type': 'text/markdown; charset=utf-8',
				'Content-Disposition': `attachment; filename="${fileName}"`
			}
		})
	} catch (_error) {
		return new Response('Not found', { status: 404 })
	}
}
