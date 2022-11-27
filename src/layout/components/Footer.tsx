import React from 'react'


interface FooterProps {
    children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="items-center p-4 footer bg-neutral text-neutral-content">
            <p>Copyright © 2022 Witold Zawada - All right reserved</p>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            </div>
        </footer>
    )
}

export default Footer