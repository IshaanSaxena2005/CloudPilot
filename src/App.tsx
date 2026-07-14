import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="bg-black text-white/80 font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-5 border-t border-white/5 bg-black/40 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-semibold text-white tracking-tight text-sm md:text-base">
            CloudPilot
          </div>
          <div className="text-white/60 text-xs md:text-sm text-center md:text-left">
            © 2026 CloudPilot. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="text-white/60 text-xs md:text-sm hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-white/60 text-xs md:text-sm hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
