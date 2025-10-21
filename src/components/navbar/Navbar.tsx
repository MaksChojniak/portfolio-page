import NavbarTitle from "./NavbarTitle";
import NavbarLink from "./NavbarLink";
import NavbarSection from "./NavbarSection";
import './style/Navbar.css'

interface NavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
}
    
const Navbar = ( {isOpen, closeNavbar} : NavbarProps) => {

  const projects_unity_inventorysystem_childs = [
    {text:"About", link:"/projects/unity/inventory-system/about"}, 
    {text:"How To Use", link:"/projects/unity/inventory-system/how-to-use"},
  ]; 

  const projects_dotnet_inventorysystem_childs = [
    {text:"About", link:"/projects/dotnet-c#/travel-agency/about"}, 
    {text:"How To Use", link:"/projects/dotnet-c#/travel-agency/how-to-use"},
  ]; 

  const projects_cpp_inventorysystem_childs = [
    {text:"About", link:"/projects/c++/console-application/about"}, 
    {text:"How To Use", link:"/projects/c++/console-application/how-to-use"},
  ]; 



  return (
    <>
    <nav className={`${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <ul>
            <NavbarLink closeNavbar={closeNavbar} text="Home" link="/" />
            <NavbarTitle text="Games" />
            <NavbarLink closeNavbar={closeNavbar} text="Iso Racer" link="/games/iso-racer" />
            <NavbarLink closeNavbar={closeNavbar} text="Blocky Patrol" link="/games/blocky-patrol" />
            <NavbarTitle text="Projects" />
            <NavbarSection text="Unity" >
              <NavbarSection closeNavbar={closeNavbar} text="Inventory System" childs={projects_unity_inventorysystem_childs} />
            </NavbarSection>
            <NavbarSection text=".NET C#" >
              <NavbarSection closeNavbar={closeNavbar} text="Travel Agency App" childs={projects_dotnet_inventorysystem_childs} />
            </NavbarSection>
            <NavbarSection text="C++" >
              <NavbarSection closeNavbar={closeNavbar} text="Console App" childs={projects_cpp_inventorysystem_childs} />
            </NavbarSection>
            <NavbarTitle text="Portfolio" />
            <NavbarLink closeNavbar={closeNavbar} text="Resume" link="/resume" />
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