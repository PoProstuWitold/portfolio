'use client'

import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition
} from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
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
	return (
		<Menu as='div' className='relative z-50'>
			{({ open, close }) => (
				<>
					<MenuButton
						className='btn btn-ghost hover:bg-base-content/5 focus:outline-none transition-colors px-3'
						title='Mobile Menu'
					>
						<AiOutlineMenu className='w-6 h-6 text-base-content transition-all duration-200' />
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
							className='fixed inset-0 bg-base-content/20 backdrop-blur-sm z-40'
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
							className='fixed top-0 left-0 z-50 w-[85%] max-w-[320px] h-full p-6 flex flex-col gap-2 font-medium shadow-2xl focus:outline-none transition-transform bg-base-100 border-r border-base-content/10'
						>
							{/* Header area of mobile menu */}
							<div className='flex items-center justify-between mb-6 pb-4 border-b border-base-content/10'>
								<Link
									href='/'
									onClick={() => close()}
									className='flex items-center gap-3 transition-opacity hover:opacity-80'
								>
									<span className='text-primary'>
										<FaTerminal size={20} />
									</span>
									<span className='font-bold tracking-tight text-base-content text-lg'>
										Witold Zawada
									</span>
								</Link>
								<button
									onClick={() => close()}
									className='btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-base-content'
									title='Close Menu'
									type='button'
								>
									<AiOutlineClose className='w-5 h-5' />
								</button>
							</div>

							{/* Navigation Links */}
							<div className='flex flex-col gap-2'>
								<MenuItem>
									<Link
										href='/#about'
										onClick={() => close()}
										className='btn btn-ghost justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 w-full text-base font-medium'
									>
										<AiOutlineInfoCircle className='w-5 h-5 opacity-70' />
										About
									</Link>
								</MenuItem>

								<MenuItem>
									<ProjectsDropdown onClose={close} />
								</MenuItem>

								<MenuItem>
									<Link
										href='/blog'
										onClick={() => close()}
										className='btn btn-ghost justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 w-full text-base font-medium'
									>
										<AiFillBook className='w-5 h-5 opacity-70' />
										Blog
									</Link>
								</MenuItem>

								<MenuItem>
									<Link
										href='/#contact'
										onClick={() => close()}
										className='btn btn-ghost justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 w-full text-base font-medium'
									>
										<AiOutlineMail className='w-5 h-5 opacity-70' />
										Contact
									</Link>
								</MenuItem>

								<MenuItem>
									<a
										href='/feed'
										target='_blank'
										rel='noopener noreferrer'
										className='btn btn-ghost justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 w-full text-base font-medium'
									>
										<MdRssFeed className='w-5 h-5 opacity-70' />
										Feed
									</a>
								</MenuItem>
							</div>

							<div className='flex-1' />

							{/* Footer / Socials inside mobile menu */}
							<div className='pt-6 border-t border-base-content/10'>
								<div className='flex justify-center'>
									<Socials text size='small' />
								</div>
							</div>
						</MenuItems>
					</Transition>
				</>
			)}
		</Menu>
	)
}
