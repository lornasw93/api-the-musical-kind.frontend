import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LyricService } from "../../core/services/lyric.service";
import { SearchService } from "../../core/services/search.service";
import { Search } from "../../core/models/search.model";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faShareSquare = faShareSquare;

  lyricResults: any;
  lyricCount: any;
  lyricsForm: FormGroup;

  searchResults: Search;
  searchForm: FormGroup;

  showGeneral: boolean;
  showSongLyrics: boolean;

  constructor(private readonly service: LyricService,
    private readonly searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.lyricsForm = this.formBuilder.group({
      artist: ['', Validators.required],
      title: ['', Validators.required]
    });

    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  }

  get formControls() {
    return this.lyricsForm.controls;
  }

  onLyricSubmit() {
    const artist = this.lyricsForm.value.artist;
    const title = this.lyricsForm.value.title;

    this.service.getLyric(artist, title).subscribe((data: any) => {
      this.lyricResults = data;
    });

    this.service.getLyricCount(artist, title).subscribe((data: any) => {
      this.lyricCount = data;
    });
  };

  onSearchSubmit() {
    const searchTerm = this.searchForm.value.searchTerm;

    this.searchService.getResults(searchTerm).subscribe((data: Search) => {
      this.searchResults = data;
    });
  };
}
