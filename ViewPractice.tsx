import React, { useState } from 'react';
import { ExerciseItem } from './types';
import {
  allExercises,
  generateQuizSession,
  getExercisesByTopic,
  generateMillionaireQuiz,
} from './dataExercises';
import { allTopics, allComparisonPairs } from './dataTopics';
import { readingTexts } from './dataTexts';
import { BilingualText } from './BilingualText';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
  Zap,
} from 'lucide-react';

interface ViewPracticeProps {
  initialTopicId?: string;
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  soundEnabled: boolean;
  onRecordError: (exerciseId: string, topicId: string) => void;
  onRecordSuccess: (exerciseId: string, topicId: string) => void;
  onPlaySound: (type: 'correct' | 'wrong' | 'complete' | 'click') => void;
}

export const ViewPractice: React.FC<ViewPracticeProps> = ({
  initialTopicId,
  theoryMode,
  onRecordError,
  onRecordSuccess,
  onPlaySound,
}) => {
  const [activeGameTab, setActiveGameTab] = useState<
    | 'quiz'
    | 'figuras'
    | 'armenian_to_spanish'
    | 'matching'
    | 'order'
    | 'fill'
    | 'sentence'
    | 'text_reading'
    | 'pairs'
    | 'millionaire'
    | 'sprint'
  >('quiz');

  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>(
    initialTopicId || 'all'
  );

  // Current session questions
  const [sessionQuestions, setSessionQuestions] = useState<ExerciseItem[]>(() => {
    if (initialTopicId) {
      return getExercisesByTopic(initialTopicId);
    }
    return generateQuizSession(undefined, 20);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [fillInput, setFillInput] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Word-by-word sentence parsing state
  const [sentenceAnswers, setSentenceAnswers] = useState<Record<number, string>>({});

  // Matching game state
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);

  // Word order game state
  const [orderedWords, setOrderedWords] = useState<string[]>([]);

  // Millionaire game state
  const [millionaireQuestions, setMillionaireQuestions] = useState<ExerciseItem[]>([]);
  const [millionaireStep, setMillionaireStep] = useState(0);
  const [lifelines, setLifelines] = useState({ fiftyFifty: true, hint: true });
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [millionaireGameOver, setMillionaireGameOver] = useState(false);

  // Reading text state
  const [selectedReadingIndex, setSelectedReadingIndex] = useState(0);

  const currentExercise = sessionQuestions[currentIndex] || sessionQuestions[0];

  const handleStartNewSession = (typeFilter?: string, topicFilter: string = selectedTopicFilter) => {
    let questions: ExerciseItem[] = [];
    if (typeFilter) {
      questions = generateQuizSession((item) => item.type === typeFilter, 20);
    } else if (topicFilter !== 'all') {
      questions = getExercisesByTopic(topicFilter);
    } else {
      questions = generateQuizSession(undefined, 25);
    }

    setSessionQuestions(questions.length > 0 ? questions : allExercises);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setFillInput('');
    setSentenceAnswers({});
    setMatchedPairs({});
    setSelectedLeft(null);
    setOrderedWords([]);
    setScore({ correct: 0, total: 0 });
  };

  const handleSelectOption = (optId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!currentExercise || hasSubmitted) return;

    if (currentExercise.type === 'fill_blank') {
      if (!fillInput.trim()) return;
      const normalizedInput = fillInput.trim().toLowerCase();
      const isCorrect =
        currentExercise.acceptedAnswersEs?.some((ans) =>
          normalizedInput.includes(ans.toLowerCase())
        ) ||
        normalizedInput === currentExercise.correctAnswerEs?.toLowerCase();

      setHasSubmitted(true);
      setScore((prev) => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        total: prev.total + 1,
      }));

      if (isCorrect) {
        onPlaySound('correct');
        onRecordSuccess(currentExercise.id, currentExercise.topicId);
      } else {
        onPlaySound('wrong');
        onRecordError(currentExercise.id, currentExercise.topicId);
      }
      return;
    }

    if (currentExercise.type === 'word_order') {
      const userSentence = orderedWords.join(' ');
      const isCorrect =
        userSentence.toLowerCase().trim() ===
        currentExercise.correctOrderedEs?.toLowerCase().trim();

      setHasSubmitted(true);
      setScore((prev) => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        total: prev.total + 1,
      }));

      if (isCorrect) {
        onPlaySound('correct');
        onRecordSuccess(currentExercise.id, currentExercise.topicId);
      } else {
        onPlaySound('wrong');
        onRecordError(currentExercise.id, currentExercise.topicId);
      }
      return;
    }

    // Standard multiple choice / figura / Armenian-Spanish
    if (!selectedOptionId) return;
    const selectedOpt = currentExercise.options?.find((o) => o.id === selectedOptionId);
    const isCorrect = !!selectedOpt?.isCorrect;

    setHasSubmitted(true);
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    if (isCorrect) {
      onPlaySound('correct');
      onRecordSuccess(currentExercise.id, currentExercise.topicId);
    } else {
      onPlaySound('wrong');
      onRecordError(currentExercise.id, currentExercise.topicId);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasSubmitted(false);
      setFillInput('');
      setOrderedWords([]);
      setSentenceAnswers({});
    }
  };

  // Millionaire game start
  const handleStartMillionaire = () => {
    const qList = generateMillionaireQuiz();
    setMillionaireQuestions(qList);
    setMillionaireStep(0);
    setLifelines({ fiftyFifty: true, hint: true });
    setEliminatedOptions([]);
    setMillionaireGameOver(false);
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setActiveGameTab('millionaire');
  };

  const handleMillionaireUseFiftyFifty = () => {
    if (!lifelines.fiftyFifty) return;
    const currentQ = millionaireQuestions[millionaireStep];
    if (!currentQ || !currentQ.options) return;

    const wrongOptions = currentQ.options.filter((o) => !o.isCorrect).map((o) => o.id);
    const toEliminate = wrongOptions.slice(0, 2);
    setEliminatedOptions(toEliminate);
    setLifelines((prev) => ({ ...prev, fiftyFifty: false }));
    onPlaySound('click');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Game Mode Navigation Tabs */}
      <div className="bg-white rounded-xl border border-stone-200 p-3 shadow-xs">
        <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 px-1">
          Modalidades de Práctica Interactiva
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => {
              setActiveGameTab('quiz');
              handleStartNewSession();
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeGameTab === 'quiz'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span>Test general de 4 opciones</span>
          </button>

          <button
            onClick={() => {
              setActiveGameTab('figuras');
              handleStartNewSession('figura_detect');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeGameTab === 'figuras'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Adivina la figura</span>
          </button>

          <button
            onClick={() => {
              setActiveGameTab('armenian_to_spanish');
              handleStartNewSession('armenian_to_spanish');
            }}
            className={`px-3 py-2 rounded-lg font-semibold font-armenian transition-all whitespace-nowrap shrink-0 ${
              activeGameTab === 'armenian_to_spanish'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Հայերենից իսպաներեն
          </button>

          <button
            onClick={() => {
              setActiveGameTab('pairs');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeGameTab === 'pairs'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Duelo de figuras parecidas
          </button>

          <button
            onClick={() => {
              setActiveGameTab('matching');
              handleStartNewSession('matching');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeGameTab === 'matching'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Relaciona términos
          </button>

          <button
            onClick={() => {
              setActiveGameTab('order');
              handleStartNewSession('word_order');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeGameTab === 'order'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Ordena las palabras
          </button>

          <button
            onClick={() => {
              setActiveGameTab('sentence');
              handleStartNewSession('sentence_parse');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 ${
              activeGameTab === 'sentence'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            Análisis palabra a palabra
          </button>

          <button
            onClick={() => {
              setActiveGameTab('text_reading');
            }}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeGameTab === 'text_reading'
                ? 'bg-red-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lectura comprensiva</span>
          </button>

          <button
            onClick={handleStartMillionaire}
            className={`px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeGameTab === 'millionaire'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-700 hover:bg-amber-50'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>¿Quién quiere ser millonario?</span>
          </button>
        </div>
      </div>

      {/* PAIRS COMPARISON LESSONS */}
      {activeGameTab === 'pairs' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
            <h2 className="text-xl font-bold text-stone-900 mb-1">
              Duelo de Figuras Literarias Parecidas
            </h2>
            <p className="text-xs text-stone-500">
              Aprende a no confundir nunca más en el examen las parejas de conceptos que más errores provocan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allComparisonPairs.map((pair) => (
              <div
                key={pair.id}
                className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4"
              >
                <div className="border-b border-stone-100 pb-3">
                  <div className="text-lg font-bold text-stone-900">
                    <BilingualText es={pair.titleEs} hy={pair.titleHy} mode={theoryMode} size="lg" />
                  </div>
                  <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs leading-relaxed text-stone-700">
                    <BilingualText es={pair.diffSummaryEs} hy={pair.diffSummaryHy} mode={theoryMode} size="sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-red-50/70 border border-red-200/60 rounded-lg">
                    <div className="font-bold text-red-900 mb-1">{pair.conceptAEs}</div>
                    <div className="text-stone-700">{pair.keyFeatureAEs}</div>
                  </div>
                  <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg">
                    <div className="font-bold text-amber-900 mb-1">{pair.conceptBEs}</div>
                    <div className="text-stone-700">{pair.keyFeatureBEs}</div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-stone-500 uppercase">Ejemplos comparados:</div>
                  {pair.examples.map((ex, i) => (
                    <div key={i} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs space-y-1">
                      <div className="font-medium text-stone-900">
                        <BilingualText es={ex.textEs} hy={ex.textHy} mode={theoryMode} size="sm" />
                      </div>
                      <div className="text-[11px] text-amber-900 font-semibold flex items-center justify-between">
                        <span>
                          Pertenece a: {ex.belongsTo === 'A' ? pair.conceptAEs : pair.conceptBEs}
                        </span>
                        <span className="text-stone-500 font-normal">{ex.whyEs}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* READING TEXTS MODE */}
      {activeGameTab === 'text_reading' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Passage reading */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-semibold text-red-800 uppercase tracking-wider block">
                  {readingTexts[selectedReadingIndex].categoryLabelEs}
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  <BilingualText
                    es={readingTexts[selectedReadingIndex].titleEs}
                    hy={readingTexts[selectedReadingIndex].titleHy}
                    mode={theoryMode}
                    size="xl"
                  />
                </h2>
              </div>
              <div className="flex items-center gap-1">
                {readingTexts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedReadingIndex(idx)}
                    className={`w-7 h-7 rounded text-xs font-bold ${
                      selectedReadingIndex === idx ? 'bg-red-800 text-white' : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 leading-relaxed text-sm whitespace-pre-line text-stone-800 font-serif">
              <BilingualText
                es={readingTexts[selectedReadingIndex].contentEs}
                hy={readingTexts[selectedReadingIndex].contentHy}
                mode={theoryMode}
                size="base"
              />
            </div>
          </div>

          {/* Questions on reading */}
          <div className="lg:col-span-1 bg-white rounded-xl border border-stone-200 p-4 shadow-xs space-y-4 max-h-[700px] overflow-y-auto">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              Preguntas de Comprensión y Análisis
            </h3>

            {readingTexts[selectedReadingIndex].questions.map((q, idx) => (
              <div key={q.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-2 text-xs">
                <div className="font-semibold text-stone-900">
                  <BilingualText es={`${idx + 1}. ${q.questionEs}`} hy={q.questionHy} mode={theoryMode} size="sm" />
                </div>
                <div className="space-y-1">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`p-2 rounded border transition-colors ${
                        opt.isCorrect
                          ? 'border-emerald-500 bg-emerald-50/80 font-medium text-emerald-950'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      <BilingualText es={opt.textEs} hy={opt.textHy} mode={theoryMode} size="sm" />
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/50">
                  <span className="font-semibold text-stone-700">Explicación: </span>
                  <BilingualText es={q.explanationEs} hy={q.explanationHy} mode={theoryMode} size="xs" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WHO WANTS TO BE A MILLIONAIRE MODE */}
      {activeGameTab === 'millionaire' && (
        <div className="max-w-3xl mx-auto bg-stone-950 text-white rounded-2xl border-2 border-amber-600/60 p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Juego Educativo Especial
              </div>
              <h2 className="text-xl font-extrabold text-white">¿Quién quiere ser millonario?</h2>
            </div>
            <div className="text-right">
              <div className="text-xs text-stone-400">Pregunta actual</div>
              <div className="text-lg font-bold text-amber-400 tabular-nums">
                Nivel {millionaireStep + 1} / 15
              </div>
            </div>
          </div>

          {/* Lifelines */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleMillionaireUseFiftyFifty}
              disabled={!lifelines.fiftyFifty}
              className="px-3 py-1.5 rounded-lg border border-amber-500 bg-stone-900 text-xs font-bold text-amber-300 disabled:opacity-30 disabled:border-stone-700"
            >
              Comodín 50:50 {lifelines.fiftyFifty ? '✓' : '✗'}
            </button>
          </div>

          {millionaireQuestions[millionaireStep] && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 text-center font-bold text-base leading-relaxed">
                <BilingualText
                  es={millionaireQuestions[millionaireStep].promptEs}
                  hy={millionaireQuestions[millionaireStep].promptHy}
                  mode={theoryMode}
                  size="base"
                  esClassName="text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {millionaireQuestions[millionaireStep].options?.map((opt, i) => {
                  const isEliminated = eliminatedOptions.includes(opt.id);
                  if (isEliminated) {
                    return <div key={opt.id} className="opacity-0 pointer-events-none p-3"></div>;
                  }

                  const isSelected = selectedOptionId === opt.id;
                  let style = 'bg-stone-900 border-stone-700 hover:border-amber-400 text-stone-200';
                  if (hasSubmitted) {
                    if (opt.isCorrect) style = 'bg-emerald-900 border-emerald-400 text-white font-bold';
                    else if (isSelected) style = 'bg-red-900 border-red-500 text-white';
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => !hasSubmitted && setSelectedOptionId(opt.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2 ${style}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <div className="flex-1">
                        <BilingualText
                          es={opt.textEs}
                          hy={opt.textHy}
                          mode={theoryMode}
                          size="sm"
                          esClassName={hasSubmitted && opt.isCorrect ? 'text-white font-bold' : 'text-stone-200'}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {!hasSubmitted ? (
                <button
                  onClick={() => {
                    if (!selectedOptionId) return;
                    setHasSubmitted(true);
                    const opt = millionaireQuestions[millionaireStep].options?.find((o) => o.id === selectedOptionId);
                    if (opt?.isCorrect) {
                      onPlaySound('correct');
                    } else {
                      onPlaySound('wrong');
                      setMillionaireGameOver(true);
                    }
                  }}
                  disabled={!selectedOptionId}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm disabled:opacity-40"
                >
                  Confirmar respuesta definitiva
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs">
                    <span className="text-amber-400 font-bold block mb-1">Explicación: </span>
                    <BilingualText
                      es={millionaireQuestions[millionaireStep].explanationEs}
                      hy={millionaireQuestions[millionaireStep].explanationHy}
                      mode={theoryMode}
                      size="sm"
                      esClassName="text-stone-300"
                    />
                  </div>
                  {!millionaireGameOver ? (
                    <button
                      onClick={() => {
                        if (millionaireStep < 14) {
                          setMillionaireStep((prev) => prev + 1);
                          setSelectedOptionId(null);
                          setHasSubmitted(false);
                          setEliminatedOptions([]);
                        } else {
                          onPlaySound('complete');
                          alert('¡FELICIDADES! Has superado los 15 niveles de Lengua Castellana.');
                        }
                      }}
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                    >
                      Siguiente nivel
                    </button>
                  ) : (
                    <button
                      onClick={handleStartMillionaire}
                      className="w-full py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-sm"
                    >
                      Jugar de nuevo
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* STANDARD QUIZ / FIGURAS / ARMENIAN TO SPANISH / WORD ORDER / PARSING MODES */}
      {['quiz', 'figuras', 'armenian_to_spanish', 'order', 'sentence'].includes(activeGameTab) && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Left Topic Filter & Score Card */}
          <div className="lg:col-span-1 bg-white rounded-xl border border-stone-200 p-4 shadow-xs space-y-4">
            <div className="border-b border-stone-100 pb-3">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Marcador actual
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-stone-900 tabular-nums">
                  {score.correct}
                </span>
                <span className="text-sm text-stone-500">/ {score.total} correctas</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{
                    width: score.total > 0 ? `${(score.correct / score.total) * 100}%` : '0%',
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Filtrar por tema
              </div>
              <select
                value={selectedTopicFilter}
                onChange={(e) => {
                  setSelectedTopicFilter(e.target.value);
                  handleStartNewSession(undefined, e.target.value);
                }}
                className="w-full text-xs p-2 rounded-lg border border-stone-300 bg-white text-stone-800"
              >
                <option value="all">Todos los temas mezclados</option>
                {allTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    Tema {t.number}: {t.titleEs}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => handleStartNewSession()}
              className="w-full py-2 px-3 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Barajar preguntas nuevas</span>
            </button>
          </div>

          {/* Main Question Card */}
          <div className="lg:col-span-3 space-y-4">
            {currentExercise ? (
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
                  <span className="font-semibold text-red-800">
                    Pregunta {currentIndex + 1} de {sessionQuestions.length}
                  </span>
                  <span className="capitalize px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                    Dificultad: {currentExercise.difficulty}
                  </span>
                </div>

                {/* Prompt */}
                <div className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
                  <BilingualText
                    es={currentExercise.promptEs}
                    hy={currentExercise.promptHy}
                    mode={theoryMode}
                    size="lg"
                  />
                </div>

                {currentExercise.snippetEs && (
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-sm font-mono text-stone-800">
                    <BilingualText
                      es={currentExercise.snippetEs}
                      hy={currentExercise.snippetHy || ''}
                      mode={theoryMode}
                      size="sm"
                    />
                  </div>
                )}

                {/* WORD ORDER MODE */}
                {currentExercise.type === 'word_order' && currentExercise.wordsScrambled && (
                  <div className="space-y-4 pt-2">
                    <div className="p-4 bg-stone-50 rounded-xl border border-dashed border-stone-300 min-h-[50px] flex flex-wrap gap-2 items-center">
                      {orderedWords.length === 0 ? (
                        <span className="text-xs text-stone-400">
                          Haz clic en las palabras de abajo para colocarlas aquí en orden...
                        </span>
                      ) : (
                        orderedWords.map((word, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              if (hasSubmitted) return;
                              setOrderedWords((prev) => prev.filter((_, idx) => idx !== i));
                            }}
                            className="px-2.5 py-1 bg-white border border-stone-300 rounded text-xs font-semibold shadow-2xs hover:bg-red-50 text-stone-800"
                          >
                            {word} ✕
                          </button>
                        ))
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentExercise.wordsScrambled.map((word, i) => {
                        const isUsed = orderedWords.includes(word);
                        return (
                          <button
                            key={i}
                            disabled={isUsed || hasSubmitted}
                            onClick={() => setOrderedWords((prev) => [...prev, word])}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-300 text-xs font-semibold text-stone-800 hover:bg-stone-200 disabled:opacity-30 disabled:hover:bg-stone-100"
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* SENTENCE PARSING (WORD BY WORD) */}
                {currentExercise.type === 'sentence_parse' && currentExercise.parsedWords && (
                  <div className="space-y-3 pt-2">
                    {currentExercise.parsedWords.map((pw, i) => {
                      const userChoice = sentenceAnswers[i];
                      const isCorrect = userChoice === pw.categoryEs;
                      return (
                        <div
                          key={i}
                          className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                        >
                          <div className="font-bold text-stone-900 text-sm">
                            «{pw.word}»
                          </div>
                          <div className="flex items-center gap-2">
                            <select
                              disabled={hasSubmitted}
                              value={userChoice || ''}
                              onChange={(e) =>
                                setSentenceAnswers((prev) => ({ ...prev, [i]: e.target.value }))
                              }
                              className={`p-1.5 rounded border text-xs ${
                                hasSubmitted
                                  ? isCorrect
                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                                    : 'border-red-500 bg-red-50 text-red-900'
                                  : 'border-stone-300 bg-white'
                              }`}
                            >
                              <option value="">-- Elige categoría --</option>
                              {pw.options.map((opt, oIdx) => (
                                <option key={oIdx} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            {hasSubmitted &&
                              (isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-600" />
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* MULTIPLE CHOICE OPTIONS */}
                {currentExercise.options && currentExercise.type !== 'word_order' && currentExercise.type !== 'sentence_parse' && (
                  <div className="space-y-2.5 pt-2">
                    {currentExercise.options.map((opt, i) => {
                      const isSelected = selectedOptionId === opt.id;
                      let optionStyle =
                        'border-stone-200 bg-white hover:border-red-300 hover:bg-stone-50/50';

                      if (hasSubmitted) {
                        if (opt.isCorrect) {
                          optionStyle =
                            'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-semibold shadow-2xs';
                        } else if (isSelected && !opt.isCorrect) {
                          optionStyle =
                            'border-red-500 bg-red-50/90 text-red-950 shadow-2xs';
                        } else {
                          optionStyle = 'border-stone-200 opacity-60 bg-stone-50';
                        }
                      } else if (isSelected) {
                        optionStyle =
                          'border-red-800 bg-red-50/40 text-red-950 font-medium ring-1 ring-red-800/20';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-sm ${optionStyle}`}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="w-6 h-6 rounded-full bg-stone-200/80 text-stone-700 font-bold text-xs flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <div className="flex-1">
                              <BilingualText
                                es={opt.textEs}
                                hy={opt.textHy}
                                mode={theoryMode}
                                size="sm"
                              />
                            </div>
                          </div>

                          {hasSubmitted && opt.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {hasSubmitted && isSelected && !opt.isCorrect && (
                            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* ETAPA 5: EXPLICA POR QUÉ (FEEDBACK PANEL) */}
                {hasSubmitted && (
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                      <HelpCircle className="w-4 h-4 text-amber-700" />
                      <span>Etapa 5: Explica por qué — Justificación razonada</span>
                    </div>

                    <div className="text-xs text-stone-700 space-y-1">
                      <span className="font-semibold text-emerald-800">Por qué es la respuesta correcta: </span>
                      <BilingualText
                        es={currentExercise.explanationEs}
                        hy={currentExercise.explanationHy}
                        mode={theoryMode}
                        size="sm"
                      />
                    </div>

                    {currentExercise.whyOthersWrongEs && (
                      <div className="text-xs text-stone-600 pt-1 border-t border-stone-200/60">
                        <span className="font-semibold text-red-800">Por qué las otras son incorrectas: </span>
                        <BilingualText
                          es={currentExercise.whyOthersWrongEs}
                          hy={currentExercise.whyOthersWrongHy || ''}
                          mode={theoryMode}
                          size="sm"
                        />
                      </div>
                    )}

                    <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200/80 text-xs text-amber-900">
                      <span className="font-bold">Regla clave para el examen: </span>
                      <BilingualText
                        es={currentExercise.ruleToRememberEs || ''}
                        hy={currentExercise.ruleToRememberHy || ''}
                        mode={theoryMode}
                        size="sm"
                      />
                    </div>
                  </div>
                )}

                {/* Controls (Comprobar respuesta / Siguiente) */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                  <div className="text-xs text-stone-400">
                    {!hasSubmitted ? 'Selecciona una respuesta y pulsa Comprobar' : 'Revisa la explicación y continúa'}
                  </div>

                  {!hasSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      className="px-6 py-2.5 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs shadow-xs transition-colors"
                    >
                      Comprobar respuesta
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Siguiente ejercicio</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center border border-stone-200">
                <p className="text-stone-600 text-sm">No hay más ejercicios en esta sesión.</p>
                <button
                  onClick={() => handleStartNewSession()}
                  className="mt-4 px-4 py-2 bg-red-800 text-white rounded-lg text-xs font-bold"
                >
                  Empezar nueva ronda
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
