---
title: Interview Questions
tags:
  - interview
  - question
---

# Interview Questions

<TagLinks />

## Questions

What is js `bind`? [How is it different from Symbols()?](../guide/symbol-bind.md)

: Binds an object to function, without using arguments. Reference it using `this`

    <Badge type="tip" vertical="middle" text="UseCase" /> In EventHandling function, parameters event is binded to function and could be used with `this`

    ```mermaid
    graph LR
    A(Object):::yellow
    subgraph Function
      B(this):::blue
    end

    A -- bind --> B

    classDef yellow fill:#FFE873,stroke-width:0px;
    classDef blue fill:#b8d4ff,stroke-width:0px;
    ```

## Linked List

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.lenth = 0;
  }
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
// TESTS
// createa list from bunch of values
```

[What is the difference between `typeof` and `instanceof`?](https://stackoverflow.com/questions/899574/what-is-the-difference-between-typeof-and-instanceof-and-when-should-one-be-used)
: Use typof for primitive data-types and `instanceof` for custom types

    ```js
    callback instanceof Function
    typeof callback == "function"
    ```

## Resources

- https://www.thedataincubator.com/12day.html
- https://runestone.academy/runestone/books/published/pythonds/BasicDS/toctree.html

## Problem Solving

- Drag and drop like trello
- Sum of items in array (which can containe multiple arrays recursively)
- Add drawing canvas, real editor in browser
- calculator app using react

<Footer />
