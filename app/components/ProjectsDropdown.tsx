import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
	AiFillStar,
	AiOutlineDown,
	AiOutlineUnorderedList
} from 'react-icons/ai'
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
			className='dropdown w-full'
			onClick={() => setOpen((prev) => !prev)}
		>
			<button
				tabIndex={0}
				type='button'
				className={`btn btn-secondary btn-ghost btn-lg flex items-center gap-2 justify-start w-full ${
					open ? 'bg-secondary text-secondary-content' : ''
				}`}
			>
				<MdComputer className='w-7 h-7' />
				Projects
				<AiOutlineDown
					className={`w-4 h-4 ml-auto transition-transform duration-200 ${
						open ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{open && (
				<ul className='dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm gap-1'>
					<li>
						<Link
							href='/#featured'
							onClick={onClose}
							className='btn btn-secondary btn-ghost btn-md flex items-center gap-2 justify-start'
						>
							<AiFillStar className='w-7 h-7' />
							Featured
						</Link>
					</li>
					<li>
						<Link
							href='/projects'
							onClick={onClose}
							className='btn btn-secondary btn-ghost btn-md flex items-center gap-2 justify-start'
						>
							<AiOutlineUnorderedList className='w-7 h-7' />
							All
						</Link>
					</li>
				</ul>
			)}
		</div>
	)
}
