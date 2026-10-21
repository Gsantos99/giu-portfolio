import React from 'react';
import { profileData } from '../data/profile';
import { ArchitectureVisual } from '../components/ArchitectureVisual';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-[#7AF298]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 dark:border-[#7AF298]/20 bg-emerald-500/5 dark:bg-[#7AF298]/10 text-emerald-700 dark:text-[#7AF298] text-xs font-mono font-medium mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#7AF298] animate-pulse" />
              <span>{profileData.statusText}</span>
            </div>

            {/* Title & Name */}
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-mono text-sm mb-2">
              <span>{profileData.fullName}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {profileData.location}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Full Stack Software Engineer
            </h1>

            {/* Headline */}
            <p className="mt-5 text-xl sm:text-2xl font-display font-medium text-slate-700 dark:text-slate-200 leading-snug">
              “{profileData.roleSummary}”
            </p>

            {/* Objective Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Mais de 4 anos de experiência construindo sistemas em produção: backend robusto com{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Node.js & TypeScript</strong>,{' '}
              interfaces reativas em <strong className="text-slate-900 dark:text-white font-semibold">React</strong>,{' '}
              bancos relacionais de alta performance e automações com{' '}
              <strong className="text-emerald-600 dark:text-[#7AF298] font-semibold">IA aplicada via Function Calling</strong>.
            </p>

            {/* CTAs & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-[#7AF298] hover:bg-[#9EF7B3] transition-all shadow-sm hover:shadow-md"
              >
                <span>Ver projetos de engenharia</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-all"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-[#7AF298] hover:border-emerald-500/40 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-[#7AF298] hover:border-emerald-500/40 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#121620]/90 backdrop-blur-md space-y-6 shadow-xl">
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-emerald-500/30 dark:border-[#7AF298]/40 object-cover shadow-md"
                loading="eager"
              />
              <div className="space-y-1">
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl sm:text-2xl">
                  {profileData.name}
                </h3>
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400 block">
                  @Gsantos99 · GitHub
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-600 dark:text-[#7AF298] pt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                  Perfil Verificado
                </span>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 dark:border-white/[0.06] space-y-3.5">
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-slate-500 dark:text-slate-400 font-mono">Experiência:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {profileData.yearsOfExperience} em produção
                </span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-slate-500 dark:text-slate-400 font-mono">Foco:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Full Stack / Cloud / IA
                </span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-slate-500 dark:text-slate-400 font-mono">ADS Graduação:</span>
                <span className="font-semibold text-emerald-600 dark:text-[#7AF298]">
                  Concluído em 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Architecture Interactive Visual */}
        <div className="mt-8">
          <ArchitectureVisual />
        </div>
      </div>
    </section>
  );
};
