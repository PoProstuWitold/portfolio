import './global.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/core/Footer'
import { MotionProvider } from '@/components/core/MotionProvider'
import { Navbar } from '@/components/core/NavBar'
import { ScrollProgress } from '@/components/core/ScrollProgress'
import { siteConfig, siteUrl } from '@/config/site'
import { themeInitScript } from '@/config/themes'
import { ThemeProvider } from '@/context/ThemeContext'

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
