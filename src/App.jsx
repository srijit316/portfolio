import { useState } from 'react'
import Nav from './components/Nav.jsx'
import ProfileRail from './components/ProfileRail.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import Reveal from './components/Reveal.jsx'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  TrophyIcon,
  CoffeeIcon,
  DiscIcon,
  ChefHatIcon,
} from './components/Icons.jsx'
import {
  profile,
  quote,
  projects,
  experience,
  skills,
  interests,
  education,
} from './data/resume.js'

const interestIcons = {
  trophy: TrophyIcon,
  coffee: CoffeeIcon,
  disc: DiscIcon,
  chefhat: ChefHatIcon,
}

// Company logo in a tile, with the initials as a fallback. onError covers a
// missing or broken file, so an entry without a logo still renders correctly.
function Mark({ logo, initials }) {
  const [failed, setFailed] = useState(false)
  const showLogo = logo && !failed

  return (
    <span className={`mark${showLogo ? ' mark--logo' : ''}`} aria-hidden="true">
      {showLogo ? (
        <img className="mark__img" src={logo} alt="" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        initials
      )}
    </span>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <>
      <Nav />

      <div className="shell">
        <ProfileRail />

        <main className="content">
          {/* ---------- Quote ---------- */}
          <section id="top" className="quote">
            <blockquote className="quote__text">{quote.text}</blockquote>
            <p className="quote__author">— {quote.author}</p>
          </section>

          {/* ---------- Education ---------- */}
          <Reveal as="section" id="education" className="section">
            <SectionHeader title="Education" />
            <div className="row row--flush">
              <Mark logo={education.logo} initials={education.mark} />
              <div className="row__body">
                <div className="row__head">
                  <h3>{education.school}</h3>
                  <span className="row__date">{education.period}</span>
                </div>
                <p className="row__sub">{education.degree}</p>
                <p className="row__meta">{education.gpa}</p>
              </div>
            </div>
          </Reveal>

          {/* ---------- Experience ---------- */}
          <Reveal as="section" id="experience" className="section section--band">
            <SectionHeader title="Work Experience" />
            {experience.map((job) => (
              <article className="row row--card" key={job.org + job.role}>
                <Mark logo={job.logo} initials={job.mark} />
                <div className="row__body">
                  <div className="row__head">
                    <h3>{job.org}</h3>
                    <span className="row__date">{job.period}</span>
                  </div>
                  <p className="row__sub">
                    {job.role} <span className="sep">·</span> {job.location}
                  </p>
                  <ul className="bullets">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Tags items={job.tags} />
                </div>
              </article>
            ))}
          </Reveal>

          {/* ---------- Projects ---------- */}
          <Reveal as="section" id="projects" className="section">
            <SectionHeader title="Projects" />
            <div className="cards">
              {projects.map((p) => (
                <article className="card" key={p.name}>
                  <p className="card__category">{p.category}</p>
                  <h3 className="card__title">{p.name}</h3>
                  <p className="card__blurb">{p.blurb}</p>
                  <Tags items={p.tags} />
                  <div className="card__links">
                    {p.live ? (
                      <a className="card__link" href={p.live} target="_blank" rel="noreferrer">
                        Live site <ArrowUpRightIcon />
                      </a>
                    ) : null}
                    {p.repo ? (
                      <a className="card__link" href={p.repo} target="_blank" rel="noreferrer">
                        <GitHubIcon width="14" height="14" /> Source
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          {/* ---------- Skills ---------- */}
          <Reveal as="section" id="skills" className="section section--band">
            <SectionHeader title="Skills" />
            {skills.map((s) => (
              <div className="skills__row" key={s.group}>
                <h3 className="skills__label">{s.group}</h3>
                <Tags items={s.items} />
              </div>
            ))}
          </Reveal>

          {/* ---------- Interests ---------- */}
          <Reveal as="section" id="interests" className="section">
            <SectionHeader title="Interests" />
            <ul className="interests">
              {interests.map((i) => {
                const Icon = interestIcons[i.icon]
                return (
                  <li className="interests__item" key={i.name}>
                    {Icon ? <Icon /> : null}
                    {i.name}
                  </li>
                )
              })}
            </ul>
          </Reveal>

        </main>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  )
}
