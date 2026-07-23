import './MedicationCard.css'

export default function MedicationCard({ med }) {
  const urgent = med.daysLeft <= 7

  return (
    <div className="med-card card">
      <div className={`med-card-badge badge-${med.color}`}>
        {med.form === 'softgel' ? '◉' : '●'}
      </div>

      <div className="med-card-body">
        <h3>{med.name}</h3>
        <p className="med-card-meta">{med.dose} · {med.condition}</p>
        <p className="med-card-schedule mono-stat">
          {med.schedule.join(' · ')}
        </p>
      </div>

      <div className={'med-card-refill' + (urgent ? ' urgent' : '')}>
        <span className="eyebrow">Refill in</span>
        <span className="med-card-days mono-stat">{med.daysLeft}d</span>
      </div>
    </div>
  )
}
