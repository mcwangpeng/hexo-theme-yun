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
    "revision": "9876eb1a55fb35ddb93d1bc7b719df03"
  },
  {
    "url": "about.html",
    "revision": "9e2938ae0cbbfcdfb254a44eda33f016"
  },
  {
    "url": "assets/css/0.styles.413137a1.css",
    "revision": "ccf9b3c574ab3fd7da8044424113cb57"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.719304c1.js",
    "revision": "6dd648d2a10b4247ff5c6f7911d31dfc"
  },
  {
    "url": "assets/js/11.bbb583ed.js",
    "revision": "a1503cbb3224077d3ce214046c7761ba"
  },
  {
    "url": "assets/js/12.f3b86a9a.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.0bb92ce8.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.ca913b2d.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.caa9059b.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.77a43179.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.250746f0.js",
    "revision": "1c191bed1a4b91641274278f61d11c84"
  },
  {
    "url": "assets/js/18.de2ce77a.js",
    "revision": "e44b8b50f27a8b47911bc6643d090b3c"
  },
  {
    "url": "assets/js/19.d991ef1d.js",
    "revision": "1160c160f0176974d43b7e5f9b297ac3"
  },
  {
    "url": "assets/js/20.9b56471f.js",
    "revision": "cf31793f357a6bf692b42637b79a5012"
  },
  {
    "url": "assets/js/21.47c42ca8.js",
    "revision": "5a5fe9ad1f95aea02046aade48b732cf"
  },
  {
    "url": "assets/js/22.7c34c242.js",
    "revision": "765bc5e67d441b780a9e10051c70ceab"
  },
  {
    "url": "assets/js/23.71258e4c.js",
    "revision": "9cde220a724bac5b899ead504b5000f6"
  },
  {
    "url": "assets/js/24.dddc1e23.js",
    "revision": "4a6b6e22dbfa3f869d8b8b741b60a922"
  },
  {
    "url": "assets/js/25.c02eee50.js",
    "revision": "1478b7680122f7a452bc423e04170b33"
  },
  {
    "url": "assets/js/26.cbfb6bb5.js",
    "revision": "fd780fed7adf465c92b887e69228e3bc"
  },
  {
    "url": "assets/js/27.2d122fbd.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.27804323.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.83a69cc0.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b316e861.js",
    "revision": "b5a5aafc9a12bbd66745ff6f77191cfd"
  },
  {
    "url": "assets/js/30.4118a277.js",
    "revision": "e80753590e64e81add0ca8eeb957eece"
  },
  {
    "url": "assets/js/31.c3a37011.js",
    "revision": "490b499e1846ef5a5b02ced3fe4ddd26"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.335cf54b.js",
    "revision": "e3210b9fa6d87473b3030b735058e108"
  },
  {
    "url": "assets/js/5.155c6b16.js",
    "revision": "826aaa0eee8fae406e576631e54d56df"
  },
  {
    "url": "assets/js/6.f021cea4.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.721e06ee.js",
    "revision": "2aceb9e462b5abe1e6117bbf786e14cb"
  },
  {
    "url": "assets/js/8.9c1b0eb8.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.3f7866af.js",
    "revision": "787dbf133ed82821839914592f9cc440"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "912d51c041099016b0329a3be065f1ef"
  },
  {
    "url": "en/about.html",
    "revision": "38a5977663faac46f9c650861963f78a"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "c10a60eb044c046890298c525605d8be"
  },
  {
    "url": "en/guide/config.html",
    "revision": "00aaa895735e74c1ccdc2e41da96c6c6"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "59a29a03ed3f6d1f454a7a0620ddeb0d"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "f293a36ec3393b1e2540d382ebd75fdd"
  },
  {
    "url": "en/guide/index.html",
    "revision": "09be6d0777cbd4f6e3922baa5a0965ed"
  },
  {
    "url": "en/guide/page.html",
    "revision": "be50ba60929e0d375d8561ee7a803392"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "6d1b0a89e6829cc4ce174b77ec92a8bd"
  },
  {
    "url": "en/index.html",
    "revision": "26a3173699e4432461343f02dea45477"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "50c9e6dc1ea8bf4d8ca692efe420b1ec"
  },
  {
    "url": "guide/config.html",
    "revision": "a6eb954a559c1c84161e46b5347fbe7b"
  },
  {
    "url": "guide/faq.html",
    "revision": "5d6009c015b2083c551ee8c6e13face6"
  },
  {
    "url": "guide/icon.html",
    "revision": "74e4ed89f4a94e31c85682538116af27"
  },
  {
    "url": "guide/index.html",
    "revision": "80e925f7f3e58b1cebe26b60ab1c93d1"
  },
  {
    "url": "guide/migrate.html",
    "revision": "70a99fe49219e90cf0b389a97ed40b43"
  },
  {
    "url": "guide/page.html",
    "revision": "df14fe960cf8a0027d9f4937545315a5"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "b65caa87efe4812a82096ca72e3633c8"
  },
  {
    "url": "index.html",
    "revision": "7208a9a70b3105f9cc925fc97e48616d"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
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
