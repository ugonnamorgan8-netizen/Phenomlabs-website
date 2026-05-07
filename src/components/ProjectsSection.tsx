import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'FRSC Training Automation',
    category: 'PROCESS AUTOMATION',
    description: 'Reduced compliance tracking from hours to under 5 minutes with zero human error.',
    impact: '98% Time Saved',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Abia Telehealth Hub',
    category: 'DIGITAL HEALTH',
    description: 'A comprehensive medical gateway delivering AI-assisted consultations to millions.',
    impact: 'Healthcare Digitized',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Marvel Student System',
    category: 'EDTECH PLATFORM',
    description: 'Strategic management system orchestrating school operations for high-growth academies.',
    impact: 'Ops Streamlined',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000'
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-5 tag-purple"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
            >
              Real World <br />
              <span className="gradient-text-purple">Intelligence.</span>
            </motion.h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/35 hover:text-white transition-colors"
          >
            View All Projects <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-none"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-7 border border-white/6"
                style={{ background: '#0f0f0f' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-45 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Purple overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(76,29,149,0.25) 0%, transparent 60%)' }} />

                <div className="absolute top-7 right-7 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 scale-75 group-hover:scale-100"
                  style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <ExternalLink size={18} className="text-white" />
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-[9px] font-mono text-ph-purple-light/70 uppercase tracking-widest">{p.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-[9px] font-mono text-white/30">{p.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{p.title}</h3>
                </div>
              </div>

              <div className="px-1">
                <p className="text-white/38 text-sm leading-relaxed mb-5 max-w-[280px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {p.description}
                </p>
                <div className="flex items-center gap-3.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/18">Impact</span>
                  <span className="text-xs font-semibold text-white uppercase tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>{p.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
