---
title: classes
tags:
  - dart
  - classes
---

# classes

<TagLinks />

- Dart is **TRUE OO Language**
- Ever class extends to `Object` class by default
- Any class attribute will have a getter method automatically assigned for it
- class Inheritance
- Polymorphism via @override on inherited classes, or overloading
- `covarient` to use variable from super.class into child.class
- interfaces via `abstract` classes used via `implements`
- 1 extends, multiple implements
- multiple inheritance, Diamond problem?
- mixins vs abstract classes
  - do not have to @override all the methods
  - order of mixin classes matters
  - can have unlimited mixins

> What hides inside a empty class ?

```dart
class A {} // no constructor
```

## class Inheritance

- Instance methods, operators are instancec methods
- getters and setters
- constructors with their signatures
- factory methods

## Errors

1. Runtime Errors
2. Compiletime Error

## Initializer List

before the constructor body

- we cannot put a PRIVATE parameter inside a named parameter list. But them before

```dart
class A {
  A(int a, int b) : this.c = c {
    _private = p;
    this.a = a;
    this.b = b;
  }
}

```

## Dart COnstructors

| #   | constructor type            | example                                           |
| --- | --------------------------- | ------------------------------------------------- |
| 1.  | Generator constructor       | `Car(this.type. this.hasABS)`                     |
| 2.  | Named Generator Constructor | `Cat.withoutABS(this.type): this.hasABS = false;` |
| 3.  | Factory COnstructor         | `factory C`                                       |

[Colon after Constructor in dart](https://newbedev.com/colon-after-constructor-in-dart)
initializer List

Dart doesn't have **overloading** (multiple declarations with the same name in the same scope, typically distinguished by the argument types), so without named constructors, it would only be possible to have one constructor per class. Named constructors allows a class to have as many constructors as it wants to, and each one can be any of the variations of constructors that the language allows.

in favour of default parameters to constructor

### Factory Constructors

Use a factory in situations where you don't necessarily want to return a new instance of the class itself. Use cases:

1. the constructor is expensive, so you want to return an existing instance - if possible - instead of creating a new one;
2. you only ever want to create one instance of a class (the singleton pattern);
3. you want to return a subclass instance instead of the class itself.

Normally, constructors cannot return, but factory constructors can

- Factory constructor do not have access to `this` keyword

A factory constructor has looser constraints than a generative constructor. The factory need only return an instance that is the same type as the class or that implements its methods (ie satisfies its interface). This could be a new instance of the class, but could also be an existing instance of the class or a new/existing instance of a subclass (which will necessarily have the same methods as the parent). A factory can use control flow to determine what object to return, and must utilize the return keyword. In order for a factory to return a new class instance, it must first call a generative constructor.

## Extension Methods

how to extent any base dart type?

```dart
extension IntegerExtension on int {
  int get lickyInteger => 12;
}
```

## Questions

- How to create private attributes?
- What are NAMED Constructor in dart?

<Footer />
