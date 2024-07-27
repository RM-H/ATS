import React from 'react'
import ReactDOM from 'react-dom/client'

import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./store/store.js";
import {Persnalinfo, Education, Professional, Department, Login, Questions, Status, Notfound} from './pages/index.js'
import Showresume from './pages/Showresume.jsx'

const router = createBrowserRouter([
    {
        path: "/ats",
        element: <Mainlayout/>,


        children: [
            {
                path: '/ats',
                element: <Department/>
            },
            {
                path: '/ats/personal',
                element: <Persnalinfo/>
            },
            {
                path: '/ats/education',
                element: <Education/>

            }
            ,
            {
                path: '/ats/professional',
                element: <Professional/>

            },
            {
                path: '/ats/evaluation',
                element: <Questions/>

            },
            {
                path: '/ats/status',
                element: <Status/>

            }


        ]
    },
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/show/:token',
        element: <Showresume/>
    },
    {
        path: '/*',
        element: <Notfound/>

    }
]);


import {createTheme, ThemeProvider} from '@mui/material/styles';
import {ToastContainer} from "react-toastify";

const theme = createTheme({
    direction: 'rtl',
});

// if ('serviceWorker' in navigator){
//
//     navigator.serviceWorker.register('sw.js', {scope:'/'}).then(()=>console.log('Service worker has been registered')).catch((e)=>console.log(e));
// }



let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt
    event.preventDefault();
    // Save the event so it can be triggered later
    deferredPrompt = event;
    // Show the install button
    const installButton = document.getElementById('pwa');
    installButton.style.display = 'block';

    installButton.addEventListener('click', async () => {
        // Hide the install button
        installButton.style.display = 'none';
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Reset the deferred prompt variable
        deferredPrompt = null;

        // Optionally, log the outcome for analytics
        console.log(`User response to the install prompt: ${outcome}`);
    });
});

window.addEventListener('appinstalled', (event) => {
    // Log install event for analytics
    console.log('PWA was installed', event);
});





ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>


        <RouterProvider router={router}>
            <ThemeProvider theme={theme}>

                <Mainlayout/>


            </ThemeProvider>

        </RouterProvider>
    </Provider>


    ,
)

