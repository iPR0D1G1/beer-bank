if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([]);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

        //saving images here.
        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

        //saving images here.
        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

        //saving fetch requests here to the beer api here.
        const articleHandler = workbox.strategies.networkFirst({
            cacheName: 'beers-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 300,
                })
            ]
        });

        workbox.routing.registerRoute(
            /(.*)api.punkapi(.*)/,
            args => {
                return articleHandler.handle(args);
            });


    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}

self.addEventListener('install', event => {
    console.log('installed already')
})