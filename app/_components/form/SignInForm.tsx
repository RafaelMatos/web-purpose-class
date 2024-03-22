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
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/app/_lib/actions'
import { ArrowRight, CircleAlert } from 'lucide-react'

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
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  const { pending } = useFormStatus()

  // const [error, setError] = useState<string | null>(null)
  // const { toast } = useToast()

  // const router = useRouter()

  // const handleSubmit = async (data: SignInFormData) => {
  //   // const result = await signIn('custom', {
  //   //   email: data.email,
  //   //   password: data.password,
  //   //   callbackUrl,
  //   // })

  //   // if (result?.error) {
  //   //   setError('Login Inválido')
  //   //   return
  //   // }
  //   console.log('cookies:', cookies)
  //   console.log('callbackUrl:', callbackUrl)
  //   router.push('/classroom')
  // }

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8"> */}
      <form action={dispatch} className="space-y-8">
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
          <Button variant="tertiary" type="submit" aria-disabled={pending}>
            Entrar <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <CircleAlert className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
        {/* <RegisterLink /> */}
      </form>
    </Form>
  )
}

export default SignInForm
