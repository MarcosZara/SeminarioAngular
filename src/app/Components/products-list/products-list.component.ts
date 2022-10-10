import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products : product[] = [{
    image: "/assets/img/vela-soja.jpeg",
    nombre: "Vela",
    tipo: "Cera de soja",
    precio: 100,
    stock: 5,
    cantidad:0,
  },
  {image: "/assets/img/vela-soja.jpeg",
  nombre: "Vela",
  tipo: "Cera de soja",
  precio: 150,
  stock: 0,
  cantidad:0,
  },
  {
  image: "/assets/img/vela-soja.jpeg",
    nombre: "Vela",
    tipo: "Cera de soja",
    precio: 120,
    stock: 10,
    cantidad:0,
  },]
  constructor() { }

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
