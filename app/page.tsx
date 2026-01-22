import type { Metadata } from 'next'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Main } from '@/components/sections/Main'

export const metadata: Metadata = {
	title: 'Witold Zawada | Software Engineer (TypeScript & Go)',
	description:
		'Developer portfolio website of Witold Zawada (PoProstuWitold)',
	classification: 'Developer Portfolio',
	metadataBase: new URL('https://witoldzawada.dev'),
	keywords: [
		'Developer',
		'Portfolio',
		'Witold Zawada',
		'PoProstuWitold',
		'Node.js',
		'TypeScript',
		'Go',
		'Fullstack',
		'Selfhosting'
	],
	openGraph: {
		title: 'Witold Zawada | Software Engineer (TypeScript & Go)',
		description:
			'Developer portfolio website of Witold Zawada (PoProstuWitold)',
		url: 'https://witoldzawada.dev/',
		siteName: 'Witold Zawada',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/witold-512.png',
				width: 512,
				height: 512,
				alt: 'Witold Zawada'
			}
		]
	}
}

const IndexPage: React.FC = () => {
	return (
		<>
			<Main />
			<About />
			<FeaturedProjects />
			<Contact />
		</>
	)
}

export default IndexPage
