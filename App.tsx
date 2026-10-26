import { useState, useEffect } from 'react';
import { UserProgress, ExamResult } from './types';
import {
  loadUserProgress,
  saveUserProgress,
  recordConceptAttempt,
  recordExerciseError,
  recordExerciseSuccess,
  saveExamResult,
  playSound,
  initialProgress,
} from './storage';
import { Navbar } from './Navbar';
import { ViewTheory } from './ViewTheory';
import { ViewPractice } from './ViewPractice';
import { ViewOralExam } from './ViewOralExam';
import { ViewExam } from './ViewExam';
import { ViewDiagnostic } from './ViewDiagnostic';
import { ViewStudyPlan } from './ViewStudyPlan';
import { ViewMemory } from './ViewMemory';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress);
  const [currentTab, setCurrentTab] = useState<string>('aprender');
  const [selectedTopicId, setSelectedTopicId] = useState<string | undefined>(undefined);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sync progress to LocalStorage on change
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Daily streak checker
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastActiveDate !== today) {
      setProgress((prev) => ({
        ...prev,
        lastActiveDate: today,
        currentStreak: prev.currentStreak + 1,
      }));
    }
  }, []);

  const handleToggleSound = () => {
    setProgress((prev) => {
      const nextSound = !prev.soundEnabled;
      playSound('click', nextSound);
      return { ...prev, soundEnabled: nextSound };
    });
  };

  const handleResetProgress = () => {
    setShowResetConfirm(true);
  };

  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'xlarge'>(() => {
    return (localStorage.getItem('lengua_font_scale') as 'normal' | 'large' | 'xlarge') || 'large';
  });

  // Apply font scale to document element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-large', 'font-scale-xlarge');
    if (fontScale === 'large') {
      root.classList.add('font-scale-large');
    } else if (fontScale === 'xlarge') {
      root.classList.add('font-scale-xlarge');
    }
    localStorage.setItem('lengua_font_scale', fontScale);
  }, [fontScale]);

  const handleToggleFontSize = () => {
    setFontScale((prev) => {
      const next = prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'normal';
      playSound('click', progress.soundEnabled);
      return next;
    });
  };

  const confirmReset = () => {
    localStorage.removeItem('lengua_eso1_prep_progress_v1');
    setProgress(initialProgress);
    setShowResetConfirm(false);
    playSound('wrong', true);
  };

  const handleRecordAttempt = (conceptId: string, isCorrect: boolean) => {
    setProgress((prev) => recordConceptAttempt(prev, conceptId, isCorrect));
  };

  const handleRecordError = (exerciseId: string, topicId: string) => {
    setProgress((prev) => recordExerciseError(prev, exerciseId, topicId));
  };

  const handleRecordSuccess = (exerciseId: string, topicId: string) => {
    setProgress((prev) => recordExerciseSuccess(prev, exerciseId, topicId));
  };

  const handleFinishExam = (result: ExamResult) => {
    setProgress((prev) => saveExamResult(prev, result));
  };

  const handleToggleDayCompleted = (dayNumber: number) => {
    setProgress((prev) => {
      const exists = prev.completedDays.includes(dayNumber);
      const updated = exists
        ? prev.completedDays.filter((d) => d !== dayNumber)
        : [...prev.completedDays, dayNumber];
      return { ...prev, completedDays: updated };
    });
    playSound('correct', progress.soundEnabled);
  };

  const handleGoToTopicFromElsewhere = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentTab('aprender');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPracticeTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentTab('practicar');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mistakeIds = Object.keys(progress.mistakeHistory).filter(
    (id) => progress.mistakeHistory[id] > 0
  );

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col selection:bg-amber-200 selection:text-amber-950">
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        soundEnabled={progress.soundEnabled}
        onToggleSound={handleToggleSound}
        onResetProgress={handleResetProgress}
        streak={progress.currentStreak}
        onToggleFontSize={handleToggleFontSize}
      />

      <main className="flex-1 pb-16">
        {currentTab === 'aprender' && (
          <ViewTheory
            initialTopicId={selectedTopicId}
            theoryMode={progress.preferredTheoryMode}
            onChangeTheoryMode={(mode) =>
              setProgress((prev) => ({ ...prev, preferredTheoryMode: mode }))
            }
            onGoToPracticeTopic={handleGoToPracticeTopic}
            soundEnabled={progress.soundEnabled}
            onRecordAttempt={handleRecordAttempt}
          />
        )}

        {currentTab === 'practicar' && (
          <ViewPractice
            initialTopicId={selectedTopicId}
            theoryMode={progress.preferredTheoryMode}
            soundEnabled={progress.soundEnabled}
            onRecordError={handleRecordError}
            onRecordSuccess={handleRecordSuccess}
            onPlaySound={(t) => playSound(t, progress.soundEnabled)}
          />
        )}

        {currentTab === 'figuras' && (
          <ViewPractice
            initialTopicId="tema_23_aliteracion"
            theoryMode={progress.preferredTheoryMode}
            soundEnabled={progress.soundEnabled}
            onRecordError={handleRecordError}
            onRecordSuccess={handleRecordSuccess}
            onPlaySound={(t) => playSound(t, progress.soundEnabled)}
          />
        )}

        {currentTab === 'profesor' && (
          <ViewOralExam
            theoryMode={progress.preferredTheoryMode}
            onRecordConceptAttempt={handleRecordAttempt}
            onPlaySound={(t) => playSound(t, progress.soundEnabled)}
          />
        )}

        {currentTab === 'simulacro' && (
          <ViewExam
            theoryMode={progress.preferredTheoryMode}
            mistakeIds={mistakeIds}
            onFinishExam={handleFinishExam}
            onPlaySound={(t) => playSound(t, progress.soundEnabled)}
            onGoToErrors={() => setCurrentTab('errores')}
          />
        )}

        {currentTab === 'diagnostico' && (
          <ViewDiagnostic
            theoryMode={progress.preferredTheoryMode}
            onPlaySound={(t) => playSound(t, progress.soundEnabled)}
            onGoToTopic={handleGoToTopicFromElsewhere}
          />
        )}

        {currentTab === 'errores' && (
          <ViewMemory
            progress={progress}
            theoryMode={progress.preferredTheoryMode}
            onPracticeMistakes={() => setCurrentTab('practicar')}
            onGoToTopic={handleGoToTopicFromElsewhere}
            onClearErrors={() =>
              setProgress((prev) => ({ ...prev, mistakeHistory: {} }))
            }
          />
        )}

        {currentTab === 'plan' && (
          <ViewStudyPlan
            completedDays={progress.completedDays}
            onToggleDayCompleted={handleToggleDayCompleted}
            onGoToTopic={handleGoToTopicFromElsewhere}
            onGoToPractice={() => setCurrentTab('practicar')}
            onGoToExam={() => setCurrentTab('simulacro')}
          />
        )}

        {currentTab === 'memoria' && (
          <ViewMemory
            progress={progress}
            theoryMode={progress.preferredTheoryMode}
            onPracticeMistakes={() => setCurrentTab('practicar')}
            onGoToTopic={handleGoToTopicFromElsewhere}
            onClearErrors={() =>
              setProgress((prev) => ({ ...prev, mistakeHistory: {} }))
            }
          />
        )}
      </main>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-stone-200 space-y-4 animate-in fade-in zoom-in-95">
            <h3 className="text-lg font-bold text-stone-900">
              ¿Reiniciar todo el progreso?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Esta acción borrará las respuestas acumuladas, los errores guardados y el historial de exámenes de la memoria local.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmReset}
                className="px-4 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white text-xs font-bold"
              >
                Sí, reiniciar progreso
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiet Academic Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Lengua Castellana y Literatura — 1.º de la ESO (España)
          </div>
          <div className="font-armenian text-amber-900/80">
            Հայերեն թարգմանությամբ և ուսուցողական համակարգով
          </div>
          <div className="text-[11px] text-stone-400">
            Conforme al currículo oficial escolar de Secundaria
          </div>
        </div>
      </footer>
    </div>
  );
}
