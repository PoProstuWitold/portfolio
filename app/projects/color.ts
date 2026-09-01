function toLinearRgb(channel: number): number {
	const srgb = channel / 255

	return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
}

export function getContrastTextColor(hex: string): string {
	const normalizedHex = hex.trim().replace(/^#/, '')

	if (!/^[0-9a-fA-F]{6}$/.test(normalizedHex)) {
		return '#000000'
	}

	const red = Number.parseInt(normalizedHex.slice(0, 2), 16)
	const green = Number.parseInt(normalizedHex.slice(2, 4), 16)
	const blue = Number.parseInt(normalizedHex.slice(4, 6), 16)

	const luminance =
		0.2126 * toLinearRgb(red) +
		0.7152 * toLinearRgb(green) +
		0.0722 * toLinearRgb(blue)

	const contrastWithBlack = (luminance + 0.05) / 0.05
	const contrastWithWhite = 1.05 / (luminance + 0.05)

	return contrastWithBlack >= contrastWithWhite ? '#000000' : '#ffffff'
}
