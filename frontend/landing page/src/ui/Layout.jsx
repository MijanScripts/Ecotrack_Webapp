import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {

    const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FAQs", path: "/faq" },
  ];


  return (
    <div>
      <Navbar links={navItems} />
      <Footer links={navItems} />
    </div>
  )
}

export default Layout
