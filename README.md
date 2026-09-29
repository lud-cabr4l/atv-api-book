# API REST de Livros

API REST desenvolvida com Node.js e Express.js para realizar operações de cadastro, consulta, atualização e exclusão de livros.

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript

## Funcionalidades

A API possui as seguintes rotas:

- `GET /livros` - lista todos os livros
- `GET /livros/:id` - consulta um livro pelo ID
- `POST /livros` - cadastra um novo livro
- `PUT /livros/:id` - atualiza um livro
- `DELETE /livros/:id` - exclui um livro

## Como executar o projeto

1. Instale as dependências:

`bash
npm install`

Inicie o servidor:

`node server.js`

A API estará disponível em:
`http://localhost:3000`

Testes

`As requisições da API foram testadas utilizando o Postman.`

Armazenamento

`Os dados dos livros são armazenados em memória utilizando um array. Não é utilizado banco de dados.`
