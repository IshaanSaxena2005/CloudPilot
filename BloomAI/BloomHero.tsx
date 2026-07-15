import { 
  LayoutDashboard, 
  DollarSign, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  CreditCard, 
  Settings, 
  LogOut,
  Search, 
  Bell, 
  RefreshCw, 
  Download, 
  User 
} from 'lucide-react'
import StatCard from '../src/components/dashboard/StatCard'
import SpendingChart from '../src/components/dashboard/SpendingChart'
import RecommendationsPanel from '../src/components/dashboard/RecommendationsPanel'
import ProviderCards from '../src/components/dashboard/ProviderCards'
import { statCards } from '../src/data/dashboardData'

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
        
        {/* Left Sidebar - Fixed 270px, SaaS-style */}
        <div className="hidden lg:flex lg:w-[270px] h-screen fixed left-0 top-0 p-4 flex flex-col">
          {/* Liquid glass overlay */}
          <div className="absolute inset-2 lg:inset-4 rounded-3xl liquid-glass-strong -z-10" />

          {/* CloudPilot Logo */}
          <div className="flex items-center gap-3 mb-6 px-2">
            <div className="relative w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <span className="text-white text-lg font-semibold tracking-tight">CloudPilot</span>
          </div>

          {/* Navigation - Centered Vertically */}
          <div className="flex-1 flex items-center">
            <nav className="flex flex-col gap-1.5 w-full px-2">
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <LayoutDashboard className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Dashboard</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <DollarSign className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Cost Analysis</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <Activity className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Monitoring</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <TrendingUp className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Forecast</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <Sparkles className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">AI Recommendations</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <CreditCard className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Billing</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <Settings className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Settings</span>
              </a>
              <a href="#" className="liquid-glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 text-white/80 hover:text-white hover:scale-105 transition-all">
                <LogOut className="w-[18px] h-[18px]" />
                <span className="text-xs font-medium">Logout</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Left Panel (for small screens) */}
        <div className="lg:hidden w-full relative p-6 flex flex-col">
          {/* Liquid glass overlay */}
          <div className="absolute inset-4 rounded-3xl liquid-glass-strong -z-10" />

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

        {/* Right Panel - Now filling remaining space (lg:w-[calc(100%-270px)]) */}
        <div className="hidden lg:flex lg:w-[calc(100%-270px)] lg:ml-[270px] p-6 lg:p-8 flex-col gap-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3">
              <Search className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <Bell className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <RefreshCw className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
              <Download className="w-5 h-5 text-white hover:text-white/80 transition-colors" />
            </div>
            <button className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform">
              <User className="w-5 h-5 text-white" />
              <span className="text-white text-sm">Profile</span>
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
            {/* Top Row - Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((stat) => (
                <StatCard key={stat.label} stat={stat} active={true} />
              ))}
            </div>

            {/* Middle Row - Chart + Recommendations */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              <div className="col-span-2">
                <SpendingChart active={true} />
              </div>
              <div className="col-span-1">
                <RecommendationsPanel />
              </div>
            </div>

            {/* Bottom Row - Provider Cards */}
            <ProviderCards active={true} />
          </div>
        </div>

        {/* Mobile Right Panel Placeholder (for small screens) */}
      </div>
    </div>
  )
}
