import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Monitor, HeartPulse, Cpu, BookOpen, TrendingUp, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const demos = [
  {
    id: 'lab-emr',
    icon: HeartPulse,
    iconColor: '#83e7ee', // helix-cyan
    category: 'HEALTHCARE',
    title: 'Lab EMR',
    subtitle: 'Electronic Medical Records System',
    description:
      'Experience the fully interactive medical portal handling automated patient registration, diagnostic reporting, digital prescriptions, and clinical notes at scale.',
    type: 'Live Demo',
    typeColor: '#83e7ee', // helix-cyan
    platforms: ['web'],
    ctaLabel: 'Launch EMR App',
    ctaLink: 'https://lab-emr-demo-production.up.railway.app/',
    isLive: true,
  },
  {
    id: 'dssp',
    icon: Cpu,
    iconColor: '#0066cc', // helix-blue
    category: 'AUTOMATION',
    title: 'DSSP Automation',
    subtitle: 'FRSC Compliance Workflow',
    description:
      'Explore the FRSC driver school registration and certificate generation pipeline. Fully automated compliance tracking that completely eliminates human bottleneck.',
    type: 'Live Demo',
    typeColor: '#83e7ee',
    platforms: ['web'],
    ctaLabel: 'Launch DSSP App',
    ctaLink: 'https://coachmorgan-dssp-automation.hf.space/',
    secondaryCtaLabel: 'Marvel Driving School Website',
    secondaryCtaLink: 'https://marveldrivingschoolng.lovable.app/',
    isLive: true,
  },
  {
    id: 'edugen',
    icon: BookOpen,
    iconColor: '#fcfcfc', // helix-accent
    category: 'EDTECH',
    title: 'EduGen AI',
    subtitle: 'AI Curriculum Generator',
    description:
      'AI-powered syllabus and learning paths engine. Auto-generates weekly course guides, quizzes, and pedagogy plans from single course subject prompts.',
    type: 'Preview / Sandbox',
    typeColor: '#f59e0b', // amber
    platforms: ['web'],
    ctaLabel: 'Request Preview',
    ctaLink: '/contact',
    isLive: false,
  },
  {
    id: 'trading',
    icon: TrendingUp,
    iconColor: '#0066cc',
    category: 'FINTECH',
    title: 'AI Trading Engine',
    subtitle: 'Algorithmic Strategy Dashboard',
    description:
      'Algorithmic trading engine powered by deep learning. Monitored real-time signal flows, trade execution states, and automated risk bounds for digital assets.',
    type: 'Preview / Sandbox',
    typeColor: '#f59e0b',
    platforms: ['web'],
    ctaLabel: 'Join Beta',
    ctaLink: '/contact',
    isLive: false,
  },
]

const demoStats = [
  { value: '6', label: 'Live Products' },
  { value: '3', label: 'Beta Previews' },
  { value: '5+', label: 'Industries Covered' },
]

