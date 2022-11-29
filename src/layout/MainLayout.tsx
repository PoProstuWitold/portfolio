import React, { FC } from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { motion } from 'framer-motion'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = (props) => {
    const { children } = props
    return (
        <motion.main layout className="flex flex-col h-screen">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </motion.main>
    )
}

export default MainLayout