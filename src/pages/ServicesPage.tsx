import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CTABannerSection from '../components/CTABannerSection'

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
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      className="glass rounded-xl p-6 border border-white/8 card-hover-glow hover:-translate-y-1 transition-transform duration-300">
      <h3 className="font-display font-bold text-white text-lg mb-2">{name}</h3>
      <p className="text-white/55 text-sm leading-relaxed mb-4">{desc}</p>
      <span className="text-sm font-semibold px-3 py-1 rounded-full border" style={{ color, borderColor: `${color}40`, background: `${color}15` }}>
        {price}
      </span>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <PageHero title="Our Services" subtitle="From AI education to full automation systems — everything your organization needs to thrive with AI." />

      {/* PHENOM LEARN */}
      <section id="learn" className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.2)' }}>🎓</div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white">PHENOM LEARN</h2>
              <p className="text-ph-blue text-sm mt-0.5">AI Education and Training</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learnServices.map(s => <ServiceCard key={s.name} {...s} color="#0066FF" />)}
          </div>
        </div>
      </section>

      {/* PHENOM BUILD */}
      <section id="build" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(102,0,255,0.15)', border: '1px solid rgba(102,0,255,0.2)' }}>⚙️</div>
            <div>
              <h2 className="font-display text-3xl font-bold text-white">PHENOM BUILD</h2>
              <p className="text-ph-purple text-sm mt-0.5">AI Automation and Development</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {buildServices.map(s => <ServiceCard key={s.name} {...s} color="#6600FF" />)}
          </div>
        </div>
      </section>

      {/* PHENOM OS Preview */}
      <section className="py-20" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-center relative overflow-hidden border border-amber-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(255,184,0,0.08) 0%, rgba(255,100,0,0.05) 100%)' }}>
            <div className="absolute inset-0 grid-lines opacity-10" />
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-400/40 bg-amber-400/10 mb-4 animate-pulse">COMING 2026</span>
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="font-display text-3xl font-bold text-white mb-3">PHENOM OS</h2>
            <p className="text-amber-400 mb-4">Africa's First AI Business Operating System</p>
            <p className="text-white/55 max-w-xl mx-auto mb-8">AI Accounting, WhatsApp Intelligence, Customer Automation, and Business Planning — all in one system built for African SMEs.</p>
            <a href="/phenom-os" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-black text-sm"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF6600)' }}>
              Learn More & Join Waitlist →
            </a>
          </div>
        </div>
      </section>

      <CTABannerSection />
    </main>
  )
}
