import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CTABannerSection from '../components/CTABannerSection'

import { Globe, Zap, Target, Unlock } from 'lucide-react'

const values = [
  { icon: Globe, title: 'Africa First', desc: 'Every solution we build is designed with African realities, budgets, and infrastructure in mind. We solve real problems.' },
  { icon: Zap, title: 'AI-First Always', desc: 'We embed AI into everything — from how we work to what we build. No legacy thinking, only future-forward solutions.' },
  { icon: Target, title: 'Results Over Process', desc: 'We measure success by client outcomes, not effort. We deliver what we promise and own every result.' },
  { icon: Unlock, title: 'Radical Transparency', desc: 'Clear pricing, honest timelines, and straightforward communication. No jargon, no surprises.' },
]

const skills = ['AI Automation', 'Prompt Engineering', 'Python', 'Playwright', 'React', 'Node.js', 'Web Development', 'Workflow Automation', 'ChatGPT', 'Gemini AI', 'Make.com', 'Zapier']

const timeline = [
  { year: '2024', event: 'Started learning AI automation and prompt engineering independently' },
  { year: '2025', event: 'Completed first client project — FRSC DSSP Training Automation for Marvel Driving School' },
  { year: '2025', event: 'Delivered Abia Telehealth System and Marvel Student Management System' },
  { year: '2026', event: 'Founded PHENOM LABS officially — launched three company arms' },
  { year: '2026', event: "PHENOM OS development begins — Africa's first AI Business OS" },
]

export default function AboutPage() {
  const { ref: valuesRef, inView: valuesInView } = useInView()
  const { ref: timelineRef, inView: timelineInView } = useInView()

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y, scale }}
            className="w-full h-full opacity-30"
          >
            {/* Human-designed abstract background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
            <div className="dot-grid absolute inset-0 opacity-40" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
            <div className="mb-6">
              <span className="tag-purple">About Us</span>
            </div>
            <h1 className="font-display text-6xl sm:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              Africa's <span className="gradient-text-brand">AI Company</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Built in Awka, Anambra State. Designed for the World.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-ph-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-purple/60 mb-4 block font-bold">Our Story</span>
              <h2 className="font-display text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
                Built from Ambition, Driven by Purpose
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <p>PHENOM LABS was born out of a simple but powerful observation: African businesses — schools, hospitals, small enterprises — are operating without the intelligent tools they need to compete in a fast-moving world.</p>
                <p>Our founder, Morgan Ugonna Thankgod, saw this gap and decided not to wait for someone else to fix it. Starting with self-taught AI automation skills, he delivered real projects for real clients before PHENOM LABS was even officially named.</p>
                <p>Today, PHENOM LABS operates as three specialized arms — PHENOM LEARN, PHENOM BUILD, and the upcoming PHENOM OS — each targeting a different layer of Africa's AI readiness gap.</p>
                <p>We are not just building products. We are building Africa's AI future, one solution at a time.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Founded', value: '2026' },
                  { label: 'Projects Delivered', value: '3+' },
                  { label: 'Service Areas', value: 'Nigeria + Africa' },
                  { label: 'Response Time', value: '< 1 Hour' },
                ].map(s => (
                  <div key={s.label} className="glass rounded-2xl p-8 border border-white/5 text-center group hover:border-ph-purple/30 transition-all duration-500">
                    <div className="font-display font-bold text-4xl text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{s.value}</div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="aurora-1 absolute inset-0 pointer-events-none opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="tag-purple mb-4">The Team</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Meet the <span className="gradient-text-brand">Founder</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-3xl p-12 border border-white/5 text-center relative overflow-hidden group">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-ph-purple/5 to-transparent pointer-events-none" />
              
              {/* Avatar */}
              <div className="w-32 h-32 rounded-[2.5rem] mx-auto mb-8 flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-ph-purple/20 group-hover:scale-105 transition-transform duration-500"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4c1d95)' }}>
                M
              </div>
              <h3 className="font-display font-bold text-white text-3xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Morgan Ugonna Thankgod</h3>
              <p className="text-ph-purple-light font-bold text-sm uppercase tracking-[0.2em] mb-6">Founder & CEO, PHENOM LABS</p>
              <div className="flex flex-col items-center gap-2 mb-8">
                <p className="text-white/40 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>AI Automation Engineer · Prompt Engineer · Front-End Developer</p>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] text-white/30 font-mono">📍 Awka, Anambra State, Nigeria</span>
                </div>
              </div>
              <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                A self-taught AI engineer passionate about using technology to solve real African problems. Morgan built his first automation client project in 2025 and went on to deliver three full production systems before founding PHENOM LABS in 2026.
              </p>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map(s => (
                  <span key={s} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-bold uppercase tracking-wider">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-32 bg-ph-space relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-purple mb-4">Milestones</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Our <span className="gradient-text-brand">Journey</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-ph-purple via-ph-purple/40 to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={timelineInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.12 }}
                  className="flex gap-10 pl-14 relative group">
                  <div className="absolute left-[18px] top-2 w-2.5 h-2.5 rounded-full border border-ph-purple bg-black shadow-[0_0_15px_rgba(124,58,237,0.6)] group-hover:scale-125 transition-transform" />
                  <div>
                    <span className="text-xs font-mono text-ph-purple-light font-black uppercase tracking-widest">{t.year}</span>
                    <p className="text-white/60 text-base mt-2 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="tag-purple mb-4">Principles</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Our <span className="gradient-text-brand">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 25 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-10 border border-white/5 hover:border-ph-purple/30 transition-all duration-500 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-ph-purple-light">
                  <v.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{v.title}</h3>
                <p className="text-white/45 text-base leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABannerSection />
    </main>
  )
}
