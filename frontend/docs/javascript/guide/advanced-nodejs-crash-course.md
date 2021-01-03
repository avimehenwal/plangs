---
title: Advanced nodejs crash course
tags:
  - crash
  - course
---

# :bar_chart: Advanced nodejs Crash Course

<TagLinks />

- source code -> machine code

## Thread Pooling

- How many requests can a HTTP library process in one second?
  - Use apachey `ab` tool to test and benchmark
- `process.env.UV_THREADPOOL_SIZE = 4` max upto 12
  - set to at max as you logical CPU core size
- Intel Hyper-threading, in some conditions, one core can act like 2 cores.
- **Context-switching** time spent on sending the task to scheduler and retrieving back once done
- If you use too many `lib-UV` threads, execution time may worsen due to increase in Context Switching time

```js
ab -n 1000 -c 100 "http://localhost:1337" | grep "Requests"
```

## Outline

- Intro
- Contents
- What Exactly Is Node
- More JS Engines
- fs.readFileSync Under The Hood
- Exploring Cpp Code
- Fs.readfile
- Threads And Processes
- Nodejs Is Multithreaded by default?
- bcrypt
- Playing With Thread Pool
- What Is Thread Pool
- Optimum Threadpool Size
- Intro
- Event Loop Intro Real
- What Is Call-stack
- Internal Web API
- Task Queues
- Understanding Task-queue
- Raf Queue
- Introduction To Micro-task Queue
- Example Question
- Another Example
- Final Example
- Outro

### Resources

<iframe width="560" height="315" src=
"https://www.youtube.com/embed/qG-PLm3APSs" frameborder="0" allow=
"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

<Footer />
