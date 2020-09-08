---
title: Syntax
tags:
- syntax
- javascript
- language
- grammer
---

# Syntax

<TagLinks />

## Loop

loop syntax | description
------------|--------------
`for ... in` | loop through objects
`for ... of` <br> `.forEach()` | loop through array
`[1,2].map(n => n+1)` | Array Methods, run a fn on each array item

* Asynchronous Programming - Non deterministic programming
* In JavaScript, a variable can be declared after it has been used.
  * Variables defined with let and const are hoisted to the top of the block, but not initialized.
  * Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
  * JavaScript only hoists declarations, not initializations.


Difference between javascript function and assigning function to a variable?
:   Both are different. [Source](https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

    ```js
    var functionOne = function() {
    // Some code
    };

    function functionTwo() {
    // Some code
    }
    ```

    * Variant #2 uses hoisting, whereas #1 would be initalized only once variable is reached and read by compiler.
    * variant #1 uses [anonymous function](https://en.wikipedia.org/wiki/Anonymous_function) assigned to a variable.

<Footer />
