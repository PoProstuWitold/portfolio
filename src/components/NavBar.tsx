import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useScroll } from 'framer-motion'

import { themes } from '@/utils/constans'

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
			className={`fixed z-50 navbar transition ease-in-out delay-[50ms] ${Y > 5 ? 'shadow-2xl bg-base-300' : ''}`}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<AiOutlineMenu className='w-5 h-5 font-bold'/>
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
				<Link href="/" className={`text-xl normal-case transition-all ease-in-out delay-[50ms] btn btn-ghost ${(Y > 650 || pathname !== '/') ? '' : 'hidden'}`}>
					Witold Zawada
				</Link>
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