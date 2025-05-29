'use client'

import {
	FaBriefcase,
	FaCheck,
	FaCloud,
	FaDesktop,
	FaGhost,
	FaHeart,
	FaLeaf,
	FaMoon,
	FaSnowflake,
	FaSun
} from 'react-icons/fa'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	const themes = [
		{ name: 'system', label: 'System', icon: <FaDesktop size={16} /> },
		{ name: 'light', label: 'Light', icon: <FaSun size={16} /> },
		{ name: 'dark', label: 'Dark', icon: <FaMoon size={16} /> },
		{ name: 'emerald', label: 'Emerald', icon: <FaLeaf size={16} /> },
		{ name: 'valentine', label: 'Valentine', icon: <FaHeart size={16} /> },
		{ name: 'halloween', label: 'Halloween', icon: <FaGhost size={16} /> },
		{ name: 'winter', label: 'Winter', icon: <FaSnowflake size={16} /> },
		{
			name: 'business',
			label: 'Business',
			icon: <FaBriefcase size={16} />
		},
		{ name: 'nord', label: 'Nord', icon: <FaCloud size={16} /> }
	] as const

	return (
		<div className='dropdown dropdown-end'>
			<button
				className='btn btn-ghost w-full justify-between items-center gap-2 text-base'
				type='button'
			>
				<span className='flex items-center gap-2'>
					Theme
					<HiOutlineColorSwatch size={20} className='mt-[1px]' />
				</span>
			</button>
			<ul className='dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 mt-2 max-h-96 overflow-y-auto'>
				{themes.map((item) => {
					const isActive = item.name === theme
					return (
						<li key={item.name}>
							<button
								className={`flex items-center gap-2 w-full justify-between rounded ${
									isActive
										? 'bg-base-300 font-bold text-primary'
										: ''
								}`}
								onClick={() => setTheme(item.name)}
								type='button'
							>
								<span className='flex items-center gap-2'>
									{item.icon}
									{item.label}
								</span>
								{isActive && <FaCheck size={14} />}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
