import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { CategoryItem, subjectsList } from '../../mocks/global.mock';
import { FullStructureSubjectsService } from '../../services/full-structutre-subjects';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModulesHierarchyService } from '../../services/modules-hierarchy.service';
import { AuthService } from '../../services/auth.service';

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
    MatProgressSpinnerModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = false;
  isLoading = false;
  title = 'front';
  classId = 2;
  subjects: CategoryItem[] = subjectsList;

  fullStructure: any;
  newfullStructure: any;

  openMenus: Set<number> = new Set();
  constructor(
    private readonly fullStructureSubjectsService: FullStructureSubjectsService,
    private readonly modulesHierarchyService: ModulesHierarchyService,
    private readonly router: Router,
    protected readonly authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Afficher le loader au début de la navigation
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading = false; // Cacher le loader après la fin du chargement
        }, 1000);
      }
    });
  }

  ngOnInit(): void {
    this.getModulesHierarchy();

    this.fullStructureSubjectsService.getFullStructureSubjects().subscribe({
      next: (data) => {
        // this.fullStructure = data;
        this.fullStructure = this.sortItems(data);
        console.log('Structure Data : ', data);
      },
    });
  }

  getModulesHierarchy() {
    this.modulesHierarchyService.getFullStructure().subscribe({
      next: (data) => {
        console.log('***NEW Structure Data : ', data);
        this.newfullStructure = this.sortItems(data);
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

  goToClassDetail(id: string): void {
    this.router.navigate(['/classes', id]);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
    this.login();
  }
}
