import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}']
            },
            strategies: 'injectManifest',
            srcDir: 'public',
            filename: 'sw.js',

            injectManifest:{
                injectionPoint:undefined
            }


        })
    ],
})
