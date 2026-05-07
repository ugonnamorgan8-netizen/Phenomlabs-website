import { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, Clock, Check, ChevronDown } from 'lucide-react'

const services = ['AI Literacy Training', 'Prompt Engineering Workshop', 'Python Automation', 'Web Development', 'Workflow Automation', 'PHENOM OS Waitlist', 'General Enquiry']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y, scale }}
            className="w-full h-full opacity-30 bg-[url('/assets/africa_ai_network.png')] bg-cover bg-center mix-blend-screen grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        </div>
        <div className="dot-grid absolute inset-0 opacity-15 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
            <div className="mb-6">
              <span className="tag-purple">Connect</span>
            </div>
            <h1 className="font-display text-6xl sm:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              Let's <span className="gradient-text-brand">Work Together</span>
            </h1>
            <p className="text-white/55 text-xl max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Tell us about your project. We respond within 1 hour on business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-ph-space">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">

            {/* LEFT — Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>Contact Details</h2>

                {/* Response badge */}
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-ph-purple/20 bg-ph-purple/5 mb-8">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-ph-purple/10">
                    <Clock size={18} className="text-ph-purple-light" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>Fast Response</p>
                    <p className="text-white/40 text-xs mt-0.5">We reply within 1 hour on business days</p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/2347087686794" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-3xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300 mb-6 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>WhatsApp Us</p>
                    <p className="text-green-500/80 text-sm font-bold tracking-wider">+234 708 7686 794</p>
                  </div>
                  <span className="ml-auto text-green-500/50 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Contact details */}
                <div className="space-y-4">
                  {[
                    { Icon: Mail, label: 'Email', value: 'ugonnamorgan8@gmail.com', href: 'mailto:ugonnamorgan8@gmail.com' },
                    { Icon: Phone, label: 'Phone / WhatsApp', value: '+234 708 7686 794', href: 'tel:+2347087686794' },
                    { Icon: MapPin, label: 'Location', value: 'Awka, Anambra State, Nigeria', href: '#' },
                  ].map(({ Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 hover:border-ph-purple/30 hover:-translate-y-1 transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 group-hover:bg-ph-purple/10 transition-colors">
                        <Icon size={18} className="text-white/40 group-hover:text-ph-purple-light transition-colors" />
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">{label}</p>
                        <p className="text-white text-sm font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-ph-purple/10 to-transparent pointer-events-none" />
                <h3 className="font-display font-bold text-white text-xl mb-3 relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>Book a Free Call</h3>
                <p className="text-white/40 text-sm mb-6 relative z-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>Schedule a 30-minute discovery call to discuss your project in detail.</p>
                <a href="https://wa.me/2347087686794?text=Hi%20PHENOM%20LABS!%20I'd%20like%20to%20book%20a%20free%20consultation%20call."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center relative z-10 py-4 shadow-lg shadow-ph-purple/20">
                  Schedule via WhatsApp →
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3">
              <div className="glass rounded-[2rem] p-10 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ph-purple/5 blur-[50px] pointer-events-none" />
                
                {!submitted ? (
                  <>
                    <h2 className="font-display text-3xl font-bold text-white mb-10" style={{ fontFamily: 'Sora, sans-serif' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                          { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                        ].map(f => (
                          <div key={f.name}>
                            <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{f.label}</label>
                            <input name={f.name} type={f.type} placeholder={f.placeholder} required
                              value={form[f.name as keyof typeof form]}
                              onChange={handleChange}
                              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-ph-purple/50 transition-all duration-300" />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Organization Name</label>
                        <input name="org" type="text" placeholder="Company / School / Hospital name"
                          value={form.org} onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-ph-purple/50 transition-all duration-300" />
                      </div>

                      <div>
                        <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Service Interested In</label>
                        <div className="relative">
                          <select name="service" value={form.service} onChange={handleChange} required
                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-ph-purple/50 transition-all duration-300 appearance-none cursor-pointer"
                            style={{ background: 'rgba(255,255,255,0.03)' }}>
                            <option value="" disabled className="bg-ph-space">Select a service...</option>
                            {services.map(s => <option key={s} value={s} className="bg-ph-space">{s}</option>)}
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                            <ChevronDown size={18} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Message</label>
                        <textarea name="message" rows={6} placeholder="Tell us about your project, goals, and timeline..." required
                          value={form.message} onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-ph-purple/50 transition-all duration-300 resize-none" />
                      </div>

                      <button type="submit" disabled={loading}
                        className="w-full py-5 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.01] relative overflow-hidden disabled:opacity-60 shadow-xl shadow-ph-purple/20 bg-gradient-to-r from-ph-purple to-ph-violet">
                        {loading ? (
                          <span className="flex items-center justify-center gap-3">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                            Sending...
                          </span>
                        ) : 'Send Message →'}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                    <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-ph-purple/30"
                      style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
                      <Check size={32} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white text-3xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Message Sent!</h3>
                    <p className="text-white/50 text-lg mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>Thank you for reaching out. We'll reply within 1 hour on business days.</p>
                    <a href="https://wa.me/2347087686794" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-ph-purple-light hover:text-white transition-colors font-bold uppercase tracking-widest">
                      <MessageCircle size={18} /> WhatsApp us for faster response
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
