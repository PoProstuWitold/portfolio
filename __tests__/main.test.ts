import { themes, projects } from '../src/utils/constans'

describe('Constans length tests', () => {
	describe('Themes', () => {
		it('should return array of length 10', async () => {
			expect(themes).toHaveLength(10)
		})
	})
	describe('projects', () => {
		it('should return array of length 4', async () => {
			expect(projects).toHaveLength(4)
		})
	})
})
