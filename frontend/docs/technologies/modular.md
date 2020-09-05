---
title: Modular Thinking
tags:
- modular
- thinking
---

# Modular Thinking

<TagLinks />

::: theorem
Modular programming is a software design technique that emphasizes separating the
functionality of a program into **independent**, **interchangeable** modules, such that each
contains everything necessary to execute only one aspect of the desired functionality.

:::right
[wikipedia](https://en.wikipedia.org/wiki/Modular_programming)
:::

<Dot code="digraph { splines=FALSE bgcolor=none node [fontsize=24, colorscheme=set312, style=filled fontname=Helvetica shape=box] Client [color=2 shape=ellipse] Dependencies [color=5] eventListener [color=3] sendEmail [color=1] Dependencies -> Client [label=injected] eventListener -> Client [label=as] sendEmail -> Client [label=service] { rank=same; Client} } "/><br>

## Modularity in javascript

> A brief history

1. Initially using `<script>` tags
2. [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection) Pattern
   1. **Dependencies** are injected to the **client** as a **service**
3. CommonJS module system, or CJS for short.

![Dependency Injection](https://blog.ona.io/assets/images/2019-04-23/koindi.png)

In CommonJS, each file is a module with its own scope and context.
Dependencies are loaded using a synchronous require function that can be dynamically
invoked at any time in the lifecycle of a module, as illustrated in this snippet:

```js
const mathlib = require('./mathlib')
```

## Modularity Design Principles

1. ==Cyclomatic complexity== is the number of unique code paths a program can take, and it may be a better metric when measuring the complexity of a component.
2. single responsibility principle (SRP)
3. API first, A module is only as good as its public interface
4. CRUST
   1. Consistent: Humans excel at identifying patterns, and we do so while reading as well
   2. Resilient: to error conditions and boundary values
   3. Unambiguous: The output shape for a function shouldn’t depend on how it received its input or the result that was produced.
   5. Simple and Tiny: configuration driven


## References

* https://en.wikipedia.org/wiki/Modular_programming
* https://en.wikipedia.org/wiki/Dependency_injection


*[cjs]: Common JS module system

<Footer />
