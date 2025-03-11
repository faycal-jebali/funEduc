import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CategoryItem,
  ClasseItem,
  classesList,
} from 'src/app/shared/mocks/global.mock';

@Component({
  selector: 'app-classes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Liste des Classes</h2>
    <ul class="nav-menu">
      <li *ngFor="let classe of classes">
        <a
          [routerLink]="['/classes', classe.id]"
          [attr.aria-disabled]="!classe.active"
          >{{ classe.name }}</a
        >
      </li>
    </ul>
  `,
  styleUrls: ['./classes-list.component.css'],
})
export class ClassesListComponent {
  classes: CategoryItem[] = classesList;
}
