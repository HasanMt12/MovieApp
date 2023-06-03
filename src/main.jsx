import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as RoutePath from './routes/route'
import App from './App'
import { Home } from './pages/Home-pages/Home'
import New from './pages/New'
import Upcoming from './pages/Upcoming'
import Recommended from './pages/Recommended'
import Login from '../src/components/Login/Login'
import RegistrationForm from './pages/RegistrationForm'



// Routes 
const route=createBrowserRouter([
{
  path:RoutePath.DASHBOARD,
  element:<App/>,
  children:[
    {
      path:RoutePath.DASHBOARD,
      element:<Home/>,
    },
    {
      path:RoutePath.NEW,
      element:<New/>,
    },
    {
      path:RoutePath.UPCOMING,
      element:<Upcoming/>,
    },
    {
      path:RoutePath.RECOMMENDED,
      element:<Recommended/>,
    },
    {
      path:RoutePath.LOGIN,
      element:<Login/>,
    
    },
    {
      path:RoutePath.REG,
      element:<RegistrationForm/>
    }

  ]
}


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={route} /> 
  </React.StrictMode>,
)
