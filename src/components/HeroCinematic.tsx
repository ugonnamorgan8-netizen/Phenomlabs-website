import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TICKER_ITEMS = [
  'AI Systems', '•', 'Automation', '•', 'Education Technology', '•',
  'Intelligent Infrastructure', '•', 'Innovation', '•', 'Built to Scale',
  '•', 'AI Systems', '•', 'Automation', '•', 'Education Technology', '•',
  'Intelligent Infrastructure', '•', 'Innovation', '•', 'Built to Scale', '•',
]

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Pixel-accurate height to eliminate gap on mobile.
  // CSS `vh` ≠ window.innerHeight on mobile due to the browser URL bar.
  const [containerHeight, setContainerHeight] = useState('400vh')

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setContainerHeight(`${window.innerHeight * 2}px`)
      } else {
        setContainerHeight('400vh')
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // ─── Video Treatment ───
  const overlayOpacity = useTransform(scrollYProgress, [0.8, 1], [0.1, 0.6])

  // ─── Phase 1: Brand Reveal (0.0 -> 1.0) ───
  // Opacity stays 1 until the very end of the hero section
  const phase1Opacity = useTransform(scrollYProgress, [0.0, 0.9, 1], [1, 1, 0])
  const phase1Y = useTransform(scrollYProgress, [0.0, 1], [0, 0])
  // We use an exponential curve to keep the perceived zoom speed constant.
  const brandScale = useTransform(scrollYProgress, [0.0, 0.2, 0.4, 0.6, 0.8, 1.0], [1, 2.2, 4.7, 10.1, 22, 48])

  // ─── Phase 2: The Ticker (0.3 -> 0.6) ───
  const phase2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0])
  const phase2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [80, 0, 0, -80])
  const phase2Scale = useTransform(scrollYProgress, [0.25, 0.35], [0.9, 1])

  // ─── Phase 3: Core Pillars (0.6 -> 1.0) ───
  const phase3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0])
  const phase3Y = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [80, 0, 0, -80])

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0a121c]"
      style={{ height: containerHeight, zIndex: 50 }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">

        {/* VIDEO — smooth autoplay loop, no scrubbing */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            willChange: 'transform',
            transform: 'scale(1.02) translateZ(0)',
            filter: 'contrast(1.15) saturate(1.3) brightness(1.1)',
          }}
        >
          <source src="/assets/hero-cinematic.mp4" type="video/mp4" />
        </video>

        {/* VIGNETTE OVERLAY */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: overlayOpacity,
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-black/10" />

        {/* ── PHASE 1: BRAND REVEAL ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pointer-events-none"
          style={{ opacity: phase1Opacity, y: phase1Y }}
        >
          <p
            className="text-[#83e7ee] font-bold tracking-[0.3em] uppercase mb-4 text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(0.55rem, 1vw, 0.85rem)' }}
          >
            PHENOMLABS — WHERE INTELLIGENCE MEETS EXECUTION
          </p>
          <motion.div className="flex flex-col items-center" style={{ scale: brandScale }}>
            <h1
              className="text-white font-black leading-none text-center"
              style={{
                fontFamily: 'Sora, Inter, sans-serif',
                fontSize: 'clamp(3rem, 11vw, 11rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                textShadow: '0 0 60px rgba(131,231,238,0.2)',
              }}
            >
              PHENOM
            </h1>
            <h1
              className="font-black leading-none text-center"
              style={{
                fontFamily: 'Sora, Inter, sans-serif',
                fontSize: 'clamp(3rem, 11vw, 11rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(131,231,238,0.9)',
                textShadow: '0 0 80px rgba(131,231,238,0.3)',
              }}
            >
              LABS
            </h1>
            <p 
              className="text-[#83e7ee] font-bold text-center mt-2 sm:mt-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                letterSpacing: '0.05em',
              }}
            >
              Built to Scale.
            </p>
          </motion.div>

          {/* Scroll Cue */}
          <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 overflow-hidden relative">
              <motion.div
                className="w-full h-1/2 bg-[#83e7ee]"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── PHASE 2: THE TICKER ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: phase2Opacity, y: phase2Y, scale: phase2Scale }}
        >
          <div
            className="overflow-hidden w-full border-t border-b py-6"
            style={{ borderColor: 'rgba(131,231,238,0.2)', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)' }}
          >
            <div
              className="flex gap-8 w-max"
              style={{
                animation: 'hero-ticker 35s linear infinite',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.9rem, 2vw, 1.5rem)',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className={item === '•' ? 'text-[#83e7ee]' : ''}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── PHASE 3: CORE PILLARS ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pointer-events-none"
          style={{ opacity: phase3Opacity, y: phase3Y }}
        >
          <div className="flex flex-col gap-2 items-center text-center max-w-5xl">
            <p
              className="text-white font-semibold"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1.7rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              AI Systems. Automation.
            </p>
            <p
              className="text-[#83e7ee] font-bold"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1.7rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Education Technology.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
