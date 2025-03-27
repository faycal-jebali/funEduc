import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { Router } from '@angular/router';
import { ExerciceItem } from 'src/app/shared/interfaces/exercices.new';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-sections-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css'],
})
export class SectionsListComponent {
  private exerciceSectionService = inject(ExerciceSectionService);
  private router = inject(Router);
  displayedColumns: string[] = [
    'title',
    'description',
    'created_at',
    'actions',
  ];
  dataSource: any[] = [];

  constructor() {
    const filter_id = { class_id: '18c7610c-9111-4711-a577-9fb33fcc65d5' };
    this.exerciceSectionService.getAllSections().subscribe((data) => {
      console.log('Sections filtrées :', data);
      this.dataSource = data.sections;
    });
  }

  editExercise(id: string) {
    this.router.navigate([`/section-exercice-form/${id}`]);
  }

  deleteExercise(id: string) {
    this.exerciceSectionService.deleteSectionWithExercices(id).subscribe({
      next: (data) => {
        console.log('data: ', data);

        this.router.navigate([`/my-space/sections`]);
      },
    });
  }
}
