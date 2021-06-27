import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
import CONFIG_CACHE from './globals/config-cache';

const { assets } = global.serviceWorkerOption; // get all assets apps

self.addEventListener('install', (event) => {
  console.log('installing service worker');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('activating service worker');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return; // cek jika bukan https

  event.respondWith((async () => {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(event.request);

    const hosts = [
      'https://fonts.googleapis.com',
      'https://maxcdn.bootstrapcdn.com',
      'https://cdnjs.cloudflare.com',
      'https://use.fontawesome.com',
    ];

    if (hosts.some((host) => event.request.url.startsWith(host))) {
      // This clone() happens before `return networkResponse`
      const clonedResponse = networkResponse.clone();

      event.waitUntil((async () => {
        const cache = await caches.open(CONFIG_CACHE.CACHE_NAME);
        // This will be called after `return networkResponse`
        // so make sure you already have the clone!
        await cache.put(event.request, clonedResponse);
      })());
    }

    return networkResponse;
  })());

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
