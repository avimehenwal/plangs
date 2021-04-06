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
    "revision": "b2fc6e408bf32f7855f988453b567d88"
  },
  {
    "url": "apis/github.html",
    "revision": "f70e1cd0ba707a23f3046f5552efc9c6"
  },
  {
    "url": "apis/index.html",
    "revision": "6302fc1406f0a0e0e596623fd08e3ece"
  },
  {
    "url": "assets/css/0.styles.303c9455.css",
    "revision": "f8f438fac8d10418e7451db0cb87fa5d"
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
    "url": "assets/js/10.67d4b9b3.js",
    "revision": "7f37eb781c4c575e2881f78861b643f9"
  },
  {
    "url": "assets/js/100.eff587c1.js",
    "revision": "9a60ccbfce9e2bb23e7eb05e5e360058"
  },
  {
    "url": "assets/js/101.aa1ffa2c.js",
    "revision": "5a7d642a3e5d0da370e788e3be3d8e21"
  },
  {
    "url": "assets/js/102.74e547eb.js",
    "revision": "3023fdf9c8d5eed383489a798f683359"
  },
  {
    "url": "assets/js/103.fab01b57.js",
    "revision": "21c1482a6de559bdbb84800ec15cc521"
  },
  {
    "url": "assets/js/104.0eec5faa.js",
    "revision": "37ebea3706b3d2469f7fd1fb43b5166d"
  },
  {
    "url": "assets/js/11.9ac70fd1.js",
    "revision": "294976b3091993a9caf9deef5183d182"
  },
  {
    "url": "assets/js/12.a4e69fa0.js",
    "revision": "d2cdfdc6c5c220935de677fad824cdae"
  },
  {
    "url": "assets/js/13.4e6a3966.js",
    "revision": "033d1647c6417fefcdd16e362757f432"
  },
  {
    "url": "assets/js/14.85b41e98.js",
    "revision": "3e9c441ed5be8a62682adc6eaf43cd05"
  },
  {
    "url": "assets/js/15.3246edc0.js",
    "revision": "d4bab5410e193fd535eeaf357bf3a143"
  },
  {
    "url": "assets/js/16.038f19ad.js",
    "revision": "295e5591f424e875c6172737bf6e7d97"
  },
  {
    "url": "assets/js/17.46d25ace.js",
    "revision": "51ba5905cbc8935491155a1d45b03904"
  },
  {
    "url": "assets/js/18.015223fc.js",
    "revision": "6d378b2a8e84afc56a7496e08c00e6d0"
  },
  {
    "url": "assets/js/19.3339f2d5.js",
    "revision": "ff5a618efa75b5827b7bfaa169dd0f45"
  },
  {
    "url": "assets/js/20.1890eeda.js",
    "revision": "8c0e1e797d29c29062353acbb9348520"
  },
  {
    "url": "assets/js/21.e89bbd0d.js",
    "revision": "2c3f825e09b099bf796d58363f97aab4"
  },
  {
    "url": "assets/js/22.8b636ad4.js",
    "revision": "9a7e101990daf848eb30257fd763022f"
  },
  {
    "url": "assets/js/23.d4b58310.js",
    "revision": "e9d050af7ecaf10d7844663f3c444e89"
  },
  {
    "url": "assets/js/24.329876d2.js",
    "revision": "10a089d9057fe752c8eb79df7344f194"
  },
  {
    "url": "assets/js/25.300d9f8a.js",
    "revision": "cea37178eed7606f58ced1a496d89450"
  },
  {
    "url": "assets/js/26.8889d9bd.js",
    "revision": "86aa61a930c523bb96eb5be4cb3f0dd3"
  },
  {
    "url": "assets/js/27.faab2d4b.js",
    "revision": "670f8c3d4244cb6d7808e53cc04500c3"
  },
  {
    "url": "assets/js/28.981c8ead.js",
    "revision": "98b540d43e9d1ba882fd5d2976802f7d"
  },
  {
    "url": "assets/js/29.efc629e9.js",
    "revision": "7335eec6282844245262327b0896e021"
  },
  {
    "url": "assets/js/3.bc83eed1.js",
    "revision": "8564b9d7590029f78233ba758af6dbee"
  },
  {
    "url": "assets/js/30.a58bbe6e.js",
    "revision": "542acae829966ba9bac9e4836f45d709"
  },
  {
    "url": "assets/js/31.7447198f.js",
    "revision": "ade79a8f5ebbfe9c206fdb6125cabd6d"
  },
  {
    "url": "assets/js/32.528be8b8.js",
    "revision": "85d60b2b5ea54a725d9570704f145be7"
  },
  {
    "url": "assets/js/33.502040a3.js",
    "revision": "120f61621e91c8a7b569ebb19637e137"
  },
  {
    "url": "assets/js/34.c58574e2.js",
    "revision": "26e2aebbd42137b3c9ed4db95b424f9c"
  },
  {
    "url": "assets/js/35.3f6b678a.js",
    "revision": "5e705c3dbe1978aa80cb376461393719"
  },
  {
    "url": "assets/js/36.a43b3ade.js",
    "revision": "f61fe1c9ba67343a5dc396493b3da61f"
  },
  {
    "url": "assets/js/37.276db837.js",
    "revision": "08eadb75e82f67d066e1d2b0a0422620"
  },
  {
    "url": "assets/js/38.d91e4937.js",
    "revision": "470a0638640fb422fce393fb962cfa0a"
  },
  {
    "url": "assets/js/39.b060e829.js",
    "revision": "739bde561bae985b5fde6934055df5b6"
  },
  {
    "url": "assets/js/4.ad1e2779.js",
    "revision": "fae692ae1c9ca054beb94800fc71da0e"
  },
  {
    "url": "assets/js/40.0788f0ae.js",
    "revision": "28a79a0d4283193f821ddd5577392f7c"
  },
  {
    "url": "assets/js/41.cd38460c.js",
    "revision": "41bfc07b55a2e9fb329f68b586cfd7f1"
  },
  {
    "url": "assets/js/42.b5bdc6d1.js",
    "revision": "7b978670cd25bc93eea63208526c49e6"
  },
  {
    "url": "assets/js/43.35ed45ce.js",
    "revision": "aa234c9065f3f22f0f887c55f9a4e1ba"
  },
  {
    "url": "assets/js/44.ecf22d47.js",
    "revision": "c66f3a443d06a31196adb9527702aee4"
  },
  {
    "url": "assets/js/45.edcc7486.js",
    "revision": "ee5702766e548218a8b7200d631d6f32"
  },
  {
    "url": "assets/js/46.c199f471.js",
    "revision": "84a8a71be1fc910acee886f98464ff8e"
  },
  {
    "url": "assets/js/47.f623d37d.js",
    "revision": "3362db9eedc5ecb38842eaf804b9036e"
  },
  {
    "url": "assets/js/48.e0381bcd.js",
    "revision": "dda4d5e7a0edec6b747a2ee0779ba81a"
  },
  {
    "url": "assets/js/49.2c938f50.js",
    "revision": "9f3b271e21c4d1766cd2b03947dbee53"
  },
  {
    "url": "assets/js/5.b125a94c.js",
    "revision": "e07628d147cffce04ac328772cd15c89"
  },
  {
    "url": "assets/js/50.8ddce0ba.js",
    "revision": "cce8f2f22c819d32fb482fd84d3395d6"
  },
  {
    "url": "assets/js/51.4571cbbc.js",
    "revision": "f938ceaf4e58ecca3f4b0a965e57c9b0"
  },
  {
    "url": "assets/js/52.0b687a0e.js",
    "revision": "f4e142e425e29aa921f6b26fefd4f3ef"
  },
  {
    "url": "assets/js/53.dc5899ea.js",
    "revision": "edec35b12a125ed3f234d32b936612c2"
  },
  {
    "url": "assets/js/54.96a2ad55.js",
    "revision": "06331429c6d52464c2325aca4aea39b1"
  },
  {
    "url": "assets/js/55.e7125229.js",
    "revision": "1a7b34154eddcfe2ef560c9d2640129a"
  },
  {
    "url": "assets/js/56.5ae4d4ba.js",
    "revision": "aad1756c815ba344e9f7846ee2a113d2"
  },
  {
    "url": "assets/js/57.4bac9814.js",
    "revision": "65e07261492e7592ba6e187236a4bbb5"
  },
  {
    "url": "assets/js/58.aa8e501b.js",
    "revision": "355ea8fc478f2aaa3dac08833844b39e"
  },
  {
    "url": "assets/js/59.9eb9ec28.js",
    "revision": "fcd203285a57d5edfd1b61e367d17476"
  },
  {
    "url": "assets/js/6.604c56d3.js",
    "revision": "32aead91bd3fdb0a33dbbac97b815b43"
  },
  {
    "url": "assets/js/60.8b8b0a78.js",
    "revision": "d88769fc00c0efc006b3debd432ac84f"
  },
  {
    "url": "assets/js/61.2b25cddd.js",
    "revision": "e6dfac542edd74345da19aeb735a5178"
  },
  {
    "url": "assets/js/62.0976b978.js",
    "revision": "8d5715554ad969cf6ca4bbe77ea70d44"
  },
  {
    "url": "assets/js/63.2901d8e3.js",
    "revision": "c0c46fa5376faf9a110d13a620c2d06a"
  },
  {
    "url": "assets/js/64.17ab2752.js",
    "revision": "2bcbcae5ce2f6fabf6e960dbab14242f"
  },
  {
    "url": "assets/js/65.02c49aa1.js",
    "revision": "e27c0c1e0719632295fcd19010dbc5a3"
  },
  {
    "url": "assets/js/66.6a2bcbf1.js",
    "revision": "adc15ac870f83e8326529882f7e6f6e6"
  },
  {
    "url": "assets/js/67.0cb35288.js",
    "revision": "5048a3bc138e40bd93dafbb8a36e07b1"
  },
  {
    "url": "assets/js/68.e5828265.js",
    "revision": "957704987287a48c6e309979432338e2"
  },
  {
    "url": "assets/js/69.a624dbb3.js",
    "revision": "a3afac55048d049e349fd452616f3d9b"
  },
  {
    "url": "assets/js/7.6d1fbb9e.js",
    "revision": "4211f7e21934f4d559ac9b34fa73a41d"
  },
  {
    "url": "assets/js/70.9bc4b26d.js",
    "revision": "e0044b20d272964374a72583e605e4aa"
  },
  {
    "url": "assets/js/71.d492ffb7.js",
    "revision": "c7c083181670e3deee5a1beab102c8ae"
  },
  {
    "url": "assets/js/72.94eedf36.js",
    "revision": "df8b2358e4a2536f9668d721c8e714ab"
  },
  {
    "url": "assets/js/73.559c2408.js",
    "revision": "85c63abd46c8fa12a776ec7b243b73b0"
  },
  {
    "url": "assets/js/74.f25da81c.js",
    "revision": "807115e5c465211fec4b69c73a5e45ec"
  },
  {
    "url": "assets/js/75.0ac7c693.js",
    "revision": "8f2eecba6af3fd9f926707ad5d4bdd68"
  },
  {
    "url": "assets/js/76.04fc277e.js",
    "revision": "684f75af4d919e0058da892e9e1664bf"
  },
  {
    "url": "assets/js/77.d477a1eb.js",
    "revision": "7657ddced2bc54f9d186ba8e576ec8e5"
  },
  {
    "url": "assets/js/78.7e970155.js",
    "revision": "1d83dafb72264cead31fb8184816166e"
  },
  {
    "url": "assets/js/79.d063653e.js",
    "revision": "901a7ef41117e41847019ca33ab52f98"
  },
  {
    "url": "assets/js/8.0508dcad.js",
    "revision": "09a60789894c58574da1308b0be8a4f1"
  },
  {
    "url": "assets/js/80.7079f2de.js",
    "revision": "89da6822694224d1f4dba294542da91b"
  },
  {
    "url": "assets/js/81.e7dccc64.js",
    "revision": "749d7dd98881460cacb4c690d60c1a03"
  },
  {
    "url": "assets/js/82.9385dd55.js",
    "revision": "4c8372c861126cf42a1a08d90b04701f"
  },
  {
    "url": "assets/js/83.06ef3fe4.js",
    "revision": "83830b483c8ff5b78eb48846d386aa15"
  },
  {
    "url": "assets/js/84.6eb12a5b.js",
    "revision": "8c53b2821363536f92a12214b050e762"
  },
  {
    "url": "assets/js/85.0f2bc4d6.js",
    "revision": "e28c2d536e4c9371d72c791e691abab8"
  },
  {
    "url": "assets/js/86.4e478df3.js",
    "revision": "48edf9c39e904e95bf88a0dab4e04782"
  },
  {
    "url": "assets/js/87.85ec996e.js",
    "revision": "f1342b7118cf63419b24dad6ef76698c"
  },
  {
    "url": "assets/js/88.886c579d.js",
    "revision": "c16f362679016a377c73b0bdcb7f8587"
  },
  {
    "url": "assets/js/89.85b65edb.js",
    "revision": "f5a9b9caa5b7d39e3d28ffebc50676a6"
  },
  {
    "url": "assets/js/9.a0e8909f.js",
    "revision": "c945381370f9a8ec96f9c70e46bc7875"
  },
  {
    "url": "assets/js/90.ad6eb82e.js",
    "revision": "2a78c97ca27e7942a9810f31bc281a22"
  },
  {
    "url": "assets/js/91.f6d002c5.js",
    "revision": "56369e9b58dc7514b87b0f8c11ca14aa"
  },
  {
    "url": "assets/js/92.12118aaa.js",
    "revision": "378dce5d6994292790f85c8719648748"
  },
  {
    "url": "assets/js/93.426ed6e6.js",
    "revision": "8fc59fca00883018589f4594b5fd0483"
  },
  {
    "url": "assets/js/94.0c9b1e79.js",
    "revision": "132e3138fb5785341e7103384e6a9103"
  },
  {
    "url": "assets/js/95.19c212c5.js",
    "revision": "251ef0afae642571fc057d424b5cb841"
  },
  {
    "url": "assets/js/96.d57d48c5.js",
    "revision": "aacefb2a6ea16cd293e542b3b2a9b951"
  },
  {
    "url": "assets/js/97.82d92581.js",
    "revision": "57f593f393fc08d85488cf03918c5cb9"
  },
  {
    "url": "assets/js/98.6fbb7c70.js",
    "revision": "4599d24f84642a5f5ec1c4d513683996"
  },
  {
    "url": "assets/js/99.d5cac5b8.js",
    "revision": "83f67194ca35f69c6b755fdf0de9b2bd"
  },
  {
    "url": "assets/js/app.e3359fc6.js",
    "revision": "d426488ca4812576062ec814d758c5bc"
  },
  {
    "url": "assets/js/vuejs-paginate.fe41a09e.js",
    "revision": "b6279ccba59ee8d1780693e7154e8d15"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "41e90b172f2b8890553851bb025c11b2"
  },
  {
    "url": "browser/devtools.html",
    "revision": "7ab2079a722dd81fb2663fcdd3f41130"
  },
  {
    "url": "browser/index.html",
    "revision": "b2c85795d9f44e2167771f72ca4ad3e0"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "5e4a939182208d909d34dc5e086bc1b4"
  },
  {
    "url": "browser/spa.html",
    "revision": "ce341eb75b7ad7e25c4db9e694a23d49"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "cab951b7dd412e35eac2926186b82b69"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "f04f5f54321fcbc8e13a87cc0b91b903"
  },
  {
    "url": "clojure/guide/course.html",
    "revision": "53594c0fd4b0812724cd81925159eff4"
  },
  {
    "url": "clojure/guide/fullstack-webdev.html",
    "revision": "f56fa133521b9e8b9acb4444dd76e65d"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "64a0989b68b35f044f79a87717c84e69"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "c663c2b48679a02d718ffcabc1ee96cb"
  },
  {
    "url": "clojure/guide/reactive-programming.html",
    "revision": "b754331a1aca9045ef8a45d8687ca7ca"
  },
  {
    "url": "clojure/guide/single-page-applications.html",
    "revision": "420883d8ff60eb71df916281ed7aa0c9"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "aa07dc76cf93289dcdeb2201899ea121"
  },
  {
    "url": "clojure/guide/ui-planning.html",
    "revision": "1192ebd1fe834d46a183814a8829efcc"
  },
  {
    "url": "clojure/index.html",
    "revision": "5fb791f0c26ff5327fafdb854f48e49a"
  },
  {
    "url": "clojure/libraries/index.html",
    "revision": "4d0f97e1b09023b5bb4928a464b0860f"
  },
  {
    "url": "clojure/libraries/shadow-cljs-build-tool.html",
    "revision": "5da32b960f122b294a95375be7b8df8d"
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
    "revision": "ab09a881c94549e5516ccdd7f57c65ee"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "c18cbae987a53c41fed061a4f48a546a"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "83519bb93877a8731ca69b4449f65121"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "2329250fea9a4198a457ed2ab812b45b"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "99e76ac8685f6b038aec85ab0fe62b72"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "7c7d7442c2e3120cfa052d43ec90dc28"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "c23e3bfb5db653382b1a5c8509e57574"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "fccd99cfa15da1e6ba778a226df5a5aa"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "c876356f658723f4ca5a33eb5c515eb4"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "c3f569eab4e598a14daf09b354ac0ec8"
  },
  {
    "url": "javascript/guide/interview-questions.html",
    "revision": "b4f7341f574eddb932d97ad3549029e7"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "f23f69dccb910f6575f64a3652ac6b30"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "600b6c1d5a1e6fa27206680b22411000"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "65af4ad00c81af44f6a65ec8107ba7e9"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "68741af7e19ed29f1176d09d8e1e244c"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "1d8da22db28846291ab05d5f724531a2"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "a725e816ea8edfe09f3fb1530f970525"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "8182bedf813f78eafd8b67eba2115432"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "1734e46d2ca7888a082b1eb1d9caefcd"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "fb14621f5cb3a6d01e9989dacd64203c"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "6f1886222dc4678a0d210cc2ac7be703"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "d002911ac65e36d9166ff6b551c31a05"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "00bd3f35ec82816939778e6ae4fd6641"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "b21972f49633e689a86d76f1ff1d0961"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "d3f528f80633f358b5f68a7c5f574d2f"
  },
  {
    "url": "javascript/index.html",
    "revision": "b91fec532fa8863cb4be9d4687fc269a"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "08cf652878d66956b58443f1ee3d93af"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "67f6015b37d6e4871096e37806b3ec53"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "059b3685ee6cded131ed700ea9c95b8b"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "56ed6ba79c6dafa0b1afa723784de5d0"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "ff099ff9f916c78b5c0a3bbc8e9faeb9"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "68b76c2f791007b757bf4befdf5bcb5a"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "3d80117156090d0ba56bc8bb55e3cf19"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "d755673a34bfee63f2bca25124b5cb43"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "5387f6781e1bb312a7025cee2e2cb3c2"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "a937fbb4423c625158e9c95989c13f61"
  },
  {
    "url": "material.html",
    "revision": "e29489db2ee01c42685a48e52f482c3e"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "c726c4fbdbe1d01725d552b7b1cba0db"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "34f94791a0d71ecaae9b08b78184f0da"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "8961e2c98c0c744d1f027d31d1c92adf"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "b2a02ca4f433b72ece6551b2b892b39a"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "467980f50db46740a58b906d97151308"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "40ee41c1200c88f193f885011b60bbad"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "04e3932d09d987b6b1da507b5421cb59"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "26d2dc9cfb379d14a10eb05c7cde52a2"
  },
  {
    "url": "posts/index.html",
    "revision": "557a96687c8b3c662bca0df4873d949d"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "80ea91e63ce5c596de0a227dae029469"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "377bbd402260b444c86b122dcb97dc34"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "a20cc842b75c5242e67cb8c442412420"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "1581f8f782d44ccb3651f783ec6aa7a9"
  },
  {
    "url": "rust/index.html",
    "revision": "a0414df2287c336316a0db8052160a71"
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
    "revision": "5dd7c362e351f0eb616e1f691dab72ad"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "80ff0ce4f4377dc282eaac1bdbddb334"
  },
  {
    "url": "technologies/aws.html",
    "revision": "b4678959b10dcd6096feaecbb33e814a"
  },
  {
    "url": "technologies/css.html",
    "revision": "33184a938b0b8150119935a7bff6da04"
  },
  {
    "url": "technologies/history.html",
    "revision": "2812009c15da846cd520c671cf661539"
  },
  {
    "url": "technologies/index.html",
    "revision": "ef4e5c3954ad1582fca07c6a13ebf134"
  },
  {
    "url": "technologies/modular.html",
    "revision": "37cea8e77a0c1e8e0062df65b2a67bbb"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "40beb7ec862903948939d87a39e84781"
  },
  {
    "url": "technologies/regex.html",
    "revision": "b43fd1948d95f65d6bfab9d409111a3c"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "ed5d58cff075c30086741492f29ea781"
  },
  {
    "url": "test/index.html",
    "revision": "fca0e46f182ac865a01ed76e0b7e85bd"
  },
  {
    "url": "test/using-vue.html",
    "revision": "761bd94e154c41b4550d2fcc06ac8faa"
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
