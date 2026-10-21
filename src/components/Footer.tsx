import React from 'react';
import { profileData } from '../data/profile';
import { ArrowUp, Github, Linkedin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0B0F17] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/[0.06]">
          {/* Logo & Sub */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a
              href="#"
              className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-[#7AF298]" />
              <span className="font-display font-bold text-lg">GS</span>
              <span className="text-slate-400 dark:text-slate-500">//</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                PORTFOLIO
              </span>
            </a>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
            <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
              {profileData.fullName} · {profileData.title}
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-[#7AF298] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-[#7AF298] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Voltar ao topo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-colors"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Verification Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono text-center sm:text-left">
          <p>© {new Date().getFullYear()} Giulyano Felipe Santos Silva. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-[#7AF298]" />
            <span>Desenvolvido com React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
