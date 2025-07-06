'use client'

import { domAnimation, LazyMotion } from 'motion/react'
import { Footer } from './Footer'
import { Navbar } from './NavBar'
import { ScrollProgress } from './ScrollProgress'

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domAnimation}>
			<ScrollProgress />
			<Navbar />
			{children}
			<Footer />
		</LazyMotion>
	)
}
