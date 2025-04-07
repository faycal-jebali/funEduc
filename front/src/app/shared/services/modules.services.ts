import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private apiUrl = environment.apiUrl;
  private apiKey = '01234567890';

  constructor(private http: HttpClient) {}

  // Récupérer tous les modules
  getModules(): Observable<any[]> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey);
    return this.http.get<any[]>(`${this.apiUrl}/modules`, { headers });
  }

  // Créer un module
  createModule(module: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey);
    return this.http.post<any>(`${this.apiUrl}/modules`, module, { headers });
  }

  // Mettre à jour un module
  updateModule(id: any, module: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey);
    return this.http.put<any>(`${this.apiUrl}/modules/${id}`, module, {
      headers,
    });
  }

  // Supprimer un module
  deleteModule(id: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('x-api-key', this.apiKey);
    return this.http.delete<any>(`${this.apiUrl}/modules/${id}`, {
      headers,
    });
  }
}
