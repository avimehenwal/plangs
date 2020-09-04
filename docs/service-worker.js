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
    "revision": "8e95e571df8ef12dc321fea985e51670"
  },
  {
    "url": "apis/github.html",
    "revision": "f8b10db5aa820fd8ec75d44486b514f3"
  },
  {
    "url": "apis/index.html",
    "revision": "53ec2132a7666143fea6b5b00a3b1fff"
  },
  {
    "url": "assets/css/0.styles.0cb3c30d.css",
    "revision": "950182068a041c2a85996eed86d10c9e"
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
    "url": "assets/js/11.3dfcad98.js",
    "revision": "02967de400b7d29625e3549430a924bd"
  },
  {
    "url": "assets/js/12.b608eda5.js",
    "revision": "cac347210acc87abe11742a0e0b3c7e9"
  },
  {
    "url": "assets/js/13.aeacd4c9.js",
    "revision": "abfa702176aa11e942bbde15ba90fd18"
  },
  {
    "url": "assets/js/14.ff4e3e1a.js",
    "revision": "919aea75e582cbf8329d90e220b41194"
  },
  {
    "url": "assets/js/15.fc908a45.js",
    "revision": "ce18c804b08ac12c0af2f588cdc02cb2"
  },
  {
    "url": "assets/js/16.36c2a119.js",
    "revision": "20bf0b1eaa38c9ba0d6b232ccbe1e79c"
  },
  {
    "url": "assets/js/17.62de1730.js",
    "revision": "467208c0b582c74900d725465001a080"
  },
  {
    "url": "assets/js/18.c897ff7b.js",
    "revision": "0d0b71e825018cf3e61469945452c31e"
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
    "url": "assets/js/23.aacf3fdd.js",
    "revision": "34df1d8e20552dd33c7fcb4b949d3177"
  },
  {
    "url": "assets/js/24.f4c2931f.js",
    "revision": "c76fe80488359a51d2583a8c1f0afe9b"
  },
  {
    "url": "assets/js/25.85676408.js",
    "revision": "f1a995e3d4edd1fbe4d20765918af06c"
  },
  {
    "url": "assets/js/26.33a06df1.js",
    "revision": "a9d5053d5ffb4b4f2fee87ae770fcd8a"
  },
  {
    "url": "assets/js/27.904b4268.js",
    "revision": "3d439ae26907b2ee74d7d0aa974d5420"
  },
  {
    "url": "assets/js/28.54711dbb.js",
    "revision": "120aff781be778e56e47ad3a939fff3c"
  },
  {
    "url": "assets/js/29.fccf2264.js",
    "revision": "efc6446539297eb28422447be92b12cd"
  },
  {
    "url": "assets/js/3.be215f0f.js",
    "revision": "36f81b22ac94aa442807cc5abc73ce00"
  },
  {
    "url": "assets/js/30.59e84f30.js",
    "revision": "092b8cf717d3f11c1d281e36bddf8dd7"
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
    "url": "assets/js/33.4d02b264.js",
    "revision": "2a4fcecc6d0eb03789974d37b7ed9f13"
  },
  {
    "url": "assets/js/34.77f005cf.js",
    "revision": "9821417860129fe76ecd9c5578ae6b6b"
  },
  {
    "url": "assets/js/35.e10dd998.js",
    "revision": "686df994a2f6a27bf03b74c3ac6c4394"
  },
  {
    "url": "assets/js/36.25634fb6.js",
    "revision": "8d320432c63c6ee801b29c90fd80e099"
  },
  {
    "url": "assets/js/37.eeffa1c8.js",
    "revision": "0d7bdf1d2634456e78a54e729a47f463"
  },
  {
    "url": "assets/js/38.688cea18.js",
    "revision": "86e18e7b4502f8b70fbe087cdae1422e"
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
    "url": "assets/js/40.ef5bde37.js",
    "revision": "b28d4a111b39fbd3f6b432b1e40f475a"
  },
  {
    "url": "assets/js/41.0f498cdc.js",
    "revision": "002e95a96bf7c3d478ec51680398b579"
  },
  {
    "url": "assets/js/42.7b72507d.js",
    "revision": "65113b8decd513c424b7e6f768d878fb"
  },
  {
    "url": "assets/js/43.d2b9b58d.js",
    "revision": "09a05f921df12bb46ecf83f84016a4bf"
  },
  {
    "url": "assets/js/44.b0d0e64e.js",
    "revision": "9859f1563a997dd8917ce974ca26ca0e"
  },
  {
    "url": "assets/js/45.309bb028.js",
    "revision": "81ccdf1eaab097437e270a6b5cc4f280"
  },
  {
    "url": "assets/js/46.d0440d04.js",
    "revision": "30548ad680cebe6f590fa0705fbe8f62"
  },
  {
    "url": "assets/js/47.c5b0d063.js",
    "revision": "c43575bcb3bd622d4441caecd1e75e97"
  },
  {
    "url": "assets/js/48.ef41bc46.js",
    "revision": "1564f34abb8a57d36d7833fd4059203e"
  },
  {
    "url": "assets/js/49.5d565a36.js",
    "revision": "4da393c5d9c9344ef5ec4d2a252e8fd0"
  },
  {
    "url": "assets/js/5.ca7ec9bd.js",
    "revision": "cf25a93b6b380cc298540d3f39619af8"
  },
  {
    "url": "assets/js/50.a4777056.js",
    "revision": "61a56118ea2d1c076d0618771eb74106"
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
    "url": "assets/js/53.4e04257f.js",
    "revision": "9e4c34b44b15e8c50a5681da5882acec"
  },
  {
    "url": "assets/js/54.3a9321b9.js",
    "revision": "c742e56b4bd49238b79ce25616cf72f4"
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
    "url": "assets/js/57.bf03b711.js",
    "revision": "f0d95bf6f7041a801ac91e1a4e442064"
  },
  {
    "url": "assets/js/58.633cc242.js",
    "revision": "1147cc3ded40eeab2dcf400c97982540"
  },
  {
    "url": "assets/js/59.7cc985bd.js",
    "revision": "5f5102601db7a0749fdd2981c7f0a9d4"
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
    "url": "assets/js/61.cb204fb5.js",
    "revision": "90dbe194429c6e11337b3c02e26d0ee8"
  },
  {
    "url": "assets/js/62.b9248aaa.js",
    "revision": "c048c32cab29a5507c82400570fe2bae"
  },
  {
    "url": "assets/js/63.89f5713e.js",
    "revision": "a97c5fa32ce7e0d4a0b92375988ecc85"
  },
  {
    "url": "assets/js/64.fb8f6de2.js",
    "revision": "1e8470ac5c90675c0aef14a6e821be78"
  },
  {
    "url": "assets/js/65.df7ad794.js",
    "revision": "5ae8ecb3b46bd0b4f8f7a30f2000bc33"
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
    "url": "assets/js/app.45eee347.js",
    "revision": "d2fe9d43498e3e2409e780f3ecf3d5b4"
  },
  {
    "url": "assets/js/styles.0cb3c30d.js",
    "revision": "7c290c7945ee985c58b2a3bd65dedfcd"
  },
  {
    "url": "assets/js/vuejs-paginate.bb21aab9.js",
    "revision": "ec57bc97a655b64bab195cc0eb089aa0"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "a9cde0cce1a859ac8594a09be818c418"
  },
  {
    "url": "browser/devtools.html",
    "revision": "507c57f95a5dd581a07bcf5ecbc52a32"
  },
  {
    "url": "browser/index.html",
    "revision": "69912f54e92ec0c474a71e555d1617b2"
  },
  {
    "url": "config/index.html",
    "revision": "9b0bae962c15d78b6bb854fc8a32c1ae"
  },
  {
    "url": "config/using-vue.html",
    "revision": "200785464eb7081b02ca72991cd07a17"
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
    "revision": "fd0641777cae91ee279317eb28aff629"
  },
  {
    "url": "javascript/asynchronous.html",
    "revision": "dc6c3c09b9a657c66c707b6cb578c3d9"
  },
  {
    "url": "javascript/compiler.html",
    "revision": "ea420b8ea857aff550de1e94a52bf413"
  },
  {
    "url": "javascript/debug.html",
    "revision": "52987bba6478dda0aea4b0231481e345"
  },
  {
    "url": "javascript/destructuring.html",
    "revision": "59ab7e564d855215a259de13a4b48a7e"
  },
  {
    "url": "javascript/devtools.html",
    "revision": "138cae1eb19f7eb0a4a2de5ffa7fb5e3"
  },
  {
    "url": "javascript/es6.html",
    "revision": "038f5eb4c25d1682473486355961c374"
  },
  {
    "url": "javascript/eventloop.html",
    "revision": "97bba216c3d0cd3cdf33f7645c403cdf"
  },
  {
    "url": "javascript/iife.html",
    "revision": "743ada89eb6da34730bb1be370388950"
  },
  {
    "url": "javascript/index.html",
    "revision": "85f4d7b1d4d29a1c97d18505c23332a3"
  },
  {
    "url": "javascript/jsengine.html",
    "revision": "144b344a19035511c0864eae671b7a03"
  },
  {
    "url": "javascript/jstesting.html",
    "revision": "25bc08e78cbb34a9f2e75774015bfcbd"
  },
  {
    "url": "javascript/modules.html",
    "revision": "6869c1960d4ba4786a42f481a2ca7705"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "c60d9ea9370b7a361f1745dd8af4d55d"
  },
  {
    "url": "javascript/objects.html",
    "revision": "41e36478548cd6b0d754eb99ef950763"
  },
  {
    "url": "javascript/perfromance.html",
    "revision": "0ac2b1834b713df2b5b81197c5323bb4"
  },
  {
    "url": "javascript/polymer.html",
    "revision": "7343a2ec5217018b2a272f2f8782d229"
  },
  {
    "url": "javascript/promise.html",
    "revision": "a3d0d70852d7098f11b76220b8fe7517"
  },
  {
    "url": "javascript/proto.html",
    "revision": "a826f9cf6d2b2d3d59be0d8b7fd6a4f6"
  },
  {
    "url": "javascript/todo.html",
    "revision": "ade5144d8cd184c545ff2526ff819d5f"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "a93c1c8d1ff4faa376107c232b175651"
  },
  {
    "url": "javascript/v8engine.html",
    "revision": "22ea81258aaa57080bba1aaf9d1a2aa0"
  },
  {
    "url": "javascript/wasm.html",
    "revision": "afe9b1ac0897bda7894dd4b636c32f75"
  },
  {
    "url": "libraries/d3js.html",
    "revision": "a141494e1ef7f3e39e8127cdb877c21d"
  },
  {
    "url": "libraries/index.html",
    "revision": "07348dc76ec13cfb58a65dd3c453a79f"
  },
  {
    "url": "libraries/rxjs.html",
    "revision": "3a9824367f0ab9f07489c963915c505c"
  },
  {
    "url": "libraries/vue-cli.html",
    "revision": "2825ccf5b0341a2b6f95e659a2d54be4"
  },
  {
    "url": "libraries/vuejs.html",
    "revision": "75f86fd68285363bea90549ae6564b50"
  },
  {
    "url": "material.html",
    "revision": "2f3f6fc8a84ecbc11232e706eefe5253"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "dd5f34eb41c67c2b147df379b4247769"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "ab2cd136e72087c0976ecd91c2f7a7d4"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "52221ab820b591bb1c304a07b910c017"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "b29085072aa4e4cec80408f89ab93f27"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "6e3d11faa1dce3b88eae4d1440ae3934"
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
    "revision": "62e9e473c14970ac17e4a73be6250f70"
  },
  {
    "url": "tutorial/arrays.html",
    "revision": "669496117bc6a0fe670425d54b04f23e"
  },
  {
    "url": "tutorial/css.html",
    "revision": "426732f51ec34356982d3be514084b10"
  },
  {
    "url": "tutorial/history.html",
    "revision": "dc94e20db4d38c98d812ca269e237c63"
  },
  {
    "url": "tutorial/index.html",
    "revision": "6e890cee4044ce840d4772d70d80f73f"
  },
  {
    "url": "tutorial/modular.html",
    "revision": "ee04ed8babd691d36c895f857d000fea"
  },
  {
    "url": "tutorial/primitives.html",
    "revision": "b2917fc595e35a91e0461c1f0771c5ca"
  },
  {
    "url": "tutorial/regex.html",
    "revision": "3e0962919b41504367a81c6dfef11e4a"
  },
  {
    "url": "tutorial/webpack.html",
    "revision": "e4fd6cdb7e7d6807c8f06fe996937849"
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
