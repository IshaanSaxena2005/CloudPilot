import { recommendations } from '../../data/dashboardData'
import type { Priority } from '../../data/dashboardData'

const badgeClass: Record<Priority, string> = {
  high: 'badge-high',
  medium: 'badge-medium',
  low: 'badge-low',
}

const badgeLabel: Record<Priority, string> = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
}

export default function RecommendationsPanel() {
  return (
    <div className="liquid-glass rounded-2xl p-7 md:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">
          AI Recommendations
        </h3>
        <span className="text-[10px] uppercase tracking-widest text-[#64cefb]">
          Live
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {recommendations.map(({ title, savings, priority, icon: Icon }) => (
          <div
            key={title}
            className="group flex items-center gap-3 rounded-2xl p-4 border border-white/5 bg-white/[0.02] hover:border-[#64cefb]/35 hover:bg-[#64cefb]/[0.08] transition-all duration-300"
          >
            <div className="feature-icon w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <Icon className="w-[18px] h-[18px]" />
            </div>
            <div className="min-w-0 flex-grow">
              <p className="text-white text-sm font-medium truncate">{title}</p>
              <p className="text-emerald-400/90 text-xs mt-1">
                Save {savings}
              </p>
            </div>
            <span
              className={`shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-full ${badgeClass[priority]}`}
            >
              {badgeLabel[priority]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
