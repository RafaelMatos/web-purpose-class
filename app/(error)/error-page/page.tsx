import Image from 'next/image'
import Link from 'next/link'

const ClassroomPage = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">
        Desculpe, estamos trabalhando pesado nessa área
      </h1>
      <Image
        src="https://cdn.myportfolio.com/3a2bf595ba22ddf044fce0b5f616a6d2/c60e49a1-3840-44fb-8dae-3a22feeeea6d_rw_1920.gif?h=77c17cdffcc93c6bd66593835296482a"
        width={500}
        height={500}
        alt="Biiirrl"
      />
      <h2 className="text-3xl">
        Você pode conferir nosso{' '}
        <strong className="font-bold text-purple-600">
          <Link href="/classromm">catalogo</Link>
        </strong>
        ,
      </h2>
    </div>
  )
}

export default ClassroomPage
