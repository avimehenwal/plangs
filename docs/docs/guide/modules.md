---
title: Modules
tags:
- es2015
- modules
- javascript
- import
- export
---

# :package: Modules

<TagLinks />


* Starting with [ECMAScript 2015](https://babeljs.io/docs/en/learn/), JavaScript has a concept of modules.
* Modules have their own namespaces, unless they are exported

## :: Interface

> shape of data

* [Interface Example](https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface)

## :question: Good questions

When should I use curly braces for ES6 import?
:  default import vs Named import

   ```js
   // export default 42
   import A from "ABC"

   // export const A = 42
   import { A } from "ABC"

   // Default export is actually a named export with name default
   import {default as Sample} from '../Sample.js';
   ```

   [source](https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import)

## :star: Main Features

1. Arrows and Lexical this
2. Classes
3. Templated strings
4. Object/Array Destructuring
   1. fail-soft
5. Default + Rest + Spread
6. Let + Const
7. for ... of Iterator
8. Generators function* and yield
9. Modules export/import
10. Promises - asynchronous programming


## :earth_americas: Resourcces

* https://www.typescriptlang.org/docs/handbook/modules.html

<Footer />
