---
title: Flutter
tags:
  - dart
  - flutter
  - mobile
  - app
  - development
---

# Flutter

<TagLinks />

> SDK for building natively compiled apps for mobile, web and desktop

- Follow the conventions of code organization
- Everything is a widget
  - each `Widget` has a `build` method, just like react has `render()`
- Material design comes with flutter

| Tooling     | description                 |
| ----------- | --------------------------- |
| xcode       | will give you iOS simulator |
| android sdk | android simulator           |

## Layouts in Flutter

| component | description   |
| --------- | ------------- |
| Column    | top to bottom |
| Row       | left to riht  |
| Stack     | use stacks    |

## Widgets class

- `StatelessWidget` and `StatefulWidget` class has `build` methods, which gets re-ccomputed on state change like react.
- every build method has a **build context** passed to it.

## Practical flutter

- press r to hot-reload your new changes on app
- `keys` reserve states when states change in widget tree, just like how react does it
  - use only when you have state in widget, or you reorder, create, delete, modify them
  - For static content its not required
- [Why are stateful widgets defined as two classes in flutter?](https://stackoverflow.com/questions/50612237/why-are-stateful-widgets-defined-as-two-classes-in-flutter)

## Routes Management

- homeroute is the default route

types of routing

1. Ananymous routing
2. Named routing
3. Generated routing, more professional version

<Footer />
