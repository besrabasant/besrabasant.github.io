importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.96e8bda58e4b52969a96.js",
    "revision": "9a788b9ebac152d234fdb0b1a5a20591"
  },
  {
    "url": "/_nuxt/layouts/default.920072078582fce25753.js",
    "revision": "def47012e40916377f8f4a1a5d2a028f"
  },
  {
    "url": "/_nuxt/layouts/pages.7d057eeef5e850a3c165.js",
    "revision": "4c6040e6041319f587c6b0ebb3ee35ef"
  },
  {
    "url": "/_nuxt/manifest.36ab56aa4699e82b3580.js",
    "revision": "a2bd5550b790abb516e1a896bfd97ade"
  },
  {
    "url": "/_nuxt/pages/_post.bd986b6c07c87828044d.js",
    "revision": "a40092bab4ce07995b795aa146e86b45"
  },
  {
    "url": "/_nuxt/pages/_project.78b2a26dd4983ed65924.js",
    "revision": "80589b1e3f8eb6ed6058c36a90936d38"
  },
  {
    "url": "/_nuxt/pages/_wip.1f6c67b1c519f2dffa99.js",
    "revision": "8b17972f47cb92b360fa98a3933223e3"
  },
  {
    "url": "/_nuxt/pages/archives/posts.c59316940cc4739555e2.js",
    "revision": "e02701862b54ca32ec4395370626072b"
  },
  {
    "url": "/_nuxt/pages/archives/projects.ae8c64218663b1f3f1f7.js",
    "revision": "d74846b0fc6477649c6b6b389cbd9941"
  },
  {
    "url": "/_nuxt/pages/index.680fa5a5d8c30d0b1d6c.js",
    "revision": "106c360a67fd0c62f5cff300d8f34a02"
  },
  {
    "url": "/_nuxt/pages/policy.e0e1e4297f190cc1a85d.js",
    "revision": "7ee8f8c8b8ccb27a2dae32d42e10a8b7"
  },
  {
    "url": "/_nuxt/pages/posts.a21632a3629f83689667.js",
    "revision": "0e71902a0bd5ee4bdfa4ef60a3e833f7"
  },
  {
    "url": "/_nuxt/pages/projects.1126b1a81382de507b06.js",
    "revision": "50bfd2b0f4494a83c742197adcd7134f"
  },
  {
    "url": "/_nuxt/vendor.aba389b9314f6256206a.js",
    "revision": "798f0e3cb3751cac579c782bb7ae1f5f"
  }
], {
  "cacheId": "besrabasant.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





