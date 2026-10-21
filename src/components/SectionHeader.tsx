import React from 'react';

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-[#7AF298] px-2.5 py-1 rounded bg-emerald-500/10 dark:bg-[#7AF298]/10 border border-emerald-500/20 dark:border-[#7AF298]/20">
          {number} // {tag}
        </span>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
