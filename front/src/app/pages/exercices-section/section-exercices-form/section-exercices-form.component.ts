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
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { ExerciceService } from 'src/app/shared/services/exercices.service';
import { UserRole } from 'src/app/shared/interfaces/exercices.new';
import { FullStructureSubjectsService } from 'src/app/shared/services/full-structutre-subjects';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-section-exercice-form',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
    ],
    templateUrl: './section-exercices-form.component.html',
    styleUrls: ['./section-exercices-form.component.css']
})
export class SectionExercicesFormComponent implements OnInit {
  form: FormGroup;
  fullStructure: any[] = [];
  courses: any[] = [];
  sectionId: string | null = null;
  isEditing = false;

  selectedClassId: string = '';
  selectedCourseId: string = '';
  selectedCategoryId: string = '';
  selectedClass: any = null;
  selectedCourse: any = null;
  selectedCategory: any = null;

  private exercicesService = inject(ExerciceService);
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      section: this.fb.group({
        title: ['', Validators.required],
        description: [''],
        created_by: [UserRole.ADMIN],
        class_id: ['', Validators.required],
        lesson_id: ['', Validators.required],
        category_id: ['', Validators.required],
        subLesson_id: ['', Validators.required],
      }),
      exercices: this.fb.array([]),
    });

    this.onLessonChange();
    this.onClassChange();
    this.onCategoryChange();
  }

  ngOnInit() {
    this.getStructureSubjects();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.sectionId = params.get('sectionId');
      if (this.sectionId) {
        this.isEditing = true;
        this.loadSectionData(this.sectionId);
      }
    });
  }

  getStructureSubjects(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        this.fullStructure = data;
        this.courses = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des leçons:', err);
      },
    });
  }

  // Charger les données de la section en mode édition
  loadSectionData(sectionId: string) {
    this.exerciceSectionService.getSectionWithExercices(sectionId).subscribe({
      next: (data) => {
        this.form.patchValue({ section: data.section });

        // Gestion des sélections dynamiques
        this.selectedClassId = data.section.class_id;
        this.selectedClass = this.fullStructure.find(
          (classe) => classe.id === this.selectedClassId
        );

        this.selectedCourseId = data.section.lesson_id;
        this.selectedCourse = this.selectedClass?.children.find(
          (course: any) => course.id === this.selectedCourseId
        );

        this.selectedCategoryId = data.section.category_id;
        this.selectedCategory = this.selectedCourse?.children.find(
          (category: any) => category.id === this.selectedCategoryId
        );

        // Remplissage des exercices
        this.exercices.clear();
        data.exercices.forEach((exercice: any) => {
          this.exercices.push(this.createExerciceForm(exercice));
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la section:', err);
      },
    });
  }

  onClassChange(): void {
    this.form
      .get('section.class_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.selectedClassId = data;
        this.selectedClass = this.fullStructure.find(
          (classe) => classe.id === this.selectedClassId
        );
        this.selectedCourseId = '';
        this.selectedCategoryId = '';
        this.selectedCourse = null;
        this.selectedCategory = null;
      });
  }

  onLessonChange(): void {
    this.form
      .get('section.lesson_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.selectedCourseId = data;
        this.selectedCourse = this.selectedClass?.children.find(
          (course: any) => course.id === this.selectedCourseId
        );
        this.selectedCategoryId = '';
        this.selectedCategory = null;
      });
  }

  onCategoryChange(): void {
    this.form
      .get('section.category_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.selectedCategoryId = data;
        this.selectedCategory = this.selectedCourse?.children.find(
          (category: any) => category.id === this.selectedCategoryId
        );
      });
  }

  get exercices(): FormArray {
    return this.form.get('exercices') as FormArray;
  }

  addExercice() {
    this.exercices.push(this.createExerciceForm());
  }

  removeExercice(index: number) {
    this.exercices.removeAt(index);
  }

  private createExerciceForm(exerciceData: any = {}): FormGroup {
    return this.fb.group({
      type: [exerciceData.type || 'fill-in-the-blank', Validators.required],
      consigne: [exerciceData.consigne || ''],
      question: [exerciceData.question || '', Validators.required],
      correct_answer: [exerciceData.correct_answer || '', Validators.required],
      options: this.fb.array(
        exerciceData.options
          ? exerciceData.options.map((opt: string) => new FormControl(opt))
          : []
      ),
      explanation: [exerciceData.explanation || ''],
      difficulty: [exerciceData.difficulty || 'easy', Validators.required],
      section_id: [exerciceData.section_id || ''],
    });
  }

  getOptions(exerciceIndex: number): FormArray {
    return this.exercices.at(exerciceIndex).get('options') as FormArray;
  }

  addOption(exerciceIndex: number) {
    this.getOptions(exerciceIndex).push(
      new FormControl('', Validators.required)
    );
  }

  removeOption(exerciceIndex: number, optionIndex: number) {
    this.getOptions(exerciceIndex).removeAt(optionIndex);
  }

  submit() {
    if (this.form.valid) {
      if (this.isEditing && this.sectionId) {
        this.updateSection(this.sectionId, this.form.value);
      } else {
        this.createSection(this.form.value);
      }
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

  private createSection(data: any) {
    this.exerciceSectionService.createSectionWithExercices(data).subscribe({
      next: () => {
        alert('Section et exercices créés avec succès !');
        this.router.navigate(['/my-space/sections']);
      },
      error: (error) => {
        alert("Erreur lors de l'enregistrement.");
        console.error(error);
      },
    });
  }

  private updateSection(sectionId: string, data: any) {
    this.exerciceSectionService
      .updateSectionWithExercices(sectionId, data)
      .subscribe({
        next: () => {
          alert('Section et exercices mis à jour avec succès !');
          this.router.navigate(['/my-space/sections']);
        },
        error: (error) => {
          alert('Erreur lors de la mise à jour.');
          console.error(error);
        },
      });
  }
}
