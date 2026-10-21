import { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Giulyano Santos',
  fullName: 'Giulyano Felipe Santos Silva',
  title: 'Full Stack Software Engineer',
  roleSummary: 'Construo software que conecta tecnologia, automação e problemas reais de negócio.',
  location: 'Recife, Pernambuco, Brasil',
  yearsOfExperience: '+4 anos',
  email: 'giulyanofelipesantos@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/giulyano-santos/',
  githubUrl: 'https://github.com/Gsantos99',
  avatarUrl: 'https://avatars.githubusercontent.com/u/94020264?v=4',
  statusText: 'Disponível para novas oportunidades & desafios de engenharia',
  bioParagraphs: [
    'Sou engenheiro de software Full Stack com mais de quatro anos de experiência desenhando, construindo e evoluindo sistemas em produção. Minha atuação transita com fluidez entre a engenharia de backend com Node.js e TypeScript — com foco em modelagem relacional, processamento assíncrono e arquitetura de APIs — e a criação de interfaces reativas e consistentes em React, Angular e Next.js.',
    'Tenho direcionado minha prática de engenharia para problemas de alto impacto operacional: automação de pipelines de faturamento que reduziram ciclos de dias para horas, investigação e otimização profunda de queries SQL em bancos sob carga, e implementação de soluções práticas com Inteligência Artificial utilizando LLMs orquestradas via Function Calling para execução determinística de ações na aplicação.',
    'Acredito em código limpo como meio de viabilizar velocidade contínua e previsibilidade de entrega. Trabalho guiado por observabilidade, boas práticas de desacoplamento, documentação viva e entendimento genuíno do produto antes de qualquer linha de arquitetura.',
  ],
  quickQualifications: [
    { label: 'Formação Acadêmica', value: 'Centro Universitário Senac — Análise e Desenv. de Sistemas (2025)' },
    { label: 'Idiomas', value: 'Inglês Intermediário (Comunicação e leitura técnica)' },
    { label: 'Localização & Modelo', value: 'Recife — PE · Disponível para Remoto / Híbrido' },
    { label: 'Trajetória Técnica', value: '+3 anos em produção · Full Stack (Node.js, TypeScript, React, Angular, AWS)' },
  ],
  pillars: [
    {
      title: 'Engenharia de Produção',
      subtitle: 'Robustez & Confiabilidade',
      description:
        'Sistemas resilientes com validação estrita em todas as camadas de entrada, tratamento estruturado de erros e otimização contínua de rotas críticas e queries de banco de dados.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Sistemas Assíncronos & IA',
      subtitle: 'Processamento em Escala',
      description:
        'Arquiteturas orientadas a eventos e workers assíncronos (Redis/RabbitMQ) combinadas com agentes de IA pragmáticos que executam ações determinísticas via Function Calling.',
      icon: 'Cpu',
    },
    {
      title: 'Visão de Produto & Entrega',
      subtitle: 'Impacto Real no Negócio',
      description:
        'Foco implacável em eliminar atritos operacionais e gargalos de faturamento, traduzindo necessidades complexas de domínio em soluções de software enxutas e mensuráveis.',
      icon: 'Layers',
    },
  ],
};
