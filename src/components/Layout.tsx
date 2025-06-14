import { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import './style/Layout.css'

const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
    <Header isOpen={isOpen} toggleNavbar={toggleNavbar}/>
    <div className='container'>
        <Navbar isOpen={isOpen} closeNavbar={closeNavbar}/> 
        <main>
            <div className='outlet-container'>
              <Outlet/>
            </div>
        </main>
    </div>
    </>
  )
}

export default Layout