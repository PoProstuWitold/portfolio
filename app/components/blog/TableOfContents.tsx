import GithubSlugger from 'github-slugger'
import { useEffect, useMemo, useState } from 'react'

function useHeadings(content: string) {
	return useMemo(() => {
		const slugger = new GithubSlugger()
		const headingRegex = /^(#{1,4})\s+(.*)$/gm
		const result: { level: number; text: string; id: string }[] = []
		const matches = content.matchAll(headingRegex)

		for (const match of Array.from(matches)) {
			const level = match[1].length
			const text = match[2]
			const id = slugger.slug(text)

			result.push({ level, text, id })
		}

		return result
	}, [content])
}

export const TableOfContents = ({
	content,
	className = ''
}: {
	content: string
	className?: string
}) => {
	const headings = useHeadings(content)
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)

						if (window.history.replaceState) {
							window.history.replaceState(
								null,
								'',
								`#${entry.target.id}`
							)
						}
					}
				})
			},
			{ rootMargin: '-10% 0px -80% 0px' }
		)

		for (const h of headings) {
			const element = document.getElementById(h.id)
			if (element) observer.observe(element)
		}

		return () => observer.disconnect()
	}, [headings])

	if (headings.length === 0) return null

	return (
		<nav
			className={`self-start overflow-y-auto pr-4 scrollbar-hide text-sm xl:mb-0 ${className}`}
			aria-label='Table of contents'
		>
			<h1 className='mb-4 text-xs font-semibold uppercase tracking-widest text-base-content/50'>
				On this page
			</h1>

			<ul className='border-l border-base-300 space-y-1'>
				{headings.map((heading, i) => {
					const isActive = activeId === heading.id

					return (
						<li key={`${heading.id}-${i}`}>
							<a
								href={`#${heading.id}`}
								style={{
									paddingLeft: `${heading.level * 0.75}rem`
								}}
								className={`block border-l py-1.5 pr-2 text-sm leading-5 transition-colors ${
									isActive
										? '-ml-px border-primary text-primary'
										: '-ml-px border-transparent text-base-content/65 hover:text-base-content'
								}`}
							>
								{heading.text.replace(/[*_~`]/g, '')}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
