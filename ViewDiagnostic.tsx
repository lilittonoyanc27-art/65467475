import React, { useState } from 'react';
import { ExerciseItem } from './types';
import { generateQuizSession } from './dataExercises';
import { moduleList } from './dataTopics';
import { BilingualText } from './BilingualText';
import { ShieldCheck, AlertCircle, ArrowRight, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface ViewDiagnosticProps {
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  onPlaySound: (type: 'correct' | 'wrong' | 'complete' | 'click') => void;
  onGoToTopic: (topicId: string) => void;
}

export const ViewDiagnostic: React.FC<ViewDiagnosticProps> = ({
  theoryMode,
  onPlaySound,
  onGoToTopic,
}) => {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [diagnosticQuestions, setDiagnosticQuestions] = useState<ExerciseItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // questionId -> optionId

  // Results by module
  const [moduleScores, setModuleScores] = useState<
    Record<string, { correct: number; total: number; percentage: number }>
  >({});
  const [weakTopics, setWeakTopics] = useState<string[]>([]);

  const handleStartDiagnostic = () => {
    // Pick 3 questions per module (15 questions total across all 5 modules)
    const questions: ExerciseItem[] = [];
    moduleList.forEach((m) => {
      const qMod = generateQuizSession((item) => item.moduleId === m.id, 3);
      questions.push(...qMod);
    });

    setDiagnosticQuestions(questions);
    setCurrentIndex(0);
    setAnswers({});
    setCompleted(false);
    setInProgress(true);
    onPlaySound('click');
  };

  const handleSelectOption = (optId: string) => {
    const q = diagnosticQuestions[currentIndex];
    setAnswers((prev) => ({
      ...prev,
      [q.id]: optId,
    }));
  };

  const handleFinishDiagnostic = () => {
    const stats: Record<string, { correct: number; total: number; percentage: number }> = {};
    const weak: string[] = [];

    moduleList.forEach((m) => {
      stats[m.id] = { correct: 0, total: 0, percentage: 0 };
    });

    diagnosticQuestions.forEach((q) => {
      const isCorrect = q.options?.find((o) => o.id === answers[q.id])?.isCorrect;
      if (stats[q.moduleId]) {
        stats[q.moduleId].total++;
        if (isCorrect) {
          stats[q.moduleId].correct++;
        } else {
          if (!weak.includes(q.topicId)) weak.push(q.topicId);
        }
      }
    });

    Object.keys(stats).forEach((modId) => {
      const s = stats[modId];
      s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    });

    setModuleScores(stats);
    setWeakTopics(weak);
    setCompleted(true);
    setInProgress(false);

    const totalCorrect = Object.values(stats).reduce((acc, curr) => acc + curr.correct, 0);
    const totalQ = diagnosticQuestions.length;
    onPlaySound(totalCorrect >= totalQ * 0.7 ? 'complete' : 'wrong');
  };

  const currentQ = diagnosticQuestions[currentIndex];
  const isLast = currentIndex === diagnosticQuestions.length - 1;

  const totalCorrect = Object.values(moduleScores).reduce((acc, curr) => acc + curr.correct, 0);
  const overallPercentage =
    diagnosticQuestions.length > 0
      ? Math.round((totalCorrect / diagnosticQuestions.length) * 100)
      : 0;
  const isFullyPrepared = overallPercentage >= 80 && weakTopics.length <= 1;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {!inProgress && !completed ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6 text-center">
          <div className="w-14 h-14 bg-red-100 text-red-800 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-red-800">
              Evaluación Global de Competencias
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              ¿Estoy preparado para el examen de Lengua?
            </h1>
            <p className="text-sm text-stone-600 max-w-xl mx-auto mt-2 leading-relaxed">
              Esta prueba diagnóstica evalúa equilibradamente los 5 módulos del programa oficial (Comunicación, Gramática, Literatura tradicional, Verso y Figuras retóricas) para ofrecerte un diagnóstico honesto de tu preparación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left text-xs">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-800 block">15 preguntas</span>
              <span className="text-stone-500">3 de cada módulo oficial</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-800 block">Diagnóstico real</span>
              <span className="text-stone-500">Porcentaje por áreas</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-800 block">Detección de fallos</span>
              <span className="text-stone-500">Temas a reforzar</span>
            </div>
          </div>

          <button
            onClick={handleStartDiagnostic}
            className="px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Iniciar diagnóstico integral</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      ) : inProgress && currentQ ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-wider">
                Diagnóstico integral
              </span>
              <div className="text-sm font-extrabold text-stone-900">
                Pregunta {currentIndex + 1} de {diagnosticQuestions.length}
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-700 font-medium">
              {currentQ.moduleNameEs.split(':')[0]}
            </span>
          </div>

          <div className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
            <BilingualText es={currentQ.promptEs} hy={currentQ.promptHy} mode={theoryMode} size="lg" />
          </div>

          {currentQ.snippetEs && (
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-sm font-mono text-stone-800">
              <BilingualText es={currentQ.snippetEs} hy={currentQ.snippetHy || ''} mode={theoryMode} size="sm" />
            </div>
          )}

          <div className="space-y-2.5">
            {currentQ.options?.map((opt, i) => {
              const isSelected = answers[currentQ.id] === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 text-sm ${
                    isSelected
                      ? 'border-red-800 bg-red-50 text-red-950 font-semibold ring-1 ring-red-800/30'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div className="flex-1">
                    <BilingualText es={opt.textEs} hy={opt.textHy} mode={theoryMode} size="sm" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 disabled:opacity-40"
            >
              Anterior
            </button>

            {isLast ? (
              <button
                onClick={handleFinishDiagnostic}
                disabled={!answers[currentQ.id]}
                className="px-6 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs shadow-xs disabled:opacity-40"
              >
                Ver veredicto final
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                disabled={!answers[currentQ.id]}
                className="px-5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center gap-1.5 disabled:opacity-40"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* COMPLETED DIAGNOSTIC REPORT */
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
          <div className="text-center space-y-3 border-b border-stone-100 pb-6">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                isFullyPrepared
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {isFullyPrepared ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{isFullyPrepared ? 'ESTADO: PREPARADO PARA EL EXAMEN' : 'ESTADO: REQUIERE REPASO PUNTUAL'}</span>
            </div>

            <div className="text-4xl sm:text-5xl font-black text-stone-900 tabular-nums">
              {overallPercentage}%
              <span className="text-lg text-stone-400 font-normal"> global</span>
            </div>

            <p className="text-xs text-stone-600 max-w-md mx-auto">
              {isFullyPrepared
                ? '¡Enhorabuena! Tienes un dominio equilibrado de la comunicación, la gramática, la literatura y los recursos literarios.'
                : 'Todavía hay conceptos donde has dudado o fallado. Concéntrate en los temas marcados abajo antes del examen.'}
            </p>
          </div>

          {/* Module Breakdown Bars */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Dominio real por área del programa:
            </h3>

            <div className="space-y-3">
              {moduleList.map((m) => {
                const s = moduleScores[m.id] || { correct: 0, total: 3, percentage: 0 };
                return (
                  <div key={m.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800">{m.titleEs}</span>
                      <span className="font-bold tabular-nums text-stone-900">
                        {s.percentage}% ({s.correct}/{s.total})
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          s.percentage >= 80
                            ? 'bg-emerald-600'
                            : s.percentage >= 50
                            ? 'bg-amber-500'
                            : 'bg-red-600'
                        }`}
                        style={{ width: `${s.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weak Topics List */}
          {weakTopics.length > 0 && (
            <div className="p-4 bg-red-50 rounded-xl border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-red-900 uppercase">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Temas urgentes a repasar:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {weakTopics.map((topicId) => (
                  <button
                    key={topicId}
                    onClick={() => onGoToTopic(topicId)}
                    className="px-3 py-1.5 bg-white border border-red-300 rounded-lg text-xs font-semibold text-red-900 hover:bg-red-100 transition-colors"
                  >
                    Repasar {topicId.replace('tema_', '').replace(/_/g, ' ')} →
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="text-center pt-2">
            <button
              onClick={handleStartDiagnostic}
              className="px-6 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repetir diagnóstico con preguntas nuevas</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
