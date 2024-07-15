import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact.jsx'
import Github, { githubInfoLoader } from './Components/Github.jsx'
import User from './Components/User.jsx'


// FIRST METHOD OF ROUTING
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
        loader:githubInfoLoader,
        path:'/github',
        element:<Github/>
      }
    ]
  }
])


//---SECOND METHOD FOR ROUTING----

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
