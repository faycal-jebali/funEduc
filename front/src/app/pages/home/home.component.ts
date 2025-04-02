import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullStructureSubjectsService } from 'src/app/shared/services/full-structutre-subjects';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DictationComponent } from 'src/app/shared/components/dictation/dictation.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home',
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fullStructure: any;
  constructor(
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly router: Router
  ) {}
  openMenus: Set<number> = new Set();

  toggleMenu(id: number): void {
    if (this.openMenus.has(id)) {
      this.openMenus.delete(id);
    } else {
      this.openMenus.add(id);
    }
  }

  isMenuOpen(id: number): boolean {
    return this.openMenus.has(id);
  }
  ngOnInit(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        this.fullStructure = data;
        console.log('Structure Data : ', data);
      },
    });
  }

  goToClassDetail(id: string) {
    this.router.navigate(['/classes', id]);
  }
}
