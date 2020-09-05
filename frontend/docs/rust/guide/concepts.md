---
title: Concepts
tags:
- rust
- concept
---

# Concepts

<TagLinks />


* Memory Management
  * no Garbage collection
  * developers manage memeory in code
  * stacks vs heaps
  * runtime safety
* Stack variables
  * fast memeory retirievals
  * rust uses stack for its default memory needs
  * with types, compiler knows exactly how many memory to allocate for a specific type
* Heap variables - memory that can grow and shrink
  * Collections, lists, arrays
  * Hash maps
* Rust compiler cleans up all variables as soon as it goes out of scope
* In rust, every data has a owner
  * there can only be a single owner of data at a time.
  * Rust defaults to memeory allocation whenever it can.


<iframe width="560" height="315" src="https://www.youtube.com/embed/lQ7XF-6HYGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Footer />
