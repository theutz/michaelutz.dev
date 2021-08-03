import {
  BeakerIcon,
  ChatIcon,
  DatabaseIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TerminalIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "The Basics",
    description:
      "HTML, CSS, and JavaScript. The world runs on this stuff, and I've been using it for decades.",
    icon: HomeIcon,
  },
  {
    name: "Front-End Frameworks",
    description:
      "Tons of experience with React, and some experience with Angular and Vue. I'd love to learn Svelte.",
    icon: SparklesIcon,
  },
  {
    name: "Speaking of React...",
    description:
      "Familiar with all the old favorites like Redux & Enzyme, as well as all the newest goodies.",
    icon: ChatIcon,
  },
  {
    name: "What About The Backend?",
    description:
      "I can write a mean backend (pun intended), but I like PostgreSQL and TypeScript for sanity.",
    icon: DatabaseIcon,
  },
  {
    name: "Can you do WordPress?",
    description:
      "Sure! I've been writing WordPress sites since 2008 or so. PHP & MySQL are my friends, too.",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Can you write tests?",
    description:
      "I love writing tests! Unit testing with Jest and integration/end-to-end testing with Cypress.",
    icon: BeakerIcon,
  },
  {
    name: "So, you just do tech stuff?",
    description:
      "Not at all! I have a passion and eye for design, user experience, and accessibility.",
    icon: TerminalIcon,
  },
  {
    name: "How did you make this site?",
    description:
      "I work smarter not harder. This site is made and deployed with Tailwind CSS & UI, NextJS, and Vercel.",
    icon: QuestionMarkCircleIcon,
  },
]

export function GradientFeatures() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Skills you&apos;ll definitely want
        </h2>
        <p className="max-w-3xl mt-4 text-lg text-purple-200">
          I&apos;ve been making web stuff for decades. I&apos;ve got experience
          with multiple content management systems, and I love the new JAMstack
          stuff!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                  <feature.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-purple-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GradientFeatures
