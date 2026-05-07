import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2347087686794"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
      title="Chat with us on WhatsApp"
    >
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center wa-pulse shadow-lg shadow-ph-purple/20"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)' }}>
        <MessageCircle size={26} className="text-white fill-white" />
      </div>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none" style={{ fontFamily: 'Sora, sans-serif' }}>
        Chat with us now
      </span>
    </motion.a>
  )
}
