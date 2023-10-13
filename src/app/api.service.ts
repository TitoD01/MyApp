import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Método para obtener detalles de un anime por su ID
  getAnimeDetails(animeId: number): Observable<any> {
    const url = `${this.apiUrl}/posts/${animeId}`;
    return this.http.get(url);
  }

  // Método para obtener comentarios de un anime por su ID
  getComments(animeId: number): Observable<any[]> {
    const url = `${this.apiUrl}/comments?postId=${animeId}`;
    return this.http.get<any[]>(url);
  }
  
}
