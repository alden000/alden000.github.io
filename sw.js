// Clean-up service worker. During domain setup a project app's offline worker got registered on
// this domain and kept serving its saved copy of a page for every address here. Browsers check
// this file for updates, find this version, and run it: it deletes the saved pages, unregisters
// itself and reloads open tabs, so the domain is served normally again. Nothing registers it.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key);
      await self.registration.unregister();
      for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
    })(),
  );
});
