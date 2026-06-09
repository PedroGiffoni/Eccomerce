# 🏗️ E-commerce - Atividade 7

## 📖 Sobre esta Atualização

Esta branch representa a sétima evolução do projeto de e-commerce.

Após a criação da API REST utilizando Express e TypeScript, esta etapa teve como foco a evolução da arquitetura da aplicação através da separação de responsabilidades em camadas, implementação de Controllers e validação robusta de dados utilizando **Zod**.

O principal objetivo foi tornar a API mais organizada, escalável e segura, impedindo que dados inválidos sejam processados pelo sistema.

---

## 🎯 Objetivos da Atividade

Implementar:

- Arquitetura baseada em camadas
- Controllers para tratamento das requisições
- Schemas de validação com Zod
- Validação de parâmetros
- Validação de Query Strings
- Validação de Body
- Fluxo completo de Categorias
- Fluxo completo de Produtos
- Middleware reutilizável de validação

---

# 🏛️ Arquitetura da Aplicação

Nesta etapa a API foi reorganizada para seguir uma estrutura mais próxima de aplicações profissionais.

```text
Cliente
   │
   ▼
Router
   │
   ▼
Middleware de Validação
   │
   ▼
Controller
   │
   ▼
Resposta HTTP
```

Cada camada possui uma responsabilidade específica.

---

## 📂 Organização do Projeto

```text
src/
├── routers/
│   ├── category.router.ts
│   └── product.router.ts
│
├── controllers/
│   ├── category.controller.ts
│   └── product.controller.ts
│
├── schemas/
│   ├── category.schema.ts
│   └── product.schema.ts
│
├── middlewares/
│   └── validateData.ts
│
├── app.ts
└── server.ts
```

---

# 📂 Fluxo de Categorias

## 📋 Listagem de Categorias

### Endpoint

```http
GET /category
```

Permite listar categorias com suporte à paginação.

---

### Paginação Segura

Os parâmetros enviados pela Query String são validados utilizando:

```typescript
categoryQueryPaginationSchema
```

Exemplo:

```http
GET /category?page=1&size=10
```

Parâmetros validados:

```typescript
page
size
```

Garantindo que sejam números válidos.

---

## 🔍 Consulta por ID

### Endpoint

```http
GET /category/:id
```

Permite buscar uma categoria específica.

---

### Validação de UUID

O parâmetro recebido na URL é validado através de:

```typescript
categoryParamsSchema
```

Exemplo:

```http
GET /category/123
```

Resposta:

```http
400 Bad Request
```

Caso o valor não seja um UUID válido.

---

## ➕ Criação de Categoria

### Endpoint

```http
POST /category
```

Permite cadastrar uma nova categoria.

---

### Validação com Zod

Utilizando:

```typescript
createCategorySchema
```

Regra:

```typescript
name
```

Deve possuir no mínimo:

```text
3 caracteres
```

---

### Exemplo Inválido

```json
{
  "name": "TV"
}
```

Resposta:

```http
400 Bad Request
```

Retornando o erro gerado pelo Zod.

---

## ✏️ Atualização de Categoria

### Endpoint

```http
PUT /category/:id
```

Permite atualizar uma categoria existente.

---

### Validações Aplicadas

- UUID válido
- Dados válidos no Body
- Estrutura compatível com o Schema

---

## ❌ Remoção de Categoria

### Endpoint

```http
DELETE /category/:id
```

Permite remover uma categoria.

---

### Validação

O ID recebido é validado antes da execução da operação.

---

# 📦 Fluxo de Produtos

## 🏗️ Product Schema

Foi criado o arquivo:

```typescript
product.schema.ts
```

Responsável pela validação dos produtos.

---

### Campos Obrigatórios

```typescript
name
price
categoryId
```

---

### Regras de Validação

#### Nome

```typescript
string
```

Mínimo:

```text
3 caracteres
```

---

#### Preço

```typescript
number
```

Deve ser:

```text
Maior que zero
```

---

#### Categoria

```typescript
categoryId
```

Deve ser:

```text
UUID válido
```

---

## ➕ Criação de Produto

### Endpoint

```http
POST /products
```

Responsável por cadastrar novos produtos.

---

### Processo

O Controller recebe:

```typescript
req.body
```

E realiza a validação através de:

```typescript
safeParse()
```

---

### Resposta de Sucesso

```http
201 Created
```

---

### Exemplo

```json
{
  "name": "Notebook Gamer",
  "price": 5500,
  "categoryId": "uuid"
}
```

---

## 📋 Listagem de Produtos

### Endpoint

```http
GET /products
```

Retorna todos os produtos cadastrados.

---

### Filtro por Categoria

Suporta Query String:

```http
GET /products?category=id_da_categoria
```

Permite filtrar produtos por categoria.

---

### Query Utilizada

```typescript
req.query.category
```

---

## ❌ Exclusão de Produto

### Endpoint

```http
DELETE /products/:id
```

Responsável pela remoção de produtos.

---

### Validação

Antes da exclusão:

```typescript
productParamsSchema
```

valida o UUID recebido.

---

### Resposta

```http
204 No Content
```

---

# 🔥 Middleware de Validação

Uma das principais melhorias desta atividade foi a criação de um middleware genérico para validação.

Arquivo:

```typescript
validateData.ts
```

---

## Funcionamento

O middleware recebe um schema do Zod:

```typescript
validateData(schema)
```

E executa automaticamente:

```typescript
schema.safeParse()
```

---

## Benefícios

- Reutilização de código
- Controllers mais limpos
- Menos repetição
- Melhor manutenção
- Maior escalabilidade

---

## Fluxo

```text
Request
   │
   ▼
Middleware
   │
   ├── Dados válidos
   │        │
   │        ▼
   │   Controller
   │
   └── Dados inválidos
            │
            ▼
      400 Bad Request
```

---

# 🛡️ Validação com Zod

Foi utilizado o Zod para validar:

### Query Strings

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

### Benefícios

- Segurança
- Tipagem automática
- Mensagens de erro claras
- Menos validações manuais

---

# 📚 Conceitos Praticados

## Express

- Routers
- Controllers
- Middlewares

---

## TypeScript

- Request
- Response
- NextFunction
- Tipagem de Schemas

---

## Zod

- safeParse()
- UUID Validation
- Body Validation
- Query Validation
- Params Validation

---

## REST API

- GET
- POST
- PUT
- DELETE

---

## Arquitetura

- Separação de responsabilidades
- Controllers
- Schemas
- Middlewares
- Organização por camadas

---

# 🔄 Evolução em Relação à Atividade 6

Na Atividade 6 o foco estava na criação das primeiras rotas REST utilizando Express.

Nesta Atividade 7 a aplicação evoluiu através da implementação de:

- Controllers
- Schemas de validação
- Zod
- Middleware genérico
- Validação de UUID
- Paginação validada
- Estrutura modular
- Arquitetura mais escalável

A API deixou de possuir apenas rotas simples e passou a seguir um padrão arquitetural mais próximo de aplicações corporativas.

---

# ✅ Critérios Atendidos

- Separação entre Routers, Controllers e Schemas
- Validação com Zod
- Validação de UUID
- Validação de Query Strings
- Validação de Body
- Middleware reutilizável
- Uso correto de GET, POST, PUT e DELETE
- Uso correto dos Status Codes
- Controllers limpos
- API mais segura e organizada

---

# 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,ts,git,github,vscode" />

</div>

### Ferramentas

- Node.js
- Express
- TypeScript
- Zod
- Git
- GitHub
- VS Code

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
