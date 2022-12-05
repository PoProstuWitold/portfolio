import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

interface FooterProps {
    children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            <footer className="p-10 bg-neutral text-neutral-content">
                <div className="footer">
                    <div>
                        <span className="footer-title">Witold Zawada</span> 
                        <p>Beginner TypeScript Developer</p>
                    </div> 
                    <div>
                        <span className="footer-title">Social</span> 
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://github.com/PoProstuWitold" target="_blank" rel="noreferrer">
                                <AiFillGithub className="w-10 h-10"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="my-10 border-t" style={{ backgroundColor: 'hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))' }} />
                <div className="justify-center mx-auto footer">
                    <p>Copyright © {new Date().getFullYear()} Witold Zawada - All right reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer