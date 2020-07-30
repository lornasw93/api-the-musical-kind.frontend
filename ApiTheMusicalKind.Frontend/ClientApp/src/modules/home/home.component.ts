import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LyricService } from "../../core/services/lyric.service";
import { SearchService } from "../../core/services/search.service";
import { Search } from "../../core/models/search.model";
import { faShareSquare, faArrowDown, faAlignLeft, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faShareSquare = faShareSquare;
  faArrowDown = faArrowDown;
  faAlignLeft = faAlignLeft;
  faUsers = faUsers;

  lyricResults: any;
  lyricCount: any;
  lyricsForm: FormGroup;

  searchResults: Search;
  searchForm: FormGroup;

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

  onLyricSubmit() {
    const artist = this.lyricsForm.value.artist;
    const title = this.lyricsForm.value.title;

    this.service.getLyric(artist, title).subscribe(
      (data: any) => { this.lyricResults = data; },
      err => console.error(err),
      () => console.log('Success')
    );

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
