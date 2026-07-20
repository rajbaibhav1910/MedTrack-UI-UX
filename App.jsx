import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Medications from './pages/Medications'
import AddMedication from './pages/AddMedication'
import History from './pages/History'
import Settings from './pages/Settings'

import './pages/Dashboard.css'
import './pages/Medications.css'
import './pages/AddMedication.css'
import './pages/History.css'
import './pages/Settings.css'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-column">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medications" element={<Medications />} />
          <Route path="/medications/add" element={<AddMedication />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
}
