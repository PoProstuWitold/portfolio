'use client'

import { useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { type Theme, useTheme } from '@/context/ThemeContext'
import { themes } from 'app/utils/constans'
import MobileMenu from './MobileMenu'
import { setThemeScript } from '@/utils/functions'

export const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme()
	const pathname = usePathname()

	const [mounted, setMounted] = useState<boolean>(false)
	const [Y, setY] = useState<number>(0)
	const { scrollY } = useScroll()

	useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			if (y > 100) setY(y)
			else setY(0)
		})
		setMounted(true)
		return () => {
			unsubscribeScroll()
		}
	}, [scrollY])

	return (
		<>
			<nav
				className={`lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-sm lg:bg-opacity-90 fixed z-50 navbar transition ease-in-out delay-[50ms] bg-base-200 ${Y > 5 ? 'shadow-2xl bg-base-300' : ''}`}
			>
				<div className='navbar-start'>
					<div className='lg:hidden'>
						<MobileMenu />
					</div>
					<Link
						href='/'
						className={`text-xl normal-case transition-all ease-in-out delay-[50ms] btn btn-ghost ${Y > 650 || pathname !== '/' ? '' : 'hidden'}`}
					>
						Witold Zawada
					</Link>
				</div>
				<div className='hidden navbar-center lg:flex h-full'>
					<ul className='p-0 font-semibold menu menu-horizontal menu-lg'>
						<li className='active:bg-primary rounded-lg active:text-neutral-content'>
							<a href='/#about'>ABOUT</a>
						</li>
						<li className='active:bg-primary rounded-lg active:text-neutral-content'>
							<a href='/#projects'>PROJECTS</a>
						</li>
						<li className='active:bg-primary rounded-lg active:text-neutral-content'>
							<a href='/#contact'>CONTACT</a>
						</li>
						<li className='active:bg-primary rounded-lg active:text-neutral-content'>
							<a href='/blog'>BLOG</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					{mounted && (
						<div className='max-w-[40rem]'>
							<label htmlFor='Themes' className='sr-only'>
								Choose a theme
							</label>
							<select
								id='Themes'
								value={theme}
								className='max-w-xs select select-ghost font-semibold'
								onChange={(e): void =>
									setTheme(e.currentTarget.value as Theme)
								}
							>
								{themes.map((theme, index) => (
									<option
										key={`${index}:${theme.name}`}
										value={theme.name.toLowerCase()}
									>
										{theme.name}
									</option>
								))}
							</select>
						</div>
					)}
				</div>
			</nav>
			{/* Inline script to load theme instantly server-side */}
			<script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
		</>
	)
}
