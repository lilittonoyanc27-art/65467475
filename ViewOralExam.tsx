import React, { useState } from 'react';
import { teacherOralQuestions } from './dataTeacher';
import { BilingualText } from './BilingualText';
import { UserCheck, HelpCircle, CheckSquare, Square, ChevronRight, RotateCcw } from 'lucide-react';

interface ViewOralExamProps {
  theoryMode: 'es' | 'hy' | 'both' | 'interactive';
  onRecordConceptAttempt: (conceptId: string, isCorrect: boolean) => void;
  onPlaySound: (type: 'correct' | 'wrong' | 'complete' | 'click') => void;
}

export const ViewOralExam: React.FC<ViewOralExamProps> = ({
  theoryMode,
  onRecordConceptAttempt,
  onPlaySound,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'corta' | 'completa' | 'examen'>('completa');
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({});

  const item = teacherOralQuestions[currentIndex] || teacherOralQuestions[0];

  const toggleCheck = (idx: number) => {
    setCheckedPoints((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
    onPlaySound('click');
  };

  const handleNext = () => {
    if (currentIndex < teacherOralQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setRevealed(false);
      setCheckedPoints({});
      setSelectedTab('completa');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setRevealed(false);
      setCheckedPoints({});
      setSelectedTab('completa');
    }
  };

  const handleSelfGrade = (grade: 'bien' | 'regular' | 'mal') => {
    if (grade === 'bien') {
      onPlaySound('correct');
      onRecordConceptAttempt(item.topicId, true);
    } else {
      onPlaySound('wrong');
      onRecordConceptAttempt(item.topicId, false);
    }
    handleNext();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Presentation Card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider font-bold text-red-800">
            Simulador de Examen Oral Escolar
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900 mt-1">
            El Profesor me Pregunta
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Entrena tu capacidad de responder oralmente en el aula sin titubear.
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs text-stone-400">Pregunta</span>
          <div className="text-xl font-extrabold text-stone-800 tabular-nums">
            {currentIndex + 1} / {teacherOralQuestions.length}
          </div>
        </div>
      </div>

      {/* Teacher Challenge Box */}
      <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-stone-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
          <UserCheck className="w-4 h-4" />
          <span>Pregunta del profesor</span>
        </div>

        <div className="text-lg sm:text-xl font-bold leading-relaxed text-stone-100">
          <BilingualText
            es={item.questionEs}
            hy={item.questionHy}
            mode={theoryMode}
            size="xl"
            esClassName="text-white"
          />
        </div>

        <div className="pt-2 text-xs text-stone-400 italic">
          💡 Tómate 10 segundos para pensar tu respuesta en voz alta antes de ver el modelo.
        </div>
      </div>

      {/* Reveal Action / Model Answer */}
      {!revealed ? (
        <div className="text-center py-6">
          <button
            onClick={() => {
              setRevealed(true);
              onPlaySound('click');
            }}
            className="px-8 py-3.5 bg-red-800 hover:bg-red-900 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 mx-auto"
          >
            <HelpCircle className="w-4 h-4 text-amber-300" />
            <span>Ver respuesta modelo y autoevaluarme</span>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-6 animate-in fade-in">
          {/* Answer Level Tabs */}
          <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
            <span className="text-xs font-bold text-stone-500 uppercase mr-2">Nivel de detalle:</span>
            <button
              onClick={() => setSelectedTab('corta')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedTab === 'corta'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1. Respuesta corta
            </button>
            <button
              onClick={() => setSelectedTab('completa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedTab === 'completa'
                  ? 'bg-red-800 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              2. Respuesta completa
            </button>
            <button
              onClick={() => setSelectedTab('examen')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedTab === 'examen'
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              3. Respuesta de matrícula (10/10)
            </button>
          </div>

          {/* Model Answer Body */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 leading-relaxed text-sm">
            {selectedTab === 'corta' && (
              <BilingualText es={item.shortAnswerEs} hy={item.shortAnswerHy} mode={theoryMode} size="base" />
            )}
            {selectedTab === 'completa' && (
              <BilingualText es={item.completeAnswerEs} hy={item.completeAnswerHy} mode={theoryMode} size="base" />
            )}
            {selectedTab === 'examen' && (
              <BilingualText es={item.examAnswerEs} hy={item.examAnswerHy} mode={theoryMode} size="base" />
            )}
          </div>

          {/* Key Scoring Points Checklist */}
          <div className="space-y-3 bg-amber-50/60 p-4 rounded-xl border border-amber-200/60">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              ¿Mencionaste estos puntos clave indispensables?
            </div>
            <div className="space-y-2">
              {item.keyPointsEs.map((kp, idx) => {
                const isChecked = !!checkedPoints[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-center gap-2.5 text-xs text-stone-800 cursor-pointer select-none"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-700 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                    <span className={isChecked ? 'line-through text-stone-500' : ''}>
                      <BilingualText es={kp} hy={item.keyPointsHy[idx] || ''} mode={theoryMode} size="sm" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Self-Grade Evaluation Buttons */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-bold text-stone-600">¿Cómo te salió la respuesta?</span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleSelfGrade('mal')}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-900 text-xs font-bold"
              >
                No me acordaba bien
              </button>
              <button
                onClick={() => handleSelfGrade('regular')}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold"
              >
                Más o menos
              </button>
              <button
                onClick={() => handleSelfGrade('bien')}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1"
              >
                <span>¡La dije perfecta!</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-lg border border-stone-300 bg-white text-xs font-medium text-stone-700 disabled:opacity-40"
        >
          Pregunta anterior
        </button>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setRevealed(false);
          }}
          className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Volver al inicio</span>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === teacherOralQuestions.length - 1}
          className="px-4 py-2 rounded-lg border border-stone-300 bg-white text-xs font-medium text-stone-700 disabled:opacity-40"
        >
          Siguiente pregunta
        </button>
      </div>
    </div>
  );
};
