import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useEffect, useState } from 'react'

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 2500
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // Ququart ease out
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, inView])
  return <>{count}{suffix}</>
}

const stats = [
  { value: 45, suffix: '+', label: 'AI PROJECTS DELIVERED', subtitle: 'Real-world impact' },
  { value: 1200, suffix: '+', label: 'STUDENTS TRAINED', subtitle: 'Building talent' },
  { value: 15, suffix: 'k+', label: 'HOURS SAVED', subtitle: 'Business efficiency' },
  { value: 98, suffix: '%', label: 'SATISFACTION', subtitle: 'Partner confidence' },
]

const marqueeItems = [
  'PHENOM OS READY', 'AI-FIRST NIGERIA', 'AUTOMATION AT SCALE', 
  'PROMPT ENGINEERING MASTERY', 'NEXT-GEN INTELLIGENCE', 'BORN IN AFRICA',
  'SCALING BUSINESSES', 'FUTURE OF WORK', 'CLOUD NATIVE AI'
]

export default function StatsMarqueeSection() {
  const { ref, inView } = useInView()

  return (
    <div className="bg-black relative">
      {/* High-End Marquee Ticker */}
      <div className="py-6 border-y border-white/5 marquee-container bg-ph-space overflow-hidden">
        <div className="marquee-content items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-white/30 uppercase whitespace-nowrap">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-ph-purple/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Refined Stats Grid */}
      <section ref={ref} className="py-32 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="group cursor-default"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase mb-4">
                    {s.label}
                  </div>
                  <div className="text-5xl sm:text-7xl font-bold text-white tracking-tighter mb-2 group-hover:gradient-text-purple transition-all duration-500">
                    <CountUp target={s.value} suffix={s.suffix} inView={inView} />
                  </div>
                  <div className="h-px w-8 bg-ph-purple/40 mb-3 group-hover:w-16 transition-all duration-500" />
                  <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">{s.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
