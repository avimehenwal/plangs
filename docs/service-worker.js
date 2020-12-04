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
    "revision": "c033df7d62bc07173e596099fd6d5b84"
  },
  {
    "url": "apis/github.html",
    "revision": "3aba123d700d03656864fd208bdb2ee9"
  },
  {
    "url": "apis/index.html",
    "revision": "60bd42f8f512bbad5a0db4ab8dbdff6c"
  },
  {
    "url": "assets/css/0.styles.ca14067a.css",
    "revision": "beaa2b243dda4734d1d665c1fd58ea10"
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
    "url": "assets/js/10.63f764a9.js",
    "revision": "708b42d6a2c93f575aeba69893e7f1c8"
  },
  {
    "url": "assets/js/11.fe32fc8a.js",
    "revision": "6807498acec1c28ad3a84cf853f1fa58"
  },
  {
    "url": "assets/js/12.ac073cf3.js",
    "revision": "708f99fc9397fe530b733a6cca9d0a76"
  },
  {
    "url": "assets/js/13.af6473c0.js",
    "revision": "a56141d6e362a5b0d3e4d39be6206a02"
  },
  {
    "url": "assets/js/14.59284f0d.js",
    "revision": "651cf7aebf6b2f32bc4a43ecde6dcffb"
  },
  {
    "url": "assets/js/15.c57043b0.js",
    "revision": "ab005e81e14e1161da7ff68f6dcf4e66"
  },
  {
    "url": "assets/js/16.a0cf13e1.js",
    "revision": "4d914d9120a4602e1f8e3e3116336680"
  },
  {
    "url": "assets/js/17.9b2573a7.js",
    "revision": "4f1e0761aa0fb0748f946fc1ed699a58"
  },
  {
    "url": "assets/js/18.38733897.js",
    "revision": "88174e9222be865aca7732321cf93aca"
  },
  {
    "url": "assets/js/19.46836abe.js",
    "revision": "5db8d68c1740a33afc2e4c51470e0e4e"
  },
  {
    "url": "assets/js/20.a1748483.js",
    "revision": "55f8107fd0381bc5acc7ea92d536f033"
  },
  {
    "url": "assets/js/21.bca8b4fc.js",
    "revision": "9a8f5dd7dadddf57880477be7e543d11"
  },
  {
    "url": "assets/js/22.7cfc6497.js",
    "revision": "c1921688b3f5dca889fc15dd26acd1c9"
  },
  {
    "url": "assets/js/23.05fef24d.js",
    "revision": "6ecebaf18288ed1d3a512a238e24f908"
  },
  {
    "url": "assets/js/24.a54d5590.js",
    "revision": "8e9914e583e33d3d410e3dda3280d639"
  },
  {
    "url": "assets/js/25.921872a6.js",
    "revision": "3d0fc32ed552fc2577026144159eb688"
  },
  {
    "url": "assets/js/26.a55d27d6.js",
    "revision": "dcf9057a6654212a84cc67b2aa1fab18"
  },
  {
    "url": "assets/js/27.9b96850e.js",
    "revision": "e7f567b0c986cbeaaa7f84c4ed34835e"
  },
  {
    "url": "assets/js/28.c00805da.js",
    "revision": "e79c28094eb4b0260a1362ee513fd97d"
  },
  {
    "url": "assets/js/29.5a85711c.js",
    "revision": "e67b86e9a24659f97ce13d02a1a67587"
  },
  {
    "url": "assets/js/3.5eb42295.js",
    "revision": "82c05f674671ab10c837f5f2218a319e"
  },
  {
    "url": "assets/js/30.d28815c7.js",
    "revision": "d1e2802c57b53d5f393fef8edbe177af"
  },
  {
    "url": "assets/js/31.c95c499c.js",
    "revision": "90d48498670744067df8af540d3023f9"
  },
  {
    "url": "assets/js/32.7f3e58a2.js",
    "revision": "c6c5f20562e4be1f73dd86539a88f246"
  },
  {
    "url": "assets/js/33.ef4475c1.js",
    "revision": "f6201791ad519089c78d03a62a81926b"
  },
  {
    "url": "assets/js/34.f35aecbf.js",
    "revision": "47b8283bd07d5c31ff6a1b2084b5faa0"
  },
  {
    "url": "assets/js/35.6ad8c568.js",
    "revision": "2400a895edfbb765b2715f089aca2020"
  },
  {
    "url": "assets/js/36.9e917ea3.js",
    "revision": "83cae75ccd80be54520e013a3f62c181"
  },
  {
    "url": "assets/js/37.636d365b.js",
    "revision": "ab976528fa98a063b5d512e3ce44dda0"
  },
  {
    "url": "assets/js/38.d24bdad6.js",
    "revision": "cafd80664846e9eb26f3e2819fdf47be"
  },
  {
    "url": "assets/js/39.a42b1d4a.js",
    "revision": "e458349b51ace33fcc95f6d685e26191"
  },
  {
    "url": "assets/js/4.ff49e1b4.js",
    "revision": "688cab3224fcfa946fbf472aad5d4497"
  },
  {
    "url": "assets/js/40.2de707b6.js",
    "revision": "78d5ee8c2b92de12907ff9fc2bdba75f"
  },
  {
    "url": "assets/js/41.de33e4da.js",
    "revision": "bfbd9b379d8d76ebccddbf26fa5b3f24"
  },
  {
    "url": "assets/js/42.e220ab83.js",
    "revision": "27cc9df9f216a94bdc7f1c1184faceb2"
  },
  {
    "url": "assets/js/43.d34300ce.js",
    "revision": "ddec0697cde180d9d35132cd1d1bd0a4"
  },
  {
    "url": "assets/js/44.8ff7c4dc.js",
    "revision": "73b8325d4e8118be43685927a426a37a"
  },
  {
    "url": "assets/js/45.f47e56a3.js",
    "revision": "6fa5e2d9ba0bfa409960d2ab7c759227"
  },
  {
    "url": "assets/js/46.d71a0f6c.js",
    "revision": "b3202c06a220c776a17373425b963a4f"
  },
  {
    "url": "assets/js/47.49cee8f5.js",
    "revision": "299c74a04e8bf0eb7bd5f70540fdeb50"
  },
  {
    "url": "assets/js/48.51d42796.js",
    "revision": "710b02b023dcda62e4991e997aa3c6fd"
  },
  {
    "url": "assets/js/49.6f99e93b.js",
    "revision": "f79c89265aeb61bb6bd5695f42357917"
  },
  {
    "url": "assets/js/5.75291e98.js",
    "revision": "f09a5c82670a133a175d0f39b7b791e7"
  },
  {
    "url": "assets/js/50.e3d3e875.js",
    "revision": "466eee7d270338027f55385f03facdc8"
  },
  {
    "url": "assets/js/51.0efe351b.js",
    "revision": "1a000df9a5ac695d8429479502b0d284"
  },
  {
    "url": "assets/js/52.54c86e53.js",
    "revision": "33b031b061ad3bdfc1f21f370a94c438"
  },
  {
    "url": "assets/js/53.2be02f9a.js",
    "revision": "d2804d9ce645d343a1834fc065e218a5"
  },
  {
    "url": "assets/js/54.21777f26.js",
    "revision": "5090c6831b18321e8adb3a1b54c5a85a"
  },
  {
    "url": "assets/js/55.bbb33a29.js",
    "revision": "cc071ae965c410aa0390c99a31149893"
  },
  {
    "url": "assets/js/56.7ec2392a.js",
    "revision": "4d8c8112d87eeeb8e2a41d486ea01ace"
  },
  {
    "url": "assets/js/57.788a4176.js",
    "revision": "88e7597b16758842c8b0d14012ad286c"
  },
  {
    "url": "assets/js/58.d4992827.js",
    "revision": "51b5f9a8cd4d928173e70ecca7037ad1"
  },
  {
    "url": "assets/js/59.e53faea1.js",
    "revision": "f8478960b26ac024a68e0f2a21777d2c"
  },
  {
    "url": "assets/js/6.6abde8b9.js",
    "revision": "cc9735ffbdab47ead2c15632baffef6a"
  },
  {
    "url": "assets/js/60.2172a2d7.js",
    "revision": "766ff1cf0061a570de656046d2350ea1"
  },
  {
    "url": "assets/js/61.f163d973.js",
    "revision": "11bc709503795b7695b3ae00aeeac38f"
  },
  {
    "url": "assets/js/62.c410cb30.js",
    "revision": "25413c85eb8a156c90bade78c501f887"
  },
  {
    "url": "assets/js/63.fb7d31cd.js",
    "revision": "4bf031114b57585018f134910252a9d8"
  },
  {
    "url": "assets/js/64.a3e9d969.js",
    "revision": "c0e71ef36bc876eba691254e4ee45b00"
  },
  {
    "url": "assets/js/65.32d818cb.js",
    "revision": "4c3f2d9ef9cdace6555b583884408218"
  },
  {
    "url": "assets/js/66.2c529887.js",
    "revision": "853ae3861a5348191f589e39f0c05cc6"
  },
  {
    "url": "assets/js/67.fc4025c1.js",
    "revision": "3a84058e499d73778550dcd6f46936a4"
  },
  {
    "url": "assets/js/68.88418714.js",
    "revision": "74c396c3dc5d75ef72f80a997a486273"
  },
  {
    "url": "assets/js/69.1a51dcf3.js",
    "revision": "c79451c6952ab5595d243570b14584f5"
  },
  {
    "url": "assets/js/7.d50ae827.js",
    "revision": "4f757f1a4e0372fb6396b01277ce4393"
  },
  {
    "url": "assets/js/70.383feae4.js",
    "revision": "ac35729ba50bc1c6fca9b08560a20a89"
  },
  {
    "url": "assets/js/71.f8a0ae88.js",
    "revision": "ebfe930191e8899d242f595d08fbb837"
  },
  {
    "url": "assets/js/72.4b132a04.js",
    "revision": "b6fd9b5e417adf4b1921485ddbb067de"
  },
  {
    "url": "assets/js/73.25129318.js",
    "revision": "bbfbc664be23ebcbcfa3b98bf2e65bcf"
  },
  {
    "url": "assets/js/74.3ef20232.js",
    "revision": "9e97fb4d0f45e0ae1df4268636ac0cf3"
  },
  {
    "url": "assets/js/75.811557a8.js",
    "revision": "ecfa308512075076d6d676fe123aa896"
  },
  {
    "url": "assets/js/76.3d3b3ed3.js",
    "revision": "3efda682505302fe400696ef191d67e8"
  },
  {
    "url": "assets/js/77.84c7549b.js",
    "revision": "24b5c3c72dcce37b19ecd4dd254506d7"
  },
  {
    "url": "assets/js/78.d012f5dc.js",
    "revision": "81b8a2f1cef0f665442d78572e26548e"
  },
  {
    "url": "assets/js/79.a3504cb5.js",
    "revision": "4551dbc30657ac7cce3ff5489ee471fc"
  },
  {
    "url": "assets/js/8.944f7f3f.js",
    "revision": "07b2e5dd74be894042f4732f0ba38a2f"
  },
  {
    "url": "assets/js/80.bae6bd7a.js",
    "revision": "e94bef3ad9d4f2cf098c2b22f60502a9"
  },
  {
    "url": "assets/js/81.34c2482b.js",
    "revision": "e4c60de116d20cae491537d1c7e097ec"
  },
  {
    "url": "assets/js/82.4d8b127b.js",
    "revision": "62b07730f5bb0799d9704f2539a471cc"
  },
  {
    "url": "assets/js/83.11451b16.js",
    "revision": "4ccd63e99efbb4452ac6f84fcd2d018e"
  },
  {
    "url": "assets/js/84.41856f46.js",
    "revision": "990a6b6a4388fe39118d439244424cf8"
  },
  {
    "url": "assets/js/85.501e4c6c.js",
    "revision": "ca468cc90fdde644735d0800bb5d4765"
  },
  {
    "url": "assets/js/9.9a990ff2.js",
    "revision": "83315f79690e4538d548265067ec4a67"
  },
  {
    "url": "assets/js/app.d5e6896a.js",
    "revision": "c81d8da64e21fb346471ea5290419cfc"
  },
  {
    "url": "assets/js/vuejs-paginate.8f017de9.js",
    "revision": "ca8e21a6dadb32753379ae29e706ab1c"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "e5d3f57207167d266c0b84b59a2c022f"
  },
  {
    "url": "browser/devtools.html",
    "revision": "225cf57bbc3cc47f7b85ef2b7960679f"
  },
  {
    "url": "browser/index.html",
    "revision": "2e9d23a27b78d47ba6fc3960eff51754"
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
    "revision": "0e68b504fac00f2ff64c043346b0403c"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "11fa9c84b4f9116bde26d7305c45129a"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "c4aa07041c517e16c05196ed7379396a"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "c09b641371fec697fb8561530591d511"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "9966f34ceb634073959f6aafbba14039"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "9a25c42e105dbc99c669f5d3bc58f72e"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "77e1b33103549a453e66cdc3f5af6ea0"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "c432aa3ec9aed519d684e148d23ffddb"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "2ad3489360039769f15ea4169da2d592"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "9075ccd26821c457c53cb22ad9d7b053"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "2f037960aee0709c1b2dddf9f21fd13b"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "9d7477dbf7f9b102df0ce63ea56812f2"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "d3bc9bca9c9814f220b354dc85257e33"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "93acac0a24e4940e2a7868af37915aef"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "d2a5d8fbdfff3607323296ca9e2bd292"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "1d13cceb75ba0cc35e4a84e0a0048558"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "680312ca70ac0e44ec3557486d4c77b2"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "da131686b368607138fffcf251ba5501"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "52306a4b3c2b22c02c8b64a726e5ef9c"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "44349d1e8a3625f597ed5b3c22b034ef"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "e92871c76d20bcaa64d5de661144e0ec"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "7537c6bca8b81c658f022fb9d824a881"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "e7ed5b5712149b1a85d5e087545528d2"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "2fd01e925eb4abd5bda7c8550d7b2a9f"
  },
  {
    "url": "javascript/index.html",
    "revision": "547bacdcc5ae8160c130c26721cc1a32"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "002592f0b53af1ec8ed6608bf943f43a"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "c929b279436b5911f32fbf84bd1ab93c"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "ab00411a0738c4bee217a09685f979c7"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "7675f4ce1125cae4014afc51755e7ddb"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "a00ae0d89bce90ee664bd89d38d30f21"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "59837b6461f2486131b737234f88bbdc"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "b6ad551219025a671205b6eaa7c9e679"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "fc1c19799725fc19a3d57b28b8daad4e"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "4f62cf3056f2c415ebbe642f88965867"
  },
  {
    "url": "material.html",
    "revision": "53a9eb8e89cb82a37273e92b7cd7cbb1"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "f6c172f34a46f0c4236f69fdb931f925"
  },
  {
    "url": "posts/2020-08-27-second-post.html",
    "revision": "88f81d87f5db45a176b2f0efa670a533"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "b6f097b3598d5208cb9196a8598ca790"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "5ba602c21017d91b6ead3a9ea81c1265"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "91c73acab6d2f90e1f235827db1a711f"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "7ff3b422063f961767eb5ce20c51b90e"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "b812b0bac365a0822222a1fe227fe23b"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "53ab1ac706c97918f610dcba21b4077c"
  },
  {
    "url": "posts/index.html",
    "revision": "26e3a9d28bffec5523f5a1d2eff4d0f6"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "e216844cc55101955c9d9c5f53a1d502"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "4ff71171d595eec2d84de6b61ed11918"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "aada417da991cf89c1b155250294575a"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "b503aa39a0787b7507d72ea14a4751c5"
  },
  {
    "url": "rust/index.html",
    "revision": "86aed2c807d80f67e117526d9dc2e2d3"
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
    "revision": "5fe324163b0150ca43ff6c44e081e048"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "9df4c3655e869cc442201554435c3be3"
  },
  {
    "url": "technologies/aws.html",
    "revision": "0ac7c297d8ded0e8bac3b1445919b0e7"
  },
  {
    "url": "technologies/css.html",
    "revision": "e80c7a56b84aff8327bb12fa2c83b3ef"
  },
  {
    "url": "technologies/history.html",
    "revision": "fbb6ea268906a82711fd9252db78c8a0"
  },
  {
    "url": "technologies/index.html",
    "revision": "f4153150851baf0429dee0d0cfbab162"
  },
  {
    "url": "technologies/modular.html",
    "revision": "34e11cdea13f36ea28c2b9ca4705b51b"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "f7e726af796c8207cac3b7f2642b4c98"
  },
  {
    "url": "technologies/regex.html",
    "revision": "f1158cbb9b0f2e89867994f55ff7dd90"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "abb1c1f9babb9bd0dadc6212f124ded8"
  },
  {
    "url": "test/index.html",
    "revision": "c43b79d66e88404be384deee7a6caa17"
  },
  {
    "url": "test/using-vue.html",
    "revision": "07a95484203c02b966afdb5669f9ee84"
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
