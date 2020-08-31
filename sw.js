const CACHE_NAME = 'tngDigital_v1';

//install serviceworker
self.addEventListener('instal', (e) => {
	console.log('serviceWorker successfully installed');
});

//activate service worer
self.addEventListener('activate', (e) => {
	//to remove previous version of the cache if avaiable
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== CACHE_NAME) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

//fetch

self.addEventListener('fetch', (e) => {
	e.respondWith(
		fetch(e.request)
			.then((res) => {
				// IMPORTANT: Clone the response. A response is a stream
				// and because we want the browser to consume the response
				// as well as the cache consuming the response, we need
				// to clone it so we have two streams
				const responseClone = res.clone();

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(e.request, responseClone);
				});
				return res;
			})
			.catch((err) => caches.match(e.request).then((res) => res))
	);
});
