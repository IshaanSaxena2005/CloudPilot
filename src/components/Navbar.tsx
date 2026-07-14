import { Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', active: true },
  { label: 'Features', active: false },
  { label: 'Dashboard', active: false },
  { label: 'Pricing', active: false },
  { label: 'About', active: false },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 md:py-5 bg-black/10 backdrop-blur-2xl border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white font-medium text-lg tracking-tight">
          <div className="relative w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center shadow-[0_0_15px_rgba(100,206,251,0.5)]">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <span className="font-semibold text-white">CloudPilot</span>
        </div>

        {/* Navigation pill */}
        <div className="hidden lg:flex items-center gap-8 px-6 py-2 rounded-full border border-gray-700/80 bg-black/40 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`text-sm hover:text-white transition-colors ${
                link.active ? 'text-white font-medium' : 'text-white/80'
              }`}
              href="#"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="lg:hidden text-white/80 hover:text-white transition-colors"
          id="mobile-menu-btn"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>
    </nav>
  )
}
