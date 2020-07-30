import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from "../../core/services/search.service";
import { Search } from "../../core/models/search.model";
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html'
})
export class GeneralComponent implements OnInit {
  faShareSquare = faShareSquare;

  searchResults: Search;
  searchForm: FormGroup;

  constructor(private readonly searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  }

  onSearchSubmit() {
    const searchTerm = this.searchForm.value.searchTerm;

    this.searchService.getResults(searchTerm).subscribe((data: Search) => {
      this.searchResults = data;
    });
  };
}
