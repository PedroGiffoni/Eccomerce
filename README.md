# 🛒 E-commerce Full Stack

## 📖 Sobre o Projeto

Este projeto consiste no desenvolvimento completo de uma plataforma de E-commerce Full Stack construída ao longo de diversas atividades práticas de formação em desenvolvimento web.

Durante sua evolução, foram aplicados conceitos de:

- Programação Orientada a Objetos (POO)
- TypeScript
- Vue 3
- PrimeVue
- Tailwind CSS
- Vue Router
- Pinia
- Vuelidate
- Node.js
- Express
- Zod
- Arquitetura REST
- Middlewares
- Controllers
- Validação de Dados

O projeto evoluiu gradualmente desde a modelagem das entidades do domínio até a implementação de um backend estruturado, autenticação, gerenciamento de estado global, validações robustas e uma interface moderna e responsiva.

---

# 🚀 Principais Funcionalidades

## 🏠 Catálogo de Produtos

- Listagem de produtos
- Organização por categorias
- Visualização detalhada
- Filtragem por categoria
- Navegação dinâmica entre produtos

---

## 📦 Gerenciamento de Produtos

- Cadastro de produtos
- Atualização de informações
- Exclusão de produtos
- Associação entre produtos e categorias
- Validação de dados

---

## 📂 Gerenciamento de Categorias

- Cadastro de categorias
- Atualização de categorias
- Exclusão de categorias
- Paginação de resultados
- Validação de UUID

---

## 🛒 Carrinho de Compras

- Adição de produtos
- Atualização de quantidade
- Remoção de itens
- Cálculo automático do valor total
- Cálculo automático da quantidade total

---

## 💳 Checkout

- Resumo do pedido
- Validação de autenticação
- Proteção de acesso via Route Guards
- Simulação de finalização de compra

---

## 🔐 Sistema de Autenticação

- Login
- Cadastro de usuários
- Logout
- Persistência de sessão
- Controle de acesso

---

## 👤 Controle de Perfis

Perfis suportados:

```text
ADMIN
CUSTOMER
```

Permissões diferenciadas para:

- Área administrativa
- Área do cliente
- Rotas protegidas

---

## 📋 Dashboard Administrativo

- Área exclusiva para administradores
- Gestão de produtos
- Gestão de categorias
- Estrutura preparada para relatórios
- Navegação independente

---

# 🏗️ Arquitetura do Projeto

## Frontend

```text
Vue 3
│
├── Components
├── Views
├── Layouts
├── Router
├── Pinia Stores
└── Vuelidate
```

---

## Backend

```text
Express
│
├── Routers
├── Controllers
├── Middlewares
├── Schemas (Zod)
└── REST API
```

---

# 🎨 Frontend

## Tecnologias Utilizadas

- Vue 3
- TypeScript
- PrimeVue
- Tailwind CSS
- Pinia
- Vue Router
- Vuelidate
- Vite

---

## Interface Moderna

A interface foi desenvolvida utilizando PrimeVue e Tailwind CSS.

### Componentes Utilizados

- Card
- Button
- InputText
- Password
- InputNumber
- Menubar
- DataTable
- Toast
- ConfirmDialog
- Breadcrumb

---

## Responsividade

A aplicação adapta-se automaticamente para:

- Smartphones
- Tablets
- Notebooks
- Monitores Desktop

---

## Componentização

```text
components/
├── ProductCard.vue
├── Navbar.vue
├── Cart.vue
├── ProductGallery.vue
├── CheckoutSummary.vue
└── AuthForms.vue
```

---

## Navegação

Implementada utilizando Vue Router.

### Recursos

- Rotas Dinâmicas
- Nested Routes
- Route Guards
- Layouts distintos
- Navegação SPA

---

## Gerenciamento de Estado

Implementado com Pinia.

### Stores

- Auth Store
- Cart Store
- Product Store

---

## Validação de Formulários

Implementada com Vuelidate.

### Validações

- Campos obrigatórios
- E-mail válido
- Senha mínima
- Confirmação de senha
- Feedback visual instantâneo

---

