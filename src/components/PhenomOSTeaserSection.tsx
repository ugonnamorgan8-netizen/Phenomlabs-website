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
      {/* Decorative background */}
      <div className="orb w-[800px] h-[800px] bg-ph-gold/5 -top-[20%] -right-[10%]" />
      <div className="grid-pattern absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-ph-gold" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-gold font-bold">Introducing Phenom OS</span>
            </div>

            <h2 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
              The Digital <br />
              <span className="gradient-text-gold">COO of Africa.</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-md">
              39.6 million Nigerian businesses deserve a smart manager. PHENOM OS is that manager — powered by AI, available on WhatsApp, and built for scale.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-ph-gold">
                  <Smartphone size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">WhatsApp Native</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">No apps to download. Control everything through chat.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-ph-gold">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Real-time Insights</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">Know your numbers instantly, anytime, anywhere.</p>
              </div>
            </div>

            <Link to="/phenom-os" className="btn-premium group" style={{ borderColor: 'var(--ph-gold)', color: 'var(--ph-gold)', background: 'transparent' }}>
              <span className="relative z-10">Join the Waitlist</span>
            </Link>
          </motion.div>

          {/* Interactive Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Shell */}
            <div className="relative mx-auto w-[320px] h-[640px] bg-[#050505] rounded-[3rem] p-3 shadow-[0_0_100px_rgba(255,184,0,0.1)] border border-white/10 ring-1 ring-white/5">
              <div className="w-full h-full bg-[#0D0D0D] rounded-[2.5rem] overflow-hidden flex flex-col relative">
                {/* Header */}
                <div className="bg-[#121212] p-6 border-b border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ph-gold/20 flex items-center justify-center">
                    <span className="text-ph-gold font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">PHENOM OS</h4>
                    <p className="text-[10px] text-green-500 uppercase tracking-widest font-bold">Active Assistant</p>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto no-scrollbar">
                  <AnimatePresence>
                    {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                          msg.from === 'user' 
                            ? 'bg-ph-blue text-white rounded-tr-none' 
                            : 'bg-white/5 text-white/80 rounded-tl-none border border-white/5'
                        }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {visibleMessages < chatMessages.length && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1">
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce" />
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1 h-1 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input area */}
                <div className="p-4 bg-[#121212] border-t border-white/5">
                  <div className="w-full h-10 rounded-full bg-white/5 border border-white/10 px-4 flex items-center">
                    <span className="text-[10px] text-white/20 font-mono">Message PHENOM OS...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-morphism p-4 rounded-2xl border-ph-gold/20"
            >
              <div className="flex items-center gap-2 text-ph-gold mb-1">
                <Zap size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Growth Boost</span>
              </div>
              <p className="text-white/60 text-[10px] font-mono">+124% Efficiency</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
