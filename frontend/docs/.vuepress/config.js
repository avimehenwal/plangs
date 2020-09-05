require('dotenv').config()
const { description, name, authors} = require('../../package.json')
const imagemin = require( "imagemin" )
const webp = require( "imagemin-webp" )

const weburl = 'https://avi-vue-components.netlify.app/'

const extendsNetworks = {
  email: {
    sharer: 'mailto:?subject=@title&body=@url%0D%0A%0D%0A@description',
    type: 'direct',
    icon: '/email.png',
  },
  pinterest: {
    sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
    type: 'popup',
    icon: '/pinterest.png',
  },
  linkedin: {
    sharer:
      'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
    type: 'popup',
    color: '#1786b1',
    icon:
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
  }
}

module.exports = {
  /** NOTE
   * pug template loader
   * scss, sass, stylus, less has been built in VuePress
   *
   * Delete old rules first to overwrite new webpack rules
   * https://github.com/vuejs/vuepress/issues/478#issuecomment-391022415
   */
  chainWebpack: config => {
    config.module
      .rule('pug')
        .test(/\.pug$/)
        .use('pug-plain-loader')
          .loader('pug-plain-loader')
        .end()
    /**
     * FIXME
     * <img alt="runtime" data-src="data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWdzL3J1bnRpbWUuMDdkM2I1NDgud2VicCI7" loading="lazy" class="lazy medium-zoom-image" src="data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWdzL3J1bnRpbWUuMDdkM2I1NDgud2VicCI7">
     */
    // config.module
    //   .rule('compressimages')
    //     .test(/\.(png|jpe?g|webp|git|svg|)$/i)
    //     .use('img-optimize-loader')
    //       .loader('img-optimize-loader')
    //       .options({
    //         compress: {
    //           // This will transform your png/jpg into webp.
    //           webp: true,
    //           disableOnDevelopment: true
    //         }
    //       })
    //     .end()
  },
  /** NOTE enable webpack source-maps for vscode debugging
   * https://vuepress.vuejs.org/config/#configurewebpack
   */
  configureWebpack: {
    devtool: 'source-map'
  },
  dest: '../docs',
  base: '/javascript/',
  title: name,
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    author: authors.name,
    // repo: pkg.repository.url,
    // href="https://github.com/[object Object]" https://github.com/git+https://github.com:avimehenwal/vue-components.git
    repo: 'avimehenwal/javascript',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Help me improve this page!',
    lastUpdated: true,
    logo: '/svg/js.svg',
    // displayAllHeaders: true,               // Default: false
    activeHeaderLinks: true,
    sidebar: 'auto',
    sidebarDepth: 2,
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    nav: [
      { text: 'Tags', link: '/tags.html', },
      { text: 'APIs', link: '/apis/' },
      { text: 'Browser', link: '/browser/' },
      { text: 'Config', link: '/config/' },
      { text: 'Javascript', link: '/javascript/', },
      { text: 'Rust', link: '/rust/', },
      { text: 'Libraries', link: '/libraries/', },
      { text: 'Tutorials', link: '/tutorial/', },
      { text: 'Blog', link: '/posts/', },
    ],
  },
  plugins: [
    "@vuepress/plugin-active-header-links",
    "@vuepress/plugin-last-updated",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-auto-sidebar",
    "@vuepress/plugin-nprogress",
    "reading-progress",
    "@vuepress/pwa",
    "img-lazy",
    ['web-monetization', { 'address': process.env.ILP }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    /**
     * ANCHOR vuepress-blog
     */
    ['@vuepress/blog', {
      // mailchimp email marketting service
      newsletter: { endpoint: process.env.MailChimp },
      sitemap: { hostname: weburl },
      feed: { canonical_base: weburl },
      comment: {
        service: 'vssue',
        // set `platform` rather than `api`
        platform: 'github',
        owner: 'avimehenwal',
        repo: 'vue-components',
        clientId: process.env.GH_ClientId,
        clientSecret: process.env.GH_ClientSecret,
        // OR
        // service: 'disqus',
        // shortname: process.env.DISQUS_ShortName,
      },
      // Calssification and Taxonomy
      // directories: [
      //   {
      //     id: 'post',
      //     dirname: 'blogposts',
      //     path: '/blog',
      //     itemPermalink: '/blog/:year/:month/:day/:slug',
          // layout: 'MyIndexPost',
          // itemLayout: 'MyPost',
          // pagination: { lengthPerPage: 2 },
        // },
        // { id: 'guide', dirname: 'guide', path: '/guide', },
      // ],
      /**
       * ANCHOR frontmatter
       */
      // frontmatters: [
      //   {
      //     // Unique ID of current classification
      //     id: 'tag',
      //     // Decide that the frontmatter keys will be grouped under this classification
      //     keys: ['tag'],
      //     // Path of the `entry page` (or `list page`)
      //     path: '/tag/',
      //     // Layout of the `entry page`
      //     layout: 'Tags',
      //     // Layout of the `scope page`
      //     scopeLayout: 'Tag'
      //   },
      // ],
    }],
    [ '@vuepress/google-analytics', { 'ga': 'UA-113741959-10' } ],
    ['vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }],
    // https://mermaid-js.github.io/mermaid/#/mermaidAPI?id=mermaidapi-configuration-defaults
    [ 'vuepress-plugin-mermaidjs', {
      // "theme": 'forest',
      // "theme": 'dark',
      "theme": "default",
      // "font-size": "20",
      gantt: {
        titleTopMargin:20,
        barHeight:30,
        barGap:10,
        topPadding:50,
        leftPadding:0,
        gridLineStartPadding:10,
        fontSize:25,
        fontFamily:'"Open-Sans", "sans-serif"',
        numberSectionStyles:4,
        axisFormat:'%Y-%m-%d',
      }
    }],
    [
      '@vuepress/register-components',
      {
        // componentsDir: `../../node_modules/${pkg.name}`
        // componentsDir: `${__dirname}/../../../Apps/withjestpreset/src/components`
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      'social-share',
      {
        networks: ['twitter', 'facebook', 'reddit', 'telegram', 'whatsapp'],
        email: 'avi.mehanwal@gmail.com',
        twitterUser: 'avimehenwal',
        fallbackImage: '/hero.png',
        autoQuote: true,
        isPlain: false,
        extendsNetworks,
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        defaultTitle: '',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'quote',
        defaultTitle: 'Anonymous',
        before: '<article class="quote"><div class="body">',
        after: info => `</div><footer class="author">~ ${info}</footer></article>`,
      },
    ],
  ],
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },
    linkify: true,                // convert markdown link texts to links
    extendMarkdown: md => {
      md.use(require('markdown-it-container'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-emoji'))
      md.use(require('markdown-it-todo'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-ins'))
    }
  }
}
