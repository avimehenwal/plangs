---
title: react.js
tags:
  - reactjs
  - frontend
  - framework
---

# react.js

<TagLinks />

- Generate and return content from javascript
- How to reusestateful logic between components?
  - Use react lifecycle hooks
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount - cleanup code

Why we need a frontend web framework in the first place? What problem does it solve?
: To work with javascript little bit easier and organised. Good for managing enterprise level projects

    * Provides built in reactivity

Bootstrap new react app

```bash
npx create-react-app my-app
```

| packages      | Description |
| ------------- | ----------- |
| react-dom     |             |
| react-scripts |             |

## React Hooks

### useState Hook

::: warning Hooks
can use hooks ONLY inside of function components and NOT class component
:::

- Hooks cannot be nested into anything, loops, functions, conditionals etc
- use the function varient, runs only once when component is loaded
- returns 2 values
  - current state values
  - function to update the current state - use the function version to set your state value
    - use previous value to update the current values

### useRef Hook use case

- How to show how many times a component rendered on screen?
- Reference elements inside HTML
  - same effect as document.querySelector()

::: danger useRef
Do not manage states yourself, let react do it for you. Do not misuse userRef
Update states using JSX
:::

ref vs state? Difference?
: Refs doent cause component to reupdate.

| Library                                                            | Description                                          |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| react-dom                                                          | DOM manupulation helper functions, render() function |
| [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) | scroll behaviour css proprty                         |

### useEffect Hook

> Anything we somethign something to change depending on s props, state, variable change, component mount/unmount use this hook

- inside a function component we dont have lifecycle hooks at all. All we have is useEffect hook
- We want something to change in component, on a sideffect
- Run hook only when a specific thing (2nd param) changes
  - if you pass an empty array, `useEffect` will only run once onMount, because empty array doesnt changes.

```jsx
useEffect(() => {
  console.log("render");
}, [resourceType]);
```

- How to remove useEffect event listner? when component is unmounted, we dont want slow apps
  - use `return () => {...}` within `useEffect`, runs evenrtime componet is unmounted
  - like unsubscribing from an api

## Features

- [ ] Clients
- [ ] Server
- [ ] Hooks
- [ ] Context
- [ ] Components
- [ ] States

## REDUX

- could be used independently of react, independent js library
- state management
- `useState`, `useSlice`
- MobX is alternative library
- Apollo, build, query and manage data graphs

