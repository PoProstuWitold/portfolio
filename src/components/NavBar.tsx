import { useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { themes } from '../utils/constans'

import { useTheme } from 'next-themes'
export const Navbar: React.FC = () => {
	const [mounted, setMounted] = useState<boolean>(false)
	const [Y, setY] = useState<number>(0)
	const { scrollY } = useScroll()
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			if(y > 100) setY(y)
			else setY(0)
		})
		setMounted(true)
		return () => {
			unsubscribeScroll()
		}
	}, [])


	return (
		<nav 
			className={`fixed z-50 navbar transition ease-in-out delay-[50ms] ${Y > 99 ? 'shadow-2xl bg-base-300' : ''}`}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="p-2 mt-3 font-semibold shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/#about">ABOUT</a>
						</li>
						<li>
							<a href="/#projects">PROJECTS</a>
						</li>
						<li>
							<a href="/#contact">CONTACT</a>
						</li>
					</ul>
				</div>
				<a href="/#main" className="text-xl normal-case btn btn-ghost">
					Witold Zawada
				</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="p-0 font-semibold menu menu-horizontal">
					<li>
						<a href="/#about">ABOUT</a>
					</li>
					<li>
						<a href="/#projects">PROJECTS</a>
					</li>
					<li>
						<a href="/#contact">CONTACT</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{mounted &&
				<select
					value={theme}
					className="max-w-xs select select-ghost"
					onChange={(e): void => setTheme(e.currentTarget.value)}
				>
					{themes.map((theme, index) => (
						<option key={index} value={theme.name.toLowerCase()}>
							{theme.name}
						</option>
					))}
				</select>

				}
			</div>
		</nav>
	)
}