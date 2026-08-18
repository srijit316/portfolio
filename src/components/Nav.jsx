import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { profile, sections } from '../data/resume.js'

// Tracks which section is currently in view. Uses the same IntersectionObserver
// API as Reveal.jsx, so no new dependency. The top rootMargin biases toward the
// section sitting under the sticky nav rather than the one merely on screen.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))

    // The last section is short enough that the page bottoms out before it
    // reaches the observer's band, so it would never light up. Pin it on scroll-end.
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (atBottom) setActive(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}

const ids = sections.map((s) => s.id)

export default function Nav() {
  const active = useActiveSection(ids)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true">
            SB
          </span>
          <span className="nav__brandname">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="nav__link"
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle className="theme-toggle--nav" />
        </div>
      </div>
    </header>
  )
}
