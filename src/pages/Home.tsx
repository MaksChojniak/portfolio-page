import { useNavigate } from 'react-router-dom'
import { home } from '../data/content'
import s from './Home.module.css'

export default function Home() {

  const navigate = useNavigate()
  return (
    <div className={s.hero}>
      <div className={s.tag}>AI Software Engineer</div>
      <h1 className={s.h1}>Maksymilan<br /><em>Chojniak</em></h1>
      <p className={s.sub}>
        Building intelligent systems at the intersection of machine learning and developer tooling.
        Open source contributor.
      </p>
      <div className={s.actions}>
        <button className="btn btn-primary" onClick={() => navigate('/projects')}>view projects</button>
        <button className="btn btn-ghost"   onClick={() => navigate('/docs')}>read docs</button>
      </div>
      <div className={s.stats}>
        {home.stats.map(({ num, sup, label }) => (
          <div key={label} className={s.statItem}>
            <div className={s.statNum}>{num}<span>{sup}</span></div>
            <div className={s.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
