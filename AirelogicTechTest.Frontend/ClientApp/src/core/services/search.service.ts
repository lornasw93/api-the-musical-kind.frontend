import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseApiService<object> {
  resourceUrl: string = 'search';

  constructor(private http: HttpClient) {
    super(http);
  }

  getResults(searchTerm) {
    return this.get(`searchTerm=${searchTerm}`);
  } 
}
