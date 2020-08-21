import fetchData from './promises';

const expected = {
  resolve: 'hello',
  reject: 'error'
}

// #region snippet
describe('Promise test suite', () => {
  test('callback syntax if promise::resolve', () => {
    return fetchData().then(data => {
      expect(data).toBe(expected.resolve);
    });
  });
  test('callback syntax if promise::rejected', () => {
    expect.assertions(1);
    return fetchData(false).catch(e => {
      expect(e).toMatch(expected.reject);
    })
  });
  test('resolves/rejects syntax if promise::resolve', () => {
    return expect(fetchData())
      .resolves.toBe(expected.resolve);
  });
  test('resolves/rejects syntax if promise::rejected', () => {
    return expect(fetchData(false))
      .rejects.toMatch(expected.reject);
  });
  test('async/await syntax if promise::resolve', async () => {
    const data = await fetchData();
    expect(data).toBe(expected.resolve);
  });
  test('async/await syntax if promise::rejected', async () => {
    expect.assertions(1);
    try {
      await fetchData(false);
    } catch (e) {
      expect(e).toMatch(expected.reject);
    }
  });
})

// #region snippet


/**
 * In JavaScript, there are six falsy values:
 * false, 0, '', null, undefined, and NaN.
 * Everything else is truthy.
 *
 * when testing asynchronous code
 * assertion ensures callbacks are called
 * our code has 1 callback
 *
 * toMatch is Substring match, is case sensitive
 */