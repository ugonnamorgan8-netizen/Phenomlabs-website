import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CTABannerSection from '../components/CTABannerSection'

const projects = [
  {
    title: 'FRSC DSSP Training Automation',
    category: 'Automation',
    tag: 'Python + Playwright',
    description: 'Automated end-to-end FRSC DSSP training compliance tracking for Marvel Driving School. The system logs daily training sessions, generates compliance reports, and flags missing entries automatically.',
    problem: 'Staff spent 2–3 hours daily manually checking and filing FRSC training records across multiple spreadsheets.',
    result: 'Full automation reduced daily compliance work to under 5 minutes with zero human error.',
    tech: ['Python', 'Playwright', 'Automation', 'FRSC API'],
    color: '#a78bfa',
    stat: { label: 'Time Saved Daily', value: '95%' },
  },
  {
    title: 'Abia Telehealth System',
    category: 'Web Development',
    tag: 'Healthcare Platform',
    description: 'A full-stack AI-assisted telehealth web platform enabling digital medical consultations, patient record management, and appointment scheduling for healthcare providers in Abia State, Nigeria.',
    problem: 'Patients in rural Abia communities lacked access to consistent healthcare due to geographic and infrastructure barriers.',
    result: 'Digital platform enabling remote consultations, cutting patient wait times and expanding healthcare reach significantly.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AI Integration'],
    color: '#7c3aed',
    stat: { label: 'Healthcare Reach', value: '10x' },
  },
  {
    title: 'Marvel Student Management System',
    tag: 'Education Technology',
    category: 'Web Development',
    description: 'Complete web-based student data management system for Marvel Secondary School covering enrollment, fee tracking, academic records, staff management, and term-end report generation.',
    problem: 'School administration was entirely paper-based — enrollment, fees, and records were scattered across physical files.',
    result: 'All school operations centralized into one digital platform, eliminating paperwork and improving data accuracy.',
    tech: ['React', 'Express', 'MySQL', 'PDF Generation'],
    color: '#4c1d95',
    stat: { label: 'Admin Efficiency', value: '80%↑' },
  },
]

const filters = ['All', 'Automation', 'Web Development', 'AI Systems']

function ProjectCard({ project, inView, i }: { project: typeof projects[0]; inView: boolean; i: number }) {
  // 3D Tilt Effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.6 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl overflow-hidden border border-white/8 card-hover-glow hover:-translate-y-2 transition-all duration-300 group transform-gpu"
    >
      {/* Header banner */}
      <div className="h-48 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}25 0%, ${project.color}08 100%)` }}>
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-black text-7xl opacity-[0.06] text-white select-none tracking-tight">
            {project.title.split(' ').map(w => w[0]).join('')}
          </span>
        </div>
        {/* Stat badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg glass border border-white/10">
          <p className="text-[10px] text-white/40 mb-0.5 font-bold uppercase tracking-widest">{project.stat.label}</p>
          <p className="font-display font-bold text-lg" style={{ color: project.color }}>{project.stat.value}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }} />
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-mono px-3 py-1 rounded-full border uppercase tracking-widest font-bold"
            style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}>
            {project.tag}
          </span>
        </div>
        <h3 className="font-display font-bold text-white text-xl mb-4 leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>{project.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.description}</p>

        {/* Problem / Result */}
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <p className="text-[10px] text-white/30 font-bold mb-2 uppercase tracking-[0.2em]">THE CHALLENGE</p>
            <p className="text-white/60 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-ph-purple/5 border border-ph-purple/10">
            <p className="text-[10px] text-ph-purple-light/50 font-bold mb-2 uppercase tracking-[0.2em]">THE OUTCOME</p>
            <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.result}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/40 font-medium uppercase tracking-wider">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView()

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y, scale }}
            className="w-full h-full opacity-30"
          >
            {/* Human-designed abstract background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.1)_0%,transparent_50%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
            <div className="dot-grid absolute inset-0 opacity-40" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
            <div className="mb-6">
              <span className="tag-purple">Our Impact</span>
            </div>
            <h1 className="font-display text-6xl sm:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              Real Work. <br />
              <span className="gradient-text-brand">Real Results.</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every project we deliver solves a real African business problem with precision-built AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 py-6 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-widest border ${
                  active === f
                    ? 'bg-white text-black border-white'
                    : 'text-white/40 hover:text-white bg-white/5 border-white/10 hover:bg-white/10'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <section ref={ref} className="py-24 bg-ph-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((p, i) => <ProjectCard key={p.title} project={p} inView={inView} i={i} />)}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-32 text-white/20">
              <div className="text-4xl mb-6">🚧</div>
              <p className="font-display text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>More projects coming soon</p>
              <p className="text-sm mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>We're constantly building new solutions.</p>
            </div>
          )}
        </div>
      </section>

      <CTABannerSection />
    </main>
  )
}
