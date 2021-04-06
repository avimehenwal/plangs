---
title: Shadow cljs Build Tool
tags:
  - shadow
  - build
  - tool
---

# Shadow cljs Build Tool

<TagLinks />

## What is shadow-cljs

Most of our app configuration are going to live under `showodcljs-edn` file

- not a fork but a different build tool build on top of cljs compiler
- Helps you use regular `npm` packages and modules
- replacement for cljs build and figwheel
- All `npm` imports as string

```clojure
(ns app.frontend
  (:require [reagent.core :as r]
            ["@smooth-ui/core-sc" :refer [Normalize]]))
```

Use best of both `clojure` and `javascript` worlds

$shadow-cljs = npm + cljs$

```bash
npx create-cljs-project app-name

npx shadow-cljs node-repl
npx shadow-cljs browser-repl

npx shadow-cljs watch frontend
compile, watch and release
```

## How it works ?

- `:asset-path` is realtive to `:output-dir`
- **modules** configure how the compiled sources are bundled together and how the final .js are generated. Usually we call a `:init-fn` inside it.
- [Code splitting](https://shadow-cljs.github.io/docs/UsersGuide.html#CodeSplitting) is done via multiple `:modules`
- Add external `js` using `extern` `compiler-option`
- Giant **6.3M** `js/main.js` file

> How to use npm packages inside shadow-cljs?

https://clojureverse.org/t/guide-on-how-to-use-import-npm-modules-packages-in-clojurescript/2298

<Footer />
