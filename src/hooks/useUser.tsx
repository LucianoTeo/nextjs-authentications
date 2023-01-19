import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSession, signOut as socialSignOut } from "next-auth/react"

import { createUser, me } from "../services/http/users"
import { authenticateUser } from "../services/http/users/authentication"

export interface IUserContext {
  loading: boolean
  user: IUser | undefined
  socialSignIn: (credentials: ISocialAuthentication) => Promise<void>
  signIn: (credentials: IAuthentication) => Promise<IUser | void>
  signUp: (data: IUser) => Promise<IUser | void>
  signOut: () => void
}

const UserContext = createContext({} as IUserContext)

function UserProvider({ children }: PropsWithChildren) {
  const { status } = useSession()
  const router = useRouter()

  const [loading, setIsLoading] = useState(true)
  const [user, setUser] = useState<IUser | undefined>()

  const [token, _] = useState<string | undefined>(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('@token')
      return token ? token : undefined
    }
  })

  useEffect(() => {
    async function persistWithToken() {
      if (token) {
        try {
          console.log('token', token)
          // const response = await me(String(token))
          // setUser(response)
          // setIsLoading(false)
        } catch (error) {
          alert(error)
          localStorage.removeItem('@token')
          setIsLoading(false)
        }
      }
    }
    persistWithToken()
  }, [token])

  async function signIn(credentials: IAuthentication) {
    try {
      console.log('sign in credentials', credentials)
      // const response = await authenticateUser(credentials);
      // localStorage.setItem('@token', String(response?.token))

      // setUser(response?.user)
      // setIsLoading(false)

      // router.push('/dashboard')

    } catch (error) {
      alert(error)
      setIsLoading(false)
      router.push('/')
    }
  }

  async function socialSignIn(credentials: ISocialAuthentication) {
    try {
      console.log('social login backend auth', credentials)
      setUser(credentials.user)
      // const response = await authenticateUser(credentials);
      // localStorage.setItem('@token', String(response?.token))

      // setUser(response?.user)
      // setIsLoading(false)

      router.push('/')

    } catch (error) {
      alert(error)
      setIsLoading(false)
      router.push('/')
    }
  }

  async function signUp(data: IUser) {
    try {
      console.log('sign up data', data)

      // const response = await createUser(data);
      // setUser(response)
    } catch (error) {
      alert(error)
    }
  }

  function signOut() {
    if (status === "authenticated") {
      socialSignOut({ redirect: false })
      localStorage.removeItem('@token')
      return router.push('/')
    }
    localStorage.removeItem('@token')
    router.push('/')
  }

  return (
    <UserContext.Provider value={{ signIn, socialSignIn, signUp, signOut, loading, user }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const userContext = useContext(UserContext)

  if (!userContext) {
    throw new Error('User Context must be within User.provider')
  }

  return userContext
}

export { UserProvider, useUser }