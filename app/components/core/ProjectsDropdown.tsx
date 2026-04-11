import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'

export function ProjectsDropdown({ onClose }: { onClose?: () => void }) {
	const [open, setOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		// biome-ignore lint: Irrelevant
		<div
			ref={dropdownRef}
			className='dropdown w-full lg:w-auto z-50'
			onClick={() => setOpen((prev) => !prev)}
		>
			<button
				tabIndex={0}
				type='button'
				className={`btn btn-ghost w-full justify-start flex items-center gap-3 text-base-content/80 hover:text-base-content hover:bg-base-content/5 text-base font-medium lg:justify-center lg:gap-1.5 lg:btn-sm lg:rounded-md lg:px-4 lg:text-sm ${
					open ? 'bg-base-content/5 text-base-content' : ''
				}`}
			>
				{/* Visible only on mobile */}
				<MdComputer className='w-5 h-5 opacity-70 lg:hidden' />

				{/* Label text */}
				<span>Projects</span>

				<AiOutlineDown
					className={`w-4 h-4 lg:w-3 lg:h-3 ml-auto lg:ml-0 opacity-80 lg:opacity-60 transition-transform duration-200 ${
						open ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{open && (
				<ul className='dropdown-content menu z-50 w-full lg:w-48 p-1.5 mt-2 bg-base-100 lg:bg-base-100 border border-base-content/10 shadow-lg rounded-xl flex flex-col gap-0.5'>
					<li>
						<Link
							href='/#featured'
							onClick={onClose}
							className='flex w-full items-center rounded-lg px-3 py-2 text-sm text-base-content/80 transition-colors hover:bg-base-content/5 hover:text-base-content'
						>
							Featured Projects
						</Link>
					</li>
					<li>
						<Link
							href='/projects'
							onClick={onClose}
							className='flex w-full items-center rounded-lg px-3 py-2 text-sm text-base-content/80 transition-colors hover:bg-base-content/5 hover:text-base-content'
						>
							All Projects
						</Link>
					</li>
				</ul>
			)}
		</div>
	)
}
