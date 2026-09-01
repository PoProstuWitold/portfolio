import { deepStrictEqual, strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import { isTheme, themes } from '../app/config/themes'

const expectedThemes = [
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

describe('theme configuration', () => {
	it('contains the complete supported theme set in selector order', () => {
		deepStrictEqual(themes, expectedThemes)
	})

	it('accepts supported persisted values and rejects stale values', () => {
		for (const theme of expectedThemes) {
			strictEqual(isTheme(theme), true)
		}

		strictEqual(isTheme('retro'), false)
		strictEqual(isTheme(null), false)
	})
})
