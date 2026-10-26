import React, { useState } from 'react';
import { TopicConcept } from './types';
import { allTopics, moduleList } from './dataTopics';
import { BilingualText } from './BilingualText';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, BookOpen, HelpCircle, Layers, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';

interface ViewTheoryProps {
  initialTopicId?: string;
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  onChangeTheoryMode: (mode: 'es' | 'hy' | 'both' | 'interactive') => void;
  onGoToPracticeTopic: (topicId: string) => void;
  soundEnabled: boolean;
  onRecordAttempt: (conceptId: string, isCorrect: boolean) => void;
}

export const ViewTheory: React.FC<ViewTheoryProps> = ({
  initialTopicId,
  theoryMode,
  onChangeTheoryMode,
  onGoToPracticeTopic,
  onRecordAttempt,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || allTopics[0].id
  );
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [activeStage, setActiveStage] = useState<'aprende' | 'entendido' | 'recuerda'>('aprende');

  // Flashcards state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Checkpoint question state
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const topic = allTopics.find((t) => t.id === selectedTopicId) || allTopics[0];
  const topicIndex = allTopics.findIndex((t) => t.id === topic.id);

  const filteredTopics =
    selectedModule === 'all'
      ? allTopics
      : allTopics.filter((t) => t.moduleId === selectedModule);

  const handleNextTopic = () => {
    if (topicIndex < allTopics.length - 1) {
      setSelectedTopicId(allTopics[topicIndex + 1].id);
      setActiveStage('aprende');
      setHasAnswered(false);
      setSelectedAnswerId(null);
      setIsFlipped(false);
      setCurrentFlashcardIndex(0);
    }
  };

  const handlePrevTopic = () => {
    if (topicIndex > 0) {
      setSelectedTopicId(allTopics[topicIndex - 1].id);
      setActiveStage('aprende');
      setHasAnswered(false);
      setSelectedAnswerId(null);
      setIsFlipped(false);
      setCurrentFlashcardIndex(0);
    }
  };

  const handleAnswerCheckpoint = (optId: string, isCorrect: boolean) => {
    if (hasAnswered) return;
    setSelectedAnswerId(optId);
    setHasAnswered(true);
    onRecordAttempt(topic.id, isCorrect);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Bar Controls: Module & Language Modes */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Module Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedModule === 'all'
                ? 'bg-red-800 text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Todos los temas
          </button>
          {moduleList.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedModule === m.id
                  ? 'bg-red-800 text-white'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {m.titleEs.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Language Display Switcher */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200 shrink-0">
          <span className="text-[11px] font-medium text-stone-500 px-2 select-none">Modo:</span>
          <button
            onClick={() => onChangeTheoryMode('interactive')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              theoryMode !== 'hy' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Español (clic para ver traducción)
          </button>
          <button
            onClick={() => onChangeTheoryMode('hy')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md font-armenian transition-all ${
              theoryMode === 'hy' ? 'bg-white text-amber-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Միայն Հայերեն
          </button>
        </div>
      </div>

      {/* Main Study Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Sidebar: Topic Navigation List */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-stone-200 p-3 shadow-xs max-h-[750px] overflow-y-auto space-y-1">
          <div className="px-3 py-2 text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center justify-between">
            <span>Temario Oficial 1.º ESO</span>
            <span className="text-amber-800 font-normal">{filteredTopics.length} temas</span>
          </div>
          {filteredTopics.map((t) => {
            const isSelected = t.id === topic.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTopicId(t.id);
                  setActiveStage('aprende');
                  setHasAnswered(false);
                  setSelectedAnswerId(null);
                  setIsFlipped(false);
                  setCurrentFlashcardIndex(0);
                }}
                className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-start gap-2 ${
                  isSelected
                    ? 'bg-red-50 text-red-900 border border-red-200 font-bold'
                    : 'text-stone-700 hover:bg-stone-50 font-medium'
                }`}
              >
                <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                  isSelected ? 'bg-red-800 text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {t.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="truncate text-stone-900">{t.titleEs}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Main Container: Topic Content & 3 Stages */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs relative overflow-hidden">
            <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">
              <BilingualText es={topic.moduleNameEs} hy={topic.moduleNameHy} mode={theoryMode} size="sm" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-1">
              <BilingualText es={topic.titleEs} hy={topic.titleHy} mode={theoryMode} size="2xl" />
            </h1>
            <p className="text-xs text-stone-500">
              💡 Haz clic en cualquier texto en español para abrir o cerrar su traducción al armenio.
            </p>

            {/* Stages Segmented Tabs */}
            <div className="flex items-center gap-1.5 mt-5 p-1 bg-stone-100 rounded-lg border border-stone-200 w-full sm:w-auto">
              <button
                onClick={() => setActiveStage('aprende')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeStage === 'aprende'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Etapa 1: Aprende</span>
              </button>
              <button
                onClick={() => setActiveStage('entendido')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeStage === 'entendido'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Etapa 2: ¿Lo has entendido?</span>
              </button>
              <button
                onClick={() => setActiveStage('recuerda')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeStage === 'recuerda'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Etapa 3: Recuerda sin mirar</span>
              </button>
            </div>
          </div>

          {/* STAGE 1: APRENDE */}
          {activeStage === 'aprende' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Definition Box */}
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-base border-b border-stone-100 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-700"></span>
                  <span>1. Definición exacta de la libreta escolar</span>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200/80">
                  <BilingualText
                    es={topic.definitionEs}
                    hy={topic.definitionHy}
                    mode={theoryMode}
                    size="lg"
                  />
                </div>

                {/* Explicación sencilla para 12-13 años */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>2. Explicación fácil para entenderlo a la primera</span>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60 text-stone-800">
                    <BilingualText
                      es={topic.simpleExplanationEs}
                      hy={topic.simpleExplanationHy}
                      mode={theoryMode}
                      size="base"
                    />
                  </div>
                </div>

                {/* Cómo reconocerlo & Para qué sirve */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                    <h3 className="text-xs font-bold text-stone-700 uppercase mb-1">
                      3. ¿Cómo reconocerlo en el examen?
                    </h3>
                    <BilingualText
                      es={topic.howToRecognizeEs}
                      hy={topic.howToRecognizeHy}
                      mode={theoryMode}
                      size="sm"
                    />
                  </div>
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                    <h3 className="text-xs font-bold text-stone-700 uppercase mb-1">
                      4. ¿Para qué sirve este recurso?
                    </h3>
                    <BilingualText
                      es={topic.purposeEs}
                      hy={topic.purposeHy}
                      mode={theoryMode}
                      size="sm"
                    />
                  </div>
                </div>
              </div>

              {/* 5-8 Examples with Highlights */}
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <div className="font-bold text-stone-900 text-base">
                    5. Ejemplos comentados (Banco de la libreta)
                  </div>
                  <span className="text-xs text-stone-500">{topic.examples.length} ejemplos</span>
                </div>

                <div className="space-y-3">
                  {topic.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-stone-200 hover:border-amber-300 transition-colors bg-stone-50/40"
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="flex-1 space-y-1">
                          <BilingualText
                            es={ex.es}
                            hy={ex.hy}
                            mode={theoryMode}
                            size="base"
                            highlightWord={ex.highlight}
                          />
                          {ex.explanation && (
                            <div className="text-xs text-stone-500 pt-1 border-t border-stone-200/50 mt-1">
                              <span className="font-semibold text-stone-700">Análisis: </span>
                              <BilingualText
                                es={ex.explanation}
                                hy={ex.explanationHy || ''}
                                mode={theoryMode}
                                size="sm"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Errores frecuentes, Con qué se confunde & Truco */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-red-200 p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-800 uppercase mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Errores frecuentes</span>
                  </div>
                  <BilingualText
                    es={topic.frequentMistakesEs}
                    hy={topic.frequentMistakesHy}
                    mode={theoryMode}
                    size="sm"
                  />
                </div>

                <div className="bg-white rounded-xl border border-amber-200 p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase mb-2">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>¿Con qué se confunde?</span>
                  </div>
                  <BilingualText
                    es={topic.confusionsEs}
                    hy={topic.confusionsHy}
                    mode={theoryMode}
                    size="sm"
                  />
                </div>

                <div className="bg-white rounded-xl border border-emerald-200 p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase mb-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Regla para no olvidar</span>
                  </div>
                  <BilingualText
                    es={topic.memoryTrickEs}
                    hy={topic.memoryTrickHy}
                    mode={theoryMode}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STAGE 2: ¿LO HAS ENTENDIDO? */}
          {activeStage === 'entendido' && (
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-stone-100 pb-3">
                <h2 className="text-xl font-bold text-stone-900">
                  Etapa 2: Comprueba si has entendido este concepto
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Responde a esta pregunta clave antes de pasar a la práctica.
                </p>
              </div>

              {topic.checkpointQuestions.map((q) => (
                <div key={q.id} className="space-y-4">
                  <div className="text-base font-semibold text-stone-900 bg-stone-50 p-4 rounded-lg border border-stone-200">
                    <BilingualText
                      es={q.questionEs}
                      hy={q.questionHy}
                      mode={theoryMode}
                      size="base"
                    />
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = selectedAnswerId === opt.id;
                      let btnStyle = 'border-stone-200 bg-white hover:border-red-300';
                      if (hasAnswered) {
                        if (opt.isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = 'border-red-500 bg-red-50 text-red-950';
                        } else {
                          btnStyle = 'border-stone-200 opacity-60';
                        }
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <div
                            onClick={() => handleAnswerCheckpoint(opt.id, opt.isCorrect)}
                            className="flex-1 cursor-pointer"
                          >
                            <BilingualText
                              es={opt.textEs}
                              hy={opt.textHy}
                              mode={theoryMode}
                              size="sm"
                            />
                          </div>
                          {hasAnswered && opt.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {hasAnswered && isSelected && !opt.isCorrect && (
                            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {hasAnswered && (
                    <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 space-y-2 animate-in fade-in">
                      <div className="font-bold text-xs uppercase tracking-wider text-stone-700">
                        Explicación detallada
                      </div>
                      <BilingualText
                        es={q.explanationEs}
                        hy={q.explanationHy}
                        mode={theoryMode}
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* STAGE 3: RECUERDA SIN MIRAR (FLASHCARDS) */}
          {activeStage === 'recuerda' && (
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div>
                  <h2 className="text-xl font-bold text-stone-900">
                    Etapa 3: Recuerda sin mirar (Flashcards)
                  </h2>
                  <p className="text-xs text-stone-500">
                    Intenta formular la respuesta en tu cabeza antes de voltear la tarjeta.
                  </p>
                </div>
                <span className="text-xs font-semibold text-stone-500">
                  {currentFlashcardIndex + 1} de {topic.flashcards.length}
                </span>
              </div>

              {topic.flashcards.length > 0 && (
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full max-w-xl min-h-[220px] p-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 hover:bg-amber-50/40 cursor-pointer transition-all flex flex-col justify-between shadow-xs select-none"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      {isFlipped ? 'Respuesta modelo' : 'Pregunta de memoria activa'}
                    </div>

                    <div className="my-auto py-4 text-center">
                      {!isFlipped ? (
                        <BilingualText
                          es={topic.flashcards[currentFlashcardIndex].frontEs}
                          hy={topic.flashcards[currentFlashcardIndex].frontHy}
                          mode={theoryMode}
                          size="lg"
                        />
                      ) : (
                        <BilingualText
                          es={topic.flashcards[currentFlashcardIndex].backEs}
                          hy={topic.flashcards[currentFlashcardIndex].backHy}
                          mode={theoryMode}
                          size="lg"
                        />
                      )}
                    </div>

                    <div className="text-center text-xs text-amber-800 font-medium">
                      {isFlipped ? 'Haz clic para volver a la pregunta' : 'Haz clic para ver la respuesta'}
                    </div>
                  </div>

                  {/* Flashcard Next/Prev buttons */}
                  {topic.flashcards.length > 1 && (
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => {
                          setIsFlipped(false);
                          setCurrentFlashcardIndex((prev) => Math.max(0, prev - 1));
                        }}
                        disabled={currentFlashcardIndex === 0}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium disabled:opacity-40"
                      >
                        Anterior tarjeta
                      </button>
                      <button
                        onClick={() => {
                          setIsFlipped(false);
                          setCurrentFlashcardIndex((prev) =>
                            Math.min(topic.flashcards.length - 1, prev + 1)
                          );
                        }}
                        disabled={currentFlashcardIndex === topic.flashcards.length - 1}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium disabled:opacity-40"
                      >
                        Siguiente tarjeta
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="bg-stone-100 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTopic}
                disabled={topicIndex === 0}
                className="px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-40 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Tema anterior</span>
              </button>
              <button
                onClick={handleNextTopic}
                disabled={topicIndex === allTopics.length - 1}
                className="px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-40 flex items-center gap-1.5"
              >
                <span>Siguiente tema</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Practice Button */}
            <button
              onClick={() => onGoToPracticeTopic(topic.id)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Practicar este tema ({topic.titleEs.split('(')[0]})</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
