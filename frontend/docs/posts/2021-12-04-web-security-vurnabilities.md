---
title: web-security-vurnabilities
date: 2021-12-04
tags:
  - security
  - web
featuredimg: https://picsum.photos/800/500.webp
author: avimehenwal
summary: web-security-vurnabilities
---

# Web Security

## vurnabilities

1. Session Hijacking
2. Cache Poisoning
3. Cross site request forgery CSRF
4. Cross Site scripting XSS
5. Clickjacking
6. SQL Injection
7. Cross Origin Resource Sharing [CORS](https://drawings.jvns.ca/cors/)

## Securoty Features

1. Session Security

## Security Concepts

#### [What is a Session?](<https://en.wikipedia.org/wiki/Session_(computer_science)>)

- HTTP session token - generated by server and sent to client
- [It is not advisable to make sessionID redable @client as then site becomes suseptable to XSS attacks](https://stackoverflow.com/questions/12436521/why-cant-i-get-sessionid-on-the-client-side)

  - sessionID cookie is hidden from HTTP/js world

- In django, `django.contrib.sessions.middleware.SessionMiddleware`
- Session database `backends.base.SessionBase`
- Request session in views, `request.session` dictionary type DS

### HTTP cookie

1. Server -> Browser using [set-cookie header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
2. Browser(for all subsequent requests) -> Server

[do not leak the cookie at client using HTTPOnly](https://owasp.org/www-community/HttpOnly)

<Footer />