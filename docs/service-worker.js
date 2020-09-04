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
    "revision": "127701edb944baacf0a892466c3c4401"
  },
  {
    "url": "apis/github.html",
    "revision": "a2a51092da574424ec1f63954e45d697"
  },
  {
    "url": "apis/index.html",
    "revision": "82607816887bc5fa667a8a2b082e8daf"
  },
  {
    "url": "assets/css/0.styles.9249670b.css",
    "revision": "59416e2c31bdc0ccb62f6618f6861127"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.606f89b6.js",
    "revision": "1a696f88f29f9c652b4ed33b1c551289"
  },
  {
    "url": "assets/js/11.6476cec6.js",
    "revision": "c62827c23477138eb4f9e32680f21757"
  },
  {
    "url": "assets/js/12.eddbd0fc.js",
    "revision": "37e17a839c0c6d9a7a586906479c7cd1"
  },
  {
    "url": "assets/js/13.6a91a7dc.js",
    "revision": "2797ea328ce43ac8c757f2531740b3fd"
  },
  {
    "url": "assets/js/14.e127144d.js",
    "revision": "d6d9644306611f7aa737673c5ce4fdf5"
  },
  {
    "url": "assets/js/15.453e4872.js",
    "revision": "b8de8e782cdceb02512dfd4c8809293b"
  },
  {
    "url": "assets/js/16.abe67b9a.js",
    "revision": "c8b4644469cfe90acf9bdf2c369e7c28"
  },
  {
    "url": "assets/js/17.b9db5792.js",
    "revision": "68c5c0e517ac17558090771de655bffa"
  },
  {
    "url": "assets/js/18.9b96b386.js",
    "revision": "07c806929a29960c553bb658bb63aa95"
  },
  {
    "url": "assets/js/19.5756c0cc.js",
    "revision": "128a80ab2c6da729d3ba748e06bb4574"
  },
  {
    "url": "assets/js/20.c5c9ea12.js",
    "revision": "871de5b7a2d14cf3b5706c82e5b0fb34"
  },
  {
    "url": "assets/js/21.2922446f.js",
    "revision": "e0776d79ebe0506b5217ef499cda2c17"
  },
  {
    "url": "assets/js/22.860b98cf.js",
    "revision": "a63b7ca1b79d58b345f41168559725df"
  },
  {
    "url": "assets/js/23.f54c7790.js",
    "revision": "95393983c02a04e9d1a10f31916df6e6"
  },
  {
    "url": "assets/js/24.2edcd606.js",
    "revision": "537c8d6202a6e7191038a5738d0448ad"
  },
  {
    "url": "assets/js/25.1eb1c27c.js",
    "revision": "7594df206bafdb925f41a5dc61751b0b"
  },
  {
    "url": "assets/js/26.19ca7a13.js",
    "revision": "bcf53ef6ce1d2e735006764dce60ef93"
  },
  {
    "url": "assets/js/27.a74e0b81.js",
    "revision": "df21a50d07dfe82a1a7574c0817b7796"
  },
  {
    "url": "assets/js/28.3224b488.js",
    "revision": "e735da45fed6622b554477ba3bbfa136"
  },
  {
    "url": "assets/js/29.3b943e8c.js",
    "revision": "7766c530f40e991c91cc5c03c29c3b14"
  },
  {
    "url": "assets/js/3.f50cfa25.js",
    "revision": "5849dcd4468cbb0ef97e289a470d78fb"
  },
  {
    "url": "assets/js/30.23c4ed87.js",
    "revision": "593138696e6500672e4ce31f04f01334"
  },
  {
    "url": "assets/js/31.d6898966.js",
    "revision": "a8696bc082d3e43c81c8427ca46ec960"
  },
  {
    "url": "assets/js/32.7941216f.js",
    "revision": "c023da68d58c86fe07161715603fd3f7"
  },
  {
    "url": "assets/js/33.445a60ce.js",
    "revision": "2c1ce0bbfe7fa12923167cdfe9247ca1"
  },
  {
    "url": "assets/js/34.0fbd2717.js",
    "revision": "1c6cee2b1cb959e360c945e07a6b4945"
  },
  {
    "url": "assets/js/35.c84050f9.js",
    "revision": "0200e6e8b87b317fe34a830aa3a906da"
  },
  {
    "url": "assets/js/36.c4dad862.js",
    "revision": "b897b55111e6fb4e57ebe0f84a3c13fd"
  },
  {
    "url": "assets/js/37.433fa25a.js",
    "revision": "40ad1c02911c35e6313065407b2db93f"
  },
  {
    "url": "assets/js/38.ba45938f.js",
    "revision": "f3b9e06bc1196c422ba591a10685e07e"
  },
  {
    "url": "assets/js/39.e7580ab4.js",
    "revision": "a22a8f5da533a8b103362c0a947868ef"
  },
  {
    "url": "assets/js/4.c4aaaf49.js",
    "revision": "23317521eee18981f55fa18055ff1ae3"
  },
  {
    "url": "assets/js/40.44846cf3.js",
    "revision": "29ddaa0b787f2bc2f98d61f91bacb843"
  },
  {
    "url": "assets/js/41.b34c2cbe.js",
    "revision": "3ccb8b5d441c6dbad65cdc825e0a845a"
  },
  {
    "url": "assets/js/42.49ea606b.js",
    "revision": "26d981a95e1681f02faa7ecc1090c37d"
  },
  {
    "url": "assets/js/43.2facf38d.js",
    "revision": "c8130c72ed90cddf1300cde1fac916eb"
  },
  {
    "url": "assets/js/44.bd43cd84.js",
    "revision": "a93b686fca0ada6f6c08ab78f07d7880"
  },
  {
    "url": "assets/js/45.e700e5c7.js",
    "revision": "be5f823a21cb6884c2cfe9ad50462dff"
  },
  {
    "url": "assets/js/46.c8fc04ce.js",
    "revision": "b43648e25177f801c5f4653592410fbb"
  },
  {
    "url": "assets/js/47.d59c41e5.js",
    "revision": "390b08d967144fb4e03f5f1a425b5de0"
  },
  {
    "url": "assets/js/48.2b21bfb6.js",
    "revision": "caf93f2811d981ef18c8a392bee18a73"
  },
  {
    "url": "assets/js/49.b4fff199.js",
    "revision": "97969b133d1d79fc666f3a75df1fe4a5"
  },
  {
    "url": "assets/js/5.75291e98.js",
    "revision": "ce490fd6c06ce8c21dd4612a0654e08c"
  },
  {
    "url": "assets/js/50.fc90525d.js",
    "revision": "386e626efbef65862c55aeaac321a48d"
  },
  {
    "url": "assets/js/51.26bb0a98.js",
    "revision": "4c6d2cf602a01b10a81020ea4cd660e8"
  },
  {
    "url": "assets/js/52.f7c02e89.js",
    "revision": "5b497ebcaa4fc30e2f40e86bb86d43a0"
  },
  {
    "url": "assets/js/53.e5d3c18a.js",
    "revision": "2ea5c5ab0449d458c92a01f886ea0f0d"
  },
  {
    "url": "assets/js/54.1897b398.js",
    "revision": "191f0db160735a32a83941f6a6e98315"
  },
  {
    "url": "assets/js/55.96d86c12.js",
    "revision": "03253e0edd27f5c0671b2399602adb2d"
  },
  {
    "url": "assets/js/56.5bc9a5c9.js",
    "revision": "c00f23e258f5192180d4836d5ed66b68"
  },
  {
    "url": "assets/js/57.01467a33.js",
    "revision": "f68302b195ed09ffa62f01ea514fde52"
  },
  {
    "url": "assets/js/58.9ea97737.js",
    "revision": "918d701a0febf77de5fd74a99466e2a8"
  },
  {
    "url": "assets/js/59.0c06750d.js",
    "revision": "426de419805456065c27990ac891ce47"
  },
  {
    "url": "assets/js/6.a5452af0.js",
    "revision": "29ccde04dabad9dca418f095cfc41841"
  },
  {
    "url": "assets/js/60.7c7bd2fe.js",
    "revision": "966c9f536c4de79fd4363795c67956b2"
  },
  {
    "url": "assets/js/61.4120f3b4.js",
    "revision": "bfed8653646e7825feeb95ff892c6f4d"
  },
  {
    "url": "assets/js/62.be113f53.js",
    "revision": "9f614dba0dd987fce8f187beaf6df961"
  },
  {
    "url": "assets/js/63.4e36b811.js",
    "revision": "4a10f4f923747b43753e75580a5f9ec0"
  },
  {
    "url": "assets/js/64.cd171fc2.js",
    "revision": "bfbed2511953a201467b07186488b9e6"
  },
  {
    "url": "assets/js/65.6f39111a.js",
    "revision": "9a89eeb4c294407d9f55503dc48f59ce"
  },
  {
    "url": "assets/js/66.41ec81ea.js",
    "revision": "5ed39a707b0203822b2ee1fd7a9b339b"
  },
  {
    "url": "assets/js/67.18f57895.js",
    "revision": "2e142065cf2acddd8e2dd186f79d32e8"
  },
  {
    "url": "assets/js/68.b7aa70d2.js",
    "revision": "a79da5869c61e4d46c7c1072ab9850f9"
  },
  {
    "url": "assets/js/69.dead6d67.js",
    "revision": "b920be6d40bcef02f4a257095c663746"
  },
  {
    "url": "assets/js/7.0fa19659.js",
    "revision": "7929f1a1288f51552a3850e69463d6d1"
  },
  {
    "url": "assets/js/70.ff414e42.js",
    "revision": "873699679d01bd8698530c2a8c39691c"
  },
  {
    "url": "assets/js/71.674fce56.js",
    "revision": "d02663ccd75ddbcd63e367dcb59a78c5"
  },
  {
    "url": "assets/js/72.80a423ca.js",
    "revision": "34eb0b7b204dba4b3aae3320a69e7a40"
  },
  {
    "url": "assets/js/73.7ef03522.js",
    "revision": "4dc6c5f0f84c59ed56e9b1450fe0e42b"
  },
  {
    "url": "assets/js/8.33549002.js",
    "revision": "6f46bf09290fbc44dca756db14e03296"
  },
  {
    "url": "assets/js/9.3f827070.js",
    "revision": "e849cd7668b40bcb23e9aff6be878291"
  },
  {
    "url": "assets/js/app.4cccdff2.js",
    "revision": "7da42e35a70efc3012947a648e2495de"
  },
  {
    "url": "assets/js/styles.9249670b.js",
    "revision": "e016e20668a71ddf38e8ff67fa0d794d"
  },
  {
    "url": "assets/js/vuejs-paginate.8f017de9.js",
    "revision": "7055d918e00d68def17ae958c2677c0c"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "8e344b17036d4e49b71f8754b4097b4d"
  },
  {
    "url": "browser/devtools.html",
    "revision": "ef7aa7a990eab1e0d32b3e601da75470"
  },
  {
    "url": "browser/index.html",
    "revision": "e1e82226b964a76d7b410a88f1bacab6"
  },
  {
    "url": "config/index.html",
    "revision": "bdafffd69e5ac229172d81e03457f8c0"
  },
  {
    "url": "config/using-vue.html",
    "revision": "39d0928120630368b9899f3fec995b8e"
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
    "url": "img/js/javascript-design-issues.png",
    "revision": "7f9255c86f7ca9bd085709f3dc204b5c"
  },
  {
    "url": "img/js/javascript-quote-1.png",
    "revision": "fc6dbf74292de4bbbf301b5144361048"
  },
  {
    "url": "img/js/nested-callbacks.png",
    "revision": "d77196dfd8837fc2a02476d32117c25c"
  },
  {
    "url": "img/js/netscape-javascript-and-closure.png",
    "revision": "2b744315d77d8ec160022dd95cb2e032"
  },
  {
    "url": "img/js/num-of-transtors.png",
    "revision": "f5ffff26bc469e696af81b7a1d354489"
  },
  {
    "url": "img/js/run-c-in-browser.png",
    "revision": "ecbfbe72633d66201e3009ff37e0e820"
  },
  {
    "url": "img/js/run-windowsapp-on-macos-chrome-browser.png",
    "revision": "da444c0793d4e78f3c08e05c64ed931a"
  },
  {
    "url": "img/js/Screenshot from 2020-09-04 14-25-55.png",
    "revision": "f16844e50b4b30eb768da21e9f9197a6"
  },
  {
    "url": "img/js/Screenshot from 2020-09-04 16-09-05.png",
    "revision": "d198d0cc117a91e79095ed106f3811b9"
  },
  {
    "url": "img/js/user-space-kernel-space.png",
    "revision": "796644c91646927aab45c54eccd76a4b"
  },
  {
    "url": "img/rust/history-of-cloud.png",
    "revision": "1f6684d11df4219bd739babe5cfd5384"
  },
  {
    "url": "img/rust/memory-unsafety-vurnabilities.png",
    "revision": "80e57e022e51449d4e4a7d05ea524f08"
  },
  {
    "url": "img/rust/runtime.png",
    "revision": "5d52c5a393c4f63511a80985acc4aee5"
  },
  {
    "url": "img/rust/rust-1028-release.png",
    "revision": "25aac2510ec7c9ede23988b00508c1d0"
  },
  {
    "url": "img/rust/Screenshot from 2020-09-04 16-47-13.png",
    "revision": "a969632eedcad821f69bc96b2775b05d"
  },
  {
    "url": "img/rust/structure-and-semantics.png",
    "revision": "ad6a598d64c87d70e6723ad50d31b8ed"
  },
  {
    "url": "img/rust/wasi-system-calls.png",
    "revision": "75b9e1387f86e667095f9b4ae42d7c39"
  },
  {
    "url": "img/rust/wasi.png",
    "revision": "4c8ee6e91d432b0893d490d1df8b69ab"
  },
  {
    "url": "img/rust/wasm-vs-js.png",
    "revision": "a04e36a533d79c7c6b4500fb73073f7c"
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
    "revision": "1feb50a56cc96a7f01112c2979af0c0f"
  },
  {
    "url": "javascript/asynchronous.html",
    "revision": "18f9961466f9350f4dc324b70f68a28b"
  },
  {
    "url": "javascript/compiler.html",
    "revision": "9648c510eaf1247ae93e0a4b35ba34a1"
  },
  {
    "url": "javascript/debug.html",
    "revision": "efac52f9568b1090e7b1eeda35077122"
  },
  {
    "url": "javascript/destructuring.html",
    "revision": "cea0fca3baeddf9798c3a74861fef358"
  },
  {
    "url": "javascript/devtools.html",
    "revision": "d4878c028cc9725193cbf765fe6e6278"
  },
  {
    "url": "javascript/es6.html",
    "revision": "65e3be1af8613c14657f13c06189a739"
  },
  {
    "url": "javascript/eventloop.html",
    "revision": "e5ec82f76d3739f269806c4324b2d4c8"
  },
  {
    "url": "javascript/iife.html",
    "revision": "b87c168c819b7aa4016ba5655dafc853"
  },
  {
    "url": "javascript/index.html",
    "revision": "1b2e78efe5ebadeefa110b7a3b63907f"
  },
  {
    "url": "javascript/jsengine.html",
    "revision": "49bf7205541959ca1d95c05843fc70bf"
  },
  {
    "url": "javascript/jstesting.html",
    "revision": "31bba2898c1cf2e0fb77544cde8db090"
  },
  {
    "url": "javascript/modules.html",
    "revision": "de814385fea6a393bd12925005b564a3"
  },
  {
    "url": "javascript/nodejs.html",
    "revision": "917a02a5ac2038a8f5d768425804328a"
  },
  {
    "url": "javascript/objects.html",
    "revision": "29756727f2f999ddd42ccd23e1f08980"
  },
  {
    "url": "javascript/perfromance.html",
    "revision": "1a6a841a1ce0dd5526d6df7e2de37d15"
  },
  {
    "url": "javascript/polymer.html",
    "revision": "fd9a9db1429989aeae65fcf1eab826b1"
  },
  {
    "url": "javascript/promise.html",
    "revision": "fa76adae3e79b6e56497dabc7a8eb5f6"
  },
  {
    "url": "javascript/proto.html",
    "revision": "408115c9d594e4ef8a3824ec3b29f934"
  },
  {
    "url": "javascript/todo.html",
    "revision": "b60b84c7bc18f7c3e607f4447a705cf7"
  },
  {
    "url": "javascript/typescript.html",
    "revision": "19d08863db78ad7eb41d326a1dd0ae0e"
  },
  {
    "url": "javascript/v8engine.html",
    "revision": "7d3ba5bfb2cf7446447a9dfdbfcb2690"
  },
  {
    "url": "javascript/wasi.html",
    "revision": "5976a396ba66025f6f53157a8ca15436"
  },
  {
    "url": "javascript/wasm.html",
    "revision": "827c305d9ddd259759476d84673e6d89"
  },
  {
    "url": "libraries/d3js.html",
    "revision": "8b8e95b79ad5b162d1489326bc754a3a"
  },
  {
    "url": "libraries/index.html",
    "revision": "42a08db283fbd6d977f8aa1b5b592072"
  },
  {
    "url": "libraries/rxjs.html",
    "revision": "45fac53efb363802f522ba061e5ebe25"
  },
  {
    "url": "libraries/vue-cli.html",
    "revision": "a8fda6f1fb0770b318d57a302f4713cd"
  },
  {
    "url": "libraries/vuejs.html",
    "revision": "7ec401cd381af3f5546c7ca3dbb6c4c0"
  },
  {
    "url": "material.html",
    "revision": "c0db8f990de2307ff40259001870b163"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "96dd9c5c4c7c4d1abb8568f07646bec9"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "185b9c0417397891e6bcc205b2a2a0cd"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "e82527f346b777ae2691d65ed59a5fd3"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "06a901a4049533118b5962343642bacf"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "b679bca723ccc5d41c8e9c45053e5596"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "57909c2809e1b4c169d13521311b8cc5"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "d1dba2c5ab286e5c2201718b2e86ffca"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "4c37b5aad6aa8e05265f0b10ed6c8f15"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "a798e4322fc7bde8d1cbe7c5a2e36739"
  },
  {
    "url": "rust/index.html",
    "revision": "b66f3165350b40d173d7d30275eb00ac"
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
    "revision": "e62f983656ce7bdae2e724bb5f02e175"
  },
  {
    "url": "tutorial/arrays.html",
    "revision": "8aa555daa5fa30d64a02868581e8b830"
  },
  {
    "url": "tutorial/css.html",
    "revision": "cdd9d91f65bfacb9a9516bf8b4823c78"
  },
  {
    "url": "tutorial/history.html",
    "revision": "a6f71398e9a63c34c395b1b19478f5e9"
  },
  {
    "url": "tutorial/index.html",
    "revision": "e6446db56d20c9a7e0f4546197b1c490"
  },
  {
    "url": "tutorial/modular.html",
    "revision": "e8ffaad572f31ed843083ffce263d8fa"
  },
  {
    "url": "tutorial/primitives.html",
    "revision": "668f671c71b779d3bf4435eafb972195"
  },
  {
    "url": "tutorial/regex.html",
    "revision": "8ebfbc0ca8c6e119ab3c856b9316477f"
  },
  {
    "url": "tutorial/webpack.html",
    "revision": "e21ebfebd04207fdab975fea9c69855c"
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
