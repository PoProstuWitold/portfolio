import About from 'app/sections/About'
import Contact from 'app/sections/Contact'
import Main from 'app/sections/Main'
import Projects from 'app/sections/Projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Witold Zawada | Junior TypeScript & Go Developer',
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
		title: 'Witold Zawada | Junior TypeScript & Go Developer',
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
			<Projects />
			<Contact />
		</>
	)
}

export default IndexPage
