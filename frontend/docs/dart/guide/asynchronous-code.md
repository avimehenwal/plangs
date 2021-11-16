---
title: Asynchronous
tags:
  - dart
  - asynchronous
---

# Asynchronous

<TagLinks />

- Single thread (by default) **MUTATOR THREAD** aka main Isolate
- Asynchronous programming is implemented using **task event queue**, just like JS
- Isolate are seperate memories for asynchronous tasks in VM memory
- Dart execution is single threaded, but language has other threads running
  - like **HELPER THREAD** for cleanup garbagge collection

## Isolates

Isolates are EXPENSIVE

150 isolates takes up 850 MB of RAM
1000 isolates can take upto 4.5 GB of RAM, which is a lot for a mobile phone

## Futures and Streams and Microtasks

In dart, Futures can have 4 states

1. unprocessed
2. uncompleted
3. completed
4. completed with error

Future API have multiple constructors

1. delayed
2. value
3. sync
4. microtask - short tasks which are not events (like click, hover)

Microtaks have priority over events tasks

Streams == multiple \* Futures === **Asynchrnous Lazy Iterables**

> Dont loose the forest from the trees

### Streamcontroller and streamSubscription

- To implement polling, long-polling scenarious of data-fetching
- streams needs to be manually cancelled to stop listening

## Asynchronous Generator

```dart
Stream<int> asyncGenerator async* {
  for (var i =0 ; i < 5 ; i++>) {
      yield i;
  }
}
```

- RxStream https://pub.dev/packages/rxdart

[What's the difference between async and async\* in Dart?](https://stackoverflow.com/questions/55397023/whats-the-difference-between-async-and-async-in-dart)

Marking a function as async or async\* allows it to use the async/await for a Future.

The difference between both is that async\* will always return a Stream and offer some syntactical sugar to emit a value through the yield keyword.

We can therefore do the following:

```dart
Stream<int> foo() async* {
  for (int i = 0; i < 42; i++) {
    await Future.delayed(const Duration(seconds: 1));
    yield i;
  }
}
```

<Footer />
