import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Interfaces reativas, performáticas e consistentes com TypeScript estrito e design systems',
    skills: [
      { name: 'React', isCore: true, context: 'SPAs escaláveis, hooks customizados, memoização e Context API' },
      { name: 'TypeScript', isCore: true, context: 'Tipagem estrita, generics, interfaces de domínio e Zod' },
      { name: 'Angular', isCore: true, context: 'Aplicações corporativas e evolução de sistemas legados' },
      { name: 'React Native', isCore: true, context: 'Aplicações móveis para iOS e Android com biometria nativa (Face ID)' },
      { name: 'Next.js', isCore: false, context: 'SSR, SSG e rotas de API para aplicações web completas' },
      { name: 'Tailwind CSS', isCore: true, context: 'Estilização utilitária moderna, design tokens e temas dark/light' },
      { name: 'Styled Components', isCore: false, context: 'CSS-in-JS modular para aplicações dinâmicas em React' },
      { name: 'Material UI (MUI)', isCore: false, context: 'Componentes de design system corporativos e dashboards' },
      { name: 'HTML5 & CSS3', isCore: false, context: 'Semântica acessível (a11y), flexbox e grid layouts' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Arquitetura de microsserviços e APIs resilientes com Node.js e separação limpa de camadas',
    skills: [
      { name: 'Node.js', isCore: true, context: 'Runtimes de alta performance, event-loop e streaming de dados' },
      { name: 'Express & Fastify', isCore: true, context: 'APIs RESTful de alta velocidade, middlewares e validações' },
      { name: 'REST APIs', isCore: true, context: 'Design de endpoints padronizados, versionamento e OpenAPI' },
      { name: 'tRPC', isCore: false, context: 'Comunicação end-to-end type-safe entre cliente e servidor' },
      { name: 'Java', isCore: false, context: 'Desenvolvimento de APIs e microsserviços corporativos' },
      { name: 'Ruby', isCore: false, context: 'Manutenção de APIs e rotinas backend' },
      { name: 'Clean Architecture', isCore: false, context: 'Separação de domínio, services, controllers e repositories' },
    ],
  },
  {
    id: 'data',
    name: 'Dados',
    description: 'Modelagem relacional, otimização minuciosa de queries e persistência confiável',
    skills: [
      { name: 'PostgreSQL', isCore: true, context: 'Transações atômicas (ACID), jsonb, índices parciais e compostos' },
      { name: 'Otimização SQL (EXPLAIN)', isCore: true, context: 'Análise de planos de execução, tuning de queries e eliminação de gargalos' },
      { name: 'Prisma ORM', isCore: true, context: 'Modelagem tipada, migrations seguras e queries performáticas' },
      { name: 'Sequelize', isCore: false, context: 'Mapeamento objeto-relacional em TypeScript/Node.js' },
      { name: 'MySQL', isCore: false, context: 'Estruturação de tabelas e manutenção de bases relacionais' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud e Infraestrutura',
    description: 'Serviços gerenciados AWS, conteinerização e pipelines automatizados de entrega',
    skills: [
      { name: 'AWS (S3, RDS, ECS, CloudFront)', isCore: true, context: 'Armazenamento de mídia, CDN global, containers e bancos gerenciados' },
      { name: 'AWS (Lambda, API Gateway)', isCore: true, context: 'Arquiteturas serverless e processamento orientado a eventos' },
      { name: 'Docker', isCore: true, context: 'Padronização de ambientes de desenvolvimento, conteinerização e imagens' },
      { name: 'CI/CD (GitHub Actions)', isCore: true, context: 'Pipelines automatizados de testes, build e deploy contínuo' },
    ],
  },
  {
    id: 'async',
    name: 'Sistemas Assíncronos',
    description: 'Mensageria, filas de alta vazão e orquestração de processamentos em background',
    skills: [
      { name: 'Redis', isCore: true, context: 'Filas de alta velocidade, cache em memória e controle de concorrência' },
      { name: 'RabbitMQ', isCore: true, context: 'Mensageria AMQP distribuída entre microsserviços desacoplados' },
      { name: 'Workers & Filas', isCore: true, context: 'Transcodificação de vídeo HLS, processamento em lote e cron jobs' },
    ],
  },
  {
    id: 'ai',
    name: 'Inteligência Artificial',
    description: 'Engenharia de integração prática com LLMs determinísticas e acionamento de ferramentas',
    skills: [
      { name: 'LLMs', isCore: true, context: 'Integração de modelos de linguagem de ponta (OpenAI, Anthropic, Google)' },
      { name: 'AI Tool Calling / Function Calling', isCore: true, context: 'Orquestração determinística de ferramentas e chamadas de API internas' },
      { name: 'Integração de Modelos de Linguagem', isCore: true, context: 'Conexão entre regras de negócio corporativas e fluxos de IA em produção' },
    ],
  },
  {
    id: 'quality',
    name: 'Qualidade e Colaboração',
    description: 'Testes automatizados, observabilidade e metodologias ágeis de desenvolvimento',
    skills: [
      { name: 'Git & GitHub', isCore: true, context: 'Versionamento semântico, Git Flow e PRs bem descritos' },
      { name: 'Jest & Mocha', isCore: true, context: 'Testes unitários e de integração para APIs e componentes' },
      { name: 'Jira & Linear', isCore: true, context: 'Gestão de tarefas, integração com APIs de reporte e rituais ágeis' },
      { name: 'Scrum & Kanban', isCore: false, context: 'Ciclos iterativos de entrega, refinamento técnico e code reviews' },
    ],
  },
];
