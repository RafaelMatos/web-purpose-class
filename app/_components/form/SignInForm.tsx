'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  Form,
} from '../ui/form'
// import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'
import * as z from 'zod'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import RegisterLink from '../dialogs/_components/registerLink'

const signInFormSchema = z.object({
  email: z
    .string({ required_error: 'Preencher campo de e-mail' })
    .email('E-mail inválido'),
  password: z
    .string({ required_error: 'Preencher campo de senha' })
    .min(1, 'Senha é obrigatoria')
    .min(8, 'Senha deve conter ao menos 8 caracteres'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

const SignInForm = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [error, setError] = useState<string | null>(null)
  // const { toast } = useToast()

  const router = useRouter()

  const handleSubmit = async (data: SignInFormData) => {
    const result = await signIn('auth-tidi', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (result?.error) {
      setError('Login Inválido')
      return
    }

    router.push('/classroom')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu_e-mail@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="Sua senha" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4">
          {/* <Button
            variant="outline"
            onClick={() => {
              router.push('/')
            }}
          >
            Cancelar
          </Button> */}
          <Button variant="tertiary" type="submit">
            Entrar
          </Button>
        </div>
        {/* <RegisterLink /> */}
      </form>

      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </Form>
  )
}

export default SignInForm
