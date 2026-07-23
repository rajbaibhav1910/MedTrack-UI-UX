import { user } from '../data/mockData'
import './Header.css'

export default function Header({ title, subtitle }) {
  return (
    <div className="page-header">
      <div>
        <p className="eyebrow">Welcome back, {user.name.split(' ')[0]}</p>
        <h1>{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>

      <div className="header-stat">
        <span className="header-stat-value mono-stat">{user.adherenceRate}%</span>
        <span className="header-stat-label">30-day adherence</span>
      </div>
    </div>
  )
}
