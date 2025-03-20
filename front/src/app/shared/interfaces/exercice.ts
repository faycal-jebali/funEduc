export interface Exercice {
  type?: 'fill-in-the-blank' | 'multiple-choice' | 'matching' | 'dictation';
  sentence?: string;
  options?: string[];
  correctAnswer: string | { [key: string]: string }; // Clé-Valeur pour les associations
}

export interface ExerciceSectionItem {
  title?: string;
  list: Exercice[];
}
