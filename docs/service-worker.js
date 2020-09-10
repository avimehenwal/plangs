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
    "revision": "9ad69ef42a57b5add4967c80a190626c"
  },
  {
    "url": "apis/github.html",
    "revision": "3b6e4ed6665e0102a35ba9667d8d937e"
  },
  {
    "url": "apis/index.html",
    "revision": "07843366b1d586bdb2cde76ce132335d"
  },
  {
    "url": "assets/css/0.styles.2e15636b.css",
    "revision": "0367ae721fdc11bbb3e64b81b94b39c2"
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
    "url": "assets/img/sdlc-oo.9a14dcd0.png",
    "revision": "9a14dcd0c8f45092bc3c775445c6a5db"
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
    "url": "assets/js/10.2b014a02.js",
    "revision": "f2afb3e87a3aa1489b322dac41540390"
  },
  {
    "url": "assets/js/11.1cd70422.js",
    "revision": "db3137c7555c2f6d2241d70601938202"
  },
  {
    "url": "assets/js/12.980344a9.js",
    "revision": "34e65af1e896f3a9c8aa906029a020b6"
  },
  {
    "url": "assets/js/13.d186556e.js",
    "revision": "ec32a64889b1846ec0240325ec676525"
  },
  {
    "url": "assets/js/14.59284f0d.js",
    "revision": "651cf7aebf6b2f32bc4a43ecde6dcffb"
  },
  {
    "url": "assets/js/15.eda936a4.js",
    "revision": "f803cefad55de8091f3ce819ed76c44b"
  },
  {
    "url": "assets/js/16.a1f5b2d8.js",
    "revision": "66957c7455ebcfb383ee002b9690c7ba"
  },
  {
    "url": "assets/js/17.16c7b7ba.js",
    "revision": "9792d86d98ce1b0548606ad961149a97"
  },
  {
    "url": "assets/js/18.bccc3f0a.js",
    "revision": "58046be026aaacf34ffa6bb778ead257"
  },
  {
    "url": "assets/js/19.34d0deaf.js",
    "revision": "c6eb68259b1800167f0b620e9d150be5"
  },
  {
    "url": "assets/js/20.be47512a.js",
    "revision": "e1973ddf0bb96af6c323b8fa7e926a73"
  },
  {
    "url": "assets/js/21.05a7db61.js",
    "revision": "2b4b9c6d271e9bb1604e11d24556e395"
  },
  {
    "url": "assets/js/22.1d60017a.js",
    "revision": "c003b8c62b876ba90a70be97a4e7a200"
  },
  {
    "url": "assets/js/23.8b3a8aee.js",
    "revision": "703cad86f89b22bf3df7c9cb992bf86d"
  },
  {
    "url": "assets/js/24.042e48f3.js",
    "revision": "ef21d68cd28698c6897b50f0c59fdc0b"
  },
  {
    "url": "assets/js/25.921872a6.js",
    "revision": "3d0fc32ed552fc2577026144159eb688"
  },
  {
    "url": "assets/js/26.021034bd.js",
    "revision": "3a0c7cc88743f6e378724f8edfbd1e44"
  },
  {
    "url": "assets/js/27.9b96850e.js",
    "revision": "e7f567b0c986cbeaaa7f84c4ed34835e"
  },
  {
    "url": "assets/js/28.7dc38559.js",
    "revision": "8b5feb49f01304a8f4dac92b8381101a"
  },
  {
    "url": "assets/js/29.9451ad04.js",
    "revision": "6a0c2152fe2425aca049306e99e40f80"
  },
  {
    "url": "assets/js/3.881ca49e.js",
    "revision": "03fdd1ffac85553a6d8e8060a7675380"
  },
  {
    "url": "assets/js/30.091ecc65.js",
    "revision": "3db2b1578d2cad97a61846ee7d4310a4"
  },
  {
    "url": "assets/js/31.507028dd.js",
    "revision": "cdde303708f7e61e7fa6104d82d63ece"
  },
  {
    "url": "assets/js/32.38738f01.js",
    "revision": "c2aef94c3c06eb8f799b75271aa4321b"
  },
  {
    "url": "assets/js/33.ea8b105e.js",
    "revision": "622812b757f1788003285d88886b8c74"
  },
  {
    "url": "assets/js/34.f35aecbf.js",
    "revision": "47b8283bd07d5c31ff6a1b2084b5faa0"
  },
  {
    "url": "assets/js/35.24b07c63.js",
    "revision": "83537d4fdb785b24ce42605b7eb0170d"
  },
  {
    "url": "assets/js/36.9d79c5df.js",
    "revision": "44ce70b24ae7449e69ae7a58a71ac25a"
  },
  {
    "url": "assets/js/37.56c3892c.js",
    "revision": "9bab1891d69b044f160bfc9e4c71e521"
  },
  {
    "url": "assets/js/38.6115592f.js",
    "revision": "c8255d4d15f61e7edbec54b73d642faa"
  },
  {
    "url": "assets/js/39.02a45335.js",
    "revision": "17b34ea91dc40b45e9ecea7ac00364e9"
  },
  {
    "url": "assets/js/4.583fb5bc.js",
    "revision": "688cab3224fcfa946fbf472aad5d4497"
  },
  {
    "url": "assets/js/40.71d897a7.js",
    "revision": "b17db1518f25b862e7d4729716cf55b7"
  },
  {
    "url": "assets/js/41.de33e4da.js",
    "revision": "bfbd9b379d8d76ebccddbf26fa5b3f24"
  },
  {
    "url": "assets/js/42.eb75d5ba.js",
    "revision": "f0a4873133a20917385136d02e0a01ee"
  },
  {
    "url": "assets/js/43.8858630c.js",
    "revision": "879140c06ffdf627561029300e3001fb"
  },
  {
    "url": "assets/js/44.cdd87e32.js",
    "revision": "9a0cccabaf30d0b481f1f4a6a60de30b"
  },
  {
    "url": "assets/js/45.76fae288.js",
    "revision": "e15a10cee885338b8976593fe293e80d"
  },
  {
    "url": "assets/js/46.f75573ad.js",
    "revision": "cd799d8cea325ca9b923c69ba20ad7ba"
  },
  {
    "url": "assets/js/47.bac83a4f.js",
    "revision": "f04b226290511aa2dd53d6c382b3f3a2"
  },
  {
    "url": "assets/js/48.53fcaa81.js",
    "revision": "4712852fdbd82a8e3019c29703a8b508"
  },
  {
    "url": "assets/js/49.cc2f5e80.js",
    "revision": "67506fcf4af7d4d6b2099d25edf20d49"
  },
  {
    "url": "assets/js/5.75291e98.js",
    "revision": "f09a5c82670a133a175d0f39b7b791e7"
  },
  {
    "url": "assets/js/50.28a102a7.js",
    "revision": "c61d5f57c32f858904a1995b15176812"
  },
  {
    "url": "assets/js/51.9a304a21.js",
    "revision": "66070915be92b6a90060e5c103021ce0"
  },
  {
    "url": "assets/js/52.ea8720a1.js",
    "revision": "56848614b45726a3527a667c1d8b1107"
  },
  {
    "url": "assets/js/53.23555f6e.js",
    "revision": "cadb31276f619ecd7f546771ec1b143d"
  },
  {
    "url": "assets/js/54.c5a37acb.js",
    "revision": "4811062d2b7ea11bd25c64f1e75acdc0"
  },
  {
    "url": "assets/js/55.1d4f1d9d.js",
    "revision": "2ce59ac525c29d776410b33c69e8f432"
  },
  {
    "url": "assets/js/56.ed913cf9.js",
    "revision": "55a0fc8d7e08e3cd38840dc25a773c34"
  },
  {
    "url": "assets/js/57.6a0ab833.js",
    "revision": "7a4970cf57f044b9b998a750b061b49c"
  },
  {
    "url": "assets/js/58.47b9db76.js",
    "revision": "0c02930a818f893d20a393e4a6d0acf7"
  },
  {
    "url": "assets/js/59.60f45901.js",
    "revision": "e34fc0a4c50bc67504bdecc87bfa28d1"
  },
  {
    "url": "assets/js/6.61788625.js",
    "revision": "ea06888430bb29d0563b110c5df18479"
  },
  {
    "url": "assets/js/60.10115ac7.js",
    "revision": "8c7d5914cb6122fd34d845c0236ac2f7"
  },
  {
    "url": "assets/js/61.2d43a6b3.js",
    "revision": "cf6a745e082370cdd053919632dc8f37"
  },
  {
    "url": "assets/js/62.0b92c548.js",
    "revision": "dc6536a3ad267fd3b803b69d99ddb95e"
  },
  {
    "url": "assets/js/63.c18ed20d.js",
    "revision": "81aec8d56e44bae42d651a47ca3d046e"
  },
  {
    "url": "assets/js/64.dee9297b.js",
    "revision": "096ceed76008e0cd9cbd6c3b0767baad"
  },
  {
    "url": "assets/js/65.ddb97fc9.js",
    "revision": "c6325d72cfceb7aa11a279b2e6b0d89a"
  },
  {
    "url": "assets/js/66.c4b5d932.js",
    "revision": "392889d3279260612ce281fd9846d74d"
  },
  {
    "url": "assets/js/67.817dd592.js",
    "revision": "316f5e148c570e7c9ce98dc0cfcf569e"
  },
  {
    "url": "assets/js/68.6579d20c.js",
    "revision": "25414d0c09572f10652c7ae1bebca174"
  },
  {
    "url": "assets/js/69.6309b465.js",
    "revision": "80951c667a62645b87a53b8c72056a24"
  },
  {
    "url": "assets/js/7.fb94e9b1.js",
    "revision": "c7f0e2c8726487623f0e97fb9ea267e8"
  },
  {
    "url": "assets/js/70.fe6e9870.js",
    "revision": "65324875e952d53e14f5fa0afe110eff"
  },
  {
    "url": "assets/js/71.4ffe5e7e.js",
    "revision": "dcd377253825230ed95d7eda15aaac66"
  },
  {
    "url": "assets/js/72.dd595b60.js",
    "revision": "339543f8c829f34fc20062fb447f8914"
  },
  {
    "url": "assets/js/73.698e29ac.js",
    "revision": "234aa6b17b2783b4c893922f5e10a458"
  },
  {
    "url": "assets/js/74.8490156b.js",
    "revision": "d574a478d76883bea27117ab8e51a35e"
  },
  {
    "url": "assets/js/75.c82aa243.js",
    "revision": "97d35756cf349bedec79010200d68ae4"
  },
  {
    "url": "assets/js/76.d9e09c06.js",
    "revision": "8d67fe29d1c40ed2dbb6f0ea525bbf10"
  },
  {
    "url": "assets/js/77.d9af2a8b.js",
    "revision": "a74b9cde3eea3f3f477b34bf1abb47f0"
  },
  {
    "url": "assets/js/78.6720e646.js",
    "revision": "59fe4bf8c723de6a1f46ece30b8ab773"
  },
  {
    "url": "assets/js/79.1ca9e48c.js",
    "revision": "ae2cff4307ccec0cc932d37375902a48"
  },
  {
    "url": "assets/js/8.9a600cd6.js",
    "revision": "005715683a249325439eba56460fd1ac"
  },
  {
    "url": "assets/js/80.d3ed2b78.js",
    "revision": "26a18efc3a685a0528e13b73d986b7a7"
  },
  {
    "url": "assets/js/81.46161192.js",
    "revision": "7888b294c643897ea37c6de9792d7c02"
  },
  {
    "url": "assets/js/82.17266782.js",
    "revision": "089539422e6c99bb9ffefd62794283cb"
  },
  {
    "url": "assets/js/9.c0dffba4.js",
    "revision": "b2f40fb0beeadaaee75e6beafaeffac2"
  },
  {
    "url": "assets/js/app.0ca01c06.js",
    "revision": "90c8a61bfb16cec5939dcebb169b79bd"
  },
  {
    "url": "assets/js/vuejs-paginate.8f017de9.js",
    "revision": "ca8e21a6dadb32753379ae29e706ab1c"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "b2ea50290d4381ff8fef8c37b18362b7"
  },
  {
    "url": "browser/devtools.html",
    "revision": "407e0eb3bfddb26de37d25f9db4d16f2"
  },
  {
    "url": "browser/index.html",
    "revision": "37b721b92b5369c156d7a9a1c0a1f8d6"
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
    "revision": "834d016ac5427226091a9622098856e7"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "c6349cc6d254d38ec7b669a0ec0575bc"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "fbe0a531e7e56207dab87e79c9971680"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "eccbe273fd106e9d7542e048e16fd72a"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "1ad5c9f7a950cc4500f37da823a36ae6"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "5c1db48a7d9d192b05d7719a9edb5e6f"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "8593a8315343cd75d147c283a186424d"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "e5b5d8ed21c762e1fb7c1404c15499d2"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "cf820f41dc89739894a7a3003fc80201"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "63b709fbcdb36aaea5d3ef730a9e1a06"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "222ba7eb590b8792c0b952b251eea6c5"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "e3b23396a3f7ac7873b86db96b502be9"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "c670f3108b9eef7683e8957e23248bc5"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "e7618feb48e3ed9b81bf5a3425cc3be5"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "ea7081d2ffac1c1524934e8bdb55b7d5"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "f1f1864d9169ae5f58c4d6d5432e5920"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "9977125e9cb63ae26279d9b3ebcf0248"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "195b25a301064a129c1d1a098b1c47f8"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "f66d661d29b1d3d761e36b3f15ca09a0"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "e704b76f794fd1688c4d55d7c6dac7c3"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "6fb3797ac2bb620e99306d417db8c4b9"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "8c947a12b0bf8fff99e1b0725be57075"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "555852658591009e8cdd97c36eade67a"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "ee87133019ec6b86a287dea86d54f5a7"
  },
  {
    "url": "javascript/index.html",
    "revision": "3c4a0123d15aa50bb2e780be14da72a1"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "7f3319982a467a36d95ad6e9b50635ce"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "6e9fdbb02d320f31e67f729c999e43b9"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "0d4900b6fbb15e0752927b4508486a39"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "be89de75f749da77d16ca69721d4a622"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "3b40a29ff14c39a335d2cd7e4a72ffa0"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "b4445b8dfe675668f960a14e9538c5ce"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "255a60804201e4ec11f9358e845cca1a"
  },
  {
    "url": "material.html",
    "revision": "5ca76c150b2c835188cc6f5ecb53ac18"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "be6f182637fc2107c4d830c2ecc2fd0a"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "59986828413dca40f985dcfc0e4fa1aa"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "77827b0422bf0985001b1488ff9dddcb"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "9aa42796f05f2d4c48635d08c9461c6d"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "ab18be5b5984c0d7cc22f9d754412671"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "d692291b0374eb47657368978e6971e3"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "08051e5787c9fa2eb3f80afdfea24506"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "9c4308668645f12861cdc226057f05f2"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "32405995ced89dc3e528d29ca8da343d"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "4c4a6b4abddc7cc4701ab288a337cd52"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "74818e5293b93b036e8a680a37119941"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "826e1ecd066428e68d05eb8a9504edf6"
  },
  {
    "url": "rust/index.html",
    "revision": "c8301f64fc7282a7576b9f3d196a28e1"
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
    "revision": "208e0c515b03238386f2afcbf8b3d80a"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "4ede1f8dbbac945fdd0dd3f2adb8928c"
  },
  {
    "url": "technologies/aws.html",
    "revision": "fd660b174e03cc1d171363e05135a172"
  },
  {
    "url": "technologies/css.html",
    "revision": "55f6e0b74092d14c7f30aba70c1e57cc"
  },
  {
    "url": "technologies/history.html",
    "revision": "349b9f9171c6c867a05f3f7d175b16e0"
  },
  {
    "url": "technologies/index.html",
    "revision": "3003b77dc3684549bf832e54182a4214"
  },
  {
    "url": "technologies/modular.html",
    "revision": "4664f938c5bdcb8aa2575fc6a5601de7"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "4515d704fd8876b099a907e9b67ad928"
  },
  {
    "url": "technologies/regex.html",
    "revision": "3f6dd21d8e9a521fc0868f563d74f2cb"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "8551e5be50654e43d62c61b9f68f1461"
  },
  {
    "url": "test/index.html",
    "revision": "36273d552879c795c016e9b08d1ef58e"
  },
  {
    "url": "test/using-vue.html",
    "revision": "f603fd459e36dd4686a0a9a9967628f4"
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
