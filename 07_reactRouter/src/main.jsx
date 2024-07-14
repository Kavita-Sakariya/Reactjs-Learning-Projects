import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'
import User from './Components/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: '',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/user/:userid',
        element:<User/>
      },
      {
        path:'/github',
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
