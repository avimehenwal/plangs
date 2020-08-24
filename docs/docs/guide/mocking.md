---
title: Mocking
tags:
- mocking
- stub
- faking
- jest
---

# Mocking

<TagLinks />

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

<Footer />
