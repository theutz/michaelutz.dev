/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ThumbUpIcon, GlobeIcon } from "@heroicons/react/outline";
import {
  useEndorsement,
  Endorsement as EndorsementType,
} from "hooks/useEndorsement";
import { useState } from "react";
import { classNames } from "utils/classNames";

function Endorsement({
  name,
  title,
  company,
  content,
  image,
}: EndorsementType) {
  const [showFull, setShowFull] = useState(false);
  return (
    <blockquote>
      <div onClick={() => setShowFull((prev) => !prev)}>
        <p
          className={classNames(
            "text-base text-gray-500 block whitespace-pre-line cursor-pointer",
            !showFull && "line-clamp-3"
          )}
        >
          &ldquo;{content.trim()}&rdquo;
        </p>
      </div>
      <footer className="mt-3">
        <div className="flex items-center space-x-3">
          <div className="relative flex-shrink-0">
            <div className="w-6 h-6">
              <Image
                className="rounded-full"
                layout="fill"
                objectFit="contain"
                src={image}
                alt={name}
              />
            </div>
          </div>
          <div className="text-base font-medium text-gray-700">
            {name}, {title} @ {company}
          </div>
        </div>
      </footer>
    </blockquote>
  );
}

export function AlternatingFeatureSections() {
  const { endorsement, increment } = useEndorsement();
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                  <ThumbUpIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The Humans Have Spoken
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Building tech products is also about building relationships.
                  Here&apos;s what some of my co-workers have to say about
                  working with me.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => increment()}
                    className="flex inline-flex px-4 py-2 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Read Another
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-gray-200">
              <Endorsement {...endorsement} />
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="relative lg:m-0 lg:h-full">
                <img
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none filter brightness-90"
                  src="/assets/images/seattle-skyline.jpg"
                  alt="Inbox user interface"
                />
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-r from-purple-800 to-indigo-600 lg:w-massive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                  <GlobeIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Better understand your developer
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  I was born in lovely Seattle, Washington in the USA. I met my
                  wife in Nashville, Tennessee, and we&apos;ve moved to
                  Helsinki, Finland to start a family.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="relative lg:h-full lg:m-0">
                <img
                  className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/assets/images/helsinki-skyline.jpg"
                  alt="Customer profile user interface"
                />
                <div className="absolute inset-0 lg:left-auto mix-blend-overlay bg-gradient-to-r from-purple-800 to-indigo-600 lg:w-massive"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlternatingFeatureSections;
