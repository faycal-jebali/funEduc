import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../interfaces/exercice';

@Component({
  selector: 'app-fill-the-blanks-by-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './fill-the-blanks-by-type.component.html',
  styleUrls: ['./fill-the-blanks-by-type.component.css'],
})
export class FillTheBlanksByTypeComponent implements OnInit {
  @Input() exercises: Exercise[] = [];

  exerciseForm: FormGroup;
  feedback: { [key: string]: string } = {};
  successAnimation = false;
  showCorrection = false;

  constructor(private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({});
  }

  ngOnInit() {
    this.exercises.forEach((exercise, index) => {
      if (exercise.type === 'matching') {
        const matchGroup = this.fb.group({});
        Object.keys(exercise.correctAnswer).forEach((key) => {
          matchGroup.addControl(key, this.fb.control(null));
        });
        this.exerciseForm.addControl('answer' + index, matchGroup);
      } else {
        this.exerciseForm.addControl('answer' + index, this.fb.control(null));
      }
    });
  }

  getMatchingGroup(index: number): FormGroup {
    return this.exerciseForm.get('answer' + index) as FormGroup;
  }

  checkAnswers() {
    let allCorrect = true;

    this.exercises.forEach((exercise, index) => {
      if (
        exercise.type === 'matching' &&
        typeof exercise.correctAnswer === 'object'
      ) {
        let correctPairs = 0;

        Object.keys(exercise.correctAnswer).forEach((key) => {
          const userAnswer = this.exerciseForm.get([
            'answer' + index,
            key,
          ])?.value;

          if (
            typeof exercise.correctAnswer === 'object' &&
            exercise.correctAnswer !== null &&
            key in exercise.correctAnswer
          ) {
            if (
              userAnswer ===
              (exercise.correctAnswer as { [key: string]: string })[key]
            ) {
              correctPairs++;
            }
          }
        });

        this.feedback['answer' + index] =
          correctPairs === Object.keys(exercise.correctAnswer).length
            ? '✅ Bravo !'
            : '❌ Oups !';
        if (correctPairs !== Object.keys(exercise.correctAnswer).length)
          allCorrect = false;
      } else {
        const userAnswer = this.exerciseForm.get('answer' + index)?.value;
        this.feedback['answer' + index] =
          userAnswer === exercise.correctAnswer ? '✅ Bravo !' : '❌ Oups !';

        if (this.feedback['answer' + index] !== '✅ Bravo !')
          allCorrect = false;
      }
    });

    this.successAnimation = allCorrect;
  }

  showCorrections() {
    this.showCorrection = true;
  }
}
