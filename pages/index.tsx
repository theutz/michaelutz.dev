/* eslint-disable @next/next/no-img-element */
import Hero from "components/pages/home/Hero"
import LogoCloud from "components/pages/home/LogoCloud"
import AlternatingFeatureSections from "components/pages/home/AlternatingFeatures"
import GradientFeatures from "components/pages/home/GradientFeatures"
import Stats from "components/pages/home/Stats"
import CTA from "components/pages/home/CTA"

export function Index() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <AlternatingFeatureSections />
      <GradientFeatures />
      <Stats />
      <CTA />
    </>
  )
}

export default Index
