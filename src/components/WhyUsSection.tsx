import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, Rocket } from 'lucide-react'

const features = [
  { 
    icon: <ShieldCheck className="text-ph-blue" size={28} />, 
    title: 'Certified & Proven', 
    desc: 'Expertise backed by world-class certifications and a portfolio of real-world AI implementations.' 
  },
  { 
    icon: <Zap className="text-ph-purple" size={28} />, 
    title: 'AI-First DNA', 
    desc: 'Every workflow we engineer leverages the latest LLMs and automation agents for maximum velocity.' 
  },
  { 
    icon: <Globe className="text-ph-blue-light" size={28} />, 
    title: 'Built for Africa', 
    desc: 'Localized intelligence that understands African business nuances, language, and infrastructure.' 
  },
  { 
    icon: <Rocket className="text-ph-gold" size={28} />, 
    title: 'End-to-End Delivery', 
    desc: 'We don’t just consult. We ship production-ready systems and provide ongoing tactical support.' 
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-ph-blue/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-blue mb-4 block">
              Superior Edge
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Why Leaders <br />
              <span className="gradient-text-blue">Partner With Us</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-12">
              We bridge the gap between AI hype and business reality. Our approach is tactical, localized, and relentlessly focused on ROI.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-3xl glass-morphism border-white/5">
              <div className="w-12 h-12 rounded-full bg-ph-blue/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-ph-blue" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">98% Retention Rate</h4>
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest">Client satisfaction across 5 nations</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/10">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3 tracking-tight">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
