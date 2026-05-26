import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartPulse, Cpu, TrendingUp, BookOpen, GitBranch, Zap } from 'lucide-react'

const products = [
  {
    id: 'lab-emr',
    title: 'Lab EMR',
    icon: HeartPulse,
    iconColor: '#a78bfa',
    status: 'Live',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.1)',
    statusBorder: 'rgba(34,197,94,0.25)',
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
    iconColor: '#c4b5fd',
    status: 'Live',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.1)',
    statusBorder: 'rgba(34,197,94,0.25)',
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
    iconColor: '#fbbf24',
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
    iconColor: '#818cf8',
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
    iconColor: '#e2e8f0',
    status: 'In Development',
    statusColor: '#a78bfa',
    statusBg: 'rgba(124,58,237,0.1)',
    statusBorder: 'rgba(124,58,237,0.3)',
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
    iconColor: '#ede9fe',
    status: 'Live',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.1)',
    statusBorder: 'rgba(34,197,94,0.25)',
    description:
      'Your Digital COO. An intelligent business operating system that manages pipelines, lead follow-ups, appointments, content generation, and reporting — all from one dashboard.',
    tags: ['Business OS', 'CRM', 'Automation'],
    cta: 'Explore PHENOM OS',
    ctaLink: '/phenom-os',
  },
]

export default function ProductsEcosystemSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="products">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-5 tag-purple"
            >
              Products Ecosystem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
            >
              Intelligent Tools<br />
              <span className="gradient-text-purple">Built for Scale.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-white/40 mt-5 max-w-lg text-base leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              From healthcare EMRs to AI trading engines — our product suite powers industries that demand precision, speed, and intelligence.
            </motion.p>
          </div>
          <Link
            to="/services"
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/35 hover:text-white transition-colors flex-shrink-0"
          >
            All Products <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="glass-morphism rounded-3xl p-7 border border-white/6 hover:border-ph-purple/20 transition-all duration-500 group relative overflow-hidden flex flex-col"
                style={{ cursor: 'none' }}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

                {/* Top row: icon + status */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center border border-white/8 group-hover:scale-105 transition-transform duration-400"
                    style={{ background: 'rgba(124,58,237,0.1)', width: '52px', height: '52px' }}>
                    <Icon size={24} style={{ color: product.iconColor }} />
                  </div>
                  <span
                    className="text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ph-purple-light transition-colors duration-300"
                    style={{ fontFamily: 'Sora, sans-serif' }}>
                    {product.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {product.tags.map(tag => (
                      <span key={tag}
                        className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full text-white/30 border border-white/8"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={product.ctaLink}
                  className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold text-ph-purple-light/70 group-hover:text-ph-purple-light transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {product.cta}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
