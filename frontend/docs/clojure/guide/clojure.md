---
title: Clojure
tags:
  - clojure
  - language
---

# Clojure

<TagLinks />

Hosted Language on top of Java (JVM)

- `'` ignore evaluating the next thing
- Runtime Polymorphism. same operaton for all type of collections
- commas in clojure are just whitespace
- Referential transparency
- Functions are values in clojure
- Multi-arity
- `let` bind arguments to operators and then return a value
- Loops are recursion in FP language, we dont do mutations
- Higher order functions, map, reduce, filter
- `::` Fully qualified keyword
- Destructuring - pull oout values from a DS

## Data structures

- vector vs lists
  - both are implemented as linked lists in java
  - difference is one is stack, other one is queue
- Sets
- Maps and Hash Functions

| Function    | operator namespace |
| ----------- | ------------------ |
| get a value | get, get-in        |
| add a kv    | assoc, assoc-in    |
| remove      | dissoc             |

## State Management

atom, ref, agent

### atom

- reset! - replace the eitire ref
- deref - get the value
- swap! - state, function, return value

## What can clojure do

- [x] Scraping web pages
- [x] Shell scripts
- [x] Building websites
- [x] Playing around with OpenGL
- [x] Writing async webservers
- [x] HTML Templating
- [x] Running parallel tasks (fetching multiple URLs and process in parallel)
- [x] Playing around with real time audio
- [x] Simulations

<Footer />
