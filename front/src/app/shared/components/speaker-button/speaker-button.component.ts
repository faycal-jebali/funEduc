import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-speaker-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './speaker-button.component.html',
  styleUrls: ['./speaker-button.component.css'],
})
export class SpeakerButtonComponent {
  @Input() text = '';

  readPhrase() {
    if (!this.text) {
      return;
    }

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(this.text);
      utterance.lang = 'fr-FR';
      speechSynthesis.speak(utterance);
    } else {
      alert('Synthèse vocale non supportée par ce navigateur.');
    }
  }
}
