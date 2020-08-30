---
title: vuejs
tags:
- vuejs
- vue
---

# vuejs

<TagLinks />

* Quiet small **20kb gzip** at runtime
* vue3 only import the parts you need
  * other parts would be removed by treeshaking
* Rewrite of DOM diffing algorithm, harnessing compiler based optimizations
* Composition API - new alternative syntax
* Multi root components
* teleport

### vue 2 limitations

* less redable $=$ less maintainable
  * call usualy js functions aka composition functions into `setup()`
* Code reuse
  * mixins
    * property name conflicts
  * mixin Factory
    * using namespace
  * scoped slots


```js
// start writing new composition API syntax
setup() {
  return {
    ...userSearch(), ...userSorting()
  }
}
function userSearch () {
  ...
}
function userSorting () {
  ...
}
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/6HUjDKVn0e0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Vue 2

* Directly use it from CDN, then add js insode `<script>` tags
* Moustache template syntax only looks for variables defiend vue `data property`
* you can have multiple instances of VUE object on page to do multiple seperate things.
  * `app.todo.push({ text: 'new item' })`


### Questions

* How to use it in your webpages?
  * bundle it along with your web-app using webpack
  * directly get it from CDN ot JSdeliver
* Why need/use it? Isnt plain js enough?
  * built-in reactivity
  * templating engine
* How to Directly manupulate vue data from devtool console?

<Footer />
