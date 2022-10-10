import { Component, Input, OnInit } from '@angular/core';
import { product } from '../products-list/product';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  
  constructor(
  ) { }
  
  @Input()
  product!: product;

  ngOnInit(): void {
  }

  sumarCantidad(product: product){
    if(product.stock>0){
      product.cantidad ++;
      product.stock--;
    }
  }
  restarCantidad(product: product){
    if(product.stock>=0 && product.cantidad >0){
      product.cantidad --;
      product.stock++;
    }

  }
}
