// Hayatus Sahabah — service worker
// Cache-first app shell so the book reads fully offline once opened.

const CACHE_VERSION = "hayatus-v2";
const CORE_ASSETS = [
  "./",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Page navigations (app launch / URL bar / installed icon): always resolve to "./"
  // to sidestep host-level redirects on "/index.html" (e.g. Vercel's clean URLs),
  // which service workers are not allowed to hand back for a navigation request.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          caches.open(CACHE_VERSION).then((cache) => cache.put("./", res.clone()));
          return res;
        })
        .catch(() => caches.match("./"))
    );
    return;
  }

  // Google Fonts: stale-while-revalidate so first load can still work offline later.
  if (req.url.includes("fonts.googleapis.com") || req.url.includes("fonts.gstatic.com")) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // App shell + data: cache-first, falling back to network, then caching the result.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => undefined);
    })
  );
});
