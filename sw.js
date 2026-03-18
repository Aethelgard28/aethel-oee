const cacheName = 'aethel-cache-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icono.png'
];

// Instala y guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Cacheando archivos de rango S, miau...');
      return cache.addAll(assets);
    })
  );
});

// Responde incluso si no hay internet (Modo Sobrevivencia)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});