import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CTABannerSection from '../components/CTABannerSection'
import ParticleVortex3D from '../components/ParticleVortex3D'


function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,60,180,0.15) 0%, #000 70%)' }} />
      <div className="dot-grid absolute inset-0 opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/55 text-xl max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

const learnServices = [
  { name: 'AI Literacy Workshops', desc: 'Tailored AI awareness programs for schools, universities, and corporate teams to understand and apply AI tools in daily work.', price: 'Custom Quote' },
  { name: 'Prompt Engineering Training', desc: 'Hands-on sessions teaching professionals to craft effective prompts for ChatGPT, Gemini, and Claude for real productivity gains.', price: 'From ₦50,000' },
  { name: 'White-Label AI Courses', desc: 'Fully branded AI curriculum packages for institutions wanting to offer AI education under their own name.', price: 'Custom Quote' },
  { name: 'Corporate AI Upskilling', desc: 'Multi-day corporate bootcamps transforming entire teams into AI-fluent professionals ready for the future of work.', price: 'From ₦200,000' },
]

const buildServices = [
  { name: 'Python Automation Systems', desc: 'Custom Python scripts and bots that automate repetitive business tasks — from data entry to report generation and compliance filing.', price: 'From ₦80,000' },
  { name: 'AI-Assisted Web Development', desc: 'Fast, modern, mobile-first websites and web applications built with AI tools — reducing development time and cost significantly.', price: 'From ₦150,000' },
  { name: 'Workflow Automation', desc: 'Connect your business apps and automate multi-step workflows using Zapier, Make.com, and n8n for seamless operations.', price: 'From ₦60,000' },
  { name: 'AI Prompt Packs & Digital Products', desc: 'Pre-built, curated AI prompt libraries and digital toolkits for specific industries — ready to deploy immediately.', price: 'From ₦15,000' },
]

function ServiceCard({ name, desc, price, color }: { name: string; desc: string; price: string; color: string }) {
  const { ref, inView } = useInView()
  
  // 3D Tilt Effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className="glass rounded-xl p-8 border border-white/10 card-hover-glow transition-all duration-300 relative overflow-hidden group">
      
      {/* Dynamic Hover Glow Background */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
        }}
      />
      
      <div className="relative z-10 transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-display font-bold text-white text-xl mb-3">{name}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{desc}</p>
        <span className="text-sm font-semibold px-4 py-1.5 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ color, borderColor: `${color}40`, background: `${color}15` }}>
          {price}
        </span>
      </div>
    </motion.div>
  )
}


export default function ServicesPage() {
  return (
    <main className="bg-black relative min-h-screen">
      {/* 3D Global Background */}
      <ParticleVortex3D />

      <div className="relative z-10">
        <PageHero title="Our Services" subtitle="From AI education to full automation systems — everything your organization needs to thrive with AI." />

        {/* PHENOM LEARN */}
        <section id="learn" className="py-20 relative bg-black/40 backdrop-blur-md border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)' }}>🎓</div>
              <div>
                <h2 className="font-display text-3xl font-bold text-white">PHENOM LEARN</h2>
                <p className="text-ph-purple text-sm mt-0.5">AI Education and Training</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]">
              {learnServices.map(s => <ServiceCard key={s.name} {...s} color="#7C3AED" />)}
            </div>
          </div>
        </section>

        {/* PHENOM BUILD */}
        <section id="build" className="py-20 relative bg-transparent">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.2)' }}>⚙️</div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white">PHENOM BUILD</h2>
              <p className="text-ph-violet text-sm mt-0.5">AI Automation and Development</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]">
            {buildServices.map(s => <ServiceCard key={s.name} {...s} color="#A855F7" />)}
          </div>
        </div>
      </section>

      {/* PHENOM OS Preview */}
      <section className="py-20 relative bg-black/60 backdrop-blur-lg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden border border-ph-violet/20 shadow-[0_0_50px_rgba(124,58,237,0.1)]"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.02) 100%)' }}>
            <div className="absolute inset-0 grid-lines opacity-10" />
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-ph-purple border border-ph-violet/40 bg-ph-violet/10 mb-6 animate-pulse">COMING 2026</span>
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform cursor-pointer">🧠</div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">PHENOM OS</h2>
            <p className="text-ph-violet font-semibold tracking-wide uppercase text-sm mb-6">Africa's First AI Business Operating System</p>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">AI Accounting, WhatsApp Intelligence, Customer Automation, and Business Planning — all in one powerful system built for African SMEs.</p>
            <a href="/phenom-os" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
              Experience the Future →
            </a>
          </div>
        </div>
      </section>

      <CTABannerSection />
      </div>
    </main>
  )
}

