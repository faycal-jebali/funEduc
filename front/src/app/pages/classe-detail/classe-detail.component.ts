import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FullStructureSubjectsService } from 'src/app/shared/services/full-structutre-subjects';

@Component({
  selector: 'app-classe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classe-detail.component.html',
  styleUrls: ['./classe-detail.component.css'],
})
export class ClasseDetailComponent {
  fullStructure: any;
  chaptersList: any;
  selectedClass: any;
  selectedClassId!: string | null;

  constructor(
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.selectedClassId = params.get('id'); // Récupération directe
      console.log('ID reçu dans l’enfant :', this.selectedClassId);
    });
  }

  ngOnInit(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        this.fullStructure = data;
        console.log('Structure Data classe details : ', data);
        this.selectedClass = this.fullStructure.find(
          (classe: any) => classe.id === this.selectedClassId
        ).lesson_classes_funeduc;

        console.log('selectedClass : ', this.selectedClass);
      },
    });
  }

  goToClassDetail(id: string) {
    this.router.navigate(['/classes', id]);
  }
}
