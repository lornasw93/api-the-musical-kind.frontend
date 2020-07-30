import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://localhost:44331/api/lyrics';

  constructor(protected httpClient: HttpClient) { }

  get(url): Observable<T> {
    console.log(`GET: ${this.baseUrl}?${url}`);
    return this.httpClient.get<T>(`${this.baseUrl}?${url}`);
  }
}
