import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { BaseUrl } from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class BeerHttpServive {

  constructor(private http:HttpClient) { }


  getAll(query?:any): Observable<any> {
    return this
      .http
      .get(BaseUrl+'/beers', {params: query});
  }

  getRandomBeer(): Observable<any> {
    return this
      .http
      .get(BaseUrl+'/beers/random');
  }
}
