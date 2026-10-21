import React from 'react';
import { experiences } from '../data/experience';
import { SectionHeader } from '../components/SectionHeader';
import {
  CheckCircle2,
  Layers,
  Briefcase,
  Calendar,
  Building2,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          tag="TRAJETÓRIA PROFISSIONAL"
          title="Histórico de engenharia e entregas em produção"
          subtitle="Atuação focada na entrega de valor e engenharia de software sustentável, com histórico comprovado em empresas de tecnologia, saúde digital e cibersegurança."
        />

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] p-6 sm:p-8 hover:border-emerald-500/30 dark:hover:border-[#7AF298]/30 transition-all duration-300 shadow-sm"
            >
              {/* Top Row: Index + Logo + Company & Role + Period & Link */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-start sm:items-center gap-3.5 flex-wrap sm:flex-nowrap">
                  {/* Index badge */}
                  <span className="font-mono text-base font-bold text-emerald-600 dark:text-[#7AF298] px-2.5 py-1 rounded bg-emerald-500/10 dark:bg-[#7AF298]/10 border border-emerald-500/20 dark:border-[#7AF298]/20 shrink-0">
                    {exp.indexNumber}
                  </span>

                  {/* Company Logo or Fallback */}
                  {exp.companyLogo ? (
                    <div className="bg-white dark:bg-white/95 p-2 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-center h-12 w-auto min-w-[3rem] max-w-[8.5rem] shrink-0">
                      <img
                        src={exp.companyLogo}
                        alt={`Logo ${exp.companyName}`}
                        className="object-contain max-h-8 max-w-full"
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-[#7AF298] flex items-center justify-center h-12 w-12 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                  )}

                  {/* Company Name & Role Info */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.companyName}
                      </h4>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-mono text-[11px] text-emerald-600 dark:text-[#7AF298] hover:underline"
                          title={`Visitar ${exp.companyName}`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-emerald-600 dark:text-[#7AF298]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                      {exp.domain}
                    </span>
                  </div>
                </div>

                {/* Period & Visit Button */}
                <div className="flex items-center gap-2.5 self-start lg:self-center flex-wrap">
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                    <span>{exp.period}</span>
                  </div>

                  {exp.companyUrl && (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors"
                    >
                      <span>Visitar site</span>
                      <ExternalLink className="w-3 h-3 text-emerald-600 dark:text-[#7AF298]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Overview */}
              <p className="mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {exp.overview}
              </p>

              {/* Grid: Deliveries & Architectural Highlights */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Deliveries (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                    Principais Entregas & Impacto
                  </h4>
                  <ul className="space-y-2">
                    {exp.keyDeliveries.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="text-emerald-500 dark:text-[#7AF298] font-mono font-bold mt-0.5">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Engineering Highlights (5 cols) */}
                <div className="lg:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-[#0E121A] border border-slate-100 dark:border-white/[0.04] space-y-3">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                    Foco Arquitetural & Qualidade
                  </h4>
                  <ul className="space-y-2">
                    {exp.architecturalHighlights.map((arch, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        → {arch}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                  Stack do Ciclo:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#181D28] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
