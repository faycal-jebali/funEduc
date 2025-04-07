import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FillTheBlanksComponent } from './shared/components/fill-the-blanks/fill-the-blanks.component';
import { FillTheBlanksByTypeComponent } from './shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrouillonComponent } from './pages/brouillon/brouillon.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuard } from './shared/guards/role.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'task', component: FillTheBlanksComponent },
  { path: 'task-by-type', component: FillTheBlanksByTypeComponent },
  { path: 'devoirs', component: HomeComponent }, // Il semble que cette route pointe vers la même page que Home ?
  { path: 'brouillon', component: BrouillonComponent }, // Il semble que cette route pointe vers la même page que Home ?
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },

  // 📌 Gestion des sections et exercices
  {
    path: 'section-form',
    loadComponent: () =>
      import(
        './pages/exercices-section/section-form/section-form.component'
      ).then((m) => m.SectionFormComponent),
  },
  {
    path: 'exercice-form',
    loadComponent: () =>
      import(
        './pages/exercices-section/exercice-form/exercice-form.component'
      ).then((m) => m.ExerciceFormComponent),
  },
  {
    path: 'section-exercice-form',
    loadComponent: () =>
      import(
        './pages/exercices-section/section-exercices-form/section-exercices-form.component'
      ).then((m) => m.SectionExercicesFormComponent),
  },
  {
    path: 'section-exercice-form/:sectionId',
    loadComponent: () =>
      import(
        './pages/exercices-section/section-exercices-form/section-exercices-form.component'
      ).then((m) => m.SectionExercicesFormComponent),
  },

  // 📌 Espace personnel
  {
    path: 'my-space',
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
    children: [
      {
        path: 'sections',
        loadComponent: () =>
          import('./pages/my-space/sections-list/sections-list.component').then(
            (m) => m.SectionsListComponent
          ),
      },
      {
        path: 'classes',
        loadComponent: () =>
          import('./pages/my-space/class-crud/class-crud.component').then(
            (m) => m.ClassCrudComponent
          ),
      },
      {
        path: 'modules',
        loadComponent: () =>
          import('./pages/my-space/module-crud/module-crud.component').then(
            (m) => m.ModuleCrudComponent
          ),
      },
    ],
  },

  // 📌 Gestion des classes et matières
  {
    path: 'classes',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/classes-list/classes-list.component').then(
            (m) => m.ClassesListComponent
          ),
      },
      {
        path: ':classId',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/subject-detail/subject-detail.component').then(
                (m) => m.SubjectDetailComponent
              ),
          },
          {
            path: 'module',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./pages/subjects-list/subjects-list.component').then(
                    (m) => m.SubjectsListComponent
                  ),
              },
              {
                path: ':moduleId',
                loadComponent: () =>
                  import(
                    './pages/subject-detail/subject-detail.component'
                  ).then((m) => m.SubjectDetailComponent),
              },
            ],
          },
          {
            path: 'subjects',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./pages/subjects-list/subjects-list.component').then(
                    (m) => m.SubjectsListComponent
                  ),
              },
              {
                path: ':subjectId',
                loadComponent: () =>
                  import(
                    './pages/subject-detail/subject-detail.component'
                  ).then((m) => m.SubjectDetailComponent),
              },
            ],
          },
          {
            path: 'lesson/:lessonId',
            children: [
              {
                path: 'category/:categoryId',
                children: [
                  {
                    path: '',
                    loadComponent: () =>
                      import(
                        './pages/subject-detail/subject-detail.component'
                      ).then((m) => m.SubjectDetailComponent),
                  },
                  {
                    path: 'sublesson/:subLessonId',
                    loadComponent: () =>
                      import(
                        './pages/subject-detail/subject-detail.component'
                      ).then((m) => m.SubjectDetailComponent),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent, // Composant pour afficher un message d'accès refusé
  },

  // 📌 Page 404
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
