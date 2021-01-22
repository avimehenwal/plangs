---
title: Why TS?
tags:
  - typescript
  - why
---

# Why TS?

<TagLinks />

Attempt to bring Object-Oriented Programming Style to JS World

Can also write softwares in Functional Programming Style/Paradigm

## History

- Js is called ECMA Script
- js standardized by TC39 committee

## Functional Programming Concepts

[Functional Programming Concepts](https://en.wikipedia.org/wiki/Functional_programming)

| Concept                  | Description                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pure Functions           | no Side Effects                                                                                                                                               |
| Recursion                | no loops on FP, rely on recursion and iteration                                                                                                               |
| Referential Transparency | Variables once defined in a functional programming language aren’t allowed to change the value that they are holding throughout the execution of the program. |

- Immutable Variables
- Functions are First-Class and can be Higher-Order

::: tip Side Effects
In computer science, an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, that is to say has an observable effect besides returning a value (the main effect) to the invoker of the operation.
::: right
[Wikipedia page](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)
:::

## Type System (Rich types)

Highly influenced by Haskell

- Types Aliasing
- Type Unions `|`
- Intersection Types `&`
- `enum` is a way of giving more friendly names to sets of numeric values.
  - By default, enums begin numbering their members starting at 0.
- A type guard is some expression that performs a runtime check that guarantees the type in some scope.

## Additional

- write JSX in `.tsx` files, enable `jsx` options in compiler

<Footer />
