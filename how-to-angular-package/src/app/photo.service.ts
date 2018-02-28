import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoResult } from './photoresult';

@Injectable()
export class PhotoService {
  readonly url  = "http://jsonplaceholder.typicode.com/photos"
  constructor(private http : HttpClient) { }

  get(search? : string){
    const url = search 
      ? `${this.url}?q=${search}`
      : this.url;
      return this.http.get<PhotoResult[]>(url)
  }

}
