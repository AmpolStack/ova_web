import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ActReoComponent } from './act-reo/act-reo.component';
import { ActRdmComponent } from './act-rdm/act-rdm.component';
import { ActRnrComponent } from './act-rnr/act-rnr.component';
import { ActPIComponent } from './act-pi/act-pi.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',  component:MenuComponent},
  {path:'home/REO', component:ActReoComponent},
  {path: 'home/RDM', component:ActRdmComponent},
  {path:'home/RNR', component:ActRnrComponent},
  {path:'home/PI', component:ActPIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
