import React from 'react';
import { educationData } from '../data/education';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap, Calendar, CheckCircle2, BookOpen, Globe, Building } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="formacao" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="FORMAÇÃO & IDIOMAS"
          title="Graduação e base conceitual em ciência e engenharia"
          subtitle="Fundamentos sólidos de engenharia de software, modelagem de dados e arquitetura computacional aplicados na prática diária de desenvolvimento."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Education Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] p-6 sm:p-8 shadow-sm">
            {/* Header Degree & Institution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/[0.06]">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-600 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-emerald-600 dark:text-[#7AF298] uppercase font-semibold">
                      {educationData.degree}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {educationData.institution}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {educationData.field}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-700 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20 self-start sm:self-auto font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.status}</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mt-6 pt-2">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                Ênfase de Conhecimento e Prática Acadêmica
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-100 dark:border-white/[0.04] bg-slate-50/50 dark:bg-white/[0.02] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-[#7AF298] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Complementary Section */}
            {educationData.languages && (
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-emerald-600 dark:text-[#7AF298]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Idiomas
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {educationData.languages}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 self-start sm:self-auto">
                  Comunicação Técnica & Leitura Fluente
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
