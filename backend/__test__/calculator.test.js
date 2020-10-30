const findAverage = require('../calculator')

describe('calculator library', () => {
  test('average of 12 to 3 should return 4', () => {
    const expectedOutput = 4
    const actualOutput = findAverage(12, 3)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('average of 12 to 0 should return 0', () => {
    const expectedOutput = 0
    const actualOutput = findAverage(12, 0)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('average of 12 to -4 should return 0', () => {
    const expectedOutput = 0
    const actualOutput = findAverage(12, -4)
    expect(actualOutput).toBe(expectedOutput)
  })

  test(`average of string format 'coyotiv' to 'photos' should throw type error`, () => {
    expect(() => findAverage('coyotiv', 'photos')).toThrow(TypeError)
  })
})
