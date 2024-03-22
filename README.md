# Web Purpose Class ✍🏽💻  

Plataforma destinado à disponibilizar aulas de cursos de diversas categorias:

- Criar acesso de usuário com email e senha ;
- Realizar login de usuário com email e senha ;
- Fazer listagem de cursos cadastrados;
- Listagem de categorias dos cursos;


<!-- <a href="https://fswbarber-rm.vercel.app/">Acesse a aplicação</a> -->



<!-- <img src='https://res.cloudinary.com/dkrhvi3kt/image/upload/v1708521853/github/FSW%20Barber/Gif/jzdopjggkdauhvlvilpi.gif' alt='gif da tela da aplicação FSW Barber'> -->
<!-- <img src='https://github.com/RafaelMatos/bookwise/raw/master/public/tela.gif' alt='gif da tela da aplicação FSW Barber'> -->

<!-- <details>
    <summary>Responsivo</summary>
    <img src='./src/assets/responsive.png' alt='print da tela da aplicação Ignite Call'>
</details> -->

## Tecnologias usadas ⚙

- Next.js
- React.js
- TailwindCSS
- Typescript
- Shadcn UI
- Prisma
- NextAuth.js
- Lucide-react

<!-- - Zod -->
<!-- - React Hook Form -->
<!-- - Axios -->
<!-- - Ignite-ui -->
<!-- - Nookies -->

## Atualizações 🔃

  <!-- <details>
    <summary>Histórico</summary>

      - Adicionado a configuração pageExtensions do Next.js;

    
</details> -->

  - Criada tela inicial;
  - Criada tela de login
  - Criado dialog de criação de registro
  - Acesso ao dashboard da aplicação 
  <!-- - Adicionada funcionalidade de agendamentos
  - Adicionada página de agendamentos
  - <details>
    <summary>Adicionada funcionalidade de cancelamento de agendamento</summary>
    <img src='https://github.com/RafaelMatos/projectsImages/blob/master/FSWBarber/printscreens/update-cancel-booking.gif?raw=true' alt='gif de atualização da aplicação FSW Barber'>
    </details> -->



  <!-- <img src='./src/assets/update.gif' alt='gif da tela da aplicação Ignite Call'> -->
  
  

## Como utilizar

- Clone o projeto do repositório

```
git clone https://github.com/RafaelMatos/web-purpose-class
```

- Acesse a pasta do projeto

```
cd /web-purpose-class
```

- Instale as dependências

```
npm install
```
- Criar arquivo .env com as chaves necessarias( seguir arquivo .envExample)

- Inicializa o Prisma( Usar banco de dados de sua preferencia, no exemplo é usado o postgresql)
- Necessario fazer a instalação do docker na maquina

```
npx prisma init --datasource-provider postgresql
```
- Realiza as migrations do Prisma

```
npx prisma migrate dev --name init
```

- Realiza o seed do banco de dados

```
npx prisma db seed
```
- Execute o projeto

```
npm run dev
```

- Acesse no navegador o endereço indicado no terminal
