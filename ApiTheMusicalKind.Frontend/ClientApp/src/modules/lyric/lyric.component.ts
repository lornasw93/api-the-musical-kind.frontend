import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LyricService } from "../../core/services/lyric.service";
import { SearchService } from "../../core/services/search.service";
import { Search } from "../../core/models/search.model";
import { faShareSquare, faArrowDown, faAlignLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { CustomLyric } from "../../core/models/lyric.model";

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html'
})
export class LyricComponent implements OnInit {
  lyricResults: CustomLyric;
  lyricCount: any;
  lyricsForm: FormGroup;

  constructor(private readonly service: LyricService,
    private readonly searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.lyricsForm = this.formBuilder.group({
      artist: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  onLyricSubmit() {
    const artist = this.lyricsForm.value.artist;
    const title = this.lyricsForm.value.title;

    this.service.getLyric(artist, title).subscribe(
      (data: CustomLyric) => {
        this.lyricResults = data;

        console.log(data);
      },
      err => console.error(err),
      () => console.log('Success')
    );

    this.service.getLyricCount(artist, title).subscribe((data: any) => {
      this.lyricCount = data;
    });
  };
}
