const CACHE_NAME = 'nrs-precision-v3';
const ASSETS = ['./index.html', './manifest.json', './Tone.14.8.49.min.js'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))));
