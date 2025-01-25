import { themes, projects } from '../src/utils/constans'

describe('Constans length tests', () => {
	describe('Themes', () => {
		it('should return array of length 7', async () => {
			expect(themes).toHaveLength(7)
		})
	})
	describe('projects', () => {
		it('should return array of length 4', async () => {
			expect(projects).toHaveLength(4)
		})
	})
})
