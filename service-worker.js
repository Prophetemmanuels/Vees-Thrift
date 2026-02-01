const CACHE_NAME = "vees-thrift-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/logo.png",
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
