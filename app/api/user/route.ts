import prisma from '@/app/_lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import * as z from 'zod'

const userSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatorio').max(120),
  email: z.string().min(1, 'E-mail é obrigatorio').email('E-mail inválido'),
  password: z
    .string()
    .min(1, 'Senha é obrigatoria')
    .min(8, 'Senha deve conter ao menos 8 caracteres'),
  // confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatoria'),
})
// .refine((data) => data.password === data.confirmPassword, {
//   path: ['confirmPassword'],
//   message: 'Senhas não são iguais',
// })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, name } = userSchema.parse(body)

    // check if email already exist
    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'Já existe um cadastro com esse e-mail!',
        },
        { status: 409 },
      )
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: newUserPassword, ...rest } = newUser

    return NextResponse.json(
      {
        user: rest,
        message: 'User created successfully',
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong!',
      },
      { status: 500 },
    )
  }
}
