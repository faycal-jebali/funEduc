import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { environment } from 'src/environments/environment';
import {
  buildModuleTree,
  flattenTree,
  Module,
} from '../../../shared/utils/modules.utils';

@Component({
  selector: 'app-module-crud',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './module-crud.component.html',
})
export class ModuleCrudComponent implements OnInit {
  form!: FormGroup;
  modules: any[] = [];
  modulesFlat: { id: string; title: string }[] = [];
  selectedModuleId: string | null = null;

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      parent_id: [null],
    });
    this.loadModules();
  }

  loadModules() {
    // this.http.get<any[]>(`${this.apiUrl}/modules`).subscribe((data) => {
    //   this.modules = data;
    // });

    this.http.get<Module[]>(`${this.apiUrl}/modules`).subscribe((data) => {
      this.modules = data;
      const tree = buildModuleTree(data);
      this.modulesFlat = flattenTree(tree);
      console.log('modules : ', this.modules);
      console.log('modulesFlat : ', this.modulesFlat);
    });
  }

  save() {
    if (this.selectedModuleId) {
      this.http
        .put(`${this.apiUrl}/modules/${this.selectedModuleId}`, this.form.value)
        .subscribe(() => {
          this.reset();
        });
    } else {
      this.http
        .post(`${this.apiUrl}/modules`, this.form.value)
        .subscribe(() => {
          this.reset();
        });
    }
  }

  edit(module: any) {
    this.selectedModuleId = module.id;
    const selectedModule = this.modules.find((item) => item.id === module.id);
    this.form.patchValue(selectedModule);
  }

  delete(id: string) {
    this.http.delete(`${this.apiUrl}/modules/${id}`).subscribe(() => {
      this.reset();
    });
  }

  reset() {
    this.form.reset();
    this.selectedModuleId = null;
    this.loadModules();
  }
}
