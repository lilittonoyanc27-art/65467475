import React from 'react';
import { Volume2, VolumeX, RotateCcw, Award } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetProgress: () => void;
  streak: number;
  onToggleFontSize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  soundEnabled,
  onToggleSound,
  onResetProgress,
  streak,
  onToggleFontSize,
}) => {
  const navItems = [
    { id: 'aprender', labelEs: 'Aprender', labelHy: 'Սովորել' },
    { id: 'practicar', labelEs: 'Practicar', labelHy: 'Մարզվել' },
    { id: 'figuras', labelEs: 'Figuras Retóricas', labelHy: 'Պատկերավորում' },
    { id: 'profesor', labelEs: 'Profesor Oral', labelHy: 'Բանավոր' },
    { id: 'simulacro', labelEs: 'Simulacro Examen', labelHy: 'Քննություն' },
    { id: 'diagnostico', labelEs: '¿Estoy preparado?', labelHy: 'Պատրա՞ստ եմ' },
    { id: 'errores', labelEs: 'Mis Errores', labelHy: 'Սխալներ' },
    { id: 'plan', labelEs: 'Plan 7 Días', labelHy: '7-օրյա պլան' },
    { id: 'memoria', labelEs: 'Mi Memoria', labelHy: 'Հիշողություն' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Brand Wordmark Zone */}
          <div
            onClick={() => onSelectTab('aprender')}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded bg-red-700 text-amber-300 font-bold flex items-center justify-center text-sm shadow-inner">
              1.º
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                Lengua y Literatura
              </span>
              <span className="text-[11px] text-amber-400 font-semibold block leading-tight">
                1.º ESO • Castellano & Հայերեն
              </span>
            </div>
          </div>

          {/* Navigation Links (Single-line whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold overflow-x-auto py-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0 text-left font-bold ${
                    isActive
                      ? 'bg-red-800 text-amber-300 shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                  }`}
                  title={`${item.labelEs} (${item.labelHy})`}
                >
                  {item.labelEs}
                </button>
              );
            })}
          </nav>

          {/* Controls Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Streak Badge */}
            <div
              className="flex items-center gap-1.5 text-xs text-amber-300 px-2 py-1 bg-stone-800 rounded border border-stone-700 select-none"
              title="Días de racha activa"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span className="font-bold tabular-nums">{streak}</span>
              <span className="hidden sm:inline text-stone-400">días</span>
            </div>

            {/* Font Size Toggle Button */}
            <button
              onClick={onToggleFontSize}
              className="px-2 py-1 text-xs font-bold text-amber-300 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded transition-colors flex items-center gap-1"
              title="Aumentar tamaño de letra / Մեծացնել տառաչափը"
              aria-label="Toggle Font Size"
            >
              <span className="text-[10px] opacity-70">A</span>
              <span className="text-sm font-black">A+</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded transition-colors"
              title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>

            {/* Reset Progress */}
            <button
              onClick={onResetProgress}
              className="p-2 text-stone-400 hover:text-red-400 hover:bg-stone-800 rounded transition-colors"
              title="Reiniciar progreso"
              aria-label="Reset Progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Subnav */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-stone-800 scrollbar-none text-xs">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3 py-1 rounded whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-red-800 text-amber-300 font-medium'
                    : 'text-stone-300 hover:text-white bg-stone-800/40'
                }`}
              >
                {item.labelEs}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
