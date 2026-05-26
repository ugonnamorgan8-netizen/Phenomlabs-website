import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft, ChevronDown, ArrowRight } from 'lucide-react'
import { PhenomLogo } from './PhenomLogo'

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Ecosystem',
    path: '#',
    dropdown: [
      { name: 'Products', path: '/#products' },
      { name: 'Core Pillars', path: '/#core-pillars' },
      { name: 'Demo Hub', path: '/#demo-hub' },
      { name: 'Research Lab', path: '/#research' },
    ]
  },
  { name: 'Industries', path: '/#industries' },
  {
    name: 'Resources',
    path: '#',
    dropdown: [
      { name: 'Learning Hub', path: '/#learning' },
      { name: 'Build Logs', path: '/#build-logs' },
      { name: 'Case Studies', path: '/#case-studies' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
    ]
  },
  { name: 'PHENOM OS', path: '/phenom-os' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileOpenDropdown(null)
  }, [location])

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-3 glass-nav' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-ph-purple/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ph-purple/20 to-ph-violet/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <PhenomLogo className="w-6 h-6 relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Phenom <span className="text-ph-purple-light">Labs</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase -mt-0.5">Digital Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown
              return (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => hasDropdown && setHoveredLink(link.name)}
                  onMouseLeave={() => hasDropdown && setHoveredLink(null)}
                >
                  {hasDropdown ? (
                    <button
                      className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full text-white/50 hover:text-white/90 flex items-center gap-1"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-ph-purple-light' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative group ${
                        location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white/90'
                      }`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-white/6 rounded-full -z-10 border border-white/8"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-ph-purple group-hover:w-1/2 transition-all duration-300 rounded-full" />
                    </Link>
                  )}

                  {/* Dropdown Box */}
                  <AnimatePresence>
                    {hasDropdown && hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl border border-white/8 p-2 shadow-xl z-50 overflow-hidden"
                        style={{
                          background: 'rgba(10, 10, 10, 0.95)',
                          backdropFilter: 'blur(24px)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-ph-purple/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 flex flex-col gap-0.5">
                          {link.dropdown?.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              className="px-4 py-2 text-xs font-semibold rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all text-left"
                              style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-ph-purple hover:text-white transition-all duration-400 hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-white p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[90] md:hidden flex flex-col"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Header row with back/close button */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/6">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <PhenomLogo className="w-6 h-6" />
                <span className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Phenom <span className="text-ph-purple-light">Labs</span>
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                id="mobile-menu-close"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <ArrowLeft size={15} />
                Back
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-1 px-6 py-8 flex-1 overflow-y-auto no-scrollbar">
              {navLinks.map((link, i) => {
                const hasDropdown = !!link.dropdown
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, type: 'spring', damping: 22 }}
                    className="border-b border-white/5"
                  >
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name)}
                          className="w-full text-2xl font-bold tracking-tight py-4 flex items-center justify-between text-white/35 hover:text-white text-left"
                          style={{ fontFamily: 'Sora, sans-serif' }}
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${mobileOpenDropdown === link.name ? 'rotate-180 text-ph-purple-light' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileOpenDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 pb-4 flex flex-col gap-3"
                            >
                              {link.dropdown?.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-base font-semibold text-white/50 hover:text-white py-1 flex items-center justify-between"
                                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                  <span>{subLink.name}</span>
                                  <ArrowRight size={14} className="text-white/30" />
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-2xl font-bold tracking-tight py-4 flex items-center justify-between group ${
                          location.pathname === link.path ? 'text-white' : 'text-white/35 hover:text-white'
                        }`}
                        style={{ fontFamily: 'Sora, sans-serif' }}
                      >
                        <span>{link.name}</span>
                        {location.pathname === link.path && (
                          <span className="w-1.5 h-1.5 rounded-full bg-ph-purple" />
                        )}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="px-6 pb-10">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-2xl bg-ph-purple text-white font-semibold text-center block text-base hover:bg-ph-purple-dark transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
