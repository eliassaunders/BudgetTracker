const APP_PREFIX = 'BudgetTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./public/index.html",
    "./public/css/style.css",
    // "./public/icons/icon-72x72.css",
    // "./public/icons/icon-96x96.css",
    // "./public/icons/icon-128x128.css",
    // "./public/icons/icon-144x144.css",
    // "./public/icons/icon-152x152.css",
    // "./public/icons/icon-192x192.css",
    // "./public/icons/icon-384x384.css",
    // "./public/icons/icon-512x512.css",
    "./public/js/index.js"
  ];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('installing cache : ' + CACHE_NAME)
          return cache.addAll(FILES_TO_CACHE)
        })
      )
})