import React from 'react';
import { Project } from '../types/portfolio';
import {
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  Info,
  ExternalLink,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getBadgeStyle = (type: Project['ecosystemBadge']['type']) => {
    switch (type) {
      case 'healthtech':
        return 'bg-cyan-500/10 text-cyan-700 dark:text-[#7DDFB4] border-cyan-500/20';
      case 'initiative':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-[#7AF298] border-emerald-500/20';
      case 'engineering':
      default:
        return 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20';
    }
  };

  return (
    <article className="group relative rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] hover:border-emerald-500/40 dark:hover:border-[#7AF298]/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden">
      {/* Top Banner / Badge */}
      <div className="p-6 sm:p-7 pb-0">
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <span
            className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md border ${getBadgeStyle(
              project.ecosystemBadge.type
            )}`}
          >
            {project.ecosystemBadge.label}
          </span>

          {project.highlightMetric && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 dark:bg-[#7AF298]/10 text-emerald-700 dark:text-[#7AF298] border border-emerald-500/20 dark:border-[#7AF298]/20">
              <span className="font-display font-bold text-xs">
                {project.highlightMetric.value}
              </span>
              <span className="text-[11px] font-mono opacity-80">
                · {project.highlightMetric.label}
              </span>
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#7AF298] transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {project.subtitle}
        </p>

        {/* Informative Note if exists */}
        {project.links?.previewNote && (
          <div className="mt-3.5 flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-xs text-slate-600 dark:text-slate-400">
            <Info className="w-4 h-4 text-emerald-600 dark:text-[#7AF298] shrink-0 mt-0.5" />
            <span>{project.links.previewNote}</span>
          </div>
        )}

        {/* Grid: Context & Challenge */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E121A] border border-slate-100 dark:border-white/[0.04]">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Contexto & Problema de Negócio</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.contextAndProblem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E121A] border border-slate-100 dark:border-white/[0.04]">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298] shrink-0" />
              <span>Desafio de Engenharia</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.engineeringChallenge}
            </p>
          </div>
        </div>

        {/* Technical Solution */}
        <div className="mt-5">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
            Solução & Contribuição Técnica
          </h4>
          <ul className="space-y-2">
            {project.technicalSolution.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-[#7AF298] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact & Results */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            Resultado / Impacto Comprovado
          </h4>
          <ul className="space-y-1.5">
            {project.impactAndResults.map((result, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                <span className="text-emerald-500 dark:text-[#7AF298] font-mono text-xs mt-0.5">
                  →
                </span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Links / Action Buttons */}
        {(project.links?.liveDemo || project.links?.github) && (
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center gap-3">
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-[#7AF298] hover:bg-[#9EF7B3] transition-colors shadow-sm"
              >
                <span>Acessar Produto ({project.links.liveDemo.replace(/^https?:\/\/(www\.)?/, '')})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors"
              >
                <span>Ver no GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-[#7AF298]" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Chips */}
      <div className="p-6 sm:p-7 pt-5 mt-6 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#0E121A]/50">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded bg-white dark:bg-[#161C28] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
