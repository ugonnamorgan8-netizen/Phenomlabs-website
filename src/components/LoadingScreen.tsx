import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Props { onComplete: () => void }

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [taglineVisible, setTaglineVisible] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 3 + 1
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 80) setTaglineVisible(true)
    if (progress >= 100) {
      setTimeout(() => { setDone(true); onComplete() }, 500)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
          </div>

          {/* SVG Logo */}
          <div className="relative mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              {/* Outer ring */}
              <circle
                cx="60" cy="60" r="55"
                stroke="url(#logoGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="346" strokeDashoffset="346"
                style={{ animation: 'draw 1.5s ease forwards 0.2s' }}
              />
              {/* P + L geometric logo */}
              <path
                d="M30 20 V80 M30 20 H60 Q75 20 75 32.5 Q75 45 60 45 H30 M45 45 L75 80"
                stroke="url(#logoGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                fill="none"
                strokeDasharray="300" strokeDashoffset="300"
                style={{ animation: 'draw 1.5s ease forwards 0.5s' }}
              />
              {/* Inner glow dot */}
              <circle cx="60" cy="52" r="6" fill="url(#logoGrad)" opacity="0">
                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.2s" fill="freeze" />
                <animate attributeName="r" from="3" to="6" dur="0.5s" begin="1.2s" fill="freeze" />
              </circle>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-3xl font-bold tracking-widest text-white mb-1">
              PHENOM <span className="gradient-text">LABS</span>
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 mb-4">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #a78bfa, #7c3aed)', width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-white/30 font-mono">{Math.min(100, Math.floor(progress))}%</span>
              <span className="text-xs text-white/30 font-mono">Initializing...</span>
            </div>
          </div>

          {/* Tagline */}
          <AnimatePresence>
            {taglineVisible && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-white/40 font-body tracking-wider"
              >
                We Build, Teach and Automate with AI
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
