const CACHE_NAME = 'nrs-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './Tone.14.8.49.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
