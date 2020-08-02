import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LyricService } from "../../core/services/lyric.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html'
})
export class LyricComponent implements OnInit {
  lyricResults: any;
  lyricsForm: FormGroup;
  lyricError: string;

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

    this.service.getLyrics(artist, title).subscribe((data) => {
      this.lyricResults = data;
    },
      (err) => {
        this.lyricResults = null;
        this.lyricError = '0 results';

        Swal.fire('Oops!', 'No lyrics found 🙄', 'error');
      }
    );
  };
}
