import { LinkedInIcon, GitHubIcon, MailIcon, PinIcon, DownloadIcon } from './Icons.jsx'
import { profile } from '../data/resume.js'

// The sticky left column: identity, socials, and the two primary CTAs.
// Presentation only — all copy comes from data/resume.js.
export default function ProfileRail() {
  return (
    <aside className="rail">
      <div className="rail__card">
        <img
          className="rail__photo"
          src={profile.headshot}
          width="640"
          height="800"
          alt={`Portrait of ${profile.name}`}
        />

        <div className="rail__body">
          <h1 className="rail__name">{profile.name}</h1>
          <p className="rail__subtitle">{profile.subtitle}</p>
          <p className="rail__location">
            <PinIcon /> {profile.location}
          </p>
          <p className="rail__availability">
            <span className="rail__dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="rail__socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="iconbtn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="iconbtn"
            >
              <GitHubIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="iconbtn">
              <MailIcon />
            </a>
          </div>

          <div className="rail__ctas">
            <a className="btn btn--primary" href={profile.resume} download>
              <DownloadIcon /> Resume
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <MailIcon width="15" height="15" /> Email
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
