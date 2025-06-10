import { Link } from "react-router";
import './style/NavbarLink.css'

export interface NavbarLinkProps {
  text?: string;
  link?: string;
  closeNavbar: () => void;
}

const NavbarLink = ({ text = "link", link = "/", closeNavbar } : NavbarLinkProps) => {

  return (
    <>
    <li><Link to={`${link}`} onClick={closeNavbar}>
        <div className="navbar-link">{`${text}`}</div>
    </Link></li>
    </>
  )
}

export default NavbarLink