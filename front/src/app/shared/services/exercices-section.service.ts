// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciceSectionService {
  // private apiUrl = 'http://localhost:3000/api';
  private apiUrl = 'https://backend-teal-zeta.vercel.app/api';
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  getExercicesBySection(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.get(`${this.apiUrl}/exercices-by-section`, { headers });
  }

  createSection(section: {
    title: string;
    description?: string;
    created_by?: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/exercices-by-section`, section, {
      headers: new HttpHeaders().set('x-api-key', '01234567890'),
    });
  }
}
