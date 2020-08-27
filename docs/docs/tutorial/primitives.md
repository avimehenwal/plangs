---
title: Fundamentals
tags:
- fundamental
- basic
- primitives
---

# Fundamentals

<TagLinks />


## Object Literals

New syntax object literal syntax. It tells javscript to create a memory references with name `book`
in memeory and assign `this` value to it.

```js
var book = {
  title: 'foo',
  author: 'bar',
}
```

## Property Value SHorthand

Sometimes we declare objects with one or more properties whose values are references
to variables by the same name

```js
var listeners = []
function listen() {}
var events = {
  listeners: listeners,
  listen: listen
}
```

is equivalent to

```ts{3}
var listeners = []
function listen() {}
var events = { listeners, listen }
```

## Computed Property

## Lexical Scoping

In the body of an arrow function, `this`, `arguments`, and `super` point to the containing scope

## Assignment Destructuring

syntax to unpack values from arrays, or properties from objects, into distinct variables

#### Use cases

1. Whenever there’s a function that returns an object or an array, destructuring makes it much terser to interact with.

## Symbol

```js
const mystery = Symbol('my symbol')
```

[Symbols] could be used by a library to map objects to DOM elements. For example, a library that needs to associate the API object for a calendar to the provided DOM element.


[Symbols]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

## Proxies

Proxies are an interesting and powerful feature in ES6 that act as intermediaries between API consumers and objects. In a nutshell, you can use a Proxy to determine the desired behavior whenever the properties of an underlying target object are accessed. A handler object can be used to configure traps for your Proxy, which define and restrict how the underlying object is accessed, as we’ll see in a bit.

## CommonJS

Attempt to implement module system in javascript.


## References

* https://github.com/mjavascript/practical-modern-javascript/blob/master/ch02.asciidoc
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

<Footer />
