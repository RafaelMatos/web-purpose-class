import { compare } from 'bcrypt'
import { NextAuthOptions } from 'next-auth'
import prisma from './db'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      id: 'auth-tidi',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'seu_e-mail@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorize')
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!existingUser) {
          return null
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password,
        )

        if (!passwordMatch) {
          return null
        }

        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          imageUrl: existingUser.imageUrl,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    },
  },

  // secret: process.env.NEXTAUTH_SECRET,
}

// export default NextAuth(authOptions)
