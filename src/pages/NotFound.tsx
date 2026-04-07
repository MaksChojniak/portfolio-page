import { useNavigate, useLocation } from 'react-router-dom'
import s from './NotFound.module.css'

export default function NotFound() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={s.wrap}>
      <div className={s.code}>404</div>
      <h1 className={s.title}>page not found</h1>
      <p className={s.sub}>The route you're looking for doesn't exist or has been moved.</p>
      <div className={s.path}>{location.pathname}</div>
      <div className={s.links}>
        <button className={s.link} onClick={() => navigate('/')}>go home</button>
        <button className={s.link} onClick={() => navigate('/projects')}>browse projects</button>
        <button className={s.link} onClick={() => navigate('/docs')}>read documentation</button>
      </div>
    </div>
  )
}
