import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, HeartPulse, Building2, Rocket, Globe } from 'lucide-react'

const industries = [
  {
    icon: <GraduationCap size={22} />,
    label: 'Education',
    desc: 'Empowering institutions with AI literacy and smart student management.'
  },
  {
    icon: <Briefcase size={22} />,
    label: 'Corporate',
    desc: 'Streamlining operations and decision-making through bespoke automation.'
  },
  {
    icon: <HeartPulse size={22} />,
    label: 'Healthcare',
    desc: 'Leveraging AI for predictive diagnostics and efficient patient care data.'
  },
  {
    icon: <Building2 size={22} />,
    label: 'Public Sector',
    desc: 'Modernizing governance with intelligent process and data automation.'
  },
  {
    icon: <Rocket size={22} />,
    label: 'Startups',
    desc: 'Accelerating product cycles with AI-first engineering and tooling.'
  },
  {
    icon: <Globe size={22} />,
    label: 'Pan-African',
    desc: "Building cross-border solutions for the continent's unique challenges."
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
              viewport={{ once: true }}
              className="inline-block mb-5 tag-purple"
            >
              Strategic Sectors
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              Intelligence For <span className="gradient-text-purple">Every Domain</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/35 max-w-xs text-sm leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We deploy tactical AI across diverse ecosystems to drive continental growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group p-9 bg-black hover:bg-white/[0.02] transition-all duration-400 relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-ph-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-colors duration-400"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.12)' }}>
                <span className="text-ph-purple-light">{item.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-ph-purple-light transition-colors"
                style={{ fontFamily: 'Sora, sans-serif' }}>
                {item.label}
              </h3>

              <p className="text-white/38 text-sm leading-relaxed max-w-[240px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {item.desc}
              </p>

              <div className="absolute bottom-7 right-7 text-[10px] font-mono text-white/8 group-hover:text-ph-purple/25 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
