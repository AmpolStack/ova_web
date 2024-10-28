import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ActReoComponent } from './act-reo/act-reo.component';

const routes: Routes = [
  {path:'', component:MenuComponent},
  {path:'REO', component:ActReoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
