import { Component, OnInit, Input } from '@angular/core';
import { LyricService } from "../../../core/services/lyric.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  results: string;
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

  get formControls() {
    return this.lyricsForm.controls;
  }

  onSubmit() {

    const artist = this.lyricsForm.value.artist;
    const title = this.lyricsForm.value.title;

    this.service.getLyric(artist, title).subscribe((data: any) => {
      this.results = data;
    });

    //var data = {
    //  name: this.contactForm.value.name,
    //  email: this.contactForm.value.email,
    //  message: this.contactForm.value.message
    //};

  };
}
