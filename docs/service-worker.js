/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f7097411502fb322581c78225b8d88fb"
  },
  {
    "url": "apis/github.html",
    "revision": "f2e7238e28f58bf4ef3a2215083c568d"
  },
  {
    "url": "apis/index.html",
    "revision": "b0d03ad19baa6443951e16e12f6e4624"
  },
  {
    "url": "assets/css/0.styles.9e033a89.css",
    "revision": "1494cad8e45fe582e553ecf69c32d499"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/d3-append.95a3ea3c.png",
    "revision": "95a3ea3c17f28fc2936a67ddbe75f36a"
  },
  {
    "url": "assets/img/devtools-snippets.eea2f4f7.png",
    "revision": "eea2f4f7bccd84fc3ce369c0965772f2"
  },
  {
    "url": "assets/img/javascript-promises.e257e900.png",
    "revision": "e257e9001a0463398966efc929a2cfbd"
  },
  {
    "url": "assets/img/jest-report.2f2bf403.png",
    "revision": "2f2bf403c76f9dfbfe4b35fc9ecf7801"
  },
  {
    "url": "assets/img/js__proto__.0b70ef92.png",
    "revision": "0b70ef923c2958ce955918e16b0450c5"
  },
  {
    "url": "assets/img/mocking_fn_properties.157442e7.png",
    "revision": "157442e7e1ecbb8d502950d10436b879"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/web-technologies-milestones.d64897b4.png",
    "revision": "d64897b431cfcfa5439d15ce2f84159a"
  },
  {
    "url": "assets/img/webpack-png-2-webp.d53cb165.png",
    "revision": "d53cb16564e9b1e96e25c63f47946e0b"
  },
  {
    "url": "assets/js/10.d4d64b44.js",
    "revision": "c68931e84200f20ce7cbccfcbdaff8c9"
  },
  {
    "url": "assets/js/11.dccd0caa.js",
    "revision": "7950a78ddfdf24e433da3fc86d310966"
  },
  {
    "url": "assets/js/12.ba2f31c6.js",
    "revision": "b51db702017f91ec4b4f4752a5f809b3"
  },
  {
    "url": "assets/js/13.47660a93.js",
    "revision": "e2df4988e3d9cd2f0e209a901a4cfeb5"
  },
  {
    "url": "assets/js/14.f3799243.js",
    "revision": "f2c456ff994f6453ceaeeb6036fefa40"
  },
  {
    "url": "assets/js/15.d47836c4.js",
    "revision": "933fc0170901452f0d0e6e320a81e520"
  },
  {
    "url": "assets/js/16.a0cf13e1.js",
    "revision": "4d914d9120a4602e1f8e3e3116336680"
  },
  {
    "url": "assets/js/17.ece88c6f.js",
    "revision": "854ee7f535698cb16928ca6e1b656bc2"
  },
  {
    "url": "assets/js/18.0f43bb73.js",
    "revision": "fa6641f0256ee80c199d63b949a11222"
  },
  {
    "url": "assets/js/19.59f427f4.js",
    "revision": "039a0e286b29e466528f4f6efcead39f"
  },
  {
    "url": "assets/js/20.60297670.js",
    "revision": "dfd557c69905aaa220e607ad75e58ba4"
  },
  {
    "url": "assets/js/21.f2cac3c4.js",
    "revision": "bdb0f13cca69b7585b3e35457b6cbf6b"
  },
  {
    "url": "assets/js/22.a09c4b00.js",
    "revision": "9facee5c9a807eef582c5fe031502032"
  },
  {
    "url": "assets/js/23.36496bfb.js",
    "revision": "3a13c711f55e66ade4edbefccf3f165f"
  },
  {
    "url": "assets/js/24.0656aa94.js",
    "revision": "2ea689657e69ef913a1e9a61ea7ab10d"
  },
  {
    "url": "assets/js/25.3dbdc77b.js",
    "revision": "2aaa994d76f9908d58bec331465c099e"
  },
  {
    "url": "assets/js/26.d4fafc51.js",
    "revision": "2b908e95d2b2a272c4ab8bd7f17abb1a"
  },
  {
    "url": "assets/js/27.058b0684.js",
    "revision": "42122839814c8bb46d31fceb36354425"
  },
  {
    "url": "assets/js/28.e7d54fb8.js",
    "revision": "03a94ae136a02e6b1b82ddd9841346c0"
  },
  {
    "url": "assets/js/29.dd023769.js",
    "revision": "5e08bf35eb3ec84d27f146735b0b9e4d"
  },
  {
    "url": "assets/js/3.8fbb91ca.js",
    "revision": "d4aeae664ed39d682ea0adbb10f10973"
  },
  {
    "url": "assets/js/30.ca49f254.js",
    "revision": "95dae42f609ae0acfe18134c11850978"
  },
  {
    "url": "assets/js/31.0dc8c255.js",
    "revision": "10bffa1b39fb071c3c3687dd9208f923"
  },
  {
    "url": "assets/js/32.fc1cbec8.js",
    "revision": "25a25d430ba4feabdd87dda698a40245"
  },
  {
    "url": "assets/js/33.6fe625c3.js",
    "revision": "477c6d8d75f46f92a9cc91f178804bae"
  },
  {
    "url": "assets/js/34.1baac6f7.js",
    "revision": "b85c7d9fa95fcb4ffdedfe59b92315a7"
  },
  {
    "url": "assets/js/35.c16b1e93.js",
    "revision": "ec8ecbf4f058175d3f40c186dbd9e528"
  },
  {
    "url": "assets/js/36.a22730a1.js",
    "revision": "b644e7eb4ef6fc739c74327ec53a2fba"
  },
  {
    "url": "assets/js/37.1decff60.js",
    "revision": "729f3dfba1bb1ba4e857399af8da0d63"
  },
  {
    "url": "assets/js/38.6558b5c2.js",
    "revision": "cd4ed33f3176fa153121eea26420ae24"
  },
  {
    "url": "assets/js/39.211abc20.js",
    "revision": "091aa8ecb541ff0294184d513c505905"
  },
  {
    "url": "assets/js/4.f9a51f93.js",
    "revision": "3db94b100f27effaad5a8fa6b6f987a3"
  },
  {
    "url": "assets/js/40.274274d4.js",
    "revision": "8b243d8037fd698d7d2cbb7da11cc410"
  },
  {
    "url": "assets/js/41.9aa9394a.js",
    "revision": "426ad13671e326f46e85c0cdf327944c"
  },
  {
    "url": "assets/js/42.37891fb7.js",
    "revision": "e7f07f2c0623e2b9283cd04546267fc1"
  },
  {
    "url": "assets/js/43.531c3813.js",
    "revision": "9765d6f627e231d75ac66fcc93a82065"
  },
  {
    "url": "assets/js/44.15aad52e.js",
    "revision": "e05c666eac0e491b99eff6aefe0ceb31"
  },
  {
    "url": "assets/js/45.f7bb8c83.js",
    "revision": "0e1fa8a27df52519530584eb7e81c13f"
  },
  {
    "url": "assets/js/46.896f833a.js",
    "revision": "5e0499b63046343cbdb37bf7deb558cd"
  },
  {
    "url": "assets/js/47.043419d3.js",
    "revision": "e493f337359ad11e2385a3bf83dc7777"
  },
  {
    "url": "assets/js/48.460a1340.js",
    "revision": "371583ddf57cfeafda2484568c783fcf"
  },
  {
    "url": "assets/js/49.11fba780.js",
    "revision": "a4174ff055faf105de59e35a166ec7eb"
  },
  {
    "url": "assets/js/5.10d91973.js",
    "revision": "7f5d3a18da6a6ed0c8d5d64a2d0fe054"
  },
  {
    "url": "assets/js/50.d680a42b.js",
    "revision": "e72cf32b41532ac4c911fdedce9b2293"
  },
  {
    "url": "assets/js/51.54787072.js",
    "revision": "a4cee5c424003f48b36eeca96743180c"
  },
  {
    "url": "assets/js/52.ad90a6d5.js",
    "revision": "0a25935b69dd5d8fe9ebccb6a793cf8d"
  },
  {
    "url": "assets/js/53.b696a0b4.js",
    "revision": "e451316f1c7944f04cffef8b22bad5ec"
  },
  {
    "url": "assets/js/54.0fe02a92.js",
    "revision": "1748c62e67dbbc033305889d64dadf62"
  },
  {
    "url": "assets/js/55.be2ed69d.js",
    "revision": "41c39e25118f8bf2728c73441edf5449"
  },
  {
    "url": "assets/js/56.703b0070.js",
    "revision": "9d54ef1a56e264a8c218330ce79bc26d"
  },
  {
    "url": "assets/js/57.93d0cacd.js",
    "revision": "a501bdbc6bedf61bd2d521d3aa7c626e"
  },
  {
    "url": "assets/js/58.2e9e1439.js",
    "revision": "5a0a41bf4dc7cd12be76d20d866153a2"
  },
  {
    "url": "assets/js/59.d0c1573f.js",
    "revision": "3d8a097fb7dc4b1d8c24673c707757c8"
  },
  {
    "url": "assets/js/6.8e704bf5.js",
    "revision": "fe97e21c9e6df4e0ed7f6c3e13bf5853"
  },
  {
    "url": "assets/js/60.f3ceeaee.js",
    "revision": "4c965ed0183922d6d71b8c5d9fddf301"
  },
  {
    "url": "assets/js/61.a26033f8.js",
    "revision": "2687a1e54852d3c37b7b5a37da2e4475"
  },
  {
    "url": "assets/js/62.9c814172.js",
    "revision": "1fcf6c3e27c6ad267f21a8a25e1d9727"
  },
  {
    "url": "assets/js/63.813978e6.js",
    "revision": "37bf67646784e79533fd4267ccfeb5b3"
  },
  {
    "url": "assets/js/64.586f1810.js",
    "revision": "be90f302df7b4672de8fb608177a459f"
  },
  {
    "url": "assets/js/65.6f99df97.js",
    "revision": "63693f85f470429a118c672cf3ddfc86"
  },
  {
    "url": "assets/js/66.e66a676d.js",
    "revision": "9f5185f5371f4528a22bfeff408d2292"
  },
  {
    "url": "assets/js/67.9159ab77.js",
    "revision": "cba8df17428041706c51328a9ee073f2"
  },
  {
    "url": "assets/js/68.6c8bbdeb.js",
    "revision": "aa1593f174a557f331acd8ca83837e48"
  },
  {
    "url": "assets/js/69.e8133117.js",
    "revision": "07f61f2b710d025c893f692647a95863"
  },
  {
    "url": "assets/js/7.164ea849.js",
    "revision": "57e8f2ea34bf5f3581e989d8137839ae"
  },
  {
    "url": "assets/js/70.02837460.js",
    "revision": "fc738648b0c19759259d331183a79b43"
  },
  {
    "url": "assets/js/71.3aa3e5e2.js",
    "revision": "3d540ea37d4ab2e0325dbc93ded12fd9"
  },
  {
    "url": "assets/js/72.3238dc84.js",
    "revision": "5720b972894fd274cb3b01428b01f138"
  },
  {
    "url": "assets/js/73.a3332cd2.js",
    "revision": "ba720fabb9472bace11f3bedecd61207"
  },
  {
    "url": "assets/js/74.6f3260e8.js",
    "revision": "33b5638f8f9da93702abae7baa427492"
  },
  {
    "url": "assets/js/75.36abc204.js",
    "revision": "7508ec479889bbea37c23f30513bd42a"
  },
  {
    "url": "assets/js/76.1a214f2a.js",
    "revision": "ff4d8a241317ef9b256ca7645044b2ce"
  },
  {
    "url": "assets/js/8.1ea9aa14.js",
    "revision": "24b33603bb7cceee73c38794bb452ac3"
  },
  {
    "url": "assets/js/9.e996db4f.js",
    "revision": "21e14bee5b6ae9cc4884b1e185561064"
  },
  {
    "url": "assets/js/app.8c77b96d.js",
    "revision": "a0444f72798fe96faf3636f8710938b9"
  },
  {
    "url": "assets/js/vuejs-paginate.3308613b.js",
    "revision": "e4ff8c74562cbd15e512ac1b32b48c88"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "b1fc96fffb46711f9bcb133ed88064c9"
  },
  {
    "url": "browser/devtools.html",
    "revision": "0192635b6c412f6ea97c120661ea3104"
  },
  {
    "url": "browser/index.html",
    "revision": "e8e41f7979b85c587c27d032dca2abc9"
  },
  {
    "url": "fonts/Tangerine-Bold.ttf",
    "revision": "9afc148dda39ef8139a07115252dd977"
  },
  {
    "url": "fonts/Tangerine-Regular.ttf",
    "revision": "c848a4eb65096cac74c9fc3df274ca4d"
  },
  {
    "url": "index.html",
    "revision": "89786e26c6916d01014a337edbbff78e"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "190a7399ec690f3f5417719e31bb759e"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "dd78748f5d8249b4e864a24d051d13c9"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "d4cdf7b98a7c94413d51ed9be5745cef"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "bda502997b8d9b85ae223a4b9499a177"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "5d4c557e77ae951b34212e930112945e"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "750c639cd1c3d1f9d58c894a3bd42b13"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "e8ee3c23ad17149d290e557520fb9dd4"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "5e026ef944e858ffa2b7d79a52c23eaf"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "ca5a327af9ea97841ed68ead65bbdefb"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "33456cc6e58f817820026223354b9999"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "45b6e888abd2fd885c04dde475f29b39"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "0f8c3ae5576ad4835901953008b8b1b0"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "56e9a56f915edd4e7a798664d3de7f74"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "8fd5f7378ab8a6a5cbcac9a3ce2d3eae"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "250795e1bd5037edbbab40caba003d7b"
  },
  {
    "url": "javascript/guide/polymer.html",
    "revision": "cc59c079b5d07ed4af7ff284fc9ddd37"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "1aff78cd58f86e46a5a7f09a7615ef09"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "d95094289b6470c8dc3981320595834c"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "f084fefea1efd209977dd020780bc268"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "3d8a3bd4affca238317a81b89488897d"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "b473a35ee9278bccf8dbfe8100c16238"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "4b8b047c7bbd779e7bc3ffeaac4ee080"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "269270872bae6cfee7e6ccc8a2f53bf1"
  },
  {
    "url": "javascript/index.html",
    "revision": "507d93673d9c4ea3909004915facbdc5"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "345a5333ea9521ac31cb522e0377656f"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "03282865b02b1602499b54167b721cd5"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "1ceed95f9549ddc9793308181c808696"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "3ca819518fccb09ca343177ab92b600b"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "e720039ed479e9ac81aaa0e6c28b7f4a"
  },
  {
    "url": "material.html",
    "revision": "b2f8019b7e7aff1cb529ccf08c25538e"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "4f8db102b1b95602f646ff2aa323dc55"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "fa492d6db29d28ceba99bcdb249e3ef4"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "d86cede73b80cd14f5f60a6c8ac595a2"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "17dc56bf9cacdc5323b06a2f96b24e2e"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "9eeb111e896ee62bf4a6d05214d3e1c5"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "7ccfc7f5aeeb3f46e112a96af5e51655"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "86d6228669a93cf4cffaeb4513d6e53c"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "de99900fffa46fc4287b1dc10f94ee84"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "4dcb20a086de8087ab5c3b1810ea5d8d"
  },
  {
    "url": "rust/index.html",
    "revision": "cb118b360a237c9fdf95f6082fe1486d"
  },
  {
    "url": "svg/ac.svg",
    "revision": "0cffd1ac6aa3b6edd9ea3b432a61e9a9"
  },
  {
    "url": "svg/apple.svg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "svg/dev.svg",
    "revision": "86b9bca4ce7adf43b72661c8f6666592"
  },
  {
    "url": "svg/dev2.svg",
    "revision": "ee4c138b7c639b49d575634a85d5e680"
  },
  {
    "url": "svg/event-loop.svg",
    "revision": "3de7920b4204b16f6109123c90d1d932"
  },
  {
    "url": "svg/eventloop.svg",
    "revision": "1d044245ed7fcd1d25e6391d44be5121"
  },
  {
    "url": "svg/function.svg",
    "revision": "c225dac4acf30a102cb4ffd85d66095d"
  },
  {
    "url": "svg/google.svg",
    "revision": "d7f28c24bb38a7e95ce4fc2551564ab8"
  },
  {
    "url": "svg/js-vs-ts.svg",
    "revision": "22758fdc59428a19a8f4917bce58cfc1"
  },
  {
    "url": "svg/js.svg",
    "revision": "f94b79dbcfa5eb46179d9a326c8cc33f"
  },
  {
    "url": "svg/linux.svg",
    "revision": "e760a611f4c0052d951b78f9df7c6bc6"
  },
  {
    "url": "svg/loader6.svg",
    "revision": "f23f943115b847a5ef66e2a445a0eea1"
  },
  {
    "url": "svg/mozilla.svg",
    "revision": "899916c201db61bf647d8cc39b3f708e"
  },
  {
    "url": "svg/nomad.svg",
    "revision": "341341e42d30497234e30f5337a64626"
  },
  {
    "url": "svg/queue.svg",
    "revision": "33bb8e38edf8dc0f835f248238ea9ed3"
  },
  {
    "url": "svg/rip.svg",
    "revision": "57ac01db333a3fe5d8164d261032b47f"
  },
  {
    "url": "svg/runtime.svg",
    "revision": "4f049ce09d0dee48f89fa4ae76d93f93"
  },
  {
    "url": "svg/rust.svg",
    "revision": "6c3598ab2a885e06ac90a8e4d81899f1"
  },
  {
    "url": "svg/stack.svg",
    "revision": "1192849591f6a4c6c55280353fc7c159"
  },
  {
    "url": "svg/triangle.svg",
    "revision": "aa552999b31782c18af926617b1e713f"
  },
  {
    "url": "svg/v8.svg",
    "revision": "2c3d2925a5b446d5b51aa1c092b4f0e3"
  },
  {
    "url": "svg/wasm.svg",
    "revision": "7439cb948e1da9735aa6dfcd5890ad35"
  },
  {
    "url": "tags.html",
    "revision": "8cb5dec921013d62d0853df90f3c5c6c"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "adf65a8a2313896ab3500847a1a68d32"
  },
  {
    "url": "technologies/css.html",
    "revision": "a5fe5fd5b8101febccbd05e9843dadba"
  },
  {
    "url": "technologies/history.html",
    "revision": "79c12eb1bc1dbb2fdc2f55f851cd150a"
  },
  {
    "url": "technologies/index.html",
    "revision": "2bbb9b38811db473583d7464d1fb4adb"
  },
  {
    "url": "technologies/modular.html",
    "revision": "d83a22ddca82d0cc578399c015e4dc75"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "483b0c85f3acd059ec3144d7daa63d6f"
  },
  {
    "url": "technologies/regex.html",
    "revision": "8c4718e82a6f3c1a17c609e9dbb98f69"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "0087f614e66eceb52212713fedc32880"
  },
  {
    "url": "test/index.html",
    "revision": "7eb03c2eed9110adc7177b7ec213f68d"
  },
  {
    "url": "test/using-vue.html",
    "revision": "eb46746a812a210a52edf3e125bb37b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
