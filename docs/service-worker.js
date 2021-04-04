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
    "revision": "be83ecd1e4f91238687e3fe98dbf5f91"
  },
  {
    "url": "apis/github.html",
    "revision": "133440003753e95c45dfd9f4d3cc8d78"
  },
  {
    "url": "apis/index.html",
    "revision": "d1db97cdfe37155e1cf41384a97fe1a6"
  },
  {
    "url": "assets/css/0.styles.6ded7d35.css",
    "revision": "c0f6aa58e55dde98dce4531b970ef52b"
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
    "url": "assets/js/10.3ba17a2b.js",
    "revision": "ebbf75d36ec50513f359bf8d7e4a0124"
  },
  {
    "url": "assets/js/11.43f38100.js",
    "revision": "eac9725cfc362967de4a1ac421f5d553"
  },
  {
    "url": "assets/js/12.39855738.js",
    "revision": "ab97307c8b99ea96a580b63041efc1ea"
  },
  {
    "url": "assets/js/13.a58ae060.js",
    "revision": "a886fd9db339c13227bf0f4b869333de"
  },
  {
    "url": "assets/js/14.7f61ed32.js",
    "revision": "d6580e5ad96de42dda7b92c516d188c4"
  },
  {
    "url": "assets/js/15.5d42c161.js",
    "revision": "e62e6f53d242c0ce75895df36fc05316"
  },
  {
    "url": "assets/js/16.457c315d.js",
    "revision": "5b44c5c961c2b5a81bc56ef9c197d3c9"
  },
  {
    "url": "assets/js/17.76d5e650.js",
    "revision": "3ddd9a21bcaba2ff2a75b8a6d97b6a62"
  },
  {
    "url": "assets/js/18.68ce6ac1.js",
    "revision": "14c42a3b1f7177afb2726de1a5b055dd"
  },
  {
    "url": "assets/js/19.9b086c49.js",
    "revision": "626dee7713e7d79cdd2aaacc4da04cc3"
  },
  {
    "url": "assets/js/20.e18edb09.js",
    "revision": "90327290c49c95087bfa9d7cf081a7b2"
  },
  {
    "url": "assets/js/21.a683ab0e.js",
    "revision": "d34d135ae721cc8cd8790c75ca522a54"
  },
  {
    "url": "assets/js/22.71ca79a7.js",
    "revision": "efbc9f26a01821c5436d6a5209e93e50"
  },
  {
    "url": "assets/js/23.509bae23.js",
    "revision": "3bd2a993657b093d0c246ec212626a53"
  },
  {
    "url": "assets/js/24.dd7cac87.js",
    "revision": "83bc389aafc813c13022288aba94c3b2"
  },
  {
    "url": "assets/js/25.e005df53.js",
    "revision": "7e088b8e9a705ca4025f9340396dbfa8"
  },
  {
    "url": "assets/js/26.57e18f48.js",
    "revision": "2217550108cf4c71617caeb34f4a724d"
  },
  {
    "url": "assets/js/27.faab2d4b.js",
    "revision": "670f8c3d4244cb6d7808e53cc04500c3"
  },
  {
    "url": "assets/js/28.ca85f2d2.js",
    "revision": "580d59050b625dd06e9de4cc61684e1f"
  },
  {
    "url": "assets/js/29.b3f57787.js",
    "revision": "e3d4be6ab18f1cf8803fe265c86f2b15"
  },
  {
    "url": "assets/js/3.46168610.js",
    "revision": "19760e4b522bc4c64892a347d6f56a40"
  },
  {
    "url": "assets/js/30.45510cc8.js",
    "revision": "a2988ecca7c15916862ad72239c23995"
  },
  {
    "url": "assets/js/31.004aec7c.js",
    "revision": "c38ec0e8046fc5bfce82325d48501906"
  },
  {
    "url": "assets/js/32.31641e9e.js",
    "revision": "4ced8c98629311a696c13d6f68f5d7a0"
  },
  {
    "url": "assets/js/33.f24ffad2.js",
    "revision": "85ac13bdcf4bc44611b2baff6e9c549a"
  },
  {
    "url": "assets/js/34.e5a58178.js",
    "revision": "152e4788c2aefdf035163d82f6aec7bc"
  },
  {
    "url": "assets/js/35.da78461b.js",
    "revision": "563ac1b2a0c9ef5334718a1ec74ded90"
  },
  {
    "url": "assets/js/36.d7c01f5e.js",
    "revision": "0267d78cc152e7ad9a8c3338d3668b2a"
  },
  {
    "url": "assets/js/37.bb578bef.js",
    "revision": "e66ce53438403f63043d9fb9394e9ecc"
  },
  {
    "url": "assets/js/38.df6f6b8b.js",
    "revision": "3caa5fa8103531498484c2a7fa1394f9"
  },
  {
    "url": "assets/js/39.89d98712.js",
    "revision": "7f5e957b24f78dc914207b6ea9c8a655"
  },
  {
    "url": "assets/js/4.ad1e2779.js",
    "revision": "fae692ae1c9ca054beb94800fc71da0e"
  },
  {
    "url": "assets/js/40.8b553398.js",
    "revision": "3e6e14eda0d6dd994e0328937503e981"
  },
  {
    "url": "assets/js/41.2780547d.js",
    "revision": "421322fcafeb26f2f5b71baf522d4f33"
  },
  {
    "url": "assets/js/42.a84c27d4.js",
    "revision": "648f68212da7a13b94ca9aa569d24a1e"
  },
  {
    "url": "assets/js/43.98caee76.js",
    "revision": "122b22c3600abacfd6ccbd212fa63b1d"
  },
  {
    "url": "assets/js/44.208ba68a.js",
    "revision": "94058a15621eac38abf718dfc9401b47"
  },
  {
    "url": "assets/js/45.8c4430bf.js",
    "revision": "17220279fad74d69df3186d988f47c92"
  },
  {
    "url": "assets/js/46.23563d81.js",
    "revision": "697e511fa00e6288c771930ea831291d"
  },
  {
    "url": "assets/js/47.f69c71ff.js",
    "revision": "c5aa0878abacced5fb08d3d2a97be57f"
  },
  {
    "url": "assets/js/48.cff24f0d.js",
    "revision": "d2d6da69d96305c66a58fd0b1365fb7e"
  },
  {
    "url": "assets/js/49.da061d53.js",
    "revision": "a155a488339db3e53181bc7575a3fbb7"
  },
  {
    "url": "assets/js/5.b125a94c.js",
    "revision": "e07628d147cffce04ac328772cd15c89"
  },
  {
    "url": "assets/js/50.2c54acea.js",
    "revision": "c335be59939ce4e8884dd27806abd9f2"
  },
  {
    "url": "assets/js/51.43e318b1.js",
    "revision": "42d2b9297ce53ac0258741fb8f24bcf1"
  },
  {
    "url": "assets/js/52.5dcad858.js",
    "revision": "9d51e20cd0221da20ff84faf250243d9"
  },
  {
    "url": "assets/js/53.bdb2fddd.js",
    "revision": "9d46f160a93fc1885bdd40e2aaa76b93"
  },
  {
    "url": "assets/js/54.2d4d8588.js",
    "revision": "c0287d658e242bea144fa26e9b599315"
  },
  {
    "url": "assets/js/55.e09e7a31.js",
    "revision": "e52b09f80b6c569fd0d8f0888198b98a"
  },
  {
    "url": "assets/js/56.4d91d20e.js",
    "revision": "9dd4086bbcbf09bc41bfd565fd73bc4e"
  },
  {
    "url": "assets/js/57.6bdcbe07.js",
    "revision": "84655d9239551a340610d2324246e492"
  },
  {
    "url": "assets/js/58.7dd5b9f9.js",
    "revision": "00d3b9a1b4a7e40996960f8862a72f83"
  },
  {
    "url": "assets/js/59.d1aeeabe.js",
    "revision": "c17faa564b305dda0a019c7f10e148be"
  },
  {
    "url": "assets/js/6.9761252b.js",
    "revision": "f3988787af462a478a21421a42005c07"
  },
  {
    "url": "assets/js/60.9eed3486.js",
    "revision": "f4d029ba733708db64618830305962e4"
  },
  {
    "url": "assets/js/61.dfe86e7b.js",
    "revision": "25cafaa1ab2fef8946628079028c8296"
  },
  {
    "url": "assets/js/62.a1acfd46.js",
    "revision": "6b40133eb317cecea7a47e57b95a17c2"
  },
  {
    "url": "assets/js/63.3747997d.js",
    "revision": "ae9fd29ce684e4f995347bda1c9cbf32"
  },
  {
    "url": "assets/js/64.8212bd27.js",
    "revision": "c494670c24a644e6d28d96ad554b1dd4"
  },
  {
    "url": "assets/js/65.1c2c97b8.js",
    "revision": "145ff21ef367bc7c7ba002b4e3ec42e0"
  },
  {
    "url": "assets/js/66.1eeff8ac.js",
    "revision": "f7666597956fec5424055a6553f157ca"
  },
  {
    "url": "assets/js/67.5707a2bb.js",
    "revision": "77e9acc23a6fe61f402460936b9caa6a"
  },
  {
    "url": "assets/js/68.f46e3aed.js",
    "revision": "aa3feb4618f7525c10646ec98fd9cc40"
  },
  {
    "url": "assets/js/69.654df57b.js",
    "revision": "1043fced64db64592ab6245d892aaf93"
  },
  {
    "url": "assets/js/7.88a46aa5.js",
    "revision": "73a7ab45bb5198d0bb0a29aa91fd54c8"
  },
  {
    "url": "assets/js/70.4173b673.js",
    "revision": "2900fb16bc2f69cf030455e02ed4b5e5"
  },
  {
    "url": "assets/js/71.acc82171.js",
    "revision": "b564868fb8270299573707a1d547c781"
  },
  {
    "url": "assets/js/72.a1f80110.js",
    "revision": "8c6d3220fbc17f7a02ff3e8c92c0477f"
  },
  {
    "url": "assets/js/73.0b900b0f.js",
    "revision": "22a572b7306ef31ca21ed3718e4d13f4"
  },
  {
    "url": "assets/js/74.aa8037dd.js",
    "revision": "dc50ae3ee099fdf51de6f0e98640e198"
  },
  {
    "url": "assets/js/75.c8a110f8.js",
    "revision": "f6d60120028403dd2d3098010ce14156"
  },
  {
    "url": "assets/js/76.2653ed24.js",
    "revision": "a3708439c3419b926d810c4b595a9fc8"
  },
  {
    "url": "assets/js/77.a443173b.js",
    "revision": "b8e66498213ae621b7faf0c84da022c8"
  },
  {
    "url": "assets/js/78.d4573935.js",
    "revision": "c1a1155803160b5b947738de0a2a42da"
  },
  {
    "url": "assets/js/79.e41d76ca.js",
    "revision": "1dad8e23ba9014bb389ab9ec0729827f"
  },
  {
    "url": "assets/js/8.fc313d4a.js",
    "revision": "f5b79c061bffb61d0eb6ca0d1b6eb702"
  },
  {
    "url": "assets/js/80.eadd4f33.js",
    "revision": "18728bb203ce3073573bec128b13c846"
  },
  {
    "url": "assets/js/81.2a07a06d.js",
    "revision": "6776cb45e06481eb0f1d14232e0517b9"
  },
  {
    "url": "assets/js/82.c1f0d142.js",
    "revision": "d6579ecce67e72a87df5e9d4b638146a"
  },
  {
    "url": "assets/js/83.c9d6ecd4.js",
    "revision": "a4b9be753c7d2642b0e6780487d7bb9a"
  },
  {
    "url": "assets/js/84.b9842396.js",
    "revision": "516a697fc8b37b18d010c830347755ae"
  },
  {
    "url": "assets/js/85.71b4616e.js",
    "revision": "a79832fb4437361e09dfdb3203a68a49"
  },
  {
    "url": "assets/js/86.43bd88e4.js",
    "revision": "aad18e9e0eb7ef3a185892180fb0d7da"
  },
  {
    "url": "assets/js/87.6a707d37.js",
    "revision": "e16afbb060d8b273294ad30c9907ebf3"
  },
  {
    "url": "assets/js/88.d9af7c3d.js",
    "revision": "0706141b08a9a8248a12ae0533d67492"
  },
  {
    "url": "assets/js/89.efe96970.js",
    "revision": "52eda774253e276eea9281221c8e4507"
  },
  {
    "url": "assets/js/9.b21c42eb.js",
    "revision": "e1865eca927a36d6bca5cb314c4e2c7f"
  },
  {
    "url": "assets/js/90.f70d0a8d.js",
    "revision": "01bcdcf037007e86e8bcc1126b146022"
  },
  {
    "url": "assets/js/91.27e13f21.js",
    "revision": "8ec9397b45ef1db18d87ffddcf641936"
  },
  {
    "url": "assets/js/92.b8b3e43f.js",
    "revision": "a8ff0fb07a64089d10bdb658cdaf9603"
  },
  {
    "url": "assets/js/93.c2f31c7e.js",
    "revision": "7bebc93a57061c59398e630fef59c897"
  },
  {
    "url": "assets/js/94.593a4702.js",
    "revision": "7b95e7218f459ed131f218332f8a9e60"
  },
  {
    "url": "assets/js/95.4ebed3eb.js",
    "revision": "063dc4a9ce9fb227f4e61d6989b25ea8"
  },
  {
    "url": "assets/js/96.9eca028a.js",
    "revision": "637a3166ec2cf0575fb5ef65cb7f4f05"
  },
  {
    "url": "assets/js/app.9de0211c.js",
    "revision": "058c729cb2d91f5f08f400c956c1a84e"
  },
  {
    "url": "assets/js/vuejs-paginate.fe41a09e.js",
    "revision": "b6279ccba59ee8d1780693e7154e8d15"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "fc38053dcd81a50f2fb8273429141a51"
  },
  {
    "url": "browser/devtools.html",
    "revision": "3c9bea3c4e39b91a332ae41d6c33456a"
  },
  {
    "url": "browser/index.html",
    "revision": "3a5cd740b8e4aead6fa316aa34664911"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "07e639fe91d0d347b367ead07a02c1f8"
  },
  {
    "url": "browser/spa.html",
    "revision": "e71d6f51269759e6b10b28a8c1fab851"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "df7cd1f7a1d37b5eb654d728781a276e"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "3466fd3809fafc3639c645623e80596b"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "30b126551cd3a4d9f475ff8c01d20968"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "7cbafabee083ffda1e6425d281b6bbc7"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "c66b8cd803efeb0447ed5bcad23ba4b0"
  },
  {
    "url": "clojure/index.html",
    "revision": "5f7fcb07d724d002ff39f924b55ce32f"
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
    "revision": "fd61af738d321366de9e9ed61da46b2c"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "8d5442e53e50a8ffcf726553c5be87aa"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "e94119b0b29ac9d66242dbb924b52162"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "08cc36fa8d8a74550fc16ed6d03c9c9c"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "ebe92a848d892069b5fffba43cc9a3a5"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "0bea69f1800e5c1695b0eb8cfa80d856"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "5ab1f53540f2287c289075043a9f3544"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "1b645f8d39d7a4195b9a2ec8e1f6df64"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "d2946443407529d29db1a3520dc2520b"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "b5d062da241b09bcc59a888de1a8ce13"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "2218e4c37a55feeae41bd788c575f0f8"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "ffc5437ee543b1a0070b44432b3a55d3"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "04d41d5ef97c1bed8c002df44d145696"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "0ac579c5c4d211b24cb79a234663a50f"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "29aef6b798de86b4b1ab83b70348a506"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "b538641395884f13fd92bd857c086d4f"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "5e5403f3378db1198fe1b7ae3064dba4"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "38188b4dd36bfd6e1930d38b675e107e"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "931e092bbc4aea5a0775acc25484147e"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "cd34653f140244847dd5fd8aa6ca90b8"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "9bb411d62ccaa02928f7eeb3e3d0e81c"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "0ef941fd5b6a03dea97e99c0341fb4e7"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "513864ce00bd8965dc90b0976141947a"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "67173bc4318b9ddcfb6c29730a7ed700"
  },
  {
    "url": "javascript/index.html",
    "revision": "68c16abb0e123cd855ad2a7ff0c0e70e"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "873702c7c73eefb6af86876a2701d98b"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "78903d536b5614c63ea00307a52bc464"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "bbe58964b66295236d5264c40e38cc0b"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "3a3199437ce8030b7024cfb4a026b006"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "1d40efd712d7a54b03ba8f6989a227fc"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "230c303230622aa956faccfb5bc1de99"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "0fa65fb86daf29a68399ad0ba692d8e2"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "86e3be96a523f4bbee38e7f925ad8e9e"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "066a4f313fc423cc75fc4742a4ce0512"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "5df337b662c398618d2fe5ebb6d22ec4"
  },
  {
    "url": "material.html",
    "revision": "67b74cdb075549914557a588322c0f89"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "144559367c10e3fa9f3686e25f2f2d87"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "6b4ec7e2f0556178ec53e770f1b35161"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "b80a152695872ae472cf76176d7d48af"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "6aa3e4e34022fec0b69e5c984816f127"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "3c5cce5692246e469196e17e7d7770ac"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "2a06524519a86faf157c460ddffe2ac0"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "233196400ea28b921d9e0699217610bd"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "425fb60d1092bde07586369b7010e545"
  },
  {
    "url": "posts/index.html",
    "revision": "2bf8290aa3751c8d8e047a9f8733bbbe"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "19167c8ab8b1a8ffe4a17130a22d6d11"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "db236e04675c1b899b3e6ee9604f3570"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "7df711829305329036997edaf0d759d8"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "16cbcdd9fa4f0b6db1d6a4ee7e82fc16"
  },
  {
    "url": "rust/index.html",
    "revision": "58b7e91884a05ade103575501127d9af"
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
    "url": "svg/clojure_logo.svg",
    "revision": "10c16a739a347970b2a82a285bb78724"
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
    "revision": "eb504b10901437fc67fb2ee24dbf6ec3"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "bf4b0b7fc8fe4a76c071a9d39b52dff9"
  },
  {
    "url": "technologies/aws.html",
    "revision": "1c0706febbde553c56251b1d1686bd40"
  },
  {
    "url": "technologies/css.html",
    "revision": "aa5ab117500e3d240769dda66298c887"
  },
  {
    "url": "technologies/history.html",
    "revision": "822ed9d66cc2d5e7a7d92a8e877647cb"
  },
  {
    "url": "technologies/index.html",
    "revision": "e61967c1e71d567020baccbdbab164ca"
  },
  {
    "url": "technologies/modular.html",
    "revision": "58fe047b951c307ecb2e135d0bfd86cc"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "1fcbf658a86def1043914fa9d177feaa"
  },
  {
    "url": "technologies/regex.html",
    "revision": "3efadc990f34464f96aef4b353944b3d"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "27f45d3aaa960b79da1c0969b22da863"
  },
  {
    "url": "test/index.html",
    "revision": "c2ec3304ed603b12d159ba7522fc24f2"
  },
  {
    "url": "test/using-vue.html",
    "revision": "0820c749ce7a3c5b36c30b6613519bfa"
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
