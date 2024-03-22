import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'
import SignInForm from '@/app/_components/form/SignInForm'

const SignInPage = () => {
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

export default SignInPage
