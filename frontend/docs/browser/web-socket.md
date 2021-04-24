---
title: Web Socket
tags:
  - web
  - socket
  - ws
  - api
---

# Web Socket

<TagLinks />

How to write Web Socket API client (included with browsers) and server?

- IETF RFC-6455
- Low overhead <1% HTTP, low latency
- open TCP under HTTP, SSL/TLS security
- Full Duplex Communication RT communication protocol ==over single TCP Connection==
- Used for delivery of dynamic data, doesnt replace HTTP
- HTTP Upgrade request, do you spek web-socket? then Handshake
- Web socket protocol supports **text** and **binary data**. In terms of Javascript, text refers to as a string, while binary data is represented like ArrayBuffer.

> Just messaging to servers from IoT

![Why use web sockets](../.vuepress/public/img/browser/web-sockets.png)

![Workarounds to web socket](../.vuepress/public/img/browser/ws-workarounds.png)

## web socket server

- express app using `ws` package
- What to do when client connects?
- What to send?
- What to do when recieves a message from client?

## web socket client API

- Connection events `open`, `message`, `close`

> WebSockets as REST APIs

## Use clases

> Simulate Real Time, Polling and Long Polling

- Brodcast messages to all clients, group chat
- IoT type use cases
- exxchange, trading applications
- Replay things, transactions
- Chat apps [XMPP](https://en.wikipedia.org/wiki/XMPP)
- Multiplayer Games, Collaborative Apps, Developer Tools, Location dependent apps
- Currency Exchanges

## Issues

- They're unreliable & **hard to scale**
- the connection might drop, and you might find yourself doing polling for the sake of reliability...

## questions

- How well does WS scale? #people making || connections? HTTP is probably behind LB
- How reselient is it to connection drops?
- Does regular browser security constraints apply? like CORS?
- Can data be compressed (gzip) through WS?
- Can send bytes? plain text? yes => watch it in Wireshark
- How to uniquely identify each client?
- [High volume storage backends for WS?](https://stackoverflow.com/questions/21386318/storage-backend-based-on-websockets)
- [Express vs Django?](https://stackoverflow.com/questions/57945868/djangorest-vs-expressjs-which-1-should-i-choose-to-build-rest-api)

<iframe width="560" height="315" src="https://www.youtube.com/embed/khULSvz_hdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Footer />
