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
import { HttpClientModule } from '@angular/common/http';
import { HamburgComponent } from './hamburg/hamburg.component';
import { AderezosComponent } from './Components/aderezos/aderezos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CarritoComprasComponent,
    CandelaComponent,
    ContactoComponent,
    InputNumberComponent,
    HamburgComponent,
    AderezosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
