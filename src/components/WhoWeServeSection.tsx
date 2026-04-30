import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, HeartPulse, Building2, Rocket, Globe } from 'lucide-react'

const industries = [
  { 
    icon: <GraduationCap className="text-ph-blue" size={24} />, 
    label: 'Education', 
    desc: 'Empowering institutions with AI literacy and smart student management.' 
  },
  { 
    icon: <Briefcase className="text-ph-purple" size={24} />, 
    label: 'Corporate', 
    desc: 'Streamlining operations and decision-making through bespoke automation.' 
  },
  { 
    icon: <HeartPulse className="text-ph-blue-light" size={24} />, 
    label: 'Healthcare', 
    desc: 'Leveraging AI for predictive diagnostics and efficient patient care data.' 
  },
  { 
    icon: <Building2 className="text-ph-gold" size={24} />, 
    label: 'Public Sector', 
    desc: 'Modernizing governance with intelligent process and data automation.' 
  },
  { 
    icon: <Rocket className="text-ph-blue" size={24} />, 
    label: 'Startups', 
    desc: 'Accelerating product cycles with AI-first engineering and tooling.' 
  },
  { 
    icon: <Globe className="text-ph-purple" size={24} />, 
    label: 'Pan-African', 
    desc: 'Building cross-border solutions for the continent’s unique challenges.' 
  },
]

export default function WhoWeServeSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-blue mb-4 block"
            >
              Strategic Sectors
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tighter"
            >
              Intelligence For <span className="gradient-text-blue">Every Domain</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-xs text-sm font-mono uppercase tracking-widest leading-relaxed"
          >
            We deploy tactical AI across diverse ecosystems to drive continental growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-10 border border-white/5 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-ph-blue/10 transition-colors duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-ph-blue transition-colors">
                {item.label}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
              
              <div className="absolute bottom-8 right-8 text-[10px] font-mono text-white/10 group-hover:text-ph-blue/40 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
