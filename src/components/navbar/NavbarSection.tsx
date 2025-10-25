import { useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropdown  } from "react-icons/io";
import NavbarLink from './NavbarLink';
import './style/NavbarSection.css'

interface NavbarSectionChildProps {
  text?: string;
  link?: string;
}

interface NavbarSectionProps {
  text?: string;
  childs?: NavbarSectionChildProps[];
  closeNavbar?: () => void;
  children?: React.ReactNode;
}

const NavbarSection = ({ text = "section", childs = [], closeNavbar, children } : NavbarSectionProps) => {

  const [isOpen, setOpenSection] = useState(false);

  const toggleSection = () => setOpenSection(!isOpen);

  const content = childs && closeNavbar ? childs.map((child, index) => (<NavbarLink key={index} closeNavbar={closeNavbar} link={child.link} text={child.text} />)) : children;

  return (
    <>
    <li className="navbar-section-tittle" onClick={toggleSection}>
        {/* {`${text}`} */}
        <span className="navbar-section-text">{text}</span>
        <div className='open-toggle'>
            {isOpen ? <IoMdArrowDropdown/> : <IoMdArrowDropright/>}
        </div>
    </li>
    <ul className={`navbar-dropdown-section${isOpen ? ' open' : ''}`}>
        {content}
    </ul>
    </>
  )
}

export default NavbarSection