// src/app/exercices/exercices-create/exercices-create.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { ExerciceService } from 'src/app/shared/services/exercices.service';

@Component({
  selector: 'app-exercice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exercice-form.component.html',
  styleUrls: ['./exercice-form.component.css'],
})
export class ExerciceFormComponent implements OnInit {
  exerciceForm: FormGroup;
  sections: any[] = [];

  private exercicesService = inject(ExerciceService);
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.exerciceForm = this.fb.group({
      type: ['fill-in-the-blank', [Validators.required]],
      question: ['', [Validators.required]],
      correct_answer: ['', [Validators.required]],
      options: this.fb.array([]), // Champs dynamiques pour les options
      explanation: [''],
      difficulty: ['easy', [Validators.required]],
      created_by: ['teacher', [Validators.required]],
      section_id: ['', [Validators.required]],
    });

    // Gérer l'affichage dynamique des options selon le type
    this.exerciceForm.get('type')?.valueChanges.subscribe((value) => {
      if (value === 'multiple-choice') {
        this.addOption(); // Ajouter au moins une option par défaut
      } else {
        this.clearOptions();
      }
    });
  }

  ngOnInit() {
    this.loadSections();
  }

  loadSections() {
    this.exerciceSectionService.getExercicesBySection().subscribe((data) => {
      console.log('Sections chargées:', data);
      this.sections = data;
    });
  }

  // Getter pour récupérer le FormArray "options"
  get options(): FormArray {
    return this.exerciceForm.get('options') as FormArray;
  }

  // Ajouter une nouvelle option
  addOption(): void {
    this.options.push(new FormControl('', Validators.required));
  }

  // Supprimer une option
  removeOption(index: number): void {
    this.options.removeAt(index);
  }

  // Effacer toutes les options
  clearOptions(): void {
    this.options.clear();
  }

  createExercice() {
    if (this.exerciceForm.valid) {
      this.exercicesService.createExercice(this.exerciceForm.value).subscribe(
        (response) => {
          alert('Exercice créé avec succès !');
          this.exerciceForm.reset();
          this.router.navigate(['/']); // Redirection après création
        },
        (error) => {
          alert("Erreur lors de la création de l'exercice.");
          console.error(error);
        }
      );
    } else {
      alert('Tous les champs sont requis.');
    }
  }
}
