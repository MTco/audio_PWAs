const CACHE_NAME = 'nrs-pro-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  '../../Tone.15.5.6.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
