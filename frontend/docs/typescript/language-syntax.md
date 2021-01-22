---
title: Language Syntax
tags:
  - typescript
  - syntax
---

# Language Syntax

<TagLinks />

## Interfaces

Objects/Classes -> Interfaces: shape of Objects

- Optional Properties
- Readonly Properties
- Function Types Properties
- Indexable Types, with index signatures
- Class Types - with `extends` keyword

## Functions

types of Functions

1. Named Functions
2. Anonymous Functions
3. IIFE Immediately Invoked Functions
4. Pure Functions

Functional Parameters

- Mandatory Parameters, default
- Optional Parameters `?:`
- rest Parameters `...rest: string[]`

## Literals

There are three sets of literal types available in TypeScript today:
`strings`, `numbers`, and `booleans`; by using literal types you can
allow an exact value which a string, number, or boolean must have.

In practice string literal types combine nicely with `union types`, **type guards**,
and **type aliases**. You can use these features together to get `enum-like`
behavior with strings.

```ts
// Literal Narrowing
type Easing = "ease-in" | "ease-out" | "ease-in-out";
```

## Classes

Traditional JavaScript uses functions and
[prototype-based inheritance](https://en.wikipedia.org/wiki/Prototype-based_programming)
to build up reusable components,

How to create new isntances of class?
: `new` keyword

| class modifiers | syntax                                                   |
| --------------- | -------------------------------------------------------- |
| public          | by Default                                               |
| private         | `#`, canot be accessed outside class                     |
| protected       | `protected name: string;`, can be used in derieved class |
| readonly        | `readonly name: string;`                                 |

### Accessor

Using getters/setters using a class

```ts
// need to instantiate to use this class as accessor
class Employee {
  fullName: string;
}
// Alternatively use static Properties
// no Instantiation required, use directly with class
class Grid {
  static origin = { x: 0, y: 0 };
}
```

- Abstract Class
- Use a accessor class as Interface

## Generics

Make s/w work with **multiple** data types --> Generic Softwares

- `any` is certainly generic in that it will cause the function to accept any and all types for the type of arg,

::: tip Type variable
a special kind of variable that works on types rather than values.

```ts
function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: <T>(arg: T) => T = identity;
```

:::

- Generic Types
- Generic Classes
- Generic Constraints

## Iterators & Generators

> Lazy Loading

## Mixins

New classes from reusable, partial classes

## Module System

Starting with ECMAScript 2015, JavaScript has a concept of modules

older implementations

- Common JS Module System, exposed via a library

Types of exports

1. Named exports
2. Default Exports

::: tip MRO
Module Resolution Order
:::

<Footer />
