import { authOptions } from '@/app/_lib/auth'
import NextAuth from 'next-auth'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const nextAuthOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/',
//   },
//   providers: [
//     CredentialsProvider({
//       id: 'auth-tidi',
//       name: 'Credentials',
//       credentials: {
//         email: {
//           label: 'E-mail',
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
//           imageUrl: existingUser.imageUrl,
//         }
//       },
//     }),
//   ],
// }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
