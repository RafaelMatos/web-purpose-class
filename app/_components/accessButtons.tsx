import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

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
          <Button className="h-10 px-4 py-2 text-gray-200 font-medium bg-blue-500 hover:bg-blue-500/90 rounded-md">
            Acessar
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Realizar Login</DialogTitle>
            <DialogDescription>
              Aqui será possivel realizar o login na aplicação
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AccessButtons
