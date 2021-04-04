---
title: Collections
tags:
  - collection
  - sets
  - vectors
  - lists
---

# Collections

<TagLinks />

How to ....?

1. declare?
2. add to?
3. remove from?
4. check is exists?
5. merge into?
6. can they nest?

## Sets

just like maths, unordered with no duplicates

```lisp
(def players #{"Alice", "Bob", "Kelly"})
(conj players "Fred")
(disj players "Bob" "Sal")
(contains? players "Kelly")
```

> Merge one collection INTO another collection?

```lisp
(def players #{"Alice" "Bob" "Kelly"})
(def new-players ["Tim" "Sue" "Greg"])
(into players new-players)
```

## Hased Maps | Maps

| operation | sets        | maps               |
| --------- | ----------- | ------------------ |
| declare   | `def #{}`   | `def {}`           |
| add to    | `conj`      | `assoc`            |
| remove    | `disj`      | `dissoc`           |
| lookup    | `contains?` | `get`, `contains?` |
| sub       |             | `keys`, `vals`     |
| merging   | `into`      | `merge`            |
| sorted    |             | `sorted-map`       |

- Look up with a default, assign default values if not found
- [x] great for representing Domain Objects
- [ ] Use `Records` for polymorphic behaviour, OO styled interfaces `protocols`

::: tip statements vs expressions
expressions return values, whereas statements do not
:::

## Programming Styles

- Use `do` blocks with `if` only if your bodies have side effects! (Why?)

## Branching / Conditional Flow

using

1. `if` and `if do`
2. `when`
3. `cond` and `else`

> Whats the difference b/w `if` and `when`?

if - handle both trythy and falsey Branching. Side-effects in `do` block
when - only when truthy cndition has to be handleded

<Footer />
