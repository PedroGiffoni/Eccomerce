# 🛒 Atividade 1 - Sistema de E-commerce com TypeScript

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte dos estudos de **Programação Orientada a Objetos (POO)** e **Tipagem Avançada em TypeScript**, simulando a estrutura básica de um sistema de e-commerce.

O objetivo foi modelar entidades comuns em aplicações de comércio eletrônico, como produtos, categorias, usuários e carrinho de compras, aplicando boas práticas de desenvolvimento, tipagem forte e regras de negócio.

Além disso, foram utilizados recursos modernos do TypeScript para garantir maior segurança durante o desenvolvimento, reduzindo erros e tornando o código mais escalável e de fácil manutenção.

---

## 🎯 Objetivo do Desafio

Desenvolver uma estrutura de e-commerce utilizando TypeScript com foco em:

- Modelagem de entidades
- Programação Orientada a Objetos
- Tipagem forte
- Interfaces
- Enums ou Literal Types
- Manipulação de Arrays
- Regras de negócio
- High-Order Functions (HOF)

---

## ⚙️ Funcionalidades Implementadas

### 📂 Categorias

Cada categoria possui:

```typescript
id
name
```

Responsável por organizar os produtos do sistema.

---

### 📦 Produtos

Cada produto possui:

```typescript
id
name
price
category
```

O atributo `category` é tipado utilizando a interface `Category`.

---

### 👤 Usuários

Cada usuário possui:

```typescript
id
username
email
role
```

O atributo `role` aceita apenas os valores:

```typescript
ADMIN
CUSTOMER
```

Garantindo segurança em tempo de compilação.

---

### 🛒 Carrinho de Compras

O carrinho permite armazenar produtos através da interface:

```typescript
CartItem
```

Contendo:

```typescript
product
quantity
```

---

### ➕ Adicionar Produtos ao Carrinho

Ao adicionar um produto:

- Caso ele ainda não exista no carrinho, é criado um novo item.
- Caso já exista, a quantidade é incrementada automaticamente.

Evita duplicação de registros.

---

### 📦 Quantidade Total de Itens

O método:

```typescript
getTotalItems()
```

Retorna a soma de todas as unidades presentes no carrinho.

Exemplo:

```text
Produto A: 2 unidades
Produto B: 3 unidades

Total: 5 itens
```

---

### 💰 Valor Final da Compra

O método:

```typescript
getFinalPrice()
```

Calcula automaticamente o valor total da compra.

Exemplo:

```text
Produto A: R$ 100 x 2
Produto B: R$ 50 x 3

Total: R$ 350
```

---

## 🔥 Desafio Extra Implementado

Para tornar o código mais declarativo e moderno, foram utilizados métodos de High-Order Functions do JavaScript/TypeScript.

### some()

Utilizado para verificar se um produto já existe no carrinho.

```typescript
some()
```

---

### reduce()

Utilizado para:

#### Quantidade Total

```typescript
getTotalItems()
```

#### Valor Total

```typescript
getFinalPrice()
```

---

## 🏗️ Estrutura da Aplicação

O projeto foi desenvolvido utilizando:

- Classes
- Interfaces
- Enums ou Literal Types
- Encapsulamento
- Tipagem Forte
- High-Order Functions
- Arrays de Objetos

---

## 📂 Estrutura do Projeto

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
- Enum
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
- Código reutilizável
- Organização em camadas
- Regras de negócio isoladas

---

## 🛡️ Regras de Negócio

### Integridade da Role

O sistema permite apenas:

```typescript
ADMIN
CUSTOMER
```

Impedindo valores inválidos durante o desenvolvimento.

---

### Acúmulo de Produtos

Produtos repetidos não são duplicados no carrinho.

Ao adicionar novamente:

```text
Produto existente
+
Nova quantidade
=
Quantidade atualizada
```

---

### Tipagem Completa

O projeto foi desenvolvido sem utilização de:

```typescript
any
```

Garantindo maior segurança e previsibilidade no código.

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

## 🎓 Contexto Acadêmico

Projeto desenvolvido como atividade prática para aplicação dos conceitos de:

- Programação Orientada a Objetos
- Tipagem Avançada
- Modelagem de Domínio
- Estruturas de Dados
- Desenvolvimento de Sistemas de E-commerce

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

## ⭐ Apoie o Projeto

Se este projeto foi útil para você ou ajudou nos estudos de TypeScript, Programação Orientada a Objetos e modelagem de sistemas de e-commerce, considere deixar uma estrela no repositório.
