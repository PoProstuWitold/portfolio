'use client'

import { FaMarkdown } from 'react-icons/fa'

interface DownloadMarkdownButtonProps {
	slug: string
}

export function DownloadMarkdownButton({ slug }: DownloadMarkdownButtonProps) {
	const fileName = `${slug || 'post'}.md`
	const href = `/blog/${encodeURIComponent(slug)}/download/markdown`

	return (
		<a
			href={href}
			download={fileName}
			className='btn btn-outline btn-md w-full flex-1 gap-2 rounded-xl font-semibold sm:btn-ghost sm:btn-square sm:btn-lg sm:w-auto sm:flex-none sm:rounded-lg md:p-4'
			aria-label='Download Markdown'
			title={`Download ${fileName}`}
		>
			<FaMarkdown className='h-5 w-5 sm:h-7 sm:w-7' />
			<span className='sm:hidden text-lg'>Markdown</span>
		</a>
	)
}
