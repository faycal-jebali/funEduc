export interface Exercise {
  type?: 'fill-in-the-blank' | 'multiple-choice' | 'matching';
  sentence?: string;
  options?: string[];
  correctAnswer: string | { [key: string]: string }; // Clé-Valeur pour les associations
}

export interface ExerciceSectionItem {
  title?: string;
  list: Exercise[];
}
