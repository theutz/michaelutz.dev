import { useSubscribe } from "hooks/useSubscribe"
import { FormEvent, useCallback, useRef } from "react"
import { MailIcon } from "@heroicons/react/outline"

export function Subscribe() {
  const inputEl = useRef<HTMLInputElement>(null)
  const { subscribe, data, error } = useSubscribe()

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      if (!inputEl.current) return

      subscribe(inputEl.current.value)
    },
    [subscribe]
  )

  return (
    <>
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-base text-gray-500">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={inputEl}
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            required
            className="w-full min-w-0 py-2 pl-10 pr-4 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none sm:py-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  )
}

export default Subscribe
