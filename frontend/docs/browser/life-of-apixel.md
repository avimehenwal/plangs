---
title: Life of A Pixel
tags:
  - pixel
  - browser
  - frontend
---

# Life of A Pixel

<TagLinks />

## Browser facts

- Both HTML and XML are descendents of [SGML specification](http://xml.coverpages.org/connollyAscent.html)
- XML came after HTML
- Website = 1k+ lines of HTML, CSS and JS (wasm these days)
- `WebContents` is sandboxed, so that other webpages cannot access other pages
- Rendering and pixels, low level APIs?
- What are the lifecycyle stages of rendering pipeline?
- shadownDOM vs DOM tree
- DOM is linked together into a tree DS using pointers
- [What is the js main thread?](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread)

## Browser Components

- User Interface
- Browser Engine
- Rendering Engine
- Netwroking
- JS Interpreter
- UI Backend
- Data Persistance

Parsing -> Render Tree -> Layout -> Paint

::: tip Parsing
Translating a document into a structure that a code can use

1. Lexical ANalysis
2. Syntax ANalysis
3. Lexer (Tokenizer)
4. Parser

Readymade Examples: `Flex`, `Lex`, `Yacc`, `Bison`

:::

### Stages

> Each stage has its own data structures to work with it.

1. HTML parsing to low level `C++` objects
2. CSS parsing
3. JS parsing and execution sent to JS Engine main thread for execution
4. Visual Gemmetry computation - Layout Object Tree, `layoutNG`
5. PaintOps are in memory but have execued yet, Raster executes PaintOps
6. Rasterization = Paint Objects to in-memory pixel instructions to gpu, `openGL`, `directX`, `vulcan`
7. Rendered generates Frames/Sec

$$browser = \{ web content \} + \{ low\ level\ raw\ openGL\ calls \}$$

Layers of Abstraction

1. DOM
2. style
3. layout
4. paint
5. raster
6. GPU
7. Pixel

But its changing, Animation Frames 60Hertz, even when doing dynamic interaction else **jankey**

> How to do som much compuation 60 times / sec? in rendering pipeline?

Animation Pipelines are optimized using compositing. Instaead of rasterizing the whole area which CSS has changed, create a layer and move the bitmap using GPU

compositor thread gets the first crack at handling things when user interacts/changes browser state.
Else, its gets forwarded to js main thread task queue and gets executed whevver its free

### Resources

- https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
- https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html
- https://developers.google.com/web/updates/2018/09/inside-browser-part1

<iframe width="560" height="315" src="https://www.youtube.com/embed/p-iiEDtpy6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Footer />
