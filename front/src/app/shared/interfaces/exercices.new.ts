export enum ExerciceType {
  FILL_IN_THE_BLANK = 'fill-in-the-blank', // Texte à trous
  MULTIPLE_CHOICE = 'multiple-choice', // QCM
  MATCHING = 'matching', // Correspondance
  DICTATION = 'dictation', // Correspondance
  TRUE_FALSE = 'true-false', // Vrai ou faux
}

export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum UserRole {
  STUDENT = 'student', // Élève
  PARENT = 'parent', // Parent
  TEACHER = 'teacher', // Enseignant
  ADMIN = 'admin', // Administrateur
}

export interface ExerciceAttempt {
  id: string;
  exerciceId: string; // Référence à l'exercice
  userId: string; // Référence à l'élève
  givenAnswer: string | string[] | Record<string, string>; // Réponse donnée
  isCorrect: boolean; // Indique si la réponse est correcte
  score?: number; // Score obtenu
  attemptDate: Date; // Date de la tentative
}

export interface ExerciceSectionItem {
  id: string;
  title: string; // Nom du chapitre ou de la section
  description?: string; // Brève description
  exercices?: ExerciceItem[];
  createdBy: UserRole; // Qui a créé cette section
  created_at?: string; // Brève description
}

export interface ExerciceItem {
  id: string; // Identifiant unique
  type: ExerciceType; // Type de l'exercice
  question?: string; // Énoncé (pour certains types d'exercice)
  options?: string[]; // Options possibles (pour les QCM)
  correct_answer: string | string[] | Record<string, string>; // Réponse(s) correcte(s)
  explanation?: string; // Explication de la réponse
  consigne?: string; // consigne de la réponse
  media?: string; // URL d'une image/audio/vidéo
  difficulty?: DifficultyLevel; // Niveau de difficulté
  createdBy: UserRole; // Qui a créé l'exercice (parent, enseignant, admin)
}

const exampleExercice: ExerciceItem = {
  id: 'ex1',
  type: ExerciceType.FILL_IN_THE_BLANK,
  question: "Nous ______ à l'école. (être)",
  correct_answer: 'sommes',
  explanation: "Le verbe 'être' au présent avec 'nous' donne 'sommes'.",
  difficulty: DifficultyLevel.EASY,
  createdBy: UserRole.TEACHER,
};

const exampleSection: ExerciceSectionItem = {
  id: 'sec1',
  title: 'Conjugaison - Présent de l’indicatif',
  description: 'Exercices pour apprendre le présent des verbes être et avoir.',
  exercices: [exampleExercice],
  createdBy: UserRole.ADMIN,
};

const exampleAttempt: ExerciceAttempt = {
  id: 'att1',
  exerciceId: 'ex1',
  userId: 'student123',
  givenAnswer: 'sommes',
  isCorrect: true,
  score: 10,
  attemptDate: new Date(),
};
