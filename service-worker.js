const cacheName = "vees-thrift-cache-v1";
const assets = [
  "index.html",
  "manifest.json",
  "service-worker.js",
  "images/icon.png",
  "images/p1.jpg",
  "images/p2.jpg",
  "images/p3.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
