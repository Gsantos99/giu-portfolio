# Giulyano Santos — Full Stack Software Engineer Portfolio

Portfólio profissional de **Giulyano Felipe Santos Silva**, desenvolvido com foco em arquitetura de sistemas, engenharia de software em produção, automação de processos, cloud (AWS) e Inteligência Artificial aplicada.

---

## Stack Tecnológica

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (com suporte nativo a tema Dark/Light)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tipografia:** Space Grotesk, Inter e JetBrains Mono

---

## Arquitetura do Projeto

O projeto separa estritamente a camada de dados (`src/data/`) dos componentes visuais (`src/components/` e `src/sections/`), permitindo atualizar experiências, projetos, métricas e stack sem alterar a estrutura das telas.

```text
├── public/
│   └── logos/                 # Logos oficiais das empresas (Amigo Tech, Neri Care, BidWeb, CITi)
├── src/
│   ├── components/            # Componentes de UI e visualização interativa
│   │   ├── ArchitectureVisual.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SectionHeader.tsx
│   ├── context/               # Gerenciamento de tema (Dark / Light)
│   │   └── ThemeContext.tsx
│   ├── data/                  # Fonte de verdade tipada do conteúdo
│   │   ├── education.ts       # Formação acadêmica e idiomas
│   │   ├── experience.ts      # Histórico profissional, entregas e links das empresas
│   │   ├── profile.ts         # Dados pessoais, bio, pilares e contatos
│   │   ├── projects.ts        # Projetos em destaque, métricas de impacto e repositórios
│   │   └── skills.ts          # Stack organizada por domínio (Core vs Complementar)
│   ├── sections/              # Seções da landing page
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Impact.tsx
│   │   ├── Projects.tsx
│   │   └── TechStack.tsx
│   ├── types/
│   │   └── portfolio.ts       # Contratos e interfaces TypeScript
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Como Executar Localmente

### Pré-requisitos
- **Node.js** 18+ (recomendado 20+ ou 22+)
- **npm** 9+

### Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

### Build de Produção e Verificação de Tipos

```bash
# Checagem estrita de tipos TypeScript
npx tsc --noEmit

# Gerar versão otimizada para produção na pasta dist/
npm run build

# Visualizar build de produção localmente
npm run preview
```

---

## Como Atualizar o Conteúdo

Toda manutenção de conteúdo pode ser feita diretamente nos arquivos em `src/data/`:

- **Dados pessoais e links:** `src/data/profile.ts`
- **Métricas de impacto e projetos principais:** `src/data/projects.ts`
- **Experiências profissionais e logos:** `src/data/experience.ts`
- **Competências técnicas:** `src/data/skills.ts`
- **Formação acadêmica e idiomas:** `src/data/education.ts`

---

## Contato

- **Nome:** Giulyano Felipe Santos Silva
- **LinkedIn:** [linkedin.com/in/giulyano-santos](https://www.linkedin.com/in/giulyano-santos/)
- **GitHub:** [github.com/Gsantos99](https://github.com/Gsantos99)
- **E-mail:** [giulyanofelipesantos@gmail.com](mailto:giulyanofelipesantos@gmail.com)
