import { ReactNode } from "react"
import Head from "../Head"
import Header from "../Header"
import Footer from "../Footer"

export type Props = {
  children: ReactNode
}

export function Default({ children }: Props) {
  return (
    <div className="bg-white">
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Default
