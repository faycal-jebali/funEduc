import { Component } from '@angular/core';
import { Exercise } from './shared/interfaces/exercice';
import { CategoryItem, subjectsList } from './shared/mocks/global.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;
}
