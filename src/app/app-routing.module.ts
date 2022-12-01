import { Component, NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AderezosComponent } from './Components/aderezos/aderezos.component';
import { CandelaComponent } from './Components/candela/candela.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { HamburgComponent } from './hamburg/hamburg.component';

const routes: Routes = [
  {
    path: '',
    component: CandelaComponent
  },{
    path: 'candela',
    component: CandelaComponent
  },{
    path:'contacto',
    component: ContactoComponent
  },{
    path:'aderezos',
    component: AderezosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
