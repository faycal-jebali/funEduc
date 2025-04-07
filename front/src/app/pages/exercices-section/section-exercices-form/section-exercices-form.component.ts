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
import { ModulesHierarchyService } from 'src/app/shared/services/modules-hierarchy.service';
import { ModuleSelectorComponent } from 'src/app/shared/components/module-selector/module-selector.component';
import { Observable, switchMap, tap } from 'rxjs';

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
    ModuleSelectorComponent,
  ],
  templateUrl: './section-exercices-form.component.html',
  styleUrls: ['./section-exercices-form.component.css'],
})
export class SectionExercicesFormComponent implements OnInit {
  form: FormGroup;
  fullStructure: any[] = [];
  fullModules: any[] = [];
  courses: any[] = [];
  sectionId: string | null = null;
  isEditing = false;

  selectedClassId: string = '';
  selectedCourseId: string = '';
  selectedCategoryId: string = '';
  selectedModuleId: string = '';
  selectedClass: any = null;
  selectedCourse: any = null;
  selectedCategory: any = null;
  selectedModule: any = null;

  private exercicesService = inject(ExerciceService);
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly modulesHierarchyService: ModulesHierarchyService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      section: this.fb.group({
        title: ['', Validators.required],
        description: [''],
        created_by: [UserRole.ADMIN],
        class_id: [null, Validators.required],
        module_id: [null], // <- AJOUT ICI
        lesson_id: [null],
        category_id: [null],
        subLesson_id: [null],
      }),
      exercices: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.getStructureSubjects();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.sectionId = params.get('sectionId');
      console.log('******params***** : ', params);

