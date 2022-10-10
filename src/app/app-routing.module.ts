import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandelaComponent } from './Components/candela/candela.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component: CandelaComponent
    
  },{
    path: 'candela',
    component: CandelaComponent
  },{
    path:'contacto',
    component: ContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
