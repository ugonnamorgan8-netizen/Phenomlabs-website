import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import { Sparkles, Zap, Smartphone } from 'lucide-react'

const chatMessages = [
  { from: 'user', text: 'How much did I make this week?' },
  { from: 'os', text: 'You made ₦187,500 in sales. Top product: Ankara Fabric. 3 unpaid invoices: ₦45,000. Send reminders?' },
  { from: 'user', text: 'Yes' },
  { from: 'os', text: 'Done. Reminders sent to 3 customers. ✓' },
]

export default function PhenomOSTeaserSection() {
  const { ref, inView } = useInView()
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    if (!inView) return
    setVisibleMessages(0)
    chatMessages.forEach((_, i) => {
      setTimeout(() => setVisibleMessages(i + 1), 800 + i * 1400)
    })
  }, [inView])

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-black">
      {/* Purple orb instead of gold */}
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      <div className="grid-pattern absolute inset-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1.5px]" style={{ background: 'rgba(167,139,250,0.6)' }} />
              <span className="tag-purple">Introducing PHENOM OS</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-7 leading-[1.05]"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}>
              The Digital <br />
              <span className="gradient-text-purple">COO of Africa.</span>
            </h2>

            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              39.6 million Nigerian businesses deserve a smart manager. PHENOM OS is that manager — powered by AI, available on WhatsApp, and built for scale.
            </p>

            <div className="grid grid-cols-2 gap-7 mb-10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ph-purple-light">
                  <Smartphone size={15} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">WhatsApp Native</span>
                </div>
                <p className="text-white/28 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>No apps to download. Control everything through chat.</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ph-purple-light">
                  <Sparkles size={15} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">Real-time Insights</span>
                </div>
                <p className="text-white/28 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>Know your numbers instantly, anytime, anywhere.</p>
              </div>
            </div>

            <Link
              to="/phenom-os"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              Join the Waitlist
            </Link>
          </motion.div>

          {/* Interactive Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Shell */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-[#080808] rounded-[2.8rem] p-3 border border-white/10 ring-1 ring-white/5"
              style={{ boxShadow: '0 0 80px rgba(124,58,237,0.08)' }}>
              <div className="w-full h-full bg-[#0d0d0d] rounded-[2.3rem] overflow-hidden flex flex-col relative">
                {/* Header */}
                <div className="bg-[#111] p-5 border-b border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.18)' }}>
                    <span className="text-ph-purple-light font-bold text-sm">P</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>PHENOM OS</h4>
                    <p className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold">Active</p>
                  </div>
                </div>

                {/* Chat */}
                <div className="flex-1 p-5 space-y-3.5 overflow-y-auto no-scrollbar">
                  <AnimatePresence>
                    {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.from === 'user'
                            ? 'text-white rounded-tr-none'
                            : 'bg-white/5 text-white/75 rounded-tl-none border border-white/5'
                        }`} style={msg.from === 'user' ? { background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', fontFamily: 'DM Sans, sans-serif' } : { fontFamily: 'DM Sans, sans-serif' }}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {visibleMessages < chatMessages.length && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-white/5 p-2.5 rounded-2xl rounded-tl-none flex gap-1 border border-white/5">
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce" />
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input area */}
                <div className="p-4 bg-[#111] border-t border-white/5">
                  <div className="w-full h-9 rounded-full px-4 flex items-center"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="text-[9px] text-white/18 font-mono">Message PHENOM OS...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 glass-morphism p-4 rounded-2xl border border-ph-purple/20"
            >
              <div className="flex items-center gap-2 text-ph-purple-light mb-1">
                <Zap size={13} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Growth Boost</span>
              </div>
              <p className="text-white/55 text-[9px] font-mono">+124% Efficiency</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
