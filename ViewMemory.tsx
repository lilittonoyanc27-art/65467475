import React from 'react';
import { UserProgress, MasteryLevel } from './types';
import { allTopics } from './dataTopics';
import { allExercises } from './dataExercises';
import { BilingualText } from './BilingualText';
import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  ArrowRight,
} from 'lucide-react';

interface ViewMemoryProps {
  progress: UserProgress;
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  onPracticeMistakes: () => void;
  onGoToTopic: (topicId: string) => void;
  onClearErrors: () => void;
}

export const ViewMemory: React.FC<ViewMemoryProps> = ({
  progress,
  theoryMode,
  onPracticeMistakes,
  onGoToTopic,
  onClearErrors,
}) => {
  const masteryCounts: Record<MasteryLevel, number> = {
    no_estudiado: 0,
    en_aprendizaje: 0,
    necesita_repaso: 0,
    casi_dominado: 0,
    dominado: 0,
  };

  allTopics.forEach((t) => {
    const m = progress.conceptMastery[t.id];
    const lvl = m ? m.level : 'no_estudiado';
    masteryCounts[lvl]++;
  });

  const mistakeExerciseIds = Object.keys(progress.mistakeHistory).filter(
    (id) => progress.mistakeHistory[id] > 0
  );

  const mistakeExercises = allExercises.filter((ex) =>
    mistakeExerciseIds.includes(ex.id)
  );

  const masteryLabels: Record<MasteryLevel, { labelEs: string; labelHy: string; color: string; badge: string }> = {
    dominado: {
      labelEs: 'Dominado con soltura',
      labelHy: 'Վստահ տիրապետում է',
      color: 'bg-emerald-500',
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    casi_dominado: {
      labelEs: 'Casi dominado',
      labelHy: 'Գրեթե տիրապետում է',
      color: 'bg-teal-500',
      badge: 'bg-teal-100 text-teal-900 border-teal-300',
    },
    en_aprendizaje: {
      labelEs: 'En aprendizaje activo',
      labelHy: 'Ուսումնասիրվում է',
      color: 'bg-amber-400',
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    necesita_repaso: {
      labelEs: 'Necesita repaso urgente',
      labelHy: 'Պահանջում է անհապաղ կրկնություն',
      color: 'bg-red-500',
      badge: 'bg-red-100 text-red-900 border-red-300',
    },
    no_estudiado: {
      labelEs: 'No estudiado aún',
      labelHy: 'Դեռ չի ուսումնասիրվել',
      color: 'bg-stone-300',
      badge: 'bg-stone-100 text-stone-700 border-stone-300',
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Overview */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider font-bold text-red-800">
            Sistema Inteligente de Retención Espaciada
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900 mt-1">
            Mi Memoria y Registro de Errores
          </h1>
          <p className="text-xs text-stone-600 mt-1 max-w-lg">
            Monitoriza en tiempo real el grado de retención de cada concepto de la libreta escolar y entrena tus puntos débiles.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-center p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="text-xs text-stone-500 block">Dominados</span>
            <span className="text-2xl font-black text-emerald-800 tabular-nums">
              {masteryCounts.dominado}
            </span>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-xl border border-red-200">
            <span className="text-xs text-red-700 block">Dudas activas</span>
            <span className="text-2xl font-black text-red-800 tabular-nums">
              {mistakeExercises.length}
            </span>
          </div>
        </div>
      </div>

      {/* 5 Mastery Levels Progress Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-3">
        <h2 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
          Distribución de los {allTopics.length} conceptos del curso:
        </h2>

        {/* Multi-color segment bar */}
        <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden flex">
          {(['dominado', 'casi_dominado', 'en_aprendizaje', 'necesita_repaso', 'no_estudiado'] as MasteryLevel[]).map(
            (lvl) => {
              const count = masteryCounts[lvl];
              const pct = (count / allTopics.length) * 100;
              if (pct === 0) return null;
              return (
                <div
                  key={lvl}
                  className={`${masteryLabels[lvl].color} h-full transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${masteryLabels[lvl].labelEs}: ${count}`}
                ></div>
              );
            }
          )}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-xs">
          {(['dominado', 'casi_dominado', 'en_aprendizaje', 'necesita_repaso', 'no_estudiado'] as MasteryLevel[]).map(
            (lvl) => (
              <div key={lvl} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${masteryLabels[lvl].color} shrink-0`}></span>
                <span className="text-stone-700 text-[11px] truncate">
                  {masteryLabels[lvl].labelEs}: <strong>{masteryCounts[lvl]}</strong>
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* MIS ERRORES (TARGETED RECOVERY DECK) */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h2 className="text-base font-bold text-stone-900">
              Modo Especial: Mis Errores ({mistakeExercises.length})
            </h2>
          </div>

          {mistakeExercises.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={onClearErrors}
                className="text-xs text-stone-500 hover:text-red-700 transition-colors"
              >
                Limpiar historial
              </button>
              <button
                onClick={onPracticeMistakes}
                className="px-4 py-2 bg-red-800 hover:bg-red-900 text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Entrenar solo mis fallos</span>
              </button>
            </div>
          )}
        </div>

        {mistakeExercises.length === 0 ? (
          <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200/80">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="font-bold text-stone-800 text-sm">¡Bandeja de errores despejada!</div>
            <p className="text-xs text-stone-500 mt-1">
              No tienes preguntas falladas pendientes de resolución.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {mistakeExercises.map((ex) => {
              const wrongCount = progress.mistakeHistory[ex.id] || 1;
              return (
                <div
                  key={ex.id}
                  className="p-4 rounded-xl border border-red-200 bg-red-50/20 text-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold text-stone-900 text-sm flex-1">
                      <BilingualText es={ex.promptEs} hy={ex.promptHy} mode={theoryMode} size="sm" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold text-[11px] shrink-0">
                      Fallado {wrongCount} {wrongCount === 1 ? 'vez' : 'veces'}
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-stone-700">
                    <span className="font-bold text-stone-900">Regla para no volver a fallar: </span>
                    <BilingualText es={ex.ruleToRememberEs || ''} hy={ex.ruleToRememberHy || ''} mode={theoryMode} size="sm" />
                  </div>

                  <div className="flex items-center justify-end pt-1">
                    <button
                      onClick={() => onGoToTopic(ex.topicId)}
                      className="text-xs font-semibold text-red-800 hover:text-red-950 flex items-center gap-1"
                    >
                      <span>Ver lección teórica completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* TOPIC MASTERY BREAKDOWN LIST */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
          Estado Detallado por Concepto de la Libreta
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {allTopics.map((t) => {
            const mastery = progress.conceptMastery[t.id];
            const lvl = mastery ? mastery.level : 'no_estudiado';
            const info = masteryLabels[lvl];

            return (
              <div
                key={t.id}
                onClick={() => onGoToTopic(t.id)}
                className="p-3 rounded-xl border border-stone-200 hover:border-amber-300 transition-colors cursor-pointer bg-stone-50/30 flex items-center justify-between gap-2 text-xs"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <BilingualText
                    es={`${t.number}. ${t.titleEs}`}
                    hy={t.titleHy}
                    mode={theoryMode}
                    size="xs"
                    bold
                  />
                </div>

                <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold shrink-0 ${info.badge}`}>
                  {info.labelEs}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
