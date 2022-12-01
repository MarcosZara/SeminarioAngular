import { ProductDataService } from '../../servicios/product-data.service';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ProductCartService} from 'src/app/servicios/product-cart.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products : product[] = [];

  constructor(
    private cart:ProductCartService ,
    private productDataService :ProductDataService  ) {
  }

  ngOnInit(): void {
    this.productDataService.getAll()
    .subscribe(products => this.products=products)

  }

  addCart(product: product):void{
    this.cart.addToCart(product);
   // product.stock -= product.cantidad;
    product.cantidad=0;
  }
  sumarCantidad(product: product){
    if(product.stock>0){
      product.cantidad ++;
      /* product.stock--; */
    }
  }
  restarCantidad(product: product){
    if(product.stock>=0 && product.cantidad >0){
      product.cantidad --;
      product.stock++;
    }

  }
}
