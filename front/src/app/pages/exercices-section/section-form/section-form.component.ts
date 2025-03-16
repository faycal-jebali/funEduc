import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceSectionService } from 'src/app/shared/services/exercices-section.service';
import { UserRole } from 'src/app/shared/interfaces/exercices.new';

@Component({
  selector: 'app-section-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css'],
})
export class SectionFormComponent {
  sectionForm: FormGroup;
  private exercicesService = inject(ExerciceSectionService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.sectionForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  createSection() {
    if (this.sectionForm.valid) {
      const payload = { ...this.sectionForm.value, created_by: UserRole.ADMIN };
      this.exercicesService.createSection(payload).subscribe({
        next: (response) => {
          alert('Section créée avec succès !');
          this.sectionForm.reset();
          this.router.navigate(['/']); // Rediriger ou afficher une liste des sections
        },
        error: (error) => {
          alert('Erreur lors de la création de la section.');
          console.error(error);
        },
      });
    } else {
      alert('Le titre de la section est requis.');
    }
  }
}
