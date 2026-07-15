import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { providers } from '../../data/dashboardData'

interface ProviderCardsProps {
  active: boolean
}

export default function ProviderCards({ active }: ProviderCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
      {providers.map(({ name, spend, change, positive, usage, color }) => (
        <div key={name} className="stat-card relative isolate liquid-glass-stat-card rounded-[1.75rem] p-8 md:p-9">
          {/* Green ambient glow */}
          <div className="stat-card-glow"></div>
          
          {/* Soft top highlight and inner reflections */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[1.75rem] bg-gradient-to-b from-white/13 via-white/[0.05] to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-5 top-4 h-9 rounded-full bg-white/[0.07] blur-2xl"></div>
          <div className="pointer-events-none absolute -right-6 top-11 h-22 w-22 rounded-full bg-white/[0.05] blur-3xl"></div>
          
          <div className="flex items-center justify-between mb-9 relative z-10">
            <div className="flex items-center gap-3.5">
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ 
                  backgroundColor: color, 
                  boxShadow: `0 0 18px ${color}, 0 0 36px ${color}40` 
                }}
              />
              <span className="text-white text-sm font-medium">{name}</span>
            </div>
            <div
              className={`flex items-center gap-1.5 text-xs ${
                positive ? 'text-emerald-400/85' : 'text-white/45'
              }`}
            >
              {positive ? (
                <ArrowDownRight className="w-3.5 h-3.5" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5" />
              )}
              {change}
            </div>
          </div>

          <div className="text-white text-xl font-semibold tracking-tight mb-4 relative z-10">
            {spend}
          </div>
          <p className="text-white/48 text-xs mb-9 relative z-10">Current monthly spend</p>

          <div className="h-3.5 w-full rounded-full liquid-glass overflow-hidden relative z-10">
            <div
              className="h-full rounded-full"
              style={{
                width: active ? `${usage}%` : '0%',
                backgroundColor: color,
                boxShadow: `0 0 24px ${color}, 0 0 48px ${color}40`,
              }}
            />
          </div>
          <p className="text-white/42 text-[10px] mt-5 relative z-10">{usage}% of total spend</p>
        </div>
      ))}
    </div>
  )
}
