export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const setThemeScript = `
(function() {
	try {
		const theme = localStorage.getItem('theme') || 'system';
		const root = document.documentElement;
		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			root.setAttribute('data-theme', systemTheme);
		} else {
			root.setAttribute('data-theme', theme);
		}
	} catch (e) {
		console.error('Failed to set theme:', e);
	}
})();
`

export const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

export function getContrastTextColor(hex: string): string {
	const trueHex = hex.replace('#', '')

	const r = Number.parseInt(trueHex.substring(0, 2), 16)
	const g = Number.parseInt(trueHex.substring(2, 4), 16)
	const b = Number.parseInt(trueHex.substring(4, 6), 16)

	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

	return luminance > 0.5 ? '#000000' : '#ffffff'
}
