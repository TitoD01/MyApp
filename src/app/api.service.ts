import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAnimeDetails(animeId: number): Observable<any> {
    const url = `${this.apiUrl}/posts/${animeId}`;
    return this.http.get(url);
  }

  getComments(animeId: number): Observable<any[]> {
    const url = `${this.apiUrl}/comments?postId=${animeId}`;
    return this.http.get<any[]>(url);
  }
  
}
