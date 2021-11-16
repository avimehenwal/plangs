---
title: dart variables
tags:
  - dart
  - variable
---

# dart variables

<TagLinks />

## Types of variables

1. top-level, global variables
2. static
3. instance, fields of a class
4. local

```dart
static late final int temp = checkTemperature()
```

- Number class is minimally named as `num`

## Differnece b/w final const?

- constant values != constant variables @compiletime
  - const instance variables are NOT supported
  - use them with static
- final @runtime

## Explicit Type casting

- integer.toString()
- number.parse(34)

## Questions

- How to correctly declare your variable?

<Footer />
