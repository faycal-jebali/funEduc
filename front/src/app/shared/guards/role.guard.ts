import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Ton service d'authentification

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Récupérer l'utilisateur actuel
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      // Récupérer les rôles autorisés à partir des données de la route
      const roles = route.data['roles'] as Array<string>; // On attend un tableau de rôles dans 'data' de la route

      // Vérifier si l'utilisateur a l'un des rôles autorisés
      if (roles && roles.includes(currentUser.role)) {
        return true; // L'utilisateur a un rôle autorisé
      }
    }

    // Si l'utilisateur n'est pas connecté ou n'a pas un rôle autorisé, rediriger vers la page d'accès refusé
    this.router.navigate(['/access-denied']);
    return false;
  }
}
