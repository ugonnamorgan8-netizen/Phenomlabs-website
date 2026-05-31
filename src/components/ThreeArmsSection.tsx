import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Code, Cpu, X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

function ZoomHeading() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Zoom in + fade in as section enters viewport — no blur
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])

  return (
    <div ref={ref} className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-[#83e7ee] text-sm font-semibold mb-6"
      >
        Our Ecosystem
      </motion.span>

      {/* Scroll-zoom headline */}
      <motion.h2
        style={{ scale, opacity }}
        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-5 tracking-tight leading-tight"
      >
        The PHENOM{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">
          Core
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-helix-accent/60 max-w-lg mx-auto font-medium text-lg"
      >
        Three specialized arms designed to transition Africa into an AI-first continent.{' '}
        <span className="text-[#83e7ee]/80">Click any card to learn more.</span>
      </motion.p>
    </div>
  )
}

const arms = [
  {
    id: 'learn',
    title: 'LEARN',
    icon: BookOpen,
    iconColor: '#83e7ee',
    subtitle: 'AI Education & Literacy',
    tagline: "Empowering Africa's next generation",
    description: 'Empowering the next generation of African talent with AI literacy and high-end tech skills.',
    color: 'from-helix-cyan/15 to-transparent',
    link: '/services',
    accent: '#83e7ee',
    fullDescription: `PHENOM LEARN is our flagship education and literacy arm, designed to close the AI skills gap across Africa. We deliver structured, outcome-driven training programs that transform complete beginners into confident AI practitioners.\n\nOur curriculum is built around practical application — not theory. Students leave with portfolios, certifications, and the confidence to deploy AI tools in their professional lives.`,
    offerings: [
      'AI Fundamentals & Core Concepts',
      'Prompt Engineering Mastery',
      'Python for Business Automation',
      'ChatGPT & LLM Tool Training',
      'AI Integration for SMEs',
      'Corporate AI Literacy Workshops',
    ],
    outcomes: [
      'Build your first AI automation in under 48 hours',
      'Understand how large language models work',
      'Deploy AI tools that save 10+ hours weekly',
      'Get certified as a PHENOM AI Practitioner',
    ],
    audience: 'Entrepreneurs, teams, students, and professionals who want to harness AI without becoming engineers.',
  },
  {
    id: 'build',
    title: 'BUILD',
    icon: Code,
    iconColor: '#0066cc',
    subtitle: 'AI Software Engineering',
    tagline: 'Custom intelligence, engineered for you',
    description: 'Engineering bespoke software and AI agents tailored for African business challenges.',
    color: 'from-helix-blue/20 to-transparent',
    link: '/services',
    accent: '#0066cc',
    fullDescription: `PHENOM BUILD is our software engineering and development arm. We design, architect, and ship production-grade software powered by AI — from intelligent web applications to full-scale SaaS platforms.\n\nWe work as a strategic technical partner, not just a vendor. Every project is shaped around your specific business context, users, and growth trajectory.`,
    offerings: [
      'Custom AI Agents & Chatbots',
      'Web & Mobile Applications',
      'SaaS Product Development',
      'Intelligent Workflow Systems',
      'API Integrations & Automation',
      'Web3 & Blockchain Solutions',
    ],
    outcomes: [
      'Ship production-ready software in weeks, not months',
      'Reduce manual processes by up to 80%',
      'Own scalable, maintainable codebases',
      'Get ongoing technical partnership and support',
    ],
    audience: 'Startups, SMEs, and enterprises needing serious technical capacity without the overhead of a full in-house team.',
  },
  {
    id: 'automate',
    title: 'AUTOMATE',
    icon: Cpu,
    iconColor: '#fcfcfc',
    subtitle: 'Efficiency at Scale',
    tagline: 'Your business on autopilot',
    description: 'Scaling efficiency with our flagship PHENOM OS and custom automation pipelines.',
    color: 'from-white/5 to-transparent',
    link: '/phenom-os',
    accent: '#fcfcfc',
    fullDescription: `PHENOM AUTOMATE is the operational intelligence arm of Phenom Labs. Through our flagship PHENOM OS platform and bespoke automation pipelines, we eliminate repetitive work and give business owners their time back.\n\nPHENOM OS functions as a Digital COO — managing customer pipelines, lead follow-ups, appointment scheduling, content generation, reporting, and more, all from one dashboard.`,
    offerings: [
      'PHENOM OS — Digital COO Platform',
      'WhatsApp Business Automation',
      'Lead Management & CRM Automation',
      'Sales Pipeline Workflows',
      'Report Generation & Analytics',
      'Custom Business Process Automation',
    ],
    outcomes: [
      'Reclaim 20+ hours per week in operational overhead',
      'Never miss a follow-up or lead again',
      'Run your business from a single intelligent dashboard',
      'Scale without proportionally scaling your team',
    ],
    audience: 'Business owners, operations managers, and sales teams who are drowning in manual processes.',
  },
]

type Arm = typeof arms[0]

function ArmModal({ arm, onClose }: { arm: Arm; onClose: () => void }) {
  const Icon = arm.icon
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0a121c]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#030811] border border-helix-stroke shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-[3px] w-full rounded-t-3xl" style={{ background: `linear-gradient(to right, transparent, ${arm.accent}, transparent)` }} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-7">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10" style={{ background: `rgba(255,255,255,0.05)` }}>
                <Icon size={28} style={{ color: arm.iconColor }} />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#83e7ee] mb-1">{arm.subtitle}</p>
                <h3 className="text-3xl font-bold text-white tracking-tight" >PHENOM {arm.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-helix-stroke text-helix-accent/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc] mb-4 leading-snug" >
            {arm.tagline}
          </p>

          <p className="text-white/80 text-base leading-relaxed mb-8 whitespace-pre-line font-medium" >
            {arm.fullDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#83e7ee] mb-4">What's Included</h4>
              <ul className="space-y-3">
                {arm.offerings.map(o => (
                  <li key={o} className="flex items-start gap-3 text-sm font-medium text-white/70" >
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: arm.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066cc] mb-4">What You Get</h4>
              <ul className="space-y-3">
                {arm.outcomes.map(o => (
                  <li key={o} className="flex items-start gap-3 text-sm font-medium text-white/70" >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: arm.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-5 mb-8 border border-helix-stroke bg-white/5">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#83e7ee] mb-2">Best For</p>
            <p className="text-sm font-medium text-white/70 leading-relaxed" >{arm.audience}</p>
          </div>

          <Link
            to={arm.link}
            onClick={onClose}
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all bg-[#0066cc] hover:bg-blue-600 shadow-lg shadow-[#0066cc]/20"
          >
            Explore {arm.title === 'AUTOMATE' ? 'PHENOM OS' : `PHENOM ${arm.title}`}
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}


export default function ThreeArmsSection() {
  const [activeArm, setActiveArm] = useState<Arm | null>(null)

  return (
    <section className="bg-helix-blue-dark relative" id="core-pillars">
      {/* Main Core Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #83e7ee 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ZoomHeading />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {arms.map((arm, index) => {
              const Icon = arm.icon
              return (
                <motion.button
                  key={arm.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveArm(arm)}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-helix-stroke hover:border-[#83e7ee]/40 transition-all duration-500 group relative overflow-hidden text-left cursor-pointer w-full shadow-xl shadow-black/10"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${arm.iconColor}15 0%, transparent 70%)` }} />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 border border-white/10 bg-white/5">
                      <Icon size={26} style={{ color: arm.iconColor }} />
                    </div>

                    <div className="mb-6">
                      <p className="text-[10px] font-mono font-bold tracking-widest text-[#83e7ee] uppercase mb-3">{arm.subtitle}</p>
                      <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#83e7ee] transition-colors" >
                        {arm.title}
                      </h4>
                    </div>

                    <p className="text-helix-accent/60 mb-8 font-medium leading-relaxed" >
                      {arm.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {arm.offerings.slice(0, 3).map(f => (
                        <li key={f} className="text-sm font-medium text-helix-accent/50 flex items-start gap-3" >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#0066cc]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#83e7ee] transition-colors" >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeArm && (
          <ArmModal arm={activeArm} onClose={() => setActiveArm(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
