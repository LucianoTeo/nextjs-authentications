import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'
import { UserProvider } from '../hooks/useUser'

export default function App({ Component, pageProps: { session, ...pageProps } }
  : AppProps) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}
