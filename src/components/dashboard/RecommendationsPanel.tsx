import { recommendations } from '../../data/dashboardData'
import type { Priority } from '../../data/dashboardData'

const badgeClass: Record<Priority, string> = {
  high: 'bg-red-500/25 text-red-200 border border-red-400/30',
  medium: 'bg-amber-500/25 text-amber-200 border border-amber-400/30',
  low: 'bg-emerald-500/25 text-emerald-200 border border-emerald-400/30',
}

const badgeLabel: Record<Priority, string> = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
}

export default function RecommendationsPanel() {
  return (
    <div className="liquid-glass rounded-[1.75rem] p-8 md:p-9 h-full flex flex-col">
      {/* Soft top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[1.75rem] bg-gradient-to-b from-white/12 via-white/[0.04] to-transparent"></div>
      
      <div className="flex items-center justify-between mb-7 relative z-10">
        <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">
          AI Recommendations
        </h3>
        <span className="liquid-glass text-[10px] uppercase tracking-[0.15em] text-[#64cefb] px-3 py-1.5 rounded-full">
          Live
        </span>
      </div>

      <div className="flex flex-col gap-4.5 relative z-10">
        {recommendations.map(({ title, savings, priority, icon: Icon }) => (
          <div
            key={title}
            className="liquid-glass group flex items-center gap-4.5 rounded-[2rem] p-5.5 transition-all duration-350 hover:scale-[1.015] hover:-translate-y-0.5"
          >
            <div className="liquid-glass relative w-13 h-13 rounded-full flex items-center justify-center shrink-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
              <div className="pointer-events-none absolute inset-1.5 rounded-full bg-white/[0.05]"></div>
              <Icon className="relative z-10 w-5.5 h-5.5 text-white" />
            </div>
            <div className="min-w-0 flex-grow">
              <p className="text-white text-sm font-medium truncate">{title}</p>
              <p className="text-emerald-400/88 text-xs mt-1.5">
                Save {savings}
              </p>
            </div>
            <span
              className={`liquid-glass shrink-0 text-[10px] font-semibold px-3.5 py-1.5 rounded-full ${badgeClass[priority]}`}
            >
              {badgeLabel[priority]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
