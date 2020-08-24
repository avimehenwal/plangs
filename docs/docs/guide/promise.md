---
title: Promise
tags:
- promise
- reject
- resolve
---

# :handshake: Promise

<TagLinks />

* A way to deal with asynchronous events
* A Promise Object can either succeees and return `resolve` or will fail and return `reject`
* Replaces functions accpeting `successCallback` and `FailureCallback`

<Dot code="digraph { node [fontsize=24, colorscheme=set312, style=filled] node [fontname=Helvetica] Promise [fillcolor=2 shape=component width=5] Pending [fillcolor=9 shape=note] Resolve [fillcolor=7] Reject [fillcolor=4] edge [penwidth=2 style=dashed, color=grey] Promise -> Pending [label=asynchronousActivity] Pending -> Promise edge [style=solid color=black] Promise -> Resolve Promise -> Reject }" />

## :clipboard: Unit Test Report

![jest unittest report with code coverage](../.vuepress/public/img/tests/jest-report.png)

## :pencil: How to write a `Promise` ?

<<< @/../src/promise/promises.js

## :factory: How to test Promises?

<<< @/../src/promise/promises.test.js#snippet


<Footer />
