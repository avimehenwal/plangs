---
title: Redux - State Management Pattern
tags:
  - redux
  - state
  - management
  - pattern
---

# Redux

<TagLinks />

> Global, sharable states

- Which problem does it solve and how?

::: tip State Management Pattern
Database for Frontend
:::

## Use Cases

1. undo/redo features
2. State Persistance, on forms when page is reloaded
3. user authentication store
4. shopping cart store
5. todolist store
6. 

## Todo App Example

- Shape of global data?
- What mutations can it have? usually CRUD

### Use Redux in a project

1. Provide the redux global store to the webapp
2. Connect components to redux global stores when read,write is required by them
3. create Global store and pass it a **REDUCER** function

::: warning Questions

1. How to subscribe to a store changes?

:::

## Resources

- https://redux.js.org/

<Footer />
