'use client'
import { createContext, useContext, useLayoutEffect, useState } from 'react'

const themes = [
	'system',
	'light',
	'dark',
	'oled',
	'emerald',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'winter',
	'business',
	'nord'
] as const

export type Theme = (typeof themes)[number]

type SystemTheme = 'light' | 'dark'

const isTheme = (value: string | null): value is Theme =>
	value !== null && themes.includes(value as Theme)

interface ThemeContextType {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({
	children,
	defaultTheme = 'system'
}: {
	children: React.ReactNode
	defaultTheme?: Theme
}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	useLayoutEffect(() => {
		const storedTheme = localStorage.getItem('theme')
		const savedTheme = isTheme(storedTheme) ? storedTheme : defaultTheme

		setTheme(savedTheme)
		if (storedTheme !== savedTheme)
			localStorage.setItem('theme', savedTheme)
	}, [defaultTheme])

	useLayoutEffect(() => {
		const root = document.documentElement
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const applyTheme = () => {
			const preferredTheme: SystemTheme = mediaQuery.matches
				? 'dark'
				: 'light'
			root.setAttribute(
				'data-theme',
				theme === 'system' ? preferredTheme : theme
			)
		}

		applyTheme()
		mediaQuery.addEventListener('change', applyTheme)

		return () => mediaQuery.removeEventListener('change', applyTheme)
	}, [theme])

	const changeTheme = (newTheme: Theme) => {
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context)
		throw new Error('useTheme must be used within a ThemeProvider')

	return context
}
