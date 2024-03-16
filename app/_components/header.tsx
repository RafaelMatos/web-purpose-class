'use client'
import Image from 'next/image'
import { useState } from 'react'
import AccessButtons from './accessButtons'

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <header className="flex w-full p-4 items-center justify-between   bg-primary">
      <Image
        src="/logo.jpeg"
        width={180}
        height={60}
        alt="Logo Colégio Proposito"
      />
      {isAuthenticated ? <p>Logado</p> : <AccessButtons />}
    </header>
  )
}

export default Header
