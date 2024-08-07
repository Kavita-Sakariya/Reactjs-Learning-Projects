import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout