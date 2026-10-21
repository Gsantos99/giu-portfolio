import React, { useState } from 'react';
import {
  Smartphone,
  Server,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Activity,
  Terminal,
} from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  role: string;
  tech: string[];
  protocol: string;
  metrics: string;
  description: string;
}

const architectureNodes: NodeDetail[] = [
  {
    id: 'clients',
    name: 'Client Layer',
    icon: Smartphone,
    badge: 'FRONTEND & MOBILE',
    role: 'Interfaces Reativas & Acesso Seguro',
    tech: ['React', 'TypeScript', 'React Native', 'Tailwind CSS', 'Biometrics (Face ID)'],
    protocol: 'HTTPS / TLS 1.3 / SSE Streaming',
    metrics: 'Autenticação Biométrica Nativa em Hardware',
    description:
      'Aplicações web responsivas e mobile nativo consumindo APIs através de canais criptografados com suporte a Face ID / impressão digital em hardware Keychain/Keystore.',
  },
  {
    id: 'gateway',
    name: 'API & Gateway',
    icon: Server,
    badge: 'BACKEND SERVICES',
    role: 'Validação Estrita & Orquestração',
    tech: ['Node.js', 'Express', 'Fastify', 'TypeScript Strict', 'Zod Schemas', 'JWT RBAC'],
    protocol: 'RESTful / JSON / EventStream',
    metrics: 'Zero Runtime Type Inconsistencies',
    description:
      'Camada de serviços com validação profunda de esquemas em tempo de execução via Zod, rate limiting, controle de permissões por perfil e isolamento de rotas.',
  },
  {
    id: 'ai-engine',
    name: 'AI Engine',
    icon: Cpu,
    badge: 'LLM & FUNCTION CALLING',
    role: 'Agentes Pragmáticos com Execução Real',
    tech: ['LLM APIs', 'Function Calling', 'JSON Schemas', 'Deterministic Guardrails'],
    protocol: 'OpenAI / Claude / Gemini API Protocols',
    metrics: 'Zero Alucinações em Chamadas de APIs',
    description:
      'Integração de modelos de linguagem conectados a ferramentas internas: o assistente converte intenções em linguagem natural em chamadas de API tipadas e autorizadas.',
  },
  {
    id: 'async-workers',
    name: 'Async Workers',
    icon: Layers,
    badge: 'EVENT-DRIVEN & QUEUES',
    role: 'Processamento Pesado & Faturamento',
    tech: ['Redis', 'RabbitMQ', 'Background Workers', 'FFmpeg Transcoder'],
    protocol: 'AMQP / Redis Pub-Sub',
    metrics: 'Faturamento: de 5 dias úteis para 1 dia (-80%)',
    description:
      'Orquestração de pipelines em background para cálculo e conciliação de faturamento em lote, transcodificação de streaming HLS para o Setthub e envio de telemetria.',
  },
  {
    id: 'persistence',
    name: 'Data & Cloud',
    icon: Database,
    badge: 'STORAGE & TUNING',
    role: 'Persistência Confiável & CDN',
    tech: ['PostgreSQL', 'Prisma ORM', 'AWS S3', 'CloudFront', 'EXPLAIN ANALYZE'],
    protocol: 'TCP / PostgreSQL Native Protocol',
    metrics: 'Otimização SQL: ganho próximo de 100%',
    description:
      'Bancos relacionais estruturados com transações ACID, planos de execução otimizados via EXPLAIN ANALYZE, índices parciais e armazenamento em nuvem na AWS.',
  },
];

export const ArchitectureVisual: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai-engine');

  const activeNode =
    architectureNodes.find((n) => n.id === activeNodeId) || architectureNodes[0];

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#121620] shadow-xl overflow-hidden transition-all">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#0E121A] border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-[#7AF298]" />
            system-architecture-view.ts
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-[#7AF298]/10 border border-emerald-500/20 dark:border-[#7AF298]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#7AF298] animate-ping" />
            <span className="font-mono text-[10px] uppercase font-semibold text-emerald-600 dark:text-[#7AF298]">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Main Architecture Interactive Flow */}
      <div className="p-4 sm:p-6 lg:p-7">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="font-mono text-xs text-emerald-600 dark:text-[#7AF298] tracking-wider uppercase">
              TOPOLOGIA INTERATIVA DE SISTEMAS
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Clique em um dos módulos para inspecionar os detalhes de engenharia e métricas
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400">
            <Activity className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
            <span>5 NÓS EM PRODUÇÃO</span>
          </div>
        </div>

        {/* Nodes Grid / Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
          {architectureNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                type="button"
                className={`text-left p-3 rounded-xl border transition-all relative group cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 dark:border-[#7AF298] bg-emerald-500/5 dark:bg-[#7AF298]/10 shadow-sm ring-1 ring-emerald-500/30 dark:ring-[#7AF298]/30'
                    : 'border-slate-200 dark:border-white/[0.06] bg-slate-50/60 dark:bg-[#151922] hover:border-slate-300 dark:hover:border-white/[0.18]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isSelected
                        ? 'bg-emerald-500 dark:bg-[#7AF298] text-slate-950'
                        : 'bg-slate-200/80 dark:bg-white/[0.07] text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#7AF298]" />
                  )}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                  {node.badge}
                </div>
                <div className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                  {node.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/90 dark:bg-[#0E121A] p-4 sm:p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3.5 border-b border-slate-200 dark:border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-600 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20 font-medium">
                {activeNode.badge}
              </span>
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                {activeNode.name} — {activeNode.role}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="text-slate-400 dark:text-slate-500">Protocolo:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {activeNode.protocol}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 my-3 leading-relaxed">
            {activeNode.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {/* Tech chips */}
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Tecnologias & Padrões
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-white dark:bg-[#181D28] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metric Highlight */}
            <div className="flex flex-col justify-center rounded-lg bg-emerald-500/5 dark:bg-[#7AF298]/5 border border-emerald-500/20 dark:border-[#7AF298]/20 p-2.5 px-3">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-[#7AF298] font-mono text-[11px] font-semibold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Métrica de Engenharia Comprovada</span>
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-0.5">
                {activeNode.metrics}
              </span>
            </div>
          </div>
        </div>

        {/* Live Metrics Quick Bar */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
          <div className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03]">
            <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
              Ciclo Faturamento
            </span>
            <span className="font-display font-bold text-sm text-emerald-600 dark:text-[#7AF298]">
              5d → 1d útil
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03]">
            <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
              Otimização SQL
            </span>
            <span className="font-display font-bold text-sm text-emerald-600 dark:text-[#7AF298]">
              ~100% de ganho
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03]">
            <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
              Streaming de Vídeo
            </span>
            <span className="font-display font-bold text-sm text-emerald-600 dark:text-[#7AF298]">
              S3 + HLS Workers
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03]">
            <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
              Agentes com LLM
            </span>
            <span className="font-display font-bold text-sm text-emerald-600 dark:text-[#7AF298]">
              Function Calling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
