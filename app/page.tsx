import type { Metadata } from 'next'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Main } from '@/components/sections/Main'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: { absolute: siteConfig.title },
	description: siteConfig.description,
	classification: 'Developer Portfolio',
	alternates: {
		canonical: '/'
	},
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
	]
}

const IndexPage: React.FC = () => {
	return (
		<main>
			<Main />
			<About />
			<FeaturedProjects />
			<Contact />
		</main>
	)
}

export default IndexPage
