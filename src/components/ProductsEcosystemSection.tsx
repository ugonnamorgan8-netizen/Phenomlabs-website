import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Cpu, TrendingUp, BookOpen, GitBranch, Zap } from 'lucide-react'

const products = [
  {
    id: 'lab-emr',
    title: 'Lab EMR',
    icon: HeartPulse,
    iconColor: '#83e7ee', // helix-cyan
    status: 'Live',
    statusColor: '#83e7ee',
    statusBg: 'rgba(131,231,238,0.1)',
    statusBorder: 'rgba(131,231,238,0.3)',
    description:
      'A full-featured Electronic Medical Records system built for African healthcare providers. Streamlines patient intake, diagnostics, prescriptions, and record management.',
    tags: ['Healthcare', 'EMR', 'Diagnostics'],
    cta: 'View Product',
    ctaLink: '/services',
  },
  {
    id: 'dssp-automation',
    title: 'DSSP Automation',
    icon: Cpu,
    iconColor: '#0066cc', // helix-blue
    status: 'Live',
    statusColor: '#83e7ee',
    statusBg: 'rgba(131,231,238,0.1)',
    statusBorder: 'rgba(131,231,238,0.3)',
    description:
      'Our flagship FRSC driving school automation platform. Reduces compliance tracking from hours to minutes with zero human error and full audit trails.',
    tags: ['Process Automation', 'Compliance', 'FRSC'],
    cta: 'Learn More',
    ctaLink: '/portfolio',
  },
  {
    id: 'ai-trading-engine',
    title: 'AI Trading Engine',
    icon: TrendingUp,
    iconColor: '#fcfcfc', // helix-accent
    status: 'Beta',
    statusColor: '#f59e0b',
    statusBg: 'rgba(245,158,11,0.1)',
    statusBorder: 'rgba(245,158,11,0.25)',
    description:
      'Intelligent algorithmic trading system powered by machine learning. Analyzes market signals, executes strategies, and manages risk in real time for fintech operators.',
    tags: ['Fintech', 'ML', 'Trading'],
    cta: 'Join Beta',
    ctaLink: '/contact',
  },
  {
    id: 'edugen-ai',
    title: 'EduGen AI',
    icon: BookOpen,
    iconColor: '#83e7ee', // helix-cyan
    status: 'Beta',
    statusColor: '#f59e0b',
    statusBg: 'rgba(245,158,11,0.1)',
    statusBorder: 'rgba(245,158,11,0.25)',
    description:
      'AI-powered educational content generation platform. Creates curricula, lesson plans, quizzes, and personalized learning paths at scale for schools and edtech providers.',
    tags: ['EdTech', 'AI Generation', 'Curriculum'],
    cta: 'Request Access',
    ctaLink: '/contact',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    icon: GitBranch,
    iconColor: '#0066cc', // helix-blue
    status: 'In Development',
    statusColor: '#0066cc',
    statusBg: 'rgba(0,102,204,0.1)',
    statusBorder: 'rgba(0,102,204,0.3)',
    description:
      'Modular automation pipeline builder for business operations. Connect CRMs, ERPs, communication tools, and data systems without writing a single line of code.',
    tags: ['No-Code', 'Integrations', 'Operations'],
    cta: 'Get Notified',
    ctaLink: '/contact',
  },
  {
    id: 'phenom-os',
    title: 'PHENOM OS',
    icon: Zap,
    iconColor: '#fcfcfc', // helix-accent
    status: 'Live',
    statusColor: '#83e7ee',
    statusBg: 'rgba(131,231,238,0.1)',
    statusBorder: 'rgba(131,231,238,0.3)',
    description:
      'Your Digital COO. An intelligent business operating system that manages pipelines, lead follow-ups, appointments, content generation, and reporting — all from one dashboard.',
    tags: ['Business OS', 'CRM', 'Automation'],
    cta: 'Explore PHENOM OS',
    ctaLink: '/phenom-os',
  },
]

export default function ProductsEcosystemSection() {
  return (
    <section className="py-32 bg-helix-blue-dark relative overflow-hidden" id="products">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #0066cc 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
            >
              Products Ecosystem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              Intelligent Tools<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">Built for Scale.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-helix-accent/60 mt-5 max-w-lg text-base leading-relaxed font-medium"
            >
              From healthcare EMRs to AI trading engines — our product suite powers industries that demand precision, speed, and intelligence.
            </motion.p>
          </div>
          <Link
            to="/services"
            className="group flex items-center gap-2 text-sm font-semibold text-helix-accent/50 hover:text-helix-cyan transition-colors flex-shrink-0"
          >
            All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-helix-blue-dark-2 rounded-3xl p-8 border border-helix-stroke hover:border-helix-cyan/30 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-xl shadow-black/20"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(0,102,204,0.1) 0%, transparent 60%)' }} />

                {/* Top row: icon + status */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-105 transition-transform duration-500">
                    <Icon size={26} style={{ color: product.iconColor }} />
                  </div>
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{
                      color: product.statusColor,
                      background: product.statusBg,
                      border: `1px solid ${product.statusBorder}`,
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-helix-cyan transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-helix-accent/50 text-base leading-relaxed mb-6 font-medium">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map(tag => (
                      <span key={tag}
                        className="text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded-full text-helix-accent/40 border border-helix-stroke bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={product.ctaLink}
                  className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-helix-cyan/80 group-hover:text-helix-cyan transition-colors"
                >
                  {product.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
