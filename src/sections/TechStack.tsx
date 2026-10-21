import React from 'react';
import { skillCategories } from '../data/skills';
import { SectionHeader } from '../components/SectionHeader';
import { Star, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="COMPETÊNCIAS TÉCNICAS"
          title="Stack tecnológica organizada por domínios de engenharia"
          subtitle="Conjunto de ferramentas e tecnologias aplicadas em produção, com distinção clara entre competências centrais (Core) e tecnologias complementares — sem métricas arbitrárias."
        />

        {/* Legend */}
        <div className="mb-10 flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-700 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">TECNOLOGIA CORE</span>
            <span className="text-slate-500 dark:text-slate-400 font-sans">
              — Atuação diária, profundidade e domínio em produção
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>COMPLEMENTAR</span>
            <span className="text-slate-500 dark:text-slate-400 font-sans">
              — Aplicação em integrações, automações e ecossistema
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] p-6 hover:border-emerald-500/30 dark:hover:border-[#7AF298]/30 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-white/[0.06]">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    {category.skills.length} techs
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-all ${
                        skill.isCore
                          ? 'border-emerald-500/20 dark:border-[#7AF298]/20 bg-emerald-500/[0.03] dark:bg-[#7AF298]/[0.04]'
                          : 'border-slate-100 dark:border-white/[0.04] bg-slate-50/50 dark:bg-[#0E121A]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          {skill.isCore && (
                            <span className="font-mono text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-700 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20">
                              CORE
                            </span>
                          )}
                        </div>
                      </div>

                      {skill.context && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
