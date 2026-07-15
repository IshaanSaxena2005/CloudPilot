import { recommendations } from '../../data/dashboardData'
import type { Priority } from '../../data/dashboardData'

const badgeClass: Record<Priority, string> = {
  high: 'bg-red-500/20 text-red-300 border border-red-400/20',
  medium: 'bg-amber-500/20 text-amber-300 border border-amber-400/20',
  low: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/20',
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
            className="liquid-glass group flex items-center gap-4 rounded-[2rem] p-5 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-grow">
              <p className="text-white text-sm font-medium truncate">{title}</p>
              <p className="text-emerald-400/90 text-xs mt-1">
                Save {savings}
              </p>
            </div>
            <span
              className={`liquid-glass shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-full ${badgeClass[priority]}`}
            >
              {badgeLabel[priority]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
