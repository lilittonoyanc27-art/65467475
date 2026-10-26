import React, { useState } from 'react';
import { Languages } from 'lucide-react';

interface BilingualTextProps {
  es: string;
  hy: string;
  className?: string;
  esClassName?: string;
  hyClassName?: string;
  mode?: 'interactive' | 'both' | 'es' | 'hy';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  bold?: boolean;
  highlightWord?: string;
  highlightWordHy?: string;
  showIcon?: boolean;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  es,
  hy,
  className = '',
  esClassName = '',
  hyClassName = '',
  mode = 'interactive',
  size = 'base',
  bold = false,
  highlightWord,
  highlightWordHy,
  showIcon = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTranslation = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const renderHighlighted = (text: string, highlight?: string, isArmenian = false) => {
    if (!highlight || !text.toLowerCase().includes(highlight.toLowerCase())) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark
          key={index}
          className={`${
            isArmenian ? 'bg-amber-100 text-amber-900' : 'bg-amber-200 text-stone-900'
          } px-1 rounded font-semibold`}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const sizeClasses = {
    xs: 'text-xs md:text-sm font-semibold text-stone-950 leading-relaxed',
    sm: 'text-sm md:text-base font-medium text-stone-950 leading-relaxed',
    base: 'text-base md:text-lg font-semibold text-stone-950 leading-relaxed',
    lg: 'text-lg md:text-xl font-bold text-stone-950 leading-relaxed',
    xl: 'text-xl md:text-2xl font-extrabold text-stone-950 leading-snug',
    '2xl': 'text-2xl md:text-3xl font-black text-stone-950 leading-snug',
  };

  const hySizeClasses = {
    xs: 'text-xs md:text-sm font-bold leading-relaxed',
    sm: 'text-sm md:text-base font-semibold leading-relaxed',
    base: 'text-base md:text-lg font-bold leading-relaxed',
    lg: 'text-lg md:text-xl font-bold leading-relaxed',
    xl: 'text-xl md:text-2xl font-extrabold leading-snug',
    '2xl': 'text-2xl md:text-3xl font-black leading-snug',
  };

  const weightClass = bold ? ' font-bold' : '';

  // Default behavior is always interactive click-to-reveal so Armenian translation is never visible immediately
  if (mode === 'hy') {
    return (
      <div className={`${sizeClasses[size]} font-armenian font-bold text-amber-950 ${className} ${hyClassName}`}>
        {renderHighlighted(hy, highlightWordHy, true)}
      </div>
    );
  }

  return (
    <div className={`group/bilingual relative inline-block w-full text-left ${className}`}>
      <div
        onClick={toggleTranslation}
        title="Haz clic para ver la traducción al armenio / Սեղմեք հայերեն թարգմանության համար"
        className={`cursor-pointer transition-colors duration-150 rounded-md hover:bg-amber-100/50 p-0.5 flex items-start justify-between gap-2 ${sizeClasses[size]}${weightClass} ${esClassName}`}
      >
        <span className="flex-1 leading-relaxed">
          {renderHighlighted(es, highlightWord)}
        </span>
        <button
          type="button"
          onClick={toggleTranslation}
          className="text-stone-400 group-hover/bilingual:text-amber-800 p-0.5 shrink-0 transition-colors"
          title="Ver traducción al armenio / Դիտել հայերեն թարգմանությունը"
          aria-label="Toggle Armenian translation"
        >
          <Languages className="w-4 h-4 opacity-70 group-hover/bilingual:opacity-100" />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mt-1.5 font-armenian text-amber-950 font-bold bg-amber-50/95 border-2 border-amber-300 rounded-lg px-3 py-2 shadow-xs leading-relaxed animate-in fade-in duration-150 ${hySizeClasses[size]} ${hyClassName}`}
        >
          <div className="flex items-center justify-between gap-1 text-[11px] text-amber-900 font-extrabold mb-1 select-none border-b border-amber-200/60 pb-0.5">
            <span>Հայերեն թարգմանություն</span>
            <button
              type="button"
              onClick={toggleTranslation}
              className="text-amber-800 hover:text-amber-950 text-xs px-1 font-bold"
            >
              ✕
            </button>
          </div>
          <div>{renderHighlighted(hy, highlightWordHy, true)}</div>
        </div>
      )}
    </div>
  );
};
