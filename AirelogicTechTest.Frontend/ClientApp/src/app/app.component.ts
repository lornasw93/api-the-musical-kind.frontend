import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from "../core/services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  query: string;
  results: any;

  constructor(private activatedRoute: ActivatedRoute,
    private readonly service: SearchService) {
    this.query = this.activatedRoute.snapshot.params.query;
  }

  ngOnInit() {
    this.service.getResults(this.query).subscribe((data: any) => {
      this.results = data.result.value;
    });
  }
}
