import { about } from '../data/content'
import s from './About.module.css'

export default function About() {
  return (
    <div className={s.section}>
      <h2 className={s.title}>about</h2>
      <p className={s.bio}>{about.bio}</p>
      <div className={s.grid}>

        <div className={s.card}>
          <div className={s.cardTitle}>stack</div>
          <div className={s.tags}>{about.stack.map(t => <span key={t} className={s.tag}>{t}</span>)}</div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>focus areas</div>
          <div className={s.tags}>{about.focus.map(t => <span key={t} className={s.tag}>{t}</span>)}</div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>education</div>
          <div className={s.eduList}>
            {about.education.map((e, i) => (
              <div key={i} className={s.eduItem}>
                <div className={s.degree}>{e.degree}</div>
                <a
                  href={e.transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.school}
                >
                  {e.school}
                </a>
                <div className={s.years}>{e.years}{e.note ? ` · ${e.note}` : ''}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>certifications</div>
          <div className={s.certList}>
            {about.certifications.map(c => (
              <a
                key={c.badge}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className={s.certItem}
              >
                <div className={s.certBadge}>{c.badge}</div>
                <div>
                  <div className={s.certName}>{c.name}</div>
                  <div className={s.certIssuer}>{c.issuer}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>timeline</div>
          <div className={s.timeline}>
            {about.timeline.map(t => (
              <div key={t.year} className={s.tlItem}>
                <div className={s.tlDot} />
                <div className={s.tlYear}>{t.year}</div>
                <div className={s.tlText}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>contact</div>
          <div className={s.contactList}>
            {about.contact.map(c => (
              <div key={c.label} className={s.contactItem}>
                <span className={s.contactLabel}>{c.label}</span>
                <span>{c.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
