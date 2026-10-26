import { ExerciseItem, QuestionOption } from './types';
import { exercisesModule1And2 } from './dataExercises1';
import { exercisesModule345 } from './dataExercises2';

export const allExercises: ExerciseItem[] = [
  ...exercisesModule1And2,
  ...exercisesModule345
];

/**
 * True Fisher-Yates shuffle for arrays.
 * Guarantees uniform random distribution without bias.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles options of an exercise item uniformly while maintaining
 * the correct answer pointer via unique option ID.
 */
export function prepareExerciseWithShuffledOptions(exercise: ExerciseItem): ExerciseItem {
  if (!exercise.options || exercise.options.length === 0) {
    return { ...exercise };
  }
  const shuffledOptions: QuestionOption[] = shuffleArray(exercise.options);
  return {
    ...exercise,
    options: shuffledOptions
  };
}

/**
 * Prepares a quiz session with shuffled questions and uniformly shuffled options.
 */
export function generateQuizSession(
  filterFn?: (item: ExerciseItem) => boolean,
  limit?: number
): ExerciseItem[] {
  let pool = allExercises;
  if (filterFn) {
    pool = pool.filter(filterFn);
  }
  const shuffledItems = shuffleArray(pool);
  const selected = limit ? shuffledItems.slice(0, limit) : shuffledItems;
  return selected.map(prepareExerciseWithShuffledOptions);
}

export function getExercisesByTopic(topicId: string): ExerciseItem[] {
  return generateQuizSession(item => item.topicId === topicId);
}

export function getExercisesByModule(moduleId: string): ExerciseItem[] {
  return generateQuizSession(item => item.moduleId === moduleId);
}

export function getExercisesByType(type: string): ExerciseItem[] {
  return generateQuizSession(item => item.type === type);
}

export function getExercisesByDifficulty(diff: 'facil' | 'intermedio' | 'dificil'): ExerciseItem[] {
  return generateQuizSession(item => item.difficulty === diff);
}

export function getExercisesForMistakes(mistakeIds: string[]): ExerciseItem[] {
  const set = new Set(mistakeIds);
  return generateQuizSession(item => set.has(item.id));
}

export function generateMillionaireQuiz(): ExerciseItem[] {
  // 15 progressive questions: 5 facil, 5 intermedio, 5 dificil
  const faciles = generateQuizSession(item => item.difficulty === 'facil', 5);
  const intermedios = generateQuizSession(item => item.difficulty === 'intermedio', 5);
  const dificiles = generateQuizSession(item => item.difficulty === 'dificil', 5);
  return [...faciles, ...intermedios, ...dificiles];
}
