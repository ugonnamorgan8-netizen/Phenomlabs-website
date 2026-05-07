import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, PartyPopper } from 'lucide-react'

export default function WaitlistPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 30000)
    return () => clearTimeout(timer)
  }, [dismissed])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setTimeout(() => { setVisible(false); setDismissed(true) }, 2200) }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] max-w-sm"
        >
          {/* 
            ALWAYS SOLID DARK GLASS — never transparent.
            background must be dark enough to guarantee readability.
          */}
          <div
            className="rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden"
            style={{
              background: 'rgba(10, 10, 10, 0.96)',
              backdropFilter: 'blur(32px) saturate(180%)',
              WebkitBackdropFilter: 'blur(32px) saturate(180%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(124,58,237,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Purple accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ph-purple to-transparent" />

            <button
              onClick={() => { setVisible(false); setDismissed(true) }}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
                    <Zap size={14} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-white/55 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>Early Access</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-1.5 leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Join 1,000+ Businesses
                </h3>
                <p className="text-white/55 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Waiting for PHENOM OS — Africa's first AI Business Operating System.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.4)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
                  >
                    Join the Waitlist →
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-3">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ph-purple/20 flex items-center justify-center text-ph-purple-light">
                    <PartyPopper size={32} />
                  </div>
                </div>
                <p className="font-bold text-white text-base" style={{ fontFamily: 'Sora, sans-serif' }}>You're on the list!</p>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>We'll notify you when PHENOM OS launches.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
