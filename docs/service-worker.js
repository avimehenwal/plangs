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
    "revision": "52d7326bb51384e6ee0f457521d66b28"
  },
  {
    "url": "apis/github.html",
    "revision": "fa10c5de66c67686934e6b197ac1f9e1"
  },
  {
    "url": "apis/index.html",
    "revision": "349648391ea20e66b22188e80327ab60"
  },
  {
    "url": "assets/css/0.styles.28b364f3.css",
    "revision": "3ddadb119bd55f9516190dc4950f66c5"
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
    "url": "assets/img/event-phases.d0834ec4.jpg",
    "revision": "d0834ec485c921485f34535ae09fd702"
  },
  {
    "url": "assets/img/global-states.850ba905.png",
    "revision": "850ba905fd4991aff5ec55c2bae0fdc2"
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
    "url": "assets/img/js-const.0309b6ee.png",
    "revision": "0309b6ee34b5eb51ede8e14e7bbbe7ab"
  },
  {
    "url": "assets/img/js-symbols.f638961d.png",
    "revision": "f638961d073e4e3e8ba1dcf7034c96db"
  },
  {
    "url": "assets/img/mocking_fn_properties.157442e7.png",
    "revision": "157442e7e1ecbb8d502950d10436b879"
  },
  {
    "url": "assets/img/react-hooks.7a3529ac.jpg",
    "revision": "7a3529ac5d7246fe0017df13bd599f7b"
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
    "url": "assets/img/spread-operator-react-reducer.8e808feb.png",
    "revision": "8e808febdb24228b56f4bc1603d3b3a7"
  },
  {
    "url": "assets/img/spread-operator.41afe7fb.png",
    "revision": "41afe7fb234681f3ccc899efb96c5c88"
  },
  {
    "url": "assets/img/string-identifiers-best-practise.9d38cab0.png",
    "revision": "9d38cab0a3076ab70c26f5e8804ac377"
  },
  {
    "url": "assets/img/template-literals.f1b3113c.png",
    "revision": "f1b3113cc3f61337d88449ef673ee757"
  },
  {
    "url": "assets/img/time-complexity.2add5d88.png",
    "revision": "2add5d88e954fefb55fad11ba3c01854"
  },
  {
    "url": "assets/img/web-developer-toolchain.686ed880.png",
    "revision": "686ed8806f13ca657a70d2a9d757a001"
  },
  {
    "url": "assets/img/web-sockets.b7a627d6.png",
    "revision": "b7a627d6e245cc56cd08e13cae662f9f"
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
    "url": "assets/img/ws-workarounds.2c49d687.png",
    "revision": "2c49d6872e4b6daa8083ddb0773835fe"
  },
  {
    "url": "assets/js/10.262d7b28.js",
    "revision": "108cf3be2eb0f6ce8400d07825bd86a1"
  },
  {
    "url": "assets/js/100.888d34f1.js",
    "revision": "aa36caa2ba8109e59c6d1519bd0c1776"
  },
  {
    "url": "assets/js/101.2cb843ea.js",
    "revision": "65faf733b7722cbfce45524e82b21ba1"
  },
  {
    "url": "assets/js/102.f102a39c.js",
    "revision": "900453fca3575762e33434d2acff78d6"
  },
  {
    "url": "assets/js/103.8d90a8c9.js",
    "revision": "40f24c0c0a6353e2a59761948cf9e187"
  },
  {
    "url": "assets/js/104.62496ef9.js",
    "revision": "5c8d4e5e5cb6b64347c8ec433a56bcc3"
  },
  {
    "url": "assets/js/105.c0fe60a7.js",
    "revision": "af01f31b61993ba7166a4dc95a55ad12"
  },
  {
    "url": "assets/js/106.bd8c8ade.js",
    "revision": "bbdd80513656e5f5ce6e46aa5751add2"
  },
  {
    "url": "assets/js/107.ec7b1702.js",
    "revision": "e4035488e12b06feae414d1de3993d19"
  },
  {
    "url": "assets/js/108.4beaf7ed.js",
    "revision": "b63b71fe27342c28560006d2c1b95ead"
  },
  {
    "url": "assets/js/109.ca8b8af5.js",
    "revision": "88b9fa7d4ceb080c6819e7a0bdb20889"
  },
  {
    "url": "assets/js/11.08e6bc9d.js",
    "revision": "3f75f2215a6deedcf4d52a57e551d593"
  },
  {
    "url": "assets/js/110.e1ab86a3.js",
    "revision": "72adcb6e00c734f716f8095c5ed27808"
  },
  {
    "url": "assets/js/111.e9dd8aa4.js",
    "revision": "1289118b1e43ff9d6453d92d9b6051cf"
  },
  {
    "url": "assets/js/12.2de8583c.js",
    "revision": "f5da363b75f92b8ce014a1f4a25d3d48"
  },
  {
    "url": "assets/js/13.1a2ab80f.js",
    "revision": "429b1aa2ac8890cc6b2e4bfa1a4a966f"
  },
  {
    "url": "assets/js/14.025fac1e.js",
    "revision": "9e3906c26777ed0e48842de4fb2c3c39"
  },
  {
    "url": "assets/js/15.b7547e7b.js",
    "revision": "5c3afd6d7b02fe3a4219b2cf7edd6cd8"
  },
  {
    "url": "assets/js/16.0f0fe420.js",
    "revision": "d0feb5c25a30e951921fa186b06f3c82"
  },
  {
    "url": "assets/js/17.16688fa0.js",
    "revision": "1e39a0b7f706cc10dcc73b00715ad429"
  },
  {
    "url": "assets/js/18.b390edec.js",
    "revision": "cffb0ba9d444e26625cbf137522b14b2"
  },
  {
    "url": "assets/js/19.4e6d3c27.js",
    "revision": "5bbe2c1b47de4b66b34b2370b37867fe"
  },
  {
    "url": "assets/js/20.69a34e81.js",
    "revision": "0ad4b8d142210e6133498d85d9b6bf95"
  },
  {
    "url": "assets/js/21.b300fab5.js",
    "revision": "26e4244d1083d29ef3399c3396e2f6ea"
  },
  {
    "url": "assets/js/22.9d720f30.js",
    "revision": "e10a0cad751623992c219d5c41f2f215"
  },
  {
    "url": "assets/js/23.8be5f7db.js",
    "revision": "51476124d0afc40475806bca63a69c34"
  },
  {
    "url": "assets/js/24.7418ce06.js",
    "revision": "01d255486ad6ab6ec4d1e19417727acd"
  },
  {
    "url": "assets/js/25.ba444ae7.js",
    "revision": "9af7ddf12012b3f6b0294a63a07bb958"
  },
  {
    "url": "assets/js/26.fb761836.js",
    "revision": "1ff898ed8230a32171f8bc59373ca576"
  },
  {
    "url": "assets/js/27.0a722c23.js",
    "revision": "e3e1cb6e7091608a675987211951dccc"
  },
  {
    "url": "assets/js/28.c9b3356a.js",
    "revision": "b6cc2e18ef175daf9a2299744fe1dbdb"
  },
  {
    "url": "assets/js/29.400e1362.js",
    "revision": "b4681157cb264a5cb28bada516003559"
  },
  {
    "url": "assets/js/3.41be76a5.js",
    "revision": "964467a74a7428bfa0ad836ee9482cf4"
  },
  {
    "url": "assets/js/30.bc279bab.js",
    "revision": "90ceebbbc0ba2e6107f1345c930edfae"
  },
  {
    "url": "assets/js/31.cdb3d1e1.js",
    "revision": "c25df0e1bc12cb794d7262d7b9eca75c"
  },
  {
    "url": "assets/js/32.aebb9b43.js",
    "revision": "abc4fe1abd6627b3a622a74333d60db5"
  },
  {
    "url": "assets/js/33.fe211c29.js",
    "revision": "0dc724205b33e2215a9169464a4d6e19"
  },
  {
    "url": "assets/js/34.5493368f.js",
    "revision": "22b5f77fcd5c19f66379b0a78b71a5d8"
  },
  {
    "url": "assets/js/35.2c8b0d10.js",
    "revision": "761b5541536eaf127ffa9f80b4a4e864"
  },
  {
    "url": "assets/js/36.3e2c77c2.js",
    "revision": "0ff843122a1c03aabbeaaaae4b0a743c"
  },
  {
    "url": "assets/js/37.b11ab854.js",
    "revision": "a6260d30b51ca65c395fd00540641049"
  },
  {
    "url": "assets/js/38.a90df71b.js",
    "revision": "f120f04e6fdc04c4f3efb6833223e14d"
  },
  {
    "url": "assets/js/39.aa4637eb.js",
    "revision": "2759ec0f1c4ed66e79ecf3862f57013f"
  },
  {
    "url": "assets/js/4.51d48a0d.js",
    "revision": "b57211f9158232f27091045a17176ab0"
  },
  {
    "url": "assets/js/40.144558b5.js",
    "revision": "de8940ea775cef8c412cc2331f5e71a4"
  },
  {
    "url": "assets/js/41.f4db4534.js",
    "revision": "d53aae66e438f69f0e797a950a2dd4c9"
  },
  {
    "url": "assets/js/42.48f114df.js",
    "revision": "7e72fd7b63080971087c91cec92e6dd2"
  },
  {
    "url": "assets/js/43.f41447e3.js",
    "revision": "4fb9814fe017226667f415c4913aff4e"
  },
  {
    "url": "assets/js/44.7432ca02.js",
    "revision": "b33c242b6391664c63bb799dbc1c2274"
  },
  {
    "url": "assets/js/45.359484b7.js",
    "revision": "e4d09b52387b6584f8e1a4509a5c51e7"
  },
  {
    "url": "assets/js/46.c8d52f24.js",
    "revision": "4c11ef90c72f3def7a35db3c8756a9cc"
  },
  {
    "url": "assets/js/47.85770f0e.js",
    "revision": "d2ce42925a063c1206eb336b3750e1ae"
  },
  {
    "url": "assets/js/48.83fe571b.js",
    "revision": "9d21590d013a009ad2bac37b6f0741d9"
  },
  {
    "url": "assets/js/49.5603f618.js",
    "revision": "c658fad4d7e3235be3c7aeb0f84e3676"
  },
  {
    "url": "assets/js/5.4c4d9a7e.js",
    "revision": "66484d5beb566490fa82dadaf84adf72"
  },
  {
    "url": "assets/js/50.95057f6c.js",
    "revision": "27cfde26e7570e7a1e420332796b2eef"
  },
  {
    "url": "assets/js/51.cd494935.js",
    "revision": "7facb0a6deba11070bde2568dd14d5ef"
  },
  {
    "url": "assets/js/52.5dda07e0.js",
    "revision": "8536be5c0fb63cf037440bf346c0b0df"
  },
  {
    "url": "assets/js/53.6a515a81.js",
    "revision": "544e58415ca618ac6241ec225f223648"
  },
  {
    "url": "assets/js/54.d6bdcad0.js",
    "revision": "944fa3bb7bef80f8f2e766e1f3237bf5"
  },
  {
    "url": "assets/js/55.6912b9a3.js",
    "revision": "faa6f5ef9ac0e7e93d6f03607655d987"
  },
  {
    "url": "assets/js/56.944843eb.js",
    "revision": "777a355d6fa0d0a23b97f29548e264be"
  },
  {
    "url": "assets/js/57.92d89021.js",
    "revision": "a11aed0e8d18b0dff6a1e6a85eb0a1b4"
  },
  {
    "url": "assets/js/58.2e65510c.js",
    "revision": "be3945ceab19af140fcc30e459b41301"
  },
  {
    "url": "assets/js/59.9fa4231a.js",
    "revision": "adc2a9b67c3be01e8c614330ec716ef1"
  },
  {
    "url": "assets/js/6.1d06878a.js",
    "revision": "4476422c0a6a5157d11e91f7cc59d188"
  },
  {
    "url": "assets/js/60.ad323bc5.js",
    "revision": "70edaaffb36d5bd77b357ee269e2502a"
  },
  {
    "url": "assets/js/61.bce1199e.js",
    "revision": "5846690fdf274e08695592266063b9b1"
  },
  {
    "url": "assets/js/62.3ca9059f.js",
    "revision": "c79c194fe78df672312c3046b5d329c8"
  },
  {
    "url": "assets/js/63.8382d92c.js",
    "revision": "6edd77ef758d857ba51d6d715363c2dc"
  },
  {
    "url": "assets/js/64.30a5ca05.js",
    "revision": "eec4464977a5b544add93a6b44ad447c"
  },
  {
    "url": "assets/js/65.f47e6a21.js",
    "revision": "45705ed896f23f1b01761ec35aa9a518"
  },
  {
    "url": "assets/js/66.a7745c5e.js",
    "revision": "08b8521fdc174664879f318c02cdc8f6"
  },
  {
    "url": "assets/js/67.2a7f4520.js",
    "revision": "9a9a9181125d2cb210c2e4cc80d4c392"
  },
  {
    "url": "assets/js/68.82afc834.js",
    "revision": "0412d09ae1f9fa854646fcd200e5b6e9"
  },
  {
    "url": "assets/js/69.58900bb8.js",
    "revision": "7dc596f20e8d2b177e8afeecfb150f3e"
  },
  {
    "url": "assets/js/7.9500f491.js",
    "revision": "f750e481161fb13f147db09ca4ab33a3"
  },
  {
    "url": "assets/js/70.926e6bb1.js",
    "revision": "a4c51aafde2d1a7826456c4fa3002142"
  },
  {
    "url": "assets/js/71.57fea0a8.js",
    "revision": "d924d047d7e41b494ba8a2c962f8ffd3"
  },
  {
    "url": "assets/js/72.a94ee616.js",
    "revision": "e2e647ca107e3329bc636491c1a6463c"
  },
  {
    "url": "assets/js/73.1daf9946.js",
    "revision": "e029719cc4d1d31c6b506362efb68b6e"
  },
  {
    "url": "assets/js/74.28028a74.js",
    "revision": "fdd1932ea341b59b733bf8462ca9cb0c"
  },
  {
    "url": "assets/js/75.8e15936f.js",
    "revision": "55678ca46eaf68016a15f6b1294f31a7"
  },
  {
    "url": "assets/js/76.7e91049b.js",
    "revision": "7f2d32248363a6ba7d750a9d71a33483"
  },
  {
    "url": "assets/js/77.659693cd.js",
    "revision": "f8811c4614dd2f979d9f10813af01395"
  },
  {
    "url": "assets/js/78.951f06ab.js",
    "revision": "ada8ee016f83b7e9a5f1185385d6ad36"
  },
  {
    "url": "assets/js/79.bf5c03fa.js",
    "revision": "9a8d84da3b5e40bd7adb9ac4201478f3"
  },
  {
    "url": "assets/js/8.c8394592.js",
    "revision": "cf05cb3a8d0029f359ed89b69ff418d9"
  },
  {
    "url": "assets/js/80.13e68742.js",
    "revision": "d0116b9d4c224a214258713ecb1bc5da"
  },
  {
    "url": "assets/js/81.9a9c0dcc.js",
    "revision": "21b2f5ed279916803af9f05162d15ed9"
  },
  {
    "url": "assets/js/82.38fee140.js",
    "revision": "a7303f65d5d2c8808d4eb656ab3ea436"
  },
  {
    "url": "assets/js/83.cf047a80.js",
    "revision": "991719a0d407cb16120beaf881fccd07"
  },
  {
    "url": "assets/js/84.de088894.js",
    "revision": "d3bd8da028234fa5308d2b37d661bf29"
  },
  {
    "url": "assets/js/85.0443cb2f.js",
    "revision": "36f986c1bfd62965292d88aa07f9ba2c"
  },
  {
    "url": "assets/js/86.6f1b1a11.js",
    "revision": "3097320f3bd7ae912d45b9a9664526af"
  },
  {
    "url": "assets/js/87.e3bdce77.js",
    "revision": "eb9ad99153e2715fd675d200773b7d9b"
  },
  {
    "url": "assets/js/88.e05d456e.js",
    "revision": "f452d3da83b83ac5f909cd4b17342cac"
  },
  {
    "url": "assets/js/89.824c0421.js",
    "revision": "366a555a06b319280cb5957b235a52d7"
  },
  {
    "url": "assets/js/9.c7798109.js",
    "revision": "14e31d7b162942c7d432ccf53ee120eb"
  },
  {
    "url": "assets/js/90.8382c857.js",
    "revision": "144db354da2349a8b45cebed03dec391"
  },
  {
    "url": "assets/js/91.e8cd9569.js",
    "revision": "34e16f27132d44cbfc17cb25c08d1f98"
  },
  {
    "url": "assets/js/92.9b214b1e.js",
    "revision": "bef2a54686cad86f701f42c0898c5e0b"
  },
  {
    "url": "assets/js/93.fdb298b4.js",
    "revision": "d8860c2c3bf70abf98b240d518721f18"
  },
  {
    "url": "assets/js/94.58d4adff.js",
    "revision": "be64d5092a1c9d4afde45ea1b72e7a53"
  },
  {
    "url": "assets/js/95.eae79c82.js",
    "revision": "6c48c92ab16c9b3f7badcde7a7f1fcac"
  },
  {
    "url": "assets/js/96.c3eb5b91.js",
    "revision": "ff1160df47c5573a8f1e9de4fc43bfd3"
  },
  {
    "url": "assets/js/97.f3b52ff0.js",
    "revision": "c601527cb188856f9b47981d028fd38d"
  },
  {
    "url": "assets/js/98.d9efdfcd.js",
    "revision": "486706a0e90b30ba3297c5fe57cc61f0"
  },
  {
    "url": "assets/js/99.9283013b.js",
    "revision": "4e5fbb594c98d165ddebf5006d01d964"
  },
  {
    "url": "assets/js/app.7b0fa644.js",
    "revision": "bdc28c7a25d52de9175f77cff0a0d8f6"
  },
  {
    "url": "assets/js/vuejs-paginate.43305c6c.js",
    "revision": "b866e2c736303ee1d0993c09a83c22a7"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "93446f108efe1a472e90875e949400fb"
  },
  {
    "url": "browser/devtools.html",
    "revision": "41c23fc17e1b45b2685794bacf4d0b4d"
  },
  {
    "url": "browser/index.html",
    "revision": "69597059dc4ec9cf868c7e3e072999ca"
  },
  {
    "url": "browser/life-of-a-pixel.html",
    "revision": "c284379a1933a30db73ed634b36a1b29"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "59353f1c8dfa73039e8fe9caf622968c"
  },
  {
    "url": "browser/spa.html",
    "revision": "d5307ed02073b910a92f2d047f0d9e2d"
  },
  {
    "url": "browser/web-frontends.html",
    "revision": "e943faed0c250d7f06546245fd7aa17b"
  },
  {
    "url": "browser/web-socket.html",
    "revision": "25840aa645fc4efcbc3cf37fecf28a0b"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "4432c8dd1960576b742a683c2e897db6"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "2c7de42574c2cde278a9bf613ad697d6"
  },
  {
    "url": "clojure/guide/course.html",
    "revision": "c8ea7bcae1652092d124a8b93eb4fa3d"
  },
  {
    "url": "clojure/guide/fullstack-webdev.html",
    "revision": "7e060dd61c86ab32730ea37328ed1d05"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "3a1f9c8ab98eb10d4983cb17150f01f2"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "9da978f7c297bf2f4a61c545d12b3f86"
  },
  {
    "url": "clojure/guide/reactive-programming.html",
    "revision": "26746e31ae32b17b2d40b46a03faf157"
  },
  {
    "url": "clojure/guide/repl-driven-dev.html",
    "revision": "fa40056c2f5c4d0b5aa3b0dc39606d67"
  },
  {
    "url": "clojure/guide/single-page-applications.html",
    "revision": "181237412e7a30067154dfeb2dee6ddd"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "d58b5d71fd89519732e992a4e0637001"
  },
  {
    "url": "clojure/guide/ui-planning.html",
    "revision": "cd3bc526a84ab40daa7d2d35714a8a36"
  },
  {
    "url": "clojure/index.html",
    "revision": "8e789adb76e5193f876f33cfc6cb22d6"
  },
  {
    "url": "clojure/libraries/index.html",
    "revision": "2ae949482e640ad4fbafb6255fb3c458"
  },
  {
    "url": "clojure/libraries/shadow-cljs-build-tool.html",
    "revision": "5cf489ceee9eaba2c5796dc735a7bbb9"
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
    "url": "img/browser/event-bubbling-capturing.png",
    "revision": "3810ad4f01f1d6ec6defd8ba46a826e6"
  },
  {
    "url": "img/browser/event-capand-bubbling.png",
    "revision": "d575feae0e281c63900e1804fd179790"
  },
  {
    "url": "img/browser/event-phases.jpg",
    "revision": "d0834ec485c921485f34535ae09fd702"
  },
  {
    "url": "img/browser/main-thread.png",
    "revision": "b921dddca4b1837eb70b57eb32fd8ac1"
  },
  {
    "url": "img/browser/web-sockets.png",
    "revision": "b7a627d6e245cc56cd08e13cae662f9f"
  },
  {
    "url": "img/browser/ws-workarounds.png",
    "revision": "2c49d6872e4b6daa8083ddb0773835fe"
  },
  {
    "url": "img/cs/time-complexity.png",
    "revision": "2add5d88e954fefb55fad11ba3c01854"
  },
  {
    "url": "img/forms/new-user-form-with-roadmap.png",
    "revision": "3ebd5b8ce9e0e0a1114ede9d74264b1b"
  },
  {
    "url": "img/js/global-states.png",
    "revision": "850ba905fd4991aff5ec55c2bae0fdc2"
  },
  {
    "url": "img/js/spread-operator-react-reducer.png",
    "revision": "8e808febdb24228b56f4bc1603d3b3a7"
  },
  {
    "url": "img/js/spread-operator.png",
    "revision": "41afe7fb234681f3ccc899efb96c5c88"
  },
  {
    "url": "img/js/string-identifiers-best-practise.png",
    "revision": "9d38cab0a3076ab70c26f5e8804ac377"
  },
  {
    "url": "img/validations/inline-vlidation-form-design.png",
    "revision": "ba545d06394e875d36606a5123dfe26d"
  },
  {
    "url": "img/validations/slack-password-validation.gif",
    "revision": "aa9781e75835e36f4dc347d58272e41a"
  },
  {
    "url": "img/validations/twitter.png",
    "revision": "3679113bb2b8638f4961adba436eb4ae"
  },
  {
    "url": "img/webdev/js-const.png",
    "revision": "0309b6ee34b5eb51ede8e14e7bbbe7ab"
  },
  {
    "url": "img/webdev/js-symbols.png",
    "revision": "f638961d073e4e3e8ba1dcf7034c96db"
  },
  {
    "url": "img/webdev/react-hooks.jpg",
    "revision": "7a3529ac5d7246fe0017df13bd599f7b"
  },
  {
    "url": "img/webdev/template-literals.png",
    "revision": "f1b3113cc3f61337d88449ef673ee757"
  },
  {
    "url": "img/webdev/web-developer-toolchain.png",
    "revision": "686ed8806f13ca657a70d2a9d757a001"
  },
  {
    "url": "index.html",
    "revision": "6f4837d5edd8c17670ac1409758f7f7f"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "eab94df0ba72ccde80ab3b736c43eaf1"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "5dc39926dfbd37423a6a30a5acca6198"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "8b9476b661936c3ec05bd9874ce9dd90"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "5aafed3fd1c874ddbee27dca37630061"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "206b89cdaa2eede57b2a3982a35572b9"
  },
  {
    "url": "javascript/guide/es6-features.html",
    "revision": "f81921151d43351bbf84019783e132cf"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "0cd348bc36f8dcd391730f182bcaccb3"
  },
  {
    "url": "javascript/guide/event-listner.html",
    "revision": "b2d2777335606fa3bcf91838dd854dd0"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "196f1f7ac5d12722514adb84d1358f81"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "f8ac5253f3a9cd63f9312dc936303381"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "a3389bf3886ac11867ff17c03fef2304"
  },
  {
    "url": "javascript/guide/interview-questions.html",
    "revision": "0146886b2c631388b704041731cdb550"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "494ccb879f1344c558edb9f209ba924a"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "ebe72dfbdb822ccbc30a13f6c6d85e16"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "6af8f1e036dd2445b69224b5e8d65cac"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "6c50648d6558e093a3f78ebf3db21c7c"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "d6abb3ceae747d5337912cc297618436"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "7e1e08ce9135546f4606ca53ac44de74"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "12fc57b321bcd57cc02e923f171b8129"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "9ee11a344fd9be6beed95ce926a97da3"
  },
  {
    "url": "javascript/guide/symbol-bind.html",
    "revision": "2a343b431ca07c6e82ec67442e5e34f7"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "e3e6c4aa21acc1d517fac65d04b07626"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "3dd7b5348c9dcc674c4ca1757508ef34"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "fc3e1f32e7e31b874ab1a299fa2bea01"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "1e9c77404ea0cf7061ab31365abdd72f"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "fc9aafae0729d1f3914ebb8e4cc2338f"
  },
  {
    "url": "javascript/index.html",
    "revision": "8e5c03b1b041a0ab8566d813f759d4e8"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "5bdc39da15cd254352cbfd8da60f5cbb"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "91aee5cdb6741635f2b15c4eda365f07"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "0085655b49542844c123e3b3f0a5b819"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "9e8f8f28474cefe190f0a78ced47818d"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "0cdc65074841ff77f14a2a4f23a98dc6"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "c0fbabc4f0a699254e287c03dff1c2b2"
  },
  {
    "url": "javascript/libraries/react-hooks.html",
    "revision": "ddc6acac39b7b927b0915300022b2557"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "367e1ea8ee8cfdb234a420a357d9b483"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "eb7ca70828e683e010197244455af76f"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "eec2078049de06e646a3d4cc01f88876"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "f45e06e7600de7f1a79ee5c175f28e33"
  },
  {
    "url": "material.html",
    "revision": "dc1d264f166519435ab47f839ec8d9b8"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "2fc01d77c3a27c08d1cae9b92f43df1a"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "95f9e118fded0d64c0e27089cd22e64a"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "46c861c28b215dc0ad92e7ff19c27d8b"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "0956ab5743422e93e99d93e607f90993"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "47d1e8c4b0d114c21bc91d64135a5f2c"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "258fd8b4ddab652f9cff95040eda1979"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "f8d6999528356eb85228bb1ead863d52"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "8f8d72ce989143a5a26e768b45ba047e"
  },
  {
    "url": "posts/index.html",
    "revision": "43ed13922f176dd4d072bedd56307a88"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "a0a3829961a2ca19159ec2f188a4c5be"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "e422b334360ab9fa68f520d8103afcc1"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "8eb4c7dfc1ddeffe51a4e3afc173af80"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "e6f9450d83aadce4bedf74974bbcf9d0"
  },
  {
    "url": "rust/index.html",
    "revision": "ce95db7d497ba5d32cfb47848ad9b79c"
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
    "revision": "dd5fe5dc5c8efed895e157ad77de6c63"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "8e48b908536e5cec119e8adf4dd6b822"
  },
  {
    "url": "technologies/aws.html",
    "revision": "75457cce3e2d8c879198ffae0ce58095"
  },
  {
    "url": "technologies/css.html",
    "revision": "1265261f80701b9f179d94f8c840e93a"
  },
  {
    "url": "technologies/history.html",
    "revision": "28dc6d9cc507290a0bb65ce23ddf4102"
  },
  {
    "url": "technologies/index.html",
    "revision": "f207487296ecf9872ea0035f3bc60b8e"
  },
  {
    "url": "technologies/modular.html",
    "revision": "6bdc8f31a6812364dead050af02bbd62"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "ee7cc5c5a477651cedd53f246a169673"
  },
  {
    "url": "technologies/regex.html",
    "revision": "b1b9d256b3fba2006fd02bd9611853a5"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "ccefccdaeb78e75ba4272191f6e34658"
  },
  {
    "url": "test/index.html",
    "revision": "ac5f9bf56536d00d3f7032b3afce59af"
  },
  {
    "url": "test/using-vue.html",
    "revision": "d3d10e827663dba7a2501396ae14fd5b"
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
