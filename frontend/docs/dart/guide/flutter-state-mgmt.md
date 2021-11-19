---
title: Flutter State Management
tags:
  - flutter
  - state
  - management
  - pattern
  - bloc
---

# Flutter State Management

<TagLinks />

[Reactive Programming Streams - BLoC Patern](https://www.didierboelens.com/2018/08/reactive-programming-streams-bloc/)

- cubit is merged into bloc library

## BLoC vs flutter_block

https://bloclibrary.dev/#/gettingstarted

## Why BLoC?

> App should be able to handle **EVERY interaction**

- Business Logic Component , pattern created by google for presentation layer
- App should have a state for EVERY possible Everything
  - if their is not Internet, show them
  - if data could not be fetched, show them it (re)-trying
- STREAMS are the foundation of BLoC
  - Asynchronous code sent in parts
- GOOD Application must have a valid STATE VALUE at all times

## Cubit

- is a special type of Stream component which updates UI on state change
- emit event on stream using yield
- cubit is a component based of some functions
  - functions that are not part of the stream
  - cubit only emits streams of states to UI
- you can subscribe and listen to cubit states changes in components
- BLoC also recieves stream of events and emits stream of states
- To use BLoc or cubit, you first have to declare it.

```dart

```

## BLoC Widget

- use BlocProvider Widget when it has to be used at multiple places
  - Dependency Injection widget
  - same idea as React.contenxt Provide API
- Wrap the **EXACT** part to be re-built inside the `BlocBuilder`

| bloc          | description                                             |
| ------------- | ------------------------------------------------------- |
| BlockProvider | Accessable with a Widget tree                           |
| BlockBuilder  | re build the UI on state change                         |
| BlockListener | only listen for change, single time unlike BlockBuilder |
| BlocConsumer  | mixture of BlockListener and BlockProvider              |

## Steps

1. Define a block by overriding its methods and then initialize it by calling its super
2. Register Events on BloC using `on` API
   1. define state changes in `on` callback function which accepts `event` and `emit`
   2. modified states changes are `emitted`
3. Using the Block in UI Widgets
   1. BlockProvide creates a instance of a bloc and all it's chold have access
   2. create an instance of BlocComponent as `final` and then call events on it using `add` API
   3. wait for events to deliver a response `await Future.delayed(Duration.zero)`

::: tip wait for evnt-loop
`await Future.delayed(Duration.zero)` is added to ensure we wait for the
next event-loop iteration (allowing the EventHandler to process the event).
:::

4. For RT subscriptions to changes, use Streams >> Futures

```dart
Future<void> main() async {
  final bloc = CounterBloc();
  final subscription = bloc.stream.listen(print); // 1
  bloc.add(Increment());
  await Future.delayed(Duration.zero);
  await subscription.cancel();
  await bloc.close();
}
```

## Enterprise App source organization

1. data
   1. models
   2. repositories
   3. dataProviders
2. business_logic
   1. bloc
   2. cubit
3. presentation
   1. widgets
   2. pages
   3. screens
   4. animations
   5. routes
   6. Theme, ColorPallet

## questions

- When to use cubit and when to use bloc?
  - Each feature should have a cubit or bloc to manage/control it.
  - Difference is in how they recieve information
  - cubits are cheaper than bloc
- Should I have a BLoC for each UI componet?
  - Having multiple (many) instances of same BLoC is a terrible idea
- What is repository in flutter?
  - communicating with external data-layers , DAL, network-calls, databases etc.
- How to start building a Application?
  - start with appdb, or application modal
  - Application Modal should be **independent** from the source
- How to structure your source code?
  - seperate directory for each layer and sub-layer
- How to make internet connection aware mobile application?
  - connectivity_plus package

## Build context

Every block must override the `mapEventToState` function. This is a generator function, which accepts `event`
and returns a stream, that notifies of state change whatever is subscribed to it.
In redux world it is reducer.

- everything in flutter is a `Widget`
- every widget in flutter has a `build` function
- every build method is built from a `context`. So Every widget has its own context
- in flutter `MyApp` widget is the `root` of widget tree of an application
- build content ONlY knows about its parent context, bottoms-up, there is no other way
- new screens are pushed on widget tree and old routes are `popped` out from tree
- Use Flutter devtools to visualize widget tree and context

How multiple context interact with each other?

::: danger
Never **mutate** and **emit** state from ==inside of BLoC.==
Let UI emit the events
:::

## Hydrated Block

- restore app-data/state from localstorage
- fast and close to application
- uses hive under the-hood which is blazingly fast

## Debugging BLoC

- How to override all the `onChange`, `onError`, `onTransition`, `onEvent` methods on BLoC ?
  - onCreated
  - onClose
- `BlocObserver`

::: tip BlocObserver
When we want to be able to do something in response to **all Changes** we can simply create our own BlocObserver.
:::

## Data Fetching over network

::: tip data fetching in build method
Although it’s convenient, it’s not recommended to put an API call in a `build()` method.
:::

- Make networl call using `http` library using Futures is easy, but working with response is hard
- Transform http.response --> Dart Object, using Models in repository
- [Flutter data fetching](https://docs.flutter.dev/cookbook/networking/fetch-data)
- Whent to make the netwrk call?
  - exactly once? `initState`
    - `MyApp` widget becomes ==stateful== when app wants data from API on initial load
  - based on event emitted?
- How to display the data on UI?
  - `FutureBuilder` widget
- How to use an existing BloC on abother page? `BlocProvide.value()` constructor

### Use-cases

#### Load a new view/page on a click

```dart
MaterialButton(
  onPressed: () {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => BlocProvider.value(
          value: existingCubit();     // NOT A new cubit
          value: BlockProvider.of<yourCubitName>(context);
          child: ....
        )
      )
    )
  }
)
```

### Sample Repos

- https://github.com/TheWCKD/blocFromZeroToHero

<Footer />
