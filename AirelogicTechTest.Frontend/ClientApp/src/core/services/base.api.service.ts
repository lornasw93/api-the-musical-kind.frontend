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
    var to = `${this.baseUrl}?${url}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  getCount(url): Observable<T> {
    var to = `${this.baseUrl}/count?${url}`;

    console.log(`GET COUNT: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }
}
