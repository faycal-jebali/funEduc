import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SpeakerButtonComponent } from '../speaker-button/speaker-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'app-dictation',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        SpeakerButtonComponent,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FlexLayoutModule,
    ],
    templateUrl: './dictation.component.html',
    styleUrls: ['./dictation.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DictationComponent),
            multi: true,
        },
    ]
})
export class DictationComponent implements ControlValueAccessor {
  @Input() phrase: string = 'test'; // Phrase dictée
  dictationControl = new FormControl(''); // ✅ FormControl pour gérer la valeur
  isCorrect: boolean | null = null;
  onTouched: () => void = () => {};

  constructor() {
    this.dictationControl.valueChanges.subscribe((value) => {
      this.isCorrect =
        value?.trim().toLowerCase() === this.phrase.toLowerCase();
    });
  }

  readPhrase() {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(this.phrase);
      utterance.lang = 'fr-FR';
      speechSynthesis.speak(utterance);
    } else {
      alert('Synthèse vocale non supportée par ce navigateur.');
    }
  }

  writeValue(value: string): void {
    this.dictationControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.dictationControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.dictationControl.disable();
    } else {
      this.dictationControl.enable();
    }
  }
}
