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
* How to reusestateful logic between components?
  * Use react lifecycle hooks
    * componentDidMount
    * componentDidUpdate
    * componentWillUnmount - cleanup code


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

::: warning Hooks
can use hooks ONLY inside of function components and NOT class component
:::

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

Library | Description
--------|-------------
react-dom | DOM manupulation helper functions, render() function
[smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) | scroll behaviour css proprty

### useEffect Hook

> Anything we somethign something to change depending on s props, state, variable change, component mount/unmount use this hook

* inside a function component we dont have lifecycle hooks at all. All we have is useEffect hook
* We want something to change in component, on a sideffect
* Run hook only when a specific thing (2nd param) changes
  * if you pass an empty array, `useEffect` will only run once onMount, because empty array doesnt changes.

```jsx
useEffect(() => {
  console.log('render');
}, [resourceType])

```

* How to remove useEffect event listner?  when component is unmounted, we dont want slow apps
  * use `return () => {...}` within `useEffect`, runs evenrtime componet is unmounted
  * like unsubscribing from an api

## Features

* [ ] Clients
* [ ] Server
* [ ] Hooks
* [ ] Context
* [ ] Components
* [ ] States

## REDUX

* could be used independently of react, independent js library
* state management
* `useState`, `useSlice`
* MobX is alternative library
* Apollo, build, query and manage data graphs

```jsx
function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

## Patterns

> For long-term maintainability, if there is a problem, we should be able to fix it.

* Avoid prop drilling
* Properly use sideEffect within components
* Mixed Components - side efffects + state handling + views
* Container / View Pattern - look for props changes for sideeffects and conditional rendering
* sideEffects are main source of bugs, schema of api may change
* How to reuse logic in different views?
  * Higher Order Component, take one component as parameter and returns another component
  * Render props
* Provider Pattern - redux is an implementation of provider pattern

## Testing

> Test the behaviour of your application?

* [React testing library](https://testing-library.com/docs/react-testing-library/intro)
* jest
  * little bit more helpful output against an expectation


## Look for Help

* https://stackoverflow.com/questions/tagged/reactjs
* https://blog.webdevsimplified.com/
* https://reactpatterns.com/
* https://reactcheatsheet.com/
* [What does side-effect mean in react?](https://www.reddit.com/r/reactjs/comments/8avfej/what_does_side_effects_mean_in_react/)

<Footer />
