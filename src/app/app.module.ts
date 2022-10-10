import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { CarritoComprasComponent } from './Components/carrito-compras/carrito-compras.component';
import { CandelaComponent } from './Components/candela/candela.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { InputNumberComponent } from './Components/input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CarritoComprasComponent,
    CandelaComponent,
    ContactoComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
