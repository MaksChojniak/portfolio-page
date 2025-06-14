import NavbarTitle from "./NavbarTitle";
import NavbarLink from "./NavbarLink";
import NavbarSection from "./NavbarSection";
import './style/Navbar.css'

interface NavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
}
    
const Navbar = ( {isOpen, closeNavbar} : NavbarProps) => {


  const tools_console_section_child = [
    {text:"About", link:"/tools/console/about"}, 
    {text:"Basic Commands", link:"/tools/console/basic-commands"},
    {text:"Own Commands", link:"/tools/console/own-commands"},
  ]; 

  return (
    <>
    <nav className={`${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <ul>
            <NavbarLink closeNavbar={closeNavbar} text="Home" link="/" />
            <NavbarTitle text="Games" />
            <NavbarLink closeNavbar={closeNavbar} text="Blocky Patrol" link="/games/blocky-patrol" />
            <NavbarLink closeNavbar={closeNavbar} text="Iso Racer" link="/games/iso-racer" />
            <NavbarTitle text="Tools" />
            <NavbarSection closeNavbar={closeNavbar} text="Console" childs={tools_console_section_child} />
            <div className="spacer"/>
            <NavbarLink closeNavbar={closeNavbar} text="Donate" link="/donate" />
            <NavbarLink closeNavbar={closeNavbar} text="Contact" link="/contact" />
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar

/*
<NavbarTitle/>
<NavbarLink closeNavbar={closeNavbar}/>
<NavbarLink closeNavbar={closeNavbar} text="error" link="error"/>
<NavbarLink closeNavbar={closeNavbar} text="error1" link="error1"/>
<NavbarSection closeNavbar={closeNavbar} childs={test_section_child} />
<NavbarLink closeNavbar={closeNavbar} text="Donate" link="donate"/>
*/