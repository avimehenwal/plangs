---
title: IIFE
tags:
  - iife
  - immediately
  - invoked
  - function
  - expression
  - closure
---

# :ophiuchus: IIFE - Immediately Invoked Function Expressions

<TagLinks />

- Can be used to ==aviod lexical hoisting==

```js
(() => {
  // code here
})();
```

## When to use it?

The most common use case for IIFE is to create a
[closure](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>)
with some ==private variables inside of it==.

```js
// closure
var counter = (function() {
  // This variable is private. You cannot change it from the outer code.
  var i = 0;

  return function() {
    return i++;
  };
})();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

## References

- [wikipedia](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)
- https://mariusschulz.com/articles/use-cases-for-javascripts-iifes
- [Javascript naming convention, boolean, function, class, constants](https://www.robinwieruch.de/javascript-naming-conventions)

<Footer />
