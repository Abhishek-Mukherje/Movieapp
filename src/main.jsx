import React from "react"
import { createRoot } from 'react-dom/client'
import './index.css'

import axios from 'axios';
import { RouterProvider } from 'react-router-dom'
import router from "./router/Router.jsx"
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";


axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>, 
)
