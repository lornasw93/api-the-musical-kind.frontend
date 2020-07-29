import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  baseUrl = 'https://localhost:44331/api';

  constructor(protected httpClient: HttpClient) { }

  get(url): Observable<T> {
    console.log(`GET: ${url}`);
    return this.httpClient.get<T>(`${this.baseUrl}/${url}`);
  }

  //getAll(url): Observable<T[]> {
  //  console.log(`GET ALL: ${url}`);
  //  return this.httpClient.get<T[]>(`${this.baseUrl}/${url}`);
  //}

  //getCount(url): Observable<number> {
  //  console.log(`GET COUNT: ${url}`);
  //  return this.httpClient.get<number>(`${this.baseUrl}/${url}`);
  //}

  //getChart(url): Observable<any> {
  //  console.log(`GET CHART: ${url}`);
  //  return this.httpClient.get<any>(`${this.baseUrl}/${url}`);
  //}
}
