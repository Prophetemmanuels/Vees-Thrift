const CACHE_NAME = "vees-thrift-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/icon.png",
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  // Add more product images here
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate and clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if(key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch handler: serve cached files if offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
