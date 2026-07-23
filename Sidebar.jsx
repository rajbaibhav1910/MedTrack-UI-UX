import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const links = [
  { to: '/', label: 'Dashboard', icon: '◈' },
  { to: '/medications', label: 'Medications', icon: '⬡' },
  { to: '/history', label: 'History', icon: '≡' },
  { to: '/settings', label: 'Settings', icon: '◍' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-mark">Rx</span>
        <span className="sidebar-name">MedTrack</span>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
          >
            <span className="sidebar-icon">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="eyebrow">Next dose</p>
        <p className="sidebar-next">Atorvastatin · 9:00 PM</p>
      </div>
    </aside>
  )
}
