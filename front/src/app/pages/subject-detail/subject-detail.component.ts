import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FillTheBlanksByTypeComponent } from 'src/app/shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import { ExerciceSectionItem } from 'src/app/shared/interfaces/exercices.new';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';

@Component({
  selector: 'app-subject-detail',
  imports: [CommonModule, MatTabsModule, FillTheBlanksByTypeComponent],
  templateUrl: 'subject-detail.component.html',
})
export class SubjectDetailComponent implements OnInit {
  classId: string | null;
  categoryId: string | null;
  lessonId: string | null;
  subLessonId: string | null;
  moduleId: string | null;
  exercicesSectionList: ExerciceSectionItem[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly exerciceSectionService: ExerciceSectionService
  ) {
    this.classId = this.route.snapshot.paramMap.get('classId');
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.lessonId = this.route.snapshot.paramMap.get('lessonId');
    this.subLessonId = this.route.snapshot.paramMap.get('subLessonId');
    this.moduleId = this.route.snapshot.paramMap.get('moduleId');
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.classId = this.route.snapshot.paramMap.get('classId');
          this.categoryId = this.route.snapshot.paramMap.get('categoryId');
          this.lessonId = this.route.snapshot.paramMap.get('lessonId');
          this.subLessonId = this.route.snapshot.paramMap.get('subLessonId');
          this.moduleId = this.route.snapshot.paramMap.get('moduleId');
          const filterId =
            this.subLessonId ||
            this.categoryId ||
            this.lessonId ||
            this.moduleId;
          return this.exerciceSectionService.getExercicesBySection(
            this.classId,
            filterId
          );
        })
      )
      .subscribe({
        next: (data: ExerciceSectionItem[]) => {
          console.log('DATA : ', data);

          this.exercicesSectionList = data;
        },
        error: (error) => {
          console.log('Erreur récupération sections avec exercices : ', error);
        },
      });
  }
}
