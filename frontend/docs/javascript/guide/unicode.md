---
title: Unicode
tags:
  - unicode
  - codepoint
---

# Unicode

<TagLinks />

## codepoint

```js
String.fromCharCode(55356, 57091);
String.fromCodePoint(parseInt("1f61b", 16));
String.fromCodePoint(0x1f1f3);
String.fromCodePoint(0x03c9); // in hexa-decimal
String.fromCodePoint(129321); // in decimal
```

- [How to draw emojis, flags from unicode HTML?](https://emojipedia.org/emoji/)
- [HTML symbols emoji](https://www.w3schools.com/charsets/ref_emoji.asp)

```ts
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode.toUpperCase().replace(
        /./g,
        (char) => String.fromCodePoint(char.charCodeAt(0) + 127397) // magic number
      )
    : isoCode;
}

countryToFlag("IN");
countryToFlag("de");
countryToFlag("usa");
```

<Footer />
