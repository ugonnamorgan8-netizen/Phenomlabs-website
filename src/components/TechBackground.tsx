import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function TechBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scanLineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Grid Layer */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.07] grid-pattern"
      />

      {/* Vertical Scan Lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-full w-px bg-white"
            style={{ left: `${i * 10}%` }}
          />
        ))}
      </div>

      {/* Horizontal Moving Scan Line */}
      <motion.div 
        style={{ top: scanLineY }}
        className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-ph-blue/20 to-transparent blur-sm"
      />

      {/* Floating Data Nodes (Small glowing dots) */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{ 
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 rounded-full bg-ph-blue/40"
            style={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(0, 102, 255, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}
