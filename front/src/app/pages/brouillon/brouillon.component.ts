import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallingWordsComponent } from '../../shared/components/falling-words/falling-words.component';

@Component({
    selector: 'app-brouillon',
    imports: [CommonModule, FallingWordsComponent],
    templateUrl: './brouillon.component.html',
    styleUrls: ['./brouillon.component.css']
})
export class BrouillonComponent {}
