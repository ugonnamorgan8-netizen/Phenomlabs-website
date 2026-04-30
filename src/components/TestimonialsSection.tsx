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
        
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-ph-blue mb-4 block"
          >
            Verified Feedback
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-white tracking-tighter"
          >
            Trusted by <span className="gradient-text-blue">Visionaries.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 relative"
            >
              <Quote className="text-ph-blue/20 mb-8" size={32} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-ph-blue text-ph-blue" />
                ))}
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-12 font-medium italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ph-blue/10 flex items-center justify-center border border-ph-blue/20">
                  <span className="text-ph-blue font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
