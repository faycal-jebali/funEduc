import { Title } from '@angular/platform-browser';
import {
  Exercise,
  ExerciceSectionItem,
} from 'src/app/shared/interfaces/exercice';

export const exercice1: Exercise[] = [
  {
    type: 'matching',
    correctAnswer: {
      '1. La fille est ': 'peureuse',
    },
    options: ['peureux', 'peureuse'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '2. Le chien est ': 'blanc',
    },
    options: ['blanc', 'blanche'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '3. La robe est': 'bleue',
    },
    options: ['bleu', 'bleue'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '4. Le chocolat est ': 'bon',
    },
    options: ['bon', 'bonne'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '5. Maman est ': 'fâchée',
    },
    options: ['fâché', 'fâchée'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '6. La Terre est ': 'ronde',
    },
    options: ['rond', 'ronde'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '7. La cousine est ': 'grande',
    },
    options: ['grand', 'grande'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '8. Mary est ': 'gaie',
    },
    options: ['gai', 'gaie'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '9. La robe est ': 'verte',
    },
    options: ['vert', 'verte'],
  },
  {
    type: 'matching',
    correctAnswer: {
      '10. Grand-mère est ': 'fière',
    },
    options: ['fièr', 'fière'],
  },
];

export const AdjectifsExercices: ExerciceSectionItem = {
  title: 'Adjectifs Qualificatifs',
  list: exercice1,
};
