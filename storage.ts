import { UserProgress, ExamResult, MasteryLevel } from './types';

const STORAGE_KEY = 'lengua_eso1_prep_progress_v1';

export const initialProgress: UserProgress = {
  conceptMastery: {},
  mistakeHistory: {},
  examResults: [],
  completedDays: [],
  currentStreak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  soundEnabled: true,
  preferredTheoryMode: 'interactive',
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    const parsed = JSON.parse(raw);
    const mode = parsed.preferredTheoryMode === 'hy' ? 'hy' : 'interactive';
    return {
      ...initialProgress,
      ...parsed,
      preferredTheoryMode: mode,
      conceptMastery: parsed.conceptMastery || {},
      mistakeHistory: parsed.mistakeHistory || {},
      examResults: parsed.examResults || [],
      completedDays: parsed.completedDays || [],
    };
  } catch {
    return initialProgress;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function recordConceptAttempt(
  progress: UserProgress,
  conceptId: string,
  isCorrect: boolean,
  usedHint: boolean = false
): UserProgress {
  const current = progress.conceptMastery[conceptId] || {
    conceptId,
    correctCount: 0,
    incorrectCount: 0,
    hintsUsedCount: 0,
    level: 'no_estudiado' as MasteryLevel,
    lastAttemptTimestamp: Date.now(),
  };

  const correctCount = current.correctCount + (isCorrect ? 1 : 0);
  const incorrectCount = current.incorrectCount + (isCorrect ? 0 : 1);
  const hintsUsedCount = current.hintsUsedCount + (usedHint ? 1 : 0);

  let level: MasteryLevel = 'en_aprendizaje';
  if (incorrectCount >= 2 && correctCount < 3) {
    level = 'necesita_repaso';
  } else if (correctCount >= 5 && incorrectCount <= 1) {
    level = 'dominado';
  } else if (correctCount >= 3) {
    level = 'casi_dominado';
  } else {
    level = 'en_aprendizaje';
  }

  const updatedMastery = {
    ...progress.conceptMastery,
    [conceptId]: {
      conceptId,
      correctCount,
      incorrectCount,
      hintsUsedCount,
      level,
      lastAttemptTimestamp: Date.now(),
    },
  };

  return {
    ...progress,
    conceptMastery: updatedMastery,
  };
}

export function recordExerciseError(
  progress: UserProgress,
  exerciseId: string,
  topicId: string
): UserProgress {
  const currentErrors = progress.mistakeHistory[exerciseId] || 0;
  const updatedMistakes = {
    ...progress.mistakeHistory,
    [exerciseId]: currentErrors + 1,
  };

  const withConcept = recordConceptAttempt(progress, topicId, false);
  return {
    ...withConcept,
    mistakeHistory: updatedMistakes,
  };
}

export function recordExerciseSuccess(
  progress: UserProgress,
  exerciseId: string,
  topicId: string
): UserProgress {
  // If user previously failed, decrease weight
  const updatedMistakes = { ...progress.mistakeHistory };
  if (updatedMistakes[exerciseId] && updatedMistakes[exerciseId] > 0) {
    updatedMistakes[exerciseId] = Math.max(0, updatedMistakes[exerciseId] - 1);
    if (updatedMistakes[exerciseId] === 0) {
      delete updatedMistakes[exerciseId];
    }
  }

  const withConcept = recordConceptAttempt(progress, topicId, true);
  return {
    ...withConcept,
    mistakeHistory: updatedMistakes,
  };
}

export function saveExamResult(
  progress: UserProgress,
  examResult: ExamResult
): UserProgress {
  return {
    ...progress,
    examResults: [examResult, ...(progress.examResults || [])].slice(0, 50),
  };
}

// Gentle Web Audio API sound synthesizer
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSound(type: 'correct' | 'wrong' | 'complete' | 'click', enabled: boolean = true) {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(190, now + 0.15);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'complete') {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(ctx.destination);

        const startTime = now + i * 0.1;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);

        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    }
  } catch (err) {
    console.debug('Audio error ignored', err);
  }
}
