import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Globe, Trophy, Smartphone, ChevronDown } from 'lucide-react'
import { Suspense, lazy } from 'react'
import ParticleField from '../components/ParticleField'

const NeuralNetwork3D = lazy(() => import('../components/NeuralNetwork3D'))

const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: (i: number) => ({ opacity: 1, filter: 'blur(0px)', y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
}

const trustBadges = [
  { icon: Zap, label: 'Certified AI Specialists' },
  { icon: Globe, label: 'Serving Nigeria + Africa' },
  { icon: Trophy, label: 'Real Delivered Projects' },
  { icon: Smartphone, label: 'WhatsApp Ready' },
]

export default function HeroSection() {
  const mouseRef = useRef<[number, number]>([0, 0])

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
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,40,120,0.18) 0%, #000 70%)' }}
      onMouseMove={onMouseMove}
    >
      {/* Aurora layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-1 absolute inset-0" />
        <div className="aurora-2 absolute inset-0" />
        <div className="dot-grid absolute inset-0 opacity-40" />
      </div>

      {/* Particle canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex-1 w-full gap-12 lg:gap-0">

        {/* LEFT — Text */}
        <div className="flex-1 lg:w-3/5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ph-blue/30 bg-ph-blue/10 text-sm text-white/80 mb-8"
          >
            <span className="text-base">🌍</span>
            <span className="font-medium">Africa's #1 AI Company</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ph-blue animate-pulse" />
          </motion.div>

          {/* Headline */}
          <h1 className="hero-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mb-6">
            {headline.map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div
                  custom={li}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={li === 2 ? 'gradient-text' : ''}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* Description & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
              We empower organizations across Africa with tactical AI solutions, intelligent automation, and world-class literacy programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/services" className="btn-premium group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
            className="flex flex-wrap gap-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs text-white/60">
                <Icon size={12} className="text-ph-blue" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Sphere */}
        <div className="w-full lg:w-2/5 h-64 sm:h-80 lg:h-[500px] relative">
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)' }} />
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20 text-sm">Loading 3D...</div>}>
            <NeuralNetwork3D mouse={mouseRef} />
          </Suspense>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
