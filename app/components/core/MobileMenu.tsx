'use client'

import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react'
import { useScroll } from 'motion/react'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import {
	AiFillBook,
	AiOutlineClose,
	AiOutlineInfoCircle,
	AiOutlineMail,
	AiOutlineMenu
} from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa'
import { MdRssFeed } from 'react-icons/md'
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
		<Menu as='div' className='relative z-50'>
			{({ open, close }) => (
				<>
					<MenuButton
						className='btn btn-ghost focus:outline-none'
						title='Mobile Menu'
					>
						<AiOutlineMenu className='w-7 h-7 transition-all duration-200' />
					</MenuButton>

					{/* Overlay */}
					<Transition
						as={Fragment}
						show={open}
						enter='transition-opacity ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<button
							className='fixed inset-0 bg-black/20 z-40'
							onClick={() => close()}
							type='button'
						/>
					</Transition>

					{/* Side panel */}
					<Transition
						as={Fragment}
						show={open}
						enter='transition-transform ease-out duration-300'
						enterFrom='-translate-x-full'
						enterTo='translate-x-0'
						leave='transition-transform ease-in duration-200'
						leaveFrom='translate-x-0'
						leaveTo='-translate-x-full'
					>
						<MenuItems
							static
							className={`fixed top-0 left-0 z-50 w-4/5 max-w-xs h-full p-3 flex flex-col gap-4 font-semibold shadow-lg focus:outline-none transition-colors bg-base-200 ${
								Y > 5 ? 'bg-base-300' : ''
							}`}
						>
							<div className='navbar-start'>
								<button
									onClick={() => close()}
									className='justify-center btn btn-ghost'
									title='Mobile Menu'
									type='button'
								>
									<AiOutlineClose className='w-7 h-7' />
								</button>
								<Link
									href='/'
									onClick={() => close()}
									className='btn btn-ghost text-xl normal-case flex items-center gap-2 hover:text-secondary transition-all duration-150'
								>
									<span className='text-primary'>
										<FaTerminal size={22} />
									</span>
									<span className='font-bold'>
										Witold Zawada
									</span>
								</Link>
							</div>

							<MenuItem>
								<Link
									href='/#about'
									onClick={() => close()}
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiOutlineInfoCircle className='w-7 h-7' />
									About
								</Link>
							</MenuItem>
							<MenuItem>
								<ProjectsDropdown onClose={close} />
							</MenuItem>
							<MenuItem>
								<Link
									href='/#contact'
									onClick={() => close()}
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiOutlineMail className='w-7 h-7' />
									Contact
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									href='/blog'
									onClick={() => close()}
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<AiFillBook className='w-7 h-7' />
									Blog
								</Link>
							</MenuItem>
							<MenuItem>
								<a
									href='/feed'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start'
								>
									<MdRssFeed className='w-6 h-6' />
									Feed
								</a>
							</MenuItem>

							<hr className='my-2' />
							<h2 className='font-bold text-xl'>Links</h2>
							<div className='mx-2'>
								<Socials text size='big' />
							</div>
						</MenuItems>
					</Transition>
				</>
			)}
		</Menu>
	)
}
