import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap } from 'lucide-react'

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
    if (email) { setSubmitted(true); setTimeout(() => { setVisible(false); setDismissed(true) }, 2000) }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] max-w-sm"
        >
          <div className="glass rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, rgba(0,102,255,0.1) 0%, transparent 70%)' }} />

            <button
              onClick={() => { setVisible(false); setDismissed(true) }}
              className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={14} />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0066FF, #6600FF)' }}>
                    <Zap size={14} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Early Access</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">Join 1,000+ Businesses</h3>
                <p className="text-white/50 text-sm mb-4">Waiting for PHENOM OS — Africa's first AI Business Operating System.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-ph-blue/60 transition-colors"
                  />
                  <button type="submit" className="w-full py-2.5 rounded-xl text-sm font-semibold text-white btn-primary">
                    Join the Waitlist →
                  </button>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-2">
                <div className="text-3xl mb-2">🎉</div>
                <p className="font-display font-bold text-white">You're on the list!</p>
                <p className="text-white/50 text-sm mt-1">We'll notify you when PHENOM OS launches.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
