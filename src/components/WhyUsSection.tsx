import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, Rocket } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="text-ph-purple-light" size={26} />,
    title: 'Certified & Proven',
    desc: 'Expertise backed by world-class certifications and a portfolio of real-world AI implementations.'
  },
  {
    icon: <Zap className="text-ph-purple-light" size={26} />,
    title: 'AI-First DNA',
    desc: 'Every workflow we engineer leverages the latest LLMs and automation agents for maximum velocity.'
  },
  {
    icon: <Globe className="text-ph-purple-light" size={26} />,
    title: 'Built for Africa',
    desc: 'Localized intelligence that understands African business nuances, language, and infrastructure.'
  },
  {
    icon: <Rocket className="text-ph-purple-light" size={26} />,
    title: 'End-to-End Delivery',
    desc: "We don't just consult. We ship production-ready systems and provide ongoing tactical support."
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(124,58,237,0.04)', position: 'absolute', borderRadius: '50%', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-block mb-5 tag-purple">Superior Edge</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-7 leading-[1.1]" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>
              Why Leaders <br />
              <span className="gradient-text-purple">Partner With Us</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We bridge the gap between AI hype and business reality. Our approach is tactical, localized, and relentlessly focused on ROI.
            </p>

            <div className="flex items-center gap-5 p-5 rounded-2xl glass-morphism border border-white/6">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(124,58,237,0.15)' }}>
                <ShieldCheck className="text-ph-purple-light" size={22} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>98% Retention Rate</h4>
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest">Client satisfaction across 5 nations</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-7 border border-white/6 hover:border-ph-purple/15 transition-all duration-400 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-400"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.15)' }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-2.5" style={{ fontFamily: 'Sora, sans-serif' }}>{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
