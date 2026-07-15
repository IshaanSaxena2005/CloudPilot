import { navItems } from '../../data/dashboardData'

export default function DashboardSidebar() {
  return (
    <aside className="h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 text-white font-medium text-lg tracking-tight px-1 mb-12">
        <div className="relative w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center shadow-[0_0_20px_rgba(100,206,251,0.6)]">
          <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
        </div>
        <span className="font-semibold text-white">CloudPilot</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={`sidebar-item flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
              active ? 'is-active text-white' : 'text-white/70'
            }`}
          >
            <Icon className="w-[18px] h-[18px] shrink-0" />
            <span className="tracking-tight">{label}</span>
          </a>
        ))}
      </nav>

      {/* Upgrade callout */}
      <div className="mt-auto pt-10">
        <div className="feature-icon rounded-2xl p-5">
          <p className="text-white text-sm font-semibold mb-1.5">Optimize more</p>
          <p className="text-white/70 text-xs leading-relaxed">
            Unlock deeper AI savings across every provider.
          </p>
        </div>
      </div>
    </aside>
  )
}
