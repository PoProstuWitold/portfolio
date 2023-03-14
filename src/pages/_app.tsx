import '../styles/global.css'

import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

import { Navbar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function App({ Component, pageProps }: AppProps): ReactElement {

  	return (
		<>
			<ThemeProvider
				defaultTheme="system"
			>
				<DefaultSeo
					title={`Witold Zawada`}
					description={`Developer portfolio Website of Witold Zawada (PoProstuWitold)`}
					canonical={`https://witoldzawada.dev/`}
					openGraph={{
						url: 'https://witoldzawada.dev/',
						title: 'Witold Zawada',
						description: 'Developer portfolio Website of Witold Zawada (PoProstuWitold)',
						siteName: 'Witold Zawada Developer Portfolio'
					}}
					additionalLinkTags={[
						{
							rel: 'manifest',
							href: '/site.webmanifest'
						},
						{
							rel: 'icon',
							href: '/favicon.ico'
						},
						{
							rel: 'apple-touch-icon',
							href: '/apple-touch-icon.png',
							sizes: '76x76'
						},
					]}
				/>
				<ScrollProgress/>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	)
}