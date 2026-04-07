import { NavLink } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import s from './Navbar.module.css'

const links = [
  { to: '/', label: 'home', end: true },
  { to: '/projects', label: 'projects' },
  { to: '/docs', label: 'docs' },
  { to: '/about', label: 'about' },
]

export default function Navbar() {
  const { toggle } = useTheme()

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.logo}>
        MK<span className={s.dot}>.</span>dev
      </NavLink>

      <div className={s.links}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <button className={s.themeBtn} onClick={toggle} title="toggle theme">
        ◐
      </button>
    </nav>
  )
}
