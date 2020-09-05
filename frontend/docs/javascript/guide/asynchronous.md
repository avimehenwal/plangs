---
title: Asynchronous Programming
tags:
- asynchonous
- callback
- promise
- async
- await
---

# :spider_web: Asynchronous Programming

<TagLinks />

![synchronous vs asynchronous code execution order](https://miro.medium.com/max/2732/1*I5gIa6aTae0RhlQzC0CDrQ.png)

![blocking va non blocking code](https://d33wubrfki0l68.cloudfront.net/13307c3fc1d23600563079bdac3ad78fe16034d8/e5a50/images/asyncjs/async.png)

## :parasol_on_ground: Approach

1. Callbacks
   1. [callback hell](http://callbackhell.com/)
2. [Promises](./promise.md)
3. [Async/await](./promise.md)

Built to be used with web browser. Why?[^2]
:   Eliminate browser freezes[^1].

    Because users can interact with webpage [TTI] only after HTML and CSS are loaded and parsed.
    JS execution could be deffered. Asynchronocity helps browsers to be more responsive towards user interactions.

* Normally execution is synchronous, function waits for the response of the called function before proceeding with further execution
* Blocking code | Non-blocking code

When do we generally use asynchronous programming[^2]? aka non-blocking programming?
:  When we have to implement features like.

   1. [x] timer functions
   2. [x] listening to network call, database query calls etc
   3. [x] reading or writing, generally to/from and IO device
   4. [x] subscribing to an event, topic in pub/sub
   5. [x] EventListners

## :school: References

[^1]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts
[^2]: https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)


[TTI]: https://web.dev/interactive/

*[TTI]: Time to Interactive performance metrics
*[HTML]: Hypertext Markup Language, current spec 5
*[CSS]: Cascading style Sheets, current spec 3
*[JS]: Ecmascript Standard

<Footer />
