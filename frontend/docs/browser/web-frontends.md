---
title: Web Frontend
tags:
  - frontend
  - web
  - mozilla
---

# Web Frontend

<TagLinks />

what is the output of browser?

: Rendering the website with refresh rate of 60fps or at least 30fps. 60 Hertz is the gold standard

    - Browser has multiple queues to support asynchronous operations
    - Rendering Queue for rendering operations
    - Event/Job Queue to place callback functions

## Web Technologies

- Browser has Extensions
- HTTP follows **stateless**, Typical client server architecture model
- Http cache, http/2, cache, cookies, headers, request methods, CSP directives, status code

::: warning js main thread

- Main thread executed the instruction on **callstack** or **stack**.
- It is blocking during the time stack is getting executed. Cause of the **jank**
- Hence its advised to put all long running shitty code in callbacks and on event loop queue

:::

### [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

> Most basic building block of the Web, generates the DOM tree

- Semantic HTML, logical page sections
- HTML Forms
- Multimedia/graphics embedding
- Preloading content with `rel=preload` or `defer` loading
- CORS in image urls

### [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

> Style the DOM nodes

- CSS selectors
- CSS Layouts, Box Model, grids, flexbox
- Pseudo Elements/Selectors
- CSS transiions and Animations
- CSS Events
- CSS Browser Compatibility
- CSS Media Queries

### SVG

> Describe graphics in XML like notation

- viewbox vs viewport

### MathML

dialect of XML

### Web APIs

[100+ 's of ready to use APIs provided by browser](https://developer.mozilla.org/en-US/docs/Web/API)

[Document web API Interface](https://developer.mozilla.org/en-US/docs/Web/API/Document)

### Security

### [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

::: tip What the hell is javascript?

- Interpreted, jit-in-time compiled (not ahead-of-time)
- single threaded, non-blocking, asynchronous, concurrent language
- [Prototype based Inheritance](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming),
- Built using implementing ECMAScript Standards (TC9 committe)

:::

Main thread is responsible for

- executing stack memory instructions
- rendering frames
- Garbage Collection

> Concurrency and asynchronous nature is added to blocking js via ==Event Queues== implemented using `libuv` C++ library. Concurrency model via Event Loop mechanism

- [Basic building blocks for dynamic web](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)
- JS Objects and prototype Inheritance, chaining and `bind`
- Hoisting?
- `NaN` Not A Number
- Closure, combination of functions with local/provate viariables
- How to manipulate DOM?
- How to add event Listeners?
- [How to make network calls? fetch vs axios](https://blog.logrocket.com/axios-or-fetch-api/)

::: tip why do we have react, vue and other frontend libraries?
The most important and fundamental reason why modern frameworks are used is that, with Vanilla JS, keeping the UI in sync with the state is hard.

[MVC Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) proposed by Trygve Reenskaug in 1970 when he was workign on smalltalk
:::

As with most frameworks, you usually shouldn't use it until you find that your other tools are failing you somehow.

## Common Operations

How to remove a block of elements from DOM?

<code-group>
<code-block title="Vanilla JS">
```js
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);

````
</code-block>

<code-block title="CLJS">
```clojure
;; reagent->react
(unmount-component-at-node container)
````

</code-block>

<code-block title="REACT">
```js
const Expire = props => {
  const [visible, setVisible] = useState(true);

useEffect(() => {
setTimeout(() => {
setVisible(false);
}, props.delay);
}, [props.delay]);

return visible ? <div>{props.children}</div> : <div />;
};

```
</code-block>
</code-group>

## Others

- Web accessibility and ARIA tags

<Footer />
```
