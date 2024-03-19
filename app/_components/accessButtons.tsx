import { useState } from 'react'
import SignInDialog from './dialogs/signIn'
import UserRegisterDialog from './dialogs/userRegister'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'

const AccessButtons = () => {
  return (
    <div className="flex gap-4">
      <UserRegisterDialog />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="tertiary">Acessar</Button>
        </DialogTrigger>
        <SignInDialog />
      </Dialog>
    </div>
  )
}

export default AccessButtons
