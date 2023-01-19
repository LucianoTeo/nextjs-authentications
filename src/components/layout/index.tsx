import { HTMLAttributes, ReactNode } from "react"
import Link from "next/link"

import { SignOut } from "phosphor-react"
import { useUser } from "../../hooks/useUser"

import { Button } from "../button"

interface PropsLayout extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title?: string
  description?: string
  isLoading?: boolean
}

function Layout({
  className,
  children,
  isLoading,
}: PropsLayout) {
  const { user, signOut } = useUser()

  return (
    <main className="w-full min-h-screen">
      {user && (
        <header className="p-4">
          <div className="flex items-center max-w-xs ml-auto">
            <h2 className="text-gray-600 w-full">
              <Link href={`/users/${user?.id}`}>{user?.name}</Link>
            </h2>
            <Button className="w-full bg-red-600 p-0 text-gray-200" onClick={signOut}>
              <SignOut size={20} />
            </Button>
          </div>
        </header>
      )}
      <section className={`w-full ${className}`}>
        {isLoading ? 'Loading' : children}
      </section>
    </main>
  )
}

export { Layout }