import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth/signin`; // Changez cette URL pour correspondre à votre API Next.js
  private apiKey = environment.apiKey;
  private currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('currentUser')!)
  );
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.post<any>(this.apiUrl, { email, password }, { headers });
  }

  storeUserToken(token: string) {
    localStorage.setItem('auth_token', token);
    this.currentUserSubject.next({ token });
  }

  storeUser(token: string, user: any) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated() {
    return !!this.currentUserValue;
  }
}
