import { faUser, faVolumeUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faDeezer } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeezerService } from "../../core/services/deezer.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deezer-search',
  templateUrl: './deezer-search.component.html'
})
export class DeezerSearchComponent implements OnInit {
  faUser = faUser;
  faVolumeUp = faVolumeUp;
  faDeezer = faDeezer;

  searchResults: any;
  searchForm: FormGroup;
  searchError: string;

  avgDuration: number;
  sumDuration: number;

  constructor(private readonly deezerService: DeezerService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: ['', Validators.required]
    });
  }

  onSearchSubmit() {
    const query = this.searchForm.value.query;
    this.deezerService.getSearchResults(query).subscribe((data: any) => {
      this.searchResults = data.result.data;
      this.calc(this.searchResults.length, this.searchResults);
    },
      (err) => {
        this.searchResults = null;
        this.searchError = '0 results';

        Swal.fire('Oops!', 'No results found 🙄', 'error');
      }
    );
  }

  calc(resultCount, durations) {
    const d = this.getDurations(durations);
    const sum = d.reduce((a, b) => a + b, 0);
    const average = sum / resultCount;

    this.avgDuration = average;
    this.sumDuration = sum;
  }

  getDurations(durations) {
    const ds: number[] = [];

    for (let val of durations) {
      ds.push(val.duration);
    }

    return ds;
  }
}
