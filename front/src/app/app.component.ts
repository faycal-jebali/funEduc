import { Component } from '@angular/core';
import { Exercise } from './shared/interfaces/exercice';
import { CategoryItem, subjectsList } from './shared/mocks/global.mock';
import { ExerciceService } from './shared/services/exercices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly exercicesService: ExerciceService) {
    this.exercicesService.getExercices().subscribe({
      next: (data) => {
        console.log('data : ', data);
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }

  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;
}
