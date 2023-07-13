# Página de Influenciadores
## Este é um projeto de uma página de influenciadores, onde os usuários podem gerenciar todas as informações ou apenas analisarem.

A página oferece recursos para listar, filtrar e editar os influenciadores cadastrados.

para executar o projeto você deve exporta-lo do github da seguinte maneira, após entrar no meu github e encontrar o projeto de interesse clique nesse opção
![baixando](https://github.com/Samanta00/Digital-influencers/assets/80990432/c8e8d296-bedf-4f82-ab8b-3aebab032bea)

copie esse link de https e execute no seu terminal com um:
git clone https://github.com/Samanta00/Digital-influencers.git

abra as pastas de front com um cd front e de um npm install para baixar todas as dependências
abra as pastas de api com um cd api e de um npm install para baixar todas as dependências

### Let's Go

após ter baixado todas as dependências de ambas as pastas entre novamente nelas
para a api execute no terminal: npm run dev
para o front execute no terminal: ng serve

Feito isso executará o projeto executará em seu navegador pelo link que exibirá no console do front
## Página de inicio
![inicio](https://github.com/Samanta00/Digital-influencers/assets/80990432/f04fd61b-685f-4f19-9662-bca8e3df5b39)
 
### click em login e será redirecionado para uma página que te dará duas opções de acessar o site
![login](https://github.com/Samanta00/Digital-influencers/assets/80990432/97a5e1f7-729d-40f2-9e5f-6581500e8b81)

### caso acesse o login com todas as permissões você terá acesso a essa interface 
![create](https://github.com/Samanta00/Digital-influencers/assets/80990432/b6663472-a533-4832-9bc5-99128f0eae6e)
![filtro](https://github.com/Samanta00/Digital-influencers/assets/80990432/8b84955d-b774-4c87-9c37-8385c291c85c)
![lista](https://github.com/Samanta00/Digital-influencers/assets/80990432/b18afcd9-dc98-40c0-a9b3-783e04a0e00c)

### Caso acesse o login sem as permissões você terá acesso a essa interface
![semPermissao](https://github.com/Samanta00/Digital-influencers/assets/80990432/1b89f199-2cca-4bbf-9548-7633a878e7a6)

### Note que ao acessar sem permissões você não conseguirá excluir, editar ou criar.

## Oque ocorre por debaixo do front?

### ao utilizar sua api ela está criando um crud
para acessar suas rotas faça o login ao seu token
Para ter acesso ao seu login, utilize as seguintes informações
![rota-login](https://github.com/Samanta00/Digital-influencers/assets/80990432/0081773b-d745-448d-a014-9d9423d8c907)

### agora configure seu receptor para que ele tenha acesso ao token
![testes-login](https://github.com/Samanta00/Digital-influencers/assets/80990432/b5a2a7bc-d349-4995-9295-b36690486cb6)

### para encontrar o token faça a seguinte alteração
![configs](https://github.com/Samanta00/Digital-influencers/assets/80990432/3229b8c3-c43b-4532-b2c9-7b5834163337)

### Não se esqueça de ajustar o raw
![raw](https://github.com/Samanta00/Digital-influencers/assets/80990432/70aa49a5-e91f-4e65-9f81-38fca66364a7)


### Não se esqueça de configurar seu arquivo .env para que ele receba uma secret e o link do banco de dados
uma das formas é fazer a criar um arquivo .env, aqui está o exemplo:
![secret](https://github.com/Samanta00/Digital-influencers/assets/80990432/92a7a3a4-68a7-4859-9378-3aaf9ff6a1cb)


 ## Otimo, agora você tem as permissões para acessar todas as rotas
### Para criar uma rota você você pode fazer da seguinte maneira
![create](https://github.com/Samanta00/Digital-influencers/assets/80990432/c3e45ba3-9538-4a96-8e5c-ad54ac542d54)
### Caso queira visualizar, poderá executar da seguinte forma
![get](https://github.com/Samanta00/Digital-influencers/assets/80990432/5f8f721b-dcf2-4846-bd75-c83db0e09ce4)
 
### Agora é só dar continuidade
visualizar todos os registro
GET: http://localhost:8081/customers/

visualizar um registro específico, em id coloque o numero do seu id 
GET: http://localhost:8081/customers/:id


Adicionar um registro novo
POST: http://localhost:8081/customers/

Para editar um registro específico, em id coloque o numero do seu id
PUT: GET: http://localhost:8081/customers/:id

Para deletar um registro específico, em id coloque o numero do seu id
DELETE: GET: http://localhost:8081/customers/:id

 ## Ótimo, você já tem todas as rotas, Agora vamos visualizar os testes
![testes-rota](https://github.com/Samanta00/Digital-influencers/assets/80990432/551221a9-9f2d-4911-bcc5-da26c9faf83a)

## Os Testes são as provas de que as rotas funcionam perfeitamente ao planejado e executado
![testes](https://github.com/Samanta00/Digital-influencers/assets/80990432/0d1b3898-f42a-431a-9ec6-fd258b398da8)


