import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SearchComponent } from '@yoerivd/angular-search';
import { PhotoService } from './photo.service';
import { PhotoResult } from './photoresult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  photos: PhotoResult[] = [];
  @ViewChild(SearchComponent) searchComponent : SearchComponent;

  constructor(private photoService : PhotoService){}
  ngAfterViewInit(): void {
    this.searchComponent
        .search$
        .switchMap(query => this.photoService.get(query))
        .subscribe(photos => this.photos = photos)
  }

}
