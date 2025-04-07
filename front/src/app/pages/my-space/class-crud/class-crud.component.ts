import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-class-crud',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './class-crud.component.html',
  styleUrls: ['./class-crud.component.scss'],
})
export class ClassCrudComponent implements OnInit {
  form: FormGroup;
  displayedColumns: string[] = ['title', 'alias', 'actions'];
  classes: any[] = [];
  editingId: string | null = null;
  private apiUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      alias: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.http.get(`${this.apiUrl}/classes/classes`).subscribe((res: any) => {
      this.classes = res;
    });
  }

  submit() {
    if (this.form.invalid) return;

    const values = this.form.value;

    if (this.editingId) {
      this.http
        .put(`${this.apiUrl}/classes/${this.editingId}`, values)
        .subscribe(() => {
          this.resetForm();
          this.loadClasses();
        });
    } else {
      // const newClass = { ...values, id: uuidv4() };
      const newClass = { ...values };
      this.http
        .post(`${this.apiUrl}/classes/classes`, newClass)
        .subscribe(() => {
          this.resetForm();
          this.loadClasses();
        });
    }
  }

  edit(classItem: any) {
    this.editingId = classItem.id;
    this.form.patchValue(classItem);
  }

  delete(id: string) {
    this.http.delete(`${this.apiUrl}/classes/${id}`).subscribe(() => {
      this.loadClasses();
    });
  }

  resetForm() {
    this.form.reset();
    this.editingId = null;
  }
}
