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
  
  return (
    <>
    <header>
        <button className='navbar-toggle' onClick={toggleNavbar}>
            {isOpen ? <FiX/> : <FiMenu/>}
        </button>
        <Link className='logo' to="/" >
            <img className='logo-image' src="Logo" alt="[]"/>
            <div className='logo-text'>Logo</div>
        </Link>
        <button className='theme-toggle' onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
        </button>
    </header>
    </>
  )
}

export default Header