import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillTheBlanksComponent } from './shared/components/fill-the-blanks/fill-the-blanks.component';
import { FillTheBlanksByTypeComponent } from './shared/components/fill-the-blanks-by-type/fill-the-blanks-by-type.component';
import { AppComponent } from './app.component';
import { SectionFormComponent } from './pages/exercices-section/section-form/section-form.component';
import { ExerciceFormComponent } from './pages/exercices-section/exercice-form/exercice-form.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Page d'accueil
  { path: 'task', component: FillTheBlanksComponent },
  { path: 'task-by-type', component: FillTheBlanksByTypeComponent },
  // { path: '', redirectTo: 'classes', pathMatch: 'full' },
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
    path: 'classes',
    loadComponent: () =>
      import('./pages/classes-list/classes-list.component').then(
        (m) => m.ClassesListComponent
      ),
  },
  {
    path: 'classes/:id',
    loadComponent: () =>
      import('./pages/class-detail/class-detail.component').then(
        (m) => m.ClassDetailComponent
      ),
  },
  {
    path: 'classes/:classId/subjects',
    loadComponent: () =>
      import('./pages/subjects-list/subjects-list.component').then(
        (m) => m.SubjectsListComponent
      ),
  },
  {
    path: 'classes/:classId/subjects/:subjectId',
    loadComponent: () =>
      import('./pages/subject-detail/subject-detail.component').then(
        (m) => m.SubjectDetailComponent
      ),
  },
  {
    path: 'classes/:classId/subjects/:subjectId/lesson/:lessonId',
    loadComponent: () =>
      import('./pages/subject-detail/subject-detail.component').then(
        (m) => m.SubjectDetailComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
