import { Link } from 'react-router';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeProvider';
import './style/Header.css';

interface HeaderProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Header = ({ isOpen, toggleNavbar }: HeaderProps) => {

  const { theme, toggleTheme } = useTheme();

  // var logo_image_path = "";
  var logo_image_path = `/assets/images/${theme === 'dark' ? "dark" : "light"}/logo_transparent.png`;
  
  return (
    <>
    <header>
        <button className='navbar-toggle' onClick={toggleNavbar}>
            {isOpen ? <FiX/> : <FiMenu/>}
        </button>
        <Link className='logo' to="/" >
            <img className='logo-image' src={logo_image_path} alt="[]"/>
            {/* <div className='logo-text'>Portfolio</div> */}
        </Link>
        <button className='theme-toggle' onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
        </button>
    </header>
    </>
  )
}

export default Header