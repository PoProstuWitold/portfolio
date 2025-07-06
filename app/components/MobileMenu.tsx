'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useScroll } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
	AiFillBook,
	AiOutlineClose,
	AiOutlineInfoCircle,
	AiOutlineMail,
	AiOutlineMenu
} from 'react-icons/ai'
import { ProjectsDropdown } from './ProjectsDropdown'
import { Socials } from './Socials'

export function MobileMenu() {
	const [Y, setY] = useState<number>(0)
	const { scrollY } = useScroll()

	useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			setY(y > 100 ? y : 0)
		})
		return () => unsubscribeScroll()
	}, [scrollY])

	return (
		<Menu as='div' className='z-50'>
			{({ open, close }) => (
				<>
					<MenuButton
						className='justify-center btn btn-ghost'
						title='Mobile Menu'
					>
						<AiOutlineClose
							className={`w-7 h-7 ${open ? '' : 'hidden'}`}
						/>
						<AiOutlineMenu
							className={`w-7 h-7 ${open ? 'hidden' : ''}`}
						/>
					</MenuButton>
					<MenuItems
						className={`mt-2 gap-4 flex px-6 py-4 absolute left-0 w-screen origin-top-left h-screen transition ease-in-out delay-[50ms] font-semibold bg-base-200 justify-stretch menu menu-vertical ${Y > 5 ? 'bg-base-300' : ''}`}
					>
						<MenuItem>
							<h2 className='font-bold cursor-pointer text-xl'>
								Menu
							</h2>
						</MenuItem>
						<MenuItem>
							{() => (
								<Link
									href='/#about'
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiOutlineInfoCircle className='w-7 h-7' />
									About
								</Link>
							)}
						</MenuItem>
						<MenuItem>
							{() => <ProjectsDropdown onClose={close} />}
						</MenuItem>
						<MenuItem>
							{() => (
								<Link
									href='/#contact'
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiOutlineMail className='w-7 h-7' />{' '}
									Contact
								</Link>
							)}
						</MenuItem>
						<MenuItem>
							{() => (
								<Link
									href='/blog'
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiFillBook className='w-7 h-7' /> Blog
								</Link>
							)}
						</MenuItem>
						<MenuItem>
							<h2 className='font-bold cursor-pointer text-xl'>
								Links
							</h2>
						</MenuItem>
						<MenuItem>
							<div className='flex mx-4'>
								<Socials text size='big' />
							</div>
						</MenuItem>
					</MenuItems>
				</>
			)}
		</Menu>
	)
}
