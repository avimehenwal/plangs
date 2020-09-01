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
    "revision": "4fc4210b28edc9942992f0ca33656b87"
  },
  {
    "url": "apis/github.html",
    "revision": "acb6b5285ee4b432827f6fa7e1c562cd"
  },
  {
    "url": "apis/index.html",
    "revision": "2250167eea0b3d5f101a24e61fe2bdcb"
  },
  {
    "url": "assets/css/0.styles.28f45dcf.css",
    "revision": "5cae9f1ff2ccaa0a701c3dd022d4174c"
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
    "url": "assets/js/10.3c4c4abd.js",
    "revision": "479db44e2f7d1e252e8459ff80fa0a49"
  },
  {
    "url": "assets/js/11.be4d54cb.js",
    "revision": "75584df9d089d9b9bb9cc20a0cac682d"
  },
  {
    "url": "assets/js/12.dff7297e.js",
    "revision": "b8fee4bcd195527dd326cd683762aef8"
  },
  {
    "url": "assets/js/13.aeacd4c9.js",
    "revision": "abfa702176aa11e942bbde15ba90fd18"
  },
  {
    "url": "assets/js/14.dfe0b79f.js",
    "revision": "222f957bf87b40180919a37f2aece2fd"
  },
  {
    "url": "assets/js/15.55f31f9f.js",
    "revision": "c933f625a82971d320162ab82008faaa"
  },
  {
    "url": "assets/js/16.eeb094d1.js",
    "revision": "a46906b886a7618255d2c6cdca42d3f3"
  },
  {
    "url": "assets/js/17.a3fbfa8a.js",
    "revision": "9760a7598953061d843d26329f62a8e1"
  },
  {
    "url": "assets/js/18.987c351c.js",
    "revision": "9420483a3afd32b340e88b273e6d7606"
  },
  {
    "url": "assets/js/19.13b50fe4.js",
    "revision": "034598cbd25f6baa07f33d4dde964c71"
  },
  {
    "url": "assets/js/20.81f72e45.js",
    "revision": "7a4d5883cd2fe92c69a527780441597a"
  },
  {
    "url": "assets/js/21.fd3f9932.js",
    "revision": "8b7f3d12f95769fb48836821dd9070b6"
  },
  {
    "url": "assets/js/22.41ec5300.js",
    "revision": "0a1c8043b89dc6d4f4ed9f58228f6ab1"
  },
  {
    "url": "assets/js/23.4b1cbce6.js",
    "revision": "bb9965d1ec9c9bd2355eca38fdd8be74"
  },
  {
    "url": "assets/js/24.f9b736d3.js",
    "revision": "4eacd50cbd96e472c5a0914565be6c98"
  },
  {
    "url": "assets/js/25.99b01741.js",
    "revision": "74f8bb5f455240762c402f53efc65806"
  },
  {
    "url": "assets/js/26.6a62b9fc.js",
    "revision": "43bd59d3e4a6d3d83313a2078398769f"
  },
  {
    "url": "assets/js/27.a533fa30.js",
    "revision": "b98804b5418261048cee600bff7d9217"
  },
  {
    "url": "assets/js/28.54711dbb.js",
    "revision": "120aff781be778e56e47ad3a939fff3c"
  },
  {
    "url": "assets/js/29.5c977d4c.js",
    "revision": "cf9b7fb811a246a13680d620da7488ad"
  },
  {
    "url": "assets/js/3.be215f0f.js",
    "revision": "36f81b22ac94aa442807cc5abc73ce00"
  },
  {
    "url": "assets/js/30.1c492c6a.js",
    "revision": "2145af3529c9d8621f9922d59f2bc2af"
  },
  {
    "url": "assets/js/31.d586466e.js",
    "revision": "dec776bb5e63e46f509b1bae2dbe1232"
  },
  {
    "url": "assets/js/32.c743cc70.js",
    "revision": "69b19c791c8e2c5435462c7a2b62dc93"
  },
  {
    "url": "assets/js/33.9e5aa8a9.js",
    "revision": "67d6d731329584ec081ff4f5659401a3"
  },
  {
    "url": "assets/js/34.77f005cf.js",
    "revision": "9821417860129fe76ecd9c5578ae6b6b"
  },
  {
    "url": "assets/js/35.c25f35b7.js",
    "revision": "4597c12cbf93d3fe3e8b88ef60a4f4dc"
  },
  {
    "url": "assets/js/36.25634fb6.js",
    "revision": "8d320432c63c6ee801b29c90fd80e099"
  },
  {
    "url": "assets/js/37.116d92a4.js",
    "revision": "c6fdc8fb1002759129d9b958d36f5570"
  },
  {
    "url": "assets/js/38.3472fda6.js",
    "revision": "7c028e9c39e7648608efe6db705e48aa"
  },
  {
    "url": "assets/js/39.6bfa91f7.js",
    "revision": "f17d72eb774c9ba5b29fe3238ff7d5e6"
  },
  {
    "url": "assets/js/4.497570d8.js",
    "revision": "961513f9356fe346862e3f5fd46f183c"
  },
  {
    "url": "assets/js/40.1b68a58a.js",
    "revision": "b2cd5d19c305e6a0469d68ba61ebd70b"
  },
  {
    "url": "assets/js/41.2cfcdadc.js",
    "revision": "c01668e3870dcf13ff2e99f47db856b8"
  },
  {
    "url": "assets/js/42.2a104831.js",
    "revision": "2f61f5c8ea8e3b74ad1dfec2fc872d19"
  },
  {
    "url": "assets/js/43.d2b9b58d.js",
    "revision": "09a05f921df12bb46ecf83f84016a4bf"
  },
  {
    "url": "assets/js/44.fec3473e.js",
    "revision": "d2aafeed1fd80dedf7e989f00db6d304"
  },
  {
    "url": "assets/js/45.3506d1d4.js",
    "revision": "aed0599f9a227a61efbc4166ae038984"
  },
  {
    "url": "assets/js/46.268c616e.js",
    "revision": "ac641ddc988e916b6b6b538db795045c"
  },
  {
    "url": "assets/js/47.c5b0d063.js",
    "revision": "c43575bcb3bd622d4441caecd1e75e97"
  },
  {
    "url": "assets/js/48.99caf639.js",
    "revision": "5843e27b340aacb554941d8d4a0407e7"
  },
  {
    "url": "assets/js/49.6a659b28.js",
    "revision": "d3699db69853f0d53e242ad26beb7584"
  },
  {
    "url": "assets/js/5.ca7ec9bd.js",
    "revision": "cf25a93b6b380cc298540d3f39619af8"
  },
  {
    "url": "assets/js/50.f2c8c20b.js",
    "revision": "8ceaf48f70341ab8c2b84cce18f24f1e"
  },
  {
    "url": "assets/js/51.901ae8d2.js",
    "revision": "a277ac4c849ef51b1c9d9c6c1a4d8a19"
  },
  {
    "url": "assets/js/52.613e04c5.js",
    "revision": "46fd792a6ed5f4297cee8f20c7856ebb"
  },
  {
    "url": "assets/js/53.6548d2e7.js",
    "revision": "bf24c7969ddbd5a3089d518616f371ec"
  },
  {
    "url": "assets/js/54.1e561e67.js",
    "revision": "32d3e208f681e9b2e2c778402a53dae3"
  },
  {
    "url": "assets/js/55.68999ff6.js",
    "revision": "39848afd08863d2f82a5f2dd0512eda7"
  },
  {
    "url": "assets/js/56.fe46ee62.js",
    "revision": "24c72603a4d10e372082738698e3b229"
  },
  {
    "url": "assets/js/57.842d3771.js",
    "revision": "ab17fd7a3a10fb342d80a9b39dee296f"
  },
  {
    "url": "assets/js/58.5d85857b.js",
    "revision": "e8c8b39384d026851685773daefe1530"
  },
  {
    "url": "assets/js/59.e4432d3d.js",
    "revision": "1534c89786d421b877c91cb152dade64"
  },
  {
    "url": "assets/js/6.0fef4826.js",
    "revision": "3de0a61015a9ce86e858856a6f132525"
  },
  {
    "url": "assets/js/60.14b3f55e.js",
    "revision": "aeb09109f0b6a460df0985d59ce1a2e2"
  },
  {
    "url": "assets/js/61.e65f60c0.js",
    "revision": "1075eb02cacab80834a359bf029ecfb4"
  },
  {
    "url": "assets/js/62.b41413e9.js",
    "revision": "0d34e3e25ec831a2a5e8b2e150191706"
  },
  {
    "url": "assets/js/63.729e0098.js",
    "revision": "c224fbe5aaca5c8e6ca1e78b42fc9db4"
  },
  {
    "url": "assets/js/64.6f35073e.js",
    "revision": "4ffb883a10e9287b0baf4cf8db481ad4"
  },
  {
    "url": "assets/js/65.196b8925.js",
    "revision": "75921a9709b5082de07c72c7f6e680dd"
  },
  {
    "url": "assets/js/66.92ab7070.js",
    "revision": "b3e90a24cb4a7858497de8f7b96824e7"
  },
  {
    "url": "assets/js/67.38995c7c.js",
    "revision": "a3ad997d26c379a1f029ab07bcb96597"
  },
  {
    "url": "assets/js/7.e3b3ae23.js",
    "revision": "29544c190d5bd5ae819736f76700dff1"
  },
  {
    "url": "assets/js/8.162b0443.js",
    "revision": "a33441ffdf489d834a9a3c9ccd878514"
  },
  {
    "url": "assets/js/9.9a857db9.js",
    "revision": "15d7c66ec1678a3ea5f74c2208fdb41c"
  },
  {
    "url": "assets/js/app.bbe8be07.js",
    "revision": "acc90c9340a6440bedf6db5ef798a442"
  },
  {
    "url": "assets/js/styles.28f45dcf.js",
    "revision": "2100da8c29053d683c4dd3f218b64f76"
  },
  {
    "url": "assets/js/vuejs-paginate.bb21aab9.js",
    "revision": "ec57bc97a655b64bab195cc0eb089aa0"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "a6ba27cda59681b95027f8c7b1e68bf6"
  },
  {
    "url": "browser/devtools.html",
    "revision": "5338b171d01f3a8af3113ee9bcada244"
  },
  {
    "url": "browser/index.html",
    "revision": "32bb9e04a58f68e4c18492a9b428fb4c"
  },
  {
    "url": "config/index.html",
    "revision": "f3022b2d35ecaa0fe169c5064e50de69"
  },
  {
    "url": "config/using-vue.html",
    "revision": "461d1af63e6d0e108ad76853bcc43a01"
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
    "url": "img/browser/d3-append.png",
    "revision": "95a3ea3c17f28fc2936a67ddbe75f36a"
  },
  {
    "url": "img/browser/devtools-snippets.png",
    "revision": "eea2f4f7bccd84fc3ce369c0965772f2"
  },
  {
    "url": "img/browser/web-technologies-milestones.png",
    "revision": "d64897b431cfcfa5439d15ce2f84159a"
  },
  {
    "url": "img/browser/web-trackers.png",
    "revision": "ab62204c0a7bdff2bea63fc06e2fd8b5"
  },
  {
    "url": "img/browser/webpack-png-2-webp.png",
    "revision": "d53cb16564e9b1e96e25c63f47946e0b"
  },
  {
    "url": "img/compiler/32bit-js-primitives-allocation.png",
    "revision": "2b4a0af1e5bb45d7ca7caa500a413375"
  },
  {
    "url": "img/compiler/64bit-js-primitives-allocation.png.png",
    "revision": "e7f6d27d6c8c135853cade502e259262"
  },
  {
    "url": "img/compiler/chrome-optimised-script-loader.png",
    "revision": "4ca4278d85ad095770bb6227d34d981d"
  },
  {
    "url": "img/compiler/cpu-memory-hierarchy.png",
    "revision": "38cf8c709b55b74fc908ba79c38948be"
  },
  {
    "url": "img/compiler/how-browser-loads-scripts.png",
    "revision": "68fffc790beda44b8a7b688b096937ad"
  },
  {
    "url": "img/compiler/l1-l2-l3-cache-sizes.png",
    "revision": "102a4435c83a915f69acb24447ac1609"
  },
  {
    "url": "img/compiler/machine-code-for-regex-dot-751-bytes.png",
    "revision": "00b96848b4af5d9038180cfdc1cb9be6"
  },
  {
    "url": "img/compiler/pointer-compression.png",
    "revision": "b873b254dd966aabfcd5b8d5543fd6c0"
  },
  {
    "url": "img/compiler/script-execution-time-on-major-websites.png",
    "revision": "2feadb2c97b87df0d44b4e9759df3301"
  },
  {
    "url": "img/compiler/v8-time-distribution-facebook.png",
    "revision": "3ae398315c589b1293fe3c5803ffda08"
  },
  {
    "url": "img/tests/jest-report.png",
    "revision": "2f2bf403c76f9dfbfe4b35fc9ecf7801"
  },
  {
    "url": "img/tests/js__proto__.png",
    "revision": "0b70ef923c2958ce955918e16b0450c5"
  },
  {
    "url": "img/tests/mocking_fn_properties.png",
    "revision": "157442e7e1ecbb8d502950d10436b879"
  },
  {
    "url": "index.html",
    "revision": "a1c774f3570ad1adcee99cbd62a9e6ba"
  },
  {
    "url": "javascript/asynchronous.html",
    "revision": "e2de2e6f7b4eca4aa3711ea0fa550f5a"
  },
  {
    "url": "javascript/compiler.html",
    "revision": "175d6baba259a141fe65092efa147080"
  },
  {
    "url": "javascript/debug.html",
    "revision": "7349a04a2a02b8ad2311273842add818"
  },
  {
    "url": "javascript/destructuring.html",
    "revision": "2b935cccb595993a99dd9c26055f1db9"
  },
  {
    "url": "javascript/devtools.html",
    "revision": "5282a0e339fcef842d79f7c084eefa66"
  },
  {
    "url": "javascript/es6.html",
    "revision": "0c8930676fb730b162bb572df38103f7"
  },
  {
    "url": "javascript/eventloop.html",
    "revision": "a529db85ae1bae39285ab896cadb7783"
  },
  {
    "url": "javascript/iife.html",
    "revision": "79d02ab2b2a1fcfd31a3d55e7f562c56"
  },
  {
    "url": "javascript/index.html",
    "revision": "11cbbc72701d303e30f002419cf4f85a"
  },
  {
    "url": "javascript/jsengine.html",
    "revision": "59c6ac716dad43964af8bac5bbfc6f6c"
  },
  {
    "url": "javascript/jstesting.html",
    "revision": "b5bd0eafa39e15e9c0ca9d349ea9ece7"
  },
  {
    "url": "javascript/modules.html",
    "revision": "8e360e926d7fb2cceec367cf73b7a94d"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "574a79aa32f67f79f2ed8a9e52ee71e1"
  },
  {
    "url": "javascript/objects.html",
    "revision": "d29e83b5dd2d1053a4fa503fb054f98d"
  },
  {
    "url": "javascript/perfromance.html",
    "revision": "b01f4d07773ea56b80efc81840fe0e26"
  },
  {
    "url": "javascript/polymer.html",
    "revision": "1420e1441ddd2662351e50783f613949"
  },
  {
    "url": "javascript/promise.html",
    "revision": "619fa84010fafee5ebb17e3e6c2186ee"
  },
  {
    "url": "javascript/proto.html",
    "revision": "39140163b3a908e335e58d78c798b229"
  },
  {
    "url": "javascript/todo.html",
    "revision": "e7ec98d7ed90bb55ec43f0e8e91d6974"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "16dfb5f6a0b36f251a414cb960bbad3c"
  },
  {
    "url": "javascript/v8engine.html",
    "revision": "70af64d8ebe815a3f35d6b7c772cdfd8"
  },
  {
    "url": "javascript/wasm.html",
    "revision": "cc4c98bb7a44a1b9be519fe13c1dc3eb"
  },
  {
    "url": "libraries/d3js.html",
    "revision": "943facee730910f88f7ec006ac55b9cd"
  },
  {
    "url": "libraries/index.html",
    "revision": "42b05468b7ee34c03e2815539aeb71fa"
  },
  {
    "url": "libraries/rxjs.html",
    "revision": "56a4615fd1aafe1f8eeeda043e18f7b9"
  },
  {
    "url": "libraries/vue-cli.html",
    "revision": "6523aad4f90b31c3de545826fb2ac53c"
  },
  {
    "url": "libraries/vuejs.html",
    "revision": "edd03e6e3c006d7f907fea83e89c5cd5"
  },
  {
    "url": "material.html",
    "revision": "c72b6aeb3c25584f12cae95985199c44"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "bec676e33cf678d033dfd549ffc74c28"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "fa3718918ce8a35767a16a79438b7b4b"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "e59765ec823385ff87e0b8e6c0ce8a5f"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "ed7aa5ecdf7f255428cf0e171e0e3feb"
  },
  {
    "url": "posts/index.html",
    "revision": "1891b75b4d50ae59c5ca6632d219f4ce"
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
    "revision": "1a26f390fc950fc876fb24af5b8641ca"
  },
  {
    "url": "tutorial/arrays.html",
    "revision": "ef877b672e7971ee64430b4aa58abcb9"
  },
  {
    "url": "tutorial/css.html",
    "revision": "5b5399b41f5c13a231e3b885b88641a4"
  },
  {
    "url": "tutorial/history.html",
    "revision": "f241b37a697a1fbf8a6542892b933ab2"
  },
  {
    "url": "tutorial/index.html",
    "revision": "70b1b3c3c3c1ba72ec8f70f0052c2ff4"
  },
  {
    "url": "tutorial/modular.html",
    "revision": "61c8ad5a9dbceb011cb30ec18c8dc1e3"
  },
  {
    "url": "tutorial/primitives.html",
    "revision": "9232bf0db7d7c9f8e207c14f3f5c7644"
  },
  {
    "url": "tutorial/regex.html",
    "revision": "ce6a5646db204dc2817e3fc26149b0bf"
  },
  {
    "url": "tutorial/webpack.html",
    "revision": "a7d46748e4431421125c5d084d2ee45d"
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
