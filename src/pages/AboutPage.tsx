import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CTABannerSection from '../components/CTABannerSection'

const values = [
  { emoji: '🌍', title: 'Africa First', desc: 'Every solution we build is designed with African realities, budgets, and infrastructure in mind. We solve real problems.' },
  { emoji: '⚡', title: 'AI-First Always', desc: 'We embed AI into everything — from how we work to what we build. No legacy thinking, only future-forward solutions.' },
  { emoji: '🎯', title: 'Results Over Process', desc: 'We measure success by client outcomes, not effort. We deliver what we promise and own every result.' },
  { emoji: '🔓', title: 'Radical Transparency', desc: 'Clear pricing, honest timelines, and straightforward communication. No jargon, no surprises.' },
]

const skills = ['AI Automation', 'Prompt Engineering', 'Python', 'Playwright', 'React', 'Node.js', 'Web Development', 'Workflow Automation', 'ChatGPT', 'Gemini AI', 'Make.com', 'Zapier']

const timeline = [
  { year: '2024', event: 'Started learning AI automation and prompt engineering independently' },
  { year: '2025', event: 'Completed first client project — FRSC DSSP Training Automation for Marvel Driving School' },
  { year: '2025', event: 'Delivered Abia Telehealth System and Marvel Student Management System' },
  { year: '2026', event: 'Founded PHENOM LABS officially — launched three company arms' },
  { year: '2026', event: 'PHENOM OS development begins — Africa\'s first AI Business OS' },
]

export default function AboutPage() {
  const { ref: valuesRef, inView: valuesInView } = useInView()
  const { ref: timelineRef, inView: timelineInView } = useInView()

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.img 
            src="/assets/africa_ai_network.png" 
            alt="3D Africa AI Network" 
            style={{ y, scale }}
            className="w-full h-[120%] object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-ph-violet border border-ph-violet/30 bg-ph-violet/10 mb-6 uppercase tracking-widest">
              About Us
            </span>
            <h1 className="font-display text-6xl sm:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Africa's <span className="gradient-text-brand">AI Company</span>
            </h1>
            <p className="text-white/70 text-2xl max-w-2xl mx-auto font-light">
              Built in Awka, Anambra State. Designed for the World.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-ph-violet text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Built from Ambition, Driven by Purpose
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
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
                  <div key={s.label} className="glass rounded-xl p-5 border border-white/8 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="font-display font-black text-3xl gradient-text-brand mb-1">{s.value}</div>
                    <p className="text-white/50 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-ph-violet text-sm font-semibold tracking-widest uppercase mb-3">The Team</p>
            <h2 className="font-display text-4xl font-bold text-white">Meet the <span className="gradient-text-brand">Founder</span></h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/8 text-center card-hover-glow">
              {/* Avatar */}
              <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
                M
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-1">Morgan Ugonna Thankgod</h3>
              <p className="gradient-text-brand font-semibold mb-4">Founder & CEO, PHENOM LABS</p>
              <p className="text-white/50 text-sm mb-2">AI Automation Engineer · Prompt Engineer · Front-End Developer</p>
              <p className="text-white/40 text-xs mb-6 font-mono">📍 Awka, Anambra State, Nigeria</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A self-taught AI engineer passionate about using technology to solve real African problems. Morgan built his first automation client project in 2025 and went on to deliver three full production systems before founding PHENOM LABS in 2026.
              </p>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map(s => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-ph-violet/10 border border-ph-violet/30 text-ph-violet">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">Our <span className="gradient-text-brand">Journey</span></h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, #7C3AED, #A855F7)' }} />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={timelineInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.12 }}
                  className="flex gap-6 pl-14 relative group hover:scale-[1.02] transition-transform">
                  <div className="absolute left-[17px] top-1.5 w-3 h-3 rounded-full border-2 border-ph-violet bg-black shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                  <div>
                    <span className="text-xs font-mono text-ph-violet font-bold">{t.year}</span>
                    <p className="text-white/65 text-sm mt-1 leading-relaxed">{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white text-center mb-12">Our <span className="gradient-text-brand">Values</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 25 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-7 border border-white/8 card-hover-glow">
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-display font-bold text-white text-xl mb-2">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABannerSection />
    </main>
  )
}
