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

## Enterprise App

* is a timer app classify as enterprise app?
* Is a apple watch app a enterprise app?
* At what time an app becomes an enterprise app?

Code is like comedy, the more you have to explain it, less funny it is.

![milestones in web technologies](../.vuepress/public/img/browser/web-technologies-milestones.png)

### Questions

* How to use it in your webpages?
  * bundle it along with your web-app using webpack
  * directly get it from CDN ot JSdeliver
* Why need/use it? Isnt plain js enough?
  * built-in reactivity
  * templating engine
* How to Directly manupulate vue data from devtool console?
* [How to access vue instance from console?](https://forum.vuejs.org/t/how-to-access-vue-from-chrome-console/3606)

## Issues

* [devtools not working with vue3](https://github.com/vuejs/vue-devtools/issues/1244)
* [__VUE_DEVTOOLS_APP_RECORD__](https://github.com/vuejs/vue-devtools/issues/1246)


<Footer />
