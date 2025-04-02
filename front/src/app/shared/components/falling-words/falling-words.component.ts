import { ChangeDetectorRef, Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common'; // Import pour CommonModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-falling-words', // Déclare le composant comme standalone
    imports: [CommonModule], // Ajoute CommonModule
    templateUrl: './falling-words.component.html',
    styleUrls: ['./falling-words.component.css'],
    animations: [
        trigger('fallingAnimation', [
            transition('* => *', [
                animate('4s ease-in', keyframes([
                    style({ transform: 'translateY(-100%)', offset: 0 }),
                    style({ transform: 'translateY(500px)', offset: 1 }),
                ])),
            ]),
        ]),
    ]
})
export class FallingWordsComponent {
  wordsFeminin = ['chatte', 'fille', 'voiture', 'maison'];
  wordsMasculin = ['chat', 'garçon', 'vélo', 'chien'];
  allWords = [...this.wordsFeminin, ...this.wordsMasculin];
  score = 0;
  potFemininePosition = 100; // Position du pot féminin
  potMasculinePosition = 400; // Position du pot masculin
  potSize = 100; // Taille des pots

  constructor(private cdr: ChangeDetectorRef) {}

  // Génère une position horizontale aléatoire
  getRandomLeftPosition(): number {
    return Math.random() * 500; // Espace de 500px pour que le mot tombe
  }

  // La position verticale de départ sera toujours en haut, avec une valeur négative pour être hors de l'écran
  getRandomTopPosition(): number {
    return Math.random() * -200; // Les mots commencent au-dessus de l'écran
  }

  // Fonction pour déterminer si le mot est dans le bon pot
  onWordDropped(event: any, word: string): void {
    const potFeminineCenter = this.potFemininePosition + this.potSize / 2;
    const potMasculineCenter = this.potMasculinePosition + this.potSize / 2;

    // Vérification si le mot est dans le pot féminin
    if (
      event.clientX >= this.potFemininePosition &&
      event.clientX <= this.potFemininePosition + this.potSize &&
      this.wordsFeminin.includes(word)
    ) {
      console.log('Mot féminin mis dans le pot féminin:', word);
      this.score += 1;
    }
    // Vérification si le mot est dans le pot masculin
    else if (
      event.clientX >= this.potMasculinePosition &&
      event.clientX <= this.potMasculinePosition + this.potSize &&
      this.wordsMasculin.includes(word)
    ) {
      console.log('Mot masculin mis dans le pot masculin:', word);
      this.score += 1;
    } else {
      console.log('Erreur! Mot tombé à côté du pot:', word);
      this.score -= 1;
    }
    this.resetGame();
    this.cdr.detectChanges(); // Déclenche manuellement la détection des changements
  }

  // Réinitialisation des mots et mélange pour un nouveau tour
  resetGame(): void {
    this.allWords = [...this.wordsFeminin, ...this.wordsMasculin].sort(
      () => Math.random() - 0.5
    );
  }
}
