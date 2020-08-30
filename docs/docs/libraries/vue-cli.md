---
title: vue/cli
tags:
- vue
- cli
- tool
---

# @vue/cli

<TagLinks />

* Interactive project scaffolding for new projects
* Add plugins from cli tool
* The CLI Service is built on top of [webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server).
* [vue-cli-service](https://cli.vuejs.org/guide/cli-service.html#using-the-binary)

Upgrade package to latest release.

```bash
yarn global add @vue/cli @vue/cli-service-global

# Upgrade
yarn global upgrade --latest @vue/cli
# to upgrade the project run inside project
vue upgrade --to <version> --from <version> --all

vue create --packageManager yarn --no-git <project-name>
```

::: tip Prefetching
`<link rel="prefetch">` is a type of resource hint that tells the browser to prefetch content that the user may visit in the near future in the browser's idle time, after the page finishes loading.

By default, a Vue CLI app will automatically generate prefetch hints for all JavaScript files generated for async chunks (as a result of on-demand code splitting via dynamic `import()`
:::

* `connfigurewebpack: {..}` to chain exisiting webpack config with new additions

::: warning cors
If your static frontend is deployed to a different domain from your backend API,
you will need to properly configure [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
:::




## References

* https://cli.vuejs.org/guide/

<Footer />
