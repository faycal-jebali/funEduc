import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FillTheBlanksByTypeComponent } from 'src/app/shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import {
  conjugaisonEx1,
  conjugaisonEx2,
  conjugaisonEx3,
  ex1,
  ex2,
  ex3,
} from 'src/app/shared/mocks/ce1/conjugaison/present.mock';
import { CategoryItem, subjectsList } from 'src/app/shared/mocks/global.mock';
import { UTILS } from 'src/app/shared/utils/utils';
import {
  AdjectifsExercices,
  exercice1,
} from 'src/app/shared/mocks/ce1/orthographe/adjectifs.mock';
import { filter } from 'rxjs';

import { ExerciceService } from 'src/app/shared/services/exercices.service';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { ExerciceSectionItem } from 'src/app/shared/interfaces/exercices.new';

@Component({
  selector: 'app-subject-detail',
  standalone: true,
  imports: [CommonModule, MatTabsModule, FillTheBlanksByTypeComponent],
  templateUrl: 'subject-detail.component.html',
  // template: ` <h2>Détails de la matière {{ subjectId }}</h2> `,
})
export class SubjectDetailComponent implements OnInit {
  classId: number;
  subjectId: number;
  lessonId: number;
  // subject: CategoryItem | null;
  exercicesSectionList: ExerciceSectionItem[] = [];
  /*conjugaisonList: ExerciceSectionItem[] = [
    conjugaisonEx1,
    conjugaisonEx2,
    conjugaisonEx3,
  ];
  orthographeList: ExerciceSectionItem[] = [AdjectifsExercices];*/

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly exercicesService: ExerciceService,
    private readonly exerciceSectionService: ExerciceSectionService
  ) {
    this.classId = Number(this.route.snapshot.paramMap.get('classId'));
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    /*
    this.subject = UTILS.findById<CategoryItem>(subjectsList, this.subjectId);
    this.lesson = UTILS.findById<CategoryItem>(subjectsList, this.lessonId);

    if (this.lesson?.alias === 'conjugaison') {
      this.lesson.exercices = this.conjugaisonList;
    }

    if (this.lesson?.alias === 'orthographe') {
      this.lesson.exercices = this.orthographeList;
    }
*/
    this.exerciceSectionService.getExercicesBySection().subscribe({
      next: (data: ExerciceSectionItem[]) => {
        console.log('all section with exercices data : ', data);
        this.exercicesSectionList = data;
      },
      error: (error) => {
        console.log('all section with exercices error : ', error);
      },
    });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.route.params.subscribe((params) => {
          this.loadData();
        });
      });
  }

  loadData(): void {
    this.classId = Number(this.route.snapshot.paramMap.get('classId'));
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    this.lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    // Chargez les données en fonction des ids (classId, subjectId, lessonId)
    console.log(
      'Chargement des données avec les ids:',
      this.classId,
      this.subjectId,
      this.lessonId
    );
    // Ajoutez ici la logique pour appeler votre service et charger les données
    /*
    this.subject = UTILS.findById<CategoryItem>(subjectsList, this.subjectId);
    this.lesson = UTILS.findById<CategoryItem>(subjectsList, this.lessonId);

    if (this.lesson?.alias === 'conjugaison') {
      this.lesson.exercices = this.conjugaisonList;
    }

    if (this.lesson?.alias === 'orthographe') {
      this.lesson.exercices = this.orthographeList;
    }
      */
  }
}
