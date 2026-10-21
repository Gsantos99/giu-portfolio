import { Project, OpenSourceRepo, ImpactMetric } from '../types/portfolio';

export const impactMetrics: ImpactMetric[] = [
  {
    id: 'billing-automation',
    metric: '5d → 1d',
    label: 'Ciclo de Faturamento',
    category: 'Engenharia de Automação',
    description: 'Redução de 5 para 1 dia útil no processamento e conciliação do faturamento mensal.',
    highlight: '-80% de tempo operacional',
    context:
      'Automação de regras complexas de validação contábil e orquestração de processamento em lote com tratamento resiliente de erros.',
    codeSnippet: 'const cycleTimeReduction = ((5 - 1) / 5) * 100; // 80% reduction',
  },
  {
    id: 'sql-optimization',
    metric: '~100%',
    label: 'Ganho em Queries Críticas',
    category: 'Performance de Banco',
    description: 'Otimização pontual em rotas e consultas de alta concorrência em banco relacional.',
    highlight: 'Tempo de resposta reduzido pela metade',
    context:
      'Análise de planos de execução (EXPLAIN ANALYZE), reestruturação de JOINs, remoção de subconsultas correlacionadas e criação de índices compostos cirúrgicos.',
    codeSnippet: 'EXPLAIN ANALYZE SELECT ... // execution time from ~2.4s to <120ms',
  },
  {
    id: 'ai-function-calling',
    metric: 'Function Calling',
    label: 'IA Aplicada em Produção',
    category: 'Inteligência Artificial',
    description: 'Execução segura e determinística de fluxos do sistema a partir de linguagem natural.',
    highlight: 'Ações reais conectadas a LLMs',
    context:
      'Orquestração de chamadas de ferramentas e endpoints internos com validação de esquema estrita, autenticação de sessão e guardrails contra alucinações.',
    codeSnippet: '{ type: "function", function: { name: "schedule_consultation", parameters: schema } }',
  },
  {
    id: 'end-to-end-systems',
    metric: 'End-to-End',
    label: 'Automação & Integrações',
    category: 'Arquitetura de Solução',
    description: 'Integrações robustas entre frontend, backend, microsserviços e ferramentas externas.',
    highlight: 'Zero processos manuais isolados',
    context:
      'Pipelines assíncronos que conectam desde o mobile nativo com biometria até a triagem automática de chamados de clientes integrados ao Jira via API REST.',
    codeSnippet: 'await queue.add("process-feedback", payload, { attempts: 3, backoff: "exponential" })',
  },
];

