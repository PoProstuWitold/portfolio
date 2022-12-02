import { themes, mySkills, projects } from '../src/utils/constans'

describe('Constans length tests', () => {
    describe('Themes', () => { 
        it('should return array of length 8', async () => {
            expect(themes).toHaveLength(8)
        })
    })
    describe('mySkills', () => { 
        it('should be defined', async () => {
            expect(mySkills).toBeDefined()
        })
    })
    describe('projects', () => { 
        it('should return array of length 4', async () => {
            expect(projects).toHaveLength(4)
        })
    })
})