# 🛒 E-commerce - Atividade 4

## 📖 Sobre esta Atualização

Esta branch representa a quarta evolução do projeto de e-commerce.

O foco desta atividade foi implementar uma arquitetura baseada em rotas, criar diferentes layouts para consumidores e administradores e adicionar mecanismos de proteção de acesso utilizando Route Guards.

Além disso, a navegação foi integrada ao ecossistema Vue Router, proporcionando uma experiência mais próxima de aplicações profissionais de mercado.

---

## 🎯 Objetivos da Atividade

Implementar:

- Navegação entre múltiplas páginas
- Rotas dinâmicas
- Layouts distintos para consumidores e administradores
- Proteção de rotas
- Controle de permissões por perfil de usuário
- Integração entre Vue Router, PrimeVue e Tailwind CSS

---

## 🚀 Funcionalidades Implementadas

### 🏠 Página Inicial (Home)

A Home continua sendo a vitrine principal do sistema.

Responsabilidades:

- Exibir produtos cadastrados
- Permitir acesso aos detalhes dos produtos
- Permitir adição ao carrinho
- Servir como ponto inicial da navegação

---

### 📦 Página de Detalhes do Produto

Foi implementada uma rota dinâmica para exibição dos detalhes de um produto específico.

Exemplo:

```text
/product/1
/product/2
/product/3
```

A rota recebe o ID do produto e carrega suas informações individualmente.

---

### 🛒 Página de Checkout

Foi criada uma rota dedicada ao processo de finalização da compra.

Responsabilidades:

- Exibir os itens selecionados
- Exibir totais
- Permitir revisão da compra

---

### 🔗 Navegação com Vue Router

A navegação foi migrada para o Vue Router.

Foram utilizados:

```vue
<router-link>
```

e componentes de navegação do PrimeVue para permitir transições entre páginas sem recarregamento da aplicação.

Benefícios:

- Melhor experiência de usuário
- Navegação fluida
- SPA (Single Page Application)

---

## 🏗️ Layout do Consumidor

Foi criado um layout dedicado aos usuários finais.

Características:

- Header persistente
- Navegação entre páginas
- Carrinho sempre acessível
- Layout focado na experiência de compra

Estrutura:

```text
ConsumerLayout
│
├── Home
├── Product Details
└── Checkout
```

---

## 👨‍💼 Layout Administrativo

Foi criada uma área administrativa independente da área de compras.

Características:

- Estrutura de Dashboard
- Menu de navegação próprio
- Visual separado da área do consumidor
- Preparação para gerenciamento de produtos

Estrutura:

```text
AdminLayout
│
├── Dashboard
├── Produtos
└── Relatórios
```

---

## 🔐 Proteção de Rotas

Foram implementados Route Guards utilizando:

```typescript
beforeEach()
```

Esses Guards validam as permissões antes da navegação.

---

### 🛡️ Guard de Checkout

Impede que usuários não autenticados acessem a finalização da compra.

Fluxo:

```text
Usuário não autenticado
       ↓
Tentativa de acessar Checkout
       ↓
Acesso negado
```

---

### 👑 Guard de Role

Foi implementado controle de acesso baseado em perfil.

Apenas usuários com Role:

```typescript
ADMIN
```

podem acessar rotas administrativas.

Fluxo:

```text
Usuário CUSTOMER
       ↓
Tentativa de acessar Admin
       ↓
Acesso negado
```

---

## 🔥 Recursos Avançados

### 📊 Gestão de Produtos

A área administrativa foi preparada para utilização de tabelas de gerenciamento.

Utilizando:

```vue
<DataTable>
```

do PrimeVue.

Permite:

- Visualizar produtos
- Organizar informações
- Facilitar futuras operações CRUD

---

### 🍞 Breadcrumbs Dinâmicos

Foi adicionada navegação hierárquica através de Breadcrumbs.

Exemplo:

```text
Home > Produtos > Notebook Gamer
```

Melhorando a experiência de navegação.

---

### 🧩 Nested Routes

As rotas administrativas foram organizadas utilizando rotas filhas.

Exemplo:

```text
/admin
/admin/products
/admin/reports
```

Benefícios:

- Melhor organização
- Maior escalabilidade
- Estrutura profissional

---

## 🔄 Fluxo de Navegação

```text
Home
 │
 ├── Produto
 │       │
 │       └── Detalhes
 │
 └── Checkout
         │
         └── Guard de Autenticação

Admin
 │
 ├── Dashboard
 ├── Produtos
 └── Relatórios
```

---

## 🏗️ Estrutura da Aplicação

```text
src/
├── router/
│   └── index.ts
│
├── layouts/
│   ├── ConsumerLayout.vue
│   └── AdminLayout.vue
│
├── views/
│   ├── HomeView.vue
│   ├── ProductDetailsView.vue
│   ├── CheckoutView.vue
│   ├── AdminDashboardView.vue
│   ├── ProductsView.vue
│   └── ReportsView.vue
│
├── components/
│   ├── ProductCard.vue
│   ├── Cart.vue
│   └── Navbar.vue
│
└── App.vue
```

---

## 📚 Conceitos Praticados

### Vue Router

- Rotas
- Rotas dinâmicas
- Nested Routes
- Route Guards
- Navegação SPA

### Segurança

- Controle de autenticação
- Controle de autorização
- Proteção de rotas
- Validação de perfis

### Layouts

- Layout compartilhado
- Layout administrativo
- Layout do consumidor

### PrimeVue

- Card
- Button
- Menu
- Menubar
- DataTable
- Breadcrumb

### Tailwind CSS

- Grid responsivo
- Espaçamento
- Responsividade
- Organização visual

### TypeScript

- Interfaces
- Tipagem de rotas
- Tipagem de usuários
- Tipagem de permissões

---

## 🔄 Evolução em Relação à Atividade 3

Na Atividade 3, o foco estava na experiência visual da aplicação através da integração entre PrimeVue e Tailwind CSS.

Nesta Atividade 4, o projeto evoluiu estruturalmente através da implementação de:

- Vue Router
- Rotas dinâmicas
- Layouts independentes
- Route Guards
- Controle de permissões
- Área administrativa
- Arquitetura escalável

Essa evolução aproxima o projeto da estrutura utilizada em aplicações profissionais de e-commerce.

---

## ✅ Critérios Atendidos

- Navegação entre páginas sem recarregamento
- Página de detalhes com rota dinâmica
- Área de checkout protegida
- Layout administrativo separado
- Integração com PrimeVue
- Integração com Tailwind CSS
- Controle de acesso baseado em Role
- Estrutura SPA com Vue Router

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,js,tailwind,vite,git,github,vscode" />

</div>

### Ferramentas

- Vue
- Vue Router
- TypeScript
- PrimeVue
- Tailwind CSS
- Vite
- JavaScript
- Git
- GitHub
- VS Code

---

## 👨‍💻 Autor

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
