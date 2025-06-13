import { Link, useLocation } from "react-router";
import './style/NavbarLink.css'

export interface NavbarLinkProps {
  text?: string;
  link?: string;
  closeNavbar: () => void;
}

const NavbarLink = ({ text = "link", link = "/", closeNavbar } : NavbarLinkProps) => {

  const location = useLocation();
  const isClicked = location.pathname === link;

  return (
    <>
    <li><Link to={`${link}`} onClick={closeNavbar}>
        <div className={`navbar-link ${isClicked ? "clicked" : ""}`}>{`${text}`}</div>
    </Link></li>
    </>
  )
}

export default NavbarLink