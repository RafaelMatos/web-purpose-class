'use client'
import { Button } from '@/app/_components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/app/_components/ui/form'
import { useToast } from '@/app/_components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Input } from '@/app/_components/ui/input'
import SignInForm from '@/app/_components/form/SignInForm'

const page = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Card className=" w-[500px]">
        <CardHeader>
          <CardTitle>Realizar Login</CardTitle>
          <CardDescription>
            Faça o seu login para ter acesso a diversos cursos para aprimorar o
            seu conhecimento!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default page
