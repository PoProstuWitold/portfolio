import type { ReactNode } from 'react'

import type { ProjectCaseStudy as ProjectCaseStudyData } from './types'

type CaseStudySectionProps = {
	title: string
	children: ReactNode
}

function CaseStudySection({ title, children }: CaseStudySectionProps) {
	return (
		<section className='space-y-2'>
			<h3 className='font-semibold text-base-content'>{title}</h3>

			<div className='space-y-3 text-lg leading-relaxed text-base-content/90'>
				{children}
			</div>
		</section>
	)
}

export function ProjectCaseStudy({
	challenge,
	engineering,
	outcome
}: ProjectCaseStudyData) {
	return (
		<article className='flex flex-col gap-6'>
			<CaseStudySection title='Challenge'>{challenge}</CaseStudySection>

			<CaseStudySection title='Engineering'>
				{engineering}
			</CaseStudySection>

			<CaseStudySection title='Outcome'>{outcome}</CaseStudySection>
		</article>
	)
}
