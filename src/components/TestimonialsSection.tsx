import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Emeka Okafor',
    role: 'Director, Marvel Driving School',
    text: 'PHENOM LABS completely transformed our FRSC compliance process. What used to take our staff hours every day now runs automatically in minutes. World-class work.',
    initials: 'EO'
  },
  {
    name: 'Dr. Adaeze Nwosu',
    role: 'CMO, Abia Telehealth Initiative',
    text: 'The telehealth platform exceeded every expectation. Clean, professional, and exactly what our patients needed. We are proud to partner with PHENOM LABS.',
    initials: 'AN'
  },
  {
    name: 'Principal Chukwuemeka Eze',
    role: 'Marvel Secondary School',
    text: 'Our student management system works flawlessly. Enrollment, records, fees — all in one place. PHENOM LABS delivered beyond what we imagined possible.',
    initials: 'CE'
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-5 tag-purple"
          >
            Verified Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
          >
            Trusted by <span className="gradient-text-purple">Visionaries.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-black hover:bg-white/[0.02] transition-all duration-400 relative"
            >
              {/* Purple top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-ph-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <Quote className="mb-6 opacity-20" size={28} style={{ color: '#a78bfa' }} />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} style={{ fill: '#a78bfa', color: '#a78bfa' }} />
                ))}
              </div>

              <p className="text-white/58 text-base leading-relaxed mb-10 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <span className="text-ph-purple-light font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{t.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{t.name}</h4>
                  <p className="text-white/22 text-[9px] font-mono uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
