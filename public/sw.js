// self.addEventListener('install', (event) => {
//     console.log('serviceWorker installing ...')
//     caches.open('static').then((cache) => cache.add('/'));
// })
//
//
// self.addEventListener('activate', (event) => {
//     console.log('serviceWorker activated ...')
// })
//
//
// self.addEventListener('fetch', (event) => {
//     console.log('serviceWorker fetching ...')
//     const req = event.request
//     console.log(req)
//
// })
// self.addEventListener('push', event => {
//     const data = event.data.json();
//     const options = {
//         body: data.body,
//         icon: data.icon,
//         badge: data.badge,
//     };
//
//     event.waitUntil(
//         self.registration.showNotification(data.title, options)
//     );
// })