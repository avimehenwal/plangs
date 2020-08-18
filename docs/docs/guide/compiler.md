---
title: JIT Compiler
tags:
- compiler
- jit
---

# JIT Compiler

<TagLinks />

> dynamic translation or run-time compilations or just in time compilations
> or runtime systems

* compilation during the execution of program. 1 step
* In contrast to Ahead-Of-Time compiler for C/C++, java etc.
* [More on compilers](https://avi-python.netlify.app/Tutorials/07_compiler.html#types-of-compilers)

```mermaid
graph LR
A(Sourcecode):::blue
B(Bytecode):::green
C(Machinecode):::yellow
A --> B --> C
classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
click A "https://en.wikipedia.org/wiki/Just-in-time_compilation" "Click to open wikipedia"
click B "https://en.wikipedia.org/wiki/Bytecode" "Click to open wikipedia"
click C "https://en.wikipedia.org/wiki/Just-in-time_compilation" "Click to open wikipedia"
```

* Bytecode, also termed **portable code** or **p-code**
  * is a kind of IR
  * efficient execution by software interpreter
  * The name bytecode stems from instruction sets that have ==one-byte opcodes followed by optional parameters.==
  * Variables are expanded to memory references
* Runtime systems
  * Typically the runtime system will have some responsibility for setting up and managing the **stack** and **heap**, and may include features such as **garbage collection**, **threads** or other dynamic features built into the language
* A programming language consists of a **grammar/syntax** plus an **execution model**. The execution model specifies the behavior of elements of the language.
  * For example, **Operational Semantics** is one method of specifying a language's execution model.
* In computing, a virtual machine (VM) is an emulation of a computer system. Virtual machines are based on computer architectures and provide functionality of a physical computer. Their implementations may involve specialized hardware, software, or a combination.
  * Binary File - non-text file


## Resources

* http://slide.logan.tw/compiler-intro/#/
* [webkit-css-selector-jit-compiler](https://webkit.org/blog/3271/webkit-css-selector-jit-compiler/)
* [firefox faster interpreter](https://hacks.mozilla.org/2019/08/the-baseline-interpreter-a-faster-js-interpreter-in-firefox-70/)
* https://v8.dev/blog/launching-ignition-and-turbofan

libuv follows [Reactor Pattern](https://en.wikipedia.org/wiki/Reactor_pattern)

* https://en.wikipedia.org/wiki/WHATWG
  * formed when W3C got little lazy on browser and web technology
  * The WHATWG was formed in response to the slow development of World Wide Web Consortium (W3C) Web standards and W3C's decision to abandon HTML in favor of XML-based technologies. ... This spurred a renewed attempt to allow the W3C and the WHATWG to work together on specifications.

[HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgithub.com%2Favimehenwal&submit=Check)

<Footer />
