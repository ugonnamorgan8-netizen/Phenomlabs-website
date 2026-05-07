import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Code, Cpu, X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const arms = [
  {
    id: 'learn',
    title: 'LEARN',
    icon: BookOpen,
    iconColor: '#a78bfa',
    subtitle: 'AI Education & Literacy',
    tagline: "Empowering Africa's next generation",
    description: 'Empowering the next generation of African talent with AI literacy and high-end tech skills.',
    color: 'from-ph-purple/15 to-transparent',
    link: '/services',
    accent: '#a78bfa',
    fullDescription: `PHENOM LEARN is our flagship education and literacy arm, designed to close the AI skills gap across Africa. We deliver structured, outcome-driven training programs that transform complete beginners into confident AI practitioners.

Our curriculum is built around practical application — not theory. Students leave with portfolios, certifications, and the confidence to deploy AI tools in their professional lives.`,
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
    iconColor: '#c4b5fd',
    subtitle: 'AI Software Engineering',
    tagline: 'Custom intelligence, engineered for you',
    description: 'Engineering bespoke software and AI agents tailored for African business challenges.',
    color: 'from-ph-purple/20 to-transparent',
    link: '/services',
    accent: '#c4b5fd',
    fullDescription: `PHENOM BUILD is our software engineering and development arm. We design, architect, and ship production-grade software powered by AI — from intelligent web applications to full-scale SaaS platforms.

We work as a strategic technical partner, not just a vendor. Every project is shaped around your specific business context, users, and growth trajectory.`,
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
    iconColor: '#ede9fe',
    subtitle: 'Efficiency at Scale',
    tagline: 'Your business on autopilot',
    description: 'Scaling efficiency with our flagship PHENOM OS and custom automation pipelines.',
    color: 'from-white/5 to-transparent',
    link: '/phenom-os',
    accent: '#e2e8f0',
    fullDescription: `PHENOM AUTOMATE is the operational intelligence arm of Phenom Labs. Through our flagship PHENOM OS platform and bespoke automation pipelines, we eliminate repetitive work and give business owners their time back.

PHENOM OS functions as a Digital COO — managing customer pipelines, lead follow-ups, appointment scheduling, content generation, reporting, and more, all from one dashboard.`,
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        className="modal-panel no-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-[3px] w-full rounded-t-2xl" style={{ background: `linear-gradient(to right, transparent, ${arm.accent}, transparent)` }} />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-7">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/8" style={{ background: `rgba(124,58,237,0.12)` }}>
                <Icon size={28} style={{ color: arm.iconColor }} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-1">{arm.subtitle}</p>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>PHENOM {arm.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:bg-white/8 transition-all flex-shrink-0"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tagline */}
          <p className="text-lg font-semibold text-white/85 mb-4 leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
            {arm.tagline}
          </p>

          {/* Full description */}
          <p className="text-white/50 text-sm leading-relaxed mb-7 whitespace-pre-line" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {arm.fullDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-8">
            {/* Offerings */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/25 mb-4">What's Included</h4>
              <ul className="space-y-2.5">
                {arm.offerings.map(o => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-white/65" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: arm.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/25 mb-4">What You Get</h4>
              <ul className="space-y-2.5">
                {arm.outcomes.map(o => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-white/65" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: arm.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Audience */}
          <div className="rounded-xl p-4 mb-7 border border-white/6" style={{ background: 'rgba(124,58,237,0.06)' }}>
            <p className="text-xs font-mono uppercase tracking-widest text-white/25 mb-2">Best For</p>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{arm.audience}</p>
          </div>

          {/* CTA */}
          <Link
            to={arm.link}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
          >
            Explore {arm.title === 'AUTOMATE' ? 'PHENOM OS' : `PHENOM ${arm.title}`}
            <ArrowRight size={15} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ThreeArmsSection() {
  const [activeArm, setActiveArm] = useState<Arm | null>(null)

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Subtle purple orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 tag-purple"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
          >
            The PHENOM <span className="gradient-text-purple">Core</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/45 max-w-lg mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem' }}
          >
            Three specialized arms designed to transition Africa into an AI-first continent.{' '}
            <span className="text-white/60">Click any card to learn more.</span>
          </motion.p>
        </div>

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
                className="glass-morphism rounded-3xl p-8 border border-white/6 hover:border-ph-purple/20 transition-all duration-500 group relative overflow-hidden text-left cursor-pointer w-full"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)` }} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-400 border border-white/8"
                    style={{ background: 'rgba(124,58,237,0.1)' }}>
                    <Icon size={26} style={{ color: arm.iconColor }} />
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-mono tracking-[0.25em] text-white/30 uppercase mb-2">{arm.subtitle}</p>
                    <h4 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {arm.title}
                    </h4>
                  </div>

                  <p className="text-white/45 mb-7 leading-relaxed text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {arm.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {arm.offerings.slice(0, 3).map(f => (
                      <li key={f} className="text-xs text-white/35 flex items-center gap-2.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ph-purple-light/70 group-hover:text-ph-purple-light transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Learn More
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeArm && (
          <ArmModal arm={activeArm} onClose={() => setActiveArm(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
