import { useState } from 'react'
import { SpeakersPage } from './pages/SpeakersPage'
import { DesignSystemPage } from './pages/DesignSystemPage'

type PageId = 'speakers' | 'design-system'

const PAGES: { id: PageId; label: string }[] = [
  { id: 'speakers', label: 'Speakers' },
  { id: 'design-system', label: 'Design System' },
]

const App = () => {
  const [page, setPage] = useState<PageId>('speakers')

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          {PAGES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="nav__link"
              aria-current={page === id ? 'page' : undefined}
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {page === 'speakers' ? <SpeakersPage /> : <DesignSystemPage />}
    </>
  )
}

export default App
