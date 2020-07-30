import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://api-the-musical-kind-backend.azurewebsites.net/api';

  abstract resourceUrl: string;

  constructor(protected httpClient: HttpClient) { }

  get(url): Observable<T> {
    var to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  getCount(url): Observable<T> {
    var to = `${this.baseUrl}/${this.resourceUrl}/count?${url}`;

    console.log(`GET COUNT: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }
}
