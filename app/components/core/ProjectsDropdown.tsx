'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { useId } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'

export function ProjectsDropdown({ onClose }: { onClose?: () => void }) {
	const menuId = useId()

	return (
		<Menu as='div' className='dropdown relative z-50 w-full lg:w-auto'>
			{({ open, close }) => (
				<>
					<MenuButton
						aria-controls={menuId}
						aria-expanded={open}
						aria-label='Projects menu'
						className={`btn btn-ghost flex w-full items-center justify-start gap-3 text-base font-medium text-base-content/80 hover:bg-base-content/5 hover:text-base-content lg:btn-sm lg:justify-center lg:gap-1.5 lg:rounded-md lg:px-4 lg:text-sm ${
							open ? 'bg-base-content/5 text-base-content' : ''
						}`}
					>
						<MdComputer
							aria-hidden='true'
							className='h-5 w-5 opacity-70 lg:hidden'
						/>
						<span>Projects</span>
						<AiOutlineDown
							aria-hidden='true'
							className={`ml-auto h-4 w-4 opacity-80 transition-transform duration-200 lg:ml-0 lg:h-3 lg:w-3 lg:opacity-60 ${
								open ? 'rotate-180' : ''
							}`}
						/>
					</MenuButton>

					<MenuItems
						modal={false}
						id={menuId}
						className='dropdown-content menu z-50 mt-2 flex w-full origin-top flex-col gap-0.5 rounded-xl border border-base-content/10 bg-base-100 p-1.5 shadow-lg focus:outline-none lg:w-48'
					>
						<MenuItem>
							<Link
								href='/#featured'
								onClick={() => {
									close()
									onClose?.()
								}}
								className='flex w-full items-center rounded-lg px-3 py-2 text-sm text-base-content/80 transition-colors hover:bg-base-content/5 hover:text-base-content focus:bg-base-content/5 focus:text-base-content focus:outline-none'
							>
								Featured Projects
							</Link>
						</MenuItem>
						<MenuItem>
							<Link
								href='/projects'
								onClick={() => {
									close()
									onClose?.()
								}}
								className='flex w-full items-center rounded-lg px-3 py-2 text-sm text-base-content/80 transition-colors hover:bg-base-content/5 hover:text-base-content focus:bg-base-content/5 focus:text-base-content focus:outline-none'
							>
								All Projects
							</Link>
						</MenuItem>
					</MenuItems>
				</>
			)}
		</Menu>
	)
}
