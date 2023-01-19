import Link from "next/link";
import { signIn as socialSignIn } from "next-auth/react"

import { Envelope, LinkedinLogo, LockKey } from "phosphor-react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../hooks/useUser";

import { Button, Card, InputText, Layout } from "../components";

const schema = z.object({
  email: z.string(),
  password: z.string().min(3)
});

function SignIn() {
  const { signIn } = useUser()

  const { register, handleSubmit, formState: { errors } } = useForm<IAuthentication>({
    resolver: zodResolver(schema)
  });

  const handleSignIn = async ({ email, password }: IAuthentication) => {
    await signIn({ email, password })
  };

  return (
    <Layout className="flex justify-center items-center px-4 py-12 min-h-screen">
      <Card className="w-full max-w-md min-w-sm">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <InputText
            label="E-mail"
            iconBefore={<Envelope size={20} />}
            error={errors.email?.message}
            {...register("email")}
          />
          <InputText
            label="Password"
            type="password"
            iconBefore={<LockKey size={22} />}
            error={errors.password?.message}
            {...register("password")}
          />

          <Button className="mt-4 w-full" type="submit">
            submit
          </Button>

          <div className="mt-4 text-center">
            <span className="text-gray-500">ou</span>
            <div className="mt-5 items-center justify-center">
              <Button
                onClick={() => socialSignIn('google', { callbackUrl: `http://localhost:3000/loading?provider=google`, })}
                className="w-full bg-white border text-gray-700"
                type="button"
              >
                <div className="mr-4">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M4.87566 13.2951L4.10988 16.1539L1.31093 16.2131C0.474461 14.6616 0 12.8865 0 11.0002C0 9.17614 0.443609 7.45601 1.22994 5.94141H1.23054L3.72238 6.39825L4.81396 8.87514C4.5855 9.5412 4.46097 10.2562 4.46097 11.0002C4.46106 11.8077 4.60732 12.5813 4.87566 13.2951Z" fill="#FBBB00" />
                      <path d="M21.8082 8.94531C21.9345 9.61073 22.0004 10.2979 22.0004 11.0003C22.0004 11.7878 21.9176 12.556 21.7598 13.297C21.2243 15.8185 19.8252 18.0203 17.8869 19.5784L17.8863 19.5778L14.7477 19.4177L14.3035 16.6447C15.5896 15.8904 16.5947 14.71 17.1242 13.297H11.2422V8.94531H17.21H21.8082Z" fill="#518EF8" />
                      <path d="M17.8855 19.5776L17.8861 19.5782C16.001 21.0934 13.6064 22 10.9996 22C6.81054 22 3.16847 19.6586 1.31055 16.2129L4.87528 13.2949C5.80422 15.7741 8.19581 17.539 10.9996 17.539C12.2048 17.539 13.3338 17.2132 14.3026 16.6445L17.8855 19.5776Z" fill="#28B446" />
                      <path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950727 18.0208 2.53241Z" fill="#F14336" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                continue with google
              </Button>
              <Button onClick={() => socialSignIn('linkedin', {
                callbackUrl: `http://localhost:3000/loading?provider=google`,
              })}
                className="
                  w-full
                  border
                  bg-blue-800
                  shadow-lg
                  rounded-md
                  p-0
                  text-white-900
                  text-sm
                  mt-2
                  hover:bg-blue-900
                "
                type="button"
              >
                <LinkedinLogo size={26} className="mr-2" />
                continue with linkedin
              </Button>
            </div>
          </div>

          <div className="text-center mt-4 text-sm">
            <Link href="/password/forget">
              I forget my password
            </Link>
          </div>
        </form>
      </Card>
    </Layout>
  )
}

export default SignIn