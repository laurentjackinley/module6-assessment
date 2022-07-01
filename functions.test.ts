const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('expect array to return an array', () => {
        let retArr = shuffleArray()
        expect( retArr).toBe(true)
    })
    
    test('check if the return array is the same length', () => { 
            let arrlength = shuffleArray()
        expect(arrlength).toHaveLength(10)
    })
})