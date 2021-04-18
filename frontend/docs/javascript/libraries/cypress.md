---
title: Cypress
tags:
  - cypress
  - library
  - javascript
  - testing
---

# Cypress

<TagLinks />

::: quote
Every time I debug ci, the less I understand how we possibly can land and operate rovers
on other planets.

Probably they dont use javascsript.
:::

- Increabibly Visual tool
- Time Travel features, hover on action to get a snapshot of app state

## Selenium

> Statelless HTTP api

- Selenium came in 2004, webdriver
- back in the day, AJAX wasent even a thing
- everything was synchronous
- on every submit, there was a page refresh

::: warning devtools
When chrome driver is automation browser, you cannot use devtools
:::

Its like shooting a cracker in the pitch black night sky, where we see somethings
for a flash moment and then everything goes back to dark.

```mermaid
graph LR
A(Chrome):::green
B(CDP & devtools):::orange
C(webdriver):::purple
A --> B  --> C
classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
click A "https://www.wikipedia.org/" "Click to open wikipedia"
```

## Cypress

- chai, mocha like api
- with jquery like slector api
- Everything returns Promises under the hood
- Command chaning
- Can test CSS Animations

- Create a global user for application before startup `win.user = { ... }`
- set some `localStorage` value like auth-token
- Force server to return 500 status on POSt request

```js
cy.server
  .route({method: "POST", url: "/blog", status: 500, response: ""})
  .as("postBlog)
```

- Currently built on top of [electron](https://www.electronjs.org/)
- run in headless mode on CI
- 100s of pages of documentation
- Mobile web - yes
- Native mobile - No

## Testing tool Challenges

- Cross browser testing
- Animation/ CSS testing
- More insights into failing tests
- Quickly debuggable
- Test Responsive desings
- Test `async` functionalities

## Repos to check

- https://github.com/gothinkster/realworld
- https://github.com/thedaviddias/Front-End-Checklist
- https://github.com/ossu/computer-science#pro-cs
- https://github.com/ryanmcdermott/clean-code-javascript#table-of-contents
- https://github.com/RealToughCandy/real-world-javascript-interview-questions
- https://github.com/mbeaudru/modern-js-cheatsheet
- https://github.com/sindresorhus/awesome
- https://github.com/sindresorhus/awesome-nodejs
- https://github.com/danistefanovic/build-your-own-x
- https://github.com/firstcontributions/first-contributions

<Footer />
