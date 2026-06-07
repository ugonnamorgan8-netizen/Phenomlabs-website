import { motion } from 'framer-motion'
import { FlaskConical, Atom, Layers, TerminalSquare, BrainCircuit, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'agentic-mesh',
    icon: BrainCircuit,
    iconColor: '#83e7ee', // helix-cyan
    status: 'ACTIVE RESEARCH',
    statusColor: '#83e7ee',
    title: 'Agentic AI Mesh',
    description:
      'A multi-agent coordination framework enabling autonomous AI agents to collaborate, delegate, and resolve complex tasks across distributed business systems.',
    tags: ['Agents', 'LLM Orchestration', 'Distributed AI'],
  },
  {
    id: 'edgellm',
    icon: Layers,
    iconColor: '#0066cc', // helix-blue
    status: 'PROTOTYPE',
    statusColor: '#0066cc',
    title: 'EdgeLLM Deploy',
    description:
      'Local-first LLM inference pipeline optimized for low-bandwidth African environments. Enables AI applications to run without cloud dependency.',
    tags: ['Edge Computing', 'Local AI', 'Inference'],
  },
  {
    id: 'biosynth',
    icon: Atom,
    iconColor: '#fcfcfc', // helix-accent
    status: 'EXPLORATORY',
    statusColor: '#fcfcfc',
    title: 'BioSynth AI',
    description:
      'AI-assisted diagnostic support system that interprets lab results, cross-references patient history, and surfaces anomaly alerts for healthcare providers.',
    tags: ['Healthcare AI', 'Diagnostics', 'Biomedical'],
  },
  {
    id: 'codeweave',
    icon: TerminalSquare,
    iconColor: '#83e7ee', // helix-cyan
    status: 'PROTOTYPE',
    statusColor: '#83e7ee',
    title: 'CodeWeave Studio',
    description:
      'AI-native code generation environment for African developers. Context-aware, trained on local tech stacks, and integrated with our educational platform.',
    tags: ['AI Coding', 'Developer Tools', 'EdTech'],
  },
  {
    id: 'nlp-localization',
    icon: FlaskConical,
    iconColor: '#0066cc', // helix-blue
    status: 'ACTIVE RESEARCH',
    statusColor: '#0066cc',
    title: 'NLP Localization Engine',
    description:
      'Natural language processing pipeline designed to understand and respond in Nigerian Pidgin, Yoruba, Igbo, and Hausa — bringing local language AI to Africa.',
    tags: ['NLP', 'African Languages', 'Linguistics AI'],
  },
]

export default function ResearchLabSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#030811]" id="research">

      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.05] blur-[180px]"
          style={{ background: 'radial-gradient(circle, #0066cc 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-helix-cyan/30 bg-helix-cyan/10 text-helix-cyan text-sm font-semibold mb-6"
          >
            <FlaskConical size={14} className="text-helix-cyan" />
            Research & Innovation Lab
          </motion.span>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 w-full">
            <div className="w-full lg:w-auto text-left">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-tight tracking-tight"
              >
                The Lab Never<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83e7ee] to-[#0066cc]">Stops Running.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-helix-accent/60 mt-5 max-w-lg text-base leading-relaxed font-medium"
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
              className="flex-shrink-0 bg-helix-blue-dark-2/50 backdrop-blur-md rounded-2xl px-6 py-4 border border-helix-stroke shadow-lg"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-helix-accent/40 mb-2">Lab Status</p>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-helix-cyan animate-pulse shadow-[0_0_8px_rgba(131,231,238,0.6)]" />
                <span className="text-sm font-mono font-medium text-helix-cyan">5 projects active</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-helix-stroke hover:border-helix-cyan/40 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-xl shadow-black/10"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${project.iconColor}15 0%, transparent 65%)` }} />

                {/* Top */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-105 transition-transform duration-500">
                    <Icon size={26} style={{ color: project.iconColor }} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}40`,
                      background: `${project.statusColor}10`,
                    }}>
                    {project.status}
                  </span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-helix-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-helix-accent/60 text-base leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag}
                        className="text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-1 rounded-full text-helix-accent/50 border border-helix-stroke bg-white/5">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.1, duration: 0.65 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl p-8 border border-dashed border-helix-stroke hover:border-helix-cyan/50 transition-all duration-500 group flex flex-col items-center justify-center text-center min-h-[260px] bg-white/5 hover:bg-white/10"
          >
            <FlaskConical size={36} className="text-helix-accent/20 mb-5 group-hover:text-helix-cyan/60 transition-colors duration-500" />
            <h4 className="text-white/60 font-bold text-xl mb-3 group-hover:text-white transition-colors duration-500">
              Upcoming Research
            </h4>
            <p className="text-helix-accent/40 text-sm mb-6 font-medium">
              More projects launching soon from our innovation lab
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-helix-cyan/70 hover:text-helix-cyan transition-colors"
            >
              Collaborate with us <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
