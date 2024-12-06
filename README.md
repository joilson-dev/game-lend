# BoardCamp - Sistema de Gestão de Jogos de Tabuleiro

## Descrição

Este é um sistema de gestão para uma locadora de jogos de tabuleiro, utilizando Node.js e SQL.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/joilson-dev/game-lend.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados no arquivo `.env`.
4. Rode o servidor:
   ```sh
   npm start
   ```

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- dayjs
- dotenv

## Funcionalidades

- **Jogos**:
  - Listar jogos: `GET /games`
  - Inserir jogo: `POST /games`
- **Clientes**:
  - Listar clientes: `GET /customers`
  - Buscar cliente por ID: `GET /customers/:id`
  - Inserir cliente: `POST /customers`
- **Aluguéis**:
  - Listar aluguéis: `GET /rentals`
  - Inserir aluguel: `POST /rentals`
  - Finalizar aluguel: `POST /rentals/:id/return`
  - Deletar aluguel: `DELETE /rentals/:id`

