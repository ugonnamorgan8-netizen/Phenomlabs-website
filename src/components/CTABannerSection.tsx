import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageSquare, ArrowRight } from 'lucide-react'

export default function CTABannerSection() {
  return (
    <section className="py-40 relative overflow-hidden bg-black">
      {/* Background visual drama */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-ph-violet/5 to-black" />
      <div className="orb w-[1000px] h-[1000px] bg-ph-violet/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="grid-pattern absolute inset-0 opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.5em] text-ph-violet mb-8 block font-bold"
          >
            The Future is Intelligent
          </motion.span>
          
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.9] text-balance">
            Let’s Build <br />
            <span className="gradient-text-brand drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">The Impossible.</span>
          </h2>
          
          <p className="text-white/40 text-xl mb-16 max-w-2xl mx-auto leading-relaxed text-balance">
            Join the ranks of forward-thinking African organizations leveraging tactical AI to outpace the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="btn-premium px-12 py-5 group"
            >
              <span className="relative z-10 flex items-center gap-3 text-base">
                Start Transformation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a 
              href="https://wa.me/2347087686794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium-outline px-12 py-5 group"
            >
              <span className="relative z-10 flex items-center gap-3 text-base">
                <MessageSquare size={20} className="text-ph-violet" /> Talk to an Expert
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative architectural lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
