import React from 'react'


interface FooterProps {
    children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <footer className="justify-center p-4 mx-auto footer bg-neutral text-neutral-content">
            {children}
            <p>Copyright © 2022 Witold Zawada - All right reserved</p>
        </footer>
    )
}

export default Footer