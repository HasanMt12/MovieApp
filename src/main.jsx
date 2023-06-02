import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as RoutePath from './routes/route'
import App from './App'
import { Home } from './pages/Home'




// Routes 
const route=createBrowserRouter([
{
  path:RoutePath.DASHBOARD,
  element:<App/>,
  children:[
    {
      path:RoutePath.DASHBOARD,
      element:<Home/>,

    }
  ]
}


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={route} /> 
  </React.StrictMode>,
)
