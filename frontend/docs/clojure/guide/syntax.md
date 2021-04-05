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

<Footer />
