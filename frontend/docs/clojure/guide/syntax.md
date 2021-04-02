---
title: Clojure Syntax
tags:
  - clojure
  - syntax
---

# Clojure Syntax

<TagLinks />

> How to define/declare global variables with in namespaces?

`def` block is like Assignment operator `=` in other languages

> What is the difference b/w `let` and `def`?

The syntax for them is different, even if the meanings are related.

`let` takes a **list of bindings** (name value pairs) followed by expressions to evaluate in the context of those binding. let binds symbols to values in a "lexical scope"

`def` just takes one binding, not a list, and adds it to the global context.

> How to use docs on REPL?

```lisp
(require '[clojure.repl :refer :all])
```

`doc`, `find-doc`, `apropos`, `source`, and `dir`

<Footer />
