import Footer from './Footer.js'
import Header from './Header.js'
import { Outlet } from 'react-router-dom'
const Layout = (children) => {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default Layout