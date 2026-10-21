import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.06] relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-[#7AF298]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="VAMOS CONVERSAR"
          title="Disponível para novos desafios de engenharia e liderança técnica"
          subtitle="Aberto a oportunidades Full Stack, backend de alta concorrência, automações com IA aplicada e arquiteturas escaláveis em modelos remoto ou híbrido."
        />

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#131823] p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Direct Action (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase font-semibold text-emerald-600 dark:text-[#7AF298] tracking-wider block mb-2">
                    CONTATO DIRETO
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Vamos construir o próximo nível do seu produto?
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Se você é recrutador, CTO ou líder técnico procurando um profissional focado em
                    resolver gargalos de produção, automação e código robusto, envie uma mensagem.
                  </p>
                </div>

                {/* Email Box with Copy & Mailto */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200/80 dark:border-white/[0.06] space-y-3">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    E-mail Oficial
                  </span>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {profileData.email}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.15] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
                            <span className="text-emerald-600 dark:text-[#7AF298]">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:${profileData.email}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-950 bg-[#7AF298] hover:bg-[#9EF7B3] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Abrir E-mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Channels & Location (5 cols) */}
              <div className="lg:col-span-5 space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/[0.06] lg:pl-8">
                <span className="block font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  REDES & LOCALIZAÇÃO
                </span>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02] hover:border-emerald-500/40 dark:hover:border-[#7AF298]/40 hover:bg-emerald-500/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298]" />
                    <div>
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white block">
                        LinkedIn
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        /in/giulyano-santos
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298] transition-colors" />
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02] hover:border-emerald-500/40 dark:hover:border-[#7AF298]/40 hover:bg-emerald-500/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298]" />
                    <div>
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white block">
                        GitHub
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        @Gsantos99
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298] transition-colors" />
                </a>

                <div className="p-3.5 rounded-xl border border-slate-100 dark:border-white/[0.04] bg-slate-50/30 dark:bg-white/[0.01] flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 dark:text-[#7AF298] shrink-0" />
                  <div>
                    <span className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block">
                      {profileData.location}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      Disponível para trabalho Remoto Global & Híbrido
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
