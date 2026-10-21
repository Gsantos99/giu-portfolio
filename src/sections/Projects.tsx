import React, { useState } from 'react';
import { projects, openSourceRepos } from '../data/projects';
import { ProjectCategory } from '../types/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const categoryFilters: Array<{ id: ProjectCategory; label: string }> = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'saas', label: 'Produto & SaaS' },
  { id: 'ai', label: 'IA & Automação' },
  { id: 'performance', label: 'Performance & Dados' },
  { id: 'mobile', label: 'Mobile & Integrações' },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="PROJETOS SELECIONADOS"
          title="Casos reais de engenharia, arquitetura de sistemas e produto"
          subtitle="Aprofundamento técnico em desafios de produção: automações com IA, conciliação de faturamento, otimização relacional profunda e arquiteturas desacopladas."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/60 dark:border-white/[0.06]">
          {categoryFilters.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-[#7AF298] dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Open Source & Public Repos Sub-section */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-4 h-4 text-emerald-600 dark:text-[#7AF298]" />
                <span className="font-mono text-xs uppercase font-semibold text-emerald-600 dark:text-[#7AF298] tracking-wider">
                  CÓDIGO ABERTO & ARQUITETURA PÚBLICA
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Repositórios Públicos no GitHub
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                Projetos e templates modulares mantidos publicamente no perfil{' '}
                <a
                  href="https://github.com/Gsantos99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-medium text-emerald-600 dark:text-[#7AF298] hover:underline"
                >
                  @Gsantos99
                </a>
                , demonstrando padrões de microsserviços, CI/CD na nuvem e tipagem rigorosa.
              </p>
            </div>

            <a
              href="https://github.com/Gsantos99?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors self-start md:self-auto"
            >
              <span>Ver todos no GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Open Source Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {openSourceRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] hover:border-emerald-500/40 dark:hover:border-[#7AF298]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-emerald-600 dark:text-[#7AF298] font-semibold">
                      {repo.highlight}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298] transition-colors" />
                  </div>

                  <h4 className="font-mono font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#7AF298] transition-colors">
                    {repo.name}
                  </h4>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                  {repo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#181E2C] text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
