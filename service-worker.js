const CACHE_NAME = "vees-thrift-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/logo.png",
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
