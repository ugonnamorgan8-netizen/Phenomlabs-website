import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import HeroCinematic from '../components/HeroCinematic'
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
    <main className="bg-[#0a121c]">

      {/* ── Cinematic Scroll Hero ── */}
      <HeroCinematic />

      {/* ── Page Body ──────────────────────────────────────────────────── */}
      {/* Sitting naturally in the document flow so it never overlaps the cinematic end */}
      <div className="relative z-10 bg-[#0a121c]">

        {/* ── Stats & Marquee ── */}
        <StatsMarqueeSection />

        {/* ── Products Ecosystem ── */}
        <ProductsEcosystemSection />

        {/* ── Industries We Serve ── */}
        <IndustriesSection />

        {/* ── PHENOM Core (Learn · Build · Automate) ── */}
        <ThreeArmsSection />

        {/* ── Learning & Training ── */}
        <LearningSection />

        {/* ── Research & Innovation Lab ── */}
        <ResearchLabSection />

        {/* ── Case Studies ── */}
        <ProjectsSection />

        {/* ── Build Logs ── */}
        <BuildLogsSection />

        {/* ── Demo Hub ── */}
        <DemoHubSection />

        {/* ── Why Us ── */}
        <WhyUsSection />

        {/* ── PHENOM OS Teaser ── */}
        <PhenomOSTeaserSection />

        {/* ── Testimonials ── */}
        <TestimonialsSection />

        {/* ── CTA Banner ── */}
        <CTABannerSection />
      </div>
    </main>
  )
}
