---
title: Typescript
tags:
  - typescript
  - javascript
  - flavor
---

# :family_man_woman_boy: Typescript

<TagLinks />

Why we need it? To help us write better code for compiler, and so compiler
can do its job more efficiently.
Does it mean typescript is faster than javascript?

::: quote Microsoft
Just another flavour of javascript
:::

How do I compile and run typescript while developing to get realtime feedback?
: Use [nodemon package](https://www.npmjs.com/package/nodemon) and ask bash to asynchronously run `tsc --watch`

    [From bash reference](https://mywiki.wooledge.org/BashSheet#:~:text=An%20ampersand%20does%20the%20same,for%20the%20former%20to%20end.)

    A single ampersand terminates an asynchronous command. An ampersand does the same thing as a semicolon or newline in that it indicates the end of a command, but it causes Bash to execute the command asynchronously. That means Bash will run it in the background and run the next command immediately after, without waiting for the former to end. Only the command before the & is executed asynchronously and you must not put a ; after the &, the & replaces the ;.

![web developer toolchain](../../.vuepress/public/img/webdev/web-developer-toolchain.png)

## :large_blue_diamond: Interfaces

- properties with types
- optional properties
- readonly properties
- Interfaces for
  - functions,
  - objects,
  - class

<<< @/../src/typescript/src/example.ts{33}

## :newspaper_roll: might be interesting

- [tslint is being merged to eslint](https://github.com/palantir/tslint/issues/4534)
- [babel vs tsc?](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)

::: tip babela and typescript
Babel 7 has built-in TypeScript syntax support.

This means that projects using Babel can now use TypeScript, without ever needing to complicate their builds with the TypeScript compiler.
:::

But what are the differences between using Babel and the TypeScript compiler? [And should you use Babel or TypeScript for your next project?](https://blog.logrocket.com/choosing-between-babel-and-typescript-4ed1ad563e41/#:~:text=TypeScript%20by%20default%20compiles%20an,widespread%20is%20probably%20const%20enums%20.)
: babel vs typescript compiler

    1. TypeScript by default compiles an entire project at once, while Babel only compiles one file at a time.

## Interfaces

Difference between implements and extends a class ?
: A class could extend to an interface as well as implement an interface.

    keyword     | description
    ------------|------------------
    implements  | same shape, but NOT a child, commonly used with Interfaces
    extends     | new class as a child, with all parents properties

    Implements a new class means,

## Generic Types

Creating types from types

- Get better type definitions
- How to add **constraints** to generic types? extend generic to interface?
- How to constrain generic type definitions? `extends`
- How to use Generics with Interfaces?
- How to use generics with react hooks? and functional components?
- HOw to override `useState` generic?
- How to use a render Prop with generics?

```ts
type numarr = Array<number>;
type strarr = Array<string>;

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

<T extends {firstname: string; lastname: string}>

interface Tab<T> {
  id: string;
  data: T
}

type NumberTab = Tab<number>
type StringTab = Tab<string>

// react Functional Component
interface Prop {
  name: string
}

const HelloWorld: React.FC<props> = ({name}) => (
  <div>Hello {name}!</div>
)

// render props
interface FormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}

const Form = <T extends {}>({values, children}: FormProps<T>) => {
  return (children(values))
}
```

## Advanced Typescript

- How to make an array immutable? `const a = [1,2,3,4,5] as const`
- How to let ts check if an array has an index? `const b = a[10]`

## :closed_book: References

<iframe width="560" height="315" src="https://www.youtube.com/embed/nViEqpgwxHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Footer />
