import { ExerciseSection } from '../interfaces/exercice';

export interface CategoryItem {
  id: number;
  alias: string;
  name: string;
  active: boolean;
  children?: CategoryItem[];
  exercices?: ExerciseSection[];
}

export interface ClasseItem {
  id: number;
  alias: string;
  name: string;
  active: boolean;
  children?: ClasseItem[];
}

export interface SubjectItem {
  id: number;
  alias: string;
  name: string;
  active: boolean;
}

export const classesList: CategoryItem[] = [
  { id: 1, alias: 'cp', name: 'CP', active: false },
  { id: 2, alias: 'ce1', name: 'CE 1', active: true },
  { id: 3, alias: 'ce2', name: 'CE 2', active: false },
  { id: 4, alias: 'cm1', name: 'CM 1', active: false },
  { id: 5, alias: 'cm2', name: 'CM 2', active: false },
  { id: 6, alias: '6ieme', name: 'Classe de 6ème', active: false },
  { id: 7, alias: '5ieme', name: 'Classe de 5ème', active: false },
  { id: 8, alias: '4ieme', name: 'Classe de 4ème', active: false },
  { id: 9, alias: '3ieme', name: 'Classe de 3ème', active: false },
];

export const subjectsList: CategoryItem[] = [
  {
    id: 100,
    alias: 'francais',
    name: 'Français',
    active: true,
    children: [
      { id: 1001, alias: 'conjugaison', name: 'Conjugaison', active: true },
      { id: 1002, alias: 'orthographe', name: 'Orthographe', active: true },
    ],
  },
  { id: 101, alias: 'math', name: 'Mathématiques', active: false },
  { id: 102, alias: 'histoire', name: 'Histoire', active: false },
  { id: 103, alias: 'physique', name: 'Physique', active: false },
];
