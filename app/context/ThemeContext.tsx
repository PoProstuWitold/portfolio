'use client'
import {
	createContext,
	type ReactNode,
	useContext,
	useLayoutEffect,
	useState
} from 'react'
import {
	DEFAULT_THEME,
	isTheme,
	THEME_STORAGE_KEY,
	type Theme
} from '@/config/themes'

interface ThemeContextType {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function resolveTheme(
	theme: Theme,
	prefersDark: boolean
): Exclude<Theme, 'system'> {
	if (theme === 'system') return prefersDark ? 'dark' : 'light'
	return theme
}

export const ThemeProvider = ({
	children,
	defaultTheme = DEFAULT_THEME
}: {
	children: ReactNode
	defaultTheme?: Theme
}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	const [initialized, setInitialized] = useState(false)

	useLayoutEffect(() => {
		let storedTheme: string | null = null

		try {
			storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
		} catch {
			// The selected theme still works when storage is unavailable.
		}

		const savedTheme = isTheme(storedTheme) ? storedTheme : defaultTheme
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		document.documentElement.dataset.theme = resolveTheme(
			savedTheme,
			prefersDark
		)
		setTheme(savedTheme)
		setInitialized(true)

		if (storedTheme !== savedTheme) {
			try {
				window.localStorage.setItem(THEME_STORAGE_KEY, savedTheme)
			} catch {
				// Persisting a preference is optional.
			}
		}
	}, [defaultTheme])

	useLayoutEffect(() => {
		if (!initialized) return

		const root = document.documentElement
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const applyTheme = () => {
			root.dataset.theme = resolveTheme(theme, mediaQuery.matches)
		}

		applyTheme()
		mediaQuery.addEventListener('change', applyTheme)

		return () => mediaQuery.removeEventListener('change', applyTheme)
	}, [initialized, theme])

	const changeTheme = (newTheme: Theme) => {
		setTheme(newTheme)

		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, newTheme)
		} catch {
			// The selected theme still applies for the current page.
		}
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
