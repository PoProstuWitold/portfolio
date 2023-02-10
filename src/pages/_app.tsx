import '../styles/global.css'

import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Navbar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function App({ Component, pageProps }: AppProps): ReactElement {

  	return (
		<>
			<ThemeProvider
				defaultTheme="system"
			>
				<ScrollProgress/>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	)
}