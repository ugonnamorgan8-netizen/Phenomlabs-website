import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'FRSC Training Automation',
    category: 'PROCESS AUTOMATION',
    description: 'Reduced compliance tracking from hours to under 5 minutes with zero human error.',
    impact: '98% Time Saved',
    color: '#0066FF',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Abia Telehealth Hub',
    category: 'DIGITAL HEALTH',
    description: 'A comprehensive medical gateway delivering AI-assisted consultations to millions.',
    impact: 'Healthcare Digitized',
    color: '#6600FF',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Marvel Student System',
    category: 'EDTECH PLATFORM',
    description: 'Strategic management system orchestrating school operations for high-growth academies.',
    impact: 'Ops Streamlined',
    color: '#FFB800',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000'
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-blue mb-4 block"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.9]"
            >
              Real World <br />
              <span className="gradient-text-blue">Intelligence.</span>
            </motion.h2>
          </div>
          <Link to="/portfolio" className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">
            View All Projects <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-none"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 glass-morphism border-white/5 ring-1 ring-white/10">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-nav border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                  <ExternalLink size={20} className="text-white" />
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-ph-blue uppercase tracking-widest">{p.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono text-white/40">{p.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{p.title}</h3>
                </div>
              </div>

              <div className="px-4">
                <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-[280px]">
                  {p.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">Impact</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{p.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
