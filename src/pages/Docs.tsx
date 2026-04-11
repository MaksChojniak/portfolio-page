import { useState } from 'react'
import { docs } from '../data/content'
import s from './Docs.module.css'

const allDocs = docs.docSections.flatMap(sec => sec.items)

export default function Docs() {
  const [activeId, setActiveId] = useState('intro')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const active = allDocs.find(d => d.id === activeId) ?? docs.fallback.items[0]

  const handleItemClick = (id: string) => {
    setActiveId(id)
    setSidebarOpen(false)
  }

  return (
    <div className={s.layout}>
      {sidebarOpen && (
        <div className={s.overlay} onClick={() => setSidebarOpen(false)} />
      )}
      <button
        className={`${s.menuBtn} ${sidebarOpen ? s.menuBtnOpen : ''}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <span className={s.menuIcon} />
      </button>

      <aside className={`${s.sidebar} ${sidebarOpen ? s.sidebarOpen : ''}`}>
        {docs.docSections.map(sec => (
          <div key={sec.group} className={s.group}>
            <div className={s.groupLabel}>{sec.group}</div>
            {sec.items.map(item => (
              <button
                key={item.id}
                className={`${s.item} ${activeId === item.id ? s.active : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main className={s.content}>
        <div className={s.breadcrumb}>
          docs / <span>{active.breadcrumb}</span> / {active.title}
        </div>
        <h1 className={s.docTitle}>{active.title}</h1>
        <div className={s.docMeta}>last updated — {active.updated}</div>
        <div className={s.docBody} dangerouslySetInnerHTML={{ __html: active.content }} />
      </main>
    </div>
  )
}
