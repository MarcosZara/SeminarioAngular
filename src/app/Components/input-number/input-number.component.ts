import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  cantidad!: number;
  @Input()
  stock!: number;
  @Output()
  stockChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  sumarCantidad(){
    if(this.stock>0){
      this.cantidad ++;
      this.stock--;
      this.stockChange.emit(this.stock);
      this.cantidadChange.emit(this.cantidad);
    }
  }
  restarCantidad(){
    if(this.stock>=0 && this.cantidad >0){
      this.cantidad --;
      this.stock++;
      this.stockChange.emit(this.stock);
      this.cantidadChange.emit(this.cantidad);
    }

  }
}
