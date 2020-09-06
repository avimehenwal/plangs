---
title: react.js
tags:
- reactjs
- frontend
- framework
---

# react.js

<TagLinks />

* Generate and return content from javascript


Why we need a frontend web framework in the first place? What problem does it solve?
:   To work with javascript little bit easier and organised. Good for managing enterprise level projects

    * Provides built in reactivity

Bootstrap new react app

```bash
npx create-react-app my-app
```

packages | Description
---------|-------------------
react-dom     | |
react-scripts | |

## React Hooks

### useState Hook

* can use hooks ONLY inside of function components and NOT class component
* Hooks cannot be nested into anything, loops, functions, conditionals etc
* use the function varient, runs only once when component is loaded
* returns 2 values
  * current state values
  * function to update the current state - use the function version to set your state value
    * use previous value to update the current values

### useRef Hook use case

* How to show how many times a component rendered on screen?
* Reference elements inside HTML
  * same effect as document.querySelector()

::: danger useRef
Do not manage states yourself, let react do it for you. Do not misuse userRef
Update states using JSX
:::

ref vs state? Difference?
:   Refs doent cause component to reupdate.


## Features

* [ ] Clients
* [ ] Server
* [ ] Hooks
* [ ] Context
* [ ] Components
* [ ] States

## Look for Help

* https://stackoverflow.com/questions/tagged/reactjs

<Footer />
