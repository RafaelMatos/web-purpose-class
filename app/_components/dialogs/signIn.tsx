import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import axios, { AxiosError } from 'axios'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
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
  })

  // const router = useRouter()

  const handleSubmit = async (data: SignInFormData) => {
    try {
      console.log(data)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('Finalizou')
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Realizar Cadastro</DialogTitle>
        <DialogDescription>
          Faça o seu cadastro para ter acesso a diversos cursos para aprimorar o
          seu conhecimento!
        </DialogDescription>
      </DialogHeader>
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
            <Button variant="outline">Cancelar</Button>
            <Button variant="tertiary" type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  )
}

export default SignInDialog
