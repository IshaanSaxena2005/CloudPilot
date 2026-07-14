import { useEffect, useRef } from 'react'
import { ScanSearch, Activity, Sparkles, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ShinyText from './ShinyText'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  delay: string
}

const features: Feature[] = [
  {
    icon: ScanSearch,
    title: 'AI Cost Analysis',
    description: 'Automatically detect wasted cloud spending and idle resources.',
    delay: '0.05s',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor AWS, Azure and GCP infrastructure continuously.',
    delay: '0.15s',
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    description:
      'Receive AI-generated optimization suggestions with estimated savings.',
    delay: '0.25s',
  },
  {
    icon: TrendingUp,
    title: 'Forecast & Budgeting',
    description: 'Predict future cloud expenses using AI forecasting.',
    delay: '0.35s',
  },
]

export default function Features() {
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
      id="features"
      className="relative w-full px-6 md:px-12 py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient blue glow to blend from the hero seamlessly */}
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] features-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="fade-up text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3">
            Why CloudPilot
          </span>
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-[0.9] text-white">
            Everything you need to{' '}
            <ShinyText text="optimize spend." className="font-bold" />
          </h2>
          <p className="fade-up text-white/80 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mt-5">
            A complete intelligence layer for your cloud — analyze, monitor, and
            forecast costs across every provider.
          </p>
        </div>

        {/* Cards: 1 col mobile, 2 col tablet, 2x2 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              className="feature-card fade-up rounded-3xl p-8 md:p-10"
              style={{ transitionDelay: delay }}
            >
              <div className="feature-icon w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
