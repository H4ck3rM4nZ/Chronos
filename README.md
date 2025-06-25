# Estudo de Estrutura Semântica com HTML5 + React

Este repositório tem como objetivo documentar meus estudos sobre estrutura semântica no HTML5, junto com conceitos modernos do ecossistema React. Estou aplicando **boas práticas de acessibilidade, componentização, estilização moderna e persistência local**.

---

## 🧠 Tecnologias e Conceitos Estudados

### ✅ HTML5 Semântico

- Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` e outros elementos semânticos
- Organização de conteúdo com significado e acessibilidade

### ✅ React + ReactDOM

- Criação de interfaces com JSX
- Renderização de componentes no DOM
- Separação por responsabilidade: componentes reutilizáveis e claros

### ✅ Componentização

- Divisão de layout em pequenos blocos funcionais e reutilizáveis
- Boas práticas de nomeação e organização de arquivos

### ✅ Styled Components

- Estilização com CSS-in-JS
- Temas light/dark usando ThemeProvider
- Aninhamento (nesting) e reaproveitamento de estilos

### ✅ LocalStorage

- Armazenamento de preferências do usuário (ex: tema claro/escuro)
- Persistência de dados sem necessidade de backend

---

## 📁 Estrutura do Projeto (Exemplo)

```bash
src/
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
│
├── styles/
│   ├── global.ts
│   └── themes/
│       ├── dark.ts
│       └── light.ts
│
├── App.tsx
└── main.tsx
```
