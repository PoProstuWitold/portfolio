import React from 'react'
import { motion } from 'framer-motion'

import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<motion.main layout className="flex flex-col h-screen">
			<ScrollProgress />
			<Navbar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</motion.main>
	)
}

export default MainLayout
