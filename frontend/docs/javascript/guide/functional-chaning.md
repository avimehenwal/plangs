---
title: functional-chaning
tags:
  - functional
  - chaning
  - currying
---

# functional-chaning

<TagLinks />

```ts
class AddNumbers {
  private n: number;

  constructor(start = 0) {
    this.n = start;
  }

  public add(inc = 1) {
    this.n = this.n + inc;
    return this;
  }

  public print() {
    console.log(this.n);
    return this;
  }
}

// Here it is in action:

new AddNumbers(2)
  .add(3)
  .add()
  .print()
  .add(1);
```

[Method chaining vs currying](https://simbathesailor007.medium.com/method-chaining-currying-javascript-b6fc3324592c)

<Footer />
