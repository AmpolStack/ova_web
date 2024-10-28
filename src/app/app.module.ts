import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './menu/card/card.component';
import { ActReoComponent } from './act-reo/act-reo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    ActReoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
