export const themes = [
	'system',
	'light',
	'dark',
	'oled',
	'emerald',
	'cyberpunk',
	'valentine',
	'halloween',
	'winter',
	'business',
	'nord'
] as const

export type Theme = (typeof themes)[number]

export const DEFAULT_THEME = 'system' satisfies Theme
export const THEME_STORAGE_KEY = 'theme'

const themeLabels = {
	system: 'System',
	light: 'Light',
	dark: 'Dark',
	oled: 'OLED',
	emerald: 'Emerald',
	cyberpunk: 'Cyberpunk',
	valentine: 'Valentine',
	halloween: 'Halloween',
	winter: 'Winter',
	business: 'Business',
	nord: 'Nord'
} satisfies Record<Theme, string>

export const themeOptions = themes.map((name) => ({
	name,
	label: themeLabels[name]
}))

export function isTheme(value: unknown): value is Theme {
	return (
		typeof value === 'string' &&
		(themes as readonly string[]).includes(value)
	)
}

const serializedThemes = JSON.stringify(themes)

export const themeInitScript = `
(() => {
	try {
		const themes = ${serializedThemes};
		const storedTheme = window.localStorage.getItem('${THEME_STORAGE_KEY}');
		const theme = themes.includes(storedTheme) ? storedTheme : '${DEFAULT_THEME}';
		const resolvedTheme = theme === 'system'
			? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
			: theme;

		document.documentElement.dataset.theme = resolvedTheme;
		if (storedTheme !== theme) window.localStorage.setItem('${THEME_STORAGE_KEY}', theme);
	} catch {
		document.documentElement.dataset.theme = 'light';
	}
})();
`
