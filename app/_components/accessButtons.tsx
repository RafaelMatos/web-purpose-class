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
              Faça o seu cadastro para ter acesso a diversos cursos para
              aprimorar o seu conhecimento!
            </DialogDescription>
          </DialogHeader>
          <form>
            <p>Nome</p>
            <Input placeholder="Seu nome" />
            <p>E-mail</p>
            <Input placeholder="Seu e-mail institutional" />
            <p>Senha</p>
            <Input placeholder="Sua senha" type="password" />
            <p>Confirmar senha</p>
            <Input placeholder="Confirme sua senha" type="password" />
            <div className="flex gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button variant="tertiary">Registrar</Button>
            </div>
          </form>
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
              Faça o login para ter acesso a diversos cursos para aprimorar o
              seu conhecimento!
            </DialogDescription>
          </DialogHeader>
          <form>
            <p>E-mail</p>
            <Input placeholder="Seu e-mail institutional" />
            <p>Senha</p>
            <Input placeholder="Sua senha" type="password" />
            <div className="flex gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button variant="tertiary">Entrar</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AccessButtons
