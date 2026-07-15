import ShinyText from './ShinyText'
import DashboardBackground from './dashboard/DashboardBackground'
import DashboardSidebar from './dashboard/DashboardSidebar'
import StatCard from './dashboard/StatCard'
import SpendingChart from './dashboard/SpendingChart'
import RecommendationsPanel from './dashboard/RecommendationsPanel'
import ProviderCards from './dashboard/ProviderCards'
import { statCards } from '../data/dashboardData'
import { useInView } from '../hooks/useInView'
import { useEffect, useRef } from 'react'

export default function Dashboard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-up')
    if (!els) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="dashboard"
      className="relative w-full px-6 md:px-12 py-28 md:py-36 overflow-hidden"
    >
      <DashboardBackground />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="fade-up text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3">
            Product Overview
          </span>
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-[0.9] text-white">
            See Your Cloud Costs in{' '}
            <ShinyText text="Real Time." className="font-bold" />
          </h2>
          <p className="fade-up text-white/80 text-xs md:text-sm lg:text-base leading-relaxed max-w-2xl mt-5">
            Monitor infrastructure, detect unnecessary spending, forecast future
            costs, and receive AI-powered optimization recommendations from a
            single intelligent dashboard.
          </p>
        </div>

        {/* Dashboard shell - single application window */}
        <div
          ref={ref}
          className="fade-up glass-panel rounded-[2.5rem] p-10 md:p-12 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Left sidebar (25%) */}
            <div className="lg:col-span-1 pr-10 md:pr-12 lg:pr-14 border-r border-white/5">
              <DashboardSidebar />
            </div>

            {/* Right dashboard (75%) */}
            <div className="lg:col-span-3 pl-10 md:pl-12 lg:pl-14 flex flex-col gap-10 md:gap-12">
              {/* Top row: stat cards */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
                {statCards.map((stat) => (
                  <StatCard key={stat.label} stat={stat} active={inView} />
                ))}
              </div>

              {/* Middle row: chart + recommendations */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 md:gap-12">
                <div className="xl:col-span-3 min-h-[360px]">
                  <SpendingChart active={inView} />
                </div>
                <div className="xl:col-span-2">
                  <RecommendationsPanel />
                </div>
              </div>

              {/* Bottom row: cloud providers */}
              <ProviderCards active={inView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
