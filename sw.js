```javascript
const CACHE_NAME = 'cuan-pwa-v2.8.8';

self.addEventListener('install', (event) => {
// ... existing code ... -->
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
```
