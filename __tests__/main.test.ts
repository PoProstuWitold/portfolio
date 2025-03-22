import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'
import { themes, projects } from '../src/utils/constans'

describe('Constans length tests', () => {
	describe('Themes', () => {
		it('should return array of length 10', async () => {
			strictEqual(themes.length, 10)
		})
	})
	describe('projects', () => {
		it('should return array of length 4', async () => {
			strictEqual(projects.length, 4)
		})
	})
})
