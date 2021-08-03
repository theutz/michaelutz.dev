import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import DefaultLayout from "components/layouts/Default"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
