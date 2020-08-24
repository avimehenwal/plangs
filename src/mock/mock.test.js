/** REVIEW
 *
 * The jest object is automatically in scope within every test file.
 * The methods in the jest object help create mocks.
 * imported explicitly by via
 * import {jest} from '@jest/globals'.
 *
 * NOTE -> MOCKING aka Spying
 * 1. How the method was called
 * 2. What were the responses to each call
 *
 * https://jestjs.io/docs/en/mock-function-api#methods
 * https://jestjs.io/docs/en/jest-object#mock-functions
 * https://stackoverflow.com/questions/2665812/what-is-mocking
 *
 * How to create mock objects/functions?
 * 1. jest.fn(implementation)
 * 2. jest.spyOn(object, methodName)
 *
 * How to create test stubs? Indirections?
 * https://jestjs.io/docs/en/manual-mocks#mocking-user-modules
 *
 * NOTE -> Parameterized and concurrent tests
 * test.only
 * test.each(table)(name, fn, timeout)
 * test.todo(name)
 */

const timeout = 5000;

// beforeAll(SuiteSetup, timeout)
// beforeEach(TestSetup, timeout)
// afterEach(TestTeardown, timeout)
// afterAll(SuiteTeardown, timeout)

function sumFn (a, b) {
  return (a+b)
}

describe('dummy test suite', () => {
  test('both integer argumants', () => {
    // Mock sumFn Functionality
    const mockFn = jest.fn((x, y) => x+y);
    console.log(mockFn);
    // expect(actual).toBe(6)
  })
})