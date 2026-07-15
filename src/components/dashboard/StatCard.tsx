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
    <div className="stat-card relative isolate liquid-glass-stat-card rounded-[1.75rem] p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
      {/* Green ambient glow */}
      <div className="stat-card-glow"></div>
      
      {/* Soft top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[1.75rem] bg-gradient-to-b from-white/12 via-white/[0.04] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-5 top-3 h-8 rounded-full bg-white/[0.06] blur-xl"></div>
      <div className="pointer-events-none absolute -right-6 top-10 h-20 w-20 rounded-full bg-white/[0.05] blur-2xl"></div>
      
      <div className="flex items-start justify-between mb-8">
        <span className="text-[11px] tracking-[0.02em] text-white/[0.42] md:text-sm">{label}</span>
        <div className="liquid-glass relative flex h-12 w-12 items-center justify-center rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
          <div className="pointer-events-none absolute inset-1 rounded-full bg-white/[0.04]"></div>
          <Icon className="relative z-10 w-5 h-5 text-white" />
        </div>
      </div>
      <div className="mb-5 text-3xl font-semibold leading-none tracking-[-0.03em] text-white tabular-nums md:text-4xl">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div
        className={`flex items-center gap-1.5 text-[11px] md:text-xs ${
          positive ? 'text-emerald-400/80' : 'text-white/40'
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
