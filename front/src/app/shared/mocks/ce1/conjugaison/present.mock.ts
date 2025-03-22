import {
  Exercice,
  ExerciceSectionItem,
} from 'src/app/shared/interfaces/exercice';

export const ex1: Exercice[] = [
  {
    type: 'multiple-choice',
    sentence: 'Marie _______ un gâteau.',
    options: ['fait', 'faire', 'fais'],
    correctAnswer: 'fait',
  },
  {
    type: 'multiple-choice',
    sentence: 'Les enfants _______ à la récréation.',
    options: ['jouent', 'jouer', 'jouait'],
    correctAnswer: 'jouent',
  },
  {
    type: 'multiple-choice',
    sentence: "Nous _______ le matin avant d'aller à l'école.",
    options: ['réveillons', 'réveiller', 'réveille'],
    correctAnswer: 'réveillons',
  },
  {
    type: 'multiple-choice',
    sentence: 'Paul et moi _______ souvent au parc.',
    options: ['jouons', 'jouer', 'jouait'],
    correctAnswer: 'jouons',
  },
  {
    type: 'multiple-choice',
    sentence: 'Tu _______ des livres à la bibliothèque.',
    options: ['lis', 'lire', 'lit'],
    correctAnswer: 'lis',
  },
  {
    type: 'multiple-choice',
    sentence: 'Vous _______ toujours des bonnes réponses.',
    options: ['donnez', 'donner', 'donne'],
    correctAnswer: 'donnez',
  },
  {
    type: 'multiple-choice',
    sentence: 'Il _______ des dessins avec ses crayons.',
    options: ['dessine', 'dessiner', 'dessinait'],
    correctAnswer: 'dessine',
  },
  {
    type: 'multiple-choice',
    sentence: "Nous _______ nos devoirs après l'école.",
    options: ['faisons', 'faire', 'fait'],
    correctAnswer: 'faisons',
  },
  {
    type: 'multiple-choice',
    sentence: 'Je _______ mes légumes.',
    options: ['mange', 'manger', 'mangé'],
    correctAnswer: 'mange',
  },
  {
    type: 'multiple-choice',
    sentence: 'Vous _______ souvent des promenades.',
    options: ['faites', 'faire', 'fait'],
    correctAnswer: 'faites',
  },
];

export const ex2: Exercice[] = [
  {
    type: 'multiple-choice',
    sentence: 'Le chat _______ sur le canapé.',
    options: ['mange', 'manger', 'mangé'],
    correctAnswer: 'mange',
  },
  {
    type: 'multiple-choice',
    sentence: "Nous _______ à l'école chaque matin.",
    options: ['allez', 'allons', 'aller'],
    correctAnswer: 'allons',
  },
  {
    type: 'multiple-choice',
    sentence: 'Tu _______ très bien en français.',
    options: ['parles', 'parle', 'parler'],
    correctAnswer: 'parles',
  },
  {
    type: 'multiple-choice',
    sentence: 'Elle _______ une pomme.',
    options: ['mange', 'manger', 'mangé'],
    correctAnswer: 'mange',
  },
  {
    type: 'multiple-choice',
    sentence: 'Ils _______ au parc tous les dimanches.',
    options: ['jouent', 'jouer', 'jouaient'],
    correctAnswer: 'jouent',
  },
  {
    type: 'multiple-choice',
    sentence: 'Je _______ mes devoirs avant de sortir.',
    options: ['fais', 'faire', 'fait'],
    correctAnswer: 'fais',
  },
];

export const ex3: Exercice[] = [
  {
    type: 'fill-in-the-blank',
    sentence: "Nous ______ à l'école. (être)",
    correctAnswer: 'sommes',
  },
  {
    type: 'fill-in-the-blank',
    sentence: '______-tu un stylo? (avoir)',
    correctAnswer: 'as',
  },
  {
    type: 'multiple-choice',
    sentence: 'Il ______ (avoir) un chien.',
    options: ['as', 'a', 'avons'],
    correctAnswer: 'a',
  },
  {
    type: 'matching',
    correctAnswer: {
      Je: 'suis',
      Tu: 'es',
      'Il/Elle': 'est',
    },
    options: ['suis', 'es', 'est'],
  },
];

export const conjugaisonEx1: ExerciceSectionItem = {
  title: 'Conjugaison 1',
  list: ex1,
};

export const conjugaisonEx2: ExerciceSectionItem = {
  title: 'Conjugaison 2',
  list: ex2,
};

export const conjugaisonEx3: ExerciceSectionItem = {
  title: 'Conjugaison 3',
  list: ex3,
};
