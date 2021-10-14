---
title: Swift
tags:
  - swift
  - llvm
  - objective-c
  - apple
---

# Swift

<TagLinks />

> System Programming for mobile, desktop, tvOS and IoT devices for apple ecosystem

<Dot code="digraph { node [fontsize=18, colorscheme=set312, style=filled] edge [length=100, color=gray, fontcolor=black, penwidth=2] swift [shape=box, fillcolor=4] macOS [fillcolor=2] iOS [fillcolor=3] watchOS [fillcolor=1] tvOS [fillcolor=5] swift -> {macOS iOS watchOS tvOS}}" />

## History

- origins 2014
- open sourced under Apache 2.0 license from 2015
- fast and safe (memory safe) by design
  - arrays and integers are checked for overflow and undeflow
  - objects can never br `null`, unless **optional**
- replacement for C-based languages like `C`, `C++`, `objective-C`, `C#`

## Language tools

- REPL, web and console
- swift Compiler
- swift LLDB debugger
- core libraries
- swift package manager `Package.swift`
- Xcode editor
- open-source swift for linux

##### Swift system modules

1. Darwin
2. CoreData
3. Glibc - The GNU C Library project provides the core libraries for the GNU system and GNU/Linux systems, as well as many other systems that use Linux as the kernel. These libraries provide critical APIs including ISO C11, POSIX.1-2008, BSD, OS-specific APIs and more. These APIs include such foundational facilities as open, read, write, malloc, printf, getaddrinfo, dlopen, pthread_create, crypt, login, exit and more.

## Getting Started

```
swift run package-collection-generate --help
swift package init
swift build
swift test
```

## Swift Syntax

- constants `let`
- dynamically typed variables `var`
- `nil` type
- Nil-Coalescing Operator `a ?? b`
- range Operator

## How to develop macOS application?

macOS SDk 12

- build a sidebar with items from data-source
- program Toolbar controls and menu options
- Support touchbar
- SwiftUI same API across all apple products. User Interfaces for apple platform

<Footer />
