import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://api-the-musical-kind-backend.azurewebsites.net';
  //baseUrl = 'https://localhost:44331';

  abstract resourceUrl: string;

  constructor(protected httpClient: HttpClient) { }

  getList(url): Observable<T[]> {
    var to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`GET LIST: ${to}`);
    return this.httpClient.get<T[]>(`${to}`);
  }

  get(url): Observable<T> {
    var to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`GET: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }

  count(url): Observable<T> {
    var to = `${this.baseUrl}/${this.resourceUrl}?${url}`;

    console.log(`COUNT: ${to}`);
    return this.httpClient.get<T>(`${to}`);
  }
}
