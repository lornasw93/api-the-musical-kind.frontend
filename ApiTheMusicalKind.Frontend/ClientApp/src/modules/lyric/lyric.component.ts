import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LyricService } from "../../core/services/lyric.service";

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html'
})
export class LyricComponent implements OnInit {
  lyricResults: any;
  lyricCount: any;
  lyricsForm: FormGroup;

  constructor(private readonly service: LyricService,
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

    this.service.getLyrics(artist, title).subscribe((data: any) => {
      this.lyricResults = data;
    });
  };
}
