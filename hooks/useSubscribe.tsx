import { useCallback, useState } from "react"
import useSWR from "swr"
import axios from "axios"

const fetcher = async (url: string, email: string) => {
  try {
    const res = await axios.post(url, { email }).then((res) => res.data)
    return res
  } catch (e) {
    throw e.response.data
  }
}

const statuses = ["loading", "ready", "error", "success"] as const

type Status = typeof statuses[number]

export function useSubscribe() {
  const key = "/api/subscribe"
  const [email, setEmail] = useState<string | null>(null)

  const { data, error, isValidating } = useSWR(
    email ? [key, email] : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const subscribe = useCallback((email: string) => setEmail(email), [setEmail])

  let status: Status

  if (!!email && isValidating) {
    status = "loading"
  } else if (!!error) {
    status = "error"
  } else if (!!data) {
    status = "success"
  } else {
    status = "ready"
  }

  return {
    subscribe,
    data,
    error,
    status,
  }
}
