/**
 * Data types for Lengua Castellana y Literatura 1.º ESO bilingual app (Español & Հայերեն)
 */

export interface BilingualString {
  es: string;
  hy: string;
}

export interface TheoryExample {
  es: string;
  hy: string;
  highlight?: string;
  highlightHy?: string;
  explanation?: string;
  explanationHy?: string;
}

export interface CheckpointQuestion {
  id: string;
  questionEs: string;
  questionHy: string;
  options: {
    id: string;
    textEs: string;
    textHy: string;
    isCorrect: boolean;
  }[];
  explanationEs: string;
  explanationHy: string;
}

export interface FlashcardItem {
  id: string;
  frontEs: string;
  frontHy: string;
  backEs: string;
  backHy: string;
  clueEs?: string;
  clueHy?: string;
}

export interface TopicConcept {
  id: string;
  moduleId: string;
  moduleNameEs: string;
  moduleNameHy: string;
  number: number;
  titleEs: string;
  titleHy: string;
  definitionEs: string;
  definitionHy: string;
  simpleExplanationEs: string;
  simpleExplanationHy: string;
  howToRecognizeEs: string;
  howToRecognizeHy: string;
  purposeEs: string;
  purposeHy: string;
  examples: TheoryExample[];
  frequentMistakesEs: string;
  frequentMistakesHy: string;
  confusionsEs: string;
  confusionsHy: string;
  memoryTrickEs: string;
  memoryTrickHy: string;
  checkpointQuestions: CheckpointQuestion[];
  flashcards: FlashcardItem[];
}

export interface QuestionOption {
  id: string;
  textEs: string;
  textHy: string;
  isCorrect: boolean;
}

export type ExerciseType =
  | 'multiple_choice'
  | 'figura_detect'
  | 'fill_blank'
  | 'true_false'
  | 'matching'
  | 'word_order'
  | 'find_error'
  | 'armenian_to_spanish'
  | 'what_am_i'
  | 'category_classify'
  | 'sentence_parse';

export interface ExerciseItem {
  id: string;
  topicId: string;
  moduleId: string;
  moduleNameEs: string;
  type: ExerciseType;
  difficulty: 'facil' | 'intermedio' | 'dificil';
  promptEs: string;
  promptHy: string;
  snippetEs?: string;
  snippetHy?: string;
  options?: QuestionOption[];
  // For fill in blank or write-in:
  correctAnswerEs?: string;
  correctAnswerHy?: string;
  acceptedAnswersEs?: string[];
  // For matching:
  matchingPairs?: {
    id: string;
    leftEs: string;
    leftHy: string;
    rightEs: string;
    rightHy: string;
  }[];
  // For word order:
  wordsScrambled?: string[];
  correctOrderedEs?: string;
  correctOrderedHy?: string;
  // For sentence parsing:
  parsedWords?: {
    word: string;
    categoryEs: string;
    categoryHy: string;
    options: string[];
  }[];
  // Explanations:
  explanationEs: string;
  explanationHy: string;
  whyOthersWrongEs?: string;
  whyOthersWrongHy?: string;
  ruleToRememberEs?: string;
  ruleToRememberHy?: string;
}

export interface ComparisonPair {
  id: string;
  titleEs: string;
  titleHy: string;
  conceptAEs: string;
  conceptAHy: string;
  conceptBEs: string;
  conceptBHy: string;
  diffSummaryEs: string;
  diffSummaryHy: string;
  keyFeatureAEs: string;
  keyFeatureAHy: string;
  keyFeatureBEs: string;
  keyFeatureBHy: string;
  examples: {
    textEs: string;
    textHy: string;
    belongsTo: 'A' | 'B';
    whyEs: string;
    whyHy: string;
  }[];
}

export interface ReadingTextQuestion {
  id: string;
  questionEs: string;
  questionHy: string;
  options: QuestionOption[];
  explanationEs: string;
  explanationHy: string;
  ruleEs?: string;
  ruleHy?: string;
}

export interface ReadingText {
  id: string;
  titleEs: string;
  titleHy: string;
  category: 'mito' | 'leyenda' | 'cuento' | 'romance' | 'poema';
  categoryLabelEs: string;
  categoryLabelHy: string;
  isVerse: boolean;
  isPopular: boolean;
  contentEs: string;
  contentHy: string;
  notesEs: string;
  notesHy: string;
  questions: ReadingTextQuestion[];
}

export interface TeacherOralItem {
  id: string;
  topicId: string;
  questionEs: string;
  questionHy: string;
  shortAnswerEs: string;
  shortAnswerHy: string;
  completeAnswerEs: string;
  completeAnswerHy: string;
  examAnswerEs: string;
  examAnswerHy: string;
  keyPointsEs: string[];
  keyPointsHy: string[];
}

export type MasteryLevel = 'no_estudiado' | 'en_aprendizaje' | 'necesita_repaso' | 'casi_dominado' | 'dominado';

export interface ConceptMastery {
  conceptId: string;
  correctCount: number;
  incorrectCount: number;
  hintsUsedCount: number;
  level: MasteryLevel;
  lastAttemptTimestamp: number;
}

export interface ExamResult {
  id: string;
  timestamp: number;
  examType: string;
  score10: number;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  topicErrors: Record<string, number>;
  timeSpentSeconds: number;
}

export interface UserProgress {
  conceptMastery: Record<string, ConceptMastery>;
  mistakeHistory: Record<string, number>; // exerciseId -> wrong count
  examResults: ExamResult[];
  completedDays: number[];
  currentStreak: number;
  lastActiveDate: string;
  soundEnabled: boolean;
  preferredTheoryMode: 'es' | 'hy' | 'both' | 'interactive';
}
