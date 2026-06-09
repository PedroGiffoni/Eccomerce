# 🚀 E-commerce - Atividade 6

## 📖 Sobre esta Atualização

Esta branch representa a sexta evolução do projeto de e-commerce.

Após as etapas anteriores focadas no Frontend, interface do usuário, gerenciamento de estado e autenticação, esta atividade marca a introdução do Backend da aplicação utilizando **Node.js**, **Express** e **TypeScript**.

O objetivo desta etapa foi implementar uma API REST responsável por gerenciar produtos e pedidos, aplicando boas práticas de roteamento, utilização correta dos verbos HTTP, tratamento de requisições e respostas, uso de status codes e organização do código em múltiplos routers.

---

## 🎯 Objetivos da Atividade

Implementar:

- API REST com Express
- Rotas para produtos
- Rotas para pedidos
- Captura de parâmetros via URL
- Captura de Query Strings
- Captura de dados via Body
- Utilização correta dos métodos HTTP
- Organização do código com Routers
- Middleware de Logs
- Middleware de Validação
- Tipagem com TypeScript

---

## 🏗️ Arquitetura da API

A aplicação foi estruturada utilizando o padrão de separação por rotas.

```text
Cliente
   │
   ▼
Express Server
   │
   ├── Products Router
   │
   ├── Orders Router
   │
   └── Middlewares
```

Essa abordagem facilita a manutenção e a escalabilidade do projeto.

---

# 📦 Rotas de Produtos

## 📋 Listagem de Produtos

### Endpoint

```http
GET /products
```

Responsável por retornar a lista completa de produtos.

---

### Filtragem por Categoria

A rota também permite receber uma Query String para filtragem.

Exemplo:

```http
GET /products?category=eletronicos
```

Parâmetro utilizado:

```typescript
req.query.category
```

Benefícios:

- Filtragem dinâmica
- Maior flexibilidade para o cliente
- Simulação de catálogo de produtos

---

## 🔍 Consulta de Produto por ID

### Endpoint

```http
GET /products/:id
```

Permite consultar um produto específico.

Exemplo:

```http
GET /products/5
```

Parâmetro utilizado:

```typescript
req.params.id
```

---

### Validação de ID

Foi implementada uma validação para impedir IDs negativos.

Exemplo:

```http
GET /products/-1
```

Resposta:

```http
400 Bad Request
```

---

# 🛒 Rotas de Pedidos

## ➕ Criação de Pedido

### Endpoint

```http
POST /orders
```

Responsável por simular a criação de um novo pedido.

---

### Dados Recebidos

O servidor recebe informações através do Body da requisição.

Exemplo:

```json
{
  "customerName": "Pedro",
  "products": [1, 2, 3]
}
```

---

### Resposta

Status:

```http
201 Created
```

Retornando os dados recebidos como confirmação da criação.

---

## 🔄 Atualização de Pedido

### Endpoint

```http
PATCH /orders/:id
```

Responsável por atualizar informações de um pedido existente.

---

### Exemplo

URL:

```http
PATCH /orders/10
```

Body:

```json
{
  "status": "pago"
}
```

---

### Dados Utilizados

Parâmetros:

```typescript
req.params.id
```

Body:

```typescript
req.body.status
```

---

## ❌ Cancelamento de Pedido

### Endpoint

```http
DELETE /orders/:id
```

Responsável por simular o cancelamento de um pedido.

---

### Resposta

Status:

```http
204 No Content
```

Sem retorno de conteúdo no corpo da resposta.

---

# 🔥 Recursos Extras Implementados

## 📝 Middleware de Logger

Foi criado um middleware responsável por registrar todas as requisições recebidas pelo servidor.

Formato exibido:

```text
[DATA] MÉTODO /URL
```

Exemplo:

```text
[2026-06-09] GET /products
```

---

## 🛡️ Middleware de Validação

Antes de criar um pedido, o sistema verifica se o Body foi enviado corretamente.

Caso o corpo da requisição esteja vazio:

Resposta:

```http
400 Bad Request
```

Exemplo:

```json
{
  "error": "Body da requisição não pode estar vazio"
}
```

---

## 📂 Separação por Routers

Para manter o código organizado, as rotas foram divididas em arquivos específicos.

### Products Router

Responsável por:

- Listagem de produtos
- Consulta por ID
- Filtragem por categoria

---

### Orders Router

Responsável por:

- Criação de pedidos
- Atualização de status
- Cancelamento de pedidos

---

# 🌐 Métodos HTTP Utilizados

## GET

Utilizado para leitura de dados.

Exemplos:

```http
GET /products
GET /products/:id
```

---

## POST

Utilizado para criação de registros.

Exemplo:

```http
POST /orders
```

---

## PATCH

Utilizado para atualização parcial.

Exemplo:

```http
PATCH /orders/:id
```

---

## DELETE

Utilizado para remoção de registros.

Exemplo:

```http
DELETE /orders/:id
```

---

# 📚 Conceitos Praticados

## Express

- Criação de servidor
- Rotas
- Middlewares
- Routers

---

## REST API

- GET
- POST
- PATCH
- DELETE
- Semântica REST

---

## TypeScript

- Request
- Response
- NextFunction
- Tipagem de parâmetros
- Tipagem de respostas

---

## Manipulação de Requisições

### Query String

```typescript
req.query
```

---

### Params

```typescript
req.params
```

---

### Body

```typescript
req.body
```

---

## Validação

- IDs inválidos
- Body vazio
- Tratamento de erros
- Status HTTP adequados

---

# 🔄 Evolução em Relação à Atividade 5

Na Atividade 5, o foco estava no gerenciamento de autenticação utilizando Pinia, Vuelidate e PrimeVue.

Nesta Atividade 6, o projeto evoluiu para uma arquitetura Full Stack através da criação do Backend da aplicação.

Principais avanços:

- Introdução ao Express
- Introdução ao Node.js
- Construção de API REST
- Organização por Routers
- Uso de Middlewares
- Manipulação de Requests e Responses
- Aplicação de Status Codes
- Estrutura preparada para integração futura com banco de dados

---

# ✅ Critérios Atendidos

- Uso correto dos verbos HTTP
- GET para leitura de dados
- POST para criação de registros
- PATCH para atualização
- DELETE para remoção
- Captura de Query Strings
- Captura de Params
- Captura de Body
- Middleware de Logger
- Middleware de Validação
- Separação por Routers
- Tipagem com TypeScript
- Utilização correta de Status Codes

---

# 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,ts,git,github,vscode" />

</div>

### Ferramentas

- Node.js
- Express
- TypeScript
- Git
- GitHub
- VS Code

---

# 📂 Estrutura do Projeto

```text
src/
├── routes/
│   ├── products.routes.ts
│   └── orders.routes.ts
│
├── middlewares/
│   ├── logger.ts
│   └── validateBody.ts
│
├── app.ts
└── server.ts
```

---

# 👨‍💻 Autor

<div align="center">

<a href="https://github.com/PedroGiffoni">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

<a href="https://www.linkedin.com/in/pedrogiffoni/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

<a href="mailto:pedrotonimelo@gmail.com">
<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>

</div>
