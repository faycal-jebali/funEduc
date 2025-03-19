// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciceService {
  // private apiUrl = 'http://localhost:3000/api';
  /*  private apiUrlBack =
    'https://backend-8uu8kza53-creoxys-projects.vercel.app/api/exercices';*/

  private apiUrl = 'https://backend-teal-zeta.vercel.app/api';
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  getExercices(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.get(`${this.apiUrl}/exercices`, { headers });
  }

  // Créer un nouvel exercice
  createExercice(exercice: {
    type: string;
    question: string;
    correct_answer: string;
    explanation?: string;
    difficulty: string;
    created_by: string;
    section_id: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/exercices`, exercice, {
      headers: new HttpHeaders().set('x-api-key', '01234567890'),
    });
  }
}
