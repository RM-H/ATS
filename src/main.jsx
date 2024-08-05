import React from 'react'
import ReactDOM from 'react-dom/client'

import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./store/store.js";
import {Persnalinfo, Education, Professional, Department, Login, Questions, Status, Notfound} from './pages/index.js'
import Showresume from './pages/Showresume.jsx'
import { getMessaging } from "firebase/messaging";



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



const theme = createTheme({
    direction: 'rtl',
});


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
        const {outcome} = await deferredPrompt.userChoice;
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

import {initializeApp} from "firebase/app";
import 'firebase/messaging';
const firebaseConfig = {
    apiKey: "AIzaSyAP1-swWCNErotMXgkcn_QJ2zdDg_rHbQs",
    authDomain: "testing-notifications-a2301.firebaseapp.com",
    projectId: "testing-notifications-a2301",
    storageBucket: "testing-notifications-a2301.appspot.com",
    messagingSenderId: "705936168398",
    appId: "1:705936168398:web:63151dbc845c7341e8079f"
};
const app =  initializeApp(firebaseConfig)
const messaging = getMessaging(app);

import {  getToken ,onMessage} from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

getToken(messaging, { vapidKey: 'BP4M-GpYRuamyjRa2fB-YBu-33I-7baG8ijF7fwYAC3mj4IENSZBOJIhIm7Ci-jXP9ojKCRJIFACZyP0ICt4zwo' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken)
        // ...
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});





