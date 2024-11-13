import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './menu/card/card.component';
import { ActReoComponent } from './act-reo/act-reo.component';
import { ActRdmComponent } from './act-rdm/act-rdm.component';
import { ActRnrComponent } from './act-rnr/act-rnr.component';
import { ActPIComponent } from './act-pi/act-pi.component';
import { ChiroInterludeComponent } from './chiro-interlude/chiro-interlude.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    ActReoComponent,
    ActRdmComponent,
    ActRnrComponent,
    ActPIComponent,
    ChiroInterludeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
