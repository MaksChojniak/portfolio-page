import { workExperiences } from '../data/content'
import s from './Experience.module.css'

export default function Experience() {
  const roleCount = workExperiences.length

  return (
    <div className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>experience</h2>
        <span className={s.count}>{roleCount} roles</span>
      </div>
      <div className={s.grid}>
        {workExperiences.map(exp => {
          const card = (
            <>
              <div className={s.expHeader}>
                <div className={s.company}>{exp.company}</div>
                <div className={s.position}>{exp.position}</div>
              </div>
              <div className={s.period}>{exp.period}</div>
              {exp.location && <div className={s.location}>{exp.location}</div>}
              <div className={s.desc}>{exp.description}</div>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className={s.techList}>
                  {exp.technologies.map(tech => (
                    <span key={tech} className={s.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </>
          )

          return (
            <div key={exp.id} className={s.card}>
              {card}
            </div>
          )
        })}
      </div>
    </div>
  )
}