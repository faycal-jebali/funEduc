import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Accès refusé</h1>
    <p>Vous n'avez pas l'autorisation d'accéder à cette page.</p>
  `,
})
export class AccessDeniedComponent {}
