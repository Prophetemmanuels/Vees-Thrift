const cacheName="vees-thrift-v1";
const assets=[
  "/",
  "/index.html",
  "/manifest.json",
  "/images/icon.png"
  // Add other assets like product images, CSS, JS files
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets)));
});

self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(response=>response||fetch(e.request)));
});
