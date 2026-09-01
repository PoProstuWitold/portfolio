'use client'

import type { IconType } from 'react-icons'
import {
	FaBolt,
	FaBriefcase,
	FaCheck,
	FaCloud,
	FaDesktop,
	FaGhost,
	FaHeart,
	FaLeaf,
	FaMoon,
	FaRegCircle,
	FaSnowflake,
	FaSun
} from 'react-icons/fa'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { type Theme, themeOptions } from '@/config/themes'
import { useTheme } from '@/context/ThemeContext'

const themeIcons: Record<Theme, IconType> = {
	system: FaDesktop,
	light: FaSun,
	dark: FaMoon,
	oled: FaRegCircle,
	emerald: FaLeaf,
	cyberpunk: FaBolt,
	valentine: FaHeart,
	halloween: FaGhost,
	winter: FaSnowflake,
	business: FaBriefcase,
	nord: FaCloud
}

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	return (
		<div className='dropdown dropdown-end'>
			<button
				aria-label='Choose a color theme'
				className='btn btn-ghost w-full justify-between items-center gap-2 text-base'
				type='button'
			>
				<span className='flex items-center gap-2'>
					Theme
					<HiOutlineColorSwatch aria-hidden='true' size={20} />
				</span>
			</button>

			<ul className='dropdown-content z-1 menu p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto'>
				{themeOptions.map((item) => {
					const isActive = item.name === theme
					const Icon = themeIcons[item.name]

					return (
						<li key={item.name}>
							<button
								aria-pressed={isActive}
								className={`flex items-center gap-2 w-full justify-between rounded ${
									isActive
										? 'bg-base-300 font-bold text-primary'
										: ''
								}`}
								onClick={() => setTheme(item.name)}
								type='button'
							>
								<span className='flex items-center gap-2'>
									<Icon aria-hidden='true' size={16} />
									{item.label}
									{isActive && (
										<span className='sr-only'>
											{' '}
											(selected)
										</span>
									)}
								</span>
								{isActive && (
									<FaCheck aria-hidden='true' size={14} />
								)}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
