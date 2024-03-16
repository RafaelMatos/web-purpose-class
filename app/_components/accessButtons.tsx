import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'

const AccessButtons = () => {
  return (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="warning">Cadastrar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Realizar Cadastro</DialogTitle>
            <DialogDescription>
              Aqui será feito o cadastro na aplicação
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button className="h-10 px-4 py-2 text-gray-200 font-medium hover:bg-blue-500/90 rounded-md"> */}

          <Button variant="tertiary">Acessar</Button>
          {/* <button className="bg-blue">Acessar</button> */}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Realizar Login</DialogTitle>
            <DialogDescription>
              Aqui será possivel realizar o login na aplicação
            </DialogDescription>
          </DialogHeader>
          <p>E-mail</p>
          <Input placeholder="Seu e-mail institutional" />
          <p>Senha</p>
          <Input placeholder="Sua senha" type="password" />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AccessButtons
