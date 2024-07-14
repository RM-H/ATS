self.addEventListener('install', (event) => {
    console.log('serviceWorker installing ...')
})


self.addEventListener('activate', (event) => {
    console.log('serviceWorker activated ...')
})


self.addEventListener('fetch', (event) => {
    console.log('serviceWorker fetching ...', event)
})