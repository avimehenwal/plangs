---
title: How to fix the web
tags:
- brendan
- eich
- post
---

# How to fix the web

<TagLinks />

* js was a rushjob, Sidekick language for sun's java language
* Robin is now batman
* Most widely used programming language in the world. javascript and python
* 1992 - only text on web
* 1993 - [Marc Andreessen](https://en.wikipedia.org/wiki/Marc_Andreessen) added `<img>` tag[^1]
* 1994 - Netscape created [cookie](https://en.wikipedia.org/wiki/HTTP_cookie#History)
  * piece of memory on your computer which website can control
  * can put data into it and read it.
  * statys on computer even after computer is turned off
* 1995 - javascript came along
* [Hotlinking](https://simple.wikipedia.org/wiki/Hotlinking)
* [what is a web tracker?](https://blog.mozilla.org/firefox/what-is-a-web-tracker/)
  * [Malwaretising](https://en.wikipedia.org/wiki/Malvertising)
  * How did it happen?
  * Hide the malicious code insode the image. very clever
  * and ad gets placed into publishers website.
* Browser - User agent
  * they dont want to kill the fuse.
* Use new generation tools and browsers. [brave](https://brave.com/)
* [Demos of open web technologies](https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies)
* [HTML5 Notifications](https://elfoxero.github.io/html5notifications/)

* js included in Netscape navigator months after the relase
  * Single unified memory type
  * No integers, only IEEE 754 double preision floating point
* No one wants to use javascript in 2005-11 until
  * 2008 **javascript: the good parts** book came out
  * 2009 nodejs: asynchronous io libraries married to javascript virtual machine distributed as a single package.
    * problem, highly nested callbacks()
* 2013: asm.js

Let computer annotate the types for parameters and return values. They are good at this kind of thing mostly

* preamble of C, python virtual machine compiled from C into asm.js
* 3 MB of asm code compiled, has entire C virtual machine, has compiler, runtime, garbage collector
* Run virtual machines in browser [repl.it](https://repl.it/languages)
* Cross-compiling
  * able to run bash, zsh in browser
  * havent made lot of progress in [war times](https://en.wikipedia.org/wiki/List_of_wars_involving_the_United_States#20th-century_wars)
* GIMP: huge pile of C code - for windows
  * wants to talk to `win32` api closed-source
  * `wine` opensourced implementaion of win32 api
  * which wants to talk to `X-windows`, we create a shim for it
* opensourced implementation of mac windowing system is called `cacao` propiotary is `coco`

## How Computer actually work?

* Virtual Memory
  * We want process like vim to corrupt the kernels memory and crash the entire system
* Memeory Rings
  * Ring 0 - access to hardware, kernel space, managed by OS ususlly
  * Ring 3 - no direct access to hardware - application space
* Function Calls
  * Push registers
* System Call
  * that has to touch the hardware. read/write file.
  * Happening everytime we read from a socket, or do pretty much anything on computer

web = Interconnected documents

Kernel = Programming Languague + Rendering primitive

[^1]: https://thehistoryoftheweb.com/the-origin-of-the-img-tag/


<Footer />
