'use client'

import { useScroll } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillBook, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa'
import { MdRssFeed } from 'react-icons/md'
import { setThemeScript } from '@/utils/functions'
import { MobileMenu } from './MobileMenu'
import { ProjectsDropdown } from './ProjectsDropdown'
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
					<ul className='p-0 font-semibold gap-2 flex items-center'>
						<li>
							<Link
								href='/#about'
								className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2'
							>
								<AiOutlineInfoCircle className='w-7 h-7' />{' '}
								About
							</Link>
						</li>
						<li>
							<ProjectsDropdown />
						</li>
						<li>
							<Link
								href='/#contact'
								className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2'
							>
								<AiOutlineMail className='w-7 h-7' /> Contact
							</Link>
						</li>
						<li>
							<Link
								href='/blog'
								className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2'
							>
								<AiFillBook className='w-7 h-7' /> Blog
							</Link>
						</li>

						<li>
							<a
								href='/feed'
								className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2'
								target='_blank'
								rel='noopener noreferrer'
							>
								<MdRssFeed className='w-6 h-6' /> Feed
							</a>
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
