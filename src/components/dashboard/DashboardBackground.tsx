import { useMemo } from 'react'

/** Deterministic pseudo-random so particles are stable across renders. */
function seededParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i + 1) * 9301
    const rand = (n: number) => ((seed * n) % 1000) / 1000
    return {
      left: `${Math.round(rand(233) * 100)}%`,
      top: `${Math.round(rand(157) * 100)}%`,
      size: 2 + Math.round(rand(97) * 3),
      duration: 8 + Math.round(rand(61) * 10),
      delay: Math.round(rand(29) * 8),
    }
  })
}

export default function DashboardBackground() {
  const particles = useMemo(() => seededParticles(18), [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft radial glow */}
      <div className="absolute inset-x-0 top-0 h-[800px] flex justify-center">
        <div className="w-[1200px] h-[800px] dashboard-glow"></div>
      </div>

      {/* Animated blue cloud waves */}
      <div className="cloud-wave cloud-wave-1"></div>
      <div className="cloud-wave cloud-wave-2"></div>
      <div className="cloud-wave cloud-wave-3"></div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/50"></div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
