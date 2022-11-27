import React, { useEffect, useState } from 'react'

const ScrollToButton: React.FC = () => {

    const [, setShowTopBtn] = useState(false)


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

    const goToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <button
                onClick={(): void => goToTop()}
                style={{
                position: 'fixed',
                padding: '1rem 2rem',
                fontSize: '20px',
                bottom: '40px',
                right: '40px',
                textAlign: 'center',
                }}
            >
                T
            </button>
        </>
    )
}

export default ScrollToButton