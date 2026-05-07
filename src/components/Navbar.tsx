import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { PhenomLogo } from './PhenomLogo'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'PHENOM OS', path: '/phenom-os' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
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
            ))}
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
            <div className="flex flex-col gap-1 px-6 py-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, type: 'spring', damping: 22 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-bold tracking-tight py-3 flex items-center justify-between group border-b border-white/5 ${
                      location.pathname === link.path ? 'text-white' : 'text-white/35 hover:text-white'
                    }`}
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    <span>{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="w-1.5 h-1.5 rounded-full bg-ph-purple" />
                    )}
                  </Link>
                </motion.div>
              ))}
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
