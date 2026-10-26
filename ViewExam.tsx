import React, { useState, useEffect } from 'react';
import { ExerciseItem, ExamResult } from './types';
import {
  allExercises,
  generateQuizSession,
  getExercisesByDifficulty,
  getExercisesByModule,
} from './dataExercises';
import { BilingualText } from './BilingualText';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface ViewExamProps {
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  mistakeIds: string[];
  onFinishExam: (result: ExamResult) => void;
  onPlaySound: (type: 'correct' | 'wrong' | 'complete' | 'click') => void;
  onGoToErrors: () => void;
}

export const ViewExam: React.FC<ViewExamProps> = ({
  theoryMode,
  mistakeIds,
  onFinishExam,
  onPlaySound,
  onGoToErrors,
}) => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);

  // Configuration
  const [examFormat, setExamFormat] = useState<
    'corto' | 'completo' | 'intensivo' | 'figuras' | 'gramatica' | 'literatura' | 'errores'
  >('corto');
  const [examLevel, setExamLevel] = useState<'facil' | 'intermedio' | 'dificil' | 'mixto'>('mixto');
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [strictModeNoTranslation, setStrictModeNoTranslation] = useState(false);

  // Active exam state
  const [questions, setQuestions] = useState<ExerciseItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); // questionId -> optionId
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(1200); // 20 min default
  const [examResultData, setExamResultData] = useState<ExamResult | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examFinished || !timerEnabled) return;
    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, examFinished, timerEnabled]);

  const handleStartExam = () => {
    let pool: ExerciseItem[] = [];

    if (examFormat === 'errores') {
      const set = new Set(mistakeIds);
      pool = generateQuizSession((item) => set.has(item.id));
      if (pool.length === 0) {
        alert('No tienes errores registrados actualmente. Se iniciará un examen corto estándar.');
        pool = generateQuizSession(undefined, 20);
      }
    } else if (examFormat === 'figuras') {
      pool = getExercisesByModule('modulo_5');
    } else if (examFormat === 'gramatica') {
      pool = getExercisesByModule('modulo_2');
    } else if (examFormat === 'literatura') {
      pool = getExercisesByModule('modulo_3');
    } else {
      let count = 20;
      if (examFormat === 'completo') count = 40;
      if (examFormat === 'intensivo') count = 60;

      if (examLevel !== 'mixto') {
        pool = getExercisesByDifficulty(examLevel).slice(0, count);
      } else {
        pool = generateQuizSession(undefined, count);
      }
    }

    if (pool.length === 0) pool = allExercises.slice(0, 20);

    setQuestions(pool);
    setCurrentIndex(0);
    setUserAnswers({});
    setExamFinished(false);
    setExamResultData(null);

    // Set timer based on question count: 1 min per question
    const totalTime = Math.max(300, pool.length * 60);
    setTimeRemainingSeconds(totalTime);
    setExamStarted(true);
    onPlaySound('click');
  };

  const handleSelectOption = (optId: string) => {
    if (examFinished) return;
    const currentQ = questions[currentIndex];
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optId,
    }));
  };

  const handleFinishExam = () => {
    let correctCount = 0;
    const topicErrors: Record<string, number> = {};

    questions.forEach((q) => {
      const selectedOptId = userAnswers[q.id];
      const selectedOpt = q.options?.find((o) => o.id === selectedOptId);
      if (selectedOpt?.isCorrect) {
        correctCount++;
      } else {
        topicErrors[q.topicId] = (topicErrors[q.topicId] || 0) + 1;
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const score10 = Number(((correctCount / (total || 1)) * 10).toFixed(1));

    const result: ExamResult = {
      id: 'exam_' + Date.now(),
      timestamp: Date.now(),
      examType: examFormat,
      score10,
      correctCount,
      totalQuestions: total,
      percentage,
      topicErrors,
      timeSpentSeconds: questions.length * 60 - timeRemainingSeconds,
    };

    setExamResultData(result);
    setExamFinished(true);
    onFinishExam(result);
    onPlaySound(score10 >= 5 ? 'complete' : 'wrong');
  };

  const currentQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const answeredCount = Object.keys(userAnswers).length;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* EXAM SETUP VIEW */}
      {!examStarted ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-8">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-red-800">
              Preparación Oficial para el Instituto
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              Simulacro Real de Examen de 1.º ESO
            </h1>
            <p className="text-sm text-stone-600 mt-1">
              Ponte a prueba en condiciones reales de examen escolar. Las respuestas correctas no se mostrarán hasta que entregues el examen.
            </p>
          </div>

          {/* Formats Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              1. Selecciona el Formato del Examen
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'corto', label: 'Examen corto', desc: '20 preguntas' },
                { id: 'completo', label: 'Examen completo', desc: '40 preguntas' },
                { id: 'intensivo', label: 'Examen intensivo', desc: '60 preguntas' },
                { id: 'figuras', label: 'Solo Figuras', desc: 'Nivel fónico y semántico' },
                { id: 'gramatica', label: 'Solo Gramática', desc: 'Categorías y análisis' },
                { id: 'literatura', label: 'Solo Literatura', desc: 'Romance, mito, prosa' },
                { id: 'errores', label: 'Mis Errores', desc: 'Preguntas falladas' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setExamFormat(fmt.id as typeof examFormat)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    examFormat === fmt.id
                      ? 'border-red-800 bg-red-50/70 text-red-950 font-semibold shadow-2xs'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <div className="text-xs font-bold">{fmt.label}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">{fmt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              2. Nivel de Dificultad
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'mixto', label: 'Mixto (Recomendado)', desc: 'Como en el colegio' },
                { id: 'facil', label: 'Nivel 1: Fácil', desc: 'Definiciones básicas' },
                { id: 'intermedio', label: 'Nivel 2: Medio', desc: 'Casos y comparaciones' },
                { id: 'dificil', label: 'Nivel 3: Difícil', desc: 'Análisis complejos' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setExamLevel(lvl.id as typeof examLevel)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    examLevel === lvl.id
                      ? 'border-red-800 bg-red-50/70 text-red-950 font-semibold'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <div className="text-xs font-bold">{lvl.label}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">{lvl.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Options: Timer & Strict Translationless Mode */}
          <div className="space-y-3 border-t border-stone-200 pt-6">
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
              3. Condiciones Especiales
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={timerEnabled}
                  onChange={(e) => setTimerEnabled(e.target.checked)}
                  className="rounded border-stone-300 text-red-800 focus:ring-red-800"
                />
                <span className="font-medium">Activar temporizador de cuenta atrás</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={strictModeNoTranslation}
                  onChange={(e) => setStrictModeNoTranslation(e.target.checked)}
                  className="rounded border-stone-300 text-red-800 focus:ring-red-800"
                />
                <span className="font-semibold text-red-900 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Modo examen estricto (sin traducción al armenio)
                </span>
              </label>
            </div>
          </div>

          {/* Start CTA */}
          <button
            onClick={handleStartExam}
            className="w-full py-4 rounded-xl bg-red-800 hover:bg-red-900 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Comenzar el examen ahora</span>
          </button>
        </div>
      ) : !examFinished ? (
        /* ACTIVE EXAM RUNNER */
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          {/* Status Header */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-wider">
                Examen en curso
              </span>
              <div className="text-sm font-extrabold text-stone-900 mt-0.5">
                Pregunta {currentIndex + 1} de {questions.length}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {timerEnabled && (
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 tabular-nums">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>{formatTimer(timeRemainingSeconds)}</span>
                </div>
              )}
              <button
                onClick={handleFinishExam}
                className="px-3.5 py-1.5 rounded-lg bg-red-50 text-red-900 border border-red-200 text-xs font-bold hover:bg-red-100"
              >
                Entregar examen
              </button>
            </div>
          </div>

          {/* Strict Mode Indicator */}
          {strictModeNoTranslation && (
            <div className="p-2.5 bg-stone-100 rounded-lg text-[11px] text-stone-600 font-medium flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-700 shrink-0" />
              <span>Modo examen estricto activado: la traducción está desactivada durante la prueba.</span>
            </div>
          )}

          {/* Question Prompt */}
          <div className="space-y-4">
            <div className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
              {strictModeNoTranslation ? (
                currentQ.promptEs
              ) : (
                <BilingualText
                  es={currentQ.promptEs}
                  hy={currentQ.promptHy}
                  mode={theoryMode}
                  size="lg"
                />
              )}
            </div>

            {currentQ.snippetEs && (
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-sm font-mono text-stone-800">
                {strictModeNoTranslation ? (
                  currentQ.snippetEs
                ) : (
                  <BilingualText
                    es={currentQ.snippetEs}
                    hy={currentQ.snippetHy || ''}
                    mode={theoryMode}
                    size="sm"
                  />
                )}
              </div>
            )}

            {/* Answer Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options?.map((opt, i) => {
                const isSelected = userAnswers[currentQ.id] === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 text-sm ${
                      isSelected
                        ? 'border-red-800 bg-red-50/50 text-red-950 font-semibold ring-1 ring-red-800/30'
                        : 'border-stone-200 bg-white hover:bg-stone-50/60 text-stone-800'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div className="flex-1">
                      {strictModeNoTranslation ? (
                        opt.textEs
                      ) : (
                        <BilingualText
                          es={opt.textEs}
                          hy={opt.textHy}
                          mode={theoryMode}
                          size="sm"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress dots & navigation */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 disabled:opacity-40"
            >
              Anterior
            </button>

            <span className="text-xs text-stone-500">
              Respondidas: <strong className="text-stone-900">{answeredCount}</strong> de {questions.length}
            </span>

            {isLastQuestion ? (
              <button
                onClick={handleFinishExam}
                className="px-6 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs shadow-xs"
              >
                Finalizar y ver nota
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="px-5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center gap-1.5"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* EXAM RESULTS REPORT */
        examResultData && (
          <div className="space-y-6 animate-in fade-in">
            {/* Grade Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200 text-xs font-bold text-amber-900">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Informe Oficial de Resultados</span>
              </div>

              <div>
                <div className="text-5xl sm:text-6xl font-black text-stone-900 tabular-nums">
                  {examResultData.score10}
                  <span className="text-2xl text-stone-400 font-normal"> / 10</span>
                </div>
                <div className="text-sm font-bold mt-1 text-stone-700">
                  {examResultData.score10 >= 9
                    ? 'SOBRESALIENTE (10/10) — ¡Dominio absoluto!'
                    : examResultData.score10 >= 7
                    ? 'NOTABLE — Muy buen trabajo escolar'
                    : examResultData.score10 >= 5
                    ? 'APROBADO — Superado, pero conviene repasar'
                    : 'INSUFICIENTE — Necesitas repasar las dudas'}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2 text-xs">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-stone-500 font-medium">Aciertos</div>
                  <div className="text-xl font-bold text-emerald-800 mt-0.5">
                    {examResultData.correctCount}
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                  <div className="text-stone-500 font-medium">Fallos</div>
                  <div className="text-xl font-bold text-red-800 mt-0.5">
                    {examResultData.totalQuestions - examResultData.correctCount}
                  </div>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-stone-500 font-medium">Porcentaje</div>
                  <div className="text-xl font-bold text-amber-800 mt-0.5">
                    {examResultData.percentage}%
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-stone-100">
                <button
                  onClick={handleStartExam}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Hacer otro examen</span>
                </button>
                {examResultData.correctCount < examResultData.totalQuestions && (
                  <button
                    onClick={onGoToErrors}
                    className="px-5 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                    <span>Repasar solo las preguntas falladas</span>
                  </button>
                )}
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
                Corrección Detallada Pregunta por Pregunta
              </h3>

              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const userOptId = userAnswers[q.id];
                  const userOpt = q.options?.find((o) => o.id === userOptId);
                  const correctOpt = q.options?.find((o) => o.isCorrect);
                  const isCorrect = !!userOpt?.isCorrect;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border text-xs space-y-3 ${
                        isCorrect
                          ? 'border-emerald-200 bg-emerald-50/20'
                          : 'border-red-200 bg-red-50/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-stone-900 text-sm">
                          {idx + 1}. <BilingualText es={q.promptEs} hy={q.promptHy} mode={theoryMode} size="sm" />
                        </div>
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-emerald-700 font-bold shrink-0">
                            <CheckCircle2 className="w-4 h-4" /> Correcto
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-700 font-bold shrink-0">
                            <XCircle className="w-4 h-4" /> Fallado
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded bg-white border border-stone-200">
                          <span className="font-bold text-stone-500 block mb-0.5">Tu respuesta:</span>
                          <span className={isCorrect ? 'text-emerald-800 font-semibold' : 'text-red-800 font-semibold'}>
                            {userOpt ? userOpt.textEs : 'No respondida'}
                          </span>
                        </div>
                        <div className="p-2.5 rounded bg-white border border-stone-200">
                          <span className="font-bold text-stone-500 block mb-0.5">Respuesta correcta:</span>
                          <span className="text-emerald-800 font-bold">
                            {correctOpt ? correctOpt.textEs : ''}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-stone-700">
                        <span className="font-bold text-stone-900">Explicación razonada: </span>
                        <BilingualText es={q.explanationEs} hy={q.explanationHy} mode={theoryMode} size="sm" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
