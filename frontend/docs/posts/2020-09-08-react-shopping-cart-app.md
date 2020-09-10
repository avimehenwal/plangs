---
title: React Shopping Cart App
date: 2020-09-08
tags:
- react
- post
featuredimg: https://picsum.photos/800/500.webp
author: avimehenwal
summary: react-shopping-cart-app
---

# react-shopping-cart-app

```bash
npx create-react-app@1.5.2 shopping-cart-app
```

* React will generate all the HTML and put it inside `root` element
* JSX className, WHY?
  * because class is a keyword in js and cannot be reused
* Import `react` on the top, because we have a reference to it, even though we are not using it directly
  * render() would automatically get compiled to `React.createElement('h1')`
* Instead of rendering simple HTML elements, we might want to render component(s) in our enterprise app
* We dont need curly braces in import for default imports
* with JSX we are extending the HTML vocabulary
* Use `<React.Fragment>` to remove extra `div` from DOM which are not doing anything.
  * multi-cursor editing, ctrl+D
  * react component can return only one value
  * `<> ... </>`
* `{ js expression }`
  * expression is something which returns a value
* recurring variables, perfect opportunity to Use object destructuring
  * `const { count } = this.state`
* React will yell, if key is not supplied in a loop
  * key need to be unique for that particular component, need not be unique in entire app
  * why? because react need to figure out which item in list has changed?
* Conditional rendering
* `useRef` Hook allows us to reference HTML elements values inside out js event handler functions
* `useEffect`
* introduced **hooks** in 2018, prior to that everythign was in classes

::: tip Logical operators
In js, logical operators `&&`, `||` and `!` operates even on non-boolean operators like strings etc.

```js
true && 'Hi'       // Hi
true && 'Hi' && 1  // 1
```

Why? Because js engine converts strings (non boolean types) to truthy
:::


## Refactor

* Use functions instead of classes

## Questions

* [ ] how to use component data and props
* [ ] How to set attributes/styles in JSX? like `<img src=?>`
  * inline styles using `{{...}}`
  * styles from component props/data
* [ ] How to handle events?
  * unlike the normal js its not the function call, we pass the reference to function in JSX
* [ ] Access `this` in react event handler?
  * Arrow function inherit `this` value
* [ ] What is `== $0` in devtools -> elements?
  * in console, `$0` or `$0.click()` to print DOM values
* [ ] [When to use browser localStorage?](https://www.w3schools.com/html/html5_webstorage.asp)
* [ ] When to use props and wen to use states?
  * props are like things which to pass to our component function
  * variable to a constructor


 <Footer />

