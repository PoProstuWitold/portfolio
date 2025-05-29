'use client'

import { useScroll } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { setThemeScript } from '@/utils/functions'
import { AiFillBook, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import MobileMenu from './MobileMenu'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar: React.FC = () => {
	const [Y, setY] = useState<number>(0)
	const { scrollY } = useScroll()

	useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			if (y > 100) setY(y)
			else setY(0)
		})
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
						className='btn btn-ghost text-xl normal-case flex items-center gap-2 hover:text-secondary transition-all duration-150'
					>
						<span className='text-primary'>
							<FaTerminal size={22} />
						</span>
						<span className='font-bold'>Witold Zawada</span>
					</Link>
				</div>
				<div className='hidden navbar-center lg:flex h-full'>
					<ul className='p-0 font-semibold menu menu-horizontal menu-lg gap-2'>
						<li className='hover:text-secondary transition-all duration-150'>
							<Link href='/#about'>
								<AiOutlineInfoCircle className='w-7 h-7' />{' '}
								About
							</Link>
						</li>
						<li className='hover:text-secondary transition-all duration-150'>
							<Link href='/#projects'>
								<MdComputer className='w-7 h-7' /> Projects
							</Link>
						</li>
						<li className='hover:text-secondary transition-all duration-150'>
							<Link href='/#contact'>
								<AiOutlineMail className='w-7 h-7' /> Contact
							</Link>
						</li>
						<li className='hover:text-secondary transition-all duration-150'>
							<Link href='/blog'>
								<AiFillBook className='w-7 h-7' /> Blog
							</Link>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					<ThemeSwitcher />
				</div>
			</nav>
			{/* Inline script to load theme instantly server-side */}
			{/* biome-ignore lint: Shhhh, it's okay */}
			<script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
		</>
	)
}
