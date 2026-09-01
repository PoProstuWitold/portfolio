'use client'

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild
} from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import {
	AiFillBook,
	AiOutlineClose,
	AiOutlineInfoCircle,
	AiOutlineMail,
	AiOutlineMenu
} from 'react-icons/ai'
import { FaTerminal } from 'react-icons/fa'
import { MdRssFeed } from 'react-icons/md'
import { siteConfig } from '@/config/site'
import { ProjectsDropdown } from './ProjectsDropdown'
import { Socials } from './Socials'

const menuId = 'mobile-navigation-menu'

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const closeMenu = () => setIsOpen(false)

	return (
		<>
			<button
				aria-controls={menuId}
				aria-expanded={isOpen}
				aria-label='Open navigation menu'
				className='btn btn-ghost px-3 transition-colors hover:bg-base-content/5'
				onClick={() => setIsOpen(true)}
				type='button'
			>
				<AiOutlineMenu
					aria-hidden='true'
					className='h-6 w-6 text-base-content transition-all duration-200'
				/>
			</button>

			<Transition as={Fragment} show={isOpen}>
				<Dialog className='relative z-50 lg:hidden' onClose={setIsOpen}>
					<TransitionChild
						as={Fragment}
						enter='transition-opacity ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<DialogBackdrop className='fixed inset-0 bg-base-content/20 backdrop-blur-sm' />
					</TransitionChild>

					<div className='fixed inset-0 overflow-hidden'>
						<div className='fixed inset-y-0 left-0 flex max-w-full'>
							<TransitionChild
								as={Fragment}
								enter='transition-transform ease-out duration-300'
								enterFrom='-translate-x-full'
								enterTo='translate-x-0'
								leave='transition-transform ease-in duration-200'
								leaveFrom='translate-x-0'
								leaveTo='-translate-x-full'
							>
								<DialogPanel
									id={menuId}
									className='flex h-full w-[85vw] max-w-[320px] flex-col gap-2 border-r border-base-content/10 bg-base-100 p-6 font-medium shadow-2xl'
								>
									<DialogTitle className='sr-only'>
										Navigation menu
									</DialogTitle>

									<div className='mb-6 flex items-center justify-between border-b border-base-content/10 pb-4'>
										<Link
											aria-label={`${siteConfig.name} - home`}
											className='flex items-center gap-3 transition-opacity hover:opacity-80'
											href='/'
											onClick={closeMenu}
										>
											<span className='text-primary'>
												<FaTerminal
													aria-hidden='true'
													size={20}
												/>
											</span>
											<span className='text-lg font-bold tracking-tight text-base-content'>
												{siteConfig.name}
											</span>
										</Link>
										<button
											aria-label='Close navigation menu'
											className='btn btn-circle btn-ghost btn-sm text-base-content/70 hover:text-base-content'
											onClick={closeMenu}
											type='button'
										>
											<AiOutlineClose
												aria-hidden='true'
												className='h-5 w-5'
											/>
										</button>
									</div>

									<nav
										aria-label='Mobile navigation'
										className='flex flex-col gap-2'
									>
										<Link
											className='btn btn-ghost w-full justify-start gap-3 text-base font-medium text-base-content/80 hover:bg-base-content/5 hover:text-base-content'
											href='/#about'
											onClick={closeMenu}
										>
											<AiOutlineInfoCircle
												aria-hidden='true'
												className='h-5 w-5 opacity-70'
											/>
											About
										</Link>

										<ProjectsDropdown onClose={closeMenu} />

										<Link
											className='btn btn-ghost w-full justify-start gap-3 text-base font-medium text-base-content/80 hover:bg-base-content/5 hover:text-base-content'
											href='/blog'
											onClick={closeMenu}
										>
											<AiFillBook
												aria-hidden='true'
												className='h-5 w-5 opacity-70'
											/>
											Blog
										</Link>

										<Link
											className='btn btn-ghost w-full justify-start gap-3 text-base font-medium text-base-content/80 hover:bg-base-content/5 hover:text-base-content'
											href='/#contact'
											onClick={closeMenu}
										>
											<AiOutlineMail
												aria-hidden='true'
												className='h-5 w-5 opacity-70'
											/>
											Contact
										</Link>

										<a
											aria-label='Open the RSS and Atom feed'
											className='btn btn-ghost w-full justify-start gap-3 text-base font-medium text-base-content/80 hover:bg-base-content/5 hover:text-base-content'
											href='/feed'
											onClick={closeMenu}
										>
											<MdRssFeed
												aria-hidden='true'
												className='h-5 w-5 opacity-70'
											/>
											Feed
										</a>
									</nav>

									<div className='flex-1' />

									<div className='border-t border-base-content/10 pt-6'>
										<div className='flex justify-center'>
											<Socials text size='small' />
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
