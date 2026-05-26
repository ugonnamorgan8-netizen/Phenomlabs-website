import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Cpu, Users, Code2, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    iconColor: '#a78bfa',
    title: 'AI Training Bootcamps',
    duration: '4–12 weeks',
    level: 'Beginner → Advanced',
    description:
      'Structured, outcome-driven programs that take students from zero to deploying production-ready AI automations. Covering LLMs, prompt engineering, Python, and AI integration.',
    outcomes: ['Build your first AI system in 48 hrs', 'Earn PHENOM AI Practitioner certification', 'Deploy tools saving 10+ hours weekly'],
  },
  {
    icon: Cpu,
    iconColor: '#c4b5fd',
    title: 'Automation Workshops',
    duration: '1–3 days',
    level: 'All Levels',
    description:
      'Intensive hands-on workshops teaching teams to automate their most time-consuming processes using no-code and low-code AI tools, workflow builders, and API integrations.',
    outcomes: ['Automate 3+ business processes live', 'Connect tools with zero code', 'Team productivity gains from day one'],
  },
  {
    icon: Users,
    iconColor: '#818cf8',
    title: 'Tech Mentorship',
    duration: 'Ongoing',
    level: 'Career Builders',
    description:
      'One-on-one and cohort mentorship with experienced PHENOM Labs engineers. For developers, founders, and professionals looking to transition into AI-driven careers.',
    outcomes: ['Personal roadmap & accountability', 'Portfolio project reviews', 'Career transition support'],
  },
  {
    icon: Code2,
    iconColor: '#fbbf24',
    title: 'Coding Classes',
    duration: '8–16 weeks',
    level: 'Beginner → Intermediate',
    description:
      'Practical coding courses focused on Python, web development, and AI application building. Designed for aspiring developers who want real-world project experience.',
    outcomes: ['Build 5+ portfolio projects', 'Land your first developer role', 'Learn industry-standard tooling'],
  },
  {
    icon: FileText,
    iconColor: '#34d399',
    title: 'Educational Content Systems',
    duration: 'Enterprise',
    level: 'Institutions',
    description:
      'AI-powered content generation infrastructure for schools and edtech platforms. We build the systems that create, manage, and deliver personalized educational content at scale.',
    outcomes: ['Generate curricula in minutes', 'Auto-grade and adapt content', 'Scale to thousands of learners'],
  },
]

export default function LearningSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="learning">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-1 absolute inset-0 opacity-40" />
        <div className="dot-grid absolute inset-0 opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-5 tag-purple"
          >
            Learning & Training
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
          >
            We Don't Just Build.<br />
            <span className="gradient-text-purple">We Teach.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Phenom Labs is both a builder and an educator. Our training programs, mentorship tracks, and content systems close the AI skills gap and prepare the next generation of African innovators.
          </motion.p>
          <Link to="/services" className="btn-premium-outline inline-flex items-center gap-2 group">
            <span className="relative z-10 flex items-center gap-2 text-sm">
              Explore All Programs <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="glass-morphism rounded-3xl p-7 border border-white/6 hover:border-ph-purple/20 transition-all duration-500 group flex flex-col relative overflow-hidden"
                style={{ cursor: 'none' }}
                whileHover={{ y: -4 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center top, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />

                {/* Icon */}
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 border border-white/8 group-hover:scale-105 transition-transform duration-400 relative z-10"
                  style={{ background: 'rgba(124,58,237,0.1)', width: '52px', height: '52px' }}>
                  <Icon size={24} style={{ color: program.iconColor }} />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full text-white/30 border border-white/8">
                    {program.duration}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">
                    {program.level}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ph-purple-light transition-colors duration-300"
                    style={{ fontFamily: 'Sora, sans-serif' }}>
                    {program.title}
                  </h3>
                  <p className="text-white/38 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {program.description}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-2">
                    {program.outcomes.map(outcome => (
                      <li key={outcome} className="flex items-start gap-2 text-xs text-white/35"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: program.iconColor, opacity: 0.6 }} />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-2xl p-8 border border-white/6 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(124,58,237,0.05)' }}
        >
          <div>
            <h4 className="text-white font-bold text-lg mb-1.5" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to upskill your team or organisation?
            </h4>
            <p className="text-white/35 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We offer custom training packages for corporates, schools, and government agencies.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-premium group flex-shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Custom Quote <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