export const projects: Project[] = [
  {
    id: 'setthub-lms',
    title: 'Setthub — Plataforma LMS White-Label',
    subtitle: 'Arquitetura SaaS multi-tenant para treinamentos corporativos e consultorias com pipeline de vídeo HLS',
    category: 'saas',
    ecosystemBadge: {
      label: 'Iniciativa Própria de Engenharia',
      type: 'initiative',
    },
    contextAndProblem:
      'Iniciativa autoral de engenharia e produto em desenvolvimento voltada para consultorias e empresas que necessitam de ambientes de treinamento corporativo com identidade própria (white-label), controle de acesso granular e entrega fluida de mídia pesada sem custos proibitivos de infraestrutura.',
    engineeringChallenge:
      'Projetar uma arquitetura multi-tenant isolada que suportasse uploads de vídeo pesados sem bloquear as APIs principais, com processamento assíncrono para transcodificação de resoluções múltiplas, entrega adaptativa (HLS) e controle de sessão seguro.',
    technicalSolution: [
      'Modelagem relacional multi-tenant no PostgreSQL garantindo isolamento lógico de dados por organização e controle de permissões por roles (RBAC).',
      'Pipeline de mídia desacoplado: upload direto para AWS S3 via URLs pré-assinadas com políticas restritas de segurança.',
      'Fila de processamento assíncrono com Redis e Workers dedicados para orquestração de transcodificação de vídeo em diferentes resoluções e geração de playlists HLS (.m3u8).',
      'Interface reativa em React e TypeScript focada em performance, consumo eficiente de streaming e painéis administrativos para os gestores.',
    ],
    impactAndResults: [
      'Iniciativa em evolução técnica contínua servindo como laboratório de arquitetura moderna de microsserviços, streaming de mídia e infraestrutura em nuvem.',
      'Eliminação completa de gargalos no servidor web durante uploads pesados graças ao desacoplamento via S3 e filas assíncronas.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS S3',
      'FFmpeg / HLS',
      'Docker',
      'Tailwind CSS',
    ],
    highlightMetric: {
      value: 'Multi-Tenant + HLS',
      label: 'Pipeline Assíncrono de Vídeo',
    },
    links: {
      liveDemo: 'https://setthub.com.br',
      previewNote: 'Plataforma SaaS White-Label para gestão e distribuição de treinamentos corporativos.',
    },
  },
  {
    id: 'healthtech-ai-assistant',
    title: 'Assistente Conversacional com IA & Function Calling',
    subtitle: 'Chatbot com LLMs orquestradas para acionar ferramentas reais em plataforma de saúde',
    category: 'ai',
    ecosystemBadge: {
      label: 'Ecossistema Digital de Saúde (Healthtech)',
      type: 'healthtech',
    },
    contextAndProblem:
      'Em uma plataforma de saúde em produção com grande volume de usuários, os fluxos de consulta e atendimento exigiam múltiplos passos nas telas. Era necessário um assistente conversacional capaz não apenas de tirar dúvidas, mas de consultar dados em tempo real e disparar ações concretas com segurança operacional.',
    engineeringChallenge:
      'Garantir que a IA não inventasse dados (alucinação) e operasse com estrito determinismo ao interagir com regras de negócio e permissões de usuários no backend, com latência controlada e fallback gracioso em caso de indisponibilidade de provedores externos.',
    technicalSolution: [
      'Engenharia de integração de LLMs focada em arquitetura de aplicação, utilizando Function Calling com validação estrita de esquemas JSON para chamadas de ferramentas.',
      'Construção de camada intermediária no backend (Node.js/TypeScript) responsável por autenticar a sessão do usuário antes de permitir a execução de qualquer função de consulta ou mutação.',
      'Implementação de prompts de sistema com guardrails claros, delimitando o escopo estrito de atuação do assistente para operações autorizadas.',
      'Integração fluida no frontend com streaming de respostas (SSE) para percepção imediata de interatividade pelo usuário.',
    ],
    impactAndResults: [
      'Capacidade de disparar consultas e agendamentos diretamente pela conversa, reduzindo o número de cliques em tarefas rotineiras.',
      'Garantia de segurança operacional: nenhuma ação é realizada diretamente pela LLM sem passar pelas validações de autorização da API corporativa.',
    ],
    techStack: [
      'TypeScript',
      'Node.js',
      'LLM APIs',
      'Function Calling',
      'React',
      'RESTful APIs',
      'Zod / JSON Schema',
      'SSE Streaming',
    ],
    highlightMetric: {
      value: 'Zero Alucinações em Ações',
      label: 'Execução Determinística de APIs',
    },
  },
  {
    id: 'billing-pipeline-automation',
    title: 'Automação do Pipeline de Faturamento',
    subtitle: 'Eliminação de gargalos operacionais e redução drástica no ciclo financeiro mensal',
    category: 'performance',
    ecosystemBadge: {
      label: 'Engenharia de Sistemas & Backend',
      type: 'engineering',
    },
    contextAndProblem:
      'O fechamento do faturamento dependia de cruzamentos manuais de planilhas, conferência de regras contratuais e consolidação de relatórios, resultando em um ciclo exaustivo que consumia 5 dias úteis e acumulava riscos de inconsistências contábeis.',
    engineeringChallenge:
      'Mapear e traduzir regras complexas de faturamento com múltiplas variáveis contratuais em código determinístico, garantindo atomicidade nas transações financeiras e rastreabilidade integral para auditoria.',
    technicalSolution: [
      'Desenvolvimento de motor de cálculo e conciliação em TypeScript/Node.js com processamento de lotes transacionados em banco de dados relacional.',
      'Desenvolvimento da lógica de cupons de desconto flexíveis para produtos, estruturando regras de negócio dinâmicas para o faturamento.',
      'Refatoração de regras de negócio anteriormente hardcoded para um modelo orientado a dados (data-driven), aumentando configurabilidade e reduzindo alterações de código.',
      'Refatoração do principal endpoint de criação e sincronização de produtos integrado ao Bitrix CRM, melhorando estabilidade e rastreabilidade.',
      'Implementação de rotinas de pré-validação automática que identificam divergências antes da geração final das cobranças.',
      'Estruturação de logs de auditoria detalhados e geração automatizada de relatórios sintéticos e analíticos para o time financeiro.',
      'Desacoplamento de tarefas pesadas em background para não sobrecarregar as operações transacionais rotineiras do sistema.',
    ],
    impactAndResults: [
      'Redução comprovada do tempo total do ciclo de faturamento de 5 dias úteis para 1 dia útil (-80% de tempo operacional gasto).',
      'Eliminação quase total de retrabalho com retificações e aumento substancial na previsibilidade do fluxo financeiro.',
    ],
    techStack: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma / SQL',
      'Workers / Cron Jobs',
      'Docker',
    ],
    highlightMetric: {
      value: '5d → 1d útil',
      label: 'Redução de 80% no Tempo de Ciclo',
    },
  },
  {
    id: 'sql-query-optimization',
    title: 'Otimização de Consultas SQL & Performance de Banco',
    subtitle: 'Investigação profunda de planos de execução e ganho próximo de 100% em rotas críticas',
    category: 'performance',
    ecosystemBadge: {
      label: 'Engenharia de Dados & Performance',
      type: 'engineering',
    },
    contextAndProblem:
      'Com o crescimento do volume de dados e concorrência na aplicação, consultas essenciais de listagem e consolidação começaram a apresentar lentidão acentuada, atingindo timeouts esporádicos e travando conexões do pool no banco de dados relacional.',
    engineeringChallenge:
      'Identificar a raiz dos gargalos em um banco com milhões de registros sem interromper as operações do sistema e sem aumentar custos desnecessários de infraestrutura.',
    technicalSolution: [
      'Monitoramento detalhado de slow queries e inspeção minuciosa dos planos de execução via EXPLAIN ANALYZE para identificar seq scans desnecessários e nested loops onerosos.',
      'Refatoração das consultas SQL críticas: eliminação de subconsultas correlacionadas redundantes, substituição de cláusulas ineficientes e reestruturação criteriosa dos JOINs.',
      'Planejamento e aplicação de índices compostos e parciais estrategicamente alinhados aos filtros de busca e ordenações mais frequentes.',
      'Ajuste nos parâmetros de pooling e estratégias de paginação por cursor para evitar sobrecarga de memória na aplicação.',
    ],
    impactAndResults: [
      'Melhoria próxima de 100% nas consultas SQL otimizadas envolvidas (redução de mais de 50% no tempo médio de resposta nas rotas afetadas).',
      'Alívio direto na utilização de CPU e memória da instância do banco de dados, estabilizando as conexões sob picos de concorrência.',
    ],
    techStack: [
      'PostgreSQL / MySQL',
      'SQL Avançado',
      'EXPLAIN ANALYZE',
      'Indexação Composta',
      'Node.js',
      'TypeORM / Sequelize',
    ],
    highlightMetric: {
      value: '~100% de Ganho',
      label: 'Nas Consultas SQL Otimizadas',
    },
  },
  {
    id: 'mobile-biometric-auth',
    title: 'Aplicações Mobile & Autenticação Biométrica',
    subtitle: 'Experiência nativa segura com Face ID e biometria integrada a tokens JWT',
    category: 'mobile',
    ecosystemBadge: {
      label: 'Ecossistema Digital de Saúde (Healthtech)',
      type: 'healthtech',
    },
    contextAndProblem:
      'Usuários da aplicação mobile necessitavam de acesso rápido e seguro a informações sensíveis de saúde, sem a fricção contínua de redigitar senhas longas a cada abertura do app.',
    engineeringChallenge:
      'Integrar de maneira confiável APIs nativas de biometria dos ecossistemas iOS e Android com armazenamento de chaves criptográficas em hardware (Keychain/Keystore) e gerenciamento de ciclo de vida de tokens.',
    technicalSolution: [
      'Implementação de camada de autenticação biométrica em React Native conectada ao Secure Storage nativo.',
      'Fluxo de autenticação híbrido: login inicial credenciado com geração de refresh token cifrado em chave biométrica de hardware.',
      'Renovação transparente de sessão no backend via tokens de curta duração com revogação e rotação automática de tokens.',
      'Tratamento detalhado de casos de fallback: alteração de biometria no sistema operacional, cancelamento pelo usuário e dispositivos sem suporte.',
    ],
    impactAndResults: [
      'Experiência de acesso instantâneo com alto nível de segurança cibernética em conformidade com boas práticas de proteção de dados sensíveis.',
      'Redução expressiva no número de chamados de suporte relacionados a perda temporária de senha.',
    ],
    techStack: [
      'React Native',
      'TypeScript',
      'Biometrics (Face ID / Fingerprint)',
      'Secure Keychain / Keystore',
      'JWT Authentication',
      'Node.js REST API',
    ],
    highlightMetric: {
      value: 'Nativo & Seguro',
      label: 'Hardware Security Storage',
    },
  },
  {
    id: 'in-app-feedback-jira',
    title: 'Módulo de Feedback In-App Integrado ao Jira',
    subtitle: 'Captura contextual de bugs e sugestões conectada ao fluxo de triagem de engenharia',
    category: 'saas',
    ecosystemBadge: {
      label: 'Ecossistema Digital de Saúde (Healthtech)',
      type: 'healthtech',
    },
    contextAndProblem:
      'Relatos de problemas enviados por usuários frequentemente chegavam sem detalhes técnicos essenciais (versão do aplicativo, sistema operacional, logs de erro ou passos para reproduzir), atrasando o diagnóstico pela equipe de engenharia.',
    engineeringChallenge:
      'Coletar automaticamente o contexto de execução relevante respeitando a privacidade do usuário, sanitizando dados sensíveis e criando chamados estruturados de forma assíncrona nas APIs do Jira sem impactar a performance do app.',
    technicalSolution: [
      'Desenvolvimento de componente in-app responsivo e não intrusivo para coleta de feedbacks, anexação de prints e categorização de chamados.',
      'Mecanismo de telemetria contextual que agrega automaticamente metadata do dispositivo, rota ativa e stack trace de erros recentes antes do envio.',
      'Microsserviço intermediário em Node.js com autenticação OAuth/API Token para sanitização de dados e disparo assíncrono de issues estruturadas no Jira Service Management / Software.',
    ],
    impactAndResults: [
      'Aproximação direta entre os usuários finais da plataforma de saúde e o ciclo ágil de engenharia e correção de bugs.',
      'Redução expressiva no tempo de triagem de defeitos, graças à presença padronizada de dados contextuais em cada ticket criado.',
    ],
    techStack: [
      'React Native / React',
      'TypeScript',
      'Jira REST API',
      'Node.js',
      'Sanitização de Dados',
      'Telemetry & Error Context',
    ],
    highlightMetric: {
      value: 'Triagem Ágil',
      label: 'Tickets com Contexto Técnico',
    },
  },
];

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: 'ecommerce-microservices',
    description:
      'Arquitetura distribuída de microsserviços para gestão de pedidos e faturas construída com TypeScript, Fastify, ORM Drizzle, mensageria via RabbitMQ e observabilidade distribuída com Jaeger Tracing.',
    repoUrl: 'https://github.com/Gsantos99/ecommerce-microservices',
    techStack: ['TypeScript', 'Fastify', 'Drizzle ORM', 'RabbitMQ', 'Jaeger Tracing', 'Docker'],
    highlight: 'Arquitetura de Microsserviços & Mensageria',
  },
  {
    name: 'react-app-template',
    description:
      'Template base moderno para aplicações React + TypeScript + Vite, configurado com pipeline completo de CI/CD via GitHub Actions para build, testes, deploy automatizado em AWS S3 e invalidação no CloudFront.',
    repoUrl: 'https://github.com/Gsantos99/react-app-template',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'GitHub Actions'],
    highlight: 'CI/CD Automatizado para AWS CloudFront',
  },
  {
    name: 'url-shortener',
    description:
      'Serviço performático de encurtamento e redirecionamento de URLs desenvolvido em TypeScript com foco em tratamento estrito de tipagem, validação de rotas e persistência eficiente.',
    repoUrl: 'https://github.com/Gsantos99/url-shortener',
    techStack: ['TypeScript', 'Node.js', 'Express', 'Clean Architecture'],
    highlight: 'TypeScript Estrito & Design Modular',
  },
];
