// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciceService {
  private apiUrl = 'http://localhost:3000/api/exercices';
  /*  private apiUrlBack =
    'https://backend-8uu8kza53-creoxys-projects.vercel.app/api/exercices';*/

  private apiUrlBack = 'https://backend-teal-zeta.vercel.app/api/exercices';
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  getExercices(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.get(this.apiUrlBack, { headers });
  }
}
