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
    "revision": "bd4295ed12d4a26c2d5e6196f5b939b4"
  },
  {
    "url": "apis/github.html",
    "revision": "4cde88d440803510eb05fc2ada4c8c68"
  },
  {
    "url": "apis/index.html",
    "revision": "7bf680799da3f23c10aff159ddb447e2"
  },
  {
    "url": "assets/css/0.styles.bdbbb048.css",
    "revision": "bb301ce6b32b9bce97b693bc49510871"
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
    "url": "assets/js/10.418a45d5.js",
    "revision": "5b35767489e52b0c28687eb7c9d83c89"
  },
  {
    "url": "assets/js/11.868ddd60.js",
    "revision": "fd786417f18baacf6ddd609a6458a527"
  },
  {
    "url": "assets/js/12.5018fc8f.js",
    "revision": "9136d0754fb2540451fea49ac840525b"
  },
  {
    "url": "assets/js/13.269df15c.js",
    "revision": "8d9c1c9fb9cac02bfcf070c72c81575b"
  },
  {
    "url": "assets/js/14.a3ee9cc4.js",
    "revision": "5fbad767023296f8169961f5b5a3513b"
  },
  {
    "url": "assets/js/15.729aca4d.js",
    "revision": "504f1dc98b1c6a6f60d49f8f0e87cab5"
  },
  {
    "url": "assets/js/16.e0564e45.js",
    "revision": "9e73d515f18590ef2797b79f99e52d25"
  },
  {
    "url": "assets/js/17.e4c7617d.js",
    "revision": "e69b01a141f5d7085d1c93bb1a15f87d"
  },
  {
    "url": "assets/js/18.ae0b9f17.js",
    "revision": "f2f792a4876a94e058bf8030154bfc22"
  },
  {
    "url": "assets/js/19.2259cfa3.js",
    "revision": "941c45dc460be2bc212f5b7c28aedbe8"
  },
  {
    "url": "assets/js/20.fa4d944c.js",
    "revision": "4755b22394fa95e1c028e8e8e6e41b02"
  },
  {
    "url": "assets/js/21.03ac37ba.js",
    "revision": "21123e17ee9cb14c59358143c6bede19"
  },
  {
    "url": "assets/js/22.6ac7c039.js",
    "revision": "24d83bda684d15d4f40777d4438fa5e0"
  },
  {
    "url": "assets/js/23.d640a810.js",
    "revision": "e11136a17cbc23e15308712f440e8c73"
  },
  {
    "url": "assets/js/24.0ef1e2f2.js",
    "revision": "60fa3efbccb94044e7a80ee97ec5ef31"
  },
  {
    "url": "assets/js/25.ea0b515e.js",
    "revision": "8df436383fdb3813c6881e691812dd47"
  },
  {
    "url": "assets/js/26.3375ee12.js",
    "revision": "d7988fa71bdb008285f8b6cad6279c27"
  },
  {
    "url": "assets/js/27.904b4268.js",
    "revision": "3d439ae26907b2ee74d7d0aa974d5420"
  },
  {
    "url": "assets/js/28.8988b533.js",
    "revision": "c585ab050b80058de9b41cba42a59188"
  },
  {
    "url": "assets/js/29.74a3423c.js",
    "revision": "48443848e17d362f5cb737163eed7632"
  },
  {
    "url": "assets/js/3.5d0651f9.js",
    "revision": "cca710d696d4bbb57e935be018441392"
  },
  {
    "url": "assets/js/30.2471f27c.js",
    "revision": "5e804da6751d51ba1bf0aae05e7c8286"
  },
  {
    "url": "assets/js/31.76815e0d.js",
    "revision": "f1a5c536a2c1e531314886a346920133"
  },
  {
    "url": "assets/js/32.5f23bd5c.js",
    "revision": "2f4752ae06de51d8e54dcdcc6b8ad000"
  },
  {
    "url": "assets/js/33.4d02b264.js",
    "revision": "2a4fcecc6d0eb03789974d37b7ed9f13"
  },
  {
    "url": "assets/js/34.1bd1c78c.js",
    "revision": "d05d19a9c73a9cc5e67334e37d73862b"
  },
  {
    "url": "assets/js/35.c25f35b7.js",
    "revision": "4597c12cbf93d3fe3e8b88ef60a4f4dc"
  },
  {
    "url": "assets/js/36.667ed531.js",
    "revision": "de05a1c9e2a4eda68dc238bb315923ab"
  },
  {
    "url": "assets/js/37.116d92a4.js",
    "revision": "c6fdc8fb1002759129d9b958d36f5570"
  },
  {
    "url": "assets/js/38.3c9b1910.js",
    "revision": "1b6dadab637e2103dc2f84235a782fda"
  },
  {
    "url": "assets/js/39.569220e3.js",
    "revision": "a6d4fc15bf1a66a56355851b824a5bb1"
  },
  {
    "url": "assets/js/4.fc9df1e1.js",
    "revision": "d1f8de587ced3d1696092528f9b666c0"
  },
  {
    "url": "assets/js/40.b6574596.js",
    "revision": "fa537dd918f4b158fcb946376275c7fc"
  },
  {
    "url": "assets/js/41.dc171b02.js",
    "revision": "483e99eda2e1273209ec89bad513263f"
  },
  {
    "url": "assets/js/42.7b72507d.js",
    "revision": "65113b8decd513c424b7e6f768d878fb"
  },
  {
    "url": "assets/js/43.cb86ed39.js",
    "revision": "d2dc7ee6ce64af4ea8c0d86a67508052"
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
    "url": "assets/js/46.7fccc550.js",
    "revision": "321136af9769dfacb3511e97bab52ee1"
  },
  {
    "url": "assets/js/47.c54223da.js",
    "revision": "7c3dd6e8c6a32ae3a5a6c9acf9bdcca0"
  },
  {
    "url": "assets/js/48.1c8ee65a.js",
    "revision": "bfdb3743408f100bb2289bc9a01ff503"
  },
  {
    "url": "assets/js/49.8f393ec5.js",
    "revision": "fda1e09739a2a7a95068ecfea93d4eca"
  },
  {
    "url": "assets/js/5.4df5a1a1.js",
    "revision": "bbd237b67c2d8ba3ea8d5e026c471b88"
  },
  {
    "url": "assets/js/50.a4777056.js",
    "revision": "61a56118ea2d1c076d0618771eb74106"
  },
  {
    "url": "assets/js/51.3e59c6c6.js",
    "revision": "1ea672c01f0f08ae54d873d5dea8dfda"
  },
  {
    "url": "assets/js/52.b28f9151.js",
    "revision": "2608cdb107903e258296660fe9d53f72"
  },
  {
    "url": "assets/js/53.f2869e50.js",
    "revision": "26c30d543933e2cf28dfaffae4bd5fdc"
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
    "url": "assets/js/56.02dbfb64.js",
    "revision": "f6a4dbf163e28c15128d5536d39e0982"
  },
  {
    "url": "assets/js/57.2cbf403a.js",
    "revision": "1432759b359686e39e979851e57519b6"
  },
  {
    "url": "assets/js/58.5d85857b.js",
    "revision": "e8c8b39384d026851685773daefe1530"
  },
  {
    "url": "assets/js/59.2097eebd.js",
    "revision": "ca8e60ee7a5a67a1812a18824ef759c8"
  },
  {
    "url": "assets/js/6.4d29f1d1.js",
    "revision": "8d8dbaa12664075889dbb0fa6ad8f979"
  },
  {
    "url": "assets/js/60.299d5eb9.js",
    "revision": "b8c703676c117eff5cd527ce0e93b7d8"
  },
  {
    "url": "assets/js/61.86ee1990.js",
    "revision": "d7a3ffa4c3410c8944abf49c63087973"
  },
  {
    "url": "assets/js/62.9cfb08c9.js",
    "revision": "d2147b373a0c8d7fa4f4423b3afa5db8"
  },
  {
    "url": "assets/js/63.aac216ac.js",
    "revision": "da66d0698f1b6472a7282e7c13afbc50"
  },
  {
    "url": "assets/js/64.3b68300d.js",
    "revision": "ad729ce3f426634ded857591d544b819"
  },
  {
    "url": "assets/js/65.5ebcd7e8.js",
    "revision": "eeb6782f023ce02bc741ca0d789b9fc3"
  },
  {
    "url": "assets/js/66.0b7545c0.js",
    "revision": "c9a771d0246c81e8de232a04a86dde79"
  },
  {
    "url": "assets/js/67.b86f0fd1.js",
    "revision": "15f4a5a7a098301708c5c5d3e00e2f77"
  },
  {
    "url": "assets/js/7.445b1ed6.js",
    "revision": "8d4064f0cbad7c76db526c6f761e2afb"
  },
  {
    "url": "assets/js/8.dfaf496f.js",
    "revision": "1a835e96e29dcacb3b638ccc54ed75d3"
  },
  {
    "url": "assets/js/9.3fba009e.js",
    "revision": "029afda079873a2d407fe70b0c6fa0bf"
  },
  {
    "url": "assets/js/app.0fcf4b70.js",
    "revision": "cabe9a2758cd3365ee55268521af4840"
  },
  {
    "url": "assets/js/styles.bdbbb048.js",
    "revision": "56bfda1a9b90212b879a4fd02f26c8d1"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "a482b31317e43b6df1f42ad7af752252"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "03561d6ea1e8888c6a9f5811c26413c0"
  },
  {
    "url": "browser/devtools.html",
    "revision": "a20dc38ebd9e8da2db41ab860d145b46"
  },
  {
    "url": "browser/index.html",
    "revision": "fc5e5b600fb3a570ee2bbcb890b98588"
  },
  {
    "url": "config/index.html",
    "revision": "b7a44d26ab8e6fd50f8948f6b2295816"
  },
  {
    "url": "config/using-vue.html",
    "revision": "7990c3acac5766c57796ad9554b78311"
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
    "revision": "90eb4786d3f05f959eb07d552a2ef11f"
  },
  {
    "url": "javascript/asynchronous.html",
    "revision": "0d0ea9fe200356d77bbac3628b718e61"
  },
  {
    "url": "javascript/compiler.html",
    "revision": "9a04e342abc44aa5e00b138b7621b000"
  },
  {
    "url": "javascript/debug.html",
    "revision": "bf542ca8563fa43662a2bc4774c85889"
  },
  {
    "url": "javascript/destructuring.html",
    "revision": "d77493654cdae48d4d42bd463e3fddfa"
  },
  {
    "url": "javascript/devtools.html",
    "revision": "7acb3f973e8ae2b4a44f5d627fd35b41"
  },
  {
    "url": "javascript/es6.html",
    "revision": "4d81da54cfbfbe4bf73b4c733f12b83c"
  },
  {
    "url": "javascript/eventloop.html",
    "revision": "dd3404c7ee33310f04ee0b908d5fc7f6"
  },
  {
    "url": "javascript/iife.html",
    "revision": "eeecfa677a6507d4de793b20b99bb0e6"
  },
  {
    "url": "javascript/index.html",
    "revision": "e2234e711dc7f8bf0fddfa716b416532"
  },
  {
    "url": "javascript/jsengine.html",
    "revision": "9331189e94ea52b2a9863cbf9bf75118"
  },
  {
    "url": "javascript/jstesting.html",
    "revision": "b75547470d848823c0e6b7191772e449"
  },
  {
    "url": "javascript/modules.html",
    "revision": "d038704d85e4360b748e4637cfa4a4dc"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "a4b5ca4d96af9dcb18331c4d37b1d6de"
  },
  {
    "url": "javascript/objects.html",
    "revision": "94e7da0ebf340b666f08286d52354044"
  },
  {
    "url": "javascript/perfromance.html",
    "revision": "a98fe5757f1f2231a26aec676bb4a3eb"
  },
  {
    "url": "javascript/polymer.html",
    "revision": "3c2867a56d56cb0a36d9ec51b7cb4518"
  },
  {
    "url": "javascript/promise.html",
    "revision": "f424e578c64c9925875582ab33d8e82a"
  },
  {
    "url": "javascript/proto.html",
    "revision": "ae7250295698b3eb602932759d1c044d"
  },
  {
    "url": "javascript/todo.html",
    "revision": "10b45a571c45c5a60dc9a7cd430f8fcd"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "f1864203272e6577c16a90d186b0beef"
  },
  {
    "url": "javascript/v8engine.html",
    "revision": "47d646e52ea62c08af54a1fed2f6d6b2"
  },
  {
    "url": "javascript/wasm.html",
    "revision": "034ec49345f4650ec81f631b74f0ad53"
  },
  {
    "url": "libraries/d3js.html",
    "revision": "e4aee7fda09dc6caf3fd33068e0020d5"
  },
  {
    "url": "libraries/index.html",
    "revision": "8eb9aaaec1a36e3de3129fa690d53945"
  },
  {
    "url": "libraries/rxjs.html",
    "revision": "608cef512f3ce7341d9ec8a9310864c8"
  },
  {
    "url": "libraries/vue-cli.html",
    "revision": "9054654309f3f1a68afbecda58dc1648"
  },
  {
    "url": "libraries/vuejs.html",
    "revision": "516a13854722bef1b66bacd397f492e5"
  },
  {
    "url": "material.html",
    "revision": "d1a79e358270dab31e71b8b2c000c6dc"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "b62aa96b62cefd164465c9b8230f8844"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "5cd9ee3349b8a57b753dab87ec955f20"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "191c21ed089582abd89daa1a538f8016"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "eb9dc05a4c4595da5112a9f082029371"
  },
  {
    "url": "posts/index.html",
    "revision": "16aa85545fb4c67682faaf095ff32f0e"
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
    "revision": "a3d16f88e6afb94014645965efd03dcb"
  },
  {
    "url": "tutorial/arrays.html",
    "revision": "74df252b5c819b8faee5118d5939bb61"
  },
  {
    "url": "tutorial/css.html",
    "revision": "429b1e1003a814cfbb8a94cde9a278ff"
  },
  {
    "url": "tutorial/history.html",
    "revision": "fdfe0e951b6c0d3a0539c54d168ca6cd"
  },
  {
    "url": "tutorial/index.html",
    "revision": "29e3f1b88996a8a5c409042d4928367c"
  },
  {
    "url": "tutorial/modular.html",
    "revision": "9a60100752cfb82bf8016ef9b1f6dd30"
  },
  {
    "url": "tutorial/primitives.html",
    "revision": "561db748a59c75a1568dbea3723ad372"
  },
  {
    "url": "tutorial/regex.html",
    "revision": "b530bab6d1b7038eafc0221d15a5f36d"
  },
  {
    "url": "tutorial/webpack.html",
    "revision": "7db71de5657b0e01b0f7cee81c5aeb2a"
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
