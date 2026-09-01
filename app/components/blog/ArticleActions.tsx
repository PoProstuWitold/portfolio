'use client'

import { FaShare } from 'react-icons/fa'
import { RWebShare } from 'react-web-share'
import { DownloadMarkdownButton } from './DownloadMarkdownButton'
import { DownloadPdfButton } from './DownloadPdfButton'

const SHARE_SITES = [
	'facebook',
	'twitter',
	'linkedin',
	'reddit',
	'whatsapp',
	'copy',
	'mail'
]

interface ArticleActionsProps {
	articleId: string
	description: string
	slug: string
	title: string
	url: string
}

export function ArticleActions({
	articleId,
	description,
	slug,
	title,
	url
}: ArticleActionsProps) {
	return (
		<div className='flex w-full flex-row flex-nowrap items-center gap-2 sm:w-auto'>
			<RWebShare
				data={{
					text: description,
					url,
					title: `Blog | ${title}`
				}}
				sites={SHARE_SITES}
			>
				<button
					type='button'
					className='btn btn-ghost btn-md w-full flex-1 gap-2 rounded-xl font-semibold sm:btn-square sm:btn-lg sm:w-auto sm:flex-none sm:rounded-lg md:p-4'
					aria-label='Share article'
					title='Share article'
				>
					<FaShare aria-hidden='true' className='h-7 w-7' />
				</button>
			</RWebShare>

			<DownloadMarkdownButton slug={slug} />
			<DownloadPdfButton
				articleId={articleId}
				slug={slug}
				title={title}
			/>
		</div>
	)
}
