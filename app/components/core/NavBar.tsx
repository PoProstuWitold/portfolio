'use client'

import { useScroll } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaTerminal } from 'react-icons/fa'
import { setThemeScript } from '@/utils/functions'
import { MobileMenu } from './MobileMenu'
import { ProjectsDropdown } from './ProjectsDropdown'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState<boolean>(false)
	const { scrollY } = useScroll()

	useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			setScrolled(y > 20)
		})
		return () => {
			unsubscribeScroll()
		}
	}, [scrollY])

	return (
		<>
			<nav
				className={`fixed top-0 z-50 w-full transition-all duration-300 ${
					scrolled ? 'py-1' : 'py-4'
				}`}
			>
				{/* Background layer isolated to prevent backdrop-blur from breaking fixed mobile menu */}
				<div
					className={`absolute inset-0 -z-10 transition-all duration-300 ${
						scrolled
							? 'bg-base-100/80 backdrop-blur-md border-b border-base-content/10 shadow-sm opacity-100'
							: 'bg-transparent opacity-0'
					}`}
				/>

				<div className='navbar w-full px-4'>
					<div className='navbar-start'>
						<div className='lg:hidden -ml-4'>
							<MobileMenu />
						</div>
						<Link
							href='/'
							className='btn btn-ghost text-xl normal-case flex items-center gap-3 px-2 hover:bg-transparent transition-opacity hover:opacity-80'
						>
							<span className='text-primary'>
								<FaTerminal size={22} />
							</span>
							<span className='font-bold tracking-tight text-base-content'>
								Witold Zawada
							</span>
						</Link>
					</div>

					<div className='hidden navbar-center lg:flex'>
						<ul className='flex items-center gap-2 font-medium text-sm text-base-content/70'>
							<li>
								<Link
									href='/#about'
									className='btn btn-ghost w-full justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 text-base font-medium lg:justify-center lg:gap-1.5 lg:btn-sm lg:rounded-md lg:px-4 lg:text-sm'
								>
									About
								</Link>
							</li>
							<li>
								<ProjectsDropdown />
							</li>
							<li>
								<Link
									href='/blog'
									className='btn btn-ghost w-full justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 text-base font-medium lg:justify-center lg:gap-1.5 lg:btn-sm lg:rounded-md lg:px-4 lg:text-sm'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/#contact'
									className='btn btn-ghost w-full justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 text-base font-medium lg:justify-center lg:gap-1.5 lg:btn-sm lg:rounded-md lg:px-4 lg:text-sm'
								>
									Contact
								</Link>
							</li>
							<li>
								<div className='w-px h-4 bg-base-content/20 mx-2' />
							</li>
							<li>
								<a
									href='/feed'
									className='btn btn-ghost w-full justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 text-base font-medium lg:justify-center lg:gap-1.5 lg:btn-sm lg:rounded-md lg:px-4 lg:text-sm'
									target='_blank'
									rel='noopener noreferrer'
									title='Feed'
								>
									Feed
								</a>
							</li>
						</ul>
					</div>

					<div className='navbar-end gap-2'>
						<ThemeSwitcher />
					</div>
				</div>
			</nav>
			{/* Inline script to load theme instantly server-side */}
			{/* biome-ignore lint: Shhhh, it's okay */}
			<script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
		</>
	)
}
