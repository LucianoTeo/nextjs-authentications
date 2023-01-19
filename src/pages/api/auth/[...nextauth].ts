import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedinProvider from "next-auth/providers/linkedin"

export default NextAuth({
  secret: 'secrenextauthforcademeufeedbackv1',
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth',
      authorization:'https://accounts.google.com/o/oauth2/auth?response_type=code',
      profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
    }),
    LinkedinProvider({
      clientId: String(process.env.LINKEDIN_ID),
      clientSecret: String(process.env.LINKEDIN_SECRET),
    }),
  ],

  callbacks: {
    signIn: async () => {
      return true
    },

    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    
    async session({ session, token, user }) {
      const sessionWithToken = {
        ...session,
        accessToken: String(token.accessToken)
      }
      
      return sessionWithToken
    }
  },
})