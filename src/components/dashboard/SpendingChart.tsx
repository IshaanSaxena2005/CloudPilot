import { spendTrend } from '../../data/dashboardData'

interface SpendingChartProps {
  active: boolean
}

const WIDTH = 640
const HEIGHT = 240
const PAD_X = 12
const PAD_TOP = 20
const PAD_BOTTOM = 28

export default function SpendingChart({ active }: SpendingChartProps) {
  const costs = spendTrend.map((p) => p.cost)
  const min = Math.min(...costs)
  const max = Math.max(...costs)
  const range = max - min || 1

  const innerW = WIDTH - PAD_X * 2
  const innerH = HEIGHT - PAD_TOP - PAD_BOTTOM

  const points = spendTrend.map((p, i) => {
    const x = PAD_X + (i / (spendTrend.length - 1)) * innerW
    const y = PAD_TOP + (1 - (p.cost - min) / range) * innerH
    return { x, y, ...p }
  })

  const linePath = points
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)
    .join(' ')

  const areaPath =
    `M ${points[0].x.toFixed(1)} ${(HEIGHT - PAD_BOTTOM).toFixed(1)} ` +
    points.map((pt) => `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(' ') +
    ` L ${points[points.length - 1].x.toFixed(1)} ${(HEIGHT - PAD_BOTTOM).toFixed(1)} Z`

  const gridLines = [0, 0.25, 0.5, 0.75, 1]

  return (
    <div className="liquid-glass rounded-2xl p-7 md:p-8 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-base md:text-lg tracking-tight">
            Cloud Spending Trend
          </h3>
          <p className="text-white/50 text-xs mt-0.5">Monthly cost, last 12 months</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="w-2.5 h-2.5 rounded-full bg-[#64cefb] shadow-[0_0_10px_rgba(100,206,251,0.7)]"></span>
          Total spend
        </div>
      </div>

      <div className="flex-grow mt-5">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-full"
          preserveAspectRatio="none"
          role="img"
          aria-label="Line chart of monthly cloud spending over the last 12 months"
        >
          <defs>
            <linearGradient id="spend-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(100,206,251,0.4)" />
              <stop offset="100%" stopColor="rgba(100,206,251,0)" />
            </linearGradient>
            <linearGradient id="spend-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#64cefb" />
              <stop offset="50%" stopColor="#b3e5ff" />
              <stop offset="100%" stopColor="#64cefb" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {gridLines.map((g) => {
            const y = PAD_TOP + g * innerH
            return (
              <line
                key={g}
                x1={PAD_X}
                y1={y}
                x2={WIDTH - PAD_X}
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth={1}
              />
            )
          })}

          {/* Area */}
          <path
            d={areaPath}
            fill="url(#spend-area)"
            className={`chart-area ${active ? 'is-drawn' : ''}`}
          />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="url(#spend-line)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`chart-line ${active ? 'is-drawn' : ''}`}
          />

          {/* End dot */}
          <circle
            cx={points[points.length - 1].x}
            cy={points[points.length - 1].y}
            r={4}
            fill="#ffffff"
            className={`chart-area ${active ? 'is-drawn' : ''}`}
          />
        </svg>
      </div>

      {/* X axis labels */}
      <div className="flex justify-between mt-4 px-1 text-[10px] text-white/40">
        {spendTrend.map((p) => (
          <span key={p.month}>{p.month}</span>
        ))}
      </div>
    </div>
  )
}
