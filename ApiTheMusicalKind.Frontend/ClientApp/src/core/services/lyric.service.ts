import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';
import { LyricsRootObject } from "../models/lyric.model";

@Injectable({
  providedIn: 'root'
})
export class LyricService extends BaseApiService<LyricsRootObject> {
  resourceUrl: string = 'api/Lyrics';

  constructor(private http: HttpClient) {
    super(http);
  }

  getLyrics(artist, title) {
    return this.get(`artist=${artist}&title=${title}`);
  }
}
