import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
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
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 flex w-full max-w-[95%] items-center justify-between rounded-full px-4 py-3 md:px-6 md:py-2.5 ${
        isScrolled 
          ? 'top-4 lg:max-w-5xl bg-helix-blue-dark-2/70 backdrop-blur-[25px] border border-helix-stroke shadow-lg' 
          : 'top-6 lg:max-w-6xl bg-transparent border border-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-helix-stroke group-hover:border-helix-cyan/30 transition-all duration-500 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-helix-blue/20 to-helix-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <PhenomLogo className="w-5 h-5 relative z-10" />
        </div>
        <div className="flex flex-col">
          <span className="text-[17px] font-bold tracking-tight text-white leading-tight">
            Phenom <span className="text-helix-cyan">Labs</span>
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase -mt-0.5">Digital Intelligence</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-1">
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
                  className={`px-3 py-2 text-[14px] font-medium transition-all duration-300 rounded-full flex items-center gap-1.5 whitespace-nowrap ${
                    hoveredLink === link.name ? 'text-white' : 'text-helix-accent/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-[#83e7ee]' : ''}`} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-[14px] font-medium transition-all duration-300 rounded-full relative group whitespace-nowrap ${
                    location.pathname === link.path ? 'text-white' : 'text-helix-accent/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#83e7ee] group-hover:w-1/2 transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
                </Link>
              )}

              {/* Dropdown Box */}
              <AnimatePresence>
                {hasDropdown && hoveredLink === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-[20px] border border-helix-stroke p-2 shadow-2xl z-50 overflow-hidden bg-[#0a121c]/95 backdrop-blur-[20px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/10 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col gap-1">
                      {link.dropdown?.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="px-4 py-2.5 text-[14px] font-medium rounded-xl text-helix-accent/70 hover:text-white hover:bg-white/5 transition-all text-left flex items-center justify-between group whitespace-nowrap"
                        >
                          {subLink.name}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#83e7ee]" />
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
      <div className="hidden lg:block shrink-0 pl-2">
        <Link
          to="/contact"
          className="px-6 py-2.5 rounded-full bg-white text-black text-[14px] font-semibold hover:bg-[#0066cc] hover:text-white transition-all duration-400 hover:shadow-[0_0_24px_rgba(0,102,204,0.4)] whitespace-nowrap"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        id="mobile-menu-toggle"
        className="lg:hidden text-white p-2.5 rounded-full border border-helix-stroke bg-white/5 hover:bg-white/10 transition-all"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-4 top-[80px] z-[90] lg:hidden flex flex-col rounded-[24px] border border-helix-stroke shadow-2xl overflow-hidden max-h-[calc(100vh-100px)]"
            style={{ background: 'rgba(9, 17, 26, 0.95)', backdropFilter: 'blur(24px)' }}
          >
            {/* Nav links */}
            <div className="flex flex-col gap-1 px-6 py-6 flex-1 overflow-y-auto no-scrollbar">
              {navLinks.map((link, i) => {
                const hasDropdown = !!link.dropdown
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: "easeOut" }}
                    className="border-b border-white/5"
                  >
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name)}
                          className="w-full text-xl font-bold tracking-tight py-4 flex items-center justify-between text-white/50 hover:text-white text-left"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={20} className={`transition-transform duration-300 ${mobileOpenDropdown === link.name ? 'rotate-180 text-helix-cyan' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileOpenDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 pb-4 flex flex-col gap-2"
                            >
                              {link.dropdown?.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  to={subLink.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-[15px] font-medium text-white/50 hover:text-white py-2 flex items-center justify-between bg-white/0 hover:bg-white/5 rounded-lg px-3 transition-colors"
                                >
                                  <span>{subLink.name}</span>
                                  <ArrowRight size={16} className="text-white/30" />
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
                        className={`text-xl font-bold tracking-tight py-4 flex items-center justify-between group ${
                          location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        {location.pathname === link.path && (
                          <span className="w-2 h-2 rounded-full bg-helix-cyan" />
                        )}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="p-6 bg-white/5 border-t border-helix-stroke">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-helix-blue text-white font-semibold text-center block text-[15px] hover:bg-blue-600 transition-colors shadow-lg shadow-helix-blue/20"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
