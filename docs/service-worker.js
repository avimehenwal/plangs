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
    "revision": "4151c25e7f0ba93d15b4a04daf2851bd"
  },
  {
    "url": "apis/github.html",
    "revision": "5b8fc365e64f525cc2743a939d6e57c6"
  },
  {
    "url": "apis/index.html",
    "revision": "60d29493fc55438a64e719dbe2a0fdd4"
  },
  {
    "url": "assets/css/0.styles.cb305134.css",
    "revision": "aac07325bf54a501e2aa546ebf4e8cd2"
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
    "revision": "9b90ba75fef6009b14349cb6028362b6"
  },
  {
    "url": "assets/js/11.dccd0caa.js",
    "revision": "d48f099a2cd2d0dd233535468143ef9b"
  },
  {
    "url": "assets/js/12.43a38705.js",
    "revision": "236cd9aae6373cf3fd3666f05c81c00c"
  },
  {
    "url": "assets/js/13.47660a93.js",
    "revision": "476f564d5c94c06d5235aff498ce81fe"
  },
  {
    "url": "assets/js/14.f3799243.js",
    "revision": "bd27e6c9df41f8964b7e7dfdb174c5a0"
  },
  {
    "url": "assets/js/15.1cfff23e.js",
    "revision": "d49eac14e4a6542e81596078db301540"
  },
  {
    "url": "assets/js/16.a0cf13e1.js",
    "revision": "a9dfeb3765e527d8cbd7a4ab9278e96d"
  },
  {
    "url": "assets/js/17.cce8a3a2.js",
    "revision": "ec3b86099f59f65d64fe86aabf92fb40"
  },
  {
    "url": "assets/js/18.b69d9915.js",
    "revision": "8735468431578388591cf6aa14b06541"
  },
  {
    "url": "assets/js/19.59f427f4.js",
    "revision": "9ae678908c02444d17c220cb11896b3d"
  },
  {
    "url": "assets/js/20.60297670.js",
    "revision": "a3cdce2f46203f0777d8fdceac58a09a"
  },
  {
    "url": "assets/js/21.f2cac3c4.js",
    "revision": "101dd4b4b75a263134b5ba9b45fdbd2a"
  },
  {
    "url": "assets/js/22.a09c4b00.js",
    "revision": "9314526a0a1d0f098941147c67500ae2"
  },
  {
    "url": "assets/js/23.36496bfb.js",
    "revision": "993d5c997452e613c2d72b1ab6e279e4"
  },
  {
    "url": "assets/js/24.0656aa94.js",
    "revision": "58a60f77859541d4b769be003d14af19"
  },
  {
    "url": "assets/js/25.6fb92d22.js",
    "revision": "0fc44f3647575b35bac505ae5f53bc77"
  },
  {
    "url": "assets/js/26.ac7b1927.js",
    "revision": "72655800f17a8adb0c8cbbf33dfd0674"
  },
  {
    "url": "assets/js/27.9f15f052.js",
    "revision": "9f051a24723d734dfd78033264a33062"
  },
  {
    "url": "assets/js/28.f41ceb1e.js",
    "revision": "f589ec653b0993bb9a084bea04a7b2cd"
  },
  {
    "url": "assets/js/29.d18b87ec.js",
    "revision": "da3c726b47dfa0cb0e58f4da2afe8ade"
  },
  {
    "url": "assets/js/3.8fbb91ca.js",
    "revision": "972e8d92780655fc2c468ba462baca80"
  },
  {
    "url": "assets/js/30.ca49f254.js",
    "revision": "ecdaf8578e93b17e3a2f22eb79d74c74"
  },
  {
    "url": "assets/js/31.51de81c4.js",
    "revision": "f49f25503503c037457b02953c9d7391"
  },
  {
    "url": "assets/js/32.183de136.js",
    "revision": "b9348ea7ebb582dda373b9bd2f04c4cd"
  },
  {
    "url": "assets/js/33.6fe625c3.js",
    "revision": "ab8e3bd936be1748e4b4580750617700"
  },
  {
    "url": "assets/js/34.1baac6f7.js",
    "revision": "7f3d6ec50c86acbd055c9fe14fbcb64f"
  },
  {
    "url": "assets/js/35.0b308156.js",
    "revision": "0739659175a7b743250498e45a32f098"
  },
  {
    "url": "assets/js/36.18f75077.js",
    "revision": "6fbcc25bbd1d086edf521b6b4bd1c92e"
  },
  {
    "url": "assets/js/37.1decff60.js",
    "revision": "8f51b4c26f99fa11be24b43dfd261692"
  },
  {
    "url": "assets/js/38.6558b5c2.js",
    "revision": "239e1c91a25afcf5b6710de406d36f4e"
  },
  {
    "url": "assets/js/39.211abc20.js",
    "revision": "07da465f4d558dbb5b56c50c51c36279"
  },
  {
    "url": "assets/js/4.d637761c.js",
    "revision": "b515c3d9db0ed053766bc0ea39a544d5"
  },
  {
    "url": "assets/js/40.67aaea8f.js",
    "revision": "1b9f3da4f5b19950a23b6c96773badad"
  },
  {
    "url": "assets/js/41.9aa9394a.js",
    "revision": "1c9a7c50aee07df6a840e5227be6014e"
  },
  {
    "url": "assets/js/42.37891fb7.js",
    "revision": "17e3b3a3eb13e1049d1e3f178fcb515c"
  },
  {
    "url": "assets/js/43.531c3813.js",
    "revision": "4c7a3d61c7f9f234e5a1c32d781de190"
  },
  {
    "url": "assets/js/44.15aad52e.js",
    "revision": "bc1b76ebae5db8752ef6dde4ca39de99"
  },
  {
    "url": "assets/js/45.f7bb8c83.js",
    "revision": "a7a0269ac2eb1987cff14adfb218c4e7"
  },
  {
    "url": "assets/js/46.1bfa5020.js",
    "revision": "83086330ecd03a8672121f1d65c319cd"
  },
  {
    "url": "assets/js/47.1840b975.js",
    "revision": "19fdf9c2f0d3218bb210800b2f47a925"
  },
  {
    "url": "assets/js/48.58caeddb.js",
    "revision": "5680586e6893f0c35949769cb4c880a2"
  },
  {
    "url": "assets/js/49.11fba780.js",
    "revision": "fa14d56ef2852bf63a348a57e4549b50"
  },
  {
    "url": "assets/js/5.10d91973.js",
    "revision": "f7dc7dbcb6e53ce49b0c5921ef02e5f6"
  },
  {
    "url": "assets/js/50.d680a42b.js",
    "revision": "2c0384db42ccf20331debea1255b61ae"
  },
  {
    "url": "assets/js/51.3f7927ce.js",
    "revision": "7296764f07f4bb5ff4cbf88229431765"
  },
  {
    "url": "assets/js/52.c0afdc1a.js",
    "revision": "26a4039964b494b7b6b9ab20b4fc4731"
  },
  {
    "url": "assets/js/53.ff9b2c58.js",
    "revision": "730476b078e89bd47848f5d646020300"
  },
  {
    "url": "assets/js/54.7b0b7478.js",
    "revision": "33fdfc4f74b90dcbca98d9c225d6c0ab"
  },
  {
    "url": "assets/js/55.edfd7cbd.js",
    "revision": "0bd62343997b244659ae509e2bc6c868"
  },
  {
    "url": "assets/js/56.614da4bc.js",
    "revision": "3b5140551b6c27e0ab1df8254b4f3c65"
  },
  {
    "url": "assets/js/57.2fc1964e.js",
    "revision": "bf76d7edd64fa4436bed54be4bb38452"
  },
  {
    "url": "assets/js/58.2e9e1439.js",
    "revision": "2718370c05692e7c49cbad4cc7eaac2b"
  },
  {
    "url": "assets/js/59.e0a8be7c.js",
    "revision": "f9fdb5ab19e75c7d2a740389e570d3c4"
  },
  {
    "url": "assets/js/6.8e704bf5.js",
    "revision": "19e6eafe72c039b781344dec6d5bd1d6"
  },
  {
    "url": "assets/js/60.dc2f7797.js",
    "revision": "f1d7d0cd3328878448c0a28b82a69761"
  },
  {
    "url": "assets/js/61.4a240cc8.js",
    "revision": "de36f502c65743a8bb0ea3805f79bfeb"
  },
  {
    "url": "assets/js/62.6e880d3b.js",
    "revision": "6c5595d79b48ea23ee75ccbba5fc0e0c"
  },
  {
    "url": "assets/js/63.59ba9c4c.js",
    "revision": "d0c95be9e58cb80d314416ee6588df81"
  },
  {
    "url": "assets/js/64.7da5b2b5.js",
    "revision": "bc44e9ced40db9cf658bc3c6151a59e2"
  },
  {
    "url": "assets/js/65.e250f3ca.js",
    "revision": "84c20839a5aec1e50d98bfe7a6169a28"
  },
  {
    "url": "assets/js/66.ad06c654.js",
    "revision": "3f54ee283d84efa9e07f8872b3960412"
  },
  {
    "url": "assets/js/67.4bed293b.js",
    "revision": "bbbcc8739bba4fc64c6e99726226c472"
  },
  {
    "url": "assets/js/68.6c8bbdeb.js",
    "revision": "7c0fecaab865b13f691b687eec2ab9a4"
  },
  {
    "url": "assets/js/69.2efb0ac6.js",
    "revision": "12c2809d69d758acd6ac7b187a6a2dd3"
  },
  {
    "url": "assets/js/7.164ea849.js",
    "revision": "c9d04d3845b7284afbfd864ea30bdb4a"
  },
  {
    "url": "assets/js/70.2d133378.js",
    "revision": "96fe7c5a667ef8bac7930b1e103b38e5"
  },
  {
    "url": "assets/js/71.edd1e434.js",
    "revision": "4a19427d8e88f0b245dbb5c48ed4fa83"
  },
  {
    "url": "assets/js/72.db099385.js",
    "revision": "a49417f8eb3c6705f42a453f3ed1ee19"
  },
  {
    "url": "assets/js/73.3562e4b1.js",
    "revision": "4beae3595fe21da371dabb62adf50247"
  },
  {
    "url": "assets/js/74.4dc3c79c.js",
    "revision": "799b6ae0c84f517c76068a40c0bee268"
  },
  {
    "url": "assets/js/75.36abc204.js",
    "revision": "64cacde603ad4c3cd325544dfe6c23b0"
  },
  {
    "url": "assets/js/76.1a214f2a.js",
    "revision": "22578228ef07d9de2adc8a3b1413ff3c"
  },
  {
    "url": "assets/js/8.1ea9aa14.js",
    "revision": "634cdd5a686408a1d0e3ea76de265d22"
  },
  {
    "url": "assets/js/9.e996db4f.js",
    "revision": "d9d4a9b8db640a27c79d4484ee97af08"
  },
  {
    "url": "assets/js/app.2d1a0587.js",
    "revision": "d13d6616196498fa037c968e127fb70e"
  },
  {
    "url": "assets/js/styles.cb305134.js",
    "revision": "56317ee4e4cb0dd372df68b0fb8a7eae"
  },
  {
    "url": "assets/js/vuejs-paginate.3308613b.js",
    "revision": "5d0026de5fde502e468750c7fc6e2cf1"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "e5bb485fb1d575ff8e7a2541e4898b1a"
  },
  {
    "url": "browser/devtools.html",
    "revision": "7238b0a9c32a1e071d68d687bbe628b1"
  },
  {
    "url": "browser/index.html",
    "revision": "8f80085effcce19a23b92f589db4a864"
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
    "revision": "b95062e33dc8b42135e8e4d28ea70cc5"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "b838e99e4162762389d6316b33e7b2c3"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "b9f015248e2825ad3e5275e985ff1270"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "23912aa580a60e17393131ee52df5f4e"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "b47fa8cf1b8b9fb812de93530969f10a"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "43490007dc91f828ef185950601465a6"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "1fe8f3d73c9dd9d310330e1d34ac327b"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "9e70e2af3a878e9c7a84822da755c853"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "28b51359ca55e3472e6900b94907dbd3"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "ae1e58b4c21f1f9480c6d216ae8b173e"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "74dbf6e197a2ddc8a361a5a5bf1e4171"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "49086d5cdb83d51bc9f9db799e19c5c2"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "0a61a213f98aec9edf16f8972e8b5163"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "d222177f0fb60c7749c05acedddbcbc1"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "d81daaf04dd8f523e4f5b8c1ddc6674f"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "054a3a58fa567523e5cb408f418d352b"
  },
  {
    "url": "javascript/guide/polymer.html",
    "revision": "8a9fe6866f73c3765a55d72f9c943df6"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "32623c4019755e6acab4443b5bafc02b"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "6042ba897f3cda8863cf1a0237ca7e84"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "60fef668680e5a29ad2ab2af1e405a5e"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "459c13889aa30e0d29f89ab0fe53e0d5"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "abf9bf93cfad082015f42adb2ee3cf78"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "f7b92ba2b81e18004811c438e8d20f66"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "cd3356bb7d0850eec32d1b4611687043"
  },
  {
    "url": "javascript/index.html",
    "revision": "567e495cb1d2b9d1bc6ac0168cdaf442"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "fbc424bd145604a2805fb61d6f9a7d5a"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "e9570c53145e2909f5e40d25660a6abb"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "4f77d091760e1a6a1c8b25caa0503804"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "13968f2ca84aeb5dd35f20bab8738fe8"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "540786241ac09df5cead050d030da9ae"
  },
  {
    "url": "material.html",
    "revision": "46f00c4549a666210487717061b1a18f"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "f0648fd5d977f4884f084d343bc4b17d"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "f9ced1aa127a6535178c52eacd1ec9fe"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "7a5ca16345f10fe3d77a9f27e3918ce6"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "d8709c00b3081b8d37633937f5f8ca7b"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "2fe6b75f836655ed25a214abd0237a88"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "c0bc677a01e3fd40a4265a5f1ada56ed"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "93d8493148bc8f83f8ad9df8e2d21d1a"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "62265ecdc5961545217b01e85dfc4588"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "5331613a4b42b3cf7005beab59cf4cd3"
  },
  {
    "url": "rust/index.html",
    "revision": "0409ad8e79124082e432c410557121f3"
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
    "revision": "bbffffdc50df7d68d8a9e619f7dc3433"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "e3b4dd194deaa6ec37351be60b059547"
  },
  {
    "url": "technologies/css.html",
    "revision": "c5061edb678b6bafbd153d1165bff6d4"
  },
  {
    "url": "technologies/history.html",
    "revision": "c2de58685f513aa514debc71f1980e9a"
  },
  {
    "url": "technologies/index.html",
    "revision": "05b9406090df2c9585fb4c123afe366f"
  },
  {
    "url": "technologies/modular.html",
    "revision": "6bb0c0da098cf9fb08372d9ef5234a0a"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "f32144cee6525e60814fc660cb3f3be5"
  },
  {
    "url": "technologies/regex.html",
    "revision": "45c8ae3bb489da5a934fc3f6ddfb1400"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "7a976fb9f8bab5917fb2180af0799b61"
  },
  {
    "url": "test/index.html",
    "revision": "3969d42a98e3d76eac34cb5337e4f00a"
  },
  {
    "url": "test/using-vue.html",
    "revision": "97a3cbfbfb3c5ec1bc3e24773228a7f3"
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
