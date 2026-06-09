# 🛒 E-commerce - Atividade 3

## 📖 Sobre esta Atualização

Esta branch contém a terceira etapa de evolução do projeto de e-commerce.

O foco desta atividade foi melhorar a interface da aplicação utilizando **PrimeVue** e **Tailwind CSS**, tornando a experiência visual mais organizada, responsiva e moderna.

Nesta etapa, a lógica do e-commerce foi mantida, incluindo o funcionamento do carrinho, a tipagem com TypeScript e a estrutura dos produtos. A principal evolução foi a refatoração da interface, substituindo elementos HTML comuns por componentes visuais mais robustos e estilizados.

---

## 🎯 Objetivos da Atividade

Implementar melhorias na interface do sistema utilizando:

- PrimeVue
- Tailwind CSS
- Componentes reutilizáveis
- Layout responsivo
- Componentes visuais para produtos e carrinho
- Manutenção da reatividade da aplicação
- Preservação da tipagem com TypeScript

---

## 🚀 Funcionalidades e Melhorias Implementadas

### 🧩 Integração com PrimeVue

O projeto foi configurado para utilizar componentes do **PrimeVue**, permitindo uma interface mais profissional e padronizada.

Componentes utilizados na aplicação:

- `Card`
- `Button`
- `InputNumber`

Esses componentes substituem elementos HTML comuns e tornam a interface mais elegante e consistente.

---

### 🎨 Estilização com Tailwind CSS

A estilização foi realizada utilizando classes utilitárias do **Tailwind CSS**, evitando CSS customizado manual.

Foram aplicadas classes para:

- Espaçamento
- Grid responsivo
- Alinhamento
- Bordas
- Sombras
- Organização visual
- Responsividade

Exemplo de layout responsivo utilizado:

```html
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

---

### 🖼️ Refatoração do ProductCard.vue

O componente `ProductCard.vue` foi refatorado para utilizar componentes do PrimeVue.

Principais melhorias:

- Uso do componente `Card`
- Uso do componente `Button`
- Melhor organização visual do produto
- Layout mais limpo e reutilizável
- Estilização com Tailwind CSS

Essa alteração deixou a vitrine de produtos mais organizada e visualmente próxima de uma aplicação real de e-commerce.

---

### 🏗️ Atualização do Layout Principal

O arquivo `App.vue` foi ajustado para organizar melhor a vitrine de produtos e a área do carrinho.

Melhorias aplicadas:

- Grid responsivo para produtos
- Separação visual entre vitrine e carrinho
- Layout adaptável para diferentes tamanhos de tela
- Melhor espaçamento entre os elementos

---

### 🛒 Carrinho com Componentes PrimeVue

A área do carrinho foi melhorada com componentes visuais do PrimeVue.

Melhorias implementadas:

- Exibição dos itens adicionados ao carrinho
- Visualização da quantidade de cada item
- Atualização de quantidade com `InputNumber`
- Cálculo automático do total de itens
- Cálculo automático do preço final

---

### 🔢 Controle de Quantidade

O componente `InputNumber` foi utilizado para alterar a quantidade de produtos no carrinho de forma mais prática.

Com isso, o usuário pode incrementar ou reduzir a quantidade dos itens de maneira mais intuitiva, mantendo a reatividade da aplicação.

---

### 🧮 Total de Itens e Preço Final

A aplicação continua exibindo:

- Total de itens no carrinho
- Preço final da compra

Esses valores são atualizados de forma reativa conforme os produtos são adicionados ou suas quantidades são alteradas.

---

## 🔥 Desafio Extra

Além da migração básica para PrimeVue e Tailwind, a atividade também propôs melhorias de experiência premium.

Possíveis melhorias previstas:

- Empty State para carrinho vazio
- Confirmação antes de remover todos os itens
- Implementação de tema claro/escuro
- Uso de `ConfirmDialog`
- Integração com classes `dark:` do Tailwind

---

## 🏗️ Estrutura da Aplicação

A aplicação segue uma estrutura baseada em componentes, mantendo a separação entre lógica, visualização e tipagem.

```text
src/
├── components/
│   └── ProductCard.vue
│
├── models/
│   ├── Category.ts
│   ├── Product.ts
│   ├── User.ts
│   └── Cart.ts
│   └── CartItem.ts
│
│
├── App.vue
├── main.ts
└── style.css
```

---

## 📚 Conceitos Praticados

### Vue

- Componentização
- Props
- Eventos personalizados
- Reatividade
- Options API

### TypeScript

- Interfaces
- Tipagem de objetos
- Tipagem de componentes
- Proteção de dados com tipos

### PrimeVue

- Configuração de plugin
- Uso de componentes prontos
- Componentes `Card`
- Componentes `Button`
- Componentes `InputNumber`

### Tailwind CSS

- Classes utilitárias
- Grid responsivo
- Espaçamentos
- Sombras
- Bordas arredondadas
- Layout adaptável

### E-commerce

- Vitrine de produtos
- Carrinho de compras
- Controle de quantidade
- Cálculo de totais
- Atualização reativa da interface

---

## 🔄 Evolução em Relação à Atividade 2

Na Atividade 2, o foco estava na estrutura lógica do sistema, incluindo:

- Models
- Interfaces
- Tipagem avançada
- Carrinho
- Regras de negócio
- High-Order Functions

Nesta Atividade 3, o projeto evoluiu visualmente com:

- Integração do PrimeVue
- Configuração do Tailwind CSS
- Refatoração do `ProductCard.vue`
- Melhoria do layout principal
- Grid responsivo para produtos
- Carrinho com componentes mais modernos
- Melhor experiência de uso

---

## ✅ Critérios Atendidos

- Uso de PrimeVue na interface
- Uso de pelo menos dois componentes PrimeVue
- Estilização com Tailwind CSS
- Layout responsivo
- Lógica de carrinho preservada
- Tipagem TypeScript mantida
- Reatividade da aplicação mantida
- Interface mais organizada e profissional

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://skillicons.dev/icons?i=vue,ts,js,tailwind,vite,git,github,vscode" />

</div>

### Ferramentas

- Vue
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
