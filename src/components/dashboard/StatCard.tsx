import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { StatCard as StatCardData } from '../../data/dashboardData'
import { useCountUp } from '../../hooks/useCountUp'

interface StatCardProps {
  stat: StatCardData
  active: boolean
}

export default function StatCard({ stat, active }: StatCardProps) {
  const { label, value, prefix = '', suffix = '', decimals = 0, change, positive, icon: Icon } = stat
  const count = useCountUp(value, active)

  const formatted = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div className="glass-card rounded-2xl p-7 md:p-8">
      <div className="flex items-start justify-between mb-6">
        <span className="text-white/60 text-xs md:text-sm">{label}</span>
        <div className="feature-icon w-10 h-10 rounded-xl flex items-center justify-center">
          <Icon className="w-[18px] h-[18px]" />
        </div>
      </div>
      <div className="text-white text-2xl md:text-3xl font-semibold tracking-tight tabular-nums">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div
        className={`flex items-center gap-1.5 mt-4 text-xs ${
          positive ? 'text-emerald-400/90' : 'text-white/50'
        }`}
      >
        {positive ? (
          <ArrowDownRight className="w-3.5 h-3.5" />
        ) : (
          <ArrowUpRight className="w-3.5 h-3.5" />
        )}
        <span>{change}</span>
      </div>
    </div>
  )
}
