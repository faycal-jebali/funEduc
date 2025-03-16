import { Component } from '@angular/core';
import { Exercise } from './shared/interfaces/exercice';
import { CategoryItem, subjectsList } from './shared/mocks/global.mock';
import { ExerciceService } from './shared/services/exercices.service';
import { ExerciceSectionService } from './shared/services/exercices-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly exercicesService: ExerciceService,
    private readonly exerciceSectionService: ExerciceSectionService
  ) {
    this.exercicesService.getExercices().subscribe({
      next: (data) => {
        console.log('all exercices data : ', data);
      },
      error: (error) => {
        console.log('all exercices error : ', error);
      },
    });

    this.exerciceSectionService.getExercicesBySection().subscribe({
      next: (data) => {
        console.log('all section with exercices data : ', data);
      },
      error: (error) => {
        console.log('all section with exercices error : ', error);
      },
    });
  }

  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;
}
