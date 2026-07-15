import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import DashboardPage from './pages/Dashboard'
import VaultShieldHero from '../VaultShield/VaultShieldHero'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/vaultshield" element={<VaultShieldHero />} />
      </Routes>
    </Router>
  )
}

export default App
