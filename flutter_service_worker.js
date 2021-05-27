'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "819678a8f599b22120bba8ce8a62b1c4",
".git/config": "d375bad26cff9d6d1c946ff33185b143",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "acc34717fba57a248e46532fbb19ec49",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7a59b149708becd498e0adf4d63eb69",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68c2f408779eb231303e6887ac558b60",
".git/logs/refs/heads/main": "de7ac944d54e7b8255ef7b34ac289730",
".git/logs/refs/remotes/origin/main": "616c6ae5b83a5d8b3ddaad56dba6db9f",
".git/objects/11/7a2b959bb93c8fb0840b58f158fd8f8032aed6": "9a309ebee294ae18dcd9e6dca4abea6a",
".git/objects/1b/f619a035d15808a950d7239d2545d1fa460184": "772e8214442ac3e7b9f8c83b96f09a3b",
".git/objects/1d/103eb94314e7506809029bc2cebbc9d347755f": "20b83cb9009060b60d9abead53418829",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3a/366958e59840efcbf308a32e80946eb4fcac70": "1094efd8d42ab00354057705251afe65",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a3cb2d0fbdde513dd69e316f7f3de525d23431": "c10c0332f4b8374368c5bcdeb0a982d9",
".git/objects/59/9cb3f51425e6bd1e2a716aafe59fd9aac172c6": "a5dae13913b16eee3c87de40a35603f4",
".git/objects/6c/188b6d6d25b784c380503c2d753a5a9a2f702d": "ded48e880a96b28c1a84a792d1b89974",
".git/objects/6f/67609e80a43cfdca7688ca919d66c9b1296342": "4faee6e44bb3d39171617caedc859545",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/83/659d677d977a1a35a3f02f88ebd45824cabb71": "8a6fedf7cdad2243e0f8b0d1375557d3",
".git/objects/88/288844ff8f1c77f9b4294bdc48ba351fc05621": "09297738f8e19fd4fed0eb714fd8a54d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/1ee30ada684330817fa7fe51d66ba894cdee7b": "7b996423d2fafb98d266679d4031e276",
".git/objects/8c/324c998aeddfc2ab42d46ff9f0996fb9593524": "327722883337bcc9af842d839a02b523",
".git/objects/8d/30b5a6eeba3c7c059a6dab74514f46c0c6bb4a": "c3b0fd3b4187a9eff7fc035b716a0413",
".git/objects/98/31ca75ba0f005db41b3a672db6246e81984726": "2d6d93b91646f27df369e3e0d9c66de2",
".git/objects/9b/d7080ab8f1247027ee0b04fdc2b96ae0b150e5": "1bafaffa9dd18726d5533c6d7c0adb97",
".git/objects/9f/28e894de00d1874e674010d2ad03ec0702a249": "b233675ffb3537174088865593a64a73",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/b3ae0673e43ecb6ae6c3be8f222213a56d28a8": "76ccb6e13494b73ea33001724dfd8129",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/e4fbc04a07cd05859a2514d29ce0b5519e50b9": "58c88e523a21a36d21c94711a06250e8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/1fdced7d49fae2cc098a5991bc9fa235b9a82c": "ab251b5a87a765a2d748d283540b51f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/c2f28ad25cea4100cefdfb75b01314d8f51569": "9264256248bb0fe1490542b181e2bbbd",
".git/objects/c1/632b36c2a06aca66f4d49afa7ada467d74e164": "f73805c310f8826b79ebcffee0c8d492",
".git/objects/c2/463f842df5879cab290656b47f2c80c1f7f91e": "967d31d7e916e22388809d57c874cce5",
".git/objects/c6/b4ee6a216e51b3c716f89a18184f1bf187bfe3": "5e3bc97651a66e24db63c091823f527d",
".git/objects/cf/747f0e8ca068c56c71a91e6003311c1d86865f": "3cceb16343a69989cce368a8c2e370f7",
".git/objects/db/324666a4009dc5551a1be14073467f2484de07": "7885cd32e371f60c32ccce51951a87f7",
".git/objects/df/89b35fbefce75498f5e8a00ecb821a8dddb62d": "d87d82e734890bf6ccd67738b1531a6f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/36a22d17a906b22c553a86cb6a434cfbfa71d2": "68a6715d1b0a1793f61a94f0adaa4c45",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/fc48d98ceecb6dbe0d9ebed72474356917d650": "47552a24e74502fcf72ea9f934475bb6",
".git/ORIG_HEAD": "064b54f6f3d0fefb74ae604a78e4c939",
".git/refs/heads/main": "dc0255a11cd6f9fcc4e70ad5ef06559b",
".git/refs/remotes/origin/main": "dc0255a11cd6f9fcc4e70ad5ef06559b",
"assets/AssetManifest.json": "b9bff1c1612fff9c8d7f3170ef20e615",
"assets/assets/icons/Angledown.svg": "24e10127668681c0e4e450129c221002",
"assets/assets/icons/Angleright.svg": "12a8fca11166d4b938ecb487ed675861",
"assets/assets/icons/gear.svg": "ec058fd43b881d4ce2af653f25681947",
"assets/assets/icons/Inbox.svg": "55037f7401b91fe121e7c0da38cfbc45",
"assets/assets/icons/mystic.svg": "f115ec56521f63d6a958bace8a264e4d",
"assets/assets/icons/player.svg": "6f169ad854361f2ba3fa05e5e53d7c61",
"assets/assets/icons/pokeball.svg": "6058de967fa87c0ef32dbaa253eb2274",
"assets/assets/icons/pokeballs.svg": "b18f6f3bfd7e9921c88edc868ed3a75f",
"assets/assets/images/pokeball8bit.png": "7986ca8fe5663fd7c5f3bd69ab577a17",
"assets/assets/images/pokecenter.png": "d596856e166cbb6270895ac9115ae6fe",
"assets/assets/images/pokeloading.gif": "ef724f2c2cf02a434b8464f17fe40ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "2f6492f91b9c2a72d5fcda29bcea4624",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "a982b70332fbb1caf13deb7b8d3ebbd2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "98390a7628f12d40acefef953d3accbf",
"/": "98390a7628f12d40acefef953d3accbf",
"main.dart.js": "dab8c591d4296c9bee2d60399c3d6927",
"manifest.json": "dcbc6b65b9f00dc9bf1caa1adeb06a26",
"version.json": "5b2a6d45da962bb621e2d713bf6e5fa5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
