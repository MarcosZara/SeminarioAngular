import { product } from '../Components/products-list/product';
import { Observable, observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://6345f85b745bd0dbd3747d7d.mockapi.io/SeminarioAngularApi/products';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor( private http : HttpClient) {
   }

   public getAll(): Observable<product[]> {
    return this.http.get<product[]>(URL)
    .pipe(tap((products : product[])=> products.forEach(product => product.cantidad=0)));
   }
}
