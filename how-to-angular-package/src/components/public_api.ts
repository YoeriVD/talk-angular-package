import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoSearchResultComponent } from './photo-search-result/photo-search-result.component';
import { SearchComponent } from './search/search.component';


export * from  './photo-search-result/photo-search-result.component';
export * from  './search/search.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [PhotoSearchResultComponent, SearchComponent],
  exports: [PhotoSearchResultComponent, SearchComponent]
})
export class ComponentsModule { }
