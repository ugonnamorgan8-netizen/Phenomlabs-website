import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Cpu, Users, Code2, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    iconColor: '#83e7ee', // helix-cyan
    title: 'AI Training Bootcamps',
    duration: '4–12 weeks',
    level: 'Beginner → Advanced',
    description:
      'Structured, outcome-driven programs that take students from zero to deploying production-ready AI automations. Covering LLMs, prompt engineering, Python, and AI integration.',
    outcomes: ['Build your first AI system in 48 hrs', 'Earn PHENOM AI Practitioner certification', 'Deploy tools saving 10+ hours weekly'],
  },
  {
    icon: Cpu,
    iconColor: '#0066cc', // helix-blue
    title: 'Automation Workshops',
    duration: '1–3 days',
    level: 'All Levels',
    description:
      'Intensive hands-on workshops teaching teams to automate their most time-consuming processes using no-code and low-code AI tools, workflow builders, and API integrations.',
    outcomes: ['Automate 3+ business processes live', 'Connect tools with zero code', 'Team productivity gains from day one'],
  },
  {
    icon: Users,
    iconColor: '#fcfcfc', // helix-accent
    title: 'Tech Mentorship',
    duration: 'Ongoing',
    level: 'Career Builders',
    description:
      'One-on-one and cohort mentorship with experienced PHENOM Labs engineers. For developers, founders, and professionals looking to transition into AI-driven careers.',
    outcomes: ['Personal roadmap & accountability', 'Portfolio project reviews', 'Career transition support'],
  },
  {
    icon: Code2,
    iconColor: '#83e7ee',
    title: 'Coding Classes',
    duration: '8–16 weeks',
    level: 'Beginner → Intermediate',
    description:
      'Practical coding courses focused on Python, web development, and AI application building. Designed for aspiring developers who want real-world project experience.',
    outcomes: ['Build 5+ portfolio projects', 'Land your first developer role', 'Learn industry-standard tooling'],
  },
  {
    icon: FileText,
    iconColor: '#0066cc',
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
    <section className="py-32 bg-[#030811] relative overflow-hidden" id="learning">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.05] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #83e7ee 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
          >
            Learning & Training
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-tight tracking-tight mb-6"
          >
            We Don't Just Build.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">We Teach.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-helix-accent/60 text-base leading-relaxed mb-10 font-medium max-w-xl"
          >
            Phenom Labs is both a builder and an educator. Our training programs, mentorship tracks, and content systems close the AI skills gap and prepare the next generation of African innovators.
          </motion.p>
          <Link to="/services" className="px-8 py-3.5 rounded-full border-2 border-helix-stroke bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 group">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-helix-stroke hover:border-helix-cyan/40 transition-all duration-500 group flex flex-col relative overflow-hidden shadow-xl shadow-black/10"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${program.iconColor}15 0%, transparent 70%)` }} />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-105 transition-transform duration-500 relative z-10 bg-white/5">
                  <Icon size={26} style={{ color: program.iconColor }} />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-widest px-2.5 py-1 rounded-full text-helix-accent/50 border border-helix-stroke bg-white/5">
                    {program.duration}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-helix-cyan/80">
                    {program.level}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-helix-cyan transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-helix-accent/60 text-base leading-relaxed mb-6 font-medium">
                    {program.description}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-3">
                    {program.outcomes.map(outcome => (
                      <li key={outcome} className="flex items-start gap-3 text-sm font-medium text-helix-accent/50">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: program.iconColor }} />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl p-10 border border-helix-stroke flex flex-col sm:flex-row items-center justify-between gap-8 bg-helix-blue-dark-2/50 backdrop-blur-md shadow-2xl"
        >
          <div>
            <h4 className="text-white font-bold text-2xl mb-2">
              Ready to upskill your team or organisation?
            </h4>
            <p className="text-helix-accent/60 text-base font-medium">
              We offer custom training packages for corporates, schools, and government agencies.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-helix-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-helix-blue/20 inline-flex items-center justify-center gap-2 group flex-shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Custom Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
