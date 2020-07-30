import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class LyricService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getLyric(artist, title) {
    return this.get(`artist=${artist}&title=${title}`);
  }

  getLyricCount(artist, title) {
    return this.getCount(`artist=${artist}&title=${title}`);
  }
}
