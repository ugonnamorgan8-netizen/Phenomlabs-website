import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TARGET = 'PHENOM'

export default function EasterEgg() {
  const [typed, setTyped] = useState('')
  const [triggered, setTriggered] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([])

  const fireParticles = useCallback(() => {
    const cols = ['#7c3aed', '#a78bfa', '#4c1d95', '#8b5cf6', '#c4b5fd']
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: cols[Math.floor(Math.random() * cols.length)],
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 3000)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const next = (typed + e.key.toUpperCase()).slice(-TARGET.length)
      setTyped(next)
      if (next === TARGET) {
        setTriggered(true)
        fireParticles()
        setTimeout(() => setTriggered(false), 3000)
        setTyped('')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [typed, fireParticles])

  return (
    <AnimatePresence>
      {triggered && (
        <>
          {/* Particle explosion */}
          <div className="fixed inset-0 z-[99990] pointer-events-none">
            {particles.map(p => (
              <motion.div
                key={p.id}
                className="absolute w-2 h-2 rounded-full"
                style={{ left: `${p.x}%`, top: `${p.y}%`, background: p.color }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 1.5, 0], opacity: [1, 0.8, 0], y: [0, -80], x: [(Math.random() - 0.5) * 120] }}
                transition={{ duration: 1.5 + Math.random(), ease: 'easeOut' }}
              />
            ))}
          </div>
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[99991] px-8 py-4 rounded-2xl glass border border-ph-purple/40 text-center shadow-2xl"
            style={{ boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}
          >
            <p className="font-display font-bold text-2xl gradient-text">⚡ PHENOM MODE ACTIVATED ⚡</p>
            <p className="text-white/60 text-sm mt-1">Africa's AI Company says hello 👋</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
