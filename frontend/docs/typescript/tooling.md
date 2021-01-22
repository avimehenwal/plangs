---
title: TS Tooling
tags:
  - typescript
  - tool
  - official
---

# TS Tooling

<TagLinks />

## Official Tooling

| tool                                                                                                                                                                                                                      | Description                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| tsdx                                                                                                                                                                                                                      | your own ts libraries                                                   |
| [playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgJIGUxVAcwIJRRwCeyA3gFDLIDaoAJhAB4BcyIArgLYBG0AumwDOWXAG4KAXwoUANhDDIuxAkWJsMokPkIkJy1SWQBeWgCIAQgHseZgDTIzAMSgR6Z-hIoIrIIVfkAOnpgKAAKA11iAEogA) | try out in browser, live preview                                        |
| [tsconfig](https://www.typescriptlang.org/tsconfig)                                                                                                                                                                       | Reference                                                               |
| oclif                                                                                                                                                                                                                     | open CLI framework                                                      |
| [gluegun](https://github.com/infinitered/gluegun#readme)                                                                                                                                                                  | A delightful toolkit for building TypeScript-powered command-line apps. |

## tsc Compiler

- More like a transpiler, converts ts --> js
- NOT to machine code like C/C++/Rust Compilers

### tsdx

- Rollup build

```bash
npx tsdx create mylib
tsdx watch
tsdx lint
tsdx build
```

<Footer />
