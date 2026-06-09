# 🔐 E-commerce - Atividade 5

## 📖 Sobre esta Atualização

Esta branch representa a quinta evolução do projeto de e-commerce.

O foco desta etapa foi implementar um sistema de autenticação mais robusto utilizando **Pinia**, **Vuelidate**, **PrimeVue** e **Vue Router**, centralizando o gerenciamento de autenticação da aplicação e garantindo uma experiência de usuário mais segura e intuitiva.

Além da autenticação, foram adicionadas validações reativas, feedback visual para o usuário e integração com os Route Guards implementados nas etapas anteriores.

---

## 🎯 Objetivos da Atividade

Implementar:

- Gerenciamento centralizado de autenticação
- Login de usuários
- Cadastro de usuários
- Validação reativa de formulários
- Controle de estado global
- Feedback visual para sucesso e erro
- Integração com Route Guards
- Redirecionamento automático após autenticação

---

## 🚀 Funcionalidades Implementadas

### 🔐 Sistema de Autenticação

Foi criada uma store exclusiva para autenticação utilizando Pinia.

A store é responsável por gerenciar:

```typescript
user
token
isAuthenticated
```

Dessa forma, toda a aplicação passa a consumir uma única fonte de verdade para o estado do usuário.

---

### 🏪 Auth Store (Pinia)

Foi criada uma `authStore` responsável por centralizar toda a lógica de autenticação.

### Estados Gerenciados

```typescript
user
token
isAuthenticated
loading
```

---

### Actions Implementadas

#### Login

```typescript
login()
```

Responsável por autenticar o usuário.

Funções:

- Validar credenciais
- Simular autenticação
- Armazenar usuário
- Gerar token
- Atualizar estado global

---

#### Registro

```typescript
register()
```

Responsável por criar uma nova conta.

Funções:

- Validar dados
- Simular cadastro
- Persistir usuário
- Atualizar autenticação

---

#### Logout

```typescript
logout()
```

Responsável por:

- Remover token
- Limpar usuário
- Invalidar sessão
- Redirecionar para Login

---

## 👤 Tela de Login

Foi criada uma interface dedicada para autenticação.

### Componentes Utilizados

```vue
<Card>
<InputText>
<Password>
<Button>
```

Campos disponíveis:

- E-mail
- Senha

---

### Regras de Validação

Utilizando Vuelidate:

#### E-mail

- Obrigatório
- Formato válido

#### Senha

- Obrigatória

Exemplos:

```text
E-mail inválido
```

```text
Senha obrigatória
```

---

## 📝 Tela de Cadastro

Foi criada uma tela específica para criação de contas.

### Componentes Utilizados

```vue
<Card>
<InputText>
<Password>
<Button>
```

Campos disponíveis:

- Nome
- E-mail
- Senha
- Confirmar senha

---

### Regras de Validação

#### Nome

- Obrigatório

#### E-mail

- Obrigatório
- Formato válido

#### Senha

- Obrigatória
- Mínimo de 6 caracteres

#### Confirmar Senha

Validação personalizada garantindo que:

```text
Senha == Confirmar Senha
```

Exemplo:

```text
As senhas não coincidem
```

---

## 🛡️ Validação Reativa com Vuelidate

Foi implementado o Vuelidate para proteger os formulários antes do envio.

Benefícios:

- Validação automática
- Feedback instantâneo
- Bloqueio de envio inválido
- Melhor experiência de usuário

---

### Feedback Visual de Erros

Campos inválidos recebem destaque visual utilizando Tailwind CSS.

Exemplos:

```text
Borda vermelha
Texto vermelho
Mensagens abaixo do campo
```

Isso permite ao usuário identificar rapidamente os erros de preenchimento.

---

## 🔥 Recursos de Experiência do Usuário

### 🍞 Toast Notifications

Foi utilizado o componente:

```vue
<Toast>
```

para fornecer feedback visual durante a autenticação.

---

### Mensagens de Sucesso

Exemplos:

```text
Login realizado com sucesso!
```

```text
Conta criada com sucesso!
```

---

### Mensagens de Erro

Exemplos:

```text
Credenciais inválidas
```

```text
Falha ao realizar login
```

---

### ⏳ Loading State

Os botões de envio utilizam o recurso:

```vue
loading
```

durante o processamento das ações.

Benefícios:

- Evita múltiplos envios
- Melhora a experiência do usuário
- Simula comunicação com servidor

---

## 🔗 Integração com Vue Router

A autenticação foi integrada às rotas protegidas criadas na atividade anterior.

---

### Redirecionamento Após Login

Após autenticação bem-sucedida:

```text
Login
   ↓
Home
```

ou

```text
Login
   ↓
Checkout solicitado anteriormente
```

---

### Redirecionamento Após Logout

Ao realizar logout:

```text
Logout
   ↓
Tela de Login
```

---

## 🔐 Integração com Route Guards

Os Guards agora utilizam a `authStore` como fonte oficial para validação de acesso.

Fluxo:

```text
Usuário autenticado?
      │
      ├── Sim → Permite acesso
      │
      └── Não → Redireciona para Login
```

---

## 🏗️ Estrutura da Aplicação

```text
src/
├── stores/
│   └── authStore.ts
│
├── views/
│   ├── LoginView.vue
│   └── RegisterView.vue
│
├── router/
│   └── index.ts
│
├── layouts/
│   ├── ConsumerLayout.vue
│   └── AdminLayout.vue
│
├── components/
│   └── FormComponents.vue
│
└── App.vue
```

---

## 📚 Conceitos Praticados

### Pinia

- Store global
- State Management
- Actions
- Reatividade global

### Vuelidate

- Validações reativas
- Validação customizada
- Validação de formulários
- Feedback de erros

### Vue Router

- Route Guards
- Redirecionamentos
- Proteção de rotas

### PrimeVue

- Card
- InputText
- Password
- Button
- Toast

### Tailwind CSS

- Layout responsivo
- Estados visuais
- Mensagens de erro
- Feedback visual

### TypeScript

- Tipagem de usuários
- Tipagem da store
- Tipagem de autenticação

---

## 🔄 Evolução em Relação à Atividade 4

Na Atividade 4 o foco estava na navegação e segurança das rotas.

Nesta Atividade 5 o projeto evoluiu através da implementação de:

- Autenticação centralizada
- Pinia Store
- Login e Registro
- Validação com Vuelidate
- Toast Notifications
- Loading States
- Integração completa com Route Guards
- Controle global de autenticação

Essa evolução aproxima ainda mais o projeto de uma aplicação real utilizada em ambientes de produção.

---

## ✅ Critérios Atendidos

- Estado centralizado com Pinia
- Auth Store como única fonte da verdade
- Login funcional
- Registro funcional
- Logout funcional
- Validação com Vuelidate
- Feedback visual para erros
- Toast para sucesso e falhas
- Integração com Vue Router
- Integração com Route Guards
- Interface construída com PrimeVue
- Estilização com Tailwind CSS

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,tailwind,vite,git,github,vscode" />

</div>

### Ferramentas

- Vue
- TypeScript
- Pinia
- Vuelidate
- PrimeVue
- Tailwind CSS
- Vue Router
- Vite
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
