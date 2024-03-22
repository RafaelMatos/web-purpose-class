import Image from 'next/image'
import AccessButtons from './accessButtons'
import { auth } from '@/auth'

const Header = async () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user } = await auth()
  return (
    <header className="flex w-full p-4 items-center justify-between   bg-primary ">
      <Image
        src="https://colegioproposito.com/site/public/images/logo-proposito-colored.svg"
        width={180}
        height={60}
        alt="Logo Colégio Proposito"
      />
      {user ? (
        <div className="flex flex-col">
          <p>{`Olá,${user.name}`}</p>
        </div>
      ) : (
        <AccessButtons />
      )}
    </header>
  )
}

export default Header
