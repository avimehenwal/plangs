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
    "revision": "cf9d14650aad849e0624872e7e6dd66d"
  },
  {
    "url": "apis/github.html",
    "revision": "6029dc58c85b6e0198a1c29c7603a53a"
  },
  {
    "url": "apis/index.html",
    "revision": "52baa7a9e0c5210ca8f611e2472b8412"
  },
  {
    "url": "assets/css/0.styles.1d8739d2.css",
    "revision": "3a467d852736f9ae77e14ef3c29da36d"
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
    "url": "assets/js/101.2d014f9d.js",
    "revision": "5e62b34061678872d37990c6e5b8a450"
  },
  {
    "url": "assets/js/102.1e1f9d71.js",
    "revision": "b2ae413c377a2c3e6e496c41657f4505"
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
    "url": "assets/js/11.8960f3b2.js",
    "revision": "020d6dd18b68df1010f9c444be222e08"
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
    "url": "assets/js/15.bfecb377.js",
    "revision": "d3171b0b8eddd05f02bacc4abbb5e766"
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
    "url": "assets/js/34.27b475f9.js",
    "revision": "cfa52183939b42703e94c36a2236ea2d"
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
    "url": "assets/js/5.e2af887c.js",
    "revision": "32032ed9b442d3ffbdafa45429ddbea5"
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
    "url": "assets/js/8.6c8e86f2.js",
    "revision": "f7ae6b1559f427461db6bd9b77efd8f4"
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
    "url": "assets/js/app.2e0d70b6.js",
    "revision": "33b10273aaa6ff02706971eef0f51610"
  },
  {
    "url": "assets/js/vuejs-paginate.43305c6c.js",
    "revision": "b866e2c736303ee1d0993c09a83c22a7"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "dca71b98a9e4c06fdc7a811dab27e81e"
  },
  {
    "url": "browser/devtools.html",
    "revision": "ff6c7843412cf338f6a0e86f2fd3153e"
  },
  {
    "url": "browser/index.html",
    "revision": "f3518186897047df574d34c0e1b63952"
  },
  {
    "url": "browser/life-of-a-pixel.html",
    "revision": "029f44f947f178208136bf25d47334ac"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "025276062040fa4e5f2307652066da0e"
  },
  {
    "url": "browser/spa.html",
    "revision": "60b6067d4c79b3f79d7e90f078b4d3a4"
  },
  {
    "url": "browser/web-frontends.html",
    "revision": "472c847b0c1173f9c366c5dabf6c0fbf"
  },
  {
    "url": "browser/web-socket.html",
    "revision": "c5105dc87f334265a883e558898e23f2"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "f98bb1b21ab4df606c0c54dfd13e7098"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "15ba11ce23d71e3e454da6b12b9df8c7"
  },
  {
    "url": "clojure/guide/course.html",
    "revision": "cb337a698983f2c66ff783b04e303c49"
  },
  {
    "url": "clojure/guide/fullstack-webdev.html",
    "revision": "9582b6bbed9fb17f7b2ed3628499b16c"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "617fe3262a302e4efa252304e631c07a"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "af6b6980c25ddf65ca2cb11e0067839a"
  },
  {
    "url": "clojure/guide/reactive-programming.html",
    "revision": "1868bde8d2f415d8ea5bec5feaf9f381"
  },
  {
    "url": "clojure/guide/repl-driven-dev.html",
    "revision": "7d9086034008131ad1ec6f853be284fd"
  },
  {
    "url": "clojure/guide/single-page-applications.html",
    "revision": "02687a20a317e11d28f05ecff85c9aad"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "05472895041532599a6c670d731a4bc9"
  },
  {
    "url": "clojure/guide/ui-planning.html",
    "revision": "8d2ca16ea91ed5e0cdc333364387e2e2"
  },
  {
    "url": "clojure/index.html",
    "revision": "bc3ce3c85f3836c4052827d511cf792b"
  },
  {
    "url": "clojure/libraries/index.html",
    "revision": "bf31ae3f234ec033b724c1597dd286ab"
  },
  {
    "url": "clojure/libraries/shadow-cljs-build-tool.html",
    "revision": "3684e0d3c56b5f3b02d9a66172331aca"
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
    "revision": "ec40c3b4d5ff39a47c264458fdea047a"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "60f7ab295129547230ff53077f265c74"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "96713b66765709ea8bf8119ed91dbae7"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "c0eb724b930c7b46c7f9d80844ece677"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "14ee0468a2f168ee638c85db41ea2cf6"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "d5f8af6192cee7330c0135b78c631f56"
  },
  {
    "url": "javascript/guide/es6-features.html",
    "revision": "6b02d2a78349e3bfcbf8d80c84fe7a2a"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "860ccdd3874ee924a009f249176d2a6d"
  },
  {
    "url": "javascript/guide/event-listner.html",
    "revision": "fe7bc5fb65db443dad9643b25032ea1a"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "f785e3745f300b5c372eee7ec9504647"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "031a3c5b439bab2e7bf23b0f94d9ee68"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "675eef0b6c203c141e0f9e71f18ceb52"
  },
  {
    "url": "javascript/guide/interview-questions.html",
    "revision": "63d7f83ee0810385f861dc3c3372fef8"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "46186eec6581907f62f2b113f93b95fc"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "a16fa8db216d010c6a5b84b50378f5f1"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "12857995364e20f7a8d03c01fc0aab4d"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "33fbcec7295320303786533b28a5270d"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "420aaa4522e36c1cff8db7b5748e35a6"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "7f8e71281809ef8aad782a3218c347d4"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "8a4fc2c7df7ebb52efd4c038097d80d0"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "dff0f11cde9897a750c582f2c534bf13"
  },
  {
    "url": "javascript/guide/symbol-bind.html",
    "revision": "b1ed43e0ebb23fdbf60b4eb4e1daf49a"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "cef713072b8967bdc3c6ea8db70e5339"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "26c31b47f1cdeff60bfa95fb4eafea71"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "53e8def4ccc03c1ed999c2f25977691f"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "1e5bc1147f9e771db073dfd3b8886c8e"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "14b2cead78b87c98fb7127f8c6689b9b"
  },
  {
    "url": "javascript/index.html",
    "revision": "7160123b5e52c13daf373b17d27a8eeb"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "d5a1bc443981b9829a9e014dfd57ef3b"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "07c0fbdd82ad976852b82c77fe966c2d"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "3c5078e9955e8a566b34db0c9b1bbbd9"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "ecd04bfa0e919ed2482ea0a47c6bbca2"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "018370e0d4a11f91b6e4117f2b816435"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "dd60a3cceaf29cb8ab649312689f863c"
  },
  {
    "url": "javascript/libraries/react-hooks.html",
    "revision": "5fde7f6e036badf5a77c97b322f68f34"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "e9e557bdde6969941856552761645931"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "a2df2eaf8a3a7177149116c95a9c0905"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "07ff670b55ac8c632388269da004b167"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "9631465446d2b3cf0dfe3bbe2c589f5f"
  },
  {
    "url": "material.html",
    "revision": "000a4f5d2d80b5d2a4ad0af26c532a5c"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "841994db30044c835a588c11d446aa22"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "93a5e750a50e2a1a67f0e77421d068e4"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "8859b8b49198ae1e4f70c4ad13cab468"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "128e8da8bdeceb1b52f195e36d576459"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "5e0030e48e11f0e543d32b8425f83b93"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "8e3fc6bd87ac588919e49e7ae427bd4e"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "1c5dc21f4b9ff6c2aebde8b0638dbe2a"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "b00776c8b541f3575a72e4a196525b31"
  },
  {
    "url": "posts/index.html",
    "revision": "ed2b50af91aaa19afb81190af6061f1d"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "9e86bf62e88499929858b363079ebbdb"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "d2469887b221b092a3ddc7fcdcec6ca6"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "14bea2a6c198c5f1d96fb1ce042498bb"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "35d029b4a02292cc903d8de02a7b4589"
  },
  {
    "url": "rust/index.html",
    "revision": "d9a4efe3f06e087bd8dbd3a3c42e5184"
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
    "revision": "9ec0d1166202fddb14a0489f7e0d2a40"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "6b0038dce2e2ce950d19239ab0669219"
  },
  {
    "url": "technologies/aws.html",
    "revision": "7d69c77fc3cf864465eac8ba3b654414"
  },
  {
    "url": "technologies/css.html",
    "revision": "140dce86273ce9b6e2aa16292f6517b6"
  },
  {
    "url": "technologies/history.html",
    "revision": "02b85147fbbfe64bd5643e8f158dcade"
  },
  {
    "url": "technologies/index.html",
    "revision": "b25f81bc36550b70d3824df38ce7ec73"
  },
  {
    "url": "technologies/modular.html",
    "revision": "a5450d130798930d0c4e9636b1a1d52f"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "29e492fa7e66a4df828d263d24840ff3"
  },
  {
    "url": "technologies/regex.html",
    "revision": "1f94fa632ef7c885eabe908053eff0d6"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "7896d27158c7eeff1ca9cdc71c685bae"
  },
  {
    "url": "test/index.html",
    "revision": "053e21aafa84a86895b55238da8d9ea0"
  },
  {
    "url": "test/using-vue.html",
    "revision": "fe06771e50dd386049c750d68fc5b8ee"
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
