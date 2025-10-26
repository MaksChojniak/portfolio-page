import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import './style/Layout.css'

const ScrollTo = ( {pos, className } : {pos: number, className: string} ) => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      const outletContainer = document.querySelector("."+className);
      if (outletContainer) {
        outletContainer.scrollTo({ top: pos, behavior: "auto" });
      } 
      else {
        window.scrollTo(pos, pos);
      }
    });
  }, [pathname]);

  return (<></>)
}

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
            <ScrollTo pos={0} className='outlet-container'/>
            <div className='outlet-container'>
              <Outlet/>
            </div>
        </main>
    </div>
    </>
  )
}

export default Layout