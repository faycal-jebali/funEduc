// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModulesHierarchyService {
  private apiUrl = environment.apiUrl;
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  getFullStructure(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey); // Ajouter la clé d'API
    return this.http.get(`${this.apiUrl}/lessons/modules-hierarchy`, {
      headers,
    });
  }
}
