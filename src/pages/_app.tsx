import "@/styles/globals.css";
import { AppProps } from "next/app"

import { Inter } from 'next/font/google'

const InterFont = Inter({
  weight: ["400"],
  subsets: ['latin']
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={InterFont.className}>
      <Component {...pageProps} />
    </main>
  )

}

export default App
