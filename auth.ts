import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import prisma from './app/_lib/db'
import { compare } from 'bcryptjs'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const existingUser = await prisma.user.findUnique({
            where: {
              email,
            },
          })
          if (!existingUser) {
            return null
          }

          const passwordMatch = await compare(password, existingUser.password)

          if (!passwordMatch) {
            return null
          }

          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          }
        }

        console.log('Invalid credentials')

        return null
      },
    }),
  ],
})
