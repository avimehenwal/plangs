---
title: Patterns
tags:
  - Design
  - Patterns
---

# Design Patterns

<TagLinks />

**Function composition** is the process of combining two or more functions to produce a new function.
Composing functions together is like snapping together a series of pipes for our data to flow through.

What is the problem that `Types` solve for use?
: Reasons are

      1. Programmers convenience, IDE type checking, compiler throws warnings
      2. Code Reuse

Use **Terniary Operator** to check flag variables and `||` to set default values
[What is the difference between using '&&' and '||' over a ternary operator ('?' and ':')?](https://stackoverflow.com/questions/51051571/what-is-the-difference-between-using-and-over-a-ternary-operator/51051784)

## Code Reuse Patterns

> How to reuse code?

1. Inheritance - Parent and Children realtionship
2. Composition - more responsibility

| Inheritance | Description                      | used in language |
| ----------- | -------------------------------- | ---------------- |
| CLASSICAL   | at design time<br> `class` based | java             |
| PROTOTYPE   | at runtime                       | javascript       |

### Inheritance

::: danger Cons

1. Deeply Nested Inheritance
2. Handling special cases
   1. Override

:::

Use Composition with Inheritance

<Footer />
