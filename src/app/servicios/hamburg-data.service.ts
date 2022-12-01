import { Injectable } from '@angular/core';
import { hamburg } from '../hamburg/hamburg';
import { Observable, observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://6345f85b745bd0dbd3747d7d.mockapi.io/SeminarioAngularApi/hamburg';
@Injectable({
  providedIn: 'root'
})
export class HamburgDataService {

  constructor( private http : HttpClient) { }
  public getAll(): Observable<hamburg[]> {
    return this.http.get<hamburg[]>(URL)
    .pipe(tap((products : hamburg[])=> products.forEach(hamburg => hamburg)));
   }
}
