import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from 'src/app/servicios/product-cart.service';
import { product } from '../products-list/product';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {
  shopList$: Observable<product[]>;
  constructor(private cart: ProductCartService) {
    this.shopList$= cart.shopList.asObservable();

   }
  ngOnInit(): void {
  }

}
