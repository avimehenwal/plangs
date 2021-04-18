---
title: Objects
tags:
  - object
  - javascript
  - hash
  - hashmaps
---

# :memo: Objects

<TagLinks />

::: tip
Don't use `console.log(obj)`, use `console.log(JSON.parse(JSON.stringify(obj)))`.

This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.
:::

How to pretty print Objects in console for debugging?
: The [JSON.stringify() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
converts a JavaScript object or value to a JSON string,

    ```js
    JSON.stringify(value[, replacer[, space]])
    ```

    [JSON.Parse reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## Object Operations

> Associative Arrays

- CRUD operations
- object Destructuring
- factory functions

<Footer />
