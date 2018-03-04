import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new FormControl();
  search$: Observable<string>;
  constructor() { }

  ngOnInit() {
    this.search$ =
      this.search
        .valueChanges
        .debounceTime(300)
        .filter((v: string) => !v || v.length > 1)
        .distinctUntilChanged();
  }

}
