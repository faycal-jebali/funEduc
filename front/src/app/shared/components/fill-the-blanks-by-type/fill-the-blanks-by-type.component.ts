import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExerciceItem } from '../../interfaces/exercices.new';
import { DictationComponent } from '../dictation/dictation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fill-the-blanks-by-type',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DictationComponent,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './fill-the-blanks-by-type.component.html',
  styleUrls: ['./fill-the-blanks-by-type.component.css'],
})
export class FillTheBlanksByTypeComponent implements OnInit {
  @Input() exercices: ExerciceItem[] = [];

  exerciceForm: FormGroup;
  feedback: { [key: string]: string } = {};
  successAnimation = false;
  showCorrection = false;

  constructor(private fb: FormBuilder) {
    this.exerciceForm = this.fb.group({});
  }

  ngOnInit() {
    if (this.exercices?.length && this.exercices?.length > 0) {
      this.exercices?.forEach((exercice: ExerciceItem, index) => {
        if (exercice.type === 'matching') {
          const matchGroup = this.fb.group({});
          Object.keys(exercice.correct_answer).forEach((key) => {
            matchGroup.addControl(key, this.fb.control(null));
          });
          this.exerciceForm.addControl('answer' + index, matchGroup);
        } else {
          this.exerciceForm.addControl('answer' + index, this.fb.control(null));
        }
      });
    } else {
      console.log('liste exercices vide!');
    }
  }

  getMatchingGroup(index: number): FormGroup {
    return this.exerciceForm.get('answer' + index) as FormGroup;
  }

  checkAnswers() {
    let allCorrect = true;
    if (this.exercices?.length && this.exercices?.length > 0) {
      this.exercices.forEach((exercice, index) => {
        if (
          exercice.type === 'matching' &&
          typeof exercice.correct_answer === 'object'
        ) {
          let correctPairs = 0;

          Object.keys(exercice.correct_answer).forEach((key) => {
            const userAnswer = this.exerciceForm.get([
              'answer' + index,
              key,
            ])?.value;

            if (
              typeof exercice.correct_answer === 'object' &&
              exercice.correct_answer !== null &&
              key in exercice.correct_answer
            ) {
              if (
                userAnswer ===
                (exercice.correct_answer as { [key: string]: string })[key]
              ) {
                correctPairs++;
              }
            }
          });

          this.feedback['answer' + index] =
            correctPairs === Object.keys(exercice.correct_answer).length
              ? '✅ Bravo !'
              : '❌ Oups !';
          if (correctPairs !== Object.keys(exercice.correct_answer).length)
            allCorrect = false;
        } else {
          const userAnswer = this.exerciceForm.get('answer' + index)?.value;
          this.feedback['answer' + index] =
            userAnswer === exercice.correct_answer ? '✅ Bravo !' : '❌ Oups !';

          if (this.feedback['answer' + index] !== '✅ Bravo !')
            allCorrect = false;
        }
      });
    }
    this.successAnimation = allCorrect;
  }

  getTexetDictation(answer: any): string {
    return answer as string;
  }

  showCorrections() {
    this.showCorrection = true;
  }
}
