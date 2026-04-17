import { useNavigate } from 'react-router-dom'
import { projects } from '../data/content'
import s from './Projects.module.css'

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>projects</h2>
        <span className={s.count}>{projects.length} repositories</span>
      </div>
      <div className={s.grid}>
        {projects.map(p => {
          const card = (
            <>
              <div className={s.lang}>{p.lang}</div>
              <div className={s.name}>{p.name}</div>
              <div className={s.desc}>{p.desc}</div>
              <div className={s.meta}>
                {p.stars ?<span className={s.stars}><span className={s.dot} />{p.stars} stars</span> : null}
                {p.license ?<span className={s.license}><span className={s.dot} />license {p.license}</span> : null}
                {p.downloads ? <span className={s.downloads}><span className={s.dot} />{p.downloads} downloads</span> : null}
              </div>
            </>
          )

          return p.url ? (
            <a key={p.id} className={s.card} href={p.url} target="_blank" rel="noreferrer">
              {card}
            </a>
          ) : (
            <button key={p.id} className={s.card} onClick={() => navigate('/docs')}>
              {card}
            </button>
          )
        })}
      </div>
    </div>
  )
}
