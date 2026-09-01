'use client'

import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import type { PostHeading } from '@/blog/post-domain'
import { TableOfContents } from './TableOfContents'

interface DesktopTableOfContentsProps {
	headings: PostHeading[]
}

export function DesktopTableOfContents({
	headings
}: DesktopTableOfContentsProps) {
	const [isOpen, setIsOpen] = useState(true)

	if (headings.length === 0) {
		return null
	}

	const buttonLabel = isOpen
		? 'Hide table of contents'
		: 'Show table of contents'

	return (
		<>
			<button
				type='button'
				onClick={() => setIsOpen((current) => !current)}
				className='hidden xl:flex fixed right-8 top-32 z-40 btn btn-outline btn-sm rounded-full font-semibold bg-base-100/80 backdrop-blur border-base-300 shadow-sm p-2 h-10 w-10 items-center justify-center'
				aria-expanded={isOpen}
				aria-controls='post-toc'
				aria-label={buttonLabel}
				title={buttonLabel}
			>
				<FaChevronRight
					aria-hidden='true'
					className={`h-4 w-4 transition-transform duration-200 ${
						isOpen ? 'rotate-0' : 'rotate-180'
					}`}
				/>
			</button>
			<div
				id='post-toc'
				inert={!isOpen}
				className={`sticky top-32 hidden xl:flex max-h-[calc(100vh-12rem)] shrink-0 flex-col overflow-hidden transition-all duration-300 ease-out ${
					isOpen
						? 'w-80 opacity-100 translate-x-0'
						: 'w-0 opacity-0 translate-x-4 pointer-events-none'
				}`}
				aria-hidden={!isOpen}
			>
				<TableOfContents
					headings={headings}
					className='w-80 max-h-[calc(100vh-12rem)]'
				/>
			</div>
		</>
	)
}
