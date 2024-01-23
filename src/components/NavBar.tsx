import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useScroll } from 'framer-motion'

import { themes } from '@/utils/constans'
import MobileMenu from './MobileMenu'

export const Navbar: React.FC = () => {
	const router = useRouter()
	const { pathname } = router

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
			className={`lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-sm lg:bg-opacity-90 fixed z-50 navbar transition ease-in-out delay-[50ms] bg-base-200 ${Y > 5 ? 'shadow-2xl bg-base-300' : ''}`}
		>
			<div className="navbar-start">
				<div className='lg:hidden'>
					<MobileMenu />
				</div>
				<Link href="/" className={`text-xl normal-case transition-all ease-in-out delay-[50ms] btn btn-ghost ${(Y > 650 || pathname !== '/') ? '' : 'hidden'}`}>
					Witold Zawada
				</Link>
			</div>
			<div className="hidden navbar-center lg:flex h-full">
				<ul className="p-0 font-semibold menu menu-horizontal menu-lg">
					<li className='active:bg-primary rounded-lg active:text-neutral-content'>
						<a  href="/#about">ABOUT</a>
					</li>
					<li className='active:bg-primary rounded-lg active:text-neutral-content'>
						<a href="/#projects">PROJECTS</a>
					</li>
					<li className='active:bg-primary rounded-lg active:text-neutral-content'>
						<a href="/#contact">CONTACT</a>
					</li>
					<li className='active:bg-primary rounded-lg active:text-neutral-content'>
						<a href="/blog">BLOG</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{mounted &&
				<label htmlFor="Themes">
					<select
						id="Themes"
						value={theme}
						className="max-w-xs select select-ghost font-semibold"
						onChange={(e): void => setTheme(e.currentTarget.value)}
					>
						{themes.map((theme, index) => (
							<option key={index} value={theme.name.toLowerCase()}>
								{theme.name}
							</option>
						))}
					</select>
				</label>
				}
			</div>
		</nav>
	)
}