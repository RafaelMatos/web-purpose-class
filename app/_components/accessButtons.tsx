import { useRouter } from 'next/navigation'
import SignInDialog from './dialogs/signIn'
import UserRegisterDialog from './dialogs/userRegister'
import { Button } from './ui/button'

const AccessButtons = () => {
  const router = useRouter()
  return (
    <div className="flex gap-4">
      <UserRegisterDialog />
      {/* <SignInDialog /> */}
      <Button variant="tertiary" onClick={() => router.push('/sign-in')}>
        Login
      </Button>
    </div>
  )
}

export default AccessButtons