# ⚙️ Backend

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Zod

---

## API REST

A API foi desenvolvida seguindo os princípios REST.

### Produtos

```http
GET     /products
GET     /products/:id
POST    /products
DELETE  /products/:id
```

---

### Categorias

```http
GET     /category
GET     /category/:id
POST    /category
PUT     /category/:id
DELETE  /category/:id
```

---

### Pedidos

```http
POST    /orders
PATCH   /orders/:id
DELETE  /orders/:id
```

---

## Query Strings

Exemplo:

```http
GET /products?category=eletronicos
```

---

## Params

Exemplo:

```http
GET /products/1
```

---

## Body

Exemplo:

```json
{
  "name": "Notebook Gamer",
  "price": 5500,
  "categoryId": "uuid"
}
```

---

# 🛡️ Validação com Zod

O projeto utiliza Zod para validação de:

### Query Strings

```typescript
req.query;
```

### Params

```typescript
req.params;
```

### Body

```typescript
req.body;
```

---

## Validações Implementadas

### Categoria

```typescript
name;
```

- Obrigatório
- Mínimo de 3 caracteres

---

### Produto

```typescript
name;
price;
categoryId;
```

Validações:

- Nome obrigatório
- Nome mínimo de 3 caracteres
- Preço positivo
- UUID válido

---

# 🔥 Middlewares

## Logger

Registro automático das requisições.

Exemplo:

```text
[2026-06-10] GET /products
```

---

## Validation Middleware

Validação automática utilizando schemas do Zod.

Benefícios:

- Controllers mais limpos
- Reutilização de código
- Menos duplicação

---

# 🏛️ Arquitetura em Camadas

```text
Request
   │
   ▼
Router
   │
   ▼
Middleware
   │
   ▼
Controller
   │
   ▼
Response
```

---

# 📚 Conceitos Aplicados

## Frontend

- Componentização
- SPA
- Responsividade
- UX/UI
- Reatividade

---

## Vue

- Vue 3
- Composition API
- Options API
- Props
- Emits
- Computed
- Watch

---

## TypeScript

- Interfaces
- Enums
- Tipagem Forte
- Models

---

## Gerenciamento de Estado

- Pinia
- Stores Globais

---

## Validação

- Vuelidate
- Zod

---

## Backend

- Express
- REST API
- Controllers
- Middlewares
- Routers

---

## Arquitetura

- Separação de Responsabilidades
- Controllers
- Schemas
- Middlewares
- Organização em Camadas

---

# 📂 Estrutura do Projeto

```text
src/
├── frontend/
│   ├── assets/
│   ├── components/
│   ├── interfaces/
│   ├── layouts/
│   ├── models/
│   ├── router/
│   ├── stores/
│   ├── views/
│   └── App.vue
│
├── backend/
│   ├── routers/
│   ├── controllers/
│   ├── middlewares/
│   ├── schemas/
│   ├── app.ts
│   └── server.ts
```

---

# 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,tailwind,nodejs,express,vite,git,github,vscode" />

</div>

### Frontend

- Vue 3
- TypeScript
- PrimeVue
- Tailwind CSS
- Pinia
- Vue Router
- Vuelidate
- Vite

### Backend

- Node.js
- Express
- TypeScript
- Zod

### Ferramentas

- Git
- GitHub
- VS Code

---

# 🎓 Objetivos de Aprendizagem

Este projeto foi desenvolvido para consolidar conhecimentos em:

- Desenvolvimento Frontend Moderno
- Desenvolvimento Backend com Node.js
- APIs REST
- Programação Orientada a Objetos
- TypeScript
- Gerenciamento de Estado
- Validação de Dados
- Arquitetura de Software
- Desenvolvimento Full Stack
- Construção de Sistemas de E-commerce

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

---

# ⭐ Projeto Acadêmico Full Stack

Projeto desenvolvido durante a formação Full Stack com foco na construção de uma plataforma completa de E-commerce utilizando tecnologias modernas do ecossistema JavaScript e TypeScript, abrangendo Frontend, Backend, autenticação, gerenciamento de estado, validações e arquitetura REST.
