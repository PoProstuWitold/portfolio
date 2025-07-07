import { strictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import { featuredProjects, themes } from '../app/utils/constans'

describe('Constans length tests', () => {
	describe('Themes', () => {
		it('should return array of length 10', async () => {
			strictEqual(themes.length, 10)
		})
	})
	describe('featuredProjects', () => {
		it('should return array of length 4', async () => {
			strictEqual(featuredProjects.length, 4)
		})
	})
})
