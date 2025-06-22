const cacheName = 'cuestionario-silabas-v1';
const filesToCache = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'gato.jpg',
  'mesa.jpg',
  'silla.jpg',
  'pelota.jpg',
  'perro.jpg',
  'luna.jpg',
  'coche.jpg',
  'pato.jpg',
  'nube.jpg',
  'manzana.jpg',
  'camisa.jpg',
  'jirafa.jpg',
  'escoba.jpg',
  'zapato.jpg',
  'armario.jpg',
  'tortuga.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
