import { 
  LayoutDashboard, 
  DollarSign, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  CreditCard, 
  Settings, 
  LogOut,
  Wand2, 
  BookOpen, 
  ArrowRight, 
  Share2 
} from 'lucide-react'

export default function BloomHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Panel - 52% */}
        <div className="w-full lg:w-[52%] relative p-6 lg:p-8 flex flex-col">
          {/* Liquid glass overlay */}
          <div className="absolute inset-4 lg:inset-6 rounded-3xl liquid-glass-strong -z-10" />

          {/* CloudPilot Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="relative w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
            </div>
            <span className="text-white text-2xl font-semibold tracking-tighter">CloudPilot</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm font-medium">Cost Analysis</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <Activity className="w-5 h-5" />
              <span className="text-sm font-medium">Monitoring</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Forecast</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">AI Recommendations</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Billing</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </a>
            <a href="#" className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 text-white/80 hover:text-white hover:scale-105 transition-all">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </a>
          </nav>
        </div>

        {/* Right Panel - 48% (Desktop only) */}
        <div className="hidden lg:flex lg:w-[48%] p-6 lg:p-8 flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3">
              <Share2 className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <Share2 className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <Share2 className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white text-sm">Account</span>
            </button>
          </div>

          {/* Community Card */}
          <div className="liquid-glass w-56 rounded-2xl p-5 mb-8 hover:scale-105 transition-transform">
            <h3 className="text-white font-medium mb-2">Enter our ecosystem</h3>
            <p className="text-white/60 text-sm">Join thousands of creators designing the future of botanical art.</p>
          </div>

          {/* Bottom Feature Section */}
          <div className="mt-auto">
            <div className="liquid-glass rounded-[2.5rem] p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Processing Card */}
                <div className="liquid-glass rounded-3xl p-5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Wand2 className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">Processing</h4>
                  <p className="text-white/50 text-xs">AI-powered design tools</p>
                </div>

                {/* Growth Archive Card */}
                <div className="liquid-glass rounded-3xl p-5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">Growth Archive</h4>
                  <p className="text-white/50 text-xs">Track your creations</p>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="liquid-glass rounded-3xl p-4 flex items-center gap-4 hover:scale-105 transition-transform">
                <img 
                  src="/hero-flowers.png" 
                  alt="Plant Sculpting" 
                  className="w-24 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm mb-1">Advanced Plant Sculpting</h4>
                  <p className="text-white/50 text-xs">Create stunning 3D botanical art</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="text-white text-lg font-light">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
