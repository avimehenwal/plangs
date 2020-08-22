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
:   Use [nodemon package](https://www.npmjs.com/package/nodemon) and ask bash to asynchronously run `tsc --watch`

    [From bash reference](https://mywiki.wooledge.org/BashSheet#:~:text=An%20ampersand%20does%20the%20same,for%20the%20former%20to%20end.)

    A single ampersand terminates an asynchronous command. An ampersand does the same thing as a semicolon or newline in that it indicates the end of a command, but it causes Bash to execute the command asynchronously. That means Bash will run it in the background and run the next command immediately after, without waiting for the former to end. Only the command before the & is executed asynchronously and you must not put a ; after the &, the & replaces the ;.



![web developer toolchain](https://cdn-media-1.freecodecamp.org/images/1*IP44ejhk2c78Nt_xUckWbw.png)


## :large_blue_diamond: Interfaces

* properties with types
* optional properties
* readonly properties
* Interfaces for
  * functions,
  * objects,
  * class

<<< @/../src/typescript/src/example.ts{32}


## :newspaper_roll: might be interesting

* [tslint is being merged to eslint](https://github.com/palantir/tslint/issues/4534)
* [babel vs tsc?](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)

## :closed_book References

<Footer />
