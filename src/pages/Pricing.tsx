import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightCircle, Zap, LockKeyhole, Menu, X, Check, ChevronDown, ChevronUp, Shield, TrendingUp, PiggyBank } from 'lucide-react';

const navLinks = ['Platform', 'Solutions', 'Dashboard', 'Pricing', 'Resources'];

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

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much can I save with CloudPilot?",
      answer: "Our customers typically save 20-40% on their cloud bills within the first 3 months of using CloudPilot."
    },
    {
      question: "Which cloud providers do you support?",
      answer: "CloudPilot supports all major cloud providers including AWS, Azure, and Google Cloud Platform (GCP)."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for the Professional plan with full access to all features."
    },
    {
      question: "How does CloudPilot ensure security?",
      answer: "We prioritize security and only request read-only access to your cloud billing and usage data."
    }
  ];

  return (
    <div className="relative w-full" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Navbar */}
      <nav className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* CloudPilot Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full border-2 border-[#192837]/80 flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-[#192837]"></div>
          </div>
          <span className="text-[#192837] text-lg font-semibold tracking-tight">CloudPilot</span>
        </div>

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
            Start Free Analysis
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold" style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}>
            Login
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

      <main className="relative z-10 pb-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8" style={{ paddingTop: 'clamp(40px, 8vw, 72px)' }}>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '720px' }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.01em',
                color: 'var(--color-text)',
                marginBottom: '24px'
              }}
            >
              <Zap className="w-8 h-8 inline-block align-middle relative top-[-3px] mr-2" style={{ color: 'var(--color-text)' }} />
              Transparent Cloud Pricing.
              <LockKeyhole className="w-8 h-8 inline-block align-middle relative top-[-3px] mx-2" style={{ color: 'var(--color-text)' }} />
              AI That Pays For Itself.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                lineHeight: '1.65',
                opacity: 0.8,
                maxWidth: '600px',
                marginBottom: '40px'
              }}
            >
              Pay only for what you use. CloudPilot optimizes your AWS, Azure, and GCP spending in real-time with AI-driven recommendations that deliver immediate ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-3"
                style={{
                  background: 'var(--color-accent)',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '17px 28px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  boxShadow: '0 4px 24px rgba(115,66,226,0.28)',
                  minWidth: '210px'
                }}
              >
                Start Free Analysis
                <ArrowRightCircle className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-3"
                style={{
                  background: 'var(--color-login-bg)',
                  color: 'var(--color-text)',
                  borderRadius: '50px',
                  padding: '17px 28px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.15)',
                  minWidth: '210px'
                }}
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Section */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-8 rounded-[2rem]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(25,40,55,0.1)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <p className="text-sm opacity-70 mb-6">For small teams and startups getting started with cloud optimization.</p>
              <ul className="space-y-3 mb-8">
                {[ "1 cloud account", "Basic AI recommendations", "Monthly cost reports", "Email support" ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5" style={{ color: '#7342E2' }} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full py-3 text-sm font-semibold" style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}>
                Get Started
              </button>
            </motion.div>

            {/* Professional Plan (Highlighted) */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-8 rounded-[2rem]"
              style={{
                background: 'rgba(115,66,226,0.05)',
                backdropFilter: 'blur(16px)',
                border: '2px solid rgba(115,66,226,0.25)',
                boxShadow: '0 8px 32px rgba(115,66,226,0.15), inset 0 1px 2px rgba(255,255,255,0.1)'
              }}
            >
              <div className="absolute top-0 right-0 -mt-2 -mr-2">
                <span className="px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--color-accent)', color: 'white' }}>Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="opacity-60 ml-1">/month</span>
              </div>
              <p className="text-sm opacity-70 mb-6">For growing businesses looking to optimize their cloud spend.</p>
              <ul className="space-y-3 mb-8">
                {[ "Up to 5 cloud accounts", "Advanced AI recommendations", "Real-time cost alerts", "Weekly optimization reports", "Priority support" ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5" style={{ color: '#7342E2' }} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full py-3 text-sm font-semibold" style={{ background: 'var(--color-accent)', color: 'white' }}>
                Start Free Trial
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-8 rounded-[2rem]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(25,40,55,0.1)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08)'
              }}
            >
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm opacity-70 mb-6">For large organizations with complex cloud environments.</p>
              <ul className="space-y-3 mb-8">
                {[ "Unlimited cloud accounts", "Custom AI models", "Dedicated account manager", "SLA support", "Onboarding & training" ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5" style={{ color: '#7342E2' }} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full py-3 text-sm font-semibold" style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}>
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>

        {/* Why CloudPilot Section */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-24">
          <motion.h2
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)'
            }}
          >
            Why Choose CloudPilot
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <PiggyBank className="w-8 h-8" />, title: "Save Money", description: "Reduce your cloud costs by up to 40% with AI-driven recommendations" },
              { icon: <Shield className="w-8 h-8" />, title: "Stay Secure", description: "Your data is protected with enterprise-grade security protocols" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Predict Spending", description: "Forecast your future cloud costs with AI-powered prediction models" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={5 + i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-[2rem]"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(25,40,55,0.1)',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08)'
                }}
              >
                <div className="mb-4" style={{ color: '#7342E2' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 mt-24">
          <motion.h2
            custom={8}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)'
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={9 + i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-[1.5rem] overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(25,40,55,0.1)'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <p className="opacity-70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-24 text-center">
          <motion.div
            custom={13}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem]"
            style={{
              background: 'rgba(115,66,226,0.05)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(115,66,226,0.2)',
              boxShadow: '0 8px 32px rgba(115,66,226,0.1)'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                marginBottom: '24px'
              }}
            >
              Ready to Reduce Your Cloud Bill?
            </h2>
            <p className="opacity-70 mb-8 max-w-2xl mx-auto">
              Join thousands of companies optimizing their cloud costs with CloudPilot today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="rounded-full px-8 py-3 text-sm font-semibold"
                style={{ background: 'var(--color-accent)', color: 'white' }}
              >
                Start Free Analysis
              </button>
              <button
                className="rounded-full px-8 py-3 text-sm font-semibold"
                style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}
              >
                Book Demo
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#192837]/10 mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8 rounded-full border-2 border-[#192837]/80 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#192837]"></div>
                </div>
                <span className="text-lg font-semibold">CloudPilot</span>
              </div>
              <p className="text-sm opacity-70">AI-driven cloud optimization platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#192837]/10 text-sm opacity-60 text-center">
            © 2026 CloudPilot. All rights reserved.
          </div>
        </div>
      </footer>

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
              className="fixed inset-0 z-40"
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
              className="fixed right-0 top-0 z-50 flex flex-col"
              style={{
                width: 'min(88vw, 360px)',
                height: '100dvh',
                background: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25,40,55,0.18)'
              }}
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full border-2 border-[#192837]/80 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#192837]"></div>
                  </div>
                  <span className="text-lg font-semibold">CloudPilot</span>
                </div>
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
                  Start Free Analysis
                </button>
                <button
                  className="rounded-full px-5 py-3 text-sm font-semibold"
                  style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}
                >
                  Login
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
