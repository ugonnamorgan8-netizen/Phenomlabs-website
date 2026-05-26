import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StatsMarqueeSection from '../components/StatsMarqueeSection'
import ProductsEcosystemSection from '../components/ProductsEcosystemSection'
import IndustriesSection from '../components/IndustriesSection'
import ThreeArmsSection from '../components/ThreeArmsSection'
import LearningSection from '../components/LearningSection'
import ResearchLabSection from '../components/ResearchLabSection'
import ProjectsSection from '../components/ProjectsSection'
import BuildLogsSection from '../components/BuildLogsSection'
import DemoHubSection from '../components/DemoHubSection'
import WhyUsSection from '../components/WhyUsSection'
import PhenomOSTeaserSection from '../components/PhenomOSTeaserSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTABannerSection from '../components/CTABannerSection'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [hash])

  return (
    <main>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Stats & Marquee ── */}
      <StatsMarqueeSection />

      {/* ── Products Ecosystem ── NEW */}
      <ProductsEcosystemSection />

      {/* ── Industries We Serve (deep-dive) ── NEW */}
      <IndustriesSection />

      {/* ── PHENOM Core (Learn · Build · Automate) ── */}
      <ThreeArmsSection />

      {/* ── Learning & Training ── NEW */}
      <LearningSection />

      {/* ── Research & Innovation Lab ── NEW */}
      <ResearchLabSection />

      {/* ── Case Studies ── */}
      <ProjectsSection />

      {/* ── Build Logs ── NEW */}
      <BuildLogsSection />

      {/* ── Demo Hub ── NEW */}
      <DemoHubSection />

      {/* ── Why Us ── */}
      <WhyUsSection />

      {/* ── PHENOM OS Teaser ── */}
      <PhenomOSTeaserSection />

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── CTA Banner ── */}
      <CTABannerSection />
    </main>
  )
}
