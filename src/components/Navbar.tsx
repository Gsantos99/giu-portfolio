import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#stack', label: 'Stack' },
  { href: '#formacao', label: 'Formação' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200/80 dark:border-white/[0.08] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-[#7AF298] animate-pulse" />
            <span className="font-display font-bold text-lg">GS</span>
            <span className="text-slate-400 dark:text-slate-500">//</span>
            <span className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-[#7AF298] transition-colors">
              ENGINEER
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Social + Theme + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-2 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-[#7AF298] hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors border border-transparent dark:border-white/[0.06]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#7AF298]" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contato"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 bg-[#7AF298] hover:bg-[#9EF7B3] rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>Contato</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Alternar tema"
              className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#7AF298]" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Abrir menu"
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-500 rounded-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-500 rounded-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 bg-[#7AF298] hover:bg-[#9EF7B3] rounded-lg transition-all"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
