import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Page non trouvée !</h2>`,
})
export class NotFoundComponent {}
