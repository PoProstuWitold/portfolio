import './global.css'
import type { Metadata } from 'next'
import { Footer } from './components/Footer'
import { MotionProvider } from './components/MotionProvider'
import { Navbar } from './components/NavBar'
import { ScrollProgress } from './components/ScrollProgress'
import { ThemeProvider } from './context/ThemeContext'

export const metadata: Metadata = {
	title: 'Witold Zawada',
	description: 'Developer portfolio Website of Witold Zawada (PoProstuWitold)'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider defaultTheme='system'>
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
