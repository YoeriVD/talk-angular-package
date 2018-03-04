import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo-search-result',
  templateUrl: './photo-search-result.component.html',
  styleUrls: ['./photo-search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoSearchResultComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() imageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
