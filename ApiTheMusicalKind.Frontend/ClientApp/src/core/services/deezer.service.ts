import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";
import { DeezerRootObject } from "../models/deezer.model";

@Injectable({
  providedIn: 'root'
})
export class DeezerService extends BaseApiService<DeezerRootObject> {
  resourceUrl = 'api/Deezer?searchTerm=';

  constructor(private http: HttpClient) {
    super(http);
  }

  getSearchResults(query) {
    return this.getList(query);
  }
}
