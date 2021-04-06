---
title: About
tags:
  - clojure
  - intro
---

# Introduction to cljs

<TagLinks />

- General purpose proggramming langiage (client + server) sode code
- **compiled** language, everyfeature is supported @runtime
- Functional programming with **immutable PDS**

::: quote rich Hickey
How easily can you reason about your code?
:::

## What a programming language suppoed to do?

- Able to model real world situations easily
- Concurrent, asynchronous prograaming (event syatem/ distributed)
- Manupulate collections, `map`, `reduce`, `filter`
- Pipeline data transformations
- Function compositions to form new Higher Order Functions

## Dependency Management ?

| style | description                         |
| ----- | ----------------------------------- |
| old   | project.clj, lein and figwheel-main |
| new   | deps.edn, shadow-cljs               |

```
npm install base64-js -S    in  :npm-deps

(ns foobar (:require
    ["base64-js" :as base64-js]))
```

## Build Tools

::: tip EDN
EDN is Clojure's JSON. It ignores dumb stuff like commas, and adds missing stuff like keywords and tagged data.
:::

### Figwheel

## Why hate JS?

```js
('b'+'a'+ +'a'+'a').toLowerCase()  => banana? why?

[10, 10,10].map(parseInt)          => [10, NaN, 2] why? bad api
```

### Resources

- https://lambdaisland.com/
- https://www.freecodecamp.org/news/here-is-a-quick-overview-of-the-similarities-and-differences-between-clojurescript-and-javascript-c5bd51c5c007/

<!-- prettier-ignore -->
*[EDN]: Extensible Data Notation

<Footer />
