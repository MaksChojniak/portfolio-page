import './style/NavbarTitle.css'

interface NavbarTitleProps {
  text?: string;
}

const NavbarTitle = ({ text = "title" } : NavbarTitleProps) => {

  return (
    <>
    <li className="navbar-title">{`${text}`}</li>
    </>
  )
}

export default NavbarTitle