import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ActReoComponent } from './act-reo/act-reo.component';
import { ActRdmComponent } from './act-rdm/act-rdm.component';

const routes: Routes = [
  {path:'', component:MenuComponent},
  {path:'REO', component:ActReoComponent},
  {path: 'RDM', component:ActRdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
