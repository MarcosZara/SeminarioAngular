import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../Components/products-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _shopList: product[]=[];
  constructor() { }
  shopList : BehaviorSubject<product []>= new BehaviorSubject(this._shopList);

  addToCart(product: product){
    let item = this._shopList.find((v1) => v1.nombre == product.nombre);
    if(!item) {
      this._shopList.push({...product});
    }else{
      item.cantidad += product.cantidad;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }
}
