const CACHE_NAME = "pagos-v2";

self.addEventListener("install", event => {
self.skipWaiting();

event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll([
"./",
"./registro_pagos_pro.html"
]);
})
);
});

self.addEventListener("activate", event => {
event.waitUntil(
caches.keys().then(keys =>
Promise.all(
keys
.filter(key => key !== CACHE_NAME)
.map(key => caches.delete(key))
)
)
);

self.clients.claim();
});

self.addEventListener("fetch", event => {
event.respondWith(
fetch(event.request).catch(() => caches.match(event.request))
);
});