      if (this.sectionId) {
        this.isEditing = true;
        this.loadSectionData(this.sectionId);
      } else {
        this.getModulesHierarchy().subscribe();
      }
    });
  }

  getModulesHierarchy(): Observable<any> {
    return this.modulesHierarchyService.getFullStructure().pipe(
      tap((modules) => {
        console.log('***NEW fullModules Data : ', modules);
        this.fullModules = modules;
        this.onLessonChange();
        this.onClassChange();
        this.onCategoryChange();
      })
    );
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
    this.getModulesHierarchy()
      .pipe(
        tap(() => console.log('Modules hiérarchie chargée')),
        switchMap(() =>
          this.exerciceSectionService.getSectionWithExercices(sectionId)
        )
      )
      .subscribe({
        next: (data: any) => {
          this.handelInitFormModeEdit(data);
        },
        error: (error: Error) => {
          console.error('Erreur lors du chargement de la section:', error);
        },
      });

    // this.getModulesHierarchy();

    // this.exerciceSectionService.getSectionWithExercices(sectionId).subscribe({
    //   next: (data) => {
    //     this.handelInitFormModeEdit(data);
    //   },
    //   error: (err) => {
    //     console.error('Erreur lors du chargement de la section:', err);
    //   },
    // });
  }

  handelInitFormModeEdit(data: any) {
    console.log('***DATA section : *****', data);

    this.form.patchValue({ section: data.section });

    console.log('form value : ', this.form.value);

    const classId = this.form.get('section.class_id')?.value;
    console.log('classId : ', classId);

    if (classId && this.fullModules.length > 0) {
      this.updateFilteredModules(classId); // Tu mets à jour filteredModules toi-même
    }

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
    data.exercices.forEach((exerciceForm: any) => {
      this.exercices.push(this.createExerciceForm(exerciceForm));
      const index = this.exercices.length - 1;
      this.handleQuestionVisibility(index);
    });
  }

  updateFilteredModules(data: any) {
    console.log('****updateFilteredModules*****');
    console.log('fullModules : ', this.fullModules);

    this.selectedClassId = data;
    this.selectedClass = this.fullStructure.find(
      (classe) => classe.id === this.selectedClassId
    );

    const selectedModuleFiltred = this.fullModules.find(
      (classe) => classe.id === this.selectedClassId
    ).children;

    this.selectedModule = selectedModuleFiltred ? selectedModuleFiltred : [];
  }

  onClassChange(): void {
    console.log('****classe changes****');

    const lessonIdControl = this.form.get(['section', 'lesson_id']);
    const categoryIdControl = this.form.get(['section', 'category_id']);
    const subLessonIdControl = this.form.get(['section', 'subLesson_id']);
    const moduleIdControl = this.form.get(['section', 'module_id']);
    this.form
      .get('section.class_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        console.log('******onClassChange subscribe******');
        this.updateFilteredModules(data);

        if (
          this.selectedClass?.children &&
          this.selectedClass?.children?.length > 0
        ) {
          lessonIdControl?.setValidators([Validators.required]);
        } else {
          lessonIdControl?.clearValidators();
          categoryIdControl?.clearValidators();
          subLessonIdControl?.clearValidators();
        }
        this.selectedCourseId = '';
        this.selectedCategoryId = '';
        this.selectedCourse = null;
        this.selectedCategory = null;
      });
  }

  onLessonChange(): void {
    const categoryIdControl = this.form.get(['section', 'category_id']);
    const subLessonIdControl = this.form.get(['section', 'subLesson_id']);
    this.form
      .get('section.lesson_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.selectedCourseId = data;
        this.selectedCourse = this.selectedClass?.children.find(
          (course: any) => course.id === this.selectedCourseId
        );

        if (
          this.selectedClass?.children &&
          this.selectedClass?.children?.length > 0
        ) {
          categoryIdControl?.setValidators([Validators.required]);
        } else {
          categoryIdControl?.clearValidators();
          subLessonIdControl?.clearValidators();
        }
        this.selectedCategoryId = '';
        this.selectedCategory = null;
      });
  }

  onCategoryChange(): void {
    const categoryIdControl = this.form.get(['section', 'category_id']);
    const subLessonIdControl = this.form.get(['section', 'subLesson_id']);
    this.form
      .get('section.category_id')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.selectedCategoryId = data;
        this.selectedCategory = this.selectedCourse?.children.find(
          (category: any) => category.id === this.selectedCategoryId
        );

        if (
          this.selectedCategory?.children &&
          this.selectedCategory?.children?.length > 0
        ) {
          subLessonIdControl?.setValidators([Validators.required]);
        } else {
          categoryIdControl?.clearValidators();
        }
      });
  }

  get exercices(): FormArray {
    return this.form.get('exercices') as FormArray;
  }

  addExercice() {
    const exerciceForm = this.createExerciceForm();
    this.exercices.push(exerciceForm);
    const index = this.exercices.length - 1;
    this.handleQuestionVisibility(index);
  }

  removeExercice(index: number) {
    this.exercices.removeAt(index);
  }

  private createExerciceForm(exerciceData: any = {}): FormGroup {
    return this.fb.group({
      type: [exerciceData.type || 'fill-in-the-blank', Validators.required],
      consigne: [exerciceData.consigne || ''],
      question: [exerciceData.question || ''],
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

  // Vérifier si "question" doit être visible ou non selon le type
  handleQuestionVisibility(exerciceIndex: number) {
    console.log('exerciceForm: ', exerciceIndex);
    console.log(
      'exerciceForm.get(type): ',
      this.exercices.at(exerciceIndex).get('type')?.value
    );
    setTimeout(() => {
      this.exercices
        .at(exerciceIndex)
        .get('type')
        ?.valueChanges.subscribe((selectedType) => {
          console.log('selectedType : ', selectedType);

          const questionControl = this.exercices
            .at(exerciceIndex)
            .get('question');
          console.log('questionControl : ', questionControl);

          if (!questionControl) {
            return;
          }
          if (selectedType !== 'dictation') {
            questionControl.setValidators([Validators.required]); // Rendre obligatoire
            questionControl.enable(); // Activer
          } else {
            questionControl.clearValidators(); // Supprimer la validation
            questionControl.disable(); // Désactiver
            questionControl.setValue(''); // Réinitialiser
          }

          questionControl.updateValueAndValidity();
        });
    }, 50);
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
    console.log('Form : ', this.form);

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
