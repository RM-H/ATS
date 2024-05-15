import React from 'react'
import ReactDOM from 'react-dom/client'

import Mainlayout from './Layouts/Mainlayout.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from "./store/store.js";
import {Persnalinfo} from './pages/index.js'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,



        children:[
            {
                path:'/' ,
                element: <Persnalinfo/>
            }


        ]
    },
]);



import { createTheme , ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    direction: 'rtl',
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>


      <RouterProvider router={router}>
          <ThemeProvider theme={theme}>
              <Mainlayout/>
          </ThemeProvider>

      </RouterProvider>
      </Provider>


  </React.StrictMode>,
)
