import React, { FC, useEffect } from 'react'

import { themeChange } from 'theme-change'
import { Themes } from '../../utils/constans'

interface NavbarProps {
    children?: React.ReactNode
    start?: React.ReactNode
}

const Navbar: FC<NavbarProps> = () => {

    useEffect(() => {
        themeChange(false)
    }, [])

    themeChange()

    return (
        <nav className="fixed z-50 bg-base-300 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a href="/#about">ABOUT</a></li>
                        <li><a href="/#projects">PROJECTS</a></li>
                        <li><a href="/#contact">CONTACT</a></li>
                        <li><a href="/#education">EDUCATION</a></li>
                    </ul>
                </div>
                <a href="/#main" className="text-xl normal-case btn btn-ghost">Witold Zawada</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    <li><a href="/#about">ABOUT</a></li>
                    <li><a href="/#projects">PROJECTS</a></li>
                    <li><a href="/#contact">CONTACT</a></li>
                    <li><a href="/#education">EDUCATION</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <select data-choose-theme className="max-w-xs select select-ghost">
                    {
                        Themes.map((theme, index) => (
                            <option key={index} value={theme.name.toLowerCase()}>{theme.name}</option>
                        ))
                    }
                </select>
            </div>
        </nav>
    )
}

export default Navbar