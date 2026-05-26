import { motion } from 'framer-motion'
import { FlaskConical, Atom, Layers, TerminalSquare, BrainCircuit, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'agentic-mesh',
    icon: BrainCircuit,
    iconColor: '#a78bfa',
    status: 'ACTIVE RESEARCH',
    statusColor: '#a78bfa',
    title: 'Agentic AI Mesh',
    description:
      'A multi-agent coordination framework enabling autonomous AI agents to collaborate, delegate, and resolve complex tasks across distributed business systems.',
    tags: ['Agents', 'LLM Orchestration', 'Distributed AI'],
  },
  {
    id: 'edgellm',
    icon: Layers,
    iconColor: '#818cf8',
    status: 'PROTOTYPE',
    statusColor: '#818cf8',
    title: 'EdgeLLM Deploy',
    description:
      'Local-first LLM inference pipeline optimized for low-bandwidth African environments. Enables AI applications to run without cloud dependency.',
    tags: ['Edge Computing', 'Local AI', 'Inference'],
  },
  {
    id: 'biosynth',
    icon: Atom,
    iconColor: '#34d399',
    status: 'EXPLORATORY',
    statusColor: '#34d399',
    title: 'BioSynth AI',
    description:
      'AI-assisted diagnostic support system that interprets lab results, cross-references patient history, and surfaces anomaly alerts for healthcare providers.',
    tags: ['Healthcare AI', 'Diagnostics', 'Biomedical'],
  },
  {
    id: 'codeweave',
    icon: TerminalSquare,
    iconColor: '#fbbf24',
    status: 'PROTOTYPE',
    statusColor: '#fbbf24',
    title: 'CodeWeave Studio',
    description:
      'AI-native code generation environment for African developers. Context-aware, trained on local tech stacks, and integrated with our educational platform.',
    tags: ['AI Coding', 'Developer Tools', 'EdTech'],
  },
  {
    id: 'nlp-localization',
    icon: FlaskConical,
    iconColor: '#f472b6',
    status: 'ACTIVE RESEARCH',
    statusColor: '#f472b6',
    title: 'NLP Localization Engine',
    description:
      'Natural language processing pipeline designed to understand and respond in Nigerian Pidgin, Yoruba, Igbo, and Hausa — bringing local language AI to Africa.',
    tags: ['NLP', 'African Languages', 'Linguistics AI'],
  },
]

export default function ResearchLabSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="research" style={{ background: '#050505' }}>

      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-2 absolute inset-0 opacity-60" />
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03] blur-[180px]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-5 tag-purple"
          >
            <FlaskConical size={12} className="text-ph-purple-light" />
            Research & Innovation Lab
          </motion.span>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.06]"
                style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}
              >
                The Lab Never<br />
                <span className="gradient-text-brand">Stops Running.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/35 mt-5 max-w-lg text-base leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Beyond client work, our internal R&D lab explores experimental AI architectures, prototype systems, and breakthrough technologies that push the frontier of what's possible on the continent.
              </motion.p>
            </div>

            {/* Terminal badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0 glass-morphism rounded-2xl px-6 py-4 border border-white/8"
            >
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/25 mb-2">Lab Status</p>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-mono text-emerald-400/80">5 projects active</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="glass-morphism rounded-3xl p-7 border border-white/6 hover:border-ph-purple/20 transition-all duration-500 group relative overflow-hidden flex flex-col"
                style={{ cursor: 'none' }}
                whileHover={{ y: -5 }}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${project.iconColor}10 0%, transparent 65%)` }} />

                {/* Top */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center border border-white/8 group-hover:scale-105 transition-transform duration-400"
                    style={{ background: 'rgba(124,58,237,0.1)' }}>
                    <Icon size={24} style={{ color: project.iconColor }} />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.statusColor,
                      borderColor: `${project.statusColor}30`,
                      background: `${project.statusColor}0f`,
                    }}>
                    {project.status}
                  </span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ph-purple-light transition-colors duration-300"
                    style={{ fontFamily: 'Sora, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-white/38 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag}
                        className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full text-white/25 border border-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* "Your idea here" card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.08, duration: 0.65 }}
            viewport={{ once: true }}
            className="rounded-3xl p-7 border border-dashed border-white/10 hover:border-ph-purple/30 transition-all duration-500 group flex flex-col items-center justify-center text-center min-h-[240px]"
            style={{ cursor: 'none' }}
            whileHover={{ y: -5 }}
          >
            <FlaskConical size={32} className="text-white/15 mb-4 group-hover:text-ph-purple-light/30 transition-colors" />
            <h4 className="text-white/30 font-bold mb-2 group-hover:text-white/50 transition-colors"
              style={{ fontFamily: 'Sora, sans-serif' }}>
              Upcoming Research
            </h4>
            <p className="text-white/18 text-xs mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              More projects launching soon from our innovation lab
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white/20 hover:text-ph-purple-light transition-colors"
            >
              Collaborate with us <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
