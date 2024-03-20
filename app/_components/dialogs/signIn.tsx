import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
// import axios, { AxiosError } from 'axios'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/navigation'

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

const SignInDialog = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { toast } = useToast()

  const router = useRouter()

  const handleSubmit = async (data: SignInFormData) => {
    try {
      const { email, password } = data
      const signInData = await signIn('auth-tidi', {
        email: data.email,
        password: data.password,
        redirect: false,
      })
      console.log(signInData)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('Finalizou')
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="tertiary">Acessar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Realizar Login</DialogTitle>
          <DialogDescription>
            Faça o seu login para ter acesso a diversos cursos para aprimorar o
            seu conhecimento!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    {/* <FormControl> */}
                    <Input placeholder="seu_e-mail@email.com" {...field} />
                    {/* </FormControl> */}
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
                    {/* <FormControl> */}
                    <Input placeholder="Sua senha" type="password" {...field} />
                    {/* </FormControl> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button variant="tertiary" type="submit">
                Entrar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog
