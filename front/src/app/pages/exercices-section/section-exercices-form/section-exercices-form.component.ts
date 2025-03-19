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
import { FullStructureSubjectsService } from 'src/app/shared/services/full-structutre-subjects';

@Component({
  selector: 'app-section-exercice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './section-exercices-form.component.html',
  styleUrls: ['./section-exercices-form.component.css'],
})
export class SectionExercicesFormComponent implements OnInit {
  form: FormGroup;
  courses: any[] = []; // Pour stocker la structure des leçons
  selectedCourseId: string = ''; // ID de la leçon sélectionnée
  selectedCategoryId: string = ''; // ID de la catégorie sélectionnée
  selectedSubLessonId: string = ''; // ID de la sous-leçon sélectionnée
  selectedCourse: any = null; // Détails de la leçon sélectionnée
  selectedCategory: any = null; // Détails de la catégorie sélectionnée

  private exercicesService = inject(ExerciceService);
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private readonly fullStructureSubjectsService: FullStructureSubjectsService
  ) {
    this.form = this.fb.group({
      section: this.fb.group({
        title: ['', Validators.required],
        description: [''],
        created_by: [UserRole.ADMIN], // TODO to be dynamic
        lesson_id: ['', Validators.required], // Sélection de la leçon
        category_id: ['', Validators.required], // Sélection de la catégorie
        subLesson_id: ['', Validators.required], // Sélection de la sous-leçon
      }),
      exercices: this.fb.array([]), // Liste des exercices
    });

    this.onLessonChange();
    this.onCategoryChange();
  }

  ngOnInit() {
    this.getStructureSubjects();
  }

  getStructureSubjects(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        this.courses = data;
        console.log('this.courses : ', this.courses);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des leçons:', err);
      },
    });
  }

  // Mettre à jour la catégorie sélectionnée en fonction de la leçon
  onLessonChange(): void {
    this.form
      ?.get('section')
      ?.get('lesson_id')
      ?.valueChanges.subscribe({
        next: (data) => {
          this.selectedCourseId = data;

          this.selectedCourse = this.courses.find(
            (course) => course.id === this.selectedCourseId
          );

          this.selectedCategoryId = ''; // Réinitialiser la catégorie
          this.selectedSubLessonId = ''; // Réinitialiser la sous-leçon
          this.selectedCategory = null; // Réinitialiser la catégorie sélectionnée
        },
      });
  }

  // Mettre à jour la sous-leçon sélectionnée en fonction de la catégorie
  onCategoryChange(): void {
    this.form
      ?.get('section')
      ?.get('category_id')
      ?.valueChanges.subscribe({
        next: (data) => {
          this.selectedCategoryId = data;

          this.selectedCategory =
            this.selectedCourse?.lesson_categories_funeduc.find(
              (category: any) => category.id === this.selectedCategoryId
            );
          this.selectedSubLessonId = ''; // Réinitialiser la sous-leçon
        },
      });
  }

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
            // this.router.navigate(['/']);
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
