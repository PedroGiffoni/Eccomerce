# 🛒 E-commerce Frontend

## 📖 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma aplicação de E-commerce moderna utilizando Vue 3, TypeScript, PrimeVue e Tailwind CSS.

A proposta inicial surgiu como atividade prática de um curso Full Stack, mas ao longo das entregas o projeto evoluiu para uma aplicação completa com navegação entre páginas, gerenciamento de estado global, autenticação, validação de formulários e uma interface responsiva inspirada em plataformas reais de comércio eletrônico.

O objetivo principal foi aplicar conceitos modernos de desenvolvimento Frontend, componentização, Programação Orientada a Objetos, tipagem forte, gerenciamento de estado e experiência do usuário.

---

## 🚀 Funcionalidades

### 🏠 Home

- Vitrine de produtos
- Layout responsivo
- Cards de produtos utilizando PrimeVue
- Navegação para detalhes do produto

---

### 📦 Detalhes do Produto

- Exibição individual dos produtos
- Informações detalhadas
- Imagens do produto
- Seleção de quantidade
- Adição ao carrinho

---

### 🛒 Carrinho de Compras

- Adição de produtos
- Atualização de quantidades
- Remoção de itens
- Cálculo automático do valor total
- Atualização reativa em tempo real

---

### 💳 Checkout

- Resumo da compra
- Quantidade total de itens
- Valor final do pedido
- Proteção de rota para usuários não autenticados

---

### 🔐 Sistema de Autenticação

- Login
- Cadastro de usuários
- Logout
- Persistência de autenticação
- Controle de acesso por perfil

---

### 👤 Controle de Permissões

Perfis suportados:

- ADMIN
- CUSTOMER

Permissões são controladas através de Route Guards.

---

### 📋 Área Administrativa

- Dashboard administrativo
- Navegação independente da área do cliente
- Estrutura preparada para gerenciamento de produtos
- Estrutura preparada para relatórios

---

## 🎨 Interface

A interface foi construída utilizando PrimeVue e Tailwind CSS.

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

## ⚡ Melhorias de Frontend Implementadas

### Responsividade

A aplicação adapta-se para:

- Smartphones
- Tablets
- Notebooks
- Monitores Desktop

---

### Componentização

Separação da interface em componentes reutilizáveis:

```text
components/
├── ProductCard.vue
├── Navbar.vue
├── Cart.vue
├── ProductGallery.vue
└── CheckoutSummary.vue
```

---

### Experiência do Usuário

- Feedback visual com Toasts
- Loading States
- Navegação sem recarregamento de página
- Validação instantânea de formulários
- Interface limpa e intuitiva

---

## 🏗️ Arquitetura da Aplicação

```text
src/
├── assets/
├── components/
├── interfaces/
├── layouts/
├── models/
├── router/
├── stores/
├── views/
├── App.vue
└── main.ts
```

---

## 🧠 Conceitos Aplicados

### Frontend

- Componentização
- SPA (Single Page Application)
- Responsividade
- UX/UI

### Vue

- Vue 3
- Composition API
- Options API
- Props
- Emits
- Computed
- Watch

### TypeScript

- Interfaces
- Enums
- Tipagem forte
- Modelagem de entidades

### Gerenciamento de Estado

- Pinia
- Stores globais
- Reatividade

### Validação

- Vuelidate
- Regras customizadas
- Feedback visual

### Navegação

- Vue Router
- Rotas dinâmicas
- Route Guards
- Nested Routes

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,tailwind,vite,nodejs,git,github,vscode" />

</div>

### Principais Tecnologias

- Vue 3
- TypeScript
- PrimeVue
- Tailwind CSS
- Pinia
- Vue Router
- Vuelidate
- Vite

---

## 📸 Funcionalidades Desenvolvidas Durante o Projeto

✔️ Modelagem de Produtos

✔️ Modelagem de Categorias

✔️ Carrinho de Compras

✔️ Controle de Usuários

✔️ Controle de Permissões

✔️ Login e Cadastro

✔️ Validação de Formulários

✔️ Navegação por Rotas

✔️ Área Administrativa

✔️ Componentização

✔️ Layout Responsivo

✔️ Interface Moderna

---

## 🎓 Objetivos de Aprendizagem

Este projeto foi desenvolvido para consolidar conhecimentos em:

- Desenvolvimento Frontend Moderno
- Vue 3
- TypeScript
- Componentização
- Gerenciamento de Estado
- Validação de Formulários
- Arquitetura de Aplicações
- Experiência do Usuário
- Desenvolvimento de Sistemas E-commerce

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

---

## ⭐ Projeto Acadêmico

Projeto desenvolvido durante a formação Full Stack com foco na construção de um sistema de E-commerce completo utilizando tecnologias modernas do ecossistema JavaScript e TypeScript.
