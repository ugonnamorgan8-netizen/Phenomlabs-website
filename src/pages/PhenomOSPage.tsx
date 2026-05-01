import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import Rocket3D from '../components/Rocket3D'

const features = [
  { phase: 'Phase 1 — Core', emoji: '📊', title: 'AI Accounting & Invoicing', desc: 'Generate, send, and track invoices. Get real-time profit/loss summaries via WhatsApp.' },
  { phase: 'Phase 1 — Core', emoji: '💬', title: 'WhatsApp Business Intelligence', desc: 'Ask your business any question via WhatsApp and get instant AI-powered answers.' },
  { phase: 'Phase 2 — Growth', emoji: '🤖', title: 'Automated Customer Follow-ups', desc: 'AI sends personalized follow-up messages to leads and customers automatically.' },
  { phase: 'Phase 2 — Growth', emoji: '📝', title: 'AI Business Plan Generator', desc: 'Describe your business and get a full, investor-ready business plan in minutes.' },
  { phase: 'Phase 3 — Enterprise', emoji: '📈', title: 'Sales Forecasting', desc: 'Predict monthly revenue, identify trends, and get stocking recommendations.' },
  { phase: 'Phase 3 — Enterprise', emoji: '🏦', title: 'Loan & Funding Matching', desc: 'AI matches your business profile to available grants and loan opportunities in Nigeria.' },
]

const steps = [
  { n: '01', title: 'Sign Up via WhatsApp', desc: 'Send "START" to the PHENOM OS number. Your AI business manager is activated instantly.' },
  { n: '02', title: 'Connect Your Business', desc: 'Add your products, services, and customer list. Takes under 10 minutes for most businesses.' },
  { n: '03', title: 'Ask, Automate, Scale', desc: "Chat with your AI COO 24/7. It handles invoices, follow-ups, reports — so you don't have to." },
]

const pricing = [
  { name: 'Starter', price: '₦0', period: 'Free Forever', color: '#2563EB', features: ['WhatsApp AI Queries (50/mo)', 'Basic Invoice Generation', 'Sales Summary Reports', 'Community Support'] },
  { name: 'Business', price: '₦9,999', period: '/month', color: '#7C3AED', popular: true, features: ['Unlimited AI Queries', 'Full Invoice & Payment Tracking', 'Automated Customer Follow-ups', 'Business Plan Generator', 'Priority Support'] },
  { name: 'Enterprise', price: 'Custom', period: 'Contact Us', color: '#FFB800', features: ['All Business Features', 'Sales Forecasting', 'Funding Matching', 'Custom Integrations', 'Dedicated Account Manager'] },
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
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-colors">
        <span className="font-medium text-white text-sm">{q}</span>
        {open ? <ChevronUp size={16} className="text-white/40 flex-shrink-0" /> : <ChevronDown size={16} className="text-white/40 flex-shrink-0" />}
      </button>
      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="overflow-hidden">
          <p className="px-6 pb-4 text-sm text-white/55 leading-relaxed">{a}</p>
        </motion.div>
      )}
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
    <main ref={containerRef} className="bg-black">
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
        <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />
        <div className="aurora-1 absolute inset-0 pointer-events-none" />

        {/* Rocket 3D Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Rocket3D progress={rocketProgress} />
          </Canvas>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ph-violet/30 bg-ph-violet/10 text-ph-purple text-sm font-semibold mb-6 animate-pulse">
              🚀 Launching 2026 — Join the Waitlist
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Meet Your <span className="gradient-text-brand">AI Business Manager</span>
            </h1>
            <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              PHENOM OS is Africa's first AI-powered business operating system. Run your entire business from WhatsApp.
            </p>
            {/* Waitlist form */}
            {!joined ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true) }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-ph-violet/60 transition-colors" />
                <button type="submit" className="px-7 py-3.5 rounded-xl font-bold text-white text-sm whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
                  Join Waitlist →
                </button>
              </form>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400">
                <Check size={18} /> You're on the waitlist! We'll notify you first.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-display text-4xl font-bold text-white mb-6">African SMEs Are Running Blind</h2>
              <div className="space-y-4">
                {['No real-time visibility into sales, expenses or profits', 'Hours lost to manual invoicing, follow-ups, and reports', 'No system to track customers, stock, or outstanding payments', 'Business decisions made on gut feeling, not data'].map(p => (
                  <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <p className="text-white/65 text-sm">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">The Solution</p>
              <h2 className="font-display text-4xl font-bold text-white mb-6">PHENOM OS Changes Everything</h2>
              <div className="space-y-4">
                {['Instant financial reports via WhatsApp — anytime, anywhere', 'Automated invoicing, reminders, and payment tracking', 'AI-powered customer intelligence and follow-up system', 'Data-driven insights to make smarter business decisions'].map(s => (
                  <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
                    <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/65 text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-3">How It <span className="gradient-text">Works</span></h2>
            <p className="text-white/50">Up and running in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="text-center relative">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center font-display font-black text-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #FFB800, #FF6600)' }}>
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[58%] w-[42%] h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(255,184,0,0.4), transparent)' }} />
                )}
                <h3 className="font-display font-bold text-white text-xl mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featRef} className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-3">Feature <span className="gradient-text-gold">Roadmap</span></h2>
            <p className="text-white/50">Rolling out in phases — starting with the most impactful features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 25 }} animate={featInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 border border-white/8 card-hover-glow">
                <span className="text-xs font-mono text-amber-400/60 mb-2 block">{f.phase}</span>
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-3">Simple <span className="gradient-text">Pricing</span></h2>
            <p className="text-white/50">Start free. Scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} animate={pricingInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-8 border relative ${p.popular ? 'border-ph-purple/50' : 'border-white/8'}`}
                style={{ boxShadow: p.popular ? '0 0 40px rgba(102,0,255,0.15)' : undefined }}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-white text-xl mb-1">{p.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-black text-4xl" style={{ color: p.color }}>{p.price}</span>
                </div>
                <p className="text-white/40 text-sm mb-6">{p.period}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                      <Check size={14} style={{ color: p.color }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${p.popular ? 'btn-primary text-white' : 'btn-secondary text-white'}`}>
                  {p.price === 'Custom' ? 'Contact Us' : 'Join Waitlist'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
