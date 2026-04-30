import { motion } from 'framer-motion'
import { BookOpen, Code, Cpu, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const arms = [
  {
    title: 'LEARN',
    icon: <BookOpen className="text-ph-blue" size={32} />,
    subtitle: 'AI Education & Literacy',
    description: 'Empowering the next generation of African talent with AI literacy and high-end tech skills.',
    features: ['AI Fundamentals', 'Prompt Engineering', 'Python for Automation'],
    color: 'from-ph-blue/20 to-transparent',
    link: '/services#learn',
    accent: 'var(--ph-blue)'
  },
  {
    title: 'BUILD',
    icon: <Code className="text-ph-purple" size={32} />,
    subtitle: 'AI Software Engineering',
    description: 'Engineering bespoke software and AI agents tailored for African business challenges.',
    features: ['Custom AI Agents', 'Web3 & SaaS', 'Intelligent Workflows'],
    color: 'from-ph-purple/20 to-transparent',
    link: '/services#build',
    accent: 'var(--ph-purple)'
  },
  {
    title: 'AUTOMATE',
    icon: <Cpu className="text-ph-gold" size={32} />,
    subtitle: 'Efficiency at Scale',
    description: 'Scaling efficiency with our flagship PHENOM OS and custom automation pipelines.',
    features: ['PHENOM OS', 'Business Process AI', 'Workflow Optimization'],
    color: 'from-ph-gold/20 to-transparent',
    link: '/phenom-os',
    accent: 'var(--ph-gold)'
  }
]

export default function ThreeArmsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-blue mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            The PHENOM <span className="gradient-text-blue">Core</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Three specialized arms designed to transition Africa into an AI-first continent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arms.map((arm, index) => (
            <motion.div
              key={arm.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${arm.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/10">
                  {arm.icon}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xs font-mono tracking-[0.3em] text-white/40 uppercase mb-2">
                    {arm.subtitle}
                  </h3>
                  <h4 className="text-3xl font-bold text-white tracking-tighter flex items-center justify-between">
                    {arm.title}
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h4>
                </div>
                
                <p className="text-white/50 mb-10 leading-relaxed text-sm">
                  {arm.description}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {arm.features.map(f => (
                    <li key={f} className="text-xs font-medium text-white/40 flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={arm.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-ph-blue transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
