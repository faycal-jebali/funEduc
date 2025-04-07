import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Si l'utilisateur est authentifié (loggé)
    if (this.authService.isAuthenticated()) {
      // Rediriger vers la page d'accueil ou le tableau de bord (par exemple)
      this.router.navigate(['/']); // Change l'URL selon ton cas
      return false; // Empêche l'accès à la page login
    }
    return true; // Si l'utilisateur n'est pas authentifié, il peut accéder à la page
  }
}
