export function getContrastTextColor(hex: string): string {
	const normalizedHex = hex.replace('#', '')
	const red = Number.parseInt(normalizedHex.substring(0, 2), 16)
	const green = Number.parseInt(normalizedHex.substring(2, 4), 16)
	const blue = Number.parseInt(normalizedHex.substring(4, 6), 16)
	const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

	return luminance > 0.5 ? '#000000' : '#ffffff'
}
