'use client'

import { LazyMotion, domAnimation } from 'motion/react'
import { Footer } from './Footer'
import { Navbar } from './NavBar'
import { ScrollProgress } from './ScrollProgress'

export default function ClientLayout({
	children
}: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domAnimation}>
			<ScrollProgress />
			<Navbar />
			{children}
			<Footer />
		</LazyMotion>
	)
}
