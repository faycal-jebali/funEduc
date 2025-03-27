// src/app/exercice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExerciceSectionService {
  // private apiUrl = 'http://localhost:3000/api';
  // private apiUrl = 'https://backend-teal-zeta.vercel.app/api';
  private apiUrl = environment.apiUrl;
  private apiKey = '01234567890';
  private headers = new HttpHeaders({
    accept: '*/*',
    'x-api-key': '01234567890', // 🔹 Remplace par ta vraie clé API
  });

  constructor(private http: HttpClient) {}

  getExercicesBySection(
    classId?: string | null,
    filterId?: string | null
  ): Observable<any> {
    let params = new HttpParams();
    if (classId) params = params.set('class_id', classId);
    if (filterId) params = params.set('filter_id', filterId); // Un paramètre unique
    // if (subLessonId) params = params.set('subLesson_id', subLessonId);

    return this.http.get(`${this.apiUrl}/exercices-by-section`, {
      headers: this.headers,
      params,
    });
  }

  createSection(section: {
    title: string;
    description?: string;
    created_by?: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/exercices-by-section`, section, {
      headers: this.headers,
    });
  }

  createSectionWithExercices(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/section-exercice`, data, {
      headers: this.headers,
    });
  }

  updateSectionWithExercices(sectionId: any, data: any): Observable<any> {
    const requestBody = {
      sectionId: sectionId, // Ajoute sectionId ici
      ...data,
    };
    console.log('Données envoyées :', JSON.stringify(requestBody, null, 2));

    return this.http.put(
      `${this.apiUrl}/section-exercice?sectionId=${sectionId}`,
      requestBody,
      {
        headers: this.headers,
      }
    );
  }

  getSectionWithExercices(sectionId: string): Observable<any> {
    const url = `${this.apiUrl}/section-exercice?sectionId=${sectionId}`;
    const headers = new HttpHeaders({
      accept: '*/*',
      'x-api-key': '01234567890',
    });

    return this.http.get<any>(url, { headers });
  }

  deleteSectionWithExercices(sectionId: string): Observable<any> {
    const url = `${this.apiUrl}/section-exercice?sectionId=${sectionId}`;
    const headers = new HttpHeaders({
      accept: '*/*',
      'x-api-key': '01234567890',
    });

    return this.http.delete<any>(url, { headers });
  }

  getAllSections(filters: any = {}): Observable<any> {
    let params = new HttpParams();

    // Ajoute chaque filtre si défini
    if (filters.category) params = params.set('category', filters.category);
    if (filters.class_id) params = params.set('class_id', filters.class_id);
    if (filters.course) params = params.set('course', filters.course);

    return this.http.get(`${this.apiUrl}/section-exercice`, {
      headers: this.headers,
      params,
    });
  }
}
