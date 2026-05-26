import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, HeartPulse, Cpu, BookOpen, Server, Clock, Tag } from 'lucide-react'

const buildLogs = [
  {
    id: 'lab-emr-deploy',
    icon: HeartPulse,
    iconColor: '#f472b6',
    category: 'HEALTHCARE',
    date: 'Q1 2026',
    readTime: '6 min read',
    title: 'Deploying Lab EMR: From Spec to Production in 6 Weeks',
    excerpt:
      'How we designed, engineered, and deployed a full-featured Electronic Medical Records system for a Nigerian teaching hospital — handling patient data, labs, prescriptions, and clinical notes.',
    tags: ['EMR', 'Healthcare', 'System Architecture', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'frsc-automation',
    icon: Cpu,
    iconColor: '#a78bfa',
    category: 'PROCESS AUTOMATION',
    date: '2025',
    readTime: '4 min read',
    title: 'FRSC Driving School Compliance: 98% Time Saved',
    excerpt:
      'A deep-dive into the DSSP automation pipeline that reduced FRSC compliance tracking from hours to under 5 minutes with zero human error and full audit trails.',
    tags: ['Automation', 'FRSC', 'Workflow', 'Zero-Error'],
    featured: false,
  },
  {
    id: 'ai-education-gen',
    icon: BookOpen,
    iconColor: '#818cf8',
    category: 'EDTECH',
    date: '2025',
    readTime: '5 min read',
    title: 'Building an AI-Generated Curriculum Engine with EduGen',
    excerpt:
      'Engineering the content pipeline behind EduGen AI — how we combine LLMs, structured data schemas, and pedagogical frameworks to auto-generate school curricula at scale.',
    tags: ['AI Generation', 'EdTech', 'LLM', 'Curriculum'],
    featured: false,
  },
  {
    id: 'telehealth-infra',
    icon: Server,
    iconColor: '#34d399',
    category: 'INFRASTRUCTURE',
    date: '2025',
    readTime: '7 min read',
    title: 'Abia Telehealth: Infrastructure Engineering at Healthcare Scale',
    excerpt:
      'A technical breakdown of the infrastructure decisions — real-time consultations, encrypted patient data, offline-capable PWA design, and multi-provider dashboards.',
    tags: ['Infrastructure', 'Telehealth', 'Real-Time', 'Encryption'],
    featured: false,
  },
]

export default function BuildLogsSection() {
  const [featured, ...rest] = buildLogs

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="build-logs">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-5 tag-purple"
            >
              Build Logs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
            >
              How We Built<br />
              <span className="gradient-text-purple">The Impossible.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/38 mt-5 text-base leading-relaxed max-w-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Engineering breakdowns, deployment stories, and technical retrospectives from our real-world project work.
            </motion.p>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/35 hover:text-white transition-colors flex-shrink-0"
          >
            View Portfolio <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="glass-morphism rounded-3xl border border-white/6 hover:border-ph-purple/20 transition-all duration-500 group overflow-hidden mb-5 relative"
          style={{ cursor: 'none' }}
          whileHover={{ y: -4 }}
        >
          {/* Top accent */}
          <div className="h-[2px] w-full" style={{ background: 'linear-gradient(to right, transparent, #a78bfa40, transparent)' }} />

          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left icon column */}
              <div className="flex-shrink-0">
                <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center border border-white/8 group-hover:scale-105 transition-transform duration-400"
                  style={{ background: 'rgba(244,114,182,0.1)' }}>
                  <featured.icon size={30} style={{ color: featured.iconColor }} />
                </div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-ph-purple-light/60">{featured.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/15" />
                  <span className="text-[9px] font-mono text-white/25">{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/15" />
                  <span className="flex items-center gap-1 text-[9px] font-mono text-white/25">
                    <Clock size={9} /> {featured.readTime}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/10 text-white/30">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-ph-purple-light transition-colors duration-300"
                  style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>
                  {featured.title}
                </h3>
                <p className="text-white/40 text-base leading-relaxed mb-6 max-w-2xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded-full text-white/25 border border-white/8">
                      <Tag size={8} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden lg:flex items-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/4">
                  <ArrowUpRight size={18} className="text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((log, i) => {
            const Icon = log.icon
            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-7 border border-white/6 hover:border-ph-purple/15 transition-all duration-500 group flex flex-col relative overflow-hidden"
                style={{ cursor: 'none' }}
                whileHover={{ y: -4 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/8"
                    style={{ background: 'rgba(124,58,237,0.1)' }}>
                    <Icon size={18} style={{ color: log.iconColor }} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/25">{log.category}</p>
                    <p className="text-[9px] font-mono text-white/20">{log.date} · {log.readTime}</p>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-3 group-hover:text-ph-purple-light transition-colors duration-300 flex-1 relative z-10"
                  style={{ fontFamily: 'Sora, sans-serif', lineHeight: 1.3 }}>
                  {log.title}
                </h4>
                <p className="text-white/35 text-sm leading-relaxed mb-5 relative z-10"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {log.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {log.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full text-white/22 border border-white/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
