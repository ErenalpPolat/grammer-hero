// Grammar Hero · minimal Service Worker
// Hand-rolled (Serwist Turbopack ile uyumsuz olduğu için).
//
// Stratejiler:
// - Statik next/_next/static assetler → cache-first (immutable, hash'li)
// - Sayfalar (HTML) → network-first, ağ yoksa cache veya /offline fallback
// - API/auth/quiz → her zaman network (cache yok)

const VERSION = "v1";
const STATIC_CACHE = `gh-static-${VERSION}`;
const PAGES_CACHE = `gh-pages-${VERSION}`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(PAGES_CACHE).then((cache) => cache.add(OFFLINE_URL).catch(() => undefined)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE && k !== PAGES_CACHE)
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Skip auth, API and Next data routes — always network
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/_next/data/") ||
    url.pathname.startsWith("/lesson/") // dinamik quiz state, cache'leme
  ) {
    return;
  }

  // Static immutable assets (cache-first)
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname === "/favicon.ico" ||
    url.pathname === "/manifest.webmanifest"
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(STATIC_CACHE);
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const fresh = await fetch(req);
          if (fresh.ok) cache.put(req, fresh.clone()).catch(() => undefined);
          return fresh;
        } catch {
          return cached || Response.error();
        }
      })(),
    );
    return;
  }

  // Page navigations → network-first with offline fallback
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          if (fresh.ok) {
            const cache = await caches.open(PAGES_CACHE);
            cache.put(req, fresh.clone()).catch(() => undefined);
          }
          return fresh;
        } catch {
          const cache = await caches.open(PAGES_CACHE);
          const cached = await cache.match(req);
          return cached || cache.match(OFFLINE_URL) || Response.error();
        }
      })(),
    );
  }
});

// Web Push — server'dan gelen bildirimleri göster.
self.addEventListener("push", (event) => {
  let payload = { title: "Grammar Hero", body: "Bildirim!", url: "/" };
  try {
    if (event.data) {
      const parsed = event.data.json();
      payload = { ...payload, ...parsed };
    }
  } catch {
    if (event.data) payload.body = event.data.text();
  }
  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      tag: "grammar-hero",
      data: { url: payload.url || "/" },
    }),
  );
});

// Bildirime tıklanınca: açık sekme varsa focus, yoksa yeni aç.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";
  event.waitUntil(
    (async () => {
      const clients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const client of clients) {
        const clientUrl = new URL(client.url);
        if (clientUrl.pathname === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })(),
  );
});
