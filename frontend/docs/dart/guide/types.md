---
title: Types
tags:
  - dart
  - types
---

# Types

<TagLinks />

## Explicit Typecasting

```dart
3 / 2    // 1.5
3 ~/ 2   // truncating operator
```

## String Interpolation

> dart preferes single quotes, just like python

- three single quote to write multi-line strings

## Lists

> ordered iterables of objects

- uses 0 based indexing
- list of objects
- list of multiple different types
- has multiple contructors, Eg: List.empty(growable: true)
- null aware spread operator `...?`
- dart have collection `if` conditional and `for` iteration

```dart
List<ClassName> listOfObjects = [ ClassName(), ClassName(), ClassName()]

// list of multiple types
List<Object?> complexList = [2, 'hello', true, null]

List<int> a = [1,2,3];
List<int?> b = [1,2, null];
List<int>? c = null;
List<int?>? d = [null, null];

// null aware operators
int? a = null;
print(a.isEven);
print(a?.isEven);  // call methos only if it exists
print(a!.isEven);  // asbolutely sure that object has this  method
```

## dart Cascading operator

- dart has cascading operator, to createa computation logic pipelines of transforms

```dart
List<int> list2 = (([1,0,2]..sort()).reversed.toList()
  ..addAll([5,3,4])
  ..sort())
  .map((e) => e + 1)
  .toList();
print(list2);
```

## Runes

- use unicodes code-points as dart string data structures

## Expressions

```dart
int first(int a) => a.isOdd ? 1 : 0
```

## Data structures

implement stacks, queues, trees in dart

- consider using `<Generics>` when creating your own data structures
- iterables >> lists when using asynchronous code

## questions

[what is the difference between required and @required in flutter. What is the difference between them and when do we need to use them?](https://stackoverflow.com/questions/67642000/what-is-the-difference-between-required-and-required-in-flutter-what-is-the-di)

@required is just an annotation that allows analyzers let you know that you're missing a named parameter and that's it. so you can still compile the application and possibly get an exception if this named param was not passed.

[How to write your own dart annotations?](https://stackoverflow.com/questions/23456451/how-can-i-write-an-annotation-for-dart)

Any class with a const constructor can be used as annotation. Eg: [@override api spec](https://api.dart.dev/stable/1.24.3/dart-core/override-constant.html)
[Javascript also has @override annotations](https://jsdoc.app/tags-override.html)

- Annotations work at @buildtime, @compiletime

<Footer />
