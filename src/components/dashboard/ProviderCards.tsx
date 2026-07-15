import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { providers } from '../../data/dashboardData'

interface ProviderCardsProps {
  active: boolean
}

export default function ProviderCards({ active }: ProviderCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
      {providers.map(({ name, spend, change, positive, usage, color }) => (
        <div key={name} className="liquid-glass rounded-2xl p-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
              />
              <span className="text-white text-sm font-medium">{name}</span>
            </div>
            <div
              className={`flex items-center gap-1.5 text-xs ${
                positive ? 'text-emerald-400/90' : 'text-white/50'
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

          <div className="text-white text-xl font-semibold tracking-tight mb-2">
            {spend}
          </div>
          <p className="text-white/50 text-xs mb-6">Current monthly spend</p>

          <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
            <div
              className="progress-fill h-full rounded-full"
              style={{
                width: active ? `${usage}%` : '0%',
                backgroundColor: color,
                boxShadow: `0 0 12px ${color}`,
              }}
            />
          </div>
          <p className="text-white/40 text-[10px] mt-2">{usage}% of total spend</p>
        </div>
      ))}
    </div>
  )
}
