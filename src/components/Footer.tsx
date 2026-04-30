import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const services = [
  { label: 'PHENOM LEARN', path: '/services#learn' },
  { label: 'PHENOM BUILD', path: '/services#build' },
  { label: 'PHENOM OS', path: '/phenom-os' },
  { label: 'Case Studies', path: '/portfolio' },
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Story', path: '/about#story' },
  { label: 'Contact', path: '/contact' },
  { label: 'WhatsApp', path: 'https://wa.me/2347087686794' },
]

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Structural elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph-blue/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Vision */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tighter text-white">PHENOM<span className="text-ph-blue">LABS</span></span>
                <span className="text-[8px] font-mono tracking-[0.4em] text-white/30 uppercase -mt-1">Digital Intelligence</span>
              </div>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-sm">
              Architecting the future of African business through tactical AI and intelligent automation.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-white hover:border-white/20 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8 font-bold">Solutions</h4>
            <ul className="space-y-4">
              {services.map(s => (
                <li key={s.label}>
                  <Link to={s.path} className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1 group">
                    {s.label} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8 font-bold">Company</h4>
            <ul className="space-y-4">
              {company.map(s => (
                <li key={s.label}>
                  <Link to={s.path} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8 font-bold">Direct Line</h4>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ph-blue mb-1">Email</span>
                <a href="mailto:hello@phenomlabs.com" className="text-white font-bold tracking-tight hover:text-ph-blue transition-colors">ugonnamorgan8@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ph-blue mb-1">Location</span>
                <span className="text-white font-bold tracking-tight">Awka, Nigeria</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Architectural Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-mono text-white/20 tracking-widest">© 2026 PHENOM LABS</span>
            <span className="text-[10px] font-mono text-white/10 tracking-widest hidden sm:block">BUILT WITH AI</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors tracking-widest">PRIVACY</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors tracking-widest">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
