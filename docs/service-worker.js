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
    "revision": "63f81a487bed29b241a0e346ddff3bb9"
  },
  {
    "url": "apis/github.html",
    "revision": "86b0d5dad6eb86c24dd35cb45ab7ef49"
  },
  {
    "url": "apis/index.html",
    "revision": "436fd68b6f9463a60d91eaf01d10d410"
  },
  {
    "url": "assets/css/0.styles.d65d834c.css",
    "revision": "6cf0406374a8c0463f7108744090c561"
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
    "url": "assets/js/29.cb5d1e78.js",
    "revision": "1a943c65cf52bdc13de51a94b62b7056"
  },
  {
    "url": "assets/js/3.5eb42295.js",
    "revision": "82c05f674671ab10c837f5f2218a319e"
  },
  {
    "url": "assets/js/30.f0e36040.js",
    "revision": "b74050489b2b65b5ea7277b6d7168ca0"
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
    "url": "assets/js/36.dda7a777.js",
    "revision": "fdf01622af8ba58670a2f09d1fa26dad"
  },
  {
    "url": "assets/js/37.2aa0667c.js",
    "revision": "1ff3089bf9a7758bf4b12cf6f3c6b978"
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
    "url": "assets/js/56.bf98ea44.js",
    "revision": "48842c73b1150d8219c037ccf0fb4927"
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
    "url": "assets/js/60.b540bcff.js",
    "revision": "2dfe7007fcfb055dce974eba00f1c471"
  },
  {
    "url": "assets/js/61.a902158e.js",
    "revision": "d2f8c8b4658dd0332bb90c755871f426"
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
    "url": "assets/js/app.e05fa087.js",
    "revision": "a7677711941265eb6522dc3c6fe741be"
  },
  {
    "url": "assets/js/vuejs-paginate.8f017de9.js",
    "revision": "ca8e21a6dadb32753379ae29e706ab1c"
  },
  {
    "url": "browser/browser-api.html",
    "revision": "2009212bf5fb9b3f9773d25b8cc96f62"
  },
  {
    "url": "browser/devtools.html",
    "revision": "137bf2aeec444f5f2260fd09cc5e74fd"
  },
  {
    "url": "browser/index.html",
    "revision": "255d543baa86ac307928478c2790240c"
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
    "revision": "9a566184a44365597bd4251eee6e7e75"
  },
  {
    "url": "javascript/guide/asynchronous.html",
    "revision": "b282875be7d91edbdd40b011db301d5b"
  },
  {
    "url": "javascript/guide/compiler.html",
    "revision": "500fc67ab39988dde954c84c4401ed1c"
  },
  {
    "url": "javascript/guide/debug.html",
    "revision": "b24cadb53e101c4da3b82d159a476aef"
  },
  {
    "url": "javascript/guide/destructuring.html",
    "revision": "d19f3089c3f926334abeee7f0f3d0792"
  },
  {
    "url": "javascript/guide/devtools.html",
    "revision": "0d841f798d6ce9a9d74141ea9679fcc3"
  },
  {
    "url": "javascript/guide/es6.html",
    "revision": "dbce51fa0333d2e4a18694c8828cc47f"
  },
  {
    "url": "javascript/guide/eventloop.html",
    "revision": "e3d76523f0fe87f62e62b802ca5b388f"
  },
  {
    "url": "javascript/guide/iife.html",
    "revision": "21cec28d0514ad7ee291398e1ac0e0fa"
  },
  {
    "url": "javascript/guide/index.html",
    "revision": "48c0e20f0c34d7290ea9d4f9b3cacc4b"
  },
  {
    "url": "javascript/guide/jsengine.html",
    "revision": "300e7d0b9804717adcd4f0839e462d1b"
  },
  {
    "url": "javascript/guide/jstesting.html",
    "revision": "dfcf8be89fd339cb091be996fcf02c2f"
  },
  {
    "url": "javascript/guide/modules.html",
    "revision": "b6d370898065c1d0e062e6f5df7a37ae"
  },
  {
    "url": "javascript/guide/nodejs.html",
    "revision": "510d82734b8f699afcadfee31369addd"
  },
  {
    "url": "javascript/guide/objects.html",
    "revision": "5750e4280df1b7d992ff72c51d29165c"
  },
  {
    "url": "javascript/guide/perfromance.html",
    "revision": "3cef04bf8cac962ff25b718075596a61"
  },
  {
    "url": "javascript/guide/promise.html",
    "revision": "c5ab11bfd9dc681e09c7505300505844"
  },
  {
    "url": "javascript/guide/proto.html",
    "revision": "8197edf4a7a4c4ef57c5604da1a8b684"
  },
  {
    "url": "javascript/guide/syntax.html",
    "revision": "a9b4981a9b0e4a18e38c90ced871d253"
  },
  {
    "url": "javascript/guide/todo.html",
    "revision": "e3c5d2796e083ae3fb52ba235eade731"
  },
  {
    "url": "javascript/guide/typescript.html",
    "revision": "cbae2f7434bf8b2064010f6160b0077f"
  },
  {
    "url": "javascript/guide/v8engine.html",
    "revision": "f527d1f7c7c30fd9dc13793a6cdec95b"
  },
  {
    "url": "javascript/guide/wasi.html",
    "revision": "7eefe2e30f957a2ce804f117a4365e57"
  },
  {
    "url": "javascript/guide/wasm.html",
    "revision": "449d961f5e18a8c633d18656db949cd0"
  },
  {
    "url": "javascript/index.html",
    "revision": "08e1201f424f23d0dbf29c442f451161"
  },
  {
    "url": "javascript/libraries/cypress.html",
    "revision": "a4169636f751348c0f0a6f73daa3372e"
  },
  {
    "url": "javascript/libraries/d3js.html",
    "revision": "9eaa1b262929aa8cfa276f512f857571"
  },
  {
    "url": "javascript/libraries/index.html",
    "revision": "99678aafab89010281d6eb7e5386a7fa"
  },
  {
    "url": "javascript/libraries/jquery.html",
    "revision": "e821049878251dc7d1e76f8afc8fba26"
  },
  {
    "url": "javascript/libraries/polymer.html",
    "revision": "0a1bd460eaf22ea655b3ed25e67ed339"
  },
  {
    "url": "javascript/libraries/react.html",
    "revision": "24649138a855e4e0a61fc35347e424ab"
  },
  {
    "url": "javascript/libraries/rxjs.html",
    "revision": "a2b6af3dbf1d761fa92473f177c55410"
  },
  {
    "url": "javascript/libraries/vue-cli.html",
    "revision": "934b61ce41e69c7072c6853350f3411c"
  },
  {
    "url": "javascript/libraries/vuejs.html",
    "revision": "1a85888d68ff6cbb1e3cb71bfa205255"
  },
  {
    "url": "material.html",
    "revision": "fb53487831dbb7297313589eb6845995"
  },
  {
    "url": "posts/2020-08-27-aws-cloud-infrastructure.html",
    "revision": "70d48b649947bf2c8e13c0d01c4bc204"
  },
  {
    "url": "posts/2020-08-27-first-post.html",
    "revision": "fb62679916b9530ac135e980aaaca05d"
  },
  {
    "url": "posts/2020-08-27-uncle-bob.html",
    "revision": "027ed543026bc06b19735ec96d78f082"
  },
  {
    "url": "posts/2020-08-30-brendan-eich-how-to-fix-the-web.html",
    "revision": "34f079e7fdf66ad9a40229ce0c4abdc8"
  },
  {
    "url": "posts/2020-09-01-svg-assets-and-icon-system.html",
    "revision": "c286d86a0496e5fbae48c4bc9ba5ebaf"
  },
  {
    "url": "posts/2020-09-08-oop-principles-in-js.html",
    "revision": "83f1d310116f9068b8ce4ca56424ad3d"
  },
  {
    "url": "posts/2020-09-08-react-shopping-cart-app.html",
    "revision": "ebf1cb1e5b93113ea741e4e270777f25"
  },
  {
    "url": "posts/2020-09-10-simple-make-easy-rich-hickey.html",
    "revision": "d3a32f5dd62c482ed90fb078afd6a754"
  },
  {
    "url": "posts/index.html",
    "revision": "e9392c8835fe4710116b2416e4d36117"
  },
  {
    "url": "rust/guide/concepts.html",
    "revision": "7a020b3415ada0bea691fbfc13ce000f"
  },
  {
    "url": "rust/guide/index.html",
    "revision": "232e59dfee63090b2b5a2b15138893b9"
  },
  {
    "url": "rust/guide/intro.html",
    "revision": "a5f9dacce2f0776dffbf24646bcc7042"
  },
  {
    "url": "rust/guide/rustconf.html",
    "revision": "4816dd605a09566d6281c4ca10c9b6dc"
  },
  {
    "url": "rust/index.html",
    "revision": "38d9ee4c0cde736e40959f62b74ebd0c"
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
    "revision": "e1cf445dc14bd7a93bb2d548564c2f48"
  },
  {
    "url": "technologies/arrays.html",
    "revision": "7406a170b4097d1ffb4afe06091bec42"
  },
  {
    "url": "technologies/aws.html",
    "revision": "816ecc3be25952fb4210626655f4265f"
  },
  {
    "url": "technologies/css.html",
    "revision": "a11e4015916ae2f25ffc385e9c4570dd"
  },
  {
    "url": "technologies/history.html",
    "revision": "6d8bbe4b4a69894b2a1b3572b64531fd"
  },
  {
    "url": "technologies/index.html",
    "revision": "849090d6c917525df04109b3debfff7a"
  },
  {
    "url": "technologies/modular.html",
    "revision": "fd76b8ec9948d2f40bf61a62e0fc0bdb"
  },
  {
    "url": "technologies/primitives.html",
    "revision": "9eab156e229861cd8d47f997a416fcae"
  },
  {
    "url": "technologies/regex.html",
    "revision": "7361a1daac6264e5e2273584d5392e96"
  },
  {
    "url": "technologies/webpack.html",
    "revision": "ec93bd5d2c9f96815ed36e7b4b392045"
  },
  {
    "url": "test/index.html",
    "revision": "9942d5333c05271d565aca845ab974be"
  },
  {
    "url": "test/using-vue.html",
    "revision": "c3caf08bc4cf0291dfb70f21122c6b8e"
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
