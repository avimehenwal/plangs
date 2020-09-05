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
    "revision": "d0c7836f7c8062cf995e48afd9926ad7"
  },
  {
    "url": "apis/github.html",
    "revision": "251777a175d0d86096e09965d6317632"
  },
  {
    "url": "apis/index.html",
    "revision": "402b7dfe046fade94de8635a49e0f953"
  },
  {
    "url": "assets/css/0.styles.5990348a.css",
    "revision": "6354283af6f03d4698c57f18c2ec7d4f"
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
    "url": "assets/js/10.d4d64b44.js",
    "revision": "9b90ba75fef6009b14349cb6028362b6"
  },
  {
    "url": "assets/js/11.dccd0caa.js",
    "revision": "d48f099a2cd2d0dd233535468143ef9b"
  },
  {
    "url": "assets/js/12.43a38705.js",
    "revision": "236cd9aae6373cf3fd3666f05c81c00c"
  },
  {
    "url": "assets/js/13.377c6b51.js",
    "revision": "3827d7248c41b840091ec534f8cac1d8"
  },
  {
    "url": "assets/js/14.db141705.js",
    "revision": "17ac2915e919d62bcccca3df81c55bd1"
  },
  {
    "url": "assets/js/15.1cfff23e.js",
    "revision": "d49eac14e4a6542e81596078db301540"
  },
  {
    "url": "assets/js/16.9f572317.js",
    "revision": "7ddf70bc13d0197d3c546bef40e13478"
  },
  {
    "url": "assets/js/17.ece88c6f.js",
    "revision": "b162b6486fb5a87320ae70215b76a9ab"
  },
  {
    "url": "assets/js/18.4712b872.js",
    "revision": "1a55f3326187b346c46c0fed03f91a86"
  },
  {
    "url": "assets/js/19.59f427f4.js",
    "revision": "9ae678908c02444d17c220cb11896b3d"
  },
  {
    "url": "assets/js/20.60297670.js",
    "revision": "a3cdce2f46203f0777d8fdceac58a09a"
  },
  {
    "url": "assets/js/21.f2cac3c4.js",
    "revision": "101dd4b4b75a263134b5ba9b45fdbd2a"
  },
  {
    "url": "assets/js/22.a09c4b00.js",
    "revision": "9314526a0a1d0f098941147c67500ae2"
  },
  {
    "url": "assets/js/23.36496bfb.js",
    "revision": "993d5c997452e613c2d72b1ab6e279e4"
  },
  {
    "url": "assets/js/24.0656aa94.js",
    "revision": "58a60f77859541d4b769be003d14af19"
  },
  {
    "url": "assets/js/25.20d0139a.js",
    "revision": "b26dbf341a47dbda3d0b12e7aced5632"
  },
  {
    "url": "assets/js/26.ac7b1927.js",
    "revision": "72655800f17a8adb0c8cbbf33dfd0674"
  },
  {
    "url": "assets/js/27.058b0684.js",
    "revision": "6b010d4106d8096ca1109b7792241d48"
  },
  {
    "url": "assets/js/28.f41ceb1e.js",
    "revision": "f589ec653b0993bb9a084bea04a7b2cd"
  },
  {
    "url": "assets/js/29.d18b87ec.js",
    "revision": "da3c726b47dfa0cb0e58f4da2afe8ade"
  },
  {
    "url": "assets/js/3.8fbb91ca.js",
    "revision": "972e8d92780655fc2c468ba462baca80"
  },
  {
    "url": "assets/js/30.ae7b809b.js",
    "revision": "6cbad6f057a02088b0674a7839d513bb"
  },
  {
    "url": "assets/js/31.51de81c4.js",
    "revision": "f49f25503503c037457b02953c9d7391"
  },
  {
    "url": "assets/js/32.183de136.js",
    "revision": "b9348ea7ebb582dda373b9bd2f04c4cd"
  },
  {
    "url": "assets/js/33.6fe625c3.js",
    "revision": "ab8e3bd936be1748e4b4580750617700"
  },
  {
    "url": "assets/js/34.97324d08.js",
    "revision": "3c87f2079cbc7bac8c3030eac49b1e2a"
  },
  {
    "url": "assets/js/35.90967f7d.js",
    "revision": "59229886439ba492c2e8c4961c5e3100"
  },
  {
    "url": "assets/js/36.ab22055c.js",
    "revision": "6185aecb1fc26b4712973f523474ed7c"
  },
  {
    "url": "assets/js/37.c9e19efa.js",
    "revision": "49137aa0353c60bb97d9b9bf8bf3ef8f"
  },
  {
    "url": "assets/js/38.6558b5c2.js",
    "revision": "239e1c91a25afcf5b6710de406d36f4e"
  },
  {
    "url": "assets/js/39.211abc20.js",
    "revision": "07da465f4d558dbb5b56c50c51c36279"
  },
  {
    "url": "assets/js/4.f9a51f93.js",
    "revision": "ecf11defe3f3b89461d647dce5356a8e"
  },
  {
    "url": "assets/js/40.67aaea8f.js",
    "revision": "1b9f3da4f5b19950a23b6c96773badad"
  },
  {
    "url": "assets/js/41.6a296c4c.js",
    "revision": "cda7d0918d8d86d0154b17ccb8ac2bf4"
  },
  {
    "url": "assets/js/42.37891fb7.js",
    "revision": "17e3b3a3eb13e1049d1e3f178fcb515c"
  },
  {
    "url": "assets/js/43.531c3813.js",
    "revision": "4c7a3d61c7f9f234e5a1c32d781de190"
  },
  {
    "url": "assets/js/44.15aad52e.js",
    "revision": "bc1b76ebae5db8752ef6dde4ca39de99"
  },
  {
    "url": "assets/js/45.f7bb8c83.js",
    "revision": "a7a0269ac2eb1987cff14adfb218c4e7"
  },
  {
    "url": "assets/js/46.1bfa5020.js",
    "revision": "83086330ecd03a8672121f1d65c319cd"
  },
  {
    "url": "assets/js/47.1840b975.js",
    "revision": "19fdf9c2f0d3218bb210800b2f47a925"
  },
  {
    "url": "assets/js/48.079be589.js",
    "revision": "6493996d2929bf0757c762f49da784c5"
  },
  {
    "url": "assets/js/49.11fba780.js",
    "revision": "fa14d56ef2852bf63a348a57e4549b50"
  },
  {
    "url": "assets/js/5.10d91973.js",
    "revision": "f7dc7dbcb6e53ce49b0c5921ef02e5f6"
  },
  {
    "url": "assets/js/50.a7ea6a72.js",
    "revision": "f359261823a8f25603e96773f00d6794"
  },
  {
    "url": "assets/js/51.c4545d39.js",
    "revision": "320cf559c9fa29141dfd48b7b43fdb5c"
  },
  {
    "url": "assets/js/52.ad90a6d5.js",
    "revision": "8d60ec5d55a576174ceff90223d331e1"
  },
  {
    "url": "assets/js/53.b696a0b4.js",
    "revision": "603b094c4aa2305eb6cce8a55fb4028e"
  },
  {
    "url": "assets/js/54.c6041230.js",
    "revision": "ede9b7903a3888cd119733a1de50b020"
  },
  {
    "url": "assets/js/55.edfd7cbd.js",
    "revision": "0bd62343997b244659ae509e2bc6c868"
  },
  {
    "url": "assets/js/56.506a1359.js",
    "revision": "4eab9e45240eb30b3b7ab9c1c749345e"
  },
  {
    "url": "assets/js/57.2fc1964e.js",
    "revision": "bf76d7edd64fa4436bed54be4bb38452"
  },
  {
    "url": "assets/js/58.21b8b8e6.js",
    "revision": "cfb53d000343068fc744765dd74ff636"
  },
  {
    "url": "assets/js/59.e0a8be7c.js",
    "revision": "f9fdb5ab19e75c7d2a740389e570d3c4"
  },
  {
    "url": "assets/js/6.8e704bf5.js",
    "revision": "19e6eafe72c039b781344dec6d5bd1d6"
  },
  {
    "url": "assets/js/60.f3ceeaee.js",
    "revision": "dabfee60fef78db233aeec9830e0358a"
  },
  {
    "url": "assets/js/61.a26033f8.js",
    "revision": "89089b942bba547b378fff4e79f1959a"
  },
  {
    "url": "assets/js/62.cb799d7e.js",
    "revision": "651174f0d719edffa6481ad1e93800ff"
  },
  {
    "url": "assets/js/63.59ba9c4c.js",
    "revision": "d0c95be9e58cb80d314416ee6588df81"
  },
  {
    "url": "assets/js/64.71b3868f.js",
    "revision": "3ec02bb2ae0e3be8da92e4a17923709f"
  },
  {
    "url": "assets/js/65.b18ec01c.js",
    "revision": "9fa6aea2c3de9d3df8c411c92669e1df"
  },
  {
    "url": "assets/js/66.cf8f2ce4.js",
    "revision": "1c90e1c04c67ed9b70d7cdb559fc4741"
  },
  {
    "url": "assets/js/67.9159ab77.js",
    "revision": "e2caecf1144b061594fa69accb324c20"
  },
  {
    "url": "assets/js/68.6aa8eb73.js",
    "revision": "1aaaf0e069f397ca20cb873a2d90919f"
  },
  {
    "url": "assets/js/69.f155980a.js",
    "revision": "c69e0f6337a0f4e2d6e8aa36caa3f8af"
  },
  {
    "url": "assets/js/7.164ea849.js",
    "revision": "c9d04d3845b7284afbfd864ea30bdb4a"
  },
  {
    "url": "assets/js/70.7aeab181.js",
    "revision": "e74ef44cc84694164f855baabfd5d548"
  },
  {
    "url": "assets/js/71.d3617bac.js",
    "revision": "29ee2429ef6e7dc78a3c5cc485aa6c8a"
  },
  {
    "url": "assets/js/72.c718c146.js",
    "revision": "b3dc23c960f1e37ad398dca5cba6513f"
  },
  {
    "url": "assets/js/73.3562e4b1.js",
    "revision": "4beae3595fe21da371dabb62adf50247"
  },
  {
    "url": "assets/js/74.10435834.js",
    "revision": "5e7b64931c1a4966854348ef52341d8a"
  },
  {
    "url": "assets/js/75.36abc204.js",
    "revision": "64cacde603ad4c3cd325544dfe6c23b0"
  },
  {
    "url": "assets/js/76.1a214f2a.js",
    "revision": "22578228ef07d9de2adc8a3b1413ff3c"
  },
  {
    "url": "assets/js/8.1ea9aa14.js",
    "revision": "634cdd5a686408a1d0e3ea76de265d22"
  },
  {
    "url": "assets/js/9.e996db4f.js",
    "revision": "d9d4a9b8db640a27c79d4484ee97af08"
  },
  {
    "url": "assets/js/app.8b950db8.js",
    "revision": "cf03a18a0f3b433533ec394c43f617da"
  },
  {
    "url": "assets/js/styles.5990348a.js",
    "revision": "36e82cee632fcf570ada30cce30f8be2"
  },
  {
    "url": "assets/js/vuejs-paginate.3308613b.js",
    "revision": "5d0026de5fde502e468750c7fc6e2cf1"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "fbc72eb1253a4c70424ae2020f6f786a"
  },
  {
    "url": "browser/devtools.html",
    "revision": "71b7aedb4f8c98b49b98f76f8d77b7d4"
  },
  {
    "url": "browser/index.html",
    "revision": "c90b8388c4293f0a37e03129306f3bd3"
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
    "revision": "d5f522a867f8bf2408c1379ad7cd58b8"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "9fe691477642820bccd6131df9ede6c8"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "15dc1ae67e841779ce3e9bd05c624d35"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "b6e15329b6a0cc27a31c302daf14287b"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "93c32d8ab3fcf7b9bcd062edc4c3b64b"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "42017edb87b64991069cf4c0132dcbe3"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "f85f3240c09ccdc83d5b8d8921d35f9e"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "6701f7c1705b8728c1ce97201b377123"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "970098cb0b92bec094f14f67a6b2ba8b"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "388b650b609f93081c68aca7ff5213a6"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "d012b850a2fa6042d2cce1bbc82b9e5b"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "e566bfb85416bdb77923c8c0ebf38061"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "cfe5f8c63bab2cb557ba58ddbd69ed84"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "66ef948b82cea0fc35b44c729ee81ce3"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "eb81fef33a76ea7ef3ffbb7059372a2b"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "2fee2bf146bd7b3dfbfbc6c46a4f942e"
  },
  {
    "url": "javascript/guide/polymer.html",
    "revision": "1a6f4adbd88c46273b4a8510ccd9b47f"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "8e4d687cf98e28ffe80b7468bdcba7f4"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "68c57be77ee7bc6190bf46bfdf03151c"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "14b172355fc4a3177a133a331096b7f2"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "6ac8a71d0569d48b6dcaf7a04d90705b"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "a3a60e83f900b8ccf29174e83a92969e"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "7c5fc778ab0a3afcba1827b99ec72eb7"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "07ef1d42a4d6b0d88f78710b5f26e1f7"
  },
  {
    "url": "javascript/index.html",
    "revision": "71a80051efb4ef4409a6eec24db981c3"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "73c71c210f73742c26d642f5891c143d"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "3b38c821ca72846c77de3bb5642fff48"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "21579f34a20099f8bd1fe5628a7a6f22"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "c12547179a86f8e2db1ad1a5e1f4827d"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "ef3f2fbf412735b87c6096d6e339f413"
  },
  {
    "url": "material.html",
    "revision": "004a0ce6b0fd054d36ac6c33ee4e18c3"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "a219c9764f57462dafec2045bb7df8d3"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "2509bed15bae55763e4c9e7bac6c5cf3"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "71e6967b59b49e87f66e50ed4c0097cd"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "46a9f5b90bb3fe79d656a5bfe7bb40f9"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "f37a89d635345b38f2241aab6c84d15b"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "0afd5df0fdbb45c4fcf6eeab6d9b940c"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "0549e1f3683ed398a85df15e2e3ac363"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "678c326b87a386754c7df5bd08736239"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "5a792d7083168a6b2d8140cbaa44506f"
  },
  {
    "url": "rust/index.html",
    "revision": "3f30da44b3e68e30217eb8cc24726991"
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
    "revision": "aa6ae0e63db6f7c93e2bfd42aab2e4e8"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "9781d8e3c3b854cca978c5f50c1db955"
  },
  {
    "url": "technologies/css.html",
    "revision": "344c021eb31bd059989231c34a1e1be5"
  },
  {
    "url": "technologies/history.html",
    "revision": "49d9f1ed7f537092c04ffd1a7ed06266"
  },
  {
    "url": "technologies/index.html",
    "revision": "d9e98c96f74aa5b1915e54e546a7335d"
  },
  {
    "url": "technologies/modular.html",
    "revision": "e2f58e88425d4e302af2217cefee1221"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "8a82cb6ca0a3f34789da5f98512e0265"
  },
  {
    "url": "technologies/regex.html",
    "revision": "6cd8babe6669fd0b0f1b8ec01a4b65c7"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "b6482867f9119e557fbed9ae2b5fbb54"
  },
  {
    "url": "test/index.html",
    "revision": "9ec8bb353347b4a41f88d350b24c1c52"
  },
  {
    "url": "test/using-vue.html",
    "revision": "cac02f0c2e6167e4a6b7484f1e709286"
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
