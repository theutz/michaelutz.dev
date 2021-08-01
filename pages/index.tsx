/* eslint-disable @next/next/no-img-element */
import Header from "components/Header";
import Footer from "components/Footer";
import Head from "components/Head";
import Hero from "components/pages/home/Hero";
import LogoCloud from "components/pages/home/LogoCloud";
import AlternatingFeatureSections from "components/pages/home/AlternatingFeatures";
import GradientFeatures from "components/pages/home/GradientFeatures";
import Stats from "components/pages/home/Stats";

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

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-800 border border-transparent rounded-md shadow-sm bg-indigo-50 hover:bg-indigo-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
