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
    "revision": "46c22b4f6db6faaac14a357903002fa8"
  },
  {
    "url": "apis/github.html",
    "revision": "0d5d2ac966f4d33a75bb99208bb9cbbf"
  },
  {
    "url": "apis/index.html",
    "revision": "929e5ea2b99ea42a87c48de6cd9e6210"
  },
  {
    "url": "assets/css/0.styles.d8ba6e24.css",
    "revision": "ce1c90738a7ae4dfa4693a95d86ef59e"
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
    "url": "assets/js/100.536a5ea9.js",
    "revision": "7f580eff6aad06a650fa9656dea76ec5"
  },
  {
    "url": "assets/js/101.63baa5f8.js",
    "revision": "e8b0632b69f1241c346ff1dff172432f"
  },
  {
    "url": "assets/js/102.504090ca.js",
    "revision": "9c3c51a12637426be5a0d782a244af4b"
  },
  {
    "url": "assets/js/103.005c1d32.js",
    "revision": "3b04f96c296b9ebe0a3509fe8c75a1e9"
  },
  {
    "url": "assets/js/104.39648938.js",
    "revision": "36c437ea9683dd2a5edc04d7ab19f6d1"
  },
  {
    "url": "assets/js/105.8bfb6511.js",
    "revision": "055c585ad7f2499c86260dd466de3150"
  },
  {
    "url": "assets/js/106.29e6fcd7.js",
    "revision": "4a8a82cb7e44db7f10a889f9a13ef0c9"
  },
  {
    "url": "assets/js/107.e3eb39c1.js",
    "revision": "12402b4b133de8ae2f648a3b22df04b2"
  },
  {
    "url": "assets/js/108.ea64bb3e.js",
    "revision": "c02baa2154c4494cca002dfc4957b7df"
  },
  {
    "url": "assets/js/109.817d07f4.js",
    "revision": "837617d30db9a67d13bf38a643eb15a8"
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
    "url": "assets/js/12.5ea2a568.js",
    "revision": "8050bffeb97c631ff3af4b5e9aa4039f"
  },
  {
    "url": "assets/js/13.63dee380.js",
    "revision": "c5412429cbec904ff4f20ee30e5b67da"
  },
  {
    "url": "assets/js/14.aeaa7417.js",
    "revision": "1bc5a3516ab2f9675455e07c96ad4cdf"
  },
  {
    "url": "assets/js/15.32e0dffc.js",
    "revision": "bff08b335bc38f4ce8767732f23b2728"
  },
  {
    "url": "assets/js/16.bc66e356.js",
    "revision": "d110a2f6a03772cee21777275ba68854"
  },
  {
    "url": "assets/js/17.5a951272.js",
    "revision": "a6d0aba2f2af7a9ee7b245128ca123a6"
  },
  {
    "url": "assets/js/18.e8191238.js",
    "revision": "bd746f2d60859aa5a019f4877b91356e"
  },
  {
    "url": "assets/js/19.23928f4b.js",
    "revision": "88d86da87201485c381d8e6b4629ee10"
  },
  {
    "url": "assets/js/20.08dcf5f6.js",
    "revision": "9aab30c5062d15b637d6a1ed435951f5"
  },
  {
    "url": "assets/js/21.b300fab5.js",
    "revision": "26e4244d1083d29ef3399c3396e2f6ea"
  },
  {
    "url": "assets/js/22.64a4480b.js",
    "revision": "6ce643ac246753bc230fc3fd70ba0435"
  },
  {
    "url": "assets/js/23.898d524e.js",
    "revision": "51721565a713ae56c9d9e23846a2cc80"
  },
  {
    "url": "assets/js/24.333540fa.js",
    "revision": "54f76bb0bd32b633f56c4c77e8843dab"
  },
  {
    "url": "assets/js/25.0570e95b.js",
    "revision": "73f05f4ac0d40ac05a4c226dafa52209"
  },
  {
    "url": "assets/js/26.6cfbb21d.js",
    "revision": "34402b66fc08485484bacbf312fbbc3f"
  },
  {
    "url": "assets/js/27.31b0eca2.js",
    "revision": "0d75a730676ac51426e124f4cb92f475"
  },
  {
    "url": "assets/js/28.b692fed4.js",
    "revision": "92b9cb5a71d3fda924891da3de9f6d71"
  },
  {
    "url": "assets/js/29.e974fc3c.js",
    "revision": "0d888290c322dfb54afc74419135135f"
  },
  {
    "url": "assets/js/3.41be76a5.js",
    "revision": "964467a74a7428bfa0ad836ee9482cf4"
  },
  {
    "url": "assets/js/30.a46ce94a.js",
    "revision": "517b90ef74b9353119608a542aaa0af4"
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
    "url": "assets/js/42.16f7208f.js",
    "revision": "7e69bd21df6989fcfe21cdbb2fa4c882"
  },
  {
    "url": "assets/js/43.da9a06d5.js",
    "revision": "8adc57ff6b4a2cd593442b5dd401feb5"
  },
  {
    "url": "assets/js/44.c8a5d2e5.js",
    "revision": "4b5c7d143ae544225c2e64397ccb78e8"
  },
  {
    "url": "assets/js/45.d7bb8d06.js",
    "revision": "7a5a96c63dc5df535f88f043ca8ab430"
  },
  {
    "url": "assets/js/46.dc6619a0.js",
    "revision": "6dd19b276037bac9a343c760ce99ef81"
  },
  {
    "url": "assets/js/47.bb5b8425.js",
    "revision": "c4fc44871c88abaf8046ad8cb79040f1"
  },
  {
    "url": "assets/js/48.f699c64f.js",
    "revision": "a780bbe36c8d03d9b489a56f4f25a224"
  },
  {
    "url": "assets/js/49.817efcd0.js",
    "revision": "87a4ab407d5e352287921522e2693a3d"
  },
  {
    "url": "assets/js/5.4c4d9a7e.js",
    "revision": "66484d5beb566490fa82dadaf84adf72"
  },
  {
    "url": "assets/js/50.6b3f646e.js",
    "revision": "5a62ee8f7f2005d3e19b414a075514ce"
  },
  {
    "url": "assets/js/51.510424a9.js",
    "revision": "f1c90a0b9ccad011dfd3d44662603640"
  },
  {
    "url": "assets/js/52.5e613770.js",
    "revision": "43b4e17ac669135102ad0f6f6dee4681"
  },
  {
    "url": "assets/js/53.6a515a81.js",
    "revision": "544e58415ca618ac6241ec225f223648"
  },
  {
    "url": "assets/js/54.fe75c148.js",
    "revision": "a8d34c9fff3cef730c0aafb99865479d"
  },
  {
    "url": "assets/js/55.55607ff7.js",
    "revision": "fa3022de2d3ffd8415d23c1e95158157"
  },
  {
    "url": "assets/js/56.a024c8ee.js",
    "revision": "8833eab7439a7f405e53edd9b3d4aa57"
  },
  {
    "url": "assets/js/57.92d89021.js",
    "revision": "a11aed0e8d18b0dff6a1e6a85eb0a1b4"
  },
  {
    "url": "assets/js/58.f80fc529.js",
    "revision": "88edc3c0e297a2f0278d4aada77da0a3"
  },
  {
    "url": "assets/js/59.e106c1e2.js",
    "revision": "52817fed203150e716d403148436a2ad"
  },
  {
    "url": "assets/js/6.1d06878a.js",
    "revision": "4476422c0a6a5157d11e91f7cc59d188"
  },
  {
    "url": "assets/js/60.6560c250.js",
    "revision": "823dbd190ce7a887c5f93df4ee0690b4"
  },
  {
    "url": "assets/js/61.53c02c58.js",
    "revision": "5bd901b1c6db106411acabf2e33ed0ee"
  },
  {
    "url": "assets/js/62.a5aa9aee.js",
    "revision": "83a693a085bbec04df2e5f3eea64d0b7"
  },
  {
    "url": "assets/js/63.8382d92c.js",
    "revision": "6edd77ef758d857ba51d6d715363c2dc"
  },
  {
    "url": "assets/js/64.2a11fed1.js",
    "revision": "4e7bd344e2f4388da71d93ab8823049b"
  },
  {
    "url": "assets/js/65.f47e6a21.js",
    "revision": "45705ed896f23f1b01761ec35aa9a518"
  },
  {
    "url": "assets/js/66.2e914e26.js",
    "revision": "fd6328ee52b2034f16f97321e3a5c8fb"
  },
  {
    "url": "assets/js/67.94da4dc8.js",
    "revision": "e82c5e14e7489778a178a597910f9b68"
  },
  {
    "url": "assets/js/68.d2ef74c3.js",
    "revision": "8ea4f247be0a9a85e7283054403460fb"
  },
  {
    "url": "assets/js/69.b453ae37.js",
    "revision": "3d60cd0e476c09c1a1c837079dcbb89a"
  },
  {
    "url": "assets/js/7.d06bf22f.js",
    "revision": "df26ae8972ca0ae7ebf54fd4a6a8fbc9"
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
    "url": "assets/js/72.7b4ddd30.js",
    "revision": "1fde9b87b005902d225570a4e36e0c63"
  },
  {
    "url": "assets/js/73.a0f07d9a.js",
    "revision": "e8eac008579c128e660c8d478098cecb"
  },
  {
    "url": "assets/js/74.af3ed47e.js",
    "revision": "8de51f777ba53e54616bee3fb3ed39d8"
  },
  {
    "url": "assets/js/75.25330e73.js",
    "revision": "3696b0d8689a1ce4d69cbcd6ebccacc5"
  },
  {
    "url": "assets/js/76.7e91049b.js",
    "revision": "7f2d32248363a6ba7d750a9d71a33483"
  },
  {
    "url": "assets/js/77.a360d28e.js",
    "revision": "9f87c532f8b583b47971acb2f23b0150"
  },
  {
    "url": "assets/js/78.3063b989.js",
    "revision": "d13739417caf08640478f3894aebf5b4"
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
    "url": "assets/js/80.e5ac53aa.js",
    "revision": "0b0ae33dd9f4ded98038c0d7fd8cb282"
  },
  {
    "url": "assets/js/81.29654e0f.js",
    "revision": "eb140f517a36782b9404a2da4ecb7b9d"
  },
  {
    "url": "assets/js/82.e6d37a34.js",
    "revision": "52e1543e2e0641ffd45cbaf8661b639d"
  },
  {
    "url": "assets/js/83.2a0f40d4.js",
    "revision": "05f72dde08ade3741e35a545cb59be20"
  },
  {
    "url": "assets/js/84.1ddbe0bb.js",
    "revision": "e1d7d2598e54b60cbabff8d3239c8bf0"
  },
  {
    "url": "assets/js/85.57ff8a86.js",
    "revision": "6d3e03f9011fddb8b2db87deac56c12f"
  },
  {
    "url": "assets/js/86.c5298048.js",
    "revision": "d3379af97aff27c8a987fe2e84e9cfbe"
  },
  {
    "url": "assets/js/87.de8e20f6.js",
    "revision": "4151abcfbeac4dea07b4f2550425e5b8"
  },
  {
    "url": "assets/js/88.2f9b6c4a.js",
    "revision": "a7b6077c659171d30ebb5a216033a2d1"
  },
  {
    "url": "assets/js/89.429c94ee.js",
    "revision": "871e5c25a751f4180d86f0d1400fdc82"
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
    "url": "assets/js/91.b80ee9d9.js",
    "revision": "5725c4008e5672fcbacf2d8fbd394915"
  },
  {
    "url": "assets/js/92.7b2e6aa0.js",
    "revision": "f1fc148b8158d999cb96e2549bb18ea5"
  },
  {
    "url": "assets/js/93.46c1c4a9.js",
    "revision": "b4c73934d243da06a71220178537d26c"
  },
  {
    "url": "assets/js/94.ccc6cbf3.js",
    "revision": "01ed08acc8a0bf68b21e2256fd6a065e"
  },
  {
    "url": "assets/js/95.59800dfa.js",
    "revision": "8d461b39e6713aa6b33b7b0a593d33e1"
  },
  {
    "url": "assets/js/96.6f8d5260.js",
    "revision": "7522aa0b93febdc35b30359a7f77960d"
  },
  {
    "url": "assets/js/97.1384b849.js",
    "revision": "9fb9b5820df8e2a502d7b545f1e511c5"
  },
  {
    "url": "assets/js/98.92943316.js",
    "revision": "0b43d9082667a9db749f6ba6406369ac"
  },
  {
    "url": "assets/js/99.e7f1aaaf.js",
    "revision": "59dcf6fd0febc4c30950113f72bc311a"
  },
  {
    "url": "assets/js/app.8d25982a.js",
    "revision": "e4ca94223e851b19899f7876af461fef"
  },
  {
    "url": "assets/js/vuejs-paginate.43305c6c.js",
    "revision": "b866e2c736303ee1d0993c09a83c22a7"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "d3f4fdcd6cf5ce26f641555ac42aac9b"
  },
  {
    "url": "browser/devtools.html",
    "revision": "c34773e1d4cdc3500dc29a4e7297ee82"
  },
  {
    "url": "browser/index.html",
    "revision": "06e0a9c79d047d02389ed067a18690a1"
  },
  {
    "url": "browser/life-of-a-pixel.html",
    "revision": "caa19b33499ce8e03088a31d939b1151"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "69b4a34f4e35af99365ad1f239af463e"
  },
  {
    "url": "browser/spa.html",
    "revision": "d008bc092ea3e2f0e698c1bfb3a4819e"
  },
  {
    "url": "browser/web-frontends.html",
    "revision": "3505345c1355e8d2067701721365495b"
  },
  {
    "url": "browser/web-socket.html",
    "revision": "40ab3753a420c3bcddd9dec355a41bd6"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "661c4989720f1eeb335e06bb9a840e51"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "2a2d7c0739a5360490ceebe9528537c9"
  },
  {
    "url": "clojure/guide/course.html",
    "revision": "e6924fdce1ed5a2911998ee722e37692"
  },
  {
    "url": "clojure/guide/fullstack-webdev.html",
    "revision": "bc4bdb053d9e315fe443f25ac67e4290"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "ef83b023f51a4f45b048f972772bab1b"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "21f5c7ee284e3bf993ed524390b2c706"
  },
  {
    "url": "clojure/guide/reactive-programming.html",
    "revision": "4bb1ad3f4e112798c0819279250ca6fc"
  },
  {
    "url": "clojure/guide/repl-driven-dev.html",
    "revision": "35a63af63d798e7bbbdddd290dc08edb"
  },
  {
    "url": "clojure/guide/single-page-applications.html",
    "revision": "19f284a7e2dc1b0aa4fa3b6bb3a6a6a2"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "1861c2e153236b65f81c42e586f6c7c6"
  },
  {
    "url": "clojure/guide/ui-planning.html",
    "revision": "de47d46f58af6387a7410bc03db76662"
  },
  {
    "url": "clojure/index.html",
    "revision": "cca61537d6200e05dde1ef0bfdb50df2"
  },
  {
    "url": "clojure/libraries/index.html",
    "revision": "25768cc24a15ccaea5c0293ca31783ea"
  },
  {
    "url": "clojure/libraries/shadow-cljs-build-tool.html",
    "revision": "cec4c0fd56553fe7fcc92e7e1da70c77"
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
    "revision": "3d8a78520fdc949e7248ad868378299e"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "30a3866502848043f9a64c6c96f51ff4"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "2b6ff298c398929072a000c74dbbe801"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "8273432d21b56fddabc47a6fb1337e2c"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "d3c9df0f203538816f15c8887de2378c"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "84a31f3b629199a2f915aa20f52d3c74"
  },
  {
    "url": "javascript/guide/es6-features.html",
    "revision": "362cdab7703fdaf63a2987256a1941d8"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "a5c2ed55dd4bcbdea95848977172a974"
  },
  {
    "url": "javascript/guide/event-listner.html",
    "revision": "6291c2cebdf785c033f10a57df49abe7"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "b00bcf308cd66397ef3875d3f129478b"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "d3b73137f2f7ffcee13250ec9d60f96a"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "024d2418cd0fe2e9d1f7e0d9373fca23"
  },
  {
    "url": "javascript/guide/interview-questions.html",
    "revision": "f8ad9c2621d9bdb4ed841b60251d1e1e"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "c56f853e57b8832979d3b5c69e4682be"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "f3bdc42bef05ee15554473d6c5eff18d"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "26b1b4ac4b295ad979c6ec6d49ff5f8d"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "cb3f3ddba12d2876c301fbbe5cd221dc"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "b60f13364c62d8b889c5dbb089028214"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "99e476b011bd8aa89cee2b13f388146f"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "412f3db661250d4ba17fc2856aa94ee3"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "c61b3af4a2ff5bb63ee3f6dbd6f798cd"
  },
  {
    "url": "javascript/guide/symbol-bind.html",
    "revision": "25bca10ed5f23dc481921624693bf6c7"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "e1a8ee4cd8070526f3ba40c46568e809"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "2d636c1b00519f3892a369e539ca2832"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "c240af97deb3d6641e504e4eca9e6ea5"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "736261ac51e5df6ef7b017e98eeadfeb"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "79723bf228b91bbe50f39587fd12d422"
  },
  {
    "url": "javascript/index.html",
    "revision": "0e1de5a84fbb7e0e93bfe8ef39d218e3"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "6fbd81531b1a2325a0b2a19773036a26"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "c2bb5e0c3505741e9111af6c2f3067ef"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "d0059c72746be39db834abc090888afc"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "f80cd5a5ee7ab8ce57aacea3f6a7b381"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "ebd0665bbf79e4a60db626d3f8536872"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "651fa79eb89c942b40bf6c371771addb"
  },
  {
    "url": "javascript/libraries/react-hooks.html",
    "revision": "2212dbbc5ae17ec1a1988c44d3245095"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "a0ff8e4fb3fa9d8420608499c0884f75"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "d4f3661680e3684fbae4545ec10d0d7b"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "8ce5c1a2180159599180b5070bce05e7"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "6fa0910ff85e4bd7c85d4331339774b7"
  },
  {
    "url": "material.html",
    "revision": "6213bbaa6c373b7dac9406d87304ed94"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "16159c6fd3e2246b04e3d23e2e42890e"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "c8eb53391c0e63e692fc7ad69097bc3f"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "1b3a4bc834657510db8f90cdf8a97dab"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "5dc836cf8ef0eb930e5ae34d6d5d7c68"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "bd71e88477b790e6410d83cc838275ee"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "661ccd0e7f91d33458b0b5cf36c9334e"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "979d369eb0d39ed181f90ee365f03fd9"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "6a232443a5d738a5f5b7e2252b0eb372"
  },
  {
    "url": "posts/index.html",
    "revision": "7f5ccbb817e99a2acdcae6bb80148c87"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "cd871f5a75811bcfcb04cbb4019700f5"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "492cdb31f47e55a12cfbbb92c7fa1245"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "8362fc2a83f8b53f5288cf95e3373d47"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "0d060db6d22f1339746a7c9689ceb254"
  },
  {
    "url": "rust/index.html",
    "revision": "65d22862f42b7197243e2f1ed03b04a8"
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
    "revision": "0f6bda9d09ca1290f676d54f826c4dfd"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "b9f743b8f5b009292537119e412050f3"
  },
  {
    "url": "technologies/aws.html",
    "revision": "f380febc5f38849e137e019a0c8c87b3"
  },
  {
    "url": "technologies/css.html",
    "revision": "e66770efc01218bbf9b017ca105e5178"
  },
  {
    "url": "technologies/history.html",
    "revision": "f702c5835da9ae2c3d88e59a879487fb"
  },
  {
    "url": "technologies/index.html",
    "revision": "bf3d961462ef174df4ff4a1da6b8b4ec"
  },
  {
    "url": "technologies/modular.html",
    "revision": "aefe54f829d38465335b0c2b19edad1e"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "71631448f2c6ebb379e5e7cbbf2f7407"
  },
  {
    "url": "technologies/regex.html",
    "revision": "4ed1662ebf6d80ab512fd4557aeec0ae"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "324b289b20407daea775b2c40829bf20"
  },
  {
    "url": "test/index.html",
    "revision": "6bb44d45816c6786ed7992281666b5c9"
  },
  {
    "url": "test/using-vue.html",
    "revision": "c7d2e6f83136fdf62e49441d1f36a865"
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
