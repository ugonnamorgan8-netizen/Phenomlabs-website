import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Layers, Star, Globe } from 'lucide-react'

const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const trustBadges = [
  { icon: MapPin, label: 'Based in Nigeria' },
  { icon: Layers, label: 'AI Systems & Automation' },
  { icon: Star, label: 'Healthcare · Education · Fintech' },
  { icon: Globe, label: 'Global Reach' },
]

const headline = ['AI Systems. Automation.', 'Education Technology.', 'Built to Scale.']

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0a121c', paddingTop: '10rem', paddingBottom: '8rem' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #0066cc 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="tag-purple mb-8"
        >
          <Globe size={14} className="text-ph-purple-light" />
          <span>Africa's AI Ecosystem</span>
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
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <p
            className="text-lg text-white/48 leading-relaxed mb-8 max-w-2xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We design AI-powered systems, automation tools, and educational technologies that help
            businesses, healthcare providers, and creators scale smarter.
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
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs text-white/50"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              <Icon size={12} className="text-ph-purple-light" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
