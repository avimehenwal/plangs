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
    "revision": "df70261eed63e9f5ddd42502c674930b"
  },
  {
    "url": "apis/github.html",
    "revision": "1b14f7176eb850f9b2e4a7402324c2b0"
  },
  {
    "url": "apis/index.html",
    "revision": "396219db4d77e4a66a126fd264325548"
  },
  {
    "url": "assets/css/0.styles.b2843991.css",
    "revision": "5458480d854b29bbd009c964a3532f9b"
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
    "url": "assets/js/11.62be34f1.js",
    "revision": "e3009c31119ac50eebaf2243acd4471a"
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
    "url": "assets/js/14.ab7aa677.js",
    "revision": "6684193c81f7f6094eede94c35296366"
  },
  {
    "url": "assets/js/15.5d42c161.js",
    "revision": "e62e6f53d242c0ce75895df36fc05316"
  },
  {
    "url": "assets/js/16.2f2de657.js",
    "revision": "c2c0b8ad3f159140e7080e53fa3d6837"
  },
  {
    "url": "assets/js/17.3d70c6a6.js",
    "revision": "93868bf21dd92a267d3f0b726616ad4f"
  },
  {
    "url": "assets/js/18.e5c1cf0c.js",
    "revision": "03fe863a4e43a31367506b51617e6149"
  },
  {
    "url": "assets/js/19.cb1961a4.js",
    "revision": "1b1aface35111204ff0744055bd629d7"
  },
  {
    "url": "assets/js/20.e18edb09.js",
    "revision": "90327290c49c95087bfa9d7cf081a7b2"
  },
  {
    "url": "assets/js/21.7f9355d7.js",
    "revision": "c7073cc3155571bacbe9a14ec5bfdedf"
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
    "url": "assets/js/28.a38dc6f1.js",
    "revision": "580d59050b625dd06e9de4cc61684e1f"
  },
  {
    "url": "assets/js/29.b3f57787.js",
    "revision": "e3d4be6ab18f1cf8803fe265c86f2b15"
  },
  {
    "url": "assets/js/3.d1400e8d.js",
    "revision": "115d48a6771eeb494efefc1f12c57157"
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
    "url": "assets/js/32.28ef6c15.js",
    "revision": "b438e13cef9c6f693b9cb30eee5e2e18"
  },
  {
    "url": "assets/js/33.f24ffad2.js",
    "revision": "85ac13bdcf4bc44611b2baff6e9c549a"
  },
  {
    "url": "assets/js/34.12812ea7.js",
    "revision": "515fc06b48cf58a59beb0d4a3a277aaa"
  },
  {
    "url": "assets/js/35.124bd5f8.js",
    "revision": "0f9328538142c7b5065bee2a118431b9"
  },
  {
    "url": "assets/js/36.f2f07910.js",
    "revision": "b818f6c75e11877ea79e2bf342b1a9f9"
  },
  {
    "url": "assets/js/37.e77d3f6c.js",
    "revision": "ba385d2feeeb5e30e1d4ec1eba8830e3"
  },
  {
    "url": "assets/js/38.61c7bc81.js",
    "revision": "fb5dd1bfc8c4b8ed61ef889f3d38fa73"
  },
  {
    "url": "assets/js/39.84f0540c.js",
    "revision": "20c75ecf66a348538c15e0218631b38d"
  },
  {
    "url": "assets/js/4.ad1e2779.js",
    "revision": "fae692ae1c9ca054beb94800fc71da0e"
  },
  {
    "url": "assets/js/40.fd3c06f9.js",
    "revision": "d31a6891f6b64247123f28a8d26fb4dd"
  },
  {
    "url": "assets/js/41.f788199b.js",
    "revision": "6450e8fb5fa925cf2c6aa9e1db54e375"
  },
  {
    "url": "assets/js/42.023b5e1f.js",
    "revision": "bfe2baca09a1677f19978282cf78463d"
  },
  {
    "url": "assets/js/43.7d59e249.js",
    "revision": "76aadf7ad28a705e9c00a102d061f716"
  },
  {
    "url": "assets/js/44.ccfcc910.js",
    "revision": "b7336877c1c11d5a4b83ee86c1cdae26"
  },
  {
    "url": "assets/js/45.295d5231.js",
    "revision": "758d35880479693526d297d16b85d0f5"
  },
  {
    "url": "assets/js/46.5e80ae7b.js",
    "revision": "4286b55ad4b003c93b141d11302f44ea"
  },
  {
    "url": "assets/js/47.575cbf5b.js",
    "revision": "eee1ad75b1717922d5242dad1938fc81"
  },
  {
    "url": "assets/js/48.82b4eac4.js",
    "revision": "1c4b4cee0a5b973e549560b59a6896ad"
  },
  {
    "url": "assets/js/49.54baf847.js",
    "revision": "57d88127e2e092a0bc9129b27f7c0946"
  },
  {
    "url": "assets/js/5.b125a94c.js",
    "revision": "e07628d147cffce04ac328772cd15c89"
  },
  {
    "url": "assets/js/50.79665d76.js",
    "revision": "ec946ca5e3975137d87cddb619a1c69f"
  },
  {
    "url": "assets/js/51.840ccd15.js",
    "revision": "fea006191688ce27ad21f040b73e13d5"
  },
  {
    "url": "assets/js/52.35e542a5.js",
    "revision": "d136efc9069be31176fa9b5c5cd736e7"
  },
  {
    "url": "assets/js/53.e680ded2.js",
    "revision": "072d87df8f02d1fbc6fad3085a47317c"
  },
  {
    "url": "assets/js/54.bd34f06e.js",
    "revision": "7c5b7b893478c42bdd642da2754f6823"
  },
  {
    "url": "assets/js/55.7a55a9f1.js",
    "revision": "e637291d74a67291fdc3ff3597ca6e02"
  },
  {
    "url": "assets/js/56.cb604fb8.js",
    "revision": "5de13f6bdbad52b3e22e2f60444612a8"
  },
  {
    "url": "assets/js/57.d830d199.js",
    "revision": "69a88f19cd3f66c13bcda3a3f0bfa405"
  },
  {
    "url": "assets/js/58.a28a34cd.js",
    "revision": "cacf77b86ddfe1207517d1ca2578c79c"
  },
  {
    "url": "assets/js/59.c8c6534f.js",
    "revision": "7d0f9a473c0f497f6feec3b952dbd103"
  },
  {
    "url": "assets/js/6.9761252b.js",
    "revision": "f3988787af462a478a21421a42005c07"
  },
  {
    "url": "assets/js/60.c2f639fd.js",
    "revision": "2f1b9f217583f65f9704c1d75934c073"
  },
  {
    "url": "assets/js/61.99b5239e.js",
    "revision": "52da7b3925ff6f6bdaaac7a2dda106ab"
  },
  {
    "url": "assets/js/62.0a46c1ae.js",
    "revision": "aad54ba3da765130efa2ab6df52e25c3"
  },
  {
    "url": "assets/js/63.a789e782.js",
    "revision": "e104dc4fb4a0b24421f65d8e16ded0e1"
  },
  {
    "url": "assets/js/64.1cdc034b.js",
    "revision": "69c64054f345de10265ee6e90ec740ac"
  },
  {
    "url": "assets/js/65.2b89dbcc.js",
    "revision": "19a9e7c289624e75b14a3abbf17977ba"
  },
  {
    "url": "assets/js/66.30045e86.js",
    "revision": "1393eff64cc24b8486f2aca62e323d2e"
  },
  {
    "url": "assets/js/67.b3e5f02d.js",
    "revision": "c68d1f5706c83d23421e0902c0a399dd"
  },
  {
    "url": "assets/js/68.a4be4c7f.js",
    "revision": "1ffb550a0d6eeb223e06ee592c2d0af6"
  },
  {
    "url": "assets/js/69.de1322c6.js",
    "revision": "654479cd579b95738327b76b029f69a3"
  },
  {
    "url": "assets/js/7.88a46aa5.js",
    "revision": "73a7ab45bb5198d0bb0a29aa91fd54c8"
  },
  {
    "url": "assets/js/70.ed7c3a79.js",
    "revision": "e207a78c878ab73ca5c2c9e7a4d438c5"
  },
  {
    "url": "assets/js/71.945fd5ae.js",
    "revision": "fe0fd8d065ae47b7b54dcbabca280331"
  },
  {
    "url": "assets/js/72.f9258f7b.js",
    "revision": "981fbaa0796da2b7a309e281655c3bd9"
  },
  {
    "url": "assets/js/73.085933d9.js",
    "revision": "8d177268d6bcb27cd4dfcf40494e962a"
  },
  {
    "url": "assets/js/74.fe78e33d.js",
    "revision": "db73a9a34d08e79ca999fbe7a3e56a55"
  },
  {
    "url": "assets/js/75.994586dc.js",
    "revision": "0f298caa8165bba4b23bd79640d5c6dc"
  },
  {
    "url": "assets/js/76.95ab3b42.js",
    "revision": "9e14a56e1a35b49668f26a67fbb62cec"
  },
  {
    "url": "assets/js/77.4d156f5e.js",
    "revision": "8977dfb7031d74077a267f4b86b332cf"
  },
  {
    "url": "assets/js/78.7ae98a86.js",
    "revision": "e5e21f94c7cc4e4fb27f79ba538dda8e"
  },
  {
    "url": "assets/js/79.d759d8aa.js",
    "revision": "475822f4fe9699c9374088ee4ca9bed6"
  },
  {
    "url": "assets/js/8.fc313d4a.js",
    "revision": "f5b79c061bffb61d0eb6ca0d1b6eb702"
  },
  {
    "url": "assets/js/80.0dc9623d.js",
    "revision": "a9fc97e45a7427826c4dab1cd039ec5a"
  },
  {
    "url": "assets/js/81.4b926e4d.js",
    "revision": "8c3fbacfde7f1801511e98a5fdefef5e"
  },
  {
    "url": "assets/js/82.bf3955c7.js",
    "revision": "5417ccd10d55689da5aab31f597d0e7e"
  },
  {
    "url": "assets/js/83.f4ea2053.js",
    "revision": "a64e43511e8e76a3a070fcef96711f69"
  },
  {
    "url": "assets/js/84.a3417e52.js",
    "revision": "a570f9115cd21a1bf39c43cce9d6402e"
  },
  {
    "url": "assets/js/85.dc5abd89.js",
    "revision": "a3329242a6b9d3f3abfb28af30baa6e0"
  },
  {
    "url": "assets/js/86.ca1d3366.js",
    "revision": "7ef8623b2f625930d515eeb9fa62ef7d"
  },
  {
    "url": "assets/js/87.8f10ae47.js",
    "revision": "edd041d8c374d392176b53bcec7f17c9"
  },
  {
    "url": "assets/js/88.a96ad5dd.js",
    "revision": "54e6cb45b3f86de7ed9e9d06853171cf"
  },
  {
    "url": "assets/js/9.b21c42eb.js",
    "revision": "e1865eca927a36d6bca5cb314c4e2c7f"
  },
  {
    "url": "assets/js/app.cf6f4f66.js",
    "revision": "3230c90bb66861fc3a3f9bdf98eddbd0"
  },
  {
    "url": "assets/js/vuejs-paginate.fe41a09e.js",
    "revision": "b6279ccba59ee8d1780693e7154e8d15"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "2f54d6066353886eb0e5250a7e6a3fd3"
  },
  {
    "url": "browser/devtools.html",
    "revision": "63028f0efc32f39a07d6f2c2539b668e"
  },
  {
    "url": "browser/index.html",
    "revision": "47029ad82f026a7c9c7cf0cd14528f07"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "6065711f3e0794629a31fb83a5561b5d"
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
    "revision": "94fc5da0118afd8e8d1525e47d69200a"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "f8cd743e9b5acd274f2bf873eabf8bbb"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "e5f1d304852aa7fc4d438f1d87fb48d4"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "22b1446d4e2e43969a5af746805633ce"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "2d6df92bfca369a58f2ae00a5fbcf8a6"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "77e51a96ecbeb42298b54c92d2e29015"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "97a7e7e49da20510c3f546805763b56f"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "e1e56f46ba3bc2c4d5b4f512852050dc"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "085d23ec8e8dafe5acc969d628cad144"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "c8773dc1138bdc9ba20cdf068dc8a8d3"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "2f6775689ca5f01f8385a45f9edc3ee1"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "213875840c1c706ff03ec59df380c105"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "1bff151ead036bc18121bbf7296356ae"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "d33c5191b832733c83c946de47500d5f"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "c5d190552f39591bb23b788ea77cece0"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "b777e3e631206f18259546c8a4364d7f"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "9977307e6620b0dd06dc72875ece3b20"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "d1c9ace9d0fdc819eee666a05e39051e"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "d09b1b7266aa5edfe5a6cf1a830083f0"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "f2893b10a5f3b9ab90813f690911f114"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "0a8d09bdc979ef3836bcb1a921d6e072"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "973ac12964196251642d3930ee35516a"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "d613805595ff5b0a54dc9bf8d56e9678"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "64cdefa92ebd31482a298a07bfc59271"
  },
  {
    "url": "javascript/index.html",
    "revision": "4c32f9c9faeb339af938eee24d911a1f"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "a0b76b69e5ff129168f2d2ac80371be3"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "d50c59f3ac2fa383d09714ddcf96e6c2"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "824021b7aaaa244a055e6704f724abcd"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "5b44f4271fd9615217d2fa80277f923c"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "973d22524d70557a24d619f1b435a88a"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "8328f8fe87e156010dfcffc63e5a2c96"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "e77ab693afe33ea5754ba32fcaaf3722"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "8c12b34210e5987460e747e9ab21e797"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "7cac75e0c571e9532f7210a768a16e13"
  },
  {
    "url": "material.html",
    "revision": "93d425599930e5d4298cd977f13e4ca0"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "fec731a7189f9e4c9387366da78c32ab"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "602863f4335b2c2e7bcccf1362b02acb"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "db91e77f5e0363d2df794fa9a5e9078a"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "856ac5f2ef7111c98b5984fb5d74ef85"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "d451714a82e2e111f7b5a9d9ac18d1c4"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "304f635cce1f9b4073b4699ea11d0284"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "01cf0daa6c6195cc9fb3a889514338c8"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "4ecff232839e293d6db151f18c1e97c2"
  },
  {
    "url": "posts/index.html",
    "revision": "74cc0546b2c05d3939da90f6d615faa3"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "29323ad7e1330bc87f637d01b0307616"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "8302fcafacfcd51fc72dadcff598405b"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "c72da06dddb0ce1ef5f259747f76edb7"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "879a1a67663600ff67366043a93c61e3"
  },
  {
    "url": "rust/index.html",
    "revision": "10dca8261b53d35c777b017305928988"
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
    "revision": "7f6337881c02dfe96fa560fa2290b160"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "1b6ae0070cfde2191ac30facc9aa1194"
  },
  {
    "url": "technologies/aws.html",
    "revision": "fcfaef58eb4b8ac0b7dbc64dfe145707"
  },
  {
    "url": "technologies/css.html",
    "revision": "4298d2e07594186bac49f5ba16e8b18f"
  },
  {
    "url": "technologies/history.html",
    "revision": "29721a33a2d13b07d4a4371848216bc8"
  },
  {
    "url": "technologies/index.html",
    "revision": "05b46b6968693446f51c319733288820"
  },
  {
    "url": "technologies/modular.html",
    "revision": "7c0b57eef81645b4ec3b7274211cfd05"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "d0f49b6c0dedeee3648021a3f4003dd9"
  },
  {
    "url": "technologies/regex.html",
    "revision": "4aeb0d3b158e5fe31647e2f48a51eb92"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "7789aef931732c6b0003776d13e62839"
  },
  {
    "url": "test/index.html",
    "revision": "1a5b462ffc58d7c81e38a06142199643"
  },
  {
    "url": "test/using-vue.html",
    "revision": "7aced5b61c172b434c8fbdd15f0038a2"
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
