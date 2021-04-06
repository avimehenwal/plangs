---
title: Clojure Syntax
tags:
  - clojure
  - syntax
---

# Clojure Syntax

<TagLinks />

> What is `::` notation in clojure?

Shorthand to use current namespace. `:app.client/person` --> `::person` Localized name

> How to define/declare global variables with in namespaces?

`def` block is like Assignment operator `=` in other languages

> What is the difference b/w `let` and `def`?

The syntax for them is different, even if the meanings are related.

`let` takes a **list of bindings** (name value pairs) followed by expressions to evaluate in the context of those binding. let binds symbols to values in a "lexical scope"

`def` just takes one binding, not a list, and adds it to the global context.

> How to use docs on REPL?

```lisp
(require '[clojure.repl :refer :all])
```

`doc`, `find-doc`, `apropos`, `source`, and `dir`

> What is underscore in reframe?

The underscore is the universal ignore symbol. Its a valid symbol indentifier

```lisp
(let [_ 1] (println _))
```

> How to add dependency? to manipulate DOM via google closure library?

<code-group>
<code-block title="Google Closure Library">
```clojure
(ns so-doc.events
  (:require
   [goog.dom :as dom]
   [goog.events :as events]))

(defn handle-click [event] ;an event object is passed to all events
(js/alert "button pressed"))

(events/listen
(dom/getElement "button"); This is the dom element the event comes from
(.-CLICK events/EventType); This is a string or array of strings with the event names.
;;All event names can be found in the EventType enum
handle-click ;function that should handle the event
)

````
</code-block>

<code-block title="js Interop">
```clojure
(ns so-doc.events)

(enable-console-print!)

(defn click-event []
  (println "Button clicked"))

(defn load-event []
  (println "Page loaded!")
  (.addEventListener (.getElementById js/document "btn") "click" click-event false))

(.addEventListener js/window "load" load-event false)
````

</code-block>
</code-group>

> What is the difference between `:refer` and `:as` in cljs declerations?

[How to namespce in clojure?](https://stuartsierra.com/2016/clojure-how-to-ns.html)

| keyword  | description                         |
| -------- | ----------------------------------- |
| `:as`    | as an namespace Alias               |
| `:refer` | makes it look like a local function |

<code-group>
<code-block title="AS">
```clojure
(ns demo.core
  (:require
    [clojure.string :as str] ))

(println (str/join ["hello" "there"]))

````
</code-block>

<code-block title="REFER">
```clojure
(ns demo.core
  (:require
    [clojure.string :refer [join] ))

(println (join ["hello" "there"]))
````

</code-block>
</code-group>

> What are these clojure keywords?

| macros                                                                                                                          | what does it do?                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `:require`                                                                                                                      | loads a library, function, external code                                                                                            |
| `:namespaces`                                                                                                                   | mappings from symbols to vars, are first-class and dynamic. Can query ns `all-ns`. aka **Modules**                                  |
| [SYmbols](https://8thlight.com/blog/aaron-lahey/2016/07/20/relationship-between-clojure-functions-symbols-vars-namespaces.html) | Symbols in Clojure are just pieces of data, Clojure uses them as identifiers for various values and references. aka **Identifiers** |
| `(defn ^:export init [] (...))`                                                                                                 | kick off app when HTML is loaded, same as `window.load(callback)`                                                                   |

> How to view/list app-db in js console?

`app-name.db` in js console. Eg: `conduit.db`

> How to convert js arrays and objects to clojurescript data structures?

https://cljs.github.io/api/cljs.core/js-GTclj

> what is `.-` in js interop?

`.-` is used to signify field access in Clojure interop, just `.` is calling a method.

> How to reference and use js `this` in `cljs`?

https://clojureverse.org/t/reagent-adding-event-listener-to-a-component/5896 [cljs api](http://cljs.github.io/api/cljs.core/#this-as)

<Footer />
