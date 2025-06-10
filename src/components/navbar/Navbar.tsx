import NavbarTitle from "./NavbarTitle";
import NavbarLink from "./NavbarLink";
import NavbarSection from "./NavbarSection";
import './style/Navbar.css'

interface NavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
}
    
const Navbar = ( {isOpen, closeNavbar} : NavbarProps) => {

  const test_section_child = [
    {text:"subsection", link:"/"}, 
    {text:"subsection2", link:"/"}
  ]; 

  return (
    <>
    <nav className={`${isOpen ? 'open' : ''}`}>
      <div>
        <ul>
            <NavbarTitle/> {/*  text="title"   */}
            <NavbarLink closeNavbar={closeNavbar}/> {/* toggleNavbar={toggleNavbar} text="link"  link="/"   */}
            <NavbarLink closeNavbar={closeNavbar} text="error" link="error"/>
            <NavbarLink closeNavbar={closeNavbar} text="error1" link="error1"/>
            <NavbarSection closeNavbar={closeNavbar} childs={test_section_child} /> {/* toggleNavbar={toggleNavbar}  text="section"  childs=[]   */}
            <NavbarLink closeNavbar={closeNavbar} text="Donate" link="donate"/>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar