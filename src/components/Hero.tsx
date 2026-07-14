import ShinyText from './ShinyText'

const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function Hero() {
  return (
    <section className="relative flex-grow w-full h-[calc(100vh-80px)] overflow-hidden z-10">
      {/* Loop Video Background (fills full document width, no viewport breakout) */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70 mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 radial-vignette -z-10"></div>
      </div>

      {/* Glowing object behind heading */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
        <div className="w-[800px] h-[800px] glowing-bg"></div>
      </div>

      {/* Content container (centered, matches original max-w-7xl layout) */}
      <div className="relative flex flex-col justify-between h-full pt-24 md:pt-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Top Section below Nav (Two-Column Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mt-4">
          <div className="lg:col-span-6 text-white/80 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl text-left">
            AI-powered cloud cost optimization platform that continuously analyzes
            cloud infrastructure, detects waste, forecasts spending, and delivers
            intelligent optimization recommendations.
          </div>
          <div className="lg:col-span-6 text-white/80 text-xs md:text-sm lg:text-base leading-relaxed lg:text-right flex lg:justify-end">
            <div className="max-w-xs">
              Trusted by startups, enterprises, and engineering teams worldwide.
            </div>
          </div>
        </section>

        {/* Center Hero Section */}
        <section className="flex flex-col items-center text-center justify-center my-auto py-2 w-full">
          <span className="text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3">
            AI CLOUD COST INTELLIGENCE PLATFORM
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[0.85] text-white flex flex-col items-center select-none">
            <span>Reduce</span>
            <span>Cloud Costs</span>
            <ShinyText text="Intelligently." className="font-bold pb-4" />
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center items-center">
            {/* Primary Action */}
            <button className="group bg-white text-black font-semibold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3.5 rounded-full hover:bg-neutral-200 transition-all flex items-center gap-2">
              Start Free Analysis
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            {/* Secondary Action */}
            <button className="bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3.5 rounded-full hover:bg-white/5 transition-all">
              Watch Demo
            </button>
          </div>
        </section>

        {/* Empty bottom spacing to maintain balance */}
        <div className="h-2"></div>
      </div>
    </section>
  )
}
