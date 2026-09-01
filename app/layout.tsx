import './global.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/core/Footer'
import { JsonLd } from '@/components/core/JsonLd'
import { MotionProvider } from '@/components/core/MotionProvider'
import { Navbar } from '@/components/core/NavBar'
import { ScrollProgress } from '@/components/core/ScrollProgress'
import { siteConfig, siteUrl } from '@/config/site'
import { themeInitScript } from '@/config/themes'
import { ThemeProvider } from '@/context/ThemeContext'

const homeUrl = new URL('/', siteConfig.url).toString()
const personId = new URL('/#person', siteConfig.url).toString()
const websiteId = new URL('/#website', siteConfig.url).toString()

const siteStructuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': personId,
			name: siteConfig.author.name,
			url: homeUrl,
			image: new URL(
				siteConfig.openGraphImage.url,
				siteConfig.url
			).toString(),
			jobTitle: 'Software Engineer',
			sameAs: [siteConfig.links.github, siteConfig.links.linkedin]
		},
		{
			'@type': 'WebSite',
			'@id': websiteId,
			name: siteConfig.name,
			description: siteConfig.description,
			url: homeUrl,
			inLanguage: 'en-US',
			publisher: { '@id': personId }
		}
	]
}

export const metadata: Metadata = {
	metadataBase: siteUrl,
	title: siteConfig.title,
	description: siteConfig.description,
	applicationName: siteConfig.name,
	authors: [
		{
			name: siteConfig.author.name,
			url: siteConfig.url
		}
	],
	creator: siteConfig.author.name,
	publisher: siteConfig.author.name,
	manifest: '/site.webmanifest',
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		locale: 'en_US',
		type: 'website',
		images: [siteConfig.openGraphImage]
	},
	twitter: {
		card: 'summary',
		title: siteConfig.title,
		description: siteConfig.description,
		images: [siteConfig.openGraphImage.url]
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script id='theme-initializer'>{themeInitScript}</script>
			</head>
			<body>
				<JsonLd data={siteStructuredData} />
				<ThemeProvider>
					<MotionProvider>
						<ScrollProgress />
						<Navbar />
						{children}
						<Footer />
					</MotionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
