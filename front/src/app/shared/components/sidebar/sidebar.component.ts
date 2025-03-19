import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CategoryItem, subjectsList } from '../../mocks/global.mock';
import { FullStructureSubjectsService } from '../../services/full-structutre-subjects';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = true;
  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;
  constructor(
    private readonly fullStructureSubjectsService: FullStructureSubjectsService
  ) {}

  ngOnInit(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        console.log('Structure Data : ', data);
      },
    });
  }
  // Fonction pour basculer l'état de la sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
