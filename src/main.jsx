import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as RoutePath from './routes/route'
import App from './App'
import { Home } from './pages/Home'
import New from './pages/New'
import Recommended from './pages/Recommended'
import Upcoming from './pages/Upcoming'
import Login from './components/Login/Login'
import Error from './pages/Error'




// Routes 
const route=createBrowserRouter([
{
  path:RoutePath.DASHBOARD,
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:RoutePath.DASHBOARD,
      element:<Home/>,

    },
    {
      path:RoutePath.NEW,
      element: <New/>
    },
    {
      path:RoutePath.RECOMMENDED,
      element:<Recommended/>
    },
    {
      path:RoutePath.UPCOMING,
      element:<Upcoming/>,
    },
    {
      path:RoutePath.LOGIN,
      element:<Login/>
    }
  ]
}


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={route} /> 
  </React.StrictMode>,
)
