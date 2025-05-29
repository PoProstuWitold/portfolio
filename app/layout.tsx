import './global.css'
import { LazyMotion, domAnimation } from 'motion/react'
import type { Metadata } from 'next'
import { Footer } from './components/Footer'
import { Navbar } from './components/NavBar'
import { ScrollProgress } from './components/ScrollProgress'
import { ThemeProvider } from './context/ThemeContext'

export const metadata: Metadata = {
	title: 'Witold Zawada',
	description: 'Developer portfolio Website of Witold Zawada (PoProstuWitold)'
}

export default function RootLayout({
	children
}: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider defaultTheme='system'>
					<LazyMotion features={domAnimation}>
						<ScrollProgress />
						<Navbar />
						{children}
						<Footer />
					</LazyMotion>
				</ThemeProvider>
			</body>
		</html>
	)
}
