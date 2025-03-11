import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Détails de la Classe {{ classId }}</h2>
    <a [routerLink]="['/classes', classId, 'subjects']">Voir les matières</a>
  `,
})
export class ClassDetailComponent {
  classId: string | null;

  constructor(private route: ActivatedRoute) {
    this.classId = this.route.snapshot.paramMap.get('classId');
  }
}
