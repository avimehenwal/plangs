---
title: google-maps
tags:
  - google
  - maps
  - api
  - places
  - autocomplete
---

# google-maps

<TagLinks />

## Google Map platform [GMP]

### What can it do?

```mermaid
graph TD
A(Google Maps Platform APIs):::green
B(maps):::orange
C(places):::purple
D(routes):::blue

A --> B & C & D

classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
```

- [x] get directions
- [x] draw custom maps
- [x] lookup a place, geocoding and geolocation

::: tip API_kEY
is public available on website, requirnment of google
Maybe limit it to the domain of the website, so that not everyone can use it!
:::

#### MAPS API

1. visibility features, colors, dark mode
2. Markers and shapes
3. Custom graphics
4. animations
5. Data layer (static, dynamic js content)

#### Places API

1. place predictions, autocomplete
2. Address components
3. geocoding
4. geolocation
5. ratings
6. reviews

```mermaid
graph LR
A(places autocomplete):::green
B(place_id):::blue
C(place_search):::yellow

A --> B  --> C

classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
```

[can I use autocomplete HTML attribute ?](https://caniuse.com/?search=autocomplete)

### How to use it? JS Implementations ?

1. Bootstrap google api JS sdk [js-api-loader](https://github.com/googlemaps/js-api-loader/blob/master/src/index.ts)
2. Make your own implementation using web API standard

::: warning CORS
Google intentionally doesn’t allow access to the Google Maps API by way of requests sent with axios or AJAX methods in other such libraries, nor directly with XHR or the Fetch API.

[Google Maps API: No 'Access-Control-Allow-Origin' header is present on the requested resource](https://stackoverflow.com/questions/44336773/google-maps-api-no-access-control-allow-origin-header-is-present-on-the-reque)
:::

```js
import { useEffect } from "react";

// USAGE: useScript('https://use.typekit.net/foobar.js');
const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
// generic to more specific => useGoogleMapScript() already knows src url
```

## 3rd party libraries

| library                                                                       | what does it do?                                             |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [googlemaps/js-api-loader](https://github.com/googlemaps/js-api-loader)       | creates a single (with id) script tag for google-maps        |
| [PlacesAutocomplete](https://github.com/hibiken/react-places-autocomplete)    | expects a render props function as props.children            |
| [google maps react hooks](https://github.com/ubilabs/google-maps-react-hooks) | react context + custom hooks based pure react solution       |
| vanilla JS                                                                    | look for event and define right callback from google map API |

### Google Map React Hooks [GMRH]

Exposing google maps functionality using react hooks (context + custom hooks)

1. Inject remove and google-map script on page. After load provide object to be used

## FAQ

- [Difference between Google's Query and Place Autocomplete?](https://stackoverflow.com/questions/62121238/difference-between-googles-query-and-place-autocomplete)
- [diff b/w document and window onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)
- `onload` event could be listened for every element
- What is the difference between `autocomplete` and `AutocompleteService` ? one is GUI with google widget, other is more text oriented, code-only version
  - Plus Code, places which do not have a address yet! `698H+PX`
- [Add script in `head` vs `body`?](https://stackoverflow.com/questions/38407962/when-to-use-the-script-tag-in-the-head-and-body-section-of-a-html-page/38408000)
  - dependes on what is script supposed to do? Functions in head. If it changes HTML DOM then in body, bottom!

![Script tag](/img/js/script-head-vs-body.png)

<<< @/../src/vanilla/maps.html

<iframe width="560" height="315" src="https://www.youtube.com/embed/c3MjU9E9buQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/uJYqQdnw8LE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[gmp]: https://developers.google.com/maps
[gmrh]: https://github.com/ubilabs/google-maps-react-hooks

<Footer />
