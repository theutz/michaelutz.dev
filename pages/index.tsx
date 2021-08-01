/* eslint-disable @next/next/no-img-element */
import Header from "components/Header";
import Footer from "components/Footer";
import Head from "components/Head";
import Hero from "components/pages/home/Hero";
import LogoCloud from "components/pages/home/LogoCloud";
import AlternatingFeatureSections from "components/pages/home/AlternatingFeatures";
import GradientFeatures from "components/pages/home/GradientFeatures";
import Stats from "components/pages/home/Stats";
import CTA from "components/pages/home/CTA";

export function Index() {
  return (
    <div className="bg-white">
      <Head />
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <AlternatingFeatureSections />
        <GradientFeatures />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
