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
    "revision": "f60d2af69ebed5c7d58ee1ad48a2832d"
  },
  {
    "url": "apis/github.html",
    "revision": "612572f6a9578dac12deb04606e555c1"
  },
  {
    "url": "apis/index.html",
    "revision": "55a1806a960bec6a6086072e30603b5a"
  },
  {
    "url": "assets/css/0.styles.64fb0023.css",
    "revision": "588c5b2e43d2aa9e5cb679ab0d96f514"
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
    "revision": "c68931e84200f20ce7cbccfcbdaff8c9"
  },
  {
    "url": "assets/js/11.dccd0caa.js",
    "revision": "7950a78ddfdf24e433da3fc86d310966"
  },
  {
    "url": "assets/js/12.43a38705.js",
    "revision": "bb32b8b56af485f1a87fc729e2f6c55a"
  },
  {
    "url": "assets/js/13.c0b96749.js",
    "revision": "bfa89747cdce3482e3738b1f0a51e4d8"
  },
  {
    "url": "assets/js/14.db141705.js",
    "revision": "7bf21c407e57c86101aaed67d5ba4b19"
  },
  {
    "url": "assets/js/15.1cfff23e.js",
    "revision": "e8ed75ffc68b5d30e42205ede08fa502"
  },
  {
    "url": "assets/js/16.cec1c10f.js",
    "revision": "46306a4fb863a09eb3bb4eec9e34ad1f"
  },
  {
    "url": "assets/js/17.ece88c6f.js",
    "revision": "854ee7f535698cb16928ca6e1b656bc2"
  },
  {
    "url": "assets/js/18.82dfd638.js",
    "revision": "eb5bea801a0d8a368279249a2769e962"
  },
  {
    "url": "assets/js/19.59f427f4.js",
    "revision": "039a0e286b29e466528f4f6efcead39f"
  },
  {
    "url": "assets/js/20.60297670.js",
    "revision": "dfd557c69905aaa220e607ad75e58ba4"
  },
  {
    "url": "assets/js/21.f2cac3c4.js",
    "revision": "bdb0f13cca69b7585b3e35457b6cbf6b"
  },
  {
    "url": "assets/js/22.a09c4b00.js",
    "revision": "9facee5c9a807eef582c5fe031502032"
  },
  {
    "url": "assets/js/23.36496bfb.js",
    "revision": "3a13c711f55e66ade4edbefccf3f165f"
  },
  {
    "url": "assets/js/24.0656aa94.js",
    "revision": "2ea689657e69ef913a1e9a61ea7ab10d"
  },
  {
    "url": "assets/js/25.20d0139a.js",
    "revision": "58bb6c3f4894a897c3b145463b9b9712"
  },
  {
    "url": "assets/js/26.7fe7aefa.js",
    "revision": "f93fb3ffe4dde4d9c6cb600ec6c9c1f1"
  },
  {
    "url": "assets/js/27.d45c22bc.js",
    "revision": "9acebe0e9208c38cb5650bf861bbd17f"
  },
  {
    "url": "assets/js/28.f41ceb1e.js",
    "revision": "4c70916d25e87fc9ed04dcd7b0e01470"
  },
  {
    "url": "assets/js/29.5eb14c99.js",
    "revision": "65bf9d35cef213bfdc1565f0590839a0"
  },
  {
    "url": "assets/js/3.8fbb91ca.js",
    "revision": "d4aeae664ed39d682ea0adbb10f10973"
  },
  {
    "url": "assets/js/30.ae7b809b.js",
    "revision": "1e64059b9be9640bed58f452a485adf9"
  },
  {
    "url": "assets/js/31.0dc8c255.js",
    "revision": "10bffa1b39fb071c3c3687dd9208f923"
  },
  {
    "url": "assets/js/32.fc1cbec8.js",
    "revision": "25a25d430ba4feabdd87dda698a40245"
  },
  {
    "url": "assets/js/33.9be3bb40.js",
    "revision": "cd23decb043e63fb1feca44af6377cd8"
  },
  {
    "url": "assets/js/34.97324d08.js",
    "revision": "b60e0b79d6d8e16e0a17a0c7665844d1"
  },
  {
    "url": "assets/js/35.90967f7d.js",
    "revision": "fb31e11562cadc6fbd8d7095eaef5b45"
  },
  {
    "url": "assets/js/36.a22730a1.js",
    "revision": "b644e7eb4ef6fc739c74327ec53a2fba"
  },
  {
    "url": "assets/js/37.1decff60.js",
    "revision": "729f3dfba1bb1ba4e857399af8da0d63"
  },
  {
    "url": "assets/js/38.6558b5c2.js",
    "revision": "cd4ed33f3176fa153121eea26420ae24"
  },
  {
    "url": "assets/js/39.211abc20.js",
    "revision": "091aa8ecb541ff0294184d513c505905"
  },
  {
    "url": "assets/js/4.f9a51f93.js",
    "revision": "3db94b100f27effaad5a8fa6b6f987a3"
  },
  {
    "url": "assets/js/40.ff5f45af.js",
    "revision": "9faa33bb97f580086ba0100a3bb60f93"
  },
  {
    "url": "assets/js/41.6a296c4c.js",
    "revision": "802e847f254f801b6fc822f434bf7c7c"
  },
  {
    "url": "assets/js/42.37891fb7.js",
    "revision": "e7f07f2c0623e2b9283cd04546267fc1"
  },
  {
    "url": "assets/js/43.531c3813.js",
    "revision": "9765d6f627e231d75ac66fcc93a82065"
  },
  {
    "url": "assets/js/44.15aad52e.js",
    "revision": "e05c666eac0e491b99eff6aefe0ceb31"
  },
  {
    "url": "assets/js/45.f7bb8c83.js",
    "revision": "0e1fa8a27df52519530584eb7e81c13f"
  },
  {
    "url": "assets/js/46.1bfa5020.js",
    "revision": "484550431e25b7811ee82331852edcd8"
  },
  {
    "url": "assets/js/47.1840b975.js",
    "revision": "83827a76f95e2395e6e2406cdf7fcc85"
  },
  {
    "url": "assets/js/48.460a1340.js",
    "revision": "371583ddf57cfeafda2484568c783fcf"
  },
  {
    "url": "assets/js/49.11fba780.js",
    "revision": "a4174ff055faf105de59e35a166ec7eb"
  },
  {
    "url": "assets/js/5.10d91973.js",
    "revision": "7f5d3a18da6a6ed0c8d5d64a2d0fe054"
  },
  {
    "url": "assets/js/50.d680a42b.js",
    "revision": "e72cf32b41532ac4c911fdedce9b2293"
  },
  {
    "url": "assets/js/51.67529ff5.js",
    "revision": "9432e1a7fca58208891c34da92d060fa"
  },
  {
    "url": "assets/js/52.4ddf0edf.js",
    "revision": "c2a84b1d5e848d65143289c2f7c47153"
  },
  {
    "url": "assets/js/53.9a779458.js",
    "revision": "a8f873fdca0bd994b87ef6e67d0bb727"
  },
  {
    "url": "assets/js/54.0fe02a92.js",
    "revision": "1748c62e67dbbc033305889d64dadf62"
  },
  {
    "url": "assets/js/55.be2ed69d.js",
    "revision": "41c39e25118f8bf2728c73441edf5449"
  },
  {
    "url": "assets/js/56.703b0070.js",
    "revision": "9d54ef1a56e264a8c218330ce79bc26d"
  },
  {
    "url": "assets/js/57.04c18730.js",
    "revision": "71892b8a34017f5676890379da674205"
  },
  {
    "url": "assets/js/58.21b8b8e6.js",
    "revision": "51d2a2c54dc56b701891e42e5beb75bd"
  },
  {
    "url": "assets/js/59.e0a8be7c.js",
    "revision": "000539da70a8cff6147b7f25497d370a"
  },
  {
    "url": "assets/js/6.8e704bf5.js",
    "revision": "fe97e21c9e6df4e0ed7f6c3e13bf5853"
  },
  {
    "url": "assets/js/60.a1b04a73.js",
    "revision": "21c8d53eb8f36c52c7dfcf8c7f095552"
  },
  {
    "url": "assets/js/61.4a240cc8.js",
    "revision": "925a837c6fe49e81cc49f1bcd43b6336"
  },
  {
    "url": "assets/js/62.9c814172.js",
    "revision": "1fcf6c3e27c6ad267f21a8a25e1d9727"
  },
  {
    "url": "assets/js/63.3654431f.js",
    "revision": "a7d93412e641beb9a5dc9d928e936fcf"
  },
  {
    "url": "assets/js/64.71b3868f.js",
    "revision": "4661756afff53bca7d51bb38036376db"
  },
  {
    "url": "assets/js/65.b18ec01c.js",
    "revision": "6a1c961e0fe98abcca819f7f002eced6"
  },
  {
    "url": "assets/js/66.c50dfa37.js",
    "revision": "81da8daa3aa0405262aa9eb3ae24be7b"
  },
  {
    "url": "assets/js/67.3f64255c.js",
    "revision": "ac2ec99dab34ef0f68e4c3b61f6d6f54"
  },
  {
    "url": "assets/js/68.6aa8eb73.js",
    "revision": "54af328faad8450ba64d63540cd0e011"
  },
  {
    "url": "assets/js/69.f155980a.js",
    "revision": "96db8d4b266be0b1d7dcfb0ca57870d0"
  },
  {
    "url": "assets/js/7.164ea849.js",
    "revision": "57e8f2ea34bf5f3581e989d8137839ae"
  },
  {
    "url": "assets/js/70.0772316e.js",
    "revision": "64b5676bf6e600629124b38e475c3f6d"
  },
  {
    "url": "assets/js/71.edd1e434.js",
    "revision": "6266d44f99c1c0671999852f1355c821"
  },
  {
    "url": "assets/js/72.93e5161b.js",
    "revision": "d5607722e2e0a5c2a110e14eda74b9c7"
  },
  {
    "url": "assets/js/73.cec57634.js",
    "revision": "2d451138153f62e1229574c4275d007c"
  },
  {
    "url": "assets/js/74.10435834.js",
    "revision": "ff34ff7606a4b2f1cbd74fc191541067"
  },
  {
    "url": "assets/js/75.36abc204.js",
    "revision": "7508ec479889bbea37c23f30513bd42a"
  },
  {
    "url": "assets/js/76.1a214f2a.js",
    "revision": "ff4d8a241317ef9b256ca7645044b2ce"
  },
  {
    "url": "assets/js/8.1ea9aa14.js",
    "revision": "24b33603bb7cceee73c38794bb452ac3"
  },
  {
    "url": "assets/js/9.e996db4f.js",
    "revision": "21e14bee5b6ae9cc4884b1e185561064"
  },
  {
    "url": "assets/js/app.b5b4185b.js",
    "revision": "02e3cf5dbab8deee79a01bc3344b59ac"
  },
  {
    "url": "assets/js/vuejs-paginate.3308613b.js",
    "revision": "e4ff8c74562cbd15e512ac1b32b48c88"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "6cfc0bf392530cd840451757edace63e"
  },
  {
    "url": "browser/devtools.html",
    "revision": "a81cd57f87cb8f2cea4ac7bd13a03fdc"
  },
  {
    "url": "browser/index.html",
    "revision": "01eaf3cae068b18f086f947e2dd1a89f"
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
    "revision": "08c77b32d400cb50a8213f6bb2bfe948"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "af62e74052ee783ce28d1d2690c8c828"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "e49c77380132f6c00667bf33a349af4b"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "10232eb6334f1dd138a2516714cca7b1"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "0e4a8a882add91313001df463c55b79f"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "397e3cde3d09f5d6c6f12855db577002"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "75a6b4492c7a8b68fa0f386cc1735ca5"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "c195e59aba5a39cbd6a044c6569561d7"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "ebe0257b668dc76f175b5e2eca043a21"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "135d307ecce4260a2b8cd6fe83851c74"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "5e2f9718da7ea6abce85cf0050d8d7d6"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "514fe20e5d3afe359a7f744870bab47e"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "36c34eff8b9ea329365b8da3b75c87ea"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "9327bf159348228d14d74e6613e9c551"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "2d57155b2a877e0b6d5a1399d4ed67cd"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "e62174680951e29a0ec3368fe00b10c6"
  },
  {
    "url": "javascript/guide/polymer.html",
    "revision": "9ad60e3b0dd3cc27cad875a5d2a04163"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "6e8d0c6a82afcefe5081a1b227ae645c"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "1aea3fa5780c0db3345c7cecb8833158"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "06a13602120f4a59f99b9ce410db3490"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "561cc3ce27bbdc871062b62a529d7a00"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "3be493adafdc55fa361d8b8fb2a74953"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "9aceccea974bf7bbb1e2612a0320e5e1"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "e2e1297a65bc9d1884e93e8d4520544c"
  },
  {
    "url": "javascript/index.html",
    "revision": "9e9ee2818eaa0fa29cc3c1cf6adda3f1"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "ab6cd796744c3fd67deed9ea23d0c1f2"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "618e8b431951486b14028574f5c9791a"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "7935159ff5c36cd2157d2c79cff9dc12"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "99a775a1fc7e2e0a89a465f141ff7446"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "cac9fabc0baa2b695b735a0e18fcc5ad"
  },
  {
    "url": "material.html",
    "revision": "d517d89913cb35d2df1e545f8eafaf8c"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "d1423fd3f3a1f81946269531590eda6f"
  },
  {
    "url": "posts/2020-08-27-my-awesome-post.html",
    "revision": "c9b7d6d1cce3acb33b9b1fcec8823503"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "3d311779c7c6824fbf09e6a915412146"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "c37c1f67aee18d0508ac1026d74b0885"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "0a49c86a2af754e90ab4b675c021c77c"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "7a8a020884cc4868e3e06025343bbcd9"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "acb0ea2074bc76dc0f01a9d2537fc65c"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "d983d85eed6e696ead3fc014c17a0304"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "de1af713f86b7dc73b53a97256ba0f0f"
  },
  {
    "url": "rust/index.html",
    "revision": "0758371cf3b6f08d819f19c8a47ee75e"
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
    "revision": "d5c4b5f138772508fccf3916df1dce32"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "68ee0d4f24bfb571860ec3df0f6f9600"
  },
  {
    "url": "technologies/css.html",
    "revision": "628bea408b7a49794d53120f387f815f"
  },
  {
    "url": "technologies/history.html",
    "revision": "b6d0ad59a2a9679a1c527f0344ea64ca"
  },
  {
    "url": "technologies/index.html",
    "revision": "557cb946caf9d3f70ca48d65aca6ab0c"
  },
  {
    "url": "technologies/modular.html",
    "revision": "8317acb7abd800d56340cf16501458d7"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "47cee31826cdbccf3712e856530d0620"
  },
  {
    "url": "technologies/regex.html",
    "revision": "b76fbebded1ef51316df645c588d0607"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "3b2841b7baafb69fb91e322969b542ee"
  },
  {
    "url": "test/index.html",
    "revision": "72a61b7da17743b3ca86bf4c4657b42f"
  },
  {
    "url": "test/using-vue.html",
    "revision": "f5c7b4f74ed336130e8d16194342d874"
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
