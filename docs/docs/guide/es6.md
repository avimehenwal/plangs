---
title: ES6/ECMAScript 2015
tags:
- es6
- script
- es2015
- ecmascript2015
---

# :notebook_with_decorative_cover: ES6 EcmaScript 6

<TagLinks />


* [List of features in es6 or ECMAScript 2015](https://github.com/lukehoban/es6features/blob/master/README.md)
* We can easily redeclare a variable. Its a big no no

```js
var counter = 10
// ... some code
var counter = 5
```

* Variables declared outside function could be used inside functions.
* However functions declared inside fucntion could not be used outside

### String Concatination

```js
// older syntax
console.log('value = ' + value);

// newer syntax - template delimeters
console.log(`value = ${value}`);
```

### Object Deconstruction

### Arrow Function

> that = this non-sense

* Arrow function preserves the references
* If you use normal `function() {..}`, references to `this` are not preserved
* Declare default parametrs with in the arrow function


```js
const user ={
  name: 'Ed',
  age: 25,
  sayName: function() {
    console.log(`My name is ${this.name}`);
    const fullName = () => {
      console.log(`name is ${this.name} and age is ${this.age}`);
    };
    fullName();
  }
}

// practical scenario
button.addEventListner('click', fucntion() {
  this // means button
})
```

Iterating over List/ Arrays

```js
someList.foreach((item, index) => {
  console.log(`Item = ${item} at index ${index}`);
})
```

* Use `map()` to transform each element in array inplace

### Array Filters

* get only a particular item from list


### Constructor and Classes

* generally starts with caps letter
* `new` creates a copy
* How to add properties and methods to classes?
* `ClassName.Prototype.methoName = function() { ... }`
* `call()`
* class inheritance `extends`

### Callbacks vs Promises

1. Variables
2. String Concatenation
3. Object Literals
4. Object Deconstruction
5. Arrow Functions
6. Default Parameters
7. Array Functions
8. Constructor Functions and Classes
9. Promise
   1.  `.then`
   2.  `.catch`

## :paperclip: References

* [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/index.html)

<Footer />
