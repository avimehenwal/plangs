---
title: v8 Engine
tags:
- v8
- engine
- javascript
- compiler
- runtime
---

# v8 Engine

<TagLinks />

::: quote
v8 is Javascript runtime in chrome and nodejs
:::

* Asynchronous IO is based in Event Loops
  * use `libuv` for that
* 100k lines of JS and C++ code, glue between `libuv` and `v8`
  * inbuilt node modules, standard modules
* v8 = Js Runtime = js Engine = compiler = virtual machine
* Just In Time compiler
  * compile a little bit and run, compile a little bit and run it automated
  * speculative optimization
* written in C++
* Implements javascript according to ECMA Specification
  * Evverytime there are modifications in specifactions, they are added to runtime
* Garbage Collection
* WebAssembly is also a part of v8 starting 2019
  * https://www.infoq.com/news/2020/02/v8-webassembly-simd/
  * https://www.google.com/search?q=javascript+v8&newwindow=1&sxsrf=ALeKk03qxPq35f3dJ7-IpoVOJFVTlheQSA:1596773429800&source=lnms&tbm=nws&sa=X&ved=2ahUKEwj2n8fInIjrAhVDNOwKHUlvCq0Q_AUoBHoECEIQBg&biw=1294&bih=641

::: tip not in v8
1. Document Object Model datastructure
   1. responsibility of browser
2. No File System access
   1. libuv is used for that
3. console
   1. responsibility of node or chrome app to provide it.
:::

* Majority of v8 team in Munich, Germany
* Same release schedule as chrome, every 6 weeks
* **v8 API** is a part of ECMA Script specification which is exposed to node or chrome
* v8 compiler pipeline change - support for node 8
  * Full Cogent and crankshaft -> ignition and turbofan
  * ABI - Application Binary Interface guarentee to support node LTS version for stability
  * node v8 integration bot
* since node 7 use devtools and CDP protocol for debugging
* node is a first class citizen in v8 now

## Heap vs Stack

the standard distinguishes automatic and dynamic storage duration. Local variables have automatic storage duration and compilers store them on the stack. Objects with dynamic memory allocation (created with new) are stored on the free store, conventionally referred to as the heap. In languages that are not garbage-collected, objects on the heap lead to memory leaks if they are not freed.

* https://fhinkel.rocks/2017/10/30/Confused-about-Stack-and-Heap/
* [Whats faster, C++ or JS?](https://fhinkel.rocks/2017/12/07/Speed-up-Your-Node-js-App-with-Native-Addons/)

## Who uses it?

* node
* electron

<Footer />
