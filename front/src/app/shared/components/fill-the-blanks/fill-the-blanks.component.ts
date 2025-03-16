import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Howl } from 'howler';
import { Exercise } from '../../interfaces/exercice';

@Component({
  selector: 'app-fill-the-blanks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fill-the-blanks.component.html',
  styleUrls: ['./fill-the-blanks.component.css'],
})
export class FillTheBlanksComponent {
  exerciseForm!: FormGroup;
  exercices: Exercise[] = [
    {
      sentence: 'Le chat _______ sur le canapé.',
      options: ['mange', 'manger', 'mangé'],
      correctAnswer: 'mange',
    },
    {
      sentence: "Nous _______ à l'école chaque matin.",
      options: ['allez', 'allons', 'aller'],
      correctAnswer: 'allons',
    },
    {
      sentence: 'Tu _______ très bien en français.',
      options: ['parles', 'parle', 'parler'],
      correctAnswer: 'parles',
    },
    {
      sentence: 'Elle _______ une pomme.',
      options: ['mange', 'manger', 'mangé'],
      correctAnswer: 'mange',
    },
    {
      sentence: 'Ils _______ au parc tous les dimanches.',
      options: ['jouent', 'jouer', 'jouaient'],
      correctAnswer: 'jouent',
    },
    {
      sentence: 'Je _______ mes devoirs avant de sortir.',
      options: ['fais', 'faire', 'fait'],
      correctAnswer: 'fais',
    },
  ];
  exercices2: Exercise[] = [
    {
      sentence: "L'enfant _______ les pieds nus.",
      options: ['marchait', 'buvaient', 'perdent'],
      correctAnswer: 'marchait',
    },
    {
      sentence: 'Cette salle leur _______ d’entrepôt.',
      options: ['servira', 'perdent', 'marchait'],
      correctAnswer: 'servira',
    },
    {
      sentence: 'Le jardinier _______ de la pelouse.',
      options: ['sèmera', 'marchait', 'buvaient'],
      correctAnswer: 'sèmera',
    },
  ];
  feedback: { [key: string]: string } = {};
  showCorrection = false;
  successAnimation = false;
  sound: Howl;

  constructor(private fb: FormBuilder) {
    this.sound = new Howl({
      src: ['assets/sounds/son.mp3'],
      onend: () => {
        console.log('Le son est terminé.');
      },
    });
  }

  ngOnInit() {
    this.exerciseForm = this.fb.group({});
    this.exercices.forEach((_, index) => {
      this.exerciseForm.addControl('answer' + index, this.fb.control(''));
    });
  }

  playSound(isCorrect: boolean) {
    const sound = new Howl({
      src: [
        isCorrect ? 'assets/sounds/correct.mp3' : 'assets/sounds/wrong.mp3',
      ],
    });
    sound.play();
  }

  checkAnswers() {
    this.showCorrection = false;
    let allCorrect = true;
    this.exercices.forEach((ex, index) => {
      const userAnswer = this.exerciseForm.get('answer' + index)?.value;
      const isCorrect = userAnswer === ex.correctAnswer;
      this.feedback['answer' + index] = isCorrect ? '✅ Bravo !' : '❌ Oups !';
      if (!isCorrect) allCorrect = false;
      this.playSound(isCorrect);
    });
    if (allCorrect) {
      this.successAnimation = true;
      setTimeout(() => (this.successAnimation = false), 3000);
    }
  }

  showCorrections() {
    this.showCorrection = true;
  }
}
