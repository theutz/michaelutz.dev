import { FormEvent, useRef, useState } from "react"

export function Subscribe() {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState("")

  const subscribe = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: inputEl.current?.value }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error.title)
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ""
      setMessage("Success! You are now subscribed to the newsletter.")
    }
  }

  return (
    <>
      <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-base text-gray-500">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="mt-4 sm:flex sm:max-w-md" onSubmit={subscribe}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          ref={inputEl}
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 appearance-none rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border rounded-md shadow-sm hover:from-purple-700 hover:to-indigo-700"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div>{message}</div>
    </>
  )
}

export default Subscribe
