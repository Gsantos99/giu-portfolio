import React from 'react';
import { impactMetrics } from '../data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { CheckCircle2 } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="MÉTRICAS & IMPACTO"
          title="Resultados mensuráveis entregues em ambientes de produção"
          subtitle="Números reais e ganhos de eficiência alcançados através de automação estruturada, refatoração de gargalos de banco e orquestração de IA."
        />

        {/* Bento Grid with 4 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactMetrics.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] p-6 hover:border-emerald-500/40 dark:hover:border-[#7AF298]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase font-semibold text-emerald-600 dark:text-[#7AF298] px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-[#7AF298]/10 border border-emerald-500/20 dark:border-[#7AF298]/20">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#7AF298] transition-colors">
                  {item.metric}
                </div>

                <div className="font-display font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 mt-2">
                  {item.label}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-[#7AF298]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.highlight}</span>
                </div>

                {item.codeSnippet && (
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0E121A] border border-slate-200/80 dark:border-white/[0.04] font-mono text-[11px] text-slate-600 dark:text-slate-400 overflow-x-auto">
                    <code>{item.codeSnippet}</code>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
