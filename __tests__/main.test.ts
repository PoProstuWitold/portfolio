import { Themes } from '../src/utils/constans'

describe('Basic tests', () => {
    it('should return array of length 2', async () => {
        expect(Themes).toHaveLength(4)
    })
})