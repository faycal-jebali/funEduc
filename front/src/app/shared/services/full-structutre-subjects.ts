// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullStructureSubjectsService {
  private apiUrl = 'http://localhost:3000/api';

  // private apiUrl = 'https://backend-teal-zeta.vercel.app/api';
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  getFullStructureSubjects(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.get(`${this.apiUrl}/lessons/full-structure`, { headers });
  }
}
