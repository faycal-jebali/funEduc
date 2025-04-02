import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import {
  CategoryItem,
  SubjectItem,
  subjectsList,
} from 'src/app/shared/mocks/global.mock';

@Component({
    selector: 'app-subjects-list',
    imports: [CommonModule, RouterModule],
    template: `
    <h2>Matières de la classe {{ classId }}</h2>
    <ul class="nav-menu">
      <li *ngFor="let subject of subjects">
        <a
          [routerLink]="['/classes', classId, 'subjects', subject.id]"
          [attr.aria-disabled]="!subject.active"
          >{{ subject.name }}</a
        >
        <ul
          class="nav-menu"
          *ngIf="subject.children && subject.children.length > 0"
        >
          <li *ngFor="let lesson of subject.children">
            <a
              [routerLink]="[
                '/classes',
                classId,
                'subjects',
                subject.id,
                'lesson',
                lesson.id
              ]"
              [attr.aria-disabled]="!lesson.active"
              >{{ lesson.name }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  `
})
export class SubjectsListComponent {
  classId: string | null;
  subjects: CategoryItem[] = subjectsList;

  constructor(private route: ActivatedRoute) {
    this.classId = this.route.snapshot.paramMap.get('id');
  }
}