```jsx
function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## Patterns

> For long-term maintainability, if there is a problem, we should be able to fix it.

- Avoid prop drilling
- Properly use sideEffect within components
- Mixed Components - side efffects + state handling + views
- Container / View Pattern - look for props changes for sideeffects and conditional rendering
- sideEffects are main source of bugs, schema of api may change
- How to reuse logic in different views?
  - Higher Order Component, take one component as parameter and returns another component
  - Render props
- Provider Pattern - redux is an implementation of provider pattern

## Testing

> Test the behaviour of your application?

- [React testing library](https://testing-library.com/docs/react-testing-library/intro)
- jest
  - little bit more helpful output against an expectation

How can we test react app?

```mermaid
graph LR
A(Rendering Component Tree):::blue
B(Rendering complete App):::yellow
A --> B
classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
```

- jest lets you access DOM via jsdom

  - mocking and timers

- How to test class components?
- `react.act()`
- Component works properly for a prop
- How to Mock modules?
- Simulate dom events
  - `button.dispatchEvent(new MouseEvent("click", { bubbles: true }));`
- Mocking Timers
- Snapshot Testing

## Look for Help

- https://stackoverflow.com/questions/tagged/reactjs
- https://blog.webdevsimplified.com/
- https://reactpatterns.com/
- https://reactcheatsheet.com/
- [What does side-effect mean in react?](https://www.reddit.com/r/reactjs/comments/8avfej/what_does_side_effects_mean_in_react/)

# Web based User Interfaces

- [ ] Accessability
- [ ] Scalibility
- [ ] Portability
- [ ] Security

* **MVC** vs **MV-VC** approach paradigm

How UI Interfaces are built?

1. using Templating technologies, partial based system
2. using Frontend Frameworks, component driven approach

## UI Interfaces Challenges

> Data changing overtime is the root of all EVIL

1. Mutable DOM, changin states, user inputs
2. Rich UI Elements, effects, graphics, multimedia, animation
3. Accessability Needs
4. Multiple Environments, Resolution, back-portability, mobile first development
5. RT, asynchronously respond to NEW streaming events at scale
6. Security, XSS
7. SEO, searchability

## Why Components

> Encapsulation of behaviours

- [ ] Faster development, code reuse
- [ ] Consistency in codebase
- [ ] Component Testability - Storybook, some IP --> some OP
- [ ] Highly **cohesive** building blocks
- [ ] Loosely **coupled** with other components

All React components must act like pure functions with respect to their props.

There are four main types of ReactJS components:

1. State-full or class-based components
2. State-less or function-based components
3. Presentational (or high-order) components
4. Container components

> Google has built **15,000** components for its internal use

1990 | HTML 1 | body h a img ul/li
1995 | HTML 2 | INPUT FORM SELECT
2016 | html 5 | AUDIO VIDEO CANVAS

1970 | UNIX | reusable little programs

> Be like **g/re/p**

- Composition similar to unix pipes
- DO NOT include Polyfill along with component, leave that choice to developer

### Anatomy of Components

INPUTS

1. props - properties
2. local states
3. Lifecycle Hooks
4. Markup

OUTPUT

1. Standard DOM objects with HTML,CSS,JS (maybe WASM)

### JS Toolchain

> How to make an Enterprise App?

| Priority | Category             | solutions           |
| :------: | -------------------- | :------------------ |
|    1.    | Package Manager      | `npm`, `yarn`       |
|    2.    | Compiler, transpiler | `babel`             |
|    3.    | JS Bundler           | `parcel`, `webpack` |
|    4.    | Deployment SDk       | `amplify`           |

```bash
npx create-react-app my-app
cd my-app
npm start
```

> Framework on top of Framework

- Next.js
  - PROS
    1. Styling and routing solutions
    2. SEO Friendly, crawlable website
    3. Server-Side Rendering SSR
  - CONS
    1. Gated Application, authorized pages
    2. web-application not exploiting SSR features

## BuzzWords, Jargons

1. [ ] Code Splitting
2. [ ] Prefetching
3. [ ] Hot Module Replacement and Error Reporting
4. [ ] Spaghetti Code

**SSR Server-Side Rendering**:
Pages to be sent to client are already generated ahead of time for rendering.

**JSX**:

- XML-like PREPROCESSOR
- React UI Component Markup
- JSX --> `react-dom` calls

**StoryBook**
Develop components in isolation.
Component Drivern Development

### Code Splitting

> Fastest ISP known to man, `localhost:8080`

- Evergreen browsers
  - that auto-update in the background
  - Link preloading and HTTP2
- How JS is shipping to clients today? In a single bundle
  - If you change a string, client needs to redownloading everything, including react, react-dom and other packaged 3rd party libraries.
- Use code-splitting, and ship 2 JS instead.
  - Exploit browser and network Cache
  - venjor.js (cache forever) put a hash on it (unlikely to change often) + app.js
  - Send only the minimum amount of JS required
    - Why let mobile browser parse, all other files when user is not even guarenteed to see a dashboard page
- **Dynamic Imports** built into ES6
- Lazy loading components with react
- Route level code splitting
  - login form, static HTML pages
  - dashboard page, loads whole frontend framework and other libraries
  - split when there is very less common b/w route components
    - smart component and dumb component reuse
- ship mobile CSS first, then gracefully upgrade to desktop for feature rich experience
- Use browser prefetching attributes wisely

## React

> A JavaScript **library** for building interactive user interfaces

- How to deal with States?
  - Do not modify local states directly
  - Data flows downs
  - states are merged
  - Lifting State Up?
- How to deal with Event Handlers?
- How to deal with Conditional Rendering?
  - if/else
  - bash like one-liner `&&`, `||`
  - terniary operator `condition : true ? false`
- How to Profile react app for optimization?
- How and when to use Code-Splitting?
- Out-of-the-box optimizations
  - Time Slicing, run critical tasks first on main thread
  - Asynchronous call scheduler, makes reactive calls possible
  - Suspense
  - Profiler

Google Trends

- jQuery vs ReactJS
- React vs vue

React is more polular than **renewable energy**, **orange juice** on google searches

### NEW in ReactJS

1. Reusing Controller Logic in components
2. Giant Components
3. Confusing Classes
   - classes makes it harder to implemetn HOT-Reloading reliably
   - Difficult for both humans and machines

- React does not encourage using **mixins** in code
- Hot Reloading vs fast refresh modules?
  - hot reloading doesnt supports functions components
  - fast-refresh is a first class features
  - make decision, update or re-mount the component

### HOOKS

| React Hooks  | Description                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `useState`   | set/get local states                                                                                  |
| `useEffect`  | SideEffects = data fetching, subscriptions, or manually changing the DOM from React components before |
| `useContext` | subscribe to React context without introducing nesting                                                |
| `useReducer` | manage local state of complex components with a reducer                                               |

How to build your own hooks?

### React Design Patterns

> general repatable solution to commonly occouring porblems

1. [RENDER props](https://reactjs.org/docs/render-props.html) - props is a function
2. Higher Order Component - Component composition nature, `makeToggleable` feature to any component.
   1. take a component and spits out a NEW component

### Event listners

**Event Bubbling**
How Event Handling works in web? Events propagate from `child` --> `parent` --> `grandparent` --> all
the way to `document`.
**Capturing** vs Bubling Events in event listners?

- How to stop event capture, bubbling propagation?
- How to Control Event handling to happen **ONLY** one time?
- How to dynamically remove a eventListner after certain condition like 5 times?
  - `.removeEventListner()`
-

### Deployment

Using AWS Amplify

- RT data updates,Using Observables with less hassle
- Integrated, CI/CD, Environments, Admin UI, API ACL
- Hybrid approach either SSG or SSR app bundle

### Modern Serverless Webapps

[algoexpert.io](https://www.algoexpert.io)

- GCP - 3 VMs on Kubernetes Pods
- Code Execution Engine - run code against test-cases
- What are the priorities of business and then build things accordingly
- Stress enough on Design Decisions

Real-Time webapp to conduct instant Polls

- All the code you write is Business logic
- Amplify CLI
- What does a webapp needs?
  1. Front End
  2. Backend API, `GraphQL` or `RESTful`
  3. Database
  4. Business logic
  5. **Real Time UI**
- AWS AppSync for hsoting GraphQL APIs
- Certificate Rotation

### Pete Hunt

- Why templating solutions like (handlebars, jina) have bad seperation of concerns?
  - **UseCase** - alternating row colors on a table entry
  - Add to add a new kV to data from Model
  - cascading change b/w template and Model
- Display logic and markup are inevitably tightly coupled, highly cohesive
- Using Templates
  - Partial based development
    - Embed/extend one template into another
- Speak the vocabulary of application, not the Framework
  - for functionality - JS functions
  - for reusability with different arguments - use Composition
  - Use JS Exoression to Functions and Arguments without jumping to other technologies
- XSS - cross site scripting vurnabilities
- Generating DOM using function calls, `react-dom` library
- Some change to input updates Component
  - PROBLEM - rebuilding DOM is expensive
  - SOLUTION - build a virtual DOM
  - and reconcile changes before update, `DOM diff`
    - similar to how DOOM 3 gaming engine rendering works
- React Event system
  - Read raw stream of browser events
  - and generate **synthetic** events, compliant to W3C specification in all browsers
  - PRO: gets unsupported browser events even with IE
- Bottleneck is DOM Operations and never the Diffing virtual trees
- Virtual DOM
  - Can use with `node.js`
  - Load static HTML first
  - defer JS loading for faster loading experience
  - Interactivity will pop-in as soon as JS is loaded
- build components NOT Templates
- Re-render, dont mutate

### Frontend Architectures

> Real cost of software is NOT the initial development, but **maintenance overtime**

- Why do we usually re-write code?
  - Inexperience with legacy code line of reasoning
  - Its fun to rewrite new code
  - Better solutions available
  - Recurring Technical debt
- Software Architect - maybe they have transcended coding!!?
  - Use conventions and COnstraints, like `const` instead of let
- Creating new JS modules does not makes an app modular
- Enforce coding constraints using CI/CD automation
  - Fail build whenever any new code depends on a specific portion

## JAM Stack

> Javascript + APIs + Markup

- FTPing vs GIT
- Evolution of WebPages
  1. Sir Bernard Lee - static webpage, without CSS
  2. CGI-BIN
  3. Database streaming websites
  4. web/application/client caches, CDN
  5. SEO tuning, Monitoring, Security

## REACT vs VUE

[Benchmarks react-vs-vue](https://stefankrause.net/js-frameworks-benchmark8/table.html)

| React         | Metric                              | Vue        |
| ------------- | ----------------------------------- | ---------- |
| 32.5/101.2 KB | Bundle Size compressed/uncompressed | 31/84.4 KB |
| more          | Popularity, Talent                  | less       |
|               | Startup time, runtime performance   |            |

## Q&A

- [Difference b/w imperative and declerative programming?](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)
  - https://ui.dev/imperative-vs-declarative-programming/
- What are `context` and `refs`?
- [React + AWS Toolchain](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/)
- [NPM vs Yarn]()
  1. Deterministic sub-dependency resolution
  2. Cache usage, saves time and network
  3. Pinned Version Resolutions
- Templates vs Components difference?
  - Its a Seperation technologies and NOT concern
  - Coupling vs Cohesion
  - Single Responsiblity Principle
- Composition vs Inheritance
  - avoid causing **rippling effects**
  - reuse code written by other people
- Capturing vs Bubling EventListners?
- Github to host images https://raw.githubusercontent.com/avimehenwal/plangs/master/docs/assets/img/devtools-snippets.eea2f4f7.png
  - `https://raw.githubusercontent.com/UserName/NameRepo/Branch/NameImg.png`

[blog]: https://reactjs.org/blog/2020/10/20/react-v17.html
[docs]: https://reactjs.org/tutorial/tutorial.html

<iframe width="560" height="315" src="https://www.youtube.com/embed/x7cQ3mrcKaY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> **25%** of food waste from U, Europe and USA would **end** the world hunger

<iframe width="560" height="315" src="https://www.youtube.com/embed/zVHWugBPGBE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Footer />
