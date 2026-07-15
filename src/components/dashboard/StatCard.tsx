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
    <div className="stat-card relative isolate liquid-glass-stat-card rounded-[1.75rem] p-8 md:p-10">
      {/* Green ambient glow */}
      <div className="stat-card-glow"></div>
      
      {/* Soft top highlight and inner reflections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[1.75rem] bg-gradient-to-b from-white/14 via-white/[0.05] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-5 top-4 h-9 rounded-full bg-white/[0.08] blur-2xl"></div>
      <div className="pointer-events-none absolute -right-7 top-12 h-24 w-24 rounded-full bg-white/[0.06] blur-3xl"></div>
      
      <div className="flex items-start justify-between mb-9">
        <span className="text-[11px] tracking-[0.03em] text-white/[0.45] md:text-sm">{label}</span>
        <div className="liquid-glass relative flex h-13 w-13 items-center justify-center rounded-full shadow-[inset_0_1px_3px_rgba(255,255,255,0.18)]">
          <div className="pointer-events-none absolute inset-1.5 rounded-full bg-white/[0.06]"></div>
          <Icon className="relative z-10 w-5.5 h-5.5 text-white" />
        </div>
      </div>
      <div className="mb-6 text-white text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
        {prefix}
        {formatted}
        {suffix}
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
        <span>{change}</span>
      </div>
    </div>
  )
}
