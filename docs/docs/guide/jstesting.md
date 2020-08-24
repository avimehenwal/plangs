---
title: Javascript Testing
tags:
- testing
- javascript
- spyon
- mocking
- stub
- jest
- faking
---

# :white_check_mark: Javascript Testing

<TagLinks />

* Mocking $=$ Object faking
* ==Test Stubs== are mocks that helps you test. <Badge type="tip" vertical="middle" text="For Example," /> interface for `sendEmail`
* ==mock objects== are objects where you actually put asserts on test to determine test pass/fail status. <Badge type="tip" vertical="middle" text="For Example," /> test if `sendEmail` service wrote a success/failure log. We will mock `logWriter` in this scenario.

## :monkey: Why Mocking

* Goal of mocking to avoid using any ==external service==. Why would we want to do that?
  * to make tests run faster
  * to make tests more isolated
  * to make tests more independent and idempotent of each other
  * great for writing **unittests**
* If our tests depends on some external service, then we might better call it **integration test**
* Great of simulating scenarious like
  * What if database is empty?
  * what if databse is full?
  * what if delays are $> 5$ sec?
  *what if network is super slow? Or no network at all situation.

## :dolls: Mock Object

* Track function calls, #instances created, results returned etc.
* Erase the actual implementation of a function
* what to assert on? values?
  * `expect(value).toMatchSnapshot()`

![jest mocking function mock property](../.vuepress/public/img/tests/mocking_fn_properties.png)

```ts
let car = 'some cat'
console.log(car);

```

<<< @/../src/mock/mock.test.js


## :timer_clock: Timer Functions

The native timer functions (i.e., `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`)
are less than ideal for a testing environment since they ==depend on real time to elapse.==

```js
jest.useFakeTimers();
// Fast-forward until all timers have been executed
jest.advanceTimersByTime(1000);
jest.clearAllTimers()

```

Enable fake timers by calling `jest.useFakeTimers();`.
This mocks out `setTimeout` and other timer functions with mock functions.
If running multiple tests inside of one file or describe block, jest.useFakeTimers();
can be called before each test manually or with a setup function such as `beforeEach`.

* Callback is called after 1 second?

## :cloud_with_rain: Good Questions

What is the difference [b/w jest.fn() and jest.spyOn()?](https://stackoverflow.com/questions/57643808/what-is-the-difference-between-jest-fn-and-jest-spyon-methods-in-jest)
:   They both does the same job but in different ways.

    `spyOn` - lets us create a mock from and existing class/method which we want to use in our test

    `jest.fn()` - lets us create mock object from scratch. Usually we just plug in the return values without
    caring about the implementation.


<Footer />
