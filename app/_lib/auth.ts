// import { compare } from 'bcrypt'
// import { AuthOptions } from 'next-auth'
// import prisma from './db'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/sign-in',
//   },
//   providers: [
//     CredentialsProvider({
//       id: 'custom',
//       name: 'Custom',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'email',
//           placeholder: 'seu_e-mail@email.com',
//         },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         console.log('Authorize')
//         if (!credentials?.email || !credentials.password) {
//           return null
//         }

//         const existingUser = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         })

//         if (!existingUser) {
//           return null
//         }

//         const passwordMatch = await compare(
//           credentials.password,
//           existingUser.password,
//         )

//         if (!passwordMatch) {
//           return null
//         }

//         return {
//           id: existingUser.id,
//           name: existingUser.name,
//           email: existingUser.email,
//           randomKey: process.env.KEY_CUSTOM_LOGIN,
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     session: ({ session, token }) => {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id,
//           randomKey: token.randomKey,
//         },
//       }
//     },
//     jwt: ({ token, user }) => {
//       if (user) {
//         const u = user as unknown as any
//         return {
//           ...token,
//           id: u.id,
//           randomKey: u.randomKey,
//         }
//       }
//       return token
//     },
//   },

//   // secret: process.env.NEXTAUTH_SECRET,
// }

// // export default NextAuth(authOptions)
