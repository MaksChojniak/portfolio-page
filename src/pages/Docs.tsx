import { useState } from 'react'
import { docs } from '../data/content'
import s from './Docs.module.css'

const allDocs = docs.docSections.flatMap(sec => sec.items)
const hasDocs = allDocs.length > 0

export default function Docs() {
  const [activeId, setActiveId] = useState(hasDocs ? allDocs[0]?.id ?? 'empty' : 'empty')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const active = hasDocs
    ? (allDocs.find(d => d.id === activeId) ?? allDocs[0])
    : {
        id: 'empty',
        label: 'empty',
        title: 'empty',
        breadcrumb: 'empty',
        updated: 'N/A',
        content: '<h2>docs is empty</h2><p>There are no docs yet.</p>',
      }

  const handleItemClick = (id: string) => {
    setActiveId(id)
    setSidebarOpen(false)
  }

  return (
    <div className={s.layout}>
      {sidebarOpen && (
        <div className={s.overlay} onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`${s.sidebar} ${sidebarOpen ? s.sidebarOpen : ''}`}>
        {!hasDocs ? (
          <div className={s.group}>
            <div className={s.groupLabel}>docs</div>
            <div className={s.item}>empty</div>
          </div>
        ) : (
          docs.docSections.map(sec => (
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
          ))
        )}
      </aside>

      <main className={s.content}>
        {hasDocs && (
          <button
            className={`${s.menuBtn} ${sidebarOpen ? s.menuBtnOpen : ''}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className={s.menuIcon} />
          </button>
        )}
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
