import { useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useUser } from "../../hooks/useUser"


function LoadingPage() {
  const { query } = useRouter()
  const { data, status } = useSession()

  const { socialSignIn } = useUser()

  const handle = useCallback(async (provider: string) => {
    if (status === "authenticated") {
      await socialSignIn({
        user: data.user,
        provider,
        accessToken: String(data?.accessToken),
        email: String(data?.user?.email)
      })
    }
  }, [data, socialSignIn, status])

  useEffect(() => {
    const { provider } = query
    if (provider) {
      handle(String(provider))
    }
  }, [query, handle])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <strong>Loading</strong>
    </main>
  )
}

export default LoadingPage