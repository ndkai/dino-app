'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "6bbefc5982f8fcfd1ec85b22ecdb1194",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "ccbde91317eb12870a7b153dcf6520e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c41db8eb2be40d73147a3c50070da293",
".git/logs/refs/heads/main": "2a39337fb96ae5545e31b30e347e88b0",
".git/logs/refs/remotes/origin/main": "76cbb72054dda2cb26a49dc43602cf69",
".git/objects/0d/77709d9c6689f7ebef1ec00d5146c0b149cf95": "b37f8214e7b2ee62f889da638c286db2",
".git/objects/10/028a6c3d3fdaf6b5aaeed8ec68caec90c36770": "baeb8012913696cc9f331251db76c4b0",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/1f7af3b14bb51087691df421e8b340745cc763": "158383129e21e747bb4cefc0ea9ff0c6",
".git/objects/25/910b9c9d5b466bad27122b79f4da92b6e3bd87": "78f274f73ec098e763cd5e576c7a0b94",
".git/objects/2b/0689fd84c6fd525797ff23f870a603c3c5a002": "795aad955a3372212b02932b68f2bd92",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/37/f6e34da327fea2224f5b9970ba2927c3960a27": "2895733aed0a42084192c92dc319b740",
".git/objects/38/b3fb81db4f82339a70167f7c68e71832b6684f": "7181028f682bad0e283d77c5b2be3db2",
".git/objects/39/37f8daa3523062fd43cdd7aff1927dc11d230f": "e96c2c4bd6fbc4e4e0b61c61453ab263",
".git/objects/3a/566144e821058c820c33592c8a20c74ce37274": "6c4b95a8e3f5f0aee241f779bef4205f",
".git/objects/3e/d18b53c1a4e3a2393c44d675732ef9c8d98398": "89dda1010c180c62c9411cdfa2a62112",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/5b2c5679fe84839872880b5986f45f5f79ed88": "590915798a1d99ed4bc7624a47c2b9df",
".git/objects/48/f4921ae69abb216969e1e787635ff369dc2b8e": "6b7edbb56648fc6a6261e7642883427a",
".git/objects/4a/1274e170fb1faf3ad91353d0bf5720441fd218": "03705d4900d3445bc05ee4a1ccee8975",
".git/objects/4a/9624b905ddd49aa6e1a69d280f4666fd2e398e": "b37b25a1d2b5cfc83e21bf9f5552494e",
".git/objects/4b/0d7b243a9f463edbcf0e05c33568f3b16805af": "c963c418b7832807e0b8b7db8891d932",
".git/objects/53/de697528227b5e2241a67e2817d5f4dee521b9": "3c7c9affe176020591bea3467d793687",
".git/objects/72/9f414cc9ac66514ebd32039d239dffa3c48ee3": "4b7cdd9dac29ac17e3e84edacecef776",
".git/objects/72/cb07ab1b3dd5677f07dd4976b192efafd9dcf3": "59fc5e66dd01877cc97fbe6c66b3b748",
".git/objects/74/0dc8d0eaa086e7aee4efddced2c5e4f1fef87c": "4b4b07586c9a2b64489e5f1c9c5b582c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/d4f9ce432788d47fdbaec5449ec3f0945261db": "d49cc87db25637f82cea7a0c41d2387e",
".git/objects/80/fe1afc766657c58b791c1478d89b159ca0cd59": "093c79a9377d93c1e6d838c8aef67aa9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/03b602f4296b129bc7cc01eb555b444917af2f": "43d969a97b2417790e83902e8fe1f713",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/3788902e30d31123d95f596c6170d62f20d7f2": "502dabf24c5046ed8ff9d020f4d24a81",
".git/objects/90/82808c9e3d284c0c46db823dafcb5b6486de16": "64735cd789edff7d201ac51a75427c89",
".git/objects/90/83b2dcdbc6ccb79c3c1d37968b70ab1fe5fafc": "005bcfe8e0672c3468a011b186f96ef7",
".git/objects/94/47b801ad624648626ed65b5eca9a0be33e8e94": "4eb9bab74d4bad8a74d4344c40ef5fd4",
".git/objects/96/527033a8317faa3fd851a6b85430eccd944b8b": "196e24f88532ce552055dcba2356e02e",
".git/objects/96/a6bf77a23c2276dac540eed41eb40190e33110": "0e69e5419683015c8cb06a1e81fb7314",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/28231e1ab1b3919580a76ccdd80a358e70b78c": "cb7c77e6f73c6c6d0dee0a0ac006b1e2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/9c43edb4d47e4171b11d2682dd772205223bfd": "a1e0c1384daea760938c0cadd6f10959",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/259a8ef145c0d4936d40ff8d2c2320e704e0be": "1b06a011c378b28db61cd19e50c99a7f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/274ed917aa09eb2c4708e78705fbe652207f3d": "95ebbc97abcefa471be2338b2f1c9da5",
".git/objects/be/339235c434fe29506e78436ebebfcbde35d705": "7677deafacebcaeaf6a8cc6e6af031eb",
".git/objects/c7/238f1d9150b07623e2e50ba072719ca8229c9b": "131a3699b39491a41a80e7591cce5522",
".git/objects/c8/2b1951a4fa9dbbc9f7699706028c760f2e30f6": "ef3b523cf9dc82e8f224b96fdcfec88c",
".git/objects/c9/9f59ecdca78a87211325ee735be19b3bc30c75": "a0efdb527685d7f2b1fb0402b53d2eef",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/3a1dafa7605e9a99f3f18ab7c281b88bcd65cc": "e072dda70d3ae37c215905f8b7af6be2",
".git/objects/cf/040f76b9c58a3442271beca4b00e886b961f7e": "232af1e64cee913eb5be3097c4330e5a",
".git/objects/cf/291dd2ae083c1c0b32bc95b0e227c9c7e8f1c9": "1f26ef8ff843b5fc3810935bdee3e1d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/59c348a173f1dd34ba2a372ab0785117e21d42": "a86e013e420d1cbde433ee17e0d2d5f7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/64e9718b5b08adc6eeebb35e8a64484499961c": "b468f0a13b782bc27ff290d17f5f7ae6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d242b3a5a584a812b300083d6d0e3253da98ef": "b4a9db6f12546ddecdd165f8c8c69d9f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a70730438d4e89240a621cdec06c7ef813a651": "a934aa4f6d2604f296e01517a56de4f8",
".git/objects/fd/2589bbdc52031c59c4963787783218cd199f4d": "cc515d48e60517daa348d478ef65f2c8",
".git/refs/heads/main": "1244c25951c20592efb26960c20dc04d",
".git/refs/remotes/origin/main": "1244c25951c20592efb26960c20dc04d",
"assets/AssetManifest.json": "bcb574420c44eea9bfbb0c5955b3ec34",
"assets/assets/audio/8BitPlatformerLoop.wav": "f6b03e1f08c979b5ea451635495ab4c3",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/assets/audio/readme.md": "125e571fd712037b1e0f4580722c327b",
"assets/assets/fonts/Audiowide/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/images/AngryPig/Walk%2520(36x30).png": "ce06f2c96e2ac0c6cd14e854a870e3e8",
"assets/assets/images/background.png": "c7fb5895390cd6930ad39e69e4722590",
"assets/assets/images/Bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/DinoSprites%2520-%2520tard.png": "b35f4dbe1513c61146da143674613790",
"assets/assets/images/DinoSprites_tard.gif": "96870b29fbf82f779dc63292242011b4",
"assets/assets/images/parallax/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-6.png": "07b9aeda90128cb6e63954f56d0af5d7",
"assets/assets/images/readme.md": "a2b180a6456de6103445226f5e0e4894",
"assets/assets/images/Rino/Run%2520(52x34).png": "ec606d010f9bc60557b58c4ec855524e",
"assets/FontManifest.json": "85a907975f2575481c3906947198e2d7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "06ae1ef631ce65192ecb94a0d9b01c86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "38effed6e0e7ba84ea436232b9748996",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88ee1f566e81acab01f1d1a395891f40",
"/": "88ee1f566e81acab01f1d1a395891f40",
"main.dart.js": "310820edbda0ceb21683216f84537dfd",
"manifest.json": "b841cc7d89867e37678489bccb17f564",
"README.md": "d741bcea8857ab9b9c70f0a8633370b0",
"version.json": "e6d9b3b0ea9ed37692774f61927430cc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
