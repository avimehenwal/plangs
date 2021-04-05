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
    "revision": "a06053d048f9bd07b03ae8e11d06193b"
  },
  {
    "url": "apis/github.html",
    "revision": "57ee2741be992252d4185e7b9106db05"
  },
  {
    "url": "apis/index.html",
    "revision": "526c5261e7d3dad429da7f7be2b51de9"
  },
  {
    "url": "assets/css/0.styles.20029f3d.css",
    "revision": "25909d68ef11555926576a51e66ce4c2"
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
    "url": "assets/js/10.ea2b3316.js",
    "revision": "c9be452ad9a12bfc5c617115f19134a9"
  },
  {
    "url": "assets/js/100.755a3d84.js",
    "revision": "fa459063f23ea43b03a5f47b10454603"
  },
  {
    "url": "assets/js/11.106b8381.js",
    "revision": "7e049b7d237eb37eac79f43a5808ec41"
  },
  {
    "url": "assets/js/12.4297987d.js",
    "revision": "10bd2a846904879535c9ecc97c84fcda"
  },
  {
    "url": "assets/js/13.9589e6f8.js",
    "revision": "56040d574460ee2b3ca60e84e8531016"
  },
  {
    "url": "assets/js/14.2afed8ca.js",
    "revision": "71c0c9f52db385fcf0df594cfa286553"
  },
  {
    "url": "assets/js/15.33a9a499.js",
    "revision": "13913c8e52f7d61b3c00f657f687c4c2"
  },
  {
    "url": "assets/js/16.aadc5244.js",
    "revision": "157d215650d52388f86d83ed16d752bc"
  },
  {
    "url": "assets/js/17.406ecf14.js",
    "revision": "3d9c0eb57ac845d84d38dc6970d9e3dc"
  },
  {
    "url": "assets/js/18.fd4289fa.js",
    "revision": "6a8213b414c31b4583ca34994fc807ec"
  },
  {
    "url": "assets/js/19.1c4beb70.js",
    "revision": "0c1275c527da0f4e6605fa398d465c38"
  },
  {
    "url": "assets/js/20.e18edb09.js",
    "revision": "90327290c49c95087bfa9d7cf081a7b2"
  },
  {
    "url": "assets/js/21.341fbfe6.js",
    "revision": "8ec34475000bd797fe0520a41f367240"
  },
  {
    "url": "assets/js/22.1ca5ce55.js",
    "revision": "4fd70ae651f99e3cc106cf41312f1aa2"
  },
  {
    "url": "assets/js/23.99fd8ead.js",
    "revision": "479b03dedcfc2c22a741e38a86dac182"
  },
  {
    "url": "assets/js/24.86eeec80.js",
    "revision": "837e5693d5c2add65801a15cfa5ba013"
  },
  {
    "url": "assets/js/25.110dfda2.js",
    "revision": "5aa697320760ca5104a9c9c7f151d546"
  },
  {
    "url": "assets/js/26.0cea68a6.js",
    "revision": "3e0efe04a2e2c11b61cbd481635ac09a"
  },
  {
    "url": "assets/js/27.faab2d4b.js",
    "revision": "670f8c3d4244cb6d7808e53cc04500c3"
  },
  {
    "url": "assets/js/28.8655533b.js",
    "revision": "66809874dff37a5b8255342d3b921eb2"
  },
  {
    "url": "assets/js/29.3e9a7632.js",
    "revision": "8ab20d4592405b78d5e88a4c6939315b"
  },
  {
    "url": "assets/js/3.19d0e0e3.js",
    "revision": "8b63994136dd8c1d63f0fe1f2c9aa491"
  },
  {
    "url": "assets/js/30.99222489.js",
    "revision": "a997bf486c9eb0eff7e9a59382373f85"
  },
  {
    "url": "assets/js/31.082d1416.js",
    "revision": "04c434d3e6dd55f3f8b2a2d7fd1ebe18"
  },
  {
    "url": "assets/js/32.84e70175.js",
    "revision": "3468d23e97e2ce9e421cf4558113e213"
  },
  {
    "url": "assets/js/33.a0f12b60.js",
    "revision": "71d67478797e5758f4548d36e07c4f89"
  },
  {
    "url": "assets/js/34.85a170e2.js",
    "revision": "a8e51ae199a2a9cbc9fb0819c9380c09"
  },
  {
    "url": "assets/js/35.057ad9be.js",
    "revision": "7d8c99db43da6bd1e091b75607ba091a"
  },
  {
    "url": "assets/js/36.b8a768e8.js",
    "revision": "951e12945272e78af199929a3c8abc1a"
  },
  {
    "url": "assets/js/37.89c02512.js",
    "revision": "173c1904682d5a08160e1e8da0429fc7"
  },
  {
    "url": "assets/js/38.d9023d43.js",
    "revision": "857f4df46b78beac0dd81d531c6d03ac"
  },
  {
    "url": "assets/js/39.9528ad07.js",
    "revision": "4a0ca11feba5e1a10cbd23ca1e9a6958"
  },
  {
    "url": "assets/js/4.ad1e2779.js",
    "revision": "fae692ae1c9ca054beb94800fc71da0e"
  },
  {
    "url": "assets/js/40.22c5ed5c.js",
    "revision": "b4ba3a79fef43497426657e05385dd85"
  },
  {
    "url": "assets/js/41.072a720e.js",
    "revision": "ce424c1ad8d29da3b19e3d0957580f5e"
  },
  {
    "url": "assets/js/42.d5aaf9c0.js",
    "revision": "c92c2f47cb5aa7149104da526fce8cb5"
  },
  {
    "url": "assets/js/43.2cf2fa86.js",
    "revision": "ae426b2c1f72b76fa3ab461dcd1d63bf"
  },
  {
    "url": "assets/js/44.e1ea18ac.js",
    "revision": "f23d0da3ddb6081d993cb220235b98ef"
  },
  {
    "url": "assets/js/45.bdfa19ff.js",
    "revision": "3c90efb9f8cf99dfd19f10a9b824ade0"
  },
  {
    "url": "assets/js/46.1c296789.js",
    "revision": "fceaa7b5e4809b9107ebf5f6d668b98a"
  },
  {
    "url": "assets/js/47.434edb32.js",
    "revision": "2e169afb923c4fff2620919df2c6db0c"
  },
  {
    "url": "assets/js/48.9db9dda6.js",
    "revision": "a8ff4c2c54beed969670fff4a384519e"
  },
  {
    "url": "assets/js/49.9012cd90.js",
    "revision": "e5120426ce7bb2caf6ac0e458ea6e51a"
  },
  {
    "url": "assets/js/5.b125a94c.js",
    "revision": "e07628d147cffce04ac328772cd15c89"
  },
  {
    "url": "assets/js/50.4f4cb740.js",
    "revision": "9fadb4c1171d45ada734abe8c25bc07e"
  },
  {
    "url": "assets/js/51.4f5d9a66.js",
    "revision": "7370984934cff014deec60f1bcbafa4b"
  },
  {
    "url": "assets/js/52.ad20ca30.js",
    "revision": "552437b0092a68af6a4bd2f8c84a8c09"
  },
  {
    "url": "assets/js/53.70e21637.js",
    "revision": "55b38607da86f1a9ae730978a0892845"
  },
  {
    "url": "assets/js/54.76b267dc.js",
    "revision": "49e52a95e8062c7b0c7f2fec46daf4c2"
  },
  {
    "url": "assets/js/55.8fbb17f9.js",
    "revision": "0f1be95cd2e43fc190ed243d16570c16"
  },
  {
    "url": "assets/js/56.af61af88.js",
    "revision": "0e8ccaaa49521bff2bc922fd25863351"
  },
  {
    "url": "assets/js/57.9c5f7eac.js",
    "revision": "fc0db908c154f62b60bb768088e559ef"
  },
  {
    "url": "assets/js/58.1380a12d.js",
    "revision": "84b5f838666281b98c36da324f447ecf"
  },
  {
    "url": "assets/js/59.d53fa925.js",
    "revision": "52ac8f6f38077aa4036fc7d077176660"
  },
  {
    "url": "assets/js/6.4d85a2e2.js",
    "revision": "d6b3237255b8a7376cd446f52e7e6a77"
  },
  {
    "url": "assets/js/60.5e5fddd4.js",
    "revision": "e516d7c10b3dd80b9e7a7bb9732d7ca5"
  },
  {
    "url": "assets/js/61.c0cf4368.js",
    "revision": "fa231c863bcdda77cba1a996bedb2f49"
  },
  {
    "url": "assets/js/62.c7ee62c9.js",
    "revision": "47f168e48c0849cdaeecbd3db1ca0826"
  },
  {
    "url": "assets/js/63.8fb989ac.js",
    "revision": "f611bd0fa07657507114835722cdcc93"
  },
  {
    "url": "assets/js/64.8712d70d.js",
    "revision": "cc0b1d0ce066a0119696cff55f8f2be2"
  },
  {
    "url": "assets/js/65.532238d6.js",
    "revision": "a076094980d5bfbf76110880205ca4a7"
  },
  {
    "url": "assets/js/66.409baaed.js",
    "revision": "096942e846a35cc3f9ec98a1209953eb"
  },
  {
    "url": "assets/js/67.37b36d5e.js",
    "revision": "cdb117228c1b07b0025494e9c561eedc"
  },
  {
    "url": "assets/js/68.7b01586e.js",
    "revision": "5b6fa5d72bc849040a202225428265ee"
  },
  {
    "url": "assets/js/69.211baa7f.js",
    "revision": "060cd88631dbdc86c2f1825b08e9914f"
  },
  {
    "url": "assets/js/7.5727a7d8.js",
    "revision": "4e9584ec7fa70fa972d6e82b5e9d3f2e"
  },
  {
    "url": "assets/js/70.436843ac.js",
    "revision": "34204b1bcc6fe555284c504ad22a12ad"
  },
  {
    "url": "assets/js/71.13cd16a4.js",
    "revision": "3dfc5189c5a16231f7ba6d7c90832255"
  },
  {
    "url": "assets/js/72.8b5ca444.js",
    "revision": "722252f0ca934ffd94ea36ddd5081e2a"
  },
  {
    "url": "assets/js/73.26e62619.js",
    "revision": "967028cfb0428594da0eda8a1d12c2b2"
  },
  {
    "url": "assets/js/74.61d9e787.js",
    "revision": "8f60b03a4a62f34266f42daa09d8f4e7"
  },
  {
    "url": "assets/js/75.0f081c05.js",
    "revision": "06951199b6ec547740b6fdf6d462a344"
  },
  {
    "url": "assets/js/76.a89a08b0.js",
    "revision": "faae9debf01eb5912bbfbecc15193387"
  },
  {
    "url": "assets/js/77.abd1f1e4.js",
    "revision": "ad665326ee7b2e3270f2a7954e8a0522"
  },
  {
    "url": "assets/js/78.c20a72df.js",
    "revision": "6933861df47b335f3d32414f21649515"
  },
  {
    "url": "assets/js/79.81207823.js",
    "revision": "3cf03f216fabd0ff4bdf0c0f5de059aa"
  },
  {
    "url": "assets/js/8.51a2d961.js",
    "revision": "c0865c53ab61a8b77eb828cb34ea072a"
  },
  {
    "url": "assets/js/80.4d52ab1e.js",
    "revision": "07fc320b3a83ecf5f48e0b4123dd165a"
  },
  {
    "url": "assets/js/81.945132e3.js",
    "revision": "55f6c11b0f7a1d5f5f260c03b47091a5"
  },
  {
    "url": "assets/js/82.56940607.js",
    "revision": "0586e5aed68b1687d9f051c1f6503192"
  },
  {
    "url": "assets/js/83.a1a73966.js",
    "revision": "6bedc1246ffe219b82208184f751d6a1"
  },
  {
    "url": "assets/js/84.7d84d836.js",
    "revision": "4d41cdb4c57064afe5dc255a42f6a74c"
  },
  {
    "url": "assets/js/85.06d71d38.js",
    "revision": "80909a80efc3cc1d3a87c982412572e9"
  },
  {
    "url": "assets/js/86.d37db38d.js",
    "revision": "018b8589fbf1b204894a1c144e8297b4"
  },
  {
    "url": "assets/js/87.0ebc8162.js",
    "revision": "519bb6187efef408c1dcd92010693388"
  },
  {
    "url": "assets/js/88.53e46b74.js",
    "revision": "985370bf05494c5b4f127124b09756fb"
  },
  {
    "url": "assets/js/89.4ecd9bdd.js",
    "revision": "228aac302925ccf0501574b23d764138"
  },
  {
    "url": "assets/js/9.ead080b4.js",
    "revision": "0778d4c4726d768316b520bf08443fd7"
  },
  {
    "url": "assets/js/90.dcf9745f.js",
    "revision": "7e724d4bc2e5a909fe14e3afc187b6bc"
  },
  {
    "url": "assets/js/91.a623c88d.js",
    "revision": "c17717554593a6e93b5bf28f35c73252"
  },
  {
    "url": "assets/js/92.841d08b8.js",
    "revision": "f366bb770a26d1466f2a6111bdb1ae71"
  },
  {
    "url": "assets/js/93.317c0645.js",
    "revision": "62bacb19ee9f802ba53a9d0905ff067a"
  },
  {
    "url": "assets/js/94.71ff32bd.js",
    "revision": "df59f0dec3da857637b26936f830a8d8"
  },
  {
    "url": "assets/js/95.dfe83eb9.js",
    "revision": "0c29f3b3a6b37bd35f58b361ccc3a1ce"
  },
  {
    "url": "assets/js/96.6429c5b9.js",
    "revision": "efdc8d73d0d00432f7d22a95de9e7053"
  },
  {
    "url": "assets/js/97.500578e4.js",
    "revision": "9443ee5926ed188497c10639678c4f12"
  },
  {
    "url": "assets/js/98.f0d0ffa0.js",
    "revision": "2b540df63ee467abcbd256553c65bff1"
  },
  {
    "url": "assets/js/99.ed2256e0.js",
    "revision": "5775fff251d6d5e84d9e14616eb574a4"
  },
  {
    "url": "assets/js/app.93b9ca53.js",
    "revision": "f0e1c79ba3dd78a6388ece92c2297879"
  },
  {
    "url": "assets/js/vuejs-paginate.fe41a09e.js",
    "revision": "b6279ccba59ee8d1780693e7154e8d15"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "5cd757453b83c1f8aae361fa4886817a"
  },
  {
    "url": "browser/devtools.html",
    "revision": "f04ad8d35637d81fe19a929327577147"
  },
  {
    "url": "browser/index.html",
    "revision": "598f6f6946e1c9eed402528f91928718"
  },
  {
    "url": "browser/polyglott.html",
    "revision": "37eddfb1fc5bbd8af6835c29c31a1412"
  },
  {
    "url": "browser/spa.html",
    "revision": "30a2cbffaf96949f2f1e5530e64c9bfc"
  },
  {
    "url": "clojure/guide/clojurescript.html",
    "revision": "038d5b4c23cff56b1c8032e435e0835c"
  },
  {
    "url": "clojure/guide/collections.html",
    "revision": "ab6548bd1ab3389d17403cba641d5a73"
  },
  {
    "url": "clojure/guide/fullstack-webdev.html",
    "revision": "0c03266efae2299743f842609badbd94"
  },
  {
    "url": "clojure/guide/index.html",
    "revision": "bf63c39d32f0705aaf79a91fd6844775"
  },
  {
    "url": "clojure/guide/introduction.html",
    "revision": "b144bba5c2f2227c18feec875214d149"
  },
  {
    "url": "clojure/guide/reactive-programming.html",
    "revision": "7032c2eff50d3d0ec0c434d72bfbedc2"
  },
  {
    "url": "clojure/guide/single-page-applications.html",
    "revision": "3904bb458ea8f81bf77bd228b6b36d7e"
  },
  {
    "url": "clojure/guide/syntax.html",
    "revision": "2c29cffa6ac92c8e4b9e0017fd14ecac"
  },
  {
    "url": "clojure/guide/ui-planning.html",
    "revision": "8c55228aeac603b313d18301daed7227"
  },
  {
    "url": "clojure/index.html",
    "revision": "cc1919e189be6e297476dda461f38f93"
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
    "revision": "d3d5a9be1863f3aec82307d05d5cdf5c"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "ba1a5d6739ae8cd14e99da4dd1be0d97"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "6e7cdd6d98b9f28a5bb982d5863106db"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "358a5ee1580c1342735c982573d152a5"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "aa8ddba26b93382f559275f02e0fd3ab"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "296ef2e974cffdd09b143e29c974fb44"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "c1b1f0a0c755a5e253be39d8056c4e0e"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "43e27277e71eeea368384e3d85c6c97d"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "953b6c79cb806877468117226f846d6e"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "636551bdc9f65c9ec3fb3604435c8f1a"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "3ec32fc896f617996a8189853dd79545"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "9c0d7109185350fed8b0c0099ed646af"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "603beb7188531734d4be7f9b498dae37"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "90d67be2b7a8a3de22c5608eab1b16ce"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "0ad11ddb845c3d6f3f858bfa4236c4e3"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "30068509107c36cb330e24ec015ebe9a"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "339b366970e2f5490dcb88e2a56e4dbf"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "897cfd48624f1f78c5add3ca3495b2a3"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "5f7e0b8ad24de6bc6781c0dfc5376f8b"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "a79e853a97307b98199d2339f10e4111"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "ff5589454eb51fb573cf57d75b7d3dc5"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "a6cbb8c37284d7ba47c4e86c8d0db28a"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "47746713a6c71edd18a8f4412f396094"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "7d0da3cb299fc6d45f9ca73dfc9ce8b7"
  },
  {
    "url": "javascript/index.html",
    "revision": "94bc56be3630737287ad07242b7a53d6"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "0f15b207ec7e99fc0ea4d1d55fa380cc"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "7bbb4d65db118a83554ebcb40644983a"
  },
  {
    "url": "javascript/libraries/how-to.html",
    "revision": "b1466846c5ec6548a08a3464fb9e692d"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "4674b0787608b5cfb0bd8e6ae8d620bd"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "55ee23313d95cbdf8a896656c8441a31"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "93ff2538d208eb4954bc827f31a2c526"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "fde5e35dfcbfa2f3f9ff3927f5caf41f"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "7a51f5f74a1030fa4a393d5b54b65ad0"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "6c9b6d8a4e187a3f8e089967ced2d468"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "74f56aab8231e0cc06865fa7325462a6"
  },
  {
    "url": "material.html",
    "revision": "b88555d816a4de8d775ae9a5dc134e65"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "c24ca35251d1b35d950b00b217dbd988"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "e76996b8783124eb272e15b40d2e2943"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "a2be8d49b76894c1efe5234c6755db56"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "a6375aac6448a47e330f444c1f44d072"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "a47ad7df32f648cd86b359da7f2cae16"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "81cb33c4fb2e2380400620a88f92ac41"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "9b4407f8d092c01234f05213235a000f"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "7425d66f0bf9a6a16be6bd940a71fbe8"
  },
  {
    "url": "posts/index.html",
    "revision": "2a04ef0be2c7e14c19e313eb357d3047"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "874eb1c8965c77273a4d066bed9940b9"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "5c76d75aa8b958ebe4cd131c6b9b0644"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "241b7425d2eefa1bef9861879cbccfac"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "dde3a2f9dc4849d627f59ccdb20a8d42"
  },
  {
    "url": "rust/index.html",
    "revision": "0ea02076db5b35fd52d6c460073584b3"
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
    "revision": "d529da0e15d3611d22df94e9825c99da"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "d2a3d9054348a654cc252be6f5ecbbfa"
  },
  {
    "url": "technologies/aws.html",
    "revision": "ba8eac9a3dea196acd7894e1fb6460e4"
  },
  {
    "url": "technologies/css.html",
    "revision": "e8b861db4e6bda81e693e0f8049d6c8c"
  },
  {
    "url": "technologies/history.html",
    "revision": "696604d54ebd88fde4cfd6430e4cdde9"
  },
  {
    "url": "technologies/index.html",
    "revision": "cd9fde17a9b5a918a76d132ebd49afb3"
  },
  {
    "url": "technologies/modular.html",
    "revision": "d9cf4dcfe61b0e3420632e76f479293b"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "d565d8188f4176f3d80197d9150175a2"
  },
  {
    "url": "technologies/regex.html",
    "revision": "7c53cf10db129d870cc24bd2414fe30b"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "6b82eae109acf9792aa7f1dcddaf98d3"
  },
  {
    "url": "test/index.html",
    "revision": "dfc69beca2c7fe152f9359e49c3ec9da"
  },
  {
    "url": "test/using-vue.html",
    "revision": "a1b77cd3c8b08169bfd085dab2ae9802"
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
