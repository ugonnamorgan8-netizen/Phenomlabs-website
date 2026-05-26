import { motion } from 'framer-motion'
import { HeartPulse, GraduationCap, TrendingUp, Brain, Settings, ArrowRight, Building2 } from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    iconColor: '#83e7ee', // helix-cyan
    title: 'Healthcare & Biotech',
    subtitle: 'Clinical Intelligence',
    description:
      'We deploy AI-powered EMR systems, telehealth infrastructure, and predictive diagnostics that reduce administrative burden and improve patient outcomes across Africa\'s healthcare institutions.',
    capabilities: ['Electronic Medical Records', 'Telehealth Platforms', 'Clinical Data Analytics', 'Patient Flow Automation'],
    accent: '#83e7ee',
  },
  {
    icon: GraduationCap,
    iconColor: '#0066cc', // helix-blue
    title: 'EdTech & Learning',
    subtitle: 'Intelligent Education',
    description:
      'From AI-generated curricula to smart student management systems, we help schools, universities, and edtech platforms deliver personalized education at scale.',
    capabilities: ['AI Content Generation', 'Student Management Systems', 'E-Learning Infrastructure', 'Assessment Automation'],
    accent: '#0066cc',
  },
  {
    icon: TrendingUp,
    iconColor: '#fcfcfc', // helix-accent
    title: 'Finance & Fintech',
    subtitle: 'Precision Markets',
    description:
      'Our AI trading engines and fintech automation tools help financial institutions analyze data faster, execute strategies intelligently, and manage risk with precision.',
    capabilities: ['Algorithmic Trading Systems', 'Risk Assessment AI', 'KYC Automation', 'Financial Reporting'],
    accent: '#fcfcfc',
  },
  {
    icon: Brain,
    iconColor: '#83e7ee',
    title: 'AI Infrastructure',
    subtitle: 'Foundation Layer',
    description:
      'We architect the underlying AI systems — from custom LLM integrations to vector databases and agentic workflows — that power the next generation of intelligent applications.',
    capabilities: ['Custom AI Agent Development', 'LLM Integration & Fine-tuning', 'Vector DB Architecture', 'MLOps & Deployment'],
    accent: '#83e7ee',
  },
  {
    icon: Settings,
    iconColor: '#0066cc',
    title: 'Business Automation',
    subtitle: 'Operational Intelligence',
    description:
      'End-to-end workflow automation that eliminates repetitive work, connects your business tools, and gives operations teams real-time visibility into every process.',
    capabilities: ['CRM & ERP Integration', 'Sales Pipeline Automation', 'Reporting & Analytics', 'Custom Process Workflows'],
    accent: '#0066cc',
  },
  {
    icon: Building2,
    iconColor: '#83e7ee',
    title: 'Public Sector',
    subtitle: 'Governance Modernization',
    description:
      'Modernizing government departments and public agencies with smart compliance software, digitized workflow pipelines, and automated reporting systems.',
    capabilities: ['Compliance & Audit Software', 'Workflow Digitization', 'Secure Document Processing', 'FRSC Integration Portals'],
    accent: '#83e7ee',
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-32 bg-[#02050a] relative overflow-hidden" id="industries">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,102,204,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
          >
            Strategic Sectors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Where Intelligence<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">Meets Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-helix-accent/60 max-w-xl mx-auto text-base leading-relaxed font-medium"
          >
            We apply intelligent systems within the sectors where they matter most — from clinical workflows to trading floors, transforming operational bottlenecks into seamless, automated pipelines.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-helix-stroke hover:border-helix-cyan/40 transition-all duration-500 group overflow-hidden shadow-xl shadow-black/10"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start">

                    {/* Left: Icon + title */}
                    <div className="flex items-center gap-6 lg:w-64 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-105 transition-transform duration-500">
                        <Icon size={28} style={{ color: industry.iconColor }} />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-helix-accent/40 mb-1">
                          {industry.subtitle}
                        </p>
                        <h3 className="text-2xl font-bold text-white group-hover:text-helix-cyan transition-colors duration-300">
                          {industry.title}
                        </h3>
                      </div>
                    </div>

                    {/* Center: Description */}
                    <div className="flex-1">
                      <p className="text-helix-accent/60 text-base leading-relaxed font-medium">
                        {industry.description}
                      </p>
                    </div>

                    {/* Right: Capabilities */}
                    <div className="lg:w-72 flex-shrink-0">
                      <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-helix-accent/40 mb-4">
                        Capabilities
                      </p>
                      <ul className="space-y-3">
                        {industry.capabilities.map(cap => (
                          <li key={cap} className="flex items-center gap-3 text-sm font-medium text-helix-accent/60">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 shadow-[0_0_6px_currentColor]" style={{ background: industry.accent, color: industry.accent }} />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center border border-helix-cyan/30 bg-helix-cyan/10">
                        <ArrowRight size={20} className="text-helix-cyan" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Accent line on hover */}
                <div className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${industry.accent}66, transparent)` }} />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
