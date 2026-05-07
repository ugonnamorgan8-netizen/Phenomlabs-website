import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Layers, Star, ChevronDown, Globe } from 'lucide-react'
import ParticleField from '../components/ParticleField'
import NeuralNetwork3D from '../components/NeuralNetwork3D'

const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 18 },
  visible: (i: number) => ({ opacity: 1, filter: 'blur(0px)', y: 0, transition: { delay: i * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] } }),
}

const trustBadges = [
  { icon: MapPin, label: 'Based in Nigeria' },
  { icon: Layers, label: 'End-to-End AI Solutions' },
  { icon: Star, label: 'Trusted by Businesses' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const mouseRef = useRef<[number, number]>([0, 0])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1])

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current = [
      ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      -((e.clientY - rect.top) / rect.height - 0.5) * 2,
    ]
  }

  const headline = ['We Build, Teach', 'and Automate', 'with AI']

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col overflow-hidden"
      style={{ background: '#000' }}
      onMouseMove={onMouseMove}
    >
      {/* Subtle purple radial at top-center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #7c3aed 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div className="aurora-1 absolute inset-0" />
        <div className="aurora-2 absolute inset-0" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      {/* Particle canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex-1 w-full gap-10 lg:gap-0">

        {/* LEFT — Text */}
        <div className="flex-1 lg:w-3/5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="tag-purple mb-8"
          >
            <Globe size={14} className="text-ph-purple-light" />
            <span>Africa's AI Company</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ph-purple-light animate-pulse" />
          </motion.div>

          {/* Headline */}
          <h1 className="hero-headline text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] text-white mb-7">
            {headline.map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div
                  custom={li}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={li === 2 ? 'gradient-text-brand' : ''}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* Description & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <p className="text-lg text-white/48 leading-relaxed mb-9 max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We empower organizations across Africa with tactical AI solutions, intelligent automation, and world-class literacy programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 mb-11">
              <Link to="/services" className="btn-premium group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link to="/phenom-os" className="btn-premium-outline">
                <span className="relative z-10">See PHENOM OS</span>
              </Link>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap gap-2.5"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs text-white/50"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', fontFamily: 'DM Sans, sans-serif' }}>
                <Icon size={12} className="text-ph-purple-light" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Sphere */}
        <div className="w-full lg:w-2/5 h-64 sm:h-80 lg:h-[580px] relative">
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
          <NeuralNetwork3D mouse={mouseRef} scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex flex-col items-center pb-10 gap-2"
      >
        <span className="text-white/25 text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Scroll to explore</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
