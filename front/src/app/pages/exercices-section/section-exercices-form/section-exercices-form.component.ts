import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { ExerciceService } from 'src/app/shared/services/exercices.service';
import { UserRole } from 'src/app/shared/interfaces/exercices.new';

@Component({
  selector: 'app-section-exercice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './section-exercices-form.component.html',
  styleUrls: ['./section-exercices-form.component.css'],
})
export class SectionExercicesFormComponent implements OnInit {
  form: FormGroup;
  private exercicesService = inject(ExerciceService);
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      section: this.fb.group({
        title: ['', Validators.required],
        description: [''],
        created_by: [UserRole.ADMIN],
      }),
      exercices: this.fb.array([]), // Liste des exercices
    });
  }

  ngOnInit() {}

  // Getter pour récupérer les exercices
  get exercices(): FormArray {
    return this.form.get('exercices') as FormArray;
  }

  // Ajouter un exercice
  addExercice() {
    this.exercices.push(this.createExerciceForm());
  }

  // Supprimer un exercice
  removeExercice(index: number) {
    this.exercices.removeAt(index);
  }

  // Créer un formulaire d'exercice
  private createExerciceForm(): FormGroup {
    return this.fb.group({
      type: ['fill-in-the-blank', Validators.required],
      question: ['', Validators.required],
      correct_answer: ['', Validators.required],
      options: this.fb.array([]), // Options dynamiques pour les questions à choix multiple
      explanation: [''],
      difficulty: ['easy', Validators.required],
      section_id: [''],
    });
  }

  // Getter pour récupérer les options d'un exercice donné
  getOptions(exerciceIndex: number): FormArray {
    return this.exercices.at(exerciceIndex).get('options') as FormArray;
  }

  // Ajouter une option à un exercice spécifique
  addOption(exerciceIndex: number) {
    this.getOptions(exerciceIndex).push(
      new FormControl('', Validators.required)
    );
  }

  // Supprimer une option d'un exercice spécifique
  removeOption(exerciceIndex: number, optionIndex: number) {
    this.getOptions(exerciceIndex).removeAt(optionIndex);
  }

  // Soumettre le formulaire
  submit() {
    if (this.form.valid) {
      this.exerciceSectionService
        .createSectionWithExercices(this.form.value)
        .subscribe(
          () => {
            alert('Section et exercices créés avec succès !');
            this.router.navigate(['/']);
          },
          (error) => {
            alert("Erreur lors de l'enregistrement.");
            console.error(error);
          }
        );
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}
