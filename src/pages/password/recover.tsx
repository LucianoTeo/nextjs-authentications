import Link from "next/link"
import { useRouter } from "next/router"
import { Card, Layout } from "../../components"

function RecoverPassword() {
  const router = useRouter()

  return (
    <Layout className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm p-8 shadow-xl rounded-sm">
        <h2 className="text-center text-2xl font-bold">Next JS</h2>
        <span className="block text-center text-lg mt-2">
          Awesome Authentications
        </span>

        <div className="divide my-5" />

        <form>
          <div className="relative mb-3">
            <label className="block mb-2">
              New password
            </label>
            <input type="text" className="w-full p-2" />
          </div>

          <div className="relative mb-3">
            <label className="block mb-2">
              Confirm password
            </label>
            <input type="text" className="w-full p-2" />
          </div>

          <button
            type="button"
            className="w-full p-2 bg-slate-900 rounded-md text-gray-100 mt-2 hover:bg-slate-600 transition-all"
            onClick={() => router.push('/')}
          >
            Submit
          </button>

          <Link href="/">
            <span className="text-center block mt-8">
              Back to login
            </span>
          </Link>
        </form>
      </Card>
    </Layout>
  )
}

export default RecoverPassword