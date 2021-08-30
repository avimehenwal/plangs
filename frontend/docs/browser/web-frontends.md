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
- CSS `Clamp()`, reduce responsive code, min, maxm clamp
- CSS `calc(100vw - 80px)` use different units
- CSS maintains internal states, heading counters `counter-increment: headings`

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
- [Closure](../javascript/guide/iife.md), combination of functions with local/provate viariables
- How to manipulate DOM?
- How to add event Listeners?
- [How to make network calls? fetch vs axios](https://blog.logrocket.com/axios-or-fetch-api/)

::: tip why do we have react, vue and other frontend libraries?
The most important and fundamental reason why modern frameworks are used is that, with Vanilla JS, keeping the UI in sync with the state is hard.

[MVC Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) proposed by Trygve Reenskaug in 1970 when he was workign on smalltalk
:::

As with most frameworks, you usually shouldn't use it until you find that your other tools are failing you somehow.

#### [Javascript DOM API Events](https://www.w3schools.com/tags/ref_eventattributes.asp)

- [Whats the difference b/w onchange and oninput?](https://stackoverflow.com/questions/38256332/in-react-whats-the-difference-between-onchange-and-oninput)
- Fireofx how to minotor/log events? Use js debugger
- firefox devtools debugger is built using react and redux
- [Where is firefox mozilla source ?](https://searchfox.org/mozilla-central/source)

## Others

Amazon famously found that every **100ms** of delay in the load time of amazon.com cost them 1% in sales.
So loading an ==80KB JQuery is a big problem,== a problem we can avoid if we can find lighter alternatives.

- Web accessibility and ARIA tags
- Add internationalization and localization to the website? JS Objects
- How to detect user locale?

```js
var en_us = {
  welcome: "Welcome!",
};

var fr_ca = {
  welcome: "Salut!",
};

var lang = en_us;
document.getElementById("welcome").innerHTML = lang.welcome;
```

## Coding Challenges

100DaysOfCode

::: tip why CSS need to be checked for cross browser support?
CSS has been acound since netscape navigator and various browsers have implemented it in various wasys. No common consensus until specification arrived later
:::

- https://www.florin-pop.com/blog/2019/09/100-days-100-projects/
- https://awesomeopensource.com/project/nas5w/100-days-of-code-frontend#jest
- Todo Applcaition
- Expense tracker app
- Shopping list
- Movie/Book/Series list
- Image gallery
- [Web component template using vanilla js template](https://www.thinktecture.com/en/web-components/native-web-components-without-framework/)
- Form Validation using rules composition
- internationalization and localization support to webapp, without framework
- [HTML templates](https://www.w3schools.com/tags/tag_template.asp)
- Tracker js for analytics, account for total time spent on website, click, hover behaviour etc.
- Responsive webdesign, font/element/media size, padding/margin/border based on resolution
- cross browser suppport css tags
- SEO tags
- Booking/Reservation systems (ticketing/rail/ doctor appointment/movie/pre-order )
- Recommendation/ you may also like widgets
- search bars with predictive search + analytics
- commenting systems
- File upload, drag and drop areas
- Loading bars/icons
- SPA using vanilla JS, no page refreshes

## How to identify what to decouple?

- Single Responsibility Principle

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



<Footer />
```
