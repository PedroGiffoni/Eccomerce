# 🛒 E-commerce - Atividade 2

## 📖 Sobre esta Atualização

Esta branch contém a segunda etapa de evolução do projeto de e-commerce desenvolvido durante o curso.

O foco desta atividade foi aplicar conceitos de **Programação Orientada a Objetos (POO)** e **Tipagem Avançada em TypeScript**, garantindo maior segurança, organização e escalabilidade ao sistema.

---

## 🎯 Objetivos da Atividade

Implementar:

- Modelagem de categorias
- Modelagem de produtos
- Modelagem de usuários
- Controle de permissões através de Roles
- Estrutura de carrinho de compras
- Cálculo de quantidade total de itens
- Cálculo do valor final da compra

---

## 🚀 Funcionalidades Adicionadas

### 📂 Category

Criação da entidade responsável por representar categorias de produtos.

#### Atributos

```typescript
id: number
name: string
```

---

### 📦 Product

Criação da entidade responsável por representar produtos.

#### Atributos

```typescript
id: number
name: string
price: number
category: Category
```

A associação entre produto e categoria foi implementada utilizando tipagem forte.

---

### 👤 User

Criação da entidade responsável por representar usuários do sistema.

#### Atributos

```typescript
id: number
username: string
email: string
role: UserRole
```

---

### 🔐 Controle de Permissões

Implementação de Role tipada para garantir integridade durante o desenvolvimento.

Valores permitidos:

```typescript
ADMIN
CUSTOMER
```

O compilador impede a utilização de valores inválidos.

---

### 🛒 CartItem

Estrutura responsável por armazenar os itens do carrinho.

#### Atributos

```typescript
product: Product
quantity: number
```

---

### 🛍️ Carrinho de Compras

Implementação da entidade Cart.

Responsabilidades:

- Armazenar itens
- Somar quantidades
- Calcular valores
- Evitar duplicação de produtos

---

### 📦 Quantidade Total de Itens

Método:

```typescript
getTotalItems()
```

Retorna a soma de todas as quantidades presentes no carrinho.

---

### 💰 Valor Final da Compra

Método:

```typescript
getFinalPrice()
```

Calcula o valor total da compra.

---

## 🔥 Desafio Extra

Foram utilizadas High-Order Functions para tornar o código mais declarativo.

### some()

Utilizado para verificar se um produto já existe no carrinho.

```typescript
some()
```

---

### reduce()

Utilizado para calcular:

#### Quantidade Total

```typescript
getTotalItems()
```

#### Valor Final

```typescript
getFinalPrice()
```

---

## 🏗️ Estrutura da Aplicação

```text
src/
├── models/
│   ├── Category.ts
│   ├── Product.ts
│   ├── User.ts
│   └── Cart.ts
│
├── interfaces/
│   └── CartItem.ts
│
└── main.ts
```

---

## 📚 Conceitos Praticados

### Programação Orientada a Objetos

- Classes
- Objetos
- Encapsulamento
- Construtores

### Tipagem Avançada

- Interfaces
- Enums
- Literal Types

### Estruturas de Dados

- Arrays
- Arrays de Objetos

### High-Order Functions

```typescript
some()
reduce()
```

### Boas Práticas

- Tipagem forte
- Reutilização de código
- Separação de responsabilidades
- Organização em camadas

---

## 🔄 Evolução em Relação à Atividade 1

Nesta etapa o projeto evoluiu de uma estrutura básica para uma arquitetura orientada a objetos, adicionando:

- Modelagem de domínio
- Controle de usuários
- Controle de permissões
- Estrutura de carrinho de compras
- Tipagem avançada
- Regras de negócio

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=ts,js,git,github,vscode" />

</div>

### Ferramentas

- TypeScript
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
