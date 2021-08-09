/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChipIcon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import React, { Fragment } from "react"
import { classNames } from "utils/classNames"

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]

export function Header() {
  return (
    <header>
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Michael Utz</span>
                  <ChipIcon className="w-auto h-8 text-purple-700 stroke-current sm:h-10" />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 sm:h-12 sm:w-12">
                                    <item.icon
                                      className="w-6 h-6"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Company
                </a>
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign up
                </a>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute inset-x-0 top-0 z-30 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                              <item.icon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              {item.name}
                            </div>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="px-5 py-6">
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Pricing
                      </a>
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Partners
                      </a>
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Company
                      </a>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-base font-medium text-center text-gray-500">
                        Existing customer?
                        <a href="#" className="text-gray-900">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}

export default Header
