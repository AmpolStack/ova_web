import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ActReoComponent } from './act-reo/act-reo.component';
import { ActRdmComponent } from './act-rdm/act-rdm.component';
import { ActRnrComponent } from './act-rnr/act-rnr.component';

const routes: Routes = [
  {path:'', component:MenuComponent},
  {path:'REO', component:ActReoComponent},
  {path: 'RDM', component:ActRdmComponent},
  {path:'RNR', component:ActRnrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
