---
title: frontend-performance
date: 2021-10-28
tags:
  - performance
featuredimg: https://picsum.photos/800/500.webp
author: avimehenwal
summary: frontend-performance
---

# Frontend Performance

- [What makes your websites fly?](https://dl.acm.org/doi/fullHtml/10.1145/1409360.1409374)

**SPDY** is the core part of HTTP/2 protocol, many of the http/2 protocol techniques are part SPDY. SPDY(speedy) is a network protocol which manipulates http protocol by compressing headers, predicting clients requests(example discussed below) and other techniques, to fasten web experience. SPDY was developed by Google.

## Cross platform Mobile applications

using Flutter, as it supports both JIT and AOT compilation

| Parameter   | Flutter                 | React-Native                    |
| ----------- | ----------------------- | ------------------------------- |
| Performance | wins dut to JIT support | looses                          |
| DX          | new plang DART          | decision fatigue due to tooling |

<Footer />