export default function DemoHubSection() {
  const [showAll, setShowAll] = useState(false)

  const visibleDemos = showAll ? demos : demos.slice(0, 2)

  return (
    <section className="py-32 relative overflow-hidden bg-helix-blue-dark" id="demo-hub">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #83e7ee 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
          >
            <Play size={14} className="text-helix-cyan" />
            Demo Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white mb-6 leading-tight tracking-tight"
          >
            See It In<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">Action.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-helix-accent/60 max-w-lg mx-auto text-base leading-relaxed mb-12 font-medium"
          >
            Live demos, product previews, and walkthroughs — experience the intelligence before you commit.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="flex items-center justify-center gap-12"
          >
            {demoStats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[11px] font-mono font-medium uppercase tracking-widest text-helix-accent/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Demo Video Mockups list */}
        <div className="space-y-12 mb-16">
          <AnimatePresence initial={false}>
            {visibleDemos.map((demo) => {
              const Icon = demo.icon
              return (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-helix-blue-dark-2 rounded-3xl border border-helix-stroke hover:border-helix-cyan/40 transition-all duration-500 group overflow-hidden relative shadow-xl shadow-black/20"
                >
                  {/* Top shimmer line */}
                  <div className="h-[2px] w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${demo.iconColor}80, transparent)` }} />

                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                      {/* Mockup Frame */}
                      <div className="w-full lg:w-1/2 flex-shrink-0">
                        <div className="rounded-2xl border border-helix-stroke overflow-hidden relative bg-[#02050a]"
                          style={{ aspectRatio: '16/9' }}>
                          {/* Browser chrome */}
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-helix-stroke">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                            <div className="ml-3 flex-1 h-6 rounded-full border border-helix-stroke bg-white/5 flex items-center px-3">
                              <span className="text-[10px] font-mono text-helix-accent/40 font-medium">
                                {demo.id === 'lab-emr' && 'labs.phenomhq.com/emr'}
                                {demo.id === 'dssp' && 'labs.phenomhq.com/dssp'}
                                {demo.id === 'edugen' && 'labs.phenomhq.com/edugen'}
                                {demo.id === 'trading' && 'labs.phenomhq.com/trading'}
                              </span>
                            </div>
                          </div>

                          {/* Fake UI Screen based on Demo ID */}
                          {demo.id === 'lab-emr' && (
                            <div className="p-5 space-y-3">
                              <div className="flex gap-3">
                                <div className="w-24 h-full rounded-lg border border-helix-stroke bg-white/5 p-2.5 space-y-2">
                                  {['Dashboard', 'Patients', 'Diagnostics', 'Prescriptions'].map(item => (
                                    <div key={item} className="h-5 rounded flex items-center px-2" style={{ background: item === 'Dashboard' ? 'rgba(131,231,238,0.15)' : 'transparent' }}>
                                      <span className="text-[8px] font-mono font-medium text-helix-accent/60">{item}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="grid grid-cols-3 gap-2">
                                    {['Active Patients', 'Diagnoses', 'Queue'].map((s, idx) => (
                                      <div key={s} className="rounded-lg border border-helix-stroke p-2.5" style={{ background: 'rgba(131,231,238,0.05)' }}>
                                        <div className="text-[11px] font-bold text-white mb-0.5">{['142', '23', '8'][idx]}</div>
                                        <div className="text-[8px] font-mono font-medium text-helix-accent/50">{s}</div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="rounded-lg border border-helix-stroke bg-white/5 p-3 space-y-1.5">
                                    {['Nkechi Adeyemi — Consultation', 'Dr. Eze — Prescription Queued'].map(row => (
                                      <div key={row} className="flex items-center gap-2 h-6 rounded border border-helix-stroke px-2 bg-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#83e7ee' }} />
                                        <span className="text-[8px] font-mono font-medium text-helix-accent/50 truncate">{row}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {demo.id === 'dssp' && (
                            <div className="p-5 space-y-3">
                              <div className="flex gap-3">
                                <div className="w-24 h-full rounded-lg border border-helix-stroke bg-white/5 p-2.5 space-y-2">
                                  {['Overview', 'Schools', 'Certificates', 'Audit Logs'].map(item => (
                                    <div key={item} className="h-5 rounded flex items-center px-2" style={{ background: item === 'Overview' ? 'rgba(0,102,204,0.15)' : 'transparent' }}>
                                      <span className="text-[8px] font-mono font-medium text-helix-accent/60">{item}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex-1 space-y-3">
                                  <div className="grid grid-cols-3 gap-2">
                                    {['Registered', 'Certified', 'Time Saved'].map((s, idx) => (
                                      <div key={s} className="rounded-lg border border-helix-stroke p-2.5" style={{ background: 'rgba(0,102,204,0.05)' }}>
                                        <div className="text-[11px] font-bold text-white mb-0.5">{['18 Schools', '1.2k Students', '98%'][idx]}</div>
                                        <div className="text-[8px] font-mono font-medium text-helix-accent/50">{s}</div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="rounded-lg border border-helix-stroke bg-white/5 p-3 space-y-1.5">
                                    {['Marvel Driving School — Compliant', 'Certificate #FRSC-8921 Generated'].map(row => (
                                      <div key={row} className="flex items-center gap-2 h-6 rounded border border-helix-stroke px-2 bg-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#0066cc' }} />
                                        <span className="text-[8px] font-mono font-medium text-helix-accent/50 truncate">{row}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {demo.id === 'edugen' && (
                            <div className="p-5 space-y-3">
                              <div className="rounded-lg border border-helix-stroke bg-white/5 p-4 space-y-3">
                                <div className="flex items-center gap-2 justify-between">
                                  <span className="text-[9px] font-mono font-medium text-helix-accent/60">Prompt: "Grade 10 Algebra Syllabus"</span>
                                  <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded border border-helix-cyan/30 text-helix-cyan bg-helix-cyan/10">AI Core</span>
                                </div>
                                <div className="space-y-2">
                                  <div className="h-6 rounded border border-helix-stroke bg-white/5 flex items-center px-3 text-[9px] font-mono font-medium text-helix-accent/50">
                                    ✓ Week 1: Quadratic Equations Introduction
                                  </div>
                                  <div className="h-6 rounded border border-helix-stroke bg-white/5 flex items-center px-3 text-[9px] font-mono font-medium text-helix-accent/50">
                                    ✓ Week 2: Factoring and Solving Methods
                                  </div>
                                  <div className="h-6 rounded border border-helix-stroke bg-white/5 flex items-center px-3 text-[9px] font-mono font-medium text-helix-accent/50">
                                    ⚙ Week 3: Auto-generating assessment quizzes...
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {demo.id === 'trading' && (
                            <div className="p-5 space-y-3">
                              <div className="grid grid-cols-4 gap-2">
                                {['BTC/USDT', 'SOL/USDT', 'Risk Bound', 'Active Strategy'].map((s, idx) => (
                                  <div key={s} className="rounded-lg border border-helix-stroke p-3 text-center" style={{ background: 'rgba(0,102,204,0.05)' }}>
                                    <div className="text-[8px] font-mono font-medium text-helix-accent/50 mb-1">{s}</div>
                                    <div className="text-[11px] font-bold text-white">{['+3.8%', '-1.2%', 'Safe', 'Breakout'][idx]}</div>
                                  </div>
                                ))}
                              </div>
                              <div className="h-20 rounded-lg border border-helix-stroke bg-white/5 p-3 flex items-end justify-between gap-1">
                                {[30, 45, 25, 60, 80, 55, 90, 75, 85].map((h, i) => (
                                  <div key={i} className="w-full rounded-t bg-helix-blue/50" style={{ height: `${h}%` }} />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(3px)' }}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-helix-cyan/30"
                              style={{ background: `rgba(131,231,238,0.2)` }}>
                              <Play size={24} className="text-helix-cyan ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 pl-1">
                          <Monitor size={14} className="text-helix-accent/40" />
                          <span className="text-[10px] font-mono text-helix-accent/40 font-medium uppercase tracking-widest">Web Application Preview</span>
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                            style={{ background: `${demo.iconColor}15` }}>
                            <Icon size={22} style={{ color: demo.iconColor }} />
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-helix-accent/40">{demo.category}</span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border"
                            style={{ color: demo.typeColor, borderColor: `${demo.typeColor}40`, background: `${demo.typeColor}15` }}>
                            {demo.type}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-helix-cyan transition-colors">
                          {demo.title}
                        </h3>
                        <p className="text-sm font-mono font-medium text-helix-accent/50 mb-6 uppercase tracking-widest">{demo.subtitle}</p>
                        <p className="text-helix-accent/70 text-base leading-relaxed mb-8 font-medium">
                          {demo.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {demo.isLive ? (
                            <a href={demo.ctaLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-helix-blue text-white font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-helix-blue/20 flex items-center justify-center gap-2 group">
                              <span className="relative z-10 flex items-center gap-2">
                                {demo.ctaLabel} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </span>
                            </a>
                          ) : (
                            <Link to={demo.ctaLink} className="px-6 py-3 rounded-full bg-helix-blue text-white font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-helix-blue/20 flex items-center justify-center gap-2 group">
                              <span className="relative z-10 flex items-center gap-2">
                                {demo.ctaLabel} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </span>
                            </Link>
                          )}

                          {demo.secondaryCtaLink && (
                            <a href={demo.secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border-2 border-helix-stroke bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 group">
                              <span className="relative z-10 flex items-center gap-2">
                                <ExternalLink size={14} /> {demo.secondaryCtaLabel}
                              </span>
                            </a>
                          )}
                          {!demo.secondaryCtaLink && (
                            <Link to="/contact" className="px-6 py-3 rounded-full border-2 border-helix-stroke bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 group">
                              <span className="relative z-10 flex items-center gap-2">
                                <ExternalLink size={14} /> Schedule Walkthrough
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* View All / Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              setShowAll(!showAll)
              if (showAll) {
                document.getElementById('demo-hub')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 rounded-full border-2 border-helix-stroke bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? (
                <>
                  Show Less Demos <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All Product Demos <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </motion.div>

        {/* Custom request CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-helix-accent/50 text-sm mb-6 font-medium">
            Can't find what you're looking for? Request a custom demo built for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-helix-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-helix-blue/20 inline-flex items-center justify-center gap-2 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Custom System Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
