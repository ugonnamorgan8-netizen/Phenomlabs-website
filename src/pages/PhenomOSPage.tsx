import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Check, ChevronDown, BarChart3, MessageSquare, Bot, FileText, TrendingUp, Landmark } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import Rocket3D from '../components/Rocket3D'

const features = [
  { phase: 'Phase 1 — Core', icon: BarChart3, title: 'AI Accounting & Invoicing', desc: 'Generate, send, and track invoices. Get real-time profit/loss summaries via WhatsApp.' },
  { phase: 'Phase 1 — Core', icon: MessageSquare, title: 'WhatsApp Business Intelligence', desc: 'Ask your business any question via WhatsApp and get instant AI-powered answers.' },
  { phase: 'Phase 2 — Growth', icon: Bot, title: 'Automated Customer Follow-ups', desc: 'AI sends personalized follow-up messages to leads and customers automatically.' },
  { phase: 'Phase 2 — Growth', icon: FileText, title: 'AI Business Plan Generator', desc: 'Describe your business and get a full, investor-ready business plan in minutes.' },
  { phase: 'Phase 3 — Enterprise', icon: TrendingUp, title: 'Sales Forecasting', desc: 'Predict monthly revenue, identify trends, and get stocking recommendations.' },
  { phase: 'Phase 3 — Enterprise', icon: Landmark, title: 'Loan & Funding Matching', desc: 'AI matches your business profile to available grants and loan opportunities in Nigeria.' },
]

const steps = [
  { n: '01', title: 'Sign Up via WhatsApp', desc: 'Send "START" to the PHENOM OS number. Your AI business manager is activated instantly.' },
  { n: '02', title: 'Connect Your Business', desc: 'Add your products, services, and customer list. Takes under 10 minutes for most businesses.' },
  { n: '03', title: 'Ask, Automate, Scale', desc: "Chat with your AI COO 24/7. It handles invoices, follow-ups, reports — so you don't have to." },
]

const pricing = [
  { name: 'Starter', price: '₦0', period: 'Free Forever', color: '#a78bfa', features: ['WhatsApp AI Queries (50/mo)', 'Basic Invoice Generation', 'Sales Summary Reports', 'Community Support'] },
  { name: 'Business', price: '₦9,999', period: '/month', color: '#7c3aed', popular: true, features: ['Unlimited AI Queries', 'Full Invoice & Payment Tracking', 'Automated Customer Follow-ups', 'Business Plan Generator', 'Priority Support'] },
  { name: 'Enterprise', price: 'Custom', period: 'Contact Us', color: '#4c1d95', features: ['All Business Features', 'Sales Forecasting', 'Funding Matching', 'Custom Integrations', 'Dedicated Account Manager'] },
]

