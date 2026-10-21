import React from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { ShieldCheck, Cpu, Layers, CheckCircle2, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-[#7AF298]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-500 dark:text-[#7AF298]" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-emerald-500 dark:text-[#7AF298]" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="PERFIL & POSICIONAMENTO"
          title="Engenharia orientada a impacto, sistemas resilientes e produto real"
          subtitle="Uma visão madura do desenvolvimento de software onde a técnica existe para resolver dores operacionais e viabilizar crescimento sustentável."
        />

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Bio Story in 1st Person (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {profileData.bioParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'font-medium text-slate-900 dark:text-slate-100 text-lg sm:text-xl leading-relaxed'
                    : ''
                }
              >
                {para}
              </p>
            ))}

            {/* Quick Qualifications & Highlights */}
            {profileData.quickQualifications && (
              <div className="mt-8 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#121620] space-y-3.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#7AF298]" />
                  <h4 className="font-mono text-xs uppercase font-semibold text-slate-900 dark:text-white tracking-wider">
                    Destaques & Qualificações Rápidas
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {profileData.quickQualifications.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]"
                    >
                      <span className="block font-mono text-[11px] text-emerald-600 dark:text-[#7AF298] uppercase font-semibold">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-display text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pillars Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              PILAREs DE ATUAÇÃO TÉCNICA
            </span>

            {profileData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] hover:border-emerald-500/30 dark:hover:border-[#7AF298]/30 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05]">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      {pillar.title}
                    </h3>
                    <span className="font-mono text-xs text-emerald-600 dark:text-[#7AF298]">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Quick Link Card to GitHub */}
            <div className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-white/[0.12] bg-slate-50/50 dark:bg-transparent flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase block">
                  Código Aberto & Boilerplates
                </span>
                <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                  Explorar Repositórios no GitHub
                </span>
              </div>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-500 dark:bg-[#7AF298] text-slate-950 hover:bg-emerald-400 dark:hover:bg-[#9EF7B3] transition-colors"
                aria-label="Abrir GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
