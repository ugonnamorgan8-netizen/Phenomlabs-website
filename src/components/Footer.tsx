import { useNavigate } from 'react-router-dom'
import { Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { PhenomLogo } from './PhenomLogo'

const services = [
  { label: 'PHENOM LEARN', path: '/services', hash: 'learn' },
  { label: 'PHENOM BUILD', path: '/services', hash: 'build' },
  { label: 'PHENOM OS', path: '/phenom-os', hash: '' },
  { label: 'Case Studies', path: '/portfolio', hash: '' },
]

const company = [
  { label: 'About Us', path: '/about', hash: '' },
  { label: 'Our Story', path: '/about', hash: 'story' },
  { label: 'Contact', path: '/contact', hash: '' },
  { label: 'WhatsApp', path: 'https://wa.me/2347087686794', hash: '', external: true },
]

type FooterLink = {
  label: string
  path: string
  hash?: string
  external?: boolean
}

function FooterLink({ item }: { item: FooterLink }) {
  const navigate = useNavigate()

  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1 group"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {item.label}
        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    )
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Scroll to top of the page first, then navigate
    window.scrollTo({ top: 0, behavior: 'instant' })
    navigate(item.path)
    // If there's a hash, scroll to section after a brief delay for DOM
    if (item.hash) {
      setTimeout(() => {
        const el = document.getElementById(item.hash!)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
    }
  }

  return (
    <a
      href={item.path + (item.hash ? '#' + item.hash : '')}
      onClick={handleClick}
      className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {item.label}
      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black pt-28 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Top fade line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph-purple/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 mb-20">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="/" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                <PhenomLogo className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Phenom <span className="text-ph-purple-light">Labs</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-white/25 uppercase -mt-0.5">Digital Intelligence</span>
              </div>
            </a>
            <p className="text-white/40 text-base leading-relaxed mb-8 max-w-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Architecting the future of African business through tactical AI and intelligent automation.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/25 hover:text-white hover:border-ph-purple/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/20 mb-7 font-semibold">Solutions</h4>
            <ul className="space-y-3.5">
              {services.map(s => (
                <li key={s.label}>
                  <FooterLink item={s} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/20 mb-7 font-semibold">Company</h4>
            <ul className="space-y-3.5">
              {company.map(s => (
                <li key={s.label}>
                  <FooterLink item={s} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/20 mb-7 font-semibold">Direct Line</h4>
            <div className="space-y-5">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-ph-purple-light/70 mb-1">Email</span>
                <a href="mailto:ugonnamorgan8@gmail.com" className="text-white font-semibold tracking-tight hover:text-ph-purple-light transition-colors text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>ugonnamorgan8@gmail.com</a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-ph-purple-light/70 mb-1">Location</span>
                <span className="text-white font-semibold tracking-tight text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Awka, Nigeria</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-white/20 tracking-widest">© 2026 PHENOM LABS</span>
            <span className="text-[10px] font-mono text-white/10 tracking-widest hidden sm:block">BUILT IN NIGERIA, MADE FOR THE WORLD</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors tracking-widest">PRIVACY</a>
            <a href="#" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors tracking-widest">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