const faqs = [
  { q: 'When will PHENOM OS launch?', a: 'PHENOM OS is planned for Q3 2026. Join the waitlist to get early access and a free 3-month trial.' },
  { q: 'Do I need a smartphone or laptop?', a: 'No! PHENOM OS works entirely through WhatsApp, which runs on any basic smartphone. A dashboard is available for web browsers too.' },
  { q: 'Is my business data secure?', a: 'Yes. All data is encrypted end-to-end. We are NDPR-compliant and will never sell or share your business data.' },
  { q: 'Can it work for my specific industry?', a: 'PHENOM OS is built for all Nigerian SMEs — retail, food, fashion, services, education, healthcare, and more. The AI adapts to your business type.' },
  { q: 'What if I need help setting up?', a: 'Every account gets a free 30-minute onboarding call. Our team in Awka is also reachable via WhatsApp within 1 hour.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden transition-all duration-300" style={{ background: open ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/3 transition-colors">
        <span className="font-semibold text-white text-base" style={{ fontFamily: 'Sora, sans-serif' }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={18} className="text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PhenomOSPage() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const rocketProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1])

  const { ref: stepsRef, inView: stepsInView } = useInView()
  const { ref: featRef, inView: featInView } = useInView()
  const { ref: pricingRef, inView: pricingInView } = useInView()

  return (
    <main ref={containerRef} className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
        <div className="grid-lines absolute inset-0 opacity-15 pointer-events-none" />
        <div className="aurora-1 absolute inset-0 pointer-events-none opacity-30" />

        {/* Rocket 3D Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Rocket3D progress={rocketProgress} />
          </Canvas>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
            <div className="inline-block mb-6">
              <span className="tag-purple">🚀 Launching 2026 — Join the Waitlist</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              Meet Your <br />
              <span className="gradient-text-brand">AI Business Manager</span>
            </h1>
            <p className="text-white/55 text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              PHENOM OS is Africa's first AI-powered business operating system. Run your entire business from WhatsApp.
            </p>
            
            {/* Waitlist form */}
            {!joined ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true) }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-ph-purple/50 transition-all duration-300" 
                />
                <button type="submit" className="btn-primary px-8 py-4 whitespace-nowrap shadow-lg shadow-ph-purple/20">
                  Join Waitlist →
                </button>
              </form>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-ph-purple/30 bg-ph-purple/10 text-ph-purple-light">
                <Check size={18} /> You're on the waitlist! We'll notify you first.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-32 relative overflow-hidden bg-ph-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-purple/60 mb-4 block font-bold">The Challenge</span>
              <h2 className="font-display text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>African SMEs Are Running Blind</h2>
              <div className="space-y-4">
                {[
                  'No real-time visibility into sales, expenses or profits', 
                  'Hours lost to manual invoicing, follow-ups, and reports', 
                  'No system to track customers, stock, or outstanding payments', 
                  'Business decisions made on gut feeling, not data'
                ].map(p => (
                  <div key={p} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-ph-purple/40 font-bold mt-0.5">✕</span>
                    <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-purple/60 mb-4 block font-bold">The Solution</span>
              <h2 className="font-display text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>PHENOM OS Changes Everything</h2>
              <div className="space-y-4">
                {[
                  'Instant financial reports via WhatsApp — anytime, anywhere', 
                  'Automated invoicing, reminders, and payment tracking', 
                  'AI-powered customer intelligence and follow-up system', 
                  'Data-driven insights to make smarter business decisions'
                ].map(s => (
                  <div key={s} className="flex items-start gap-4 p-5 rounded-2xl bg-ph-purple/5 border border-ph-purple/10 hover:border-ph-purple/20 transition-colors">
                    <Check size={18} className="text-ph-purple-light mt-0.5 flex-shrink-0" />
                    <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-purple mb-4">Simple Setup</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>How It <span className="gradient-text-brand">Works</span></h2>
            <p className="text-white/40 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Up and running in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="text-center group">
                <div className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center font-display font-black text-2xl text-white shadow-xl shadow-ph-purple/10 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)' }}>
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>{s.desc}</p>
              </motion.div>
            ))}
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-10 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Roadmap */}
      <section ref={featRef} className="py-32 bg-ph-space relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-purple mb-4">Roadmap</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Feature <span className="gradient-text-brand">Rollout</span></h2>
            <p className="text-white/40 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Building the future of African business intelligence phase by phase.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 25 }} animate={featInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-8 border border-white/5 hover:border-ph-purple/30 transition-all duration-500 group">
                <span className="text-[10px] font-mono text-ph-purple-light/50 mb-4 block font-bold uppercase tracking-widest">{f.phase}</span>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-ph-purple-light">
                  <f.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-purple mb-4">Pricing Plans</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Simple <span className="gradient-text-brand">Pricing</span></h2>
            <p className="text-white/40 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Start free. Scale as you grow. Built for impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricing.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className={`glass rounded-[2.5rem] p-10 border relative flex flex-col ${p.popular ? 'border-ph-purple/40 ring-1 ring-ph-purple/20' : 'border-white/5'}`}
                style={{ background: p.popular ? 'rgba(15, 10, 30, 0.6)' : 'rgba(10, 10, 10, 0.6)' }}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)' }}>
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-white text-xl mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>{p.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display font-bold text-5xl text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{p.price}</span>
                  <span className="text-white/30 text-sm mb-2">{p.period}</span>
                </div>
                <div className="h-px w-full bg-white/5 my-8" />
                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <Check size={16} className="text-ph-purple-light flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 ${p.popular ? 'bg-white text-black hover:bg-ph-purple-light hover:text-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {p.price === 'Custom' ? 'Contact Us' : 'Join Waitlist'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-ph-space relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="tag-purple mb-4">FAQ</span>
            <h2 className="font-display text-4xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
              Common <span className="gradient-text-brand">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
