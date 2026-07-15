import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightCircle, Zap, LockKeyhole, Fingerprint, Menu, X } from 'lucide-react';

const navLinks = ['Vault', 'Plans', 'Install', 'News', 'Help'];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  })
};

export default function VaultShieldHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" overflow="visible" viewBox="0 0 256 256">
          <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" fill="#192837"/>
        </svg>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--color-accent)' }}>
            Start For Free
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold" style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}>
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8" style={{ paddingTop: 'clamp(40px, 8vw, 72px)' }}>
        <div style={{ maxWidth: '560px' }}>
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.65rem, 5vw, 3rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.01em',
              color: 'var(--color-text)',
              marginBottom: '24px'
            }}
          >
            <Zap className="w-6 h-6 inline-block align-middle relative top-[-2px] mr-1.5" style={{ color: 'var(--color-text)' }} />
            Lock Down Your Passwords
            <LockKeyhole className="w-6 h-6 inline-block align-middle relative top-[-2px] mx-1.5" style={{ color: 'var(--color-text)' }} />
            with Ironclad Security
            <Fingerprint className="w-6 h-6 inline-block align-middle relative top-[-2px] ml-1.5" style={{ color: 'var(--color-text)' }} />
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: '1.65',
              opacity: 0.8,
              maxWidth: '560px',
              marginBottom: '32px'
            }}
          >
            Zero stress, total control. VaultShield keeps you covered with unbreakable storage, one-tap access, and pro-grade tools for your non-stop world.
          </motion.p>

          <motion.button
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-between gap-8"
            style={{
              background: 'var(--color-accent)',
              color: 'white',
              borderRadius: '50px',
              padding: '17px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              boxShadow: '0 4px 24px rgba(115,66,226,0.28)',
              minWidth: '210px'
            }}
          >
            Get It Free
            <ArrowRightCircle className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-20"
              style={{
                background: 'rgba(25,40,55,0.35)',
                backdropFilter: 'blur(4px)'
              }}
            />
            {/* Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.45
              }}
              className="fixed right-0 top-0 z-30 flex flex-col"
              style={{
                width: 'min(88vw, 360px)',
                height: '100dvh',
                background: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25,40,55,0.18)'
              }}
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" overflow="visible" viewBox="0 0 256 256">
                  <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" fill="#192837"/>
                </svg>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px mx-6" style={{ background: 'rgba(25,40,55,0.12)' }} />

              {/* Nav Links */}
              <div className="flex-1 px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.18 + i * 0.07,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    href="#"
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="px-6 pb-8 flex flex-col gap-4">
                <button
                  className="rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: 'var(--color-accent)' }}
                >
                  Start For Free
                </button>
                <button
                  className="rounded-full px-5 py-3 text-sm font-semibold"
                  style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}
                >
                  Sign In
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
