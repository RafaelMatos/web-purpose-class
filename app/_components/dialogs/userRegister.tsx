'use client'
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { api } from '@/app/_lib/axios'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useToast } from '../ui/use-toast'

const userRegisterFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Preencher campo de Nome' })
      .min(1, 'Nome é obrigatorio')
      .max(100, 'No máximo 100 caracteres'),
    email: z
      .string({ required_error: 'Preencher campo de E-mail' })
      .min(1, 'E-mail é obrigatorio')
      .email('E-mail inválido'),
    password: z
      .string({ required_error: 'Preencher campo de Senha' })
      .min(1, 'Senha é obrigatoria')
      .min(8, 'Senha deve conter ao menos 8 caracteres'),
    confirmPassword: z
      .string({ required_error: 'Preencher campo de Confirmar senha' })
      .min(1, 'Confirmação de senha é obrigatoria'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não são iguais',
  })

type UserRegisterFormData = z.infer<typeof userRegisterFormSchema>

const UserRegisterDialog = () => {
  const { toast } = useToast()
  const form = useForm<UserRegisterFormData>({
    resolver: zodResolver(userRegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [submitIsloading, setSubmitIsLoading] = useState(false)

  const handleSubmit = async (data: UserRegisterFormData) => {
    try {
      setSubmitIsLoading(true)
      const { name, email, password } = data
      const response = await api.post('user', {
        name,
        email,
        password,
      })

      setDialogIsOpen(false)
      form.reset()

      toast({
        title: 'Usuário cadastrado com sucesso!',
        description: 'Faça o login para acessar aos cursos.',
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        toast({
          title: 'Erro ao registrar usuário',
          variant: 'destructive',
          description: err.response.data.message,
        })
      }
    } finally {
      setSubmitIsLoading(false)
    }
  }
  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant="warning">Cadastrar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Realizar Cadastro</DialogTitle>
          <DialogDescription>
            Faça o seu cadastro para ter acesso a diversos cursos para aprimorar
            o seu conhecimento!
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      <Input
                        placeholder="Sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirme sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setDialogIsOpen(false)
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="tertiary"
                  type="submit"
                  disabled={!form.formState.isValid || submitIsloading}
                >
                  Registrar
                </Button>
              </div>
              {submitIsloading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UserRegisterDialog
