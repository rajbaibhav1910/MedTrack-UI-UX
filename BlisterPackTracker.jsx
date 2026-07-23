import { Fragment } from 'react'
import { medications, weekAdherence } from '../data/mockData'
import './BlisterPackTracker.css'

const days = Object.keys(weekAdherence)

export default function BlisterPackTracker() {
  return (
    <div className="blister card">
      <div className="blister-head">
        <div>
          <p className="eyebrow">This week</p>
          <h3>Blister pack</h3>
        </div>
        <p className="blister-hint">Tap a pocket to mark a dose taken</p>
      </div>

      <div className="blister-grid" style={{ '--rows': medications.length }}>
        <div className="blister-corner" />
        {days.map((day) => (
          <div key={day} className="blister-day-label">{day}</div>
        ))}

        {medications.map((med) => (
          <Fragment key={med.id}>
            <div className="blister-row-label">
              <span className={`dot dot-${med.color}`} />
              {med.name}
            </div>
            {days.map((day) => {
              const status = weekAdherence[day][med.id]
              return (
                <button
                  key={med.id + day}
                  className={
                    'blister-pocket' +
                    (status === true ? ' popped' : '') +
                    (status === false ? ' missed' : '') +
                    (status === null ? ' upcoming' : '')
                  }
                  aria-label={`${med.name} on ${day}: ${
                    status === true ? 'taken' : status === false ? 'missed' : 'upcoming'
                  }`}
                >
                  <span className="pocket-pill" />
                </button>
              )
            })}
          </Fragment>
        ))}
      </div>

      <div className="blister-legend">
        <span><i className="legend-dot popped" /> Taken</span>
        <span><i className="legend-dot missed" /> Missed</span>
        <span><i className="legend-dot upcoming" /> Upcoming</span>
      </div>
    </div>
  )
}
