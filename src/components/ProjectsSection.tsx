import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'FRSC Training Automation',
    category: 'PROCESS AUTOMATION',
    description: 'Reduced driving school compliance tracking from hours to under 5 minutes with zero human error.',
    impact: '98% Time Saved',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000',
    link: 'https://dssp-automation-production.up.railway.app/'
  },
  {
    title: 'Lab EMR Clinical Deployment',
    category: 'DIGITAL HEALTH / EMR',
    description: 'Full-scale clinical implementation automating patient intake, lab workflows, and medical records.',
    impact: '100% Digital Intake',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    link: 'https://lab-emr-demo-production.up.railway.app/'
  },
  {
    title: 'Marvel Student System',
    category: 'EDTECH PLATFORM',
    description: 'Strategic management system orchestrating school operations for high-growth academies.',
    impact: 'Ops Streamlined',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
    link: 'https://marveldrivingschoolng.lovable.app/'
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-helix-blue-dark relative overflow-hidden" id="case-studies">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #83e7ee 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              Real World <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">Intelligence.</span>
            </motion.h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-2 text-sm font-semibold text-helix-accent/50 hover:text-helix-cyan transition-colors"
          >
            View All Projects <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group block"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-7 border border-helix-stroke shadow-xl shadow-black/20"
                style={{ background: '#02050a' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-black/30 to-transparent opacity-90" />

                {/* Cyan/Blue overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,102,204,0.3) 0%, transparent 60%)' }} />

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 bg-white/10 backdrop-blur-md border border-helix-cyan/30">
                  <ExternalLink size={20} className="text-white" />
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono font-bold text-helix-cyan uppercase tracking-widest">{p.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono font-medium text-helix-accent/50">{p.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-helix-cyan transition-colors">{p.title}</h3>
                </div>
              </div>

              <div className="px-2">
                <p className="text-helix-accent/60 text-base leading-relaxed mb-6 font-medium max-w-[300px]">
                  {p.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-helix-accent/40">Impact</span>
                  <span className="text-sm font-bold text-white uppercase tracking-wide">{p.impact}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
