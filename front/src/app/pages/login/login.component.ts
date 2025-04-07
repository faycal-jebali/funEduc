import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.authService.storeUser(
            response.access_token,
            response.user_details
          );
          this.router.navigate(['/my-space/sections']);
        },
        error: (error) => {
          this.errorMessage = 'Connexion échouée. Vérifiez vos identifiants.';
        },
      });
    }
  }
}
