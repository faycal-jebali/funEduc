import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { CategoryItem, subjectsList } from '../../mocks/global.mock';
import { FullStructureSubjectsService } from '../../services/full-structutre-subjects';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    selector: 'app-sidebar',
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        RouterModule,
        MatIconModule,
        MatBadgeModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = false;
  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;

  fullStructure: any;

  openMenus: Set<number> = new Set();
  constructor(
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        // this.fullStructure = data;
        this.fullStructure = this.sortItems(data);
        console.log('Structure Data : ', data);
      },
    });
  }

  // Fonction récursive pour trier les éléments
  sortItems(items: any[]) {
    items.sort((a, b) => a.order - b.order); // Trier par ordre croissant de `order`

    // Pour chaque élément, trier ses enfants, si existants
    items.forEach((item) => {
      if (item.children && item.children.length > 0) {
        this.sortItems(item.children); // Appel récursif pour trier les sous-éléments
      }
    });
    return items;
  }

  // Fonction pour basculer l'état de la sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

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
  goToClassDetail(id: string) {
    this.router.navigate(['/classes', id]);
  }
}
