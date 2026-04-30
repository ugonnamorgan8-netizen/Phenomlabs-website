import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, MessageCircle, Clock, Check } from 'lucide-react'

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

  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,60,180,0.14) 0%, #000 70%)' }} />
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-ph-blue text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">Let's <span className="gradient-text">Work Together</span></h1>
            <p className="text-white/55 text-xl max-w-xl mx-auto">
              Tell us about your project. We respond within 1 hour on business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ background: '#050510' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT — Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h2>

                {/* Response badge */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-green-500/20 bg-green-500/8 mb-6">
                  <Clock size={16} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm font-medium">We reply within 1 hour on business days</p>
                </div>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/2347087686794" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-green-500/25 bg-green-500/10 hover:bg-green-500/15 transition-colors mb-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp Us</p>
                    <p className="text-green-400 text-sm">+234 708 7686 794</p>
                  </div>
                  <span className="ml-auto text-green-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                </a>

                {/* Contact details */}
                <div className="space-y-3">
                  {[
                    { Icon: Mail, label: 'Email', value: 'ugonnamorgan8@gmail.com', href: 'mailto:ugonnamorgan8@gmail.com' },
                    { Icon: Phone, label: 'Phone / WhatsApp', value: '+234 708 7686 794', href: 'tel:+2347087686794' },
                    { Icon: MapPin, label: 'Location', value: 'Awka, Anambra State, Nigeria', href: '#' },
                  ].map(({ Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-start gap-4 p-4 rounded-xl glass border border-white/8 hover:border-ph-blue/30 transition-colors group">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,102,255,0.15)' }}>
                        <Icon size={16} className="text-ph-blue" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-0.5">{label}</p>
                        <p className="text-white text-sm font-medium">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendar placeholder */}
              <div className="p-5 rounded-xl glass border border-white/8">
                <p className="text-white font-semibold mb-2">Book a Free Call</p>
                <p className="text-white/50 text-sm mb-4">Schedule a 30-minute discovery call to discuss your project in detail.</p>
                <a href="https://wa.me/2347087686794?text=Hi%20PHENOM%20LABS!%20I'd%20like%20to%20book%20a%20free%20consultation%20call."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm btn-primary w-full justify-center">
                  Schedule via WhatsApp →
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 border border-white/8">
                {!submitted ? (
                  <>
                    <h2 className="font-display text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                          { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                        ].map(f => (
                          <div key={f.name}>
                            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">{f.label}</label>
                            <input name={f.name} type={f.type} placeholder={f.placeholder} required
                              value={form[f.name as keyof typeof form]}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-ph-blue/50 transition-colors" />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">Organization Name</label>
                        <input name="org" type="text" placeholder="Company / School / Hospital name"
                          value={form.org} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-ph-blue/50 transition-colors" />
                      </div>

                      <div>
                        <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">Service Interested In</label>
                        <select name="service" value={form.service} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-ph-blue/50 transition-colors appearance-none"
                          style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <option value="" disabled>Select a service...</option>
                          {services.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block">Message</label>
                        <textarea name="message" rows={5} placeholder="Tell us about your project, goals, and timeline..." required
                          value={form.message} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-ph-blue/50 transition-colors resize-none" />
                      </div>

                      <button type="submit" disabled={loading}
                        className="w-full py-4 rounded-xl font-bold text-white text-sm btn-primary relative overflow-hidden disabled:opacity-60">
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                            Sending...
                          </span>
                        ) : 'Send Message →'}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #0066FF, #6600FF)' }}>
                      <Check size={28} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                    <p className="text-white/55 mb-6">Thank you for reaching out. We'll reply within 1 hour on business days.</p>
                    <a href="https://wa.me/2347087686794" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                      <MessageCircle size={14} /> For faster response, WhatsApp us now
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
