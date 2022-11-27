import React, { FC } from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToButton from '../components/ScrollToButton'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = (props) => {
    const { children } = props
    return (
        <main className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ScrollToButton/>
        </main>
    )
}

export default MainLayout