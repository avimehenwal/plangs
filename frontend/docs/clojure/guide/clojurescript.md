---
title: ClojureScript
tags:
  - client
  - clojure
  - script
  - browser
---

# ClojureScript

<TagLinks />

- Reactivity comes from The change could come from a deref’ed atom, the arguments passed to the component or component state.

## Shadow-cljs vs Figwheel

Shadow-cljs (the compiler) provides for hot-reloading,

Use react with

1. reagent
2. re-frame for SPA

## Reframe

- [x] Reactivity via subscription from data/information modal
- [x] Unidirectional data flow
- [x] Pristinely pure functions
- [x] Interceptors
- [x] SideEffects and Coeffects
- [x] Conveyor belts, UI intention as Event queues
- [x] Statechart-friendliness (FSM)
- [x] Immaculate hammock conception

::: quote
A UI is just derived data.
:::

- Uses Reagent
- Functional MVC framework, uni-directional Data Flow
- Architecturally, re-frame implements "a perpetual loop"
- re-frame puts all application state into one place, which is called `app-db`. Single source of truth
- Behaviours as pure functions without side effects
- Events are UI's Intent
- Effects and CO-Effects (add timestamp to all db effects)
- All app-data is in one Giant Atom DS
- Interceptors - middleware
- https://en.wikipedia.org/wiki/Event-driven_finite-state_machine

The six dominoes are:

1. Event dispatch, the user clicks a button, or a websocket receives a new message. `:on-click #(re-frame.core/dispatch [:delete-item item-id])])`
1. Handling Events
1. Effect handling, send logs/erros to reporting service, email, api calls
1. Query
1. View
1. DOM

::: tip Data
Data Oriented Design
Its about **DATA** and not functions. If data changes, view changes reactively

Events are data. Effects are data. DOM is data.
The functions which transform data are registered and looked up via data. Interceptors (data) are preferred to middleware (higher order functions). Etc.
:::

> How do I query information model of app

In REPL, `re-frame.db/app-db`, or in JS console `window.re_frame.db.app_db.state`

> How to dispatch multiple events and how to cordinate between them?

Dependency b/w event dispatch?

> How to deal with async calls and Promises?

```lisp
(-> (js/Promise.resolve 42)
    (.then #(js/console.log %))
    (.catch #(js/console.log %))
    (.finally #(js/console.log "cleanup")))
```

> How to add Event Handler to a DOM Element?

Several ways

1. Vanilla JS Interop

```lisp
(defn handler [] (js/console.log "ready"))
(js/document.addEventListener  "DOMContentLoaded" handler)
```

2. Use Event Listener API by Google Closure library for cross browser compatibility
3. Use 3rd party libraires like `react`, `vue`, `jQuery` etc, `reagent`, `reframe`

> [How to add dependencies to cljs project?](https://stackoverflow.com/questions/12904865/how-to-install-a-dependency-in-a-clojure-project)

- Google Closure Library is automatically bundlesd with cljs
- build external/foreign js usinf `{:optimizations :none}` then clojure can read symbols using js interop
- cljsjs

> How do I mount new components in SPA on-click?

[reagent.dom/render](https://stackoverflow.com/questions/45228474/how-can-i-use-clojurescript-to-interact-with-the-html-dom)

```lisp
(reagent.dom/render [simple-component] (.-body js/document)))
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/JCY_cHzklRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Resources

- https://purelyfunctional.tv/guide/re-frame-a-visual-explanation/

<Footer />
