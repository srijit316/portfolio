// Section title. Deliberately title-only — taglines added noise, not meaning.
export default function SectionHeader({ title }) {
  return (
    <div className="sectionhead">
      <h2 className="sectionhead__title">{title}</h2>
    </div>
  )
}
