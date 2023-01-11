import Link from "next/link";
import { Card, Layout } from "../components";

export default function Home() {
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
              User
            </label>
            <input type="text" className="w-full p-2" />
          </div>
          <div className="relative mb-3">
            <label className="block mb-2">
              Password
            </label>
            <input type="text" className="w-full p-2" />
          </div>

          <button
            type="button"
            className="w-full p-2 bg-slate-900 rounded-md text-gray-100 mt-2 hover:bg-slate-600 transition-all"
          >
            Sign in
          </button>

          <span className="text-center block my-2">or</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="w-full p-2 bg-red-700 rounded-md text-gray-100 mt-2"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full p-2 bg-blue-800 rounded-md text-gray-100 mt-2"
            >
              Linkedin
            </button>
            <button
              type="button"
              className="w-full p-2 bg-blue-900 rounded-md text-gray-100 mt-2"
            >
              Facebook
            </button>
          </div>

          <Link href="password/forget">
            <span className="text-center block mt-8">
              Forget your password?
            </span>
          </Link>
        </form>
      </Card>
    </Layout>
  )
}