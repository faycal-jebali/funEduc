import {
  Component,
  Input,
  forwardRef,
  OnInit,
  signal,
  computed,
  effect,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

export interface ModuleNode {
  id: string;
  title: string;
  children?: ModuleNode[];
}

@Component({
  selector: 'app-module-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  template: `
    <div *ngFor="let level of levels(); let i = index">
      <mat-form-field
        appearance="outline"
        class="w-full mb-2"
        *ngIf="level && level.length > 0"
      >
        <mat-label>Sélection niveau {{ i + 1 }}</mat-label>
        <mat-select
          [value]="
            selectedPath[i] && selectedPath[i].id ? selectedPath[i].id : ''
          "
          (selectionChange)="onSelect($event.value, i)"
        >
          <mat-option *ngFor="let module of level" [value]="module.id">
            {{ module.title }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModuleSelectorComponent),
      multi: true,
    },
  ],
})
export class ModuleSelectorComponent implements OnInit, ControlValueAccessor {
  private _modules: ModuleNode[] = [];
  private pendingValue: string | null = null;

  @Input()
  set modules(value: ModuleNode[]) {
    this._modules = value;
    console.log('✅ Modules chargés :', value);

    // Réessayer d’appliquer la valeur sélectionnée
    if (this.pendingValue) {
      this.rebuildSelectedPath(this.pendingValue);
      this.pendingValue = null;
    }
  }
  get modules(): ModuleNode[] {
    return this._modules;
  }

  selectedPath: ModuleNode[] = [];
  moduleControl = new FormControl('');

  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modules'] && !changes['modules'].firstChange) {
      console.log('Modules mis à jour :', this.modules);
      this.moduleControl.setValue('');
    }
  }
  private rebuildSelectedPath(selectedId: string) {
    const findPath = (
      nodes: ModuleNode[],
      path: ModuleNode[] = []
    ): ModuleNode[] | null => {
      for (const node of nodes) {
        if (node.id === selectedId) return [...path, node];
        if (node.children) {
          const found = findPath(node.children, [...path, node]);
          if (found) return found;
        }
      }
      return null;
    };

    const path = findPath(this.modules);
    if (path) {
      this.selectedPath = path;
      this.moduleControl.setValue(selectedId, { emitEvent: false });
      this.onChange(selectedId); // propage au parent
    }
  }

  levels() {
    const levels: ModuleNode[][] = [];
    let currentLevel = this.modules;

    for (const node of this.selectedPath) {
      levels.push(currentLevel);
      const found = currentLevel.find((m) => m.id === node.id);
      currentLevel = found?.children || [];
    }

    levels.push(currentLevel);
    return levels;
  }

  onSelect(selectedId: string, levelIndex: number) {
    const levelModules =
      levelIndex === 0
        ? this.modules
        : this.selectedPath[levelIndex - 1].children || [];
    const selectedModule = levelModules.find((m) => m.id === selectedId);
    if (!selectedModule) return;

    // Truncate path to current level
    this.selectedPath = this.selectedPath.slice(0, levelIndex);
    this.selectedPath[levelIndex] = selectedModule;

    // If no children: it's a leaf → propagate value
    if (!selectedModule.children || selectedModule.children.length === 0) {
      this.onChange(selectedModule.id);
    } else {
      this.onChange(null); // waiting deeper selection
    }
  }

  // ControlValueAccessor
  writeValue(obj: string | null): void {
    if (!obj) {
      this.selectedPath = [];
      this.moduleControl.setValue('', { emitEvent: false });
      return;
    }

    if (!this.modules || this.modules.length === 0) {
      this.pendingValue = obj;
    } else {
      this.rebuildSelectedPath(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
