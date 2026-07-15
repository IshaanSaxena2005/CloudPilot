import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightCircle, Zap, LockKeyhole, Menu, X, Check, ChevronDown, ChevronUp, Shield, TrendingUp, Sparkles, Globe, Layers, Briefcase } from 'lucide-react';

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
  const [isYearly, setIsYearly] = useState(false);

  const faqs = [
    { question: "How much can I save with CloudPilot?", answer: "Our customers typically save 20-40% on their cloud bills within the first 3 months of using CloudPilot with our AI-driven optimization recommendations." },
    { question: "Which cloud providers do you support?", answer: "CloudPilot supports all major cloud providers including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)." },
    { question: "Is there a free trial available?", answer: "Yes! We offer a 14-day free trial for our Professional plan with full access to all features, no credit card required." },
    { question: "How does CloudPilot ensure security?", answer: "We prioritize security and only request read-only access to your cloud billing and usage data. All data is encrypted in transit and at rest." },
    { question: "Can I cancel anytime?", answer: "Absolutely! You can cancel your subscription at any time with no hidden fees or penalties." }
  ];

  const features = [
    { icon: <Sparkles className="w-8 h-8" />, title: "AI Optimization", description: "Intelligent AI that continuously analyzes and optimizes your cloud spending." },
    { icon: <Globe className="w-8 h-8" />, title: "Multi-cloud Support", description: "Seamlessly supports AWS, Azure, and Google Cloud with a single unified dashboard." },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Cost Forecasting", description: "Accurate AI-powered predictions for your future cloud spending and budget planning." },
    { icon: <Shield className="w-8 h-8" />, title: "Security", description: "Enterprise-grade security with SOC 2 compliance and end-to-end encryption." },
    { icon: <Layers className="w-8 h-8" />, title: "Automation", description: "Automated resource optimization and cost-saving recommendations with one-click fixes." },
    { icon: <Briefcase className="w-8 h-8" />, title: "Compliance", description: "Built-in compliance checks for all major regulatory requirements including GDPR, HIPAA, and more." }
  ];

  const pricingPlans = [
    { name: "Starter", price: isYearly ? 0 : 0, description: "For small teams and startups getting started with cloud optimization.", features: ["1 cloud account", "Basic AI recommendations", "Monthly cost reports", "Email support"], cta: "Get Started", ctaStyle: "secondary" },
    { name: "Professional", price: isYearly ? 39 : 49, description: "For growing businesses looking to optimize their cloud spend.", features: ["Up to 5 cloud accounts", "Advanced AI recommendations", "Real-time cost alerts", "Weekly optimization reports", "Priority support"], cta: "Start Free Trial", ctaStyle: "primary", highlight: true },
    { name: "Enterprise", price: isYearly ? "Custom" : "Custom", description: "For large organizations with complex cloud environments.", features: ["Unlimited cloud accounts", "Custom AI models", "Dedicated account manager", "SLA support", "Onboarding & training"], cta: "Contact Sales", ctaStyle: "secondary" }
  ];

  return (
    <div className="relative w-full" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
      {/* Background Video (only in Hero Section) */}
      <div className="relative">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
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

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-24" style={{ paddingTop: 'clamp(40px, 8vw, 72px)' }}>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center"
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
              Optimize Your Cloud Spend.
              <LockKeyhole className="w-8 h-8 inline-block align-middle relative top-[-3px] mx-2" style={{ color: 'var(--color-text)' }} />
              AI That Pays for Itself.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                lineHeight: '1.65',
                opacity: 0.8,
                maxWidth: '700px',
                marginBottom: '32px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Trusted by 1200+ companies to reduce cloud costs by 20-40% with AI-powered optimization for AWS, Azure, and Google Cloud.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["AWS Partner", "Azure Compatible", "Google Cloud Ready"].map((badge, i) => (
                <motion.div
                  key={badge}
                  custom={0.5 + i * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="px-5 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(25,40,55,0.05)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(25,40,55,0.1)'
                  }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                Book Demo
              </motion.button>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap justify-center gap-12">
              {[
                { label: "Cloud Savings", value: "$18M+" },
                { label: "Customers", value: "1200+" },
                { label: "Uptime", value: "99.9%" }
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  custom={1 + i * 0.15}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm opacity-70">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Background for Remaining Sections */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(242,242,238,1) 0%, rgba(230,230,225,1) 50%, rgba(210,200,195,1) 100%)'
      }}>
        <main className="relative z-10 pb-24">
          {/* Pricing Cards Section */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
            <motion.div className="text-center mb-12">
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(25,40,55,0.1)'
                }}
              >
                <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-[#192837]'}`}
                  style={{
                    background: !isYearly ? 'var(--color-accent)' : 'transparent',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </span>
                <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-[#192837]'}`}
                  style={{
                    background: isYearly ? 'var(--color-accent)' : 'transparent',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsYearly(true)}
                >
                  Yearly <span className="ml-1 text-xs opacity-90">(Save 20%)</span>
                </span>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  custom={2 + i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: plan.highlight ? '0 16px 48px rgba(115,66,226,0.2)' : '0 12px 36px rgba(25,40,55,0.1)'
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-8 rounded-[2rem]"
                  style={{
                    background: plan.highlight ? 'rgba(115,66,226,0.05)' : 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(16px)',
                    border: plan.highlight ? '2px solid rgba(115,66,226,0.25)' : '1px solid rgba(25,40,55,0.1)',
                    boxShadow: plan.highlight ? '0 8px 32px rgba(115,66,226,0.15), inset 0 1px 2px rgba(255,255,255,0.1)' : 'inset 0 1px 2px rgba(255,255,255,0.08)'
                  }}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 -mt-2 -mr-2">
                      <span className="px-4 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--color-accent)', color: 'white' }}>Most Popular</span>
                    </div>
                  )}
                  {isYearly && plan.name === "Professional" && (
                    <div className="absolute top-0 left-0 -mt-2 -ml-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#10B981', color: 'white' }}>Save 20%</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-4xl font-bold">{typeof plan.price === 'number' ? `$${plan.price}` : plan.price}</span>
                    {typeof plan.price === 'number' && <span className="opacity-60">/month</span>}
                  </div>
                  <p className="text-sm opacity-70 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], rotate: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                        >
                          <Check className="w-5 h-5" style={{ color: '#7342E2' }} />
                        </motion.div>
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="w-full rounded-full py-3 text-sm font-semibold"
                    style={{
                      background: plan.ctaStyle === 'primary' ? 'var(--color-accent)' : 'var(--color-login-bg)',
                      color: plan.ctaStyle === 'primary' ? 'white' : 'var(--color-text)'
                    }}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why CloudPilot Section (6 Features) */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
            <motion.h2
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)'
              }}
            >
              Why Choose CloudPilot
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={5 + i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(25,40,55,0.12)' }}
                  className="p-8 rounded-[2rem]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(25,40,55,0.1)',
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="mb-4 p-3 rounded-full inline-flex" style={{ background: 'rgba(115,66,226,0.1)', color: '#7342E2' }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="opacity-70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24">
            <motion.h2
              custom={8}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)'
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
                    className="w-full flex items-center justify-between p-6 text-left transition-all"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {openFaq === i ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
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
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  marginBottom: '24px'
                }}
              >
                Ready to Reduce Your Cloud Bill?
              </h2>
              <p className="opacity-70 mb-6 max-w-2xl mx-auto">
                Join thousands of companies optimizing their cloud costs with CloudPilot today.
              </p>
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {["No Credit Card Required", "14-Day Free Trial", "Cancel Anytime"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm opacity-80">
                    <Check className="w-4 h-4" style={{ color: '#10B981' }} />
                    {item}
                  </div>
                ))}
              </div>
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

        {/* Footer (Expanded SaaS Footer) */}
        <footer className="relative z-10 border-t border-[#192837]/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
              {/* Company Info */}
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-8 h-8 rounded-full border-2 border-[#192837]/80 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#192837]"></div>
                  </div>
                  <span className="text-lg font-semibold">CloudPilot</span>
                </div>
                <p className="text-sm opacity-70 mb-6 max-w-xs">
                  AI-driven cloud optimization platform helping companies save 20-40% on their cloud costs.
                </p>
                {/* Social Links */}
                <div className="flex gap-4">
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                    <Shield className="w-5 h-5" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Product */}
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Integrations</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">API</a></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">AWS Optimization</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Azure Optimization</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">GCP Optimization</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Enterprise</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Press</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Security</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-[#192837]/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm opacity-60">
                © 2026 CloudPilot. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm opacity-70">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
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
              <div className="px-6 pb-8 flex flex-col gap-4 mt-auto">
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
