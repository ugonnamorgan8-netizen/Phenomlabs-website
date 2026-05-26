import { motion } from 'framer-motion'
import { HeartPulse, GraduationCap, TrendingUp, Brain, Settings, ArrowRight, Building2 } from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    iconColor: '#f472b6',
    title: 'Healthcare',
    subtitle: 'Clinical Intelligence',
    description:
      'We deploy AI-powered EMR systems, telehealth infrastructure, and predictive diagnostics that reduce administrative burden and improve patient outcomes across Africa\'s healthcare institutions.',
    capabilities: ['Electronic Medical Records', 'Telehealth Platforms', 'Clinical Data Analytics', 'Patient Flow Automation'],
    accent: '#f472b6',
  },
  {
    icon: GraduationCap,
    iconColor: '#818cf8',
    title: 'Education',
    subtitle: 'Intelligent Learning',
    description:
      'From AI-generated curricula to smart student management systems, we help schools, universities, and edtech platforms deliver personalized education at scale.',
    capabilities: ['AI Content Generation', 'Student Management Systems', 'E-Learning Infrastructure', 'Assessment Automation'],
    accent: '#818cf8',
  },
  {
    icon: TrendingUp,
    iconColor: '#fbbf24',
    title: 'Finance & Fintech',
    subtitle: 'Precision Markets',
    description:
      'Our AI trading engines and fintech automation tools help financial institutions analyze data faster, execute strategies intelligently, and manage risk with precision.',
    capabilities: ['Algorithmic Trading Systems', 'Risk Assessment AI', 'KYC Automation', 'Financial Reporting'],
    accent: '#fbbf24',
  },
  {
    icon: Brain,
    iconColor: '#a78bfa',
    title: 'AI Infrastructure',
    subtitle: 'Foundation Layer',
    description:
      'We architect the underlying AI systems — from custom LLM integrations to vector databases and agentic workflows — that power the next generation of intelligent applications.',
    capabilities: ['Custom AI Agent Development', 'LLM Integration & Fine-tuning', 'Vector DB Architecture', 'MLOps & Deployment'],
    accent: '#a78bfa',
  },
  {
    icon: Settings,
    iconColor: '#c4b5fd',
    title: 'Business Automation',
    subtitle: 'Operational Intelligence',
    description:
      'End-to-end workflow automation that eliminates repetitive work, connects your business tools, and gives operations teams real-time visibility into every process.',
    capabilities: ['CRM & ERP Integration', 'Sales Pipeline Automation', 'Reporting & Analytics', 'Custom Process Workflows'],
    accent: '#c4b5fd',
  },
  {
    icon: Building2,
    iconColor: '#22c55e',
    title: 'Public Sector',
    subtitle: 'Governance Modernization',
    description:
      'Modernizing government departments and public agencies with smart compliance software, digitized workflow pipelines, and automated reporting systems.',
    capabilities: ['Compliance & Audit Software', 'Workflow Digitization', 'Secure Document Processing', 'FRSC Integration Portals'],
    accent: '#22c55e',
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="industries">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-5 tag-purple"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
          >
            Where Intelligence<br />
            <span className="gradient-text-purple">Meets Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We apply intelligent systems within the sectors where they matter most — from clinical workflows to trading floors.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl border border-white/6 hover:border-white/10 transition-all duration-500 group overflow-hidden"
                style={{ cursor: 'none' }}
              >
                <div className="p-7 lg:p-9">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start">

                    {/* Left: Icon + title */}
                    <div className="flex items-center gap-5 lg:w-56 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/8 group-hover:scale-105 transition-transform duration-400"
                        style={{ background: 'rgba(124,58,237,0.1)' }}>
                        <Icon size={26} style={{ color: industry.iconColor }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-0.5">
                          {industry.subtitle}
                        </p>
                        <h3 className="text-xl font-bold text-white group-hover:text-ph-purple-light transition-colors duration-300"
                          style={{ fontFamily: 'Sora, sans-serif' }}>
                          {industry.title}
                        </h3>
                      </div>
                    </div>

                    {/* Center: Description */}
                    <div className="flex-1">
                      <p className="text-white/45 text-sm leading-relaxed"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {industry.description}
                      </p>
                    </div>

                    {/* Right: Capabilities */}
                    <div className="lg:w-72 flex-shrink-0">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/25 mb-3">
                        Capabilities
                      </p>
                      <ul className="space-y-2">
                        {industry.capabilities.map(cap => (
                          <li key={cap} className="flex items-center gap-2.5 text-xs text-white/40"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: industry.accent }} />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/4">
                        <ArrowRight size={16} className="text-white/50" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Accent line on hover */}
                <div className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${industry.accent}33, transparent)` }} />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
