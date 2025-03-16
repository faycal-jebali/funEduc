import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../interfaces/exercice';
import { ExerciceItem } from '../../interfaces/exercices.new';

@Component({
  selector: 'app-fill-the-blanks-by-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './fill-the-blanks-by-type.component.html',
  styleUrls: ['./fill-the-blanks-by-type.component.css'],
})
export class FillTheBlanksByTypeComponent implements OnInit {
  @Input() exercices: ExerciceItem[] = [];

  exerciseForm: FormGroup;
  feedback: { [key: string]: string } = {};
  successAnimation = false;
  showCorrection = false;

  constructor(private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({});
  }

  ngOnInit() {
    if (this.exercices?.length && this.exercices?.length > 0) {
      this.exercices?.forEach((exercise: ExerciceItem, index) => {
        if (exercise.type === 'matching') {
          const matchGroup = this.fb.group({});
          Object.keys(exercise.correct_answer).forEach((key) => {
            matchGroup.addControl(key, this.fb.control(null));
          });
          this.exerciseForm.addControl('answer' + index, matchGroup);
        } else {
          this.exerciseForm.addControl('answer' + index, this.fb.control(null));
        }
      });
    } else {
      console.log('liste exercices vide!');
    }
  }

  getMatchingGroup(index: number): FormGroup {
    return this.exerciseForm.get('answer' + index) as FormGroup;
  }

  checkAnswers() {
    let allCorrect = true;
    if (this.exercices?.length && this.exercices?.length > 0) {
      this.exercices.forEach((exercise, index) => {
        if (
          exercise.type === 'matching' &&
          typeof exercise.correct_answer === 'object'
        ) {
          let correctPairs = 0;

          Object.keys(exercise.correct_answer).forEach((key) => {
            const userAnswer = this.exerciseForm.get([
              'answer' + index,
              key,
            ])?.value;

            if (
              typeof exercise.correct_answer === 'object' &&
              exercise.correct_answer !== null &&
              key in exercise.correct_answer
            ) {
              if (
                userAnswer ===
                (exercise.correct_answer as { [key: string]: string })[key]
              ) {
                correctPairs++;
              }
            }
          });

          this.feedback['answer' + index] =
            correctPairs === Object.keys(exercise.correct_answer).length
              ? '✅ Bravo !'
              : '❌ Oups !';
          if (correctPairs !== Object.keys(exercise.correct_answer).length)
            allCorrect = false;
        } else {
          const userAnswer = this.exerciseForm.get('answer' + index)?.value;
          this.feedback['answer' + index] =
            userAnswer === exercise.correct_answer ? '✅ Bravo !' : '❌ Oups !';

          if (this.feedback['answer' + index] !== '✅ Bravo !')
            allCorrect = false;
        }
      });
    }
    this.successAnimation = allCorrect;
  }

  showCorrections() {
    this.showCorrection = true;
  }
}
